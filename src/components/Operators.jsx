import React from 'react';
import { operators } from '../data/operators';
import { useNavigate } from 'react-router-dom';

const Operators = () => {
  const navigate = useNavigate();
  const allOperators = Object.entries(operators);

  const handleOperatorClick = (id) => {
    navigate(`/strategies?operator=${id}`);
  };

  return (
    <div className="r6s-operators-mosaic space-y-8">
      <div className="oplist r6s-operators-list space-y-4">
        {/* Operator Cards Grid */}
        <div className="oplist__cards__wrapper flex flex-wrap justify-center gap-6 mt-6">
          {allOperators.map(([id, op]) => (
            <button
              key={id}
              className="oplist__card bg-gray-800 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 relative group focus:outline-none p-0"
              style={{ width: '300px', height: '500px', padding: 0, borderRadius: '16px' }}
              onClick={() => handleOperatorClick(id)}
            >
              <img
                className="w-full h-full object-cover"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                src={op.image}
                alt={op.name}
              />
              <div
                className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-end"
                style={{ background: 'rgba(24,24,27,0.7)', padding: '16px 0 8px 0' }}
              >
                {op.icon && (
                  <span className="oplist__card__icon text-2xl mb-1">{op.icon}</span>
                )}
                <span className="block w-full text-center text-white font-semibold text-lg group-hover:text-r6-orange transition-colors duration-200">
                  {op.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Operators; 