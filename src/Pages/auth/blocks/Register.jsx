import React from 'react'
import { Button } from '../../../components/utilities';
import { Link } from 'react-router-dom';
import { registerSchema } from '../../../core/schema/register.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


const schema = registerSchema;

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

    const onSubmit = (data) => {

        console.log(data);

    }

    return (

        <div>

            <div className='bg-peach h-[230px] w-full flex justify-center items-center'>

                <h2 className='text-[28px] text-white pb-[50px] text-center'>Create Your <br /> Account</h2>

            </div>


            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-card max-w-[330px] bg-white rounded-[40px] mx-auto mt-[-52px] px-[30px] pt-[30px] pb-[40px]  shadow-[0px_20px_40px_0px_rgba(230,139,138,0.06)] backdrop-blur-[25px]">

                    <h3 className='text-[20px] mb-[20px]'>Welcome Back! Please Enter Your Details</h3>


                    <div className="form-group flex flex-col mb-[20px]">

                        <label className='text-[16px] text-black'>
                            Name<span className='text-red'>*</span>
                        </label>

                        <input type="text" className=' h-[48px] p-[10px] border border-silver rounded-[10px] outline-none' {...register("name")} />

                        <p className='text-red'>{errors.name && errors.name.message}</p>

                    </div>


                    <div className="form-group flex flex-col mb-[20px]">

                        <label className='text-[16px] text-black'>
                            Email Address<span className='text-red'>*</span>
                        </label>

                        <input type="text" className=' h-[48px] p-[10px] border border-silver rounded-[10px] outline-none' {...register("email")} />

                        <p className='text-red'>{errors.email && errors.email.message}</p>


                    </div>

                    <div className="form-group flex flex-col mb-[20px]">

                        <label className='text-[16px] text-black'>
                            Mobile Number<span className='text-red'>*</span>
                        </label>

                        <div className='flex justify-between'>

                            <select className=' h-[48px] px-[10px] border border-silver rounded-[10px] outline-none ' {...register("country_code")}>

                                <option value="+91">+91</option>
                                <option value="+92">+92</option>
                                <option value="+93">+93</option>


                            </select>

                            <input type="text" className=' h-[48px] p-[10px] border border-silver rounded-[10px] outline-none' {...register("phone")} />



                        </div>

                        {(errors.country_code || errors.phone) && (
                            <p className='text-red'>Please Enter Valid Number</p>
                        )}


                    </div>

                    <div className="form-group flex flex-col mb-[20px]">

                        <label className='text-[16px] text-black'>
                            Password<span className='text-red'>*</span>
                        </label>

                        <input type="password" className=' h-[48px] p-[10px] border border-silver rounded-[10px] outline-none' {...register("password")} />

                        <p className='text-red'>{errors.password && errors.password.message}</p>


                    </div>


                    <div className="form-group flex gap-3 mb-[20px]">

                        <input type="checkbox" className=' h-[25px] border border-silver rounded-[10px] outline-none' {...register("terms")} />

                        <label className='text-[16px] text-black'>
                            I agree to all Term, Privacy and Fees
                        </label>


                    </div>

                    {errors.terms && (
                        <p className="text-red">{errors.terms.message}</p>)}

                </div>

                <div className="form-btn flex flex-col items-center justify-center mt-[-28px] relative">

                    <Button children="Sign in" btnType='submit'></Button>

                    <span className='text-black text-[16px] pt-[30px]'> <Link to={"/auth/login"} className='underline cursor-pointer'>Already have an account?</Link></span>

                </div>

            </form>



        </div>

    )
}

export { Register };
