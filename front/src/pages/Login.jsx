import { Link, useNavigate } from "react-router-dom"
import APIservice from '../services/APIService'
import { useState } from "react";


export default function Login() {
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try{
      const res = await APIservice.post('/login', {email, password})
      setEmail('');
      setPassword('');
      navigate('/');
      console.log(res)
    }catch(e){
      console.log(e)
    }
  }

  return (
    <div className='flex h-screen'>
      <div className="container m-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
            
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-blueGray-400 text-center mb-3 font-bold">
                <small>Iniciar sesión</small>
              </div>
              <form onSubmit={handleLogin}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    name='email'
                    id='email'
                    value={email}
                    onChange={(ev)=>{setEmail(ev.target.value)}}
                    className="border-0 px-3 py-3 placeholder-blueGray-400 text-blueGray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="nombre@ejemplo.com"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="password"
                  >
                    Contraseña
                  </label>
                  <input
                    name='password'
                    id='password'
                    value={password}
                    type="password" onChange={(ev)=>{setPassword(ev.target.value)}}
                    className="border-0 px-3 py-3 placeholder-blueGray-400 text-blueGray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="*************"
                  />
                </div>
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span className="ml-2 text-sm font-semibold text-blueGray-600">
                      Recuérdame
                    </span>
                  </label>
                </div>

                <div className="text-center mt-6">
                  <button
                    className="bg-orange-600 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-wrap mt-6 relative">
            <div className="w-1/2">
              <Link
                to="/"
                className="text-blueGray-200"
              >
                <small>¿Has olvidado tu contraseña?</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
