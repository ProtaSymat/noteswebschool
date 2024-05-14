import React, { useState } from 'react';

const AddEleves = ({ addEleve, closeModal }) => {
  const [name, setName] = useState('');
  const [grades, setGrades] = useState({
    francais: '',
    maths: '',
    anglais: '',
    histoire: '',
    sport: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGrades(prevGrades => ({ ...prevGrades, [name]: parseFloat(value) || '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const gradeArray = Object.values(grades).filter(grade => !isNaN(grade));
    const newEleve = { id: Date.now(), name, grades: gradeArray };
    console.log("Nouvel élève ajouté:", newEleve);
    addEleve(newEleve);
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold mb-4">Ajouter un élève</h2>
          <div className="mb-4">
            <label className="block mb-2">Nom de l'élève</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="border rounded w-full py-2 px-3"
              required 
            />
          </div>
          {Object.keys(grades).map(matiere => (
            <div className="mb-4" key={matiere}>
              <label className="block mb-2 capitalize">{matiere}</label>
              <input 
                type="number" 
                name={matiere}
                value={grades[matiere]} 
                onChange={handleChange} 
                className="border rounded w-full py-2 px-3"
                required 
              />
            </div>
          ))}
          <button 
            type="submit" 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Ajouter
          </button>
          <button 
            type="button" 
            onClick={closeModal} 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Annuler
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEleves;
