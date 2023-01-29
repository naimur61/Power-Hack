import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoArrowSmallLeft } from 'react-icons/go';
import logo from '../assets/logo.png';





const SignUp = () => {
   const { register, handleSubmit, formState: { errors }, reset } = useForm();
   // const { userLogin, popupSignIn, googleProvider } = useAuth();
   // const location = useLocation();
   // const navigate = useNavigate();
   // const from = location.state?.from?.pathname || '/';


   const onSubmit = (data, e) => {
      // userLogin(data.email, data.password)
      //    .then(result => {
      //       setUserEmail(data?.email);
      //       successToast('Login Successful.')
      //       reset();
      //       navigate(from, { replace: true })
      //    })
      //    .catch(er => {
      //       errorToast(er.message)
      //    })
      // console.log(data);
   };


   return (
      <div className=' login-form mt-20'>
         <div className='px-5 md:px-0 mt-12'>
            <div className="card md:w-96  bg-base-100 shadow-xl mx-auto">
               <div className="card-body">
                  <div className='flex flex-col items-center'>
                     <Link to='/'>
                        <img src={logo} alt="" className=' h-14 w-16' />
                     </Link>
                     <p className='text-info font-serif font-bold text-2xl my-2 '>Sign Up</p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>

                     {/* Name */}
                     <span className="label-text font-semibold">Enter Your Full Name</span>
                     <input type='text' placeholder="Enter your name." {...register("name", { required: true })} className="input input-bordered w-full  block  mb-2" />
                     {/* errors will return when field validation fails  */}
                     {errors.name && <small className='block bg-red-300 px-4 mt-1 mb-4  py-1 text-red-700 font-serif font-semibold rounded-lg w-fit'> Name must be required</small>}

                     {/* Email  */}
                     <span className="label-text font-semibold">Enter Your Email</span>
                     <input placeholder="Email" type='email' {...register("email", { required: true })} className="input input-bordered w-full  block  mb-2" />
                     {errors.email && <small className='block bg-red-300 px-4 mt-1 mb-4 py-1 text-red-700 font-serif font-semibold rounded-lg w-fit'>Email must be required</small>}


                     {/* Password */}
                     <span className="label-text font-semibold">Enter Your Password</span>

                     <input type='password' placeholder='Password' {...register("password", { required: "Password must be required.", minLength: { value: 6, message: "Password must be min six digit." }, pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: "Password must be strong." } })} className="input input-bordered w-full  block" />
                     {/* errors will return when field validation fails  */}
                     {errors.password && <small className='block bg-red-300 px-4 mt-1 mb-4 py-1 text-red-700 font-serif font-semibold rounded-lg w-fit'>{errors.password.message}</small>}

                     <div className="flex justify-between items-center mt-5">
                        {/* Back for signIn  */}
                        <strong><Link to='/login' className='text-info font-bold'>
                           <GoArrowSmallLeft className="inline font-bold text-4xl" />
                           Sign in</Link></strong>

                        <input type="submit" placeholder='Register' className=' w-fit btn btn-sm my-3 block' />
                     </div>
                  </form>
               </div >
               <ToastContainer />
            </div>
         </div>
      </div>
   );
};

export default SignUp;