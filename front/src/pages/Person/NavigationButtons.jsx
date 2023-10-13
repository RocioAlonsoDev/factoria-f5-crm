export default function NavigationButtons({ onPrevious, onNext, section, totalSections }) {
  const showBackButton = section > 1;
  const showNextButton = section < totalSections;

  // Verifica si solo se muestra un botón
  const isSingleButton = (showBackButton && !showNextButton) || (!showBackButton && showNextButton);

  // Determina el valor de 'justify' en función de la condición
  const justifyContent = isSingleButton ? 'center' : 'between';

  return (
    <div className={`section flex justify-${justifyContent} items-center`}>
      {showBackButton && (
        <button
          className="bg-orange-500 text-white active-bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 w-48 ease-linear transition-all duration-150"
          type="button"
          onClick={onPrevious}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>
          Atrás
        </button>
      )}
      {showNextButton && (
        <button
          className="bg-orange-500 text-white active-bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 w-48 ease-linear transition-all duration-150"
          type="button"
          onClick={onNext}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          Siguiente
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </button>
      )}
    </div>
  );
}
