import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Target, Map, Camera, Zap, Users } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Operator Strategies",
      description: "Learn the best gadget placements for every operator across all maps and sites."
    },
    {
      icon: Map,
      title: "Map Knowledge",
      description: "Master every map with detailed site breakdowns and optimal positions."
    },
    {
      icon: Camera,
      title: "Visual Guides",
      description: "See exactly where to place gadgets with detailed images and views."
    },
    {
      icon: Target,
      title: "Site-Specific Tactics",
      description: "Get strategies tailored to specific bomb sites and objectives."
    }
  ]

  const stats = [
    { number: "50+", label: "Operators", icon: Users },
    { number: "20+", label: "Maps", icon: Map },
    { number: "100+", label: "Strategies", icon: Target },
    { number: "500+", label: "Placements", icon: Camera }
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Master Rainbow Six
            <span className="block text-r6-orange">Siege Strategies</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the best gadget placements, operator strategies, and tactical positions 
            for every map and site in Rainbow Six Siege.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/builder" 
            className="btn-primary btn-animate px-8 py-4 text-lg font-semibold"
          >
            <Target className="w-5 h-5 inline mr-2" />
            Build Strategy
          </Link>
          <Link 
            to="/strategies" 
            className="btn-secondary px-8 py-4 text-lg font-semibold"
          >
            <Shield className="w-5 h-5 inline mr-2" />
            Browse Strategies
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="text-center card card-hover">
              <div className="w-12 h-12 bg-r6-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          )
        })}
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose R6Strats?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our comprehensive strategy guide helps you master every aspect of Rainbow Six Siege
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="card card-hover">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-r6-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg-orange rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Dominate?
        </h2>
        <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
          Start building your strategies today and take your Rainbow Six Siege gameplay to the next level.
        </p>
        <Link 
          to="/builder" 
          className="bg-white text-r6-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
        >
          Get Started Now
        </Link>
      </section>
    </div>
  )
}

export default Home 