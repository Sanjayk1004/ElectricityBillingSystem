// import React from "react";
// import GoogleLogo from '../user/google.svg';
// import LoginImage from '../user/login.jpg';
// import * as Yup from 'yup';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';

// export default function Loginuser() {
//     const validationSchema = Yup.object().shape({
//       email: Yup.string()
//         .required('Email is required')
//         .email('Email is invalid'),
//       password: Yup.string()
//         .required('Password is required')
//         .min(6, 'Password must be at least 6 characters')
//         .max(40, 'Password must not exceed 40 characters'),
//     });
  
//   const {
//     register,
//     handleSubmit,
//     formState: { errors }
//   } = useForm({
//     resolver: yupResolver(validationSchema)
//   });

//   const onSubmit = (data) => {
//     console.log(data.email);
//     console.log(data.password);
//   };

//   return (
//     <div id="background" className="flex items-center justify-center min-h-screen bg-gray-200">
//       <div id="form=box" className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
//         <form 
//           id="form" 
//           noValidate
//           className="flex flex-col justify-center p-8 md:p-14" 
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <div 
//             id="welcome-text" 
//             className="flex flex-col"
//           >
//             <span className="mb-3 text-4xl font-bold">Welcome back</span>
//             <span className="font-light text-gray-400 mb-8">Welcome back! Please enter your details</span>
//           </div>
//           <div id="email" className="py-2">
//             <span className="block text-md font-medium text-slate-700 mb-2">Email</span>
//             <input
//               autoComplete='off'
//               type="text"
//               className="peer w-full p-2 
//               border border-gray-300 
//               rounded-md"
//               {... register('email')}
//             />
//             <p className="mt-1 invisible peer-invalid:visible text-red-600 border-gray-800">{errors.email?.message}</p>
//           </div>
//           <div id="password" className="py-1">
//             <span className="font-normal mb-2 text-md">Password</span>
//             <input
//               autoComplete="off"
//               type="text"
//               className="peer w-full p-2 mt-1 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 focus:placeholder-gray-500 invalid:border-red-800 invalid:placeholder-red-500 focus:invalid:border-red-800"
//               id="pass-field"
//               name="pass-field"
//               required={true}
//               {... register('password')}
//             />
//             <p className="mt-2 invisible peer-invalid:visible text-red-600 text-sm">{errors.password?.message}</p>
//           </div>
//           <div className="flex justify-between w-full py-4 mt-2">
//             <div className="mr-24">
//               <input 
//                 type="checkbox" 
//                 name="checkbox" 
//                 id="checkbox" 
//                 className="mr-2 accent-black"
//               />
//               <span className="text-md">Remember for 30 days</span>
//             </div>
//             <a className="font-bold text-base" href="/forgotpass">Forgot password</a>
//           </div>
//           <button 
//             type="submit" 
//             id="sign-in-button" 
//             className="w-full bg-black text-white p-2 rounded-lg mb-6 mt-4 hover:bg-white hover:text-black hover:border hover:border-gray-300"
//           >
//             Sign in
//           </button>
//           <button 
//             id="google-button" 
//             className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
//           >
//             <img 
//               src={GoogleLogo} 
//               alt="Google svg" 
//               className="w-6 h-6 inline mr-2" 
//             />
//             Sign in with Google
//           </button>
//           <div className="text-center text-gray-400">
//             Don't have an account?
//             <a className="font-bold text-black" href="/signup">  Sign up for free</a>
//           </div>
//         </form>
//         <div id="image" className="relative">
//           <img
//             src={LoginImage}
//             alt='Login img'
//             className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }