import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import myContext from '../../Context/myContext';
import toast from 'react-hot-toast';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from "../../Firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import Loader from '../../Components/Loader/Loader';

export default function Signup() {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });
    //----------------------- UserSignup Function ------------------
    const userSignupFunction = async () => {
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
             toast.error("All Fields are required")
        }
        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);
            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }
            // Create User
            const userRefrence = collection(fireDB, 'user');
            addDoc(userRefrence, user);

            setUserSignup({
                name: "",
                email: "",
                password: ""
            })
            toast.success("Signup Successfully");
            setLoading(false);
            navigate('/Login');
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    return (
        <div className='flex justify-center items-center h-screen'>
             {loading && <Loader/>}
            {/* Login Form  */}
            <div className="login_Form bg-teal px-1 lg:px-8 py-6 border  rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-white '>
                        Signup
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder='Full Name'
                        className='bg-teal1  text-white  px-2 py-2 w-96 rounded-md outline-none placeholder-white'
                        value={userSignup.name}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                name: e.target.value
                            })
                        }}
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        className='bg-teal1  text-white  px-2 py-2 w-96 rounded-md outline-none placeholder-white'
                        value={userSignup.email}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                email: e.target.value
                            })
                        }}
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        className='bg-teal1 text-white   px-2 py-2 w-96 rounded-md outline-none placeholder-white'
                        value={userSignup.password}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                password: e.target.value
                            })
                        }}
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        className='bg-teal1 text-white hover:bg-white w-full hover:text-teal1 text-center py-2 font-bold rounded-md '
                        onClick={userSignupFunction}
                    >
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className='text-white'>Have an account <Link className=' text-teal1 font-bold' to={'/login'}>Login</Link></h2>
                </div>

            </div>
        </div>
    )
}



