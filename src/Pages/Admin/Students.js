import { CiSearch } from "react-icons/ci";
import '../../styles/Students.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Students = () => {
    const [isTrue, setIsTrue] = useState(false)
    const [search, setSearch] = useState("")
    const [test, setTest] = useState([])
    const navigate = useNavigate()
    
    const getTest = () => {
		const token = localStorage.getItem("t_token")

		axios
			.get(`http://77.240.39.57/ai/quiz/admin?search=${search}`,{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then(result => {
				setTest(result.data.result)
			})
			.catch(error => {
				console.log(error)
			})
	}

    useEffect(()=>{
        getTest()
    }, [isTrue, search])

    return(
        <div className="section">
            <div className='section__head'>
                <div className="search">
                <input 
                        type="text"
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        placeholder="Поиск"/>
                    <CiSearch className="search__icon"/>
                </div>
            </div>
            <div className="section__header">
                <h1>Посмотреть результаты</h1>
            </div>
            <div className="container">
                {test.length === 0 ? "У вас пока нет теста, создайте его." : 
                <div className='test__container'>
                    {test.filter(item=>item.passedCount>0).map(e=>(
                    <div key={e.id} className='test__item'>
                        <h3 onClick={()=>navigate(`/admin/students/${e.id}`)}>{e.title}</h3>
                        <p onClick={()=>navigate(`/admin/students/${e.id}`)}>Пройдено: <b>{e.passedCount}</b> студентов</p>
                        <div className="test__icons">
                            <p onClick={()=>navigate(`/admin/students/${e.id}`)}>Посмотреть</p>
                        </div>
                    </div>
                    ))}
                </div>
                }
            </div>
        </div>
    );
};

export default Students;