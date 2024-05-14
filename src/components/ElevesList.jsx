import React from 'react';
import ElevesRow from './ElevesRow';

const ElevesList = ({ eleves, updateEleve, deleteEleve }) => {
  return (
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-4 py-3">Nom</th>
          <th scope="col" className="px-4 py-3">Français</th>
          <th scope="col" className="px-4 py-3">Maths</th>
          <th scope="col" className="px-4 py-3">Anglais</th>
          <th scope="col" className="px-4 py-3">Histoire</th>
          <th scope="col" className="px-4 py-3">Sport</th>
          <th scope="col" className="px-4 py-3">Moyenne</th>
          <th scope="col" className="px-4 py-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {eleves.map(eleve => (
          <ElevesRow 
            key={eleve.id} 
            eleve={eleve} 
            updateEleve={updateEleve} 
            deleteEleve={deleteEleve} 
          />
        ))}
      </tbody>
    </table>
  );
};

export default ElevesList;

