import React, { useState, useEffect } from 'react';
import ElevesList from "./components/ElevesList";
import AddEleves from "./components/AddEleves";

const App = () => {
  const [eleves, setEleves] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const LOCAL_STORAGE_KEY = "eleves";

  useEffect(() => {
    const storedEleves = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedEleves) {
      setEleves(JSON.parse(storedEleves));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(eleves));
  }, [eleves]);

  const addEleve = (eleve) => {
    setEleves([...eleves, eleve]);
  };

  const updateEleve = (updatedEleve) => {
    setEleves(eleves.map(eleve => 
      eleve.id === updatedEleve.id ? updatedEleve : eleve
    ));
  };

  const deleteEleve = (eleveId) => {
    setEleves(eleves.filter(eleve => eleve.id !== eleveId));
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 h-full h-screen">
        <h1 className="text-white text-semibold flex justify-center py-5 text-xl">Gestion des élèves</h1>
        <div className="px-4 lg:px-12">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button 
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                  onClick={() => setIsAdding(true)}
                >
                  Ajouter un élève
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <ElevesList 
                eleves={eleves} 
                updateEleve={updateEleve} 
                deleteEleve={deleteEleve} 
              />
            </div>
          </div>
        </div>
      </section>
      {isAdding && (
        <AddEleves 
          addEleve={addEleve}
          closeModal={() => setIsAdding(false)} 
        />
      )}
    </>
  );
};

export default App;
