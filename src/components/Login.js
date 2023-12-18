import React, { useEffect, useState } from 'react';
import { FaChessRook, FaEye, FaEyeSlash, FaGoogle, FaFacebookF } from 'react-icons/fa';

const Login = () => {

    // const MAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;
    const [showPass, setShowPass] = useState(false);
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [enableLogin, setEnableLogin] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const handleShowPass = () => {
        setShowPass(!showPass);
    };

    const handleLogSign = () => {
        setIsLogin(!isLogin);
    }

    useEffect(() => {
        if (mail.length > 0 && pass.length > 8) {
            setEnableLogin(true);
        } else {
            setEnableLogin(false);
        }
    }, [mail, pass]);

    return (
        <div className='w-full min-h-screen max-h-fit bg-black text-white flex justify-center items-center overflow-hidden'>
            <div className="relative w-full max-w-screen-2xl min-h-screen flex flex-col justify-center items-center">
                <div className="absolute right-0 top-0 px-10 py-7 w-full flex justify-between items-center">
                    <div className="logo flex justify-center items-center font-bold text-2xl mb-4">
                        <FaChessRook className='mr-1' />CM
                    </div>
                    <div className="text-base cursor-pointer border-b border-black hover:border-white transition-all duration-500" onClick={handleLogSign}>
                        {
                            isLogin ? "Create Account" : "Login"
                        }
                    </div>
                </div>
                <div className={isLogin ? "absolute top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] opacity-100 transition-all duration-500" : "absolute top-[100%] right-[100%]  opacity-100 transition-all duration-500"}>
                    <div className="flex flex-col justify-center items-center">
                        <div className="logo flex justify-center items-center font-bold text-2xl mb-4">
                            <FaChessRook className='mr-1' />CM
                        </div>
                        <h1 className='font-bold text-2xl'>
                            Log into ChessMate
                        </h1>
                    </div>
                    <div className="flex max-md:flex-col justify-center items-center mt-8">
                        <form action="#" className="flex flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-start m-3">
                                <label htmlFor="email" className="text-base">
                                    Email Address
                                </label>
                                <input
                                    type="text"
                                    placeholder='example@gmail.com'
                                    className="w-60 bg-black border-b border-gray focus:outline-none active:outline-none focus:border-white transition-colors duration-500 py-3"
                                    onChange={e => setMail(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start m-3 relative">
                                <label htmlFor="password" className="text-base">
                                    Password
                                </label>
                                <input
                                    type={showPass ? "text" : "password"}
                                    placeholder='Password'
                                    className="w-60 bg-black border-b border-gray focus:outline-none active:outline-none focus:border-white transition-colors duration-500 py-3"
                                    onChange={(e) => setPass(e.target.value)}
                                />
                                {showPass ? <FaEyeSlash className='absolute right-0 bottom-4 cursor-pointer' onClick={handleShowPass} /> : <FaEye className='absolute right-0 bottom-4 cursor-pointer' onClick={handleShowPass} />}
                            </div>
                            <button className={enableLogin ? "w-60 m-3 bg-white text-black transition-all duration-500 p-3 cursor-pointer" : "w-60 m-3 bg-gray text-white transition-all duration-500 p-3 cursor-not-allowed"} disabled={!enableLogin}>
                                Login
                            </button>
                        </form>
                        <div className="mx-5 flex md:flex-col justify-center items-center">
                            <div className="w-1 max-md:w-20 max-md:h-1 h-20 bg-gray">
                            </div>
                            <div className="m-3">
                                OR
                            </div>
                            <div className="w-1 max-md:w-20 max-md:h-1 h-20 bg-gray">
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="w-60 m-3 bg-black border flex justify-center items-center hover:bg-gray transition-all duration-500 p-3 cursor-pointer">
                                <FaGoogle className='mr-3' /> Continue with Google
                            </div>
                            <div className="w-60 m-3 bg-black border flex justify-center items-center hover:bg-gray transition-all duration-500 p-3 cursor-pointer">
                                <FaFacebookF className='mr-3' /> Continue with Facebook
                            </div>
                        </div>
                    </div>
                </div>
                <div className={!isLogin ? "absolute top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] opacity-100 transition-all duration-500" : "absolute top-[100%] right-[100%]  opacity-100 transition-all duration-500"}>
                    <div className="flex flex-col justify-center items-center">
                        <div className="logo flex justify-center items-center font-bold text-2xl mb-4">
                            <FaChessRook className='mr-1' />CM
                        </div>
                        <h1 className='font-bold text-2xl'>
                            Create Account
                        </h1>
                    </div>
                    <div className="flex max-md:flex-col justify-center items-center mt-8">
                        <form action="#" className="flex flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-start m-3">
                                <label htmlFor="firstname" className="text-base">
                                    Firstname
                                </label>
                                <input
                                    type="text"
                                    placeholder='John'
                                    className="w-60 bg-black border-b border-gray focus:outline-none active:outline-none focus:border-white transition-colors duration-500 py-3"
                                    onChange={e => setMail(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start m-3">
                                <label htmlFor="lastname" className="text-base">
                                    Lastname
                                </label>
                                <input
                                    type="text"
                                    placeholder='Doe'
                                    className="w-60 bg-black border-b border-gray focus:outline-none active:outline-none focus:border-white transition-colors duration-500 py-3"
                                    onChange={e => setMail(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start m-3">
                                <label htmlFor="email" className="text-base">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    placeholder='example@gmail.com'
                                    className="w-60 bg-black border-b border-gray focus:outline-none active:outline-none focus:border-white transition-colors duration-500 py-3"
                                    onChange={e => setMail(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start m-3 relative">
                                <label htmlFor="password" className="text-base">
                                    Password
                                </label>
                                <input
                                    type={showPass ? "text" : "password"}
                                    placeholder='Password'
                                    className="w-60 bg-black border-b border-gray focus:outline-none active:outline-none focus:border-white transition-colors duration-500 py-3"
                                    onChange={(e) => setPass(e.target.value)}
                                />
                                {showPass ? <FaEyeSlash className='absolute right-0 bottom-4 cursor-pointer' onClick={handleShowPass} /> : <FaEye className='absolute right-0 bottom-4 cursor-pointer' onClick={handleShowPass} />}
                            </div>
                            <button className={enableLogin ? "w-60 m-3 bg-white text-black transition-all duration-500 p-3 cursor-pointer" : "w-60 m-3 bg-gray text-white transition-all duration-500 p-3 cursor-not-allowed"} disabled={!enableLogin}>
                                Signup
                            </button>
                        </form>
                        <div className="mx-5 flex md:flex-col justify-center items-center">
                            <div className="w-1 max-md:w-20 max-md:h-1 h-20 bg-gray">
                            </div>
                            <div className="m-3">
                                OR
                            </div>
                            <div className="w-1 max-md:w-20 max-md:h-1 h-20 bg-gray">
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="w-60 m-3 bg-black border flex justify-center items-center hover:bg-gray transition-all duration-500 p-3 cursor-pointer">
                                <FaGoogle className='mr-3' /> Continue with Google
                            </div>
                            <div className="w-60 m-3 bg-black border flex justify-center items-center hover:bg-gray transition-all duration-500 p-3 cursor-pointer">
                                <FaFacebookF className='mr-3' /> Continue with Facebook
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
