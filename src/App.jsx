import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import StrategyBuilder from './components/StrategyBuilder'
import StrategyViewer from './components/StrategyViewer'
import Home from './components/Home'
import './App.css'

function App() {
  const [selectedOperator, setSelectedOperator] = useState(null)
  const [selectedMap, setSelectedMap] = useState(null)
  const [selectedSite, setSelectedSite] = useState(null)

  return (
    <Router>
      <div className="min-h-screen bg-r6-dark">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/builder" 
              element={
                <StrategyBuilder 
                  selectedOperator={selectedOperator}
                  setSelectedOperator={setSelectedOperator}
                  selectedMap={selectedMap}
                  setSelectedMap={setSelectedMap}
                  selectedSite={selectedSite}
                  setSelectedSite={setSelectedSite}
                />
              } 
            />
            <Route 
              path="/strategies" 
              element={
                <StrategyViewer 
                  operator={selectedOperator}
                  map={selectedMap}
                  site={selectedSite}
                />
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App 