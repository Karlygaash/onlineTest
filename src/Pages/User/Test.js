import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPencil } from "react-icons/fa6";
import '../../styles/Test.css'
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
import { ConfirmDialog } from 'primereact/confirmdialog';
import 'primereact/resources/themes/lara-light-indigo/theme.css'

const Test = () => {
    const [tests, setTests] = useState([])
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false)
    const [idQuiz, setIdQuiz] = useState()

    const getTest = () => {
		const token = localStorage.getItem("t_token")

		axios
			.get("http://77.240.39.57/ai/quiz/user",{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then(result => {
				setTests(result.data.result)
                console.log(result.data.result)
			})
			.catch(error => {
				console.log(error)
			})
	}
    
    useEffect(()=>{
        getTest()
    }, [])

    return(
        <div className="section">
            <div className='section__head'>
                <div className="search">
                    <input placeholder="Поиск"/>
                    <CiSearch className="search__icon"/>
                </div>
            </div>
            <div className='head__rectangle'><div className='head__circle'></div></div>
            <div className="section__header">
                <h1>Тесты</h1>
            </div>
            <div className="container">
                <div className='test__container'>
                    {tests.length === 0 ? "Здесь пока пусто" : <>
                    {tests.map(e=>(
                        <div className='test__item'>
                            <h3 onClick={()=> {setIdQuiz(e.id); setVisible(true)}}>{e.title}</h3>
                            <p onClick={()=> {setIdQuiz(e.id); setVisible(true)}}>{e.countOfQuestion} вопросов</p>
                            <div className="test__icons">
                                {e.isPassed === true ? <p className="">Пройдено</p>:
                                <p onClick={()=> {setIdQuiz(e.id); setVisible(true)}}>Начать тест</p>
                                }
                            </div>
                        </div>
                    ))}
                    </>}
                </div>
            </div>
            <ConfirmDialog visible={visible} 
                    onHide={() => setVisible(false)} 
                    header="Начинать тест?" 
                    reject={()=>setVisible(false)} 
                    accept={() => navigate(`/user/test/${idQuiz}`)}
                    acceptLabel="Да"
                    rejectLabel="Нет"
                />
        </div>
    );
};

export default Test;