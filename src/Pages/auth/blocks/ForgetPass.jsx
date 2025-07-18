import React from 'react'
import { useForm } from 'react-hook-form';
import { Button } from '../../../components/utilities';
import { Link } from 'react-router-dom';

const ForgetPass = () => {

    return (
        <div>

            <div className='bg-peach h-[230px] w-full flex justify-center items-center'>

                <h2 className='text-[28px] text-white pb-[50px] text-center'>Forgot <br /> Password</h2>

            </div>


            <form>

                <div className="form-card max-w-[330px] bg-white rounded-[40px] mx-auto mt-[-52px] px-[30px] pt-[30px] pb-[40px]  shadow-[0px_20px_40px_0px_rgba(230,139,138,0.06)] backdrop-blur-[25px]">

                    <h3 className='text-[20px] mb-[20px]'>Enter your email to receive a password reset link.</h3>


                    <div className="form-group flex flex-col">

                        <label className='text-[16px] text-black'>
                            Email Address<span className='text-red'>*</span>
                        </label>

                        <input type="text" className=' h-[48px] p-[10px] border border-silver rounded-[5px] mb-[20px] outline-none' />



                    </div>

                </div>

                <div className="form-btn flex flex-col items-center justify-center mt-[-28px] relative">

                    <Button children="Sign in" btnType='submit'></Button>

                    <span className='text-black text-[16px] pt-[30px]'>Back To <Link to={"/auth/login"} className='underline cursor-pointer'>Sign In</Link></span>

                </div>

            </form>



        </div>
    )
}

export { ForgetPass };
