import '../styles/MainLayout.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { ConfirmDialog } from 'primereact/confirmdialog';
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import Favicon from '../images/icons/logo.svg'
import { IoBookOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";

const MainLayout = () =>{
	const navigate = useNavigate()
	const [visible, setVisible] = useState(false)

	const removeItem = () =>{
	    localStorage.removeItem("t_token")
		navigate("/admin/login")
	}

    useEffect(() => {
		const token = localStorage.getItem("t_token")

		if (!token) {
			navigate("/admin/login")
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
								to="/admin/test"
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
								to="/admin/profile"
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
								to="/admin/students"
								className={({ isActive }) =>
									`navigation__link ${
										isActive
											? "navigation__link--active"
											: ""
									}`
								}>
                                <FaUsers className='menu__icon'/>
								Студенты
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

export default MainLayout;