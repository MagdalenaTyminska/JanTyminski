import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
		<>
			<main >
				<Header />
				<About  />
				<Form  />
				<Footer />
			</main>
		</>
	);
}

export default App
