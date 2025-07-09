import React from 'react'
import { Button } from '../../../components/utilities';

const Login = () => {
    return (

        <div>

            <div className='bg-peach h-[230px] w-full flex justify-center items-center'>

                <h2 className='text-[28px] text-white pb-[50px]'>Welcome Back! <br /> Let's Get Started</h2>

            </div>


            <form>

                <div className="form-card max-w-[330px] bg-white rounded-[40px] mx-auto mt-[-52px] px-[40px] pt-[40px] pb-[50px]  shadow-[0px_20px_40px_0px_rgba(230,139,138,0.06)] backdrop-blur-[25px]">

                    <h3 className='text-[20px] mb-[20px]'>Access Your Account and Explore More</h3>


                    <div className="form-group flex flex-col">

                        <label className='text-[16px] text-black'>
                            Email Address<span className='text-red'>*</span>
                        </label>

                        <input type="text" className=' h-[48px] border border-silver rounded-[5px] mb-[20px] outline-none' />



                        <label className='text-[16px] text-black'>
                            Password<span className='text-red'>*</span>
                        </label>

                        <input type="password" className=' h-[48px] border border-silver rounded-[5px] mb-[20px] outline-none' />

                    </div>

                    <span className=' text-[16px] text-black/50 underline'>Forgot Password?</span>

                </div>

            </form>

            <div className="form-btn flex flex-col items-center justify-center mt-[-28px] relative">

                <Button children="Sign in" btnType='button'></Button>

                <span className='text-black text-[16px] pt-[30px]'>Not a member? <link className='underline cursor-pointer'>Create an account</link></span>

            </div>



        </div>
    )
}

export { Login };
