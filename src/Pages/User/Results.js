import { CiSearch } from "react-icons/ci";
import '../../styles/Students.css'

const Results = () => {
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
                <table>
                    <thead>
                        <tr>
                            <th>
                                №
                            </th>
                            <th>
                                Название теста
                            </th>
                            <th>
                                Количество вопросов
                            </th>
                            <th>
                                Балл
                            </th>
                            <th>
                                Оценка
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>История</td>
                            <td>40</td>
                            <td>30</td>
                            <td>75%</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>История</td>
                            <td>40</td>
                            <td>30</td>
                            <td>75%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Results;