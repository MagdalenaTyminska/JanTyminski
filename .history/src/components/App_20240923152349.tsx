import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
		<>
			<main className='cv-main'>
				<Header data={header} />
				<Personal  />
				<Details  />
				<Agree />
			</main>
		</>
	);
}

export default App
