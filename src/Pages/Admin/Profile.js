import { useNavigate } from 'react-router-dom';
import Ava from '../../images/icons/avaa.jpg'
import '../../styles/Profile.css'

const Profile = () => {
    const navigate = useNavigate()

    return(
        <div className="section">
            <div className="section__header">
                <h1>Мой профиль</h1>
            </div>
            <div className="container">
                <div className="profile__container">
                    <h4>Улдана Романовна</h4>
                    <p>karla@gmail.com</p>
                    <img src={Ava} alt=""/>
                    <div className='profile__buttons'>
                        <button onClick={()=>navigate('/admin/profile/edit')} className='orange__button'>Изменить профиль</button>
                        <button onClick={()=>navigate('/admin/profile/password')} className='orange__button'>Изменить пароль</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;