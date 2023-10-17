import { useState } from "react";
import InputField from "../../components/atoms/InputField";
import NavigationButtons from "./NavigationButtons";
import PersonDataService from "./../../services/crmService/person.service"
import Popup from "../../components/atoms/PopUp";
import { useNavigate } from "react-router-dom";

export default function PublicAddPerson() {
  const [section, setSection] = useState(1);
  const totalSections = 3; 
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
    dataprotection: "",
    birthdate: "",
    gender: "",
    dni: "",
    id_status: 2,
    id_bootcamp: 1,
  });

  const handleNext = () => {
    setSection(section + 1);
  };

  const handlePrevious = () => {
    setSection(section - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    PersonDataService.create(formData)
    .then((response)=>{
      if(response.status ===201){
        setIsPopupOpen(true);
        console.log('Persona añadida correctamente. Estos son sus datos:', response.data)
      }
      else{
        console.error("Error al crear a la persona")
      }
    })
    
      .catch((error)=>{
        console.error ("Error al añadir una nueva persona", error)
      })


     
    
  }

  const closePopup = () => {
    setIsPopupOpen(false);
    console.log('Redirigiendo a /login');
    navigate('/login');
  };

  const handleDataProtectionChange = (e) => {
    const isChecked = e.target.checked;
    const newValue = isChecked ? "sí" : "no";
    setFormData({ ...formData, dataprotection: newValue });
  };

  return (
    
    <div className="bg-orange-500 min-h-screen flex items-center justify-center">
      <div className="w-full lg:w-6/12 px-4 bg-white">
        <div className="relative flex flex-col min-w-0 break-words w-full m-6 ">
          
          
              <div className="text-center mb-3">
                <h2 className="text-orange-500 text-2xl font-bold">
                  EMPIEZA A #ROMPERLOSCÓDIGOS
                </h2>
                <h4 className="text-orange-500 text-xl  m-6">
                  Inscríbete aquí para obtener más información sobre nuestros bootcamps
                </h4>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                {section === 1 && (
                  <div className="section">
                    <InputField
                      label="NOMBRE"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Nombre"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <InputField
                      label="APELLIDOS"
                      id="surname"
                      name="surname"
                      type="text"
                      placeholder="Apellidos"
                      value={formData.surname}
                      onChange={handleChange}
                    />
                    <InputField
                      label="e-mail"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Teléfono"
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="Teléfono"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <NavigationButtons
                      onPrevious={handlePrevious}
                      onNext={handleNext}
                      section={section}
                      totalSections={totalSections}
                    />
                  </div>
                )}
  
                {section === 2 && (
                  <div className="section">
                    <InputField
                      label="DIRECCIÓN"
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Dirección"
                      value={formData.address}
                      onChange={handleChange}
                    />
                    <InputField
                      label="CIUDAD"
                      id="city"
                      name="city"
                      type="text"
                      placeholder="Ciudad"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">COMUNIDAD AUTÓNOMA</label>
                    <select
                      id="region"
                      name="region"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={formData.region}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Selecciona una comunidad autónoma
                      </option>
                      <option value="Andalucía">Andalucía</option>
                      <option value="Aragón">Aragón</option>
                      <option value="Asturias">Asturias</option>
                      <option value="Cantabria">Cantabria</option>
                      <option value="Castilla y León">Castilla y León</option>
                      <option value="Castilla-La Mancha">Castilla-La Mancha</option>
                      <option value="Cataluña">Cataluña</option>
                      <option value="Comunidad Valenciana">Comunidad Valenciana</option>
                      <option value="Extremadura">Extremadura</option>
                      <option value="Galicia">Galicia</option>
                      <option value="Islas Baleares">Islas Baleares</option>
                      <option value="Islas Canarias">Islas Canarias</option>
                      <option value="La Rioja">La Rioja</option>
                      <option value="Madrid">Madrid</option>
                      <option value="Murcia">Murcia</option>
                      <option value="Navarra">Navarra</option>
                      <option value="País Vasco">País Vasco</option>
                      <option value="Ceuta">Ceuta</option>
                      <option value="Melilla">Melilla</option>
                    </select>
                    <div style={{ marginTop: '1rem' }}>
                      <NavigationButtons
                        onPrevious={handlePrevious}
                        onNext={handleNext}
                        section={section}
                        totalSections={totalSections}
                      />
                    </div>
                  </div>
                )}
  
                {section === 3 && (
                  <div className="section">
                    <InputField
                      label="fecha de nacimiento"
                      id="birthdate"
                      name="birthdate"
                      type="date"
                      placeholder="Fecha de nacimiento"
                      value={formData.birthdate}
                      onChange={handleChange}
                    />
                    <InputField
                      label="dni"
                      id="dni"
                      name="dni"
                      type="text"
                      placeholder="DNI"
                      value={formData.dni}
                      onChange={handleChange}
                    />
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">género</label>
                    <select
                      id="gender"
                      name="gender"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Selecciona un género
                      </option>
                      <option value="Mujer">Mujer</option>
                      <option value="Hombre">Hombre</option>
                      <option value="No binario">No binario</option>
                      <option value="Fluido">Fluido</option>
                      <option value="Otros">Otros</option>
                    </select>
                    <input
      type="hidden"
      name="id_status"
      value="2"
    />
    <input
      type="hidden"
      name="id_bootcamp"
      value="1"
    />
    <div>
                      <label className="inline-flex items-center cursor-pointer m-6">
                        <input
                          id="dataprotection"
                          type="checkbox"
                          className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                          checked={formData.dataprotection === "sí"}
                          onChange={handleDataProtectionChange}
                        />
                        <span className="ml-2 text-sm font-semibold text-blueGray-600">
                          Acepto {" "}
                          <a
                            href="#términosPrivacidad"
                            className="text-lightBlue-500"
                            onClick={(e) => e.preventDefault()}
                          >
                            la política de privacidad
                          </a>
                        </span>
                      </label>
                    </div>

                    <div style={{ marginTop: '1rem' }}>
                      <NavigationButtons
                        onPrevious={handlePrevious}
                        onNext={handleNext}
                        section={section}
                        totalSections={totalSections}
                      />
                    </div>
                  </div>
                )}
                 {section === totalSections && (
                  <div className="flex justify-center m-6">
                 <button
                 type="submit"
                 className="bg-white text-orange-500 border border-orange-500 text-sm font-bold uppercase px-6 py-3 mx-auto rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 w-48 mx-auto transition-all duration-150 ease-linear"
               >
                 Enviar
               </button>
               </div>
                )}
  
              
              </form>
            </div>
            <Popup 
      isOpen={isPopupOpen} 
      onClose={closePopup}
      >
        <h2 className="text-2xl font-bold mb-4">¡Genial!</h2>
        <p>Yas has dado el primer paso hacia tu nueva vida laboral. Pronto nos pondremos en contacto contigo.</p>
        </Popup>
          </div>
       
        </div>
    //   </div>
     
    // </div>
  );
  
  
}
