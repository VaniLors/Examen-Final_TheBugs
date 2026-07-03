import React from 'react'
import '../styles/Login.css'
function Login (){
    return(
        <>
        <div className='contenedor-login'>
            <div>
                <div className='contenedor-login-1'>
                    <header className='header-login'>
                        <h5>login</h5>
                    </header>
                    <section className='section-login'>
                        <h2>ZONA EN CONSTRUCCION</h2>
                        <div>Nombre de Usuario: <input type="text" /></div>
                        <div>Contraseña: <input className='password-input-login' type='text'/></div>
                        <h2>ZONA EN CONSTRUCCION</h2>
                        <button className='btn-login-a'>holaaa</button>
                    </section>
                    <footer className='footer-login'>
                        <h1 className='text-footer-1'>Hoy habia 53 visitantes (366 click a subpaginas) ¡Aqui en esta pagina!</h1>
                        <h5>Copiright @ Boris Veliz M. todos los derechos reservados</h5>
                    </footer>
                </div>
            </div>
        </div>
        </>
    )


}

export default Login;