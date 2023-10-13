// import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { AuthContext } from '../../contexts/AuthContext'
import APIservice from '../../services/APIservice'
import { useEffect } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function UserNavbarMolecule({title}) {

  const { currentUser, setCurrentUser, setUserToken } = AuthContext();

  const logout = (event) => {
    event.preventDefault();
    APIservice.post('/logout')
    .then(res => {
      setCurrentUser({})
      setUserToken(null)
      console.log(res)
    })
  }

  useEffect(() => {
    APIservice.get('/me')
    .then(({data})=>{
      setCurrentUser(data)
    })
  },[])


    return (
      <Disclosure as="nav" className="bg-white md:block md:fixed md:top-0 md:left-64 md:right-0 z-20">
          <>
            <div className="lg:px-6">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <h1 className="flex space-x-4 text-gray-800 text-lg font-semibold">
                      {title}
                    </h1>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <h2 className='px-4'>
                    Hola {currentUser && currentUser.name}!
                  </h2>
                  <button
                    type="button"
                    className="relative rounded-full bg-white p-1 text-orange-600 hover:text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                    </svg>
                  </button>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-10 w-10 rounded-full p-1"
                          src={currentUser.image}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Mi perfil
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Ajustes
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              onClick={logout}
                            >
                              Cerrar sesión
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
  
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                
              </div>
            </Disclosure.Panel>
          </>
      </Disclosure>

  )
}
