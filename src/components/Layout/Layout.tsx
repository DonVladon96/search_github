import {NavLink, Outlet} from 'react-router-dom';
import './Layout.css'


const Layout = () => {
    return (
        <>
            <header className='header'>
                <NavLink className='header__link' to="/">Home</NavLink>
                <NavLink className='header__link' target='_blank' to="https://mobile-pay-app.vercel.app/">About Me</NavLink>
            </header>

            <main className="container">
                <Outlet />
            </main>

            <footer className="container">&copy;2024 Петров Владислав</footer>
        </>
    )
}

export {Layout}
