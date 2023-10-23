import React from 'react';

export default function FilterButton({ openFilterModal }) {
  return (
    <button
      className="bg-orange-500 text-white py-2 px-4 rounded hover-bg-orange-600 mb-8"
      onClick={openFilterModal}
    >
      Filtrar
    </button>
  );
}