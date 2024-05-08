import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { MdOutlineMail } from "react-icons/md";
import '../../styles/Login.css'
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import {ReactComponent as Favicon} from '../../images/icons/logo.svg'
import {ReactComponent as Rectangle} from '../../images/icons/Rectangle_1.svg'
import {ReactComponent as RectangleSmall} from '../../images/icons/Rectangle.svg'
import { RiLock2Line } from "react-icons/ri";

const Login = () =>{
    const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmitClicked = (e) => {
		e.preventDefault()

		axios
			.post("http://185.100.67.103/api/login/admin", {
				email,
				password,
			})
			.then(result => {
				const token = result.data.access_token

				localStorage.setItem("dm_token", token)
                navigate("/")
			})
			.catch(error => {
				toast.error(error.response.data.errors[0].message)
			})
	}

    useEffect(() => {
		const token_ = localStorage.getItem("dm_token")

		if (token_) {
			navigate("/")
		}
	}, [navigate])

    return(
    <div className="login">
        <Rectangle className="rectangle"/>
        <RectangleSmall className="rectangle_2"/>
        <form onSubmit={handleSubmitClicked} className="form">
                <div className="form__header">
                    <Favicon className="login__logo"/>
                    <h3>Вход для преподователей</h3>
                </div>
                <div className="form_box">
                    <label className="form_label">Введите e-mail</label>
                    <div className="form__input">
                        <MdOutlineMail className="login__icon"/>
                        <input
                            className="input"
                            name="email"
                            type="email"
                            minLength={4}
                            maxLength={50}
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form_box">
                    <label for="password" className="form-label">Введите пароль</label>
                    <div className="form__input">
                        <RiLock2Line className="login__icon"/>
                        <input className="input"
                            name="password"
                            type="password"
                            minLength={4}
                            maxLength={50}
                            placeholder="Пароль"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="login__p auth__p">
                    <p>Забыли пароль?</p>
                </div>
                <button className="button" type="submit">Войти</button>
            </form>
    </div>)
};

export default Login;