import { useState } from "react";
import InputField from "../../components/atoms/InputField";
import NavigationButtons from "./NavigationButtons";
import PersonDataService from "./../../services/crmService/person.service";
import Popup from "../../components/atoms/PopUp";
import { useNavigate } from "react-router-dom";

export default function SecondForm() {
  const [section, setSection] = useState(1);
  const totalSections = 3;
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    motivation: "",
    englishLevel: "",
    degree: "",
    anotherCourse: "",
    howArrived: "",
    employmentStatus: "",
    exerciseUrl: "",
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

    PersonDataService.secondForm(formData)
      .then((response) => {
        console.log("Respuesta del servidor:", response);
        if (response.status === 200) {
          setIsPopupOpen(true);
          console.log(
            "Segundo formulario completado correctamente. Estos son sus datos:",
            response.data
          );
        } else {
          console.error("Error al actualizar la información");
        }
      })

      .catch((error) => {
        console.error("Error al enviar el formulario", error);
      });
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    console.log("Redirigiendo a /login");
    navigate("/login");
  };

  return (
    <div className="bg-orange-500 min-h-screen flex items-center justify-center">
      <div className="w-full lg:w-6/12 px-4 bg-white">
        <div className="relative flex flex-col min-w-0 break-words w-full m-6 ">
          <div className="text-center mb-3">
            <h2 className="text-orange-500 text-2xl font-bold">
             ESTÁS A UN SOLO PASO DE EMPEZAR A #ROMPERLOSCÓDIGOS
            </h2>
            <h4 className="text-orange-500 text-xl  m-6">
              Rellena este formulario para continuar con tu proceso
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
                  label="Confirma tu email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <InputField
                  label="Dinos por qué quieres unirte a la formación. 
                      Sé creativ@ y demuestra tus ganas. 
                      No dudes en hacer un vídeo, un site o cualquier
                       otra iniciativa que demuestre tu deseo, tu motivación y 
                       tus habilidades."
                  id="motivation"
                  name="motivation"
                  type="text"
                  placeholder="Motivación"
                  value={formData.motivation}
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
                <label
                  className="block uppercase 
                    text-blueGray-600 text-xs font-bold mb-2"
                >
                  NIVEL DE INGLÉS
                </label>
                <select
                  id="englishLevel"
                  name="englishLevel"
                  className="border-0 px-3 py-3 
                      placeholder-blueGray-300 
                      text-blueGray-600 bg-white rounded text-sm shadow 
                      focus:outline-none focus:ring w-full ease-linear 
                      transition-all duration-150"
                  value={formData.englishLevel}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>

                  <option value="No hablo inglés">No hablo inglés</option>
                  <option value="Básico">Básico</option>
                  <option value="Medio">Medio</option>
                  <option value="Alto">Alto</option>
                  <option value="Bilingüe">Bilingüe</option>
                  <option value="Nativo">Nativo</option>
                </select>
                <InputField
                  label="¿Cómo nos has conocido?"
                  id="howArrived"
                  name="howArrived"
                  type="text"
                  placeholder="¿Cómo nos has conocido?"
                  value={formData.howArrived}
                  onChange={handleChange}
                />
                <InputField
                  label="¿Cuál es la última titulación que obtuviste? 
                      Si no tienes ninguna no te preocupes, pon 'no tengo'"
                  id="degree"
                  name="degree"
                  type="text"
                  placeholder="Última titulación, si tienes"
                  value={formData.degree}
                  onChange={handleChange}
                />
             

                <div style={{ marginTop: "1rem" }}>
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
                  label="¿Cursas otra formación actualmente?"
                  id="anotherCourse"
                  name="anotherCourse"
                  type="text"
                  placeholder="¿Cursas otra formación?"
                  value={formData.anotherCourse}
                  onChange={handleChange}
                />

                <label
                  className="block uppercase 
                    text-blueGray-600 text-xs font-bold mb-2"
                >
                  ¿Cuál es tu situación laboral?
                </label>

                <select
                  id="employmentStatus"
                  name="employmentStatus"
                  className="border-0 px-3 py-3 
                      placeholder-blueGray-300 
                      text-blueGray-600 bg-white rounded text-sm shadow 
                      focus:outline-none focus:ring w-full ease-linear 
                      transition-all duration-150"
                  value={formData.employmentStatus}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>

                  <option value="Desempleado/a">Desempleado/a</option>
                  <option value="Trabajando por cuenta propia">
                    Trabajando por cuenta propia
                  </option>
                  <option value="Trabajando por cuenta ajena">
                    Trabajando por cuenta ajena
                  </option>
                  <option value="En un descanso laboral">
                    En un descanso laboral
                  </option>
                  <option value="Estudiando">Estudiando</option>
                </select>

                <InputField
                  label="Para acceder a la formación deberás realizar unos ejercicios en la plataforma FreeCodeCamp. Date de alta y deja aquí el enlace a tu perfil"
                  id="exerciseUrl"
                  name="exerciseUrl"
                  type="text"
                  placeholder="Enlace a tu perfil de FreeCodeCamp"
                  value={formData.exerciseUrl}
                  onChange={handleChange}
                />

                <div style={{ marginTop: "1rem" }}>
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
        <Popup isOpen={isPopupOpen} onClose={closePopup}>
          <h2 className="text-2xl font-bold mb-4">¡Genial!</h2>
          <p>
            Seguimos con el proceso, ¡hasta pronto!
          </p>
        </Popup>
      </div>
    </div>
  );
}
