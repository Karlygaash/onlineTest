import '../../styles/TestById.css'
import { BsCircleFill } from "react-icons/bs";

const TestById = () => {
    return(
        <div className="section">
            <div className="section__header">
                <h1>История</h1>
                <button className='orange__button'>Добавить тест</button>
            </div>
            <div className="container">
                <p>Количество вопросов: 30</p>
                <div className="testById">
                    <ol>
                        <li>
                            <h4>Какое самое высокое горное образование на Земле?</h4>
                            <div className="test__answers">
                                    <p><BsCircleFill className='marker'/>Эверест</p>
                                    <p><BsCircleFill className='marker'/>Килиманджаро</p>
                                    <p><BsCircleFill className='marker'/>Аконкагуа</p>
                                    <p><BsCircleFill className='marker'/>Аконкагуа</p>  
                            </div>
                        </li>
                        <li>
                            <h4>Какое самое высокое горное образование на Земле?</h4>
                            <div className="test__answers">
                                    <p><BsCircleFill className='marker'/>Эверест</p>
                                    <p><BsCircleFill className='marker'/>Килиманджаро</p>
                                    <p><BsCircleFill className='marker'/>Аконкагуа</p>
                                    <p><BsCircleFill className='marker'/>Аконкагуа</p>  
                            </div>
                        </li>
                        <li>
                            <h4>Какое самое высокое горное образование на Земле?</h4>
                            <div className="test__answers">
                                    <p><BsCircleFill className='marker'/>Эверест</p>
                                    <p><BsCircleFill className='marker'/>Килиманджаро</p>
                                    <p><BsCircleFill className='marker'/>Аконкагуа</p>
                                    <p><BsCircleFill className='marker'/>Аконкагуа</p>  
                            </div>
                        </li>
                        <li>
                            <h4>Какое самое высокое горное образование на Земле?</h4>
                            <div className="test__answers">
                                    <p><BsCircleFill className='marker'/>Эверест</p>
                                    <p><BsCircleFill className='marker'/>Килиманджаро</p>
                                    <p><BsCircleFill className='marker'/>Аконкагуа</p>
                                    <p><BsCircleFill className='marker'/>Аконкагуа</p>  
                            </div>
                        </li>
                        <li>
                            <h4>Какое самое высокое горное образование на Земле?</h4>
                            <div className="test__answers">
                                    <p><BsCircleFill className='marker'/>Эверест</p>
                                    <p><BsCircleFill className='marker'/>Килиманджаро</p>
                                    <p><BsCircleFill className='marker'/>Аконкагуа</p>
                                    <p><BsCircleFill className='marker'/>Аконкагуа</p>  
                            </div>
                        </li>
                    </ol>
                    
                </div>
            </div>
        </div>
    );
};

export default TestById;