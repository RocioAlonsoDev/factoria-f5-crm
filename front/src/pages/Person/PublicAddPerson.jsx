import { useState } from "react";
import InputField from "../../components/atoms/InputField";
import NavigationButtons from "./NavigationButtons";

export default function PublicAddPerson() {
  const [section, setSection] = useState(1);
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

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-6/12 px-4 bg-white">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h3 className="text-orange-500 text-sm font-bold">
                  EMPIEZA A ROMPER LOS CÓDIGOS
                </h3>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
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
                    >
                      <option value="" disabled selected>
                        Selecciona una comunidad autónoma
                      </option>
                      <option value="Andalucía">Andalucía</option>
                      <option value="Aragón">Aragón</option>
                      <option value="Asturias">Asturias</option>
                      <option value="Cantabria">Cantabria</option>
                      <option value="Castilla y León">Castilla y León</option>
                      <option value="Castilla-La Mancha">
                        Castilla-La Mancha
                      </option>
                      <option value="Cataluña">Cataluña</option>
                      <option value="Comunidad Valenciana">
                        Comunidad Valenciana
                      </option>
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
                    <NavigationButtons
                      onPrevious={handlePrevious}
                      onNext={handleNext}
                    />
                  </div>
                )}
                {section === 3 && (
                  <div className="section">
                     <InputField
                      label="fecha de nacimiento"
                      id="bithdate"
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
                    >
                      <option value="" disabled selected>
                        Selecciona un género
                      </option>
                      <option value="Mujer">Mujer</option>
                      <option value="Hombre">Hombre</option>
                      <option value="No binario">No binario</option>
                      <option value="Fluido">Fluido</option>
                      <option value="Otros">Otros</option>
                    </select>

                    <NavigationButtons
                      onPrevious={handlePrevious}
                      
                    />
                  </div>
                )}

                {/* Agrega más secciones según sea necesario */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
