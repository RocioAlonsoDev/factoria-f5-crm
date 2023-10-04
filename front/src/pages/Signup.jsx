import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext'
// import { useState } from "react";
// import APIservice from '../services/APIservice'

export default function Register() {

  const {userToken, setCurrentUser, setUserToken} = AuthContext();
  // const[name,setName] = useState('');
  // const[email,setEmail] = useState('');
  // const[password,setPassword] = useState('');
  // const[passwordConfirmation,setPasswordConfirmation] = useState('');
  // const[error,setError] = useState({__html: ''});

  // const onSubmit = (ev) => {
  //   ev.preventDefault();
  //   setError({__html:''})

  //   APIservice.post('/signup',{
  //     name,
  //     email,
  //     password,
  //     password_confirmation: passwordConfirmation
  //   })
  //   .then(({data})=>{
  //     setCurrentUser(data.user)
  //     setUserToken(data.token)
  //   })
  //   .catch((error)=>{
  //     if(error.response){
  //       const finalErrors= Object.values(error.response.data.errors).reduce((accum, next) => 
  //       [...accum, ...next], [])
  //       setError({__html: finalErrors.join('<br />')})
  //     }
  //     console.log(error)
  //   })

  // }
  if(userToken){
    return <Navigate to='/' />
  }

  return (
    <>
      <div className="container mx-auto  px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  Regístrate
                </div>
                {/* {error.__html && (
                  <div className='bg-red-500 rounded py-2 px-3 text-white'
                  dangerouslySetInnerHTML={error}>
                  </div>
                )} */}
                <form onSubmit={console.log('signup')}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nombre
                    </label>
                    <input
                    required
                      type="text"
                      // onChange={ev => setName(ev.target.value)}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Correo electrónico
                    </label>
                    <input
                    required
                      type="email"
                      // onChange={ev => setEmail(ev.target.value)}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Contraseña
                    </label>
                    <input
                      required
                      type="password"
                      // onChange={ev => setPassword(ev.target.value)}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="password-confirmation"
                    >
                      Contraseña
                    </label>
                    <input
                      // value={passwordConfirmation}
                      // onChange={ev => setPasswordConfirmation(ev.target.value)}
                      id="password-confirmation"
                      name="password_confirmation"
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-orange-600 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
