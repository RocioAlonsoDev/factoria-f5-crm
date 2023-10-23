import { useState, useEffect } from "react";
import PersonDataService from "../../services/crmService/person.service";

export default function AddPeopleToSelectionDayModal({ onAddPeople, onClose, selectedPeopleInJourney }) {
  const [people, setPeople] = useState([]);
  const [selectedPeople, setSelectedPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PersonDataService.getAll();
        const filteredPeople = response.data.data.filter(
          (person) => person.id_status !== 4 && !selectedPeopleInJourney.includes(person.id)
        );
        setPeople(filteredPeople);
      } catch (error) {
        console.error("Error al cargar datos de personas", error);
      }
    };

    fetchData();
  }, [selectedPeopleInJourney]);

  const handleCheckboxChange = (personId) => {
    setSelectedPeople((prevSelectedPeople) => {
      if (Array.isArray(prevSelectedPeople)) {
        if (prevSelectedPeople.includes(personId)) {
          return prevSelectedPeople.filter((id) => id !== personId);
        } else {
          return [...prevSelectedPeople, personId];
        }
      } else {
        return [personId];
      }
    });
  };

  const handleSubmit = () => {
    if (selectedPeople.length === 0) {
      alert("Selecciona al menos una persona.");
    } else {
      onAddPeople(selectedPeople);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center animated fadeIn faster">
      <div className="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="py-4 text-center">
          <h2 className="text-2xl font-bold">Añadir personas a la jornada de selección</h2>
        </div>
        <div className="p-3">
          {people.map((person) => (
            <div key={person.id} className="flex items-center justify-between p-2 border-b">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={`person-${person.id}`}
                  checked={selectedPeople.includes(person.id)}
                  onChange={() => handleCheckboxChange(person.id)}
                  className="mr-2"
                />
                <div className="flex flex-col">
                  <p>{person.name}</p>
                  <p>{person.surname}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4 text-right">
            <button onClick={onClose} className="py-2 px-4 bg-gray-300 rounded-lg mr-4">
              Cancelar
            </button>
            <button onClick={handleSubmit} className="py-2 px-4 bg-orange-600 text-white rounded-lg">
              Añadir Personas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


