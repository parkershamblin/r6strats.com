import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { operators } from '../data/operators';
import { getAllMaps } from '../data/maps';

const Home = () => {
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [selectedMap, setSelectedMap] = useState(null);
  const navigate = useNavigate();
  const allOperators = Object.entries(operators);
  const allMaps = getAllMaps();

  // When both are selected, navigate
  React.useEffect(() => {
    if (selectedOperator && selectedMap) {
      navigate(`/strategies?operator=${selectedOperator}&map=${selectedMap}`);
    }
  }, [selectedOperator, selectedMap, navigate]);

  return (
    <div className="flex flex-col gap-16">
      {/* Operators Grid */}
      <div className="r6s-operators-mosaic space-y-8">
        <div className="oplist r6s-operators-list space-y-4">
          <div className="oplist__cards__wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {allOperators.map(([id, op]) => (
              <div
                key={id}
                className={`oplist__card bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 ${selectedOperator === id ? 'ring-4 ring-r6-orange' : ''}`}
                style={{ width: '300px', height: '500px' }} // <-- Set your desired size here
              >
                <button
                  className="w-full h-full flex flex-col items-center group focus:outline-none"
                  onClick={() => setSelectedOperator(id)}
                  style={{ width: '100%', height: '100%' }} // Make button fill the card
                >
                  <img
                    className="oplist__card__img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Image fills the card
                    src={op.image}
                    alt={op.name}
                  />
                  {op.icon && (
                    <span className="oplist__card__icon text-2xl mt-2">{op.icon}</span>
                  )}
                  <span className="block w-full text-center py-3 text-white font-semibold text-lg group-hover:text-r6-orange transition-colors duration-200">
                    {op.name}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Maps Grid */}
      <div className="r6s-maps-list space-y-8">
        <div className="maps-list">
          <div className="maplist__cards__wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allMaps.map((map) => (
              <div key={map.id} className={`maplist__card bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 ${selectedMap === map.id ? 'ring-4 ring-r6-orange' : ''}`}>
                <button
                  className="w-full h-full flex flex-col items-center group focus:outline-none"
                  onClick={() => setSelectedMap(map.id)}
                >
                  <img
                    className="maplist__card__img w-full object-cover"
                    style={{ aspectRatio: '16/9', height: 'auto', minHeight: '120px', maxHeight: '180px' }}
                    src={map.image}
                    alt={map.name}
                  />
                  <span className="block w-full text-center py-3 text-white font-semibold text-lg group-hover:text-r6-orange transition-colors duration-200">
                    {map.name}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 