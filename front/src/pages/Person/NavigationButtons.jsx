

export default function NavigationButtons({ onPrevious, onNext }) {
    return (
        <div className="section flex justify-between">
  <button
    className="bg-orange-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 w-48 ease-linear transition-all duration-150"
    type="button"
    onClick={onPrevious}
  >
    Atrás
  </button>
  <button
    className="bg-orange-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 w-48 ease-linear transition-all duration-150"
    type="button"
    onClick={onNext}
  >
    Siguiente
  </button>
</div>

      );
    }
  
