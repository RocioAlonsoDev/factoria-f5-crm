import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SelectionDayDataService from '../../services/recruitmentService/selectionDay.service'; // Asegúrate de importar el servicio

export default function CardDashboardAtom({
  title,
  school,
  date,
  statIconColor,
  statIconImage
}) {
  const [nextSelectionDay, setNextSelectionDay] = useState({});
  const [attendeesCount, setAttendeesCount] = useState(0);

  useEffect(() => {

    SelectionDayDataService.getNextSelectionDay()
      .then((response) => {
        const nextDay = response.data.data;
        setNextSelectionDay(nextDay);

   
        SelectionDayDataService.getPeopleInSelectionDay(nextDay.id)
          .then((response) => {
            const attendees = response.data.data.length; 
            setAttendeesCount(attendees);
          })
          .catch((e) => {
            console.error(e);
          });
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <>
      <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap">
              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 className="text-orange-500 uppercase font-bold text-m pb-4">
                  {title}
                </h5>
                <span className="font-semibold text-xl text-blueGray-700">
                  Escuela: {school}
                </span>
              </div>
              <div className="relative w-auto pl-4 flex-initial">
                <div
                  className={
                    'text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ' +
                    statIconColor
                  }
                >
                  {statIconImage}
                </div>
              </div>
            </div>
            <span className="whitespace-nowrap text-xl "><span className="font-semibold">Fecha:</span> {date}</span> <br />
            <span className="whitespace-nowrap text-xl text-blueGray-400 mt-4">
  <span className="font-semibold">Personas asistentes:</span> {attendeesCount}
</span>
          </div>
        </div>
      </div>
    </>
  );
}

CardDashboardAtom.propTypes = {
  title: PropTypes.string,
  school: PropTypes.string,
  date: PropTypes.string,
  statIconColor: PropTypes.string,
  statIconImage: PropTypes.any,
};
