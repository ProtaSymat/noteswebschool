import React, { useState } from 'react';

const EditEleves = ({ eleve, updateEleve, closeModal }) => {
  const [francais, setFrancais] = useState(eleve.grades[0]);
  const [maths, setMaths] = useState(eleve.grades[1]);
  const [anglais, setAnglais] = useState(eleve.grades[2]);
  const [histoire, setHistoire] = useState(eleve.grades[3]);
  const [sport, setSport] = useState(eleve.grades[4]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedGrades = [
      parseFloat(francais),
      parseFloat(maths),
      parseFloat(anglais),
      parseFloat(histoire),
      parseFloat(sport)
    ];
    updateEleve({ ...eleve, grades: updatedGrades });
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold mb-4">Modifier les notes de {eleve.name}</h2>
          <div className="mb-2">
            <label className="block text-gray-700 mb-1">Français</label>
            <input 
              type="number" 
              value={francais} 
              onChange={(e) => setFrancais(e.target.value)} 
              className="border rounded w-full py-2 px-3"
              required 
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 mb-1">Maths</label>
            <input 
              type="number" 
              value={maths} 
              onChange={(e) => setMaths(e.target.value)} 
              className="border rounded w-full py-2 px-3"
              required 
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 mb-1">Anglais</label>
            <input 
              type="number" 
              value={anglais} 
              onChange={(e) => setAnglais(e.target.value)} 
              className="border rounded w-full py-2 px-3"
              required 
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 mb-1">Histoire</label>
            <input 
              type="number" 
              value={histoire} 
              onChange={(e) => setHistoire(e.target.value)} 
              className="border rounded w-full py-2 px-3"
              required 
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 mb-1">Sport</label>
            <input 
              type="number" 
              value={sport} 
              onChange={(e) => setSport(e.target.value)} 
              className="border rounded w-full py-2 px-3"
              required 
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Enregistrer
            </button>
            <button 
              type="button" 
              onClick={closeModal} 
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEleves;
