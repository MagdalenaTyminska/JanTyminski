import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
		<>
			<main className='cv-main'>
				<Header />
				<About  />
				<Details  />
				<Agree />
			</main>
		</>
	);
}

export default App
