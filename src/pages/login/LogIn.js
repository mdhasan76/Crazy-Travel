import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../shared/AuthProvider';

const LogIn = () => {
    const { googleLogIn, setUser, logIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    let from = location?.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        logIn(email, password)
            .then(res => {
                setUser(res.user);
                navigate(from, { replace: true })
                console.log(res.user)

            })
            .catch(err => setError(err.message))
    }

    //Google LogIn 
    const google = () => {
        googleLogIn()
            .then(res => {
                console.log(res.user)
                setUser(res.user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                setError(err.message)
            })
    }
    return (
        <div className="hero bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  my-10">
                <form onSubmit={handleLogin} className="card-body mb-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <p className='text-sm'>
                                you have no account?
                                <Link to={'/register'} className="label-text-alt link link-hover"> Register Now</Link>
                            </p>
                        </label>

                    </div>
                    {
                        error && <p className='text-rose-600 '>{error}</p>
                    }
                    <div className="form-control mt-3">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className='p-7 pt-0'>
                    <div className="divider mt-0">OR</div>
                    <div className="form-control">
                        <button onClick={google} className="btn btn-primary  hover:bg-red-400 duration-300 border-none">Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;