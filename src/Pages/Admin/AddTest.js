import '../../styles/AddTest.css'
const AddTest = () => {
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
                        />
                    </div>
                    <div className="form__input">
                        <input
                            className="input"
                            type="number"
                            minLength={4}
                            maxLength={50}
                            placeholder="Количество вопросов"
                        />
                    </div>
                </div>
                <div className="form__textarea">
                    <textarea
                        className="textarea"
                        type="number"
                        placeholder="Поставьте текста"
                    />
                </div>
                <div className="section__header">
                    <div></div>
                    <button className='orange__button'>Создать Тест</button>
                </div>
            </div>
        </div>
    );
};

export default AddTest;