import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext);

    const userLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }
    return (
        <section className=' sticky top-0 z-10'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/blog'}>Blog</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl" href='/'>Crazy Travle</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <Link data-tip={user.displayName} className="tooltip tooltip-bottom"><img className='h-10 w-10 rounded-full' src={user?.photoURL} alt="" /></Link>
                            <button onClick={userLogOut} className='btn btn-warning hover:text-white ml-2 duration-300 hover:bg-rose-600'>LogOut</button></>
                            :
                            <button className='btn btn-primary' >Login</button>
                    }
                </div>
            </div>
        </section>
    );
};

export default Nav;