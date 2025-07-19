import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { operators } from '../data/operators'
import { maps } from '../data/maps'
import { ArrowLeft, Camera, MapPin, Eye, Target, Shield } from 'lucide-react'

const StrategyViewer = ({ operator, map, site }) => {
  const [selectedStrategy, setSelectedStrategy] = useState(0)

  // If no selection, redirect to builder
  if (!operator || !map || !site) {
    return (
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold text-white">No Strategy Selected</h1>
        <p className="text-gray-400">Please select an operator, map, and site to view strategies.</p>
        <Link to="/builder" className="btn-primary inline-flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go to Strategy Builder
        </Link>
      </div>
    )
  }

  const operatorData = operators[operator]
  const mapData = maps[map]
  const siteData = mapData.sites[site]
  const strategies = operatorData.strategies?.[map]?.[site] || []

  if (strategies.length === 0) {
    return (
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold text-white">No Strategies Available</h1>
        <p className="text-gray-400">
          No strategies found for {operatorData.name} on {mapData.name} - {siteData.name}
        </p>
        <Link to="/builder" className="btn-primary inline-flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Try Different Selection
        </Link>
      </div>
    )
  }

  const currentStrategy = strategies[selectedStrategy]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/builder" className="btn-secondary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Builder
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white">Strategy Guide</h1>
            <p className="text-gray-400">Best placements and tactics for your selection</p>
          </div>
        </div>
      </div>

      {/* Selection Summary */}
      <div className="card">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-r6-blue rounded-lg flex items-center justify-center">
              <span className="text-3xl">{operatorData.icon}</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{operatorData.name}</h3>
              <p className="text-gray-400">{operatorData.gadget}</p>
              <p className="text-sm text-gray-500 capitalize">{operatorData.role}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
              <MapPin className="w-8 h-8 text-gray-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{mapData.name}</h3>
              <p className="text-gray-400">{mapData.description}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-r6-orange rounded-lg flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{siteData.name}</h3>
              <p className="text-gray-400">{siteData.description}</p>
              <p className="text-sm text-gray-500">Difficulty: {siteData.difficulty}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Strategy Navigation */}
      {strategies.length > 1 && (
        <div className="card">
          <h3 className="text-lg font-semibold text-white mb-4">Available Strategies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {strategies.map((strategy, index) => (
              <button
                key={index}
                onClick={() => setSelectedStrategy(index)}
                className={`p-4 rounded-lg text-left transition-colors duration-200 ${
                  selectedStrategy === index
                    ? 'bg-r6-blue text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <div>
                    <div className="font-medium">{strategy.placement}</div>
                    <div className="text-sm opacity-75">{strategy.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Current Strategy Details */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Strategy Information */}
        <div className="card">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-r6-orange rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Strategy Details</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Placement</h3>
              <p className="text-gray-300">{currentStrategy.placement}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
              <p className="text-gray-300">{currentStrategy.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Gadget View</h3>
              <p className="text-gray-300">{currentStrategy.view}</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Operator Info</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Gadget:</span>
                  <span className="text-white">{operatorData.gadget}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Role:</span>
                  <span className="text-white capitalize">{operatorData.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Description:</span>
                  <span className="text-white">{operatorData.description}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategy Image */}
        <div className="card">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-r6-blue rounded-lg flex items-center justify-center">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Placement Guide</h2>
          </div>

          <div className="space-y-4">
            {/* Placeholder for actual image */}
            <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <Camera className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">Strategy Image</p>
                <p className="text-sm text-gray-500">{currentStrategy.image}</p>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Eye className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-semibold text-gray-400">Gadget View</span>
              </div>
              <p className="text-gray-300 text-sm">{currentStrategy.view}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tips and Recommendations */}
      <div className="card">
        <h3 className="text-xl font-semibold text-white mb-4">Tips & Recommendations</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium text-white mb-3">Best Practices</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-2">
                <span className="text-r6-orange mt-1">•</span>
                <span>Coordinate with your team for maximum effectiveness</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-r6-orange mt-1">•</span>
                <span>Consider enemy operator counters and adapt accordingly</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-r6-orange mt-1">•</span>
                <span>Practice placement timing for optimal setup</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-3">Counter Strategies</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-2">
                <span className="text-r6-red mt-1">•</span>
                <span>Watch for Thatcher EMP grenades</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-r6-red mt-1">•</span>
                <span>Be aware of Twitch drone attacks</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-r6-red mt-1">•</span>
                <span>Consider IQ's electronics detector</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Strategies */}
      <div className="card">
        <h3 className="text-xl font-semibold text-white mb-4">Related Strategies</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {siteData.bestOperators.slice(0, 3).map((opId) => {
            const op = operators[opId]
            if (!op || opId === operator) return null
            
            return (
              <div key={opId} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{op.icon}</span>
                  <div>
                    <div className="font-medium text-white">{op.name}</div>
                    <div className="text-sm text-gray-400">{op.gadget}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default StrategyViewer 