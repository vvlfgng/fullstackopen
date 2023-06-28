import { useState, useEffect } from 'react'
import Output from './components/Output'

const App = () => {
  const [countryName, setCountryName] = useState(null)

  return (
    <div>
      find countries <input type="text" />
      <Output />
    </div>
  )
}

export default App