import { CiSearch } from "react-icons/ci";
import '../../styles/Students.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'

const Results = () => {
    const [tests, setTests] = useState([])
    const navigate = useNavigate()

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
            <div className="section__header">
                <h1>Мои результаты</h1>
            </div>
            <div className="container">
                <div className='test__container'>
                    {tests.filter(item=>item.isPassed===true).length === 0 ? "Здесь пока пусто": <>
                    {tests.filter(item=>item.isPassed===true).map(e=>(
                        <div className='test__item'>
                            <h3>{e.title}</h3>
                            <p>{e.countOfQuestion} вопросов</p>
                            <div className="test__icons">
                                <p onClick={()=>navigate(`/user/results/${e.id}`)}>Посмотреть результаты</p>
                            </div>
                        </div>
                    ))}
                    </>}
                </div>
            </div>
        </div>
    );
}

export default Results;