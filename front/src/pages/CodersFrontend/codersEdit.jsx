import { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import PersonDataService from '../../services/crmService/person.service';
import { useNavigate } from 'react-router-dom';
import bootcampService from "../../services/crmService/bootcamp.service";
import statuService from "../../services/crmService/status.service";

export default function CodersEdit() {
    const { id } = useParams(); 
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [dataprotection, setDataprotection] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [gender, setGender] = useState('');
    const [dni, setDni] = useState('');
    const [id_status, setId_status] = useState('');
    const [id_bootcamp, setId_bootcamp] = useState('');
    const navigate = useNavigate();


    async function handleUpdate() {
    try {
      //console.log("Updating with data:", { name, description });
      await PersonDataService.update(id, { name, surname, email, image, phone, address, city, region, dataprotection, birthdate, gender, dni, id_status, id_bootcamp  });
      //console.log("Update successful!");
      
      navigate(`/tracking/coders`);

    } catch (error) {
      console.error('Error updating requirement:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
      }
    }
  }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await PersonDataService.get(id);
            setName(response.data.name)
            setSurname(response.data.surname)
            setEmail(response.data.email)
            setImage(response.data.image)
            setPhone(response.data.phone)
            setAddress(response.data.address)
            setCity(response.data.city)
            setRegion(response.data.region)
            setDataprotection(response.data.dataprotection)
            setBirthdate(response.data.birthdate)
            setGender(response.data.gender)
            setDni(response.data.dni)
            setId_status(response.data.id_status)
            setId_bootcamp(response.data.id_bootcamp)
            

          } catch (error) {
            console.error('Error fetching requirement:', error);
          }
        };
    
        fetchData(); 
    
      }, [id]);



      const [bootcamps, setBootcamps] = useState('');
      useEffect(() => {
        const fetchBootcamps = async () => {
          try {

            const response = await bootcampService.getAll()
            setBootcamps(response.data.data)
          
        } catch (error) {
          console.error('Error fetching bootcamps:', error);
        }

      } 
      fetchBootcamps()
    },[] )
        


    const [status, setStatus] = useState('');
      useEffect(() => {
        const fetchStatus = async () => {
          try {

            const response = await statuService.getAll()
            setStatus(response.data.data)
          
        } catch (error) {
          console.error('Error fetching status:', error);
        }

      } 
      fetchStatus()
    },[] )

    const onImageChoose = (e) => {
      const file = e.target.files[0]; // Get the selected file from the input
    
      if (file) {
        const reader = new FileReader();
    
        reader.onload = (event) => {
          const imageData = event.target.result;
          setImage(imageData); // Update the state with the new image data
        };
    
        reader.readAsDataURL(file);
      }
    };

    return (
    
      <div className="relative flex flex-col md:top-[107px] min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded py-12 pl-64 pb-28">
      <form onSubmit={handleUpdate}>
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="text-blueGray-700 text-xl font-bold">Modificar Coder</h6>
            </div>
          </div>
        </div>

        <div className="block w-full px-4 py-3">
          <div className="mb-4">
            <label className="block uppercase text-blueGray-600 text-md font-bold mb-2">Nombre:</label>
            <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>            
          
        <div className="block w-full px-4 py-3">
        <div className="mb-4">
          <label className="block uppercase text-blueGray-600 text-md font-bold mb-2">Apellido:</label>
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        </div>
        <div className="block w-full px-4 py-3">
          <div className="mb-4">
            <label className="block uppercase text-blueGray-600 text-md font-bold mb-2">Correo Electrónico:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>
        

         {/*Banner*/}
        <div className="block w-full px-4 py-3">
              <label htmlFor="image" className="block uppercase text-blueGray-600 text-md font-bold mb-2">
                Foto
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">

                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="image"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-blueGray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <div className="mt-1 flex items-center">
                        {image && (
                          <img
                            src={image}
                            alt=""
                            className="w-32 h-32 object-cover"
                          />
                        )}

                          {!image && (
                          <span className="mx-auto flex justify-center  items-center text-gray-400 h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>

                          </span>
                        )}
                        </div>
                          <span>Sube una imagen</span>
                      <input id="image" onChange={onImageChoose} name="image" type="file" className="sr-only" />
                    </label>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF</p>
                </div>
              </div>
            </div>
            {/*Banner*/}








        <div className="block w-full px-4 py-3">
          <div className="mb-4">
            <label className="block uppercase text-blueGray-600 text-md font-bold mb-2">Teléfono:</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="block w-full px-4 py-3">
          <div className="mb-4">
            <label className="block uppercase text-blueGray-600 text-md font-bold mb-2">Dirección:</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="block w-full px-4 py-3">
          <div className="mb-4">
            <label className="block uppercase text-blueGray-600 text-md font-bold mb-2">Ciudad:</label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="block w-full px-4 py-3">
          <div className="mb-4">
            <label className="block uppercase text-blueGray-600 text-md font-bold mb-2">Comunidad Autónoma:</label>
            <input
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="block w-full px-4 py-3">
          <div className="mb-4">
            <label className="block uppercase text-blueGray-600 text-md font-bold mb-2">Protección de Datos:</label>
            <input
              value={dataprotection}
              onChange={(e) => setDataprotection(e.target.value)}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="block w-full px-4 py-3">
          <div className="mb-4">
            <label className="block uppercase text-blueGray-600 text-md font-bold mb-2">Fecha de Nacimiento:</label>
            <input
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="block w-full px-4 py-3">
          <div className="mb-4">
            <label className="block uppercase text-blueGray-600 text-md font-bold mb-2">Género:</label>
            <input
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="block w-full px-4 py-3">
          <div className="mb-4">
            <label className="block uppercase text-blueGray-600 text-md font-bold mb-2">DNI:</label>
            <input
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              className="border rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>

        <div className="block w-full px-4 py-3">
          <div className="mb-4">
            <label className="block uppercase text-blueGray-600 text-md font-bold mb-2">Status:</label>
            <select name="id_status" id="id_status" value={id_status}  onChange={(e) => setId_status(e.target.value)}>
              <option value="">--Please choose an option--</option>
              {status && status.map((status) => ( 
              <option value={status.id} key={status.id}>{status.name}</option>
))}
              
        
            </select>
          </div>
        </div>

        <div className="block w-full px-4 py-3">
          <div className="mb-4">
            <label className="block uppercase text-blueGray-600 text-md font-bold mb-2">Bootcamp:</label>

            <select name="id_bootcamp" id="id_bootcamp" value={id_bootcamp} onChange={(e) => setId_bootcamp(e.target.value)}>
              <option value="">--Please choose an option--</option>
              {bootcamps && bootcamps.map((bootcamp) => ( 
                <option value={bootcamp.id} key={bootcamp.id}>{bootcamp.name}</option>
              ))}
        
            </select>

          </div>
        </div>

        

           
        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
          <button
            className="bg-orange-500 text-white active-bg-orange-600 text-xs font-bold uppercase px-3 py-2 rounded-md outline-none focus:outline-none mr-2"
            type="button"
             onClick={() => navigate(`/tracking/coders`)}
          >
            Cerrar
          </button>
              
          <button
            className="bg-orange-500 text-white active-bg-orange-600 text-xs font-bold uppercase px-3 py-2 rounded-md outline-none focus:outline-none mr-2"
            type="button"
            onClick={handleUpdate}
          >
          Guardar
          </button>
        </div>
      </form>
    </div>    
  );     
    }