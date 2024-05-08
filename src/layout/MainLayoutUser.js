import '../styles/MainLayout.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from "react-router-dom"

import Favicon from '../images/icons/logo.svg'
import { IoBookOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";


const MainLayoutUser = () =>{
	const navigate = useNavigate()

	const removeItem = () =>{
	    localStorage.removeItem("dm_token")
		navigate("/login")
	}

    useEffect(() => {
	}, [])
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
                                <FaUsers className='menu__icon'/>
								Мои результаты
							</NavLink>
						</li>
					</ul>
				</nav>

                <div className='log_out'> 
                    <BiLogOutCircle className='logout__icon'/>
					<p>Выйти</p>
                </div>
			</aside>

			<main className="app__content">
				<Outlet />
			</main>
		</div>
    );
};

export default MainLayoutUser;