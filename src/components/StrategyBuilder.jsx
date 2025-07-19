import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { operators, getOperatorsByRole } from '../data/operators'
import { maps, getAllMaps } from '../data/maps'
import { Target, Map, Shield, ArrowRight, Search } from 'lucide-react'

const StrategyBuilder = ({ 
  selectedOperator, 
  setSelectedOperator, 
  selectedMap, 
  setSelectedMap, 
  selectedSite, 
  setSelectedSite 
}) => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRole, setSelectedRole] = useState('all')

  const allMaps = getAllMaps()
  const attackers = getOperatorsByRole('attacker')
  const defenders = getOperatorsByRole('defender')

  const filteredOperators = (selectedRole === 'all' ? [...attackers, ...defenders] : 
    selectedRole === 'attacker' ? attackers : defenders)
    .filter(([id, operator]) => 
      operator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      operator.gadget.toLowerCase().includes(searchTerm.toLowerCase())
    )

  const handleOperatorSelect = (operatorId) => {
    setSelectedOperator(operatorId)
  }

  const handleMapSelect = (mapId) => {
    setSelectedMap(mapId)
    setSelectedSite(null) // Reset site when map changes
  }

  const handleSiteSelect = (siteName) => {
    setSelectedSite(siteName)
  }

  const handleViewStrategies = () => {
    if (selectedOperator && selectedMap && selectedSite) {
      navigate('/strategies')
    }
  }

  const selectedOperatorData = selectedOperator ? operators[selectedOperator] : null
  const selectedMapData = selectedMap ? maps[selectedMap] : null
  const canViewStrategies = selectedOperator && selectedMap && selectedSite

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Strategy Builder</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Select an operator, map, and site to discover the best gadget placements and strategies
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Step 1: Operator Selection */}
        <div className="card">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-r6-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold">1</span>
            </div>
            <h2 className="text-xl font-semibold text-white">Choose Operator</h2>
          </div>

          {/* Role Filter */}
          <div className="flex space-x-2 mb-4">
            {[
              { id: 'all', label: 'All', icon: Shield },
              { id: 'attacker', label: 'Attackers', icon: Target },
              { id: 'defender', label: 'Defenders', icon: Shield }
            ].map((role) => {
              const Icon = role.icon
              return (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedRole === role.id
                      ? 'bg-r6-blue text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{role.label}</span>
                </button>
              )
            })}
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search operators..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field w-full pl-10"
            />
          </div>

          {/* Operator List */}
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {filteredOperators.map(([id, operator]) => (
              <button
                key={id}
                onClick={() => handleOperatorSelect(id)}
                className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                  selectedOperator === id
                    ? 'bg-r6-blue text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{operator.icon}</span>
                  <div>
                    <div className="font-medium">{operator.name}</div>
                    <div className="text-sm opacity-75">{operator.gadget}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Map Selection */}
        <div className="card">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-r6-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold">2</span>
            </div>
            <h2 className="text-xl font-semibold text-white">Choose Map</h2>
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto">
            {allMaps.map((map) => (
              <button
                key={map.id}
                onClick={() => handleMapSelect(map.id)}
                className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                  selectedMap === map.id
                    ? 'bg-r6-blue text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Map className="w-6 h-6" />
                  <div>
                    <div className="font-medium">{map.name}</div>
                    <div className="text-sm opacity-75">{map.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Site Selection */}
        <div className="card">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-r6-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold">3</span>
            </div>
            <h2 className="text-xl font-semibold text-white">Choose Site</h2>
          </div>

          {selectedMapData ? (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {Object.entries(selectedMapData.sites).map(([siteId, site]) => (
                <button
                  key={siteId}
                  onClick={() => handleSiteSelect(siteId)}
                  className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                    selectedSite === siteId
                      ? 'bg-r6-blue text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <div>
                    <div className="font-medium">{site.name}</div>
                    <div className="text-sm opacity-75">{site.description}</div>
                    <div className="text-xs mt-1">
                      Difficulty: <span className="font-medium">{site.difficulty}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-gray-400 text-center py-8">
              Select a map first to see available sites
            </div>
          )}
        </div>
      </div>

      {/* Selection Summary */}
      {(selectedOperatorData || selectedMapData) && (
        <div className="card">
          <h3 className="text-lg font-semibold text-white mb-4">Your Selection</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {selectedOperatorData && (
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{selectedOperatorData.icon}</span>
                  <div>
                    <div className="font-medium text-white">{selectedOperatorData.name}</div>
                    <div className="text-sm text-gray-400">{selectedOperatorData.gadget}</div>
                  </div>
                </div>
              </div>
            )}
            
            {selectedMapData && (
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Map className="w-6 h-6 text-gray-400" />
                  <div>
                    <div className="font-medium text-white">{selectedMapData.name}</div>
                    <div className="text-sm text-gray-400">{selectedMapData.description}</div>
                  </div>
                </div>
              </div>
            )}
            
            {selectedSite && selectedMapData && (
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-gray-400" />
                  <div>
                    <div className="font-medium text-white">{selectedMapData.sites[selectedSite].name}</div>
                    <div className="text-sm text-gray-400">Difficulty: {selectedMapData.sites[selectedSite].difficulty}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* View Strategies Button */}
      <div className="text-center">
        <button
          onClick={handleViewStrategies}
          disabled={!canViewStrategies}
          className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
            canViewStrategies
              ? 'btn-primary btn-animate'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
        >
          <ArrowRight className="w-5 h-5 inline mr-2" />
          View Strategies
        </button>
        {!canViewStrategies && (
          <p className="text-gray-400 mt-2">Please select an operator, map, and site to continue</p>
        )}
      </div>
    </div>
  )
}

export default StrategyBuilder 