import React from 'react'
import { Button } from '../../../components/utilities';
import { Link } from 'react-router-dom';
import { loginSchema } from '../../../core/schema/login.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


const schema = loginSchema;

const Login = () => {


    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

    const onSubmit = (data) => {

        console.log(data);

    }


    return (

        <div>

            <div className='bg-peach h-[230px] w-full flex justify-center items-center'>

                <h2 className='text-[28px] text-white pb-[50px]'>Welcome Back! <br /> Let's Get Started</h2>

            </div>


            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-card max-w-[330px] bg-white rounded-[40px] mx-auto mt-[-52px] px-[40px] pt-[40px] pb-[50px]  shadow-[0px_20px_40px_0px_rgba(230,139,138,0.06)] backdrop-blur-[25px]">

                    <h3 className='text-[20px] mb-[20px]'>Access Your Account and Explore More</h3>


                    <div className="form-group flex flex-col">

                        <label className='text-[16px] text-black'>
                            Email Address<span className='text-red'>*</span>
                        </label>

                        <input type="text" className=' h-[48px] p-[10px] border border-silver rounded-[5px] mb-[20px] outline-none' {...register("email")} />

                        <p className='text-red'>{errors.email && errors.email.message}</p>


                    </div>

                    <div className="form-group flex flex-col">

                        <label className='text-[16px] text-black'>
                            Password<span className='text-red'>*</span>
                        </label>

                        <input type="password" className=' h-[48px] p-[10px] border border-silver rounded-[5px] mb-[20px] outline-none' {...register("password")} />

                        <p className='text-red'>{errors.password && errors.password.message}</p>


                    </div>

                    <span className=' text-[16px] text-black/50 underline'> <Link to={"/auth/forget"}>Forgot Password?</Link> </span>

                </div>

            <div className="form-btn flex flex-col items-center justify-center mt-[-28px] relative">

                <Button children="Sign in" btnType='submit'></Button>

                <span className='text-black text-[16px] pt-[30px]'>Not a member? <Link to={"/auth/register"} className='underline cursor-pointer'>Create an account</Link></span>

            </div>

            </form>



        </div>
    )
}

export { Login };
