import '../styles/MainLayout.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { PiMedalBold } from "react-icons/pi";
import Favicon from '../images/icons/logo.svg'
import { IoBookOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { ConfirmDialog } from 'primereact/confirmdialog';
import 'primereact/resources/themes/md-light-indigo/theme.css'

const MainLayoutUser = () =>{
	const navigate = useNavigate()
	const [visible, setVisible] = useState(false)

	const removeItem = () =>{
	    localStorage.removeItem("t_token")
		navigate("/user/login")
	}

    useEffect(() => {
		const token = localStorage.getItem("t_token")

		if (!token) {
			navigate("/user/login")
		}
	}, [navigate])

    return(
        <div className="mainLayout">
			<aside className="app__sidebar">
                <div className='logo_main'>
                    <img src={Favicon} alt=""/>
                    <p>OnlineTest</p>
                </div>
				<nav className="navigation">
					<ul className="navigation__items">
						<li className="navigation__item">
							<NavLink
								to="/user/test"
								className={({ isActive }) =>
									`navigation__link ${
										isActive
											? "navigation__link--active"
											: ""
									}`
								}>
								<IoBookOutline className='menu__icon'/>
								Тесты
							</NavLink>
						</li>
						<li className="navigation__item">
							<NavLink
								to="/user/profile"
								className={({ isActive }) =>
									`navigation__link ${
										isActive
											? "navigation__link--active"
											: ""
									}`
								}>
								<IoIosContact className='menu__icon'/>
								Мой профиль
							</NavLink>
						</li>

                        <li className="navigation__item">
							<NavLink
								to="/user/results"
								className={({ isActive }) =>
									`navigation__link ${
										isActive
											? "navigation__link--active"
											: ""
									}`
								}>
                                <PiMedalBold className='menu__icon'/>
								Мои результаты
							</NavLink>
						</li>
					</ul>
				</nav>

                <div onClick={()=>setVisible(true)} className='log_out'> 
                    <BiLogOutCircle className='logout__icon'/>
					<p>Выйти</p>
                </div>
				<ConfirmDialog visible={visible} 
                    onHide={() => setVisible(false)} 
                    header="Выйти из системы?" 
                    reject={()=>setVisible(false)} 
                    accept={() => removeItem()}
                    acceptLabel="Да, выйти"
                    rejectLabel="Отмена"
                />
			</aside>

			<main className="app__content">
				<Outlet />
			</main>
		</div>
    );
};

export default MainLayoutUser;