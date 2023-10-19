import PropTypes from "prop-types";

const Popup = ({ isOpen, onClose, children }) => {
    return (
      <div
        className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
          isOpen ? "" : "hidden"
        }`}
        style={{
            backgroundColor: 'rgba(234, 88, 12, 0.5)'
        }}
      >
        <div className="bg-white shadow-lg rounded p-4 max-w-sm">
          {children}
          <div className="mt-4 flex justify-end">
            <button
              className="bg-orange-500 text-white rounded px-4 py-2 mr-2"
              onClick={onClose}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  Popup.propTypes = {
    isOpen: PropTypes.any,
    onClose: PropTypes.any,
    children: PropTypes.any,
  }

  export default Popup;
  
