import React from 'react';
import { useNavigate } from 'react-router-dom';
import { maps, getAllMaps } from '../data/maps';

const Maps = () => {
  const allMaps = getAllMaps();
  const navigate = useNavigate();

  const handleMapClick = (id) => {
    navigate(`/strategies?map=${id}`);
  };

  return (
    <div className="r6s-maps-list space-y-8">
      {/* Maps Grid */}
      <div className="maps-list">
        <div className="maplist__cards__wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allMaps.map((map) => (
            <div key={map.id} className="maplist__card bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
              <button
                className="w-full h-full flex flex-col items-center group focus:outline-none"
                onClick={() => handleMapClick(map.id)}
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
  );
};

export default Maps; 