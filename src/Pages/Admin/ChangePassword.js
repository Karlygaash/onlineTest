import { useNavigate } from 'react-router-dom';
import '../../styles/Profile.css'

const ChangePassword = () => {
    const navigate = useNavigate()
    return(
        <div className="section">
            <div className="section__header">
                <h1>Мой профиль</h1>
            </div>
            <div className="container">
                <div className="profile__container">
                    <h4>Изменить пароль</h4>
                    <div className='profile__input'>
                    <div className="form__input">
                        <input
                            className="input"
                            type="password"
                            minLength={4}
                            maxLength={50}
                            placeholder="Введите новый пароль"
                        />
                    </div>
                    <div className="form__input">
                        <input
                            className="input"
                            type="password"
                            minLength={4}
                            maxLength={50}
                            placeholder="Повторить пароль"
                        />
                    </div>
                    </div>
                    <div className='profile__buttons'>
                        <button className='orange__button'>Изменить</button>
                        <button onClick={()=>navigate('/admin/profile')} className='orange__button'>Назад</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;