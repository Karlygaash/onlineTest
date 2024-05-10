import { RiDeleteBin6Line } from "react-icons/ri";
import '../../styles/Test.css'
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
import { ConfirmDialog } from 'primereact/confirmdialog';
import 'primereact/resources/themes/md-light-indigo/theme.css'
import { toast } from "react-toastify";

const Test = () => {
    const [test, setTest] = useState([])
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false)
    const [idDelete, setIdDelete] = useState()
    const [isTrue, setIsTrue] = useState(false)
    const [search, setSearch] = useState("")

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

    const deleteTest = () => {
		const token = localStorage.getItem("t_token")

		axios
			.delete(`http://77.240.39.57/ai/quiz/${idDelete}`,{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then(result => {
				console.log(result.data)
                setIsTrue(true)
                toast.success("Успешно удалился")

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
            <div className='head__rectangle'><div className='head__circle'></div></div>
            <div className="section__header">
                <h1>Тесты</h1>
                <button onClick={()=>navigate('/admin/test/add')} className='orange__button'>Создать тест</button>
            </div>
            <div className="container">
                {test.length === 0 ? "У вас пока нет теста, создайте его." : 
                <div className='test__container'>
                    {test.map(e=>(
                    <div key={e.id} className='test__item'>
                        <h3 onClick={()=>navigate(`/admin/test/${e.id}`)}>{e.title}</h3>
                        <p onClick={()=>navigate(`/admin/test/${e.id}`)}>{e.countOfQuestion} вопросов</p>
                        <div className="test__icons">
                            <RiDeleteBin6Line onClick={()=>{setIdDelete(e.id); setVisible(true)}}/>
                        </div>
                    </div>
                    ))}
                </div>
                }
            </div>
            <ConfirmDialog visible={visible} 
                    onHide={() => setVisible(false)} 
                    header="Удалить этот тест?" 
                    reject={()=>setVisible(false)} 
                    accept={() => deleteTest()}
                    acceptLabel="Удалить"
                    rejectLabel="Отмена"
                />
        </div>
    );
};

export default Test;