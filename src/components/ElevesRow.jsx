import React, { useState } from 'react';
import EditEleves from './EditEleves';

const ElevesRow = ({ eleve, updateEleve, deleteEleve }) => {
  const [isEditing, setIsEditing] = useState(false);

  const calculMoyenne = (grades) => {
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return (sum / grades.length).toFixed(2);
  };

  return (
    <>
      <tr className="border-b dark:border-gray-700">
        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {eleve.name}
        </th>
        <td className="px-4 py-3">{eleve.grades[0]}</td>
        <td className="px-4 py-3">{eleve.grades[1]}</td>
        <td className="px-4 py-3">{eleve.grades[2]}</td>
        <td className="px-4 py-3">{eleve.grades[3]}</td>
        <td className="px-4 py-3">{eleve.grades[4]}</td>
        <td className="px-4 py-3">{calculMoyenne(eleve.grades)}</td>
        <td className="px-4 py-3">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
            onClick={() => setIsEditing(true)}
          >
            Modifier
          </button>
          <button 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            onClick={() => deleteEleve(eleve.id)}
          >
            Supprimer
          </button>
        </td>
      </tr>
      {isEditing && (
        <EditEleves 
          eleve={eleve} 
          updateEleve={updateEleve} 
          closeModal={() => setIsEditing(false)} 
        />
      )}
    </>
  );
};

export default ElevesRow;
