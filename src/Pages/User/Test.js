import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPencil } from "react-icons/fa6";
import '../../styles/Test.css'
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Test = () => {
    const navigate = useNavigate()
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
                    <div className='test__item'>
                        <h3>History</h3>
                        <p>30 вопросов</p>
                        <div className="test__icons">
                            <p>Пройти</p>
                        </div>
                    </div>
                    <div className='test__item'>
                        <h3>History</h3>
                        <p>30 вопросов</p>
                        <div className="test__icons">
                            <p>Пройти</p>
                        </div>
                    </div>
                    <div className='test__item'>
                        <h3>History</h3>
                        <p>30 вопросов</p>
                        <div className="test__icons">
                            <p>Пройти</p>
                        </div>
                    </div>
                    <div className='test__item'>
                        <h3>HistoryHistoryHistory HistoryHistory</h3>
                        <p>30 вопросов</p>
                        <div className="test__icons">
                            <p>Пройти</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;