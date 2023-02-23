import React from 'react'
import Facebook from '../../assets/facebook.svg'
import Github from '../../assets/github.svg'
import Instagram from '../../assets/instagram.svg'
import Robot from '../../assets/robot.png'
import logoKo from '../../assets/logo.png'
import './index.css'

export const Login = () => {
    return (<div className='container ko'>
        <div className='img-login ko'>
            <img src={Robot} alt="Robot keyner" className='robot' />
        </div>

        <div className="login ko">
            <div>
                <img src={logoKo} alt="logo keyner" width={'80'} />
            </div>
            <div className="lo">
                <div className="input-group">
                    <input type="email" className='inp' />
                    <label className='lab   '>Ingresa tu correo electronico</label>
                </div>
                <input type="password" placeholder='......' />
                <label>Ingresa tu contraseña</label>
                <div>
                    <ul className="social-icons">
                        <li><a className="facebook" href="#"><i className="fa fa-facebook">
                            <img src={Facebook} alt=".." />
                        </i></a></li>
                        <li><a className="twitter" href="#"><i className="fa fa-twitter">
                            <img src={Github} alt=".." />
                        </i></a></li>
                        <li><a className="dribbble" href="#"><i className="fa fa-dribbble">
                            <img src={Instagram} alt=".." />
                        </i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>)
}

export const Logo = () => {

    // const fondo = document.getElementById("left")
    // // fondo.style.backgroundImage = "url(../../assets/robot.png"


    return (<div className='fondo'>
        <div className='box-form'>
            <div className="left" id='left'>

                <div className="overlay">
                    <h1>Un nuevo comienzo</h1>
                    <p>Aquí encontrarás un mundo inexplorado y con nosotros encontrarás las herramientas para sobrevivir y seguir evolucionando
                    </p>
                    <span>
                        <p>iniciar sesión con las redes sociales</p>
                        <a id='first-child' href="https://mp-keyner.github.io/Portafolio/" target={'_blank'}><img src={Facebook} /></a>
                        <a href="https://mp-keyner.github.io/Portafolio/" target={'_blank'}><img src={Instagram} /></a>
                        <a href="https://mp-keyner.github.io/Portafolio/" target={'_blank'}><img src={Github} /></a>
                    </span>
                </div>
            </div>

            <div className="right">
                <img src={logoKo} alt="logo de keyner " className='logo' />
                <h5>iniciar sesión</h5>

                <p>¿No tienes una cuenta?... no pasa nada campeón <a href="#">Crea tu cuenta,</a> se tarda menos de un minuto</p>
                <div className="inputs">
                    <input type="text" placeholder="nombre de usuario..." />
                    <br />
                    <input type="password" placeholder="contraseña.." />
                </div>

                <br></br>

                <div className="remember-me--forget-password">
                    <label>
                        <input type="checkbox" name="item" />
                        <span className="text-checkbox">Recuérdame</span>
                    </label>
                    <p>¿Se te olvido la contraseña?</p>
                </div>

                <br />
                <button>iniciar sesión</button>
            </div>
        </div>
    </div >)
}

