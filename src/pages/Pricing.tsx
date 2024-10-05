import React from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

const PricingTier: React.FC<{ name: string; price: string; features: string[]; recommended?: boolean }> = ({ name, price, features, recommended }) => (
  <div className={`bg-white p-6 sm:p-8 rounded-lg shadow-md ${recommended ? 'border-4 border-blue-500' : ''}`}>
    {recommended && <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">Recommended</span>}
    <h3 className="text-xl sm:text-2xl font-bold mb-4">{name}</h3>
    <p className="text-3xl sm:text-4xl font-bold mb-6">{price}<span className="text-base sm:text-lg font-normal">/month</span></p>
    <ul className="mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2 text-sm sm:text-base">
          <Check size={20} className="text-green-500 mr-2 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link to="/signup" className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
      Choose Plan
    </Link>
  </div>
)

const Pricing: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Choose Your Plan</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <PricingTier
          name="Basic"
          price="$9.99"
          features={[
            "50 transcriptions/month",
            "Standard accuracy",
            "24-hour turnaround",
            "Email support"
          ]}
        />
        <PricingTier
          name="Pro"
          price="$19.99"
          features={[
            "150 transcriptions/month",
            "High accuracy",
            "12-hour turnaround",
            "Priority email support",
            "Custom vocabulary"
          ]}
          recommended
        />
        <PricingTier
          name="Enterprise"
          price="$49.99"
          features={[
            "Unlimited transcriptions",
            "Highest accuracy",
            "6-hour turnaround",
            "24/7 phone support",
            "Custom vocabulary",
            "API access"
          ]}
        />
      </div>
    </div>
  )
}

export default Pricing