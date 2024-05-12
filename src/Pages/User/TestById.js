import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { ConfirmDialog } from 'primereact/confirmdialog';
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import { toast } from "react-toastify";

const TestById = () => {
    const {quizId} = useParams()
    const [test, setTest] = useState({})
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([]);
    const [point, setPoint] = useState(0)
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()
    const [isPassed, setIsPassed] = useState()

    const handleAnswer = (questionId, answer) => {
        //setAnswers({ ...answers, [questionId]: answer });
        const newArray = [...answers]
        newArray.push(answer)
        setAnswers(newArray)
    };

    const EndTest = () => {
        let p=0
        {questions.map((e, index)=> (
            <>
            {console.log(answers[index], e.correctAnswer)}
            {e.correctAnswer === answers[index] ? p++ : ""}
            </>
            ))}
        if(p>0){
            quizSubmit(p)
        }
    }

    const getTest = () => {
		const token = localStorage.getItem("t_token")

		axios
			.get(`http://77.240.39.57/ai/quiz/user/${quizId}`,{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then(result => {
				setTest(result.data.result)
                setQuestions(result.data.result.questions)
                setIsPassed(result.data.result.isPassed)
			})
			.catch(error => {
				console.log(error)
			})
	}

    const quizSubmit = (p) => {
        const token = localStorage.getItem("t_token")

		axios
			.post(`http://77.240.39.57/ai/quiz/submit/${quizId}`,{
                "points" : p,
                answers
            },{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then(result => {
				console.log(result)
                setPoint(p)
                setVisible(true)
			})
			.catch(error => {
				console.log(error)
			})
    }
    
    useEffect(()=>{
        getTest()
        if(isPassed===true){
            navigate('/user/test')
            toast.error("Вы уже прошли")
        }
    },[isPassed])
    
    return(
        <div className="section">
            <div className="section__header">
                <h1>{test.title}</h1>
            </div>
            <div className="container">
                <div>
                <p>Количество вопросов: {test.countOfQuestion}</p>
                <div className="testById">
                    <ol>
                        {questions.map((e, index)=>(
                        <li>
                            <h4>{e.title}</h4>
                            <div className="test__answers">
                                {e.variants.map(j=>(
                                    <div className="flex">
                                        <input 
                                            type="radio" 
                                            value={j.title}
                                            onChange={()=>handleAnswer(index+1,j.title)}
                                            className="radio"
                                        />
                                        <p>{j.title}</p>
                                    </div>
                                ))}  
                            </div>
                        </li>
                        ))}
                    </ol>
                    <button onClick={()=>EndTest()} className="orange__button">Завершить</button>
                
                </div>
                </div>
            </div>
            <ConfirmDialog visible={visible} 
                    onHide={() => setVisible(false)} 
                    header={`Вы получили ${point} из ${test.countOfQuestion}`} 
                    accept={() => navigate(`/user/test`)}
                    reject={() => navigate(`/user/test`)}
                    acceptLabel="Да"
                    rejectLabel="."
                />
        </div>
    );
};

export default TestById;