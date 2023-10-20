import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import NavbarLandingAtom from "../components/atoms/Landing/NavbarLandingAtom";


export default function Landing() {
  return (
    <>
        <NavbarLandingAtom transparent />
      
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://factoriaf5.org/wp-content/uploads/2021/08/APRENDE-IMAGEN-1.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto md:text-center mt-5">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                  Aprende con Factoría F5, <br />
                    ¡Haz un cambio en tu vida!
                  </h1>
                  <p className="mt-8 text-2xl text-white">
                  #RompemosLosCodigos #100%gratuito <br /><br />

                   <span className=""> No necesitas titulación o conocimientos previos. <br />
                    Sólo importa tu motivación, tu lógica, tu autonomía y tu capacidad de trabajar en equipo.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <Link to="/inscribe_femcoders">
                      <button className="bg-orange-500 border border-orange-500 text-white uppercase font-semibold px-4 py-2 rounded mb-4 ">
                        Inscríbete a FemCoders
                      </button>
                    </Link>
                    <img
                      alt="FemCoders"
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                      className="w-full align-middle rounded-t-lg"
                    />
                     <div className="text-grey-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-3 mt-3 shadow-lg rounded-full bg-teal-500">
                      <i className="fas fa-fingerprint font-bold text-orange-800">Fem</i>
                    </div>
                    <h6 className="text-2xl font-bold p-2 text-orange-600">FemCoders - Online - Solo Mujeres</h6>
                    <p className="mt-2 mb-4 text-blueGray-500 text-center text-xl font-semibold">
                      Bootcamp intensivo Full Stack
                    </p>
                    <ul className="text-xl">
                      <li>Inicio: Octubre 2023</li>
                      <li>Duración: 6 meses, 850 horas</li>
                      <li>Modalidad: Online (en tiempo real).</li>
                      <li>Financiador: Google.org </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                  <Link to="/inscribe">
                      <button className="bg-orange-500 border border-orange-500 text-white uppercase font-semibold px-4 py-2 rounded mb-4 ">
                        Inscríbete a próximos Bootcamps
                      </button>
                    </Link>
                    <img
                      alt="Digital Academy"
                      src="https://factoriaf5.org/wp-content/uploads/2023/07/ciberseguridad_factoria_f5_tech_time_2_skill-600x338.jpg"
                      className="w-full align-middle rounded-t-lg"
                    />
                    <div className="text-grey-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-3 mt-3 shadow-lg rounded-full bg-teal-500">
                      <i className="fas fa-fingerprint font-bold text-orange-800">F5</i>
                    </div>
                    <h6 className="text-2xl font-bold p-2 text-orange-600">Próximos Bootcamps</h6>
                    <p className="mt-2 mb-4 text-blueGray-500 text-center text-xl font-semibold">
                      Bootcamps inclusivos. <br />Rellena el formulario y te avisaremos la próxima convocatoria.
                    </p>
                    <ul className="text-xl">
                      <li>Metaverso</li>
                      <li>Ciberseguridad</li>
                      <li>Inteligencia Artificial</li>
                      <li>Otros</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <Link to="/inscribe_digitalacademy">
                      <button className="bg-orange-500 border border-orange-500 text-white uppercase font-semibold px-4 py-2 rounded mb-4 ">
                        Inscríbete a Digital Academy
                      </button>
                    </Link>
                    <img
                      alt="Digital Academy"
                      src="https://factoriaf5.org/wp-content/uploads/2023/07/desarrollo_web_full_stack_tecnologias_inmersivas_madrid_factoria_f5-600x400.jpg"
                      className="w-full align-middle rounded-t-lg"
                    />
                    <div className="text-grey-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-3 mt-3 shadow-lg rounded-full bg-teal-500">
                      <i className="fas fa-fingerprint font-bold text-orange-800">Mixto</i>
                    </div>
                    <h6 className="text-2xl font-bold p-2 text-orange-600">Digital Academy - Asturias - Mixto</h6>
                    <p className="mt-2 mb-4 text-blueGray-500 text-center text-xl font-semibold">
                      Bootcamp intensivo Full Stack.
                    </p>
                    <ul className="text-xl">
                      <li>Inicio: Octubre 2023.</li>
                      <li>Duración: 6 meses, 850 horas.</li>
                      <li>Modalidad: Online (jueves presenciales en Langreo).</li>
                      <li>Financiador: Capgemini </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                
                <img src={Logo} alt="" />
                <h3 className="text-3xl mt-5 mb-2 font-bold leading-normal">
                  Nuestra Asociación
                </h3>
                <p className="text-xl font-regular leading-relaxed mt-4 mb-4 text-blueGray-600">
                Somos <span className="text-orange-600 font-bold text-2xl">Factoría F5</span>, una asociación sin ánimo de lucro que construye la primera red de escuelas digitales solidarias, 
                <strong> inclusivas y gratuitas</strong> en España dedicadas a ofrecer oportunidades a personas en situación de vulnerabilidad 
                en el mundo de la programación y del desarrollo web.
                </p>
                <p className="text-xl font-regular leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Mediante formaciones intensivas y talleres totalmente gratuitos, trabajamos con una metodología innovadora,
                  100% práctica y orientada a la inserción laboral, basada en el modelo de éxito internacional Simplon.co.
                  Apoyada por método de aprendizaje ABP: aprendizaje basado en proyectos llevado a cabo de forma colaborativa
                  con en fin de recrear el ambiente de forma constante.
                </p>
                <Link to="https://factoriaf5.org/somos/#equipo" className="text-orange-600 font-bold text-2xl mt-8">
                  ¡Conoce al equipo!
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src="https://factoriaf5.org/wp-content/uploads/2022/06/IMG_0471-scaled.jpg"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-orange-600 font-bold text-2xl">
                      Aprende en un ambiente inclusivo y protector
                    </h4>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <Link to="https://factoriaf5.org/hackathon/">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://factoriaf5.org/wp-content/uploads/2022/03/f6155794-51fa-45f7-97fa-e6961757f972-800x800.jpeg"
                />
                </Link>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-teal-500">
                  <i className="fas fa-fingerprint font-bold text-orange-800">Coding</i>
                  </div>
                  <h3 className="text-3xl font-bold">Hackathon F5</h3>
                  <p className="mt-4 text-xl font-regular text-blueGray-500">

                  El Hackathon es un momento para poner a prueba los conocimientos de los coders en un clima de trabajo real. 
                  Además, tiene un segundo objetivo que es mezclar coders de diferentes escuelas de la red F5 para que los 
                  equipos sean heterogéneos y que cada uno/una aporte las tecnologías que sabe. <br />Por lo tanto cada coder 
                  maneja conocimientos diferentes y tienen que ponerse en común, aprender del resto y trabajar en clima 
                  colaborativo.
                  </p>
                  <Link to="https://factoriaf5.org/hackathon/">
                      <button className="bg-orange-500 border border-orange-500 text-white uppercase font-semibold px-4 py-2 rounded mb-4 mt-5">
                        Sigue leyendo sobre nuestro Hackathon
                      </button>
                    </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-bold">De Coder a Coder</h2>
                <p className="text-2xl leading-relaxed m-4 text-blueGray-500">
                  Esta plafaforma ha sido desarrollada por nuestras propias coders <br />¡Desarrollarás en entorno real!
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-6/12 lg:w-2/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="coder"
                    src="https://i.pinimg.com/originals/dc/c1/86/dcc186614368ec4f94fb345e399fa499.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Amaia Abaroa</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Full Stack Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-2/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="coder"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAMeqEXzL7EKXfCmu35tnL7tFEnqtKHKGuMQ&usqp=CAU"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold mt-3">Ana Encinas</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Full Stack Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-2/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="coder"
                    src="https://i.pinimg.com/236x/bb/01/c7/bb01c71fae7f351b511efcdfb5de61df--monna-lisa-mona.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Lili Gutiérrez</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Full Stack Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-2/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="coder"
                    src="https://i.pinimg.com/originals/d1/75/e6/d175e6662fb3c9e1d271e4c41cadfbdb.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px "
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold mt-4">Maggie Filgueira</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    Full Stack Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-2/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="coder"
                    src="https://i.pinimg.com/736x/34/25/f5/3425f5526286cdf6302d2575534a0575.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Sole Grobas</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    Full Stack Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-2/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="coder"
                    src="https://cdn1.jigidi.com/thumbs/TSG5ULUA/l"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Yolanda Zahonero</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    Full Stack Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-bold">
                  Te esperamos en nuestras redes sociales
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <Link to="https://www.linkedin.com/company/factor%C3%ADaf5/">
                  <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="60" height="60" viewBox="0 0 24 24" strokeWidth="2" stroke="#ff4500" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                      <path d="M8 11l0 5" />
                      <path d="M8 8l0 .01" />
                      <path d="M12 16l0 -5" />
                      <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <Link to="https://www.youtube.com/channel/UCazHbN7ChOJxRXW0-K1zczw">
                  <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="60" height="60" viewBox="0 0 24 24" strokeWidth="2" stroke="#ff4500" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                      <path d="M10 9l5 3l-5 3z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <Link to="https://twitter.com/factoriaf5">
                  <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-x" width="60" height="60" viewBox="0 0 24 24" strokeWidth="2" stroke="#ff4500" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <Link to="https://www.instagram.com/factoria_f5/">
                  <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="60" height="60" viewBox="0 0 24 24" strokeWidth="2" stroke="#ff4500" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path d="M16.5 7.5l0 .01" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
      </main>
      
    </>
  );
}