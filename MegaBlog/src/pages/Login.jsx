import React, { useState } from 'react';
import FormHeading from '../components/others/FormHeading';
import Input from '../components/others/Input';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import authService from '../Appwrite/auth';
import {login as authLogin} from '../store/authSlice'

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit} = useForm()
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false)

  const login = async (formData) => {
    setError('')
    try {
      const session = await authService.login(formData)
      if (session) {
        const userData = await authService.getCurrentUser()

        if (userData) {
          dispatch(authLogin(userData))
          navigate('/')
        }
      }
    } catch (error) {
      console.log('login page : login : error ' , error)
      setError(error.messege)
    }
  }

//   const login = async(data) => {
//     const session = await authService.login(data)
//     if (session) {
//         const userData = await authService.getCurrentUser()
//         if(userData) dispatch(authLogin(userData)); // এখানে আপনার স্লাইস অনুযায়ী অ্যাকশন দিন
//         navigate("/")
//     }
// }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F8FAFC] dark:bg-[#0F172A] text-slate-900 dark:text-slate-100">
      
      

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
        <div className="w-full max-w-md z-10">
          <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
            
            {/* I will pass different text for login letter */}
            <FormHeading/>

            {error && <p className='text-red-600 mt-8 text-center' >{error}</p> }

            <form className="space-y-6" onSubmit={handleSubmit(login)} >
              
              <Input 
              label='Email'
              placeholder='name@example.com'
              type='email'
              {...register('email', {
                required: true, 
                
              })}
              
              />
               <div className="relative group">
                <Input 
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pr-11" 
                    {...register('password', { required: true })}
                />
                <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute bottom-3 right-3.5 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <span className="material-symbols-outlined text-lg">
                        {showPassword ? 'Hide' : 'Show'}
                    </span>
                </button>
              </div>
              
              
              
              
              
              
              
              
              
              
              
              <button
              type='submit'
              className="w-full py-3.5 bg-[#3B82F6] text-white font-bold rounded-xl shadow-lg">
                Sign In
              </button>

              


            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;