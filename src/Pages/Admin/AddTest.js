import { useState } from 'react';
import '../../styles/AddTest.css'
import axios from 'axios'
import { BsCircleFill } from "react-icons/bs";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddTest = () => {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [countOfQuestion, setCountOfQuestion] = useState()
    const [questions, setQuestions] = useState([])
    const navigate = useNavigate()

    const generateQuiz = () => {
        const token = localStorage.getItem("t_token")
        const formDate = new FormData();
        formDate.append("text", text);
        formDate.append("count", countOfQuestion)
		axios
			.post("http://77.240.39.57/ai/quiz/generate", formDate, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then(result => {
                console.log(result.data.result)
                setQuestions(result.data.result)
			})
			.catch(error => {
				console.log(error)
			})
    }

    const createQuiz = () => {
        const token = localStorage.getItem("t_token")
      
		axios
			.post("http://77.240.39.57/ai/quiz", {
                countOfQuestion,
                questions,
                title
            }, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then(result => {
                console.log(result.data)
                toast.success("Успешно создался")
                setQuestions([])
                navigate('/admin/test')
			})
			.catch(error => {
				console.log(error)
			})
    }

    return(
        <div className="section">
            <div className="section__header">
                <h1>Создать Тест</h1>
            </div>
            <div className="container">
                <div className="add__test-form">
                    <div className="form__input">
                        <input
                            className="input"
                            type="text"
                            minLength={4}
                            maxLength={50}
                            placeholder="Название теста"
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form__input number">
                        <input
                            className="input"
                            type="number"
                            minLength={4}
                            maxLength={50}
                            placeholder="Кол.вопросов"
                            value={countOfQuestion}
                            onChange={(e)=>setCountOfQuestion(e.target.valueAsNumber)}
                        />
                    </div>
                </div>
                <div className="form__textarea">
                    <textarea
                        className="textarea"
                        type="number"
                        placeholder="Поставьте текста"
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                    />
                </div>
                <div className="section__header">
                    <div></div>
                    <button onClick={()=>generateQuiz()} className='orange__button'>Создать Тест</button>
                </div>
                {questions.length === 0 ? "" :
                <div className='question__section'>
                    {questions.map((e, index) => (
                    <div className='question'>
                        <p className='question__title'>{e.id}. {e.title} </p>
                        {e.variants.map((j, i)=>(
                            <div>
                                <p><BsCircleFill className='marker'/>{j.title}</p>
                            </div>
                        ))}
                        <p>Правильный ответ: {e.correctAnswer}</p>
                    </div>
                    ))}
                </div>
                }
                {questions.length === 0 ? "" :
                <div className="section__header">
                    <div></div>
                    <button onClick={()=>createQuiz()} className='orange__button'>Отправить</button>
                </div>
                }
            </div>
        </div>
    );
};

export default AddTest;