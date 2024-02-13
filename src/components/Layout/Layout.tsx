import {NavLink, Outlet} from 'react-router-dom';
import './Layout.css'


const Layout = () => {
    return (
        <>
            <header className='header'>
                <NavLink className='header__link' to="/">Home</NavLink>
                <NavLink className='header__link' to="/posts">Blog</NavLink>
                <NavLink className='header__link' to="/about">About</NavLink>
            </header>

            <main className="container">
                <Outlet />
            </main>

            <footer className="container">&copy;©2024 Петров Владислав</footer>
        </>
    )
}

export {Layout}
