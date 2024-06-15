import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Searchbar from '../Searchbar/Searchbar';


export default function Navbar() {
    const user = JSON.parse(localStorage.getItem('users'));
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear('users');
        navigate("/Login")
    }
    // navList Data
    const navList = (
        <ul className="flex space-x-3 text-blue font-medium text-md px-5 uppercase">
            {/* Home */}
            <li>
                <Link to={'/'}><b >Home</b></Link>
            </li>

            {/* All Product */}
            <li>
                <Link to={'/allproduct'}><b>All Product</b></Link>
            </li>

            {/* Signup */}
            {!user ? <li>
                <Link to={'/signup'}><b>Signup</b></Link>
            </li> : ""}

            {/* Login */}
            {!user ? <li>
                <Link to={'/Login'}><b>Login</b></Link>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li>
                <Link to={'/User-Dashbord'}><b>{user.name}</b></Link></li>}

            {/* Admin */}
            {user?.role === "admin" && <li>
                <Link to={'/Admin-Dashbord'}><b>Admin</b></Link>
            </li>}

            {/* logout */}
            {user && <li className=" cursor-pointer" onClick={logout}>
                <b>Logout</b></li>}

            {/* Cart */}
            <li>
                <Link to={'/cart'}>
                    <b> Cart(0)</b>
                </Link>
            </li>
        </ul>
    )
    return (
        <nav className="bg-teal sticky top-0">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                {/* left  */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                        <h2 className=" font-bold text-blue text-2xl text-center">E-ALIEN</h2>
                    </Link>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                {/* Search Bar  */}
                <Searchbar />
            </div>
        </nav>
    )
}






