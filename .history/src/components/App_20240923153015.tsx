import './App.scss';
import { Header } from './Header/Header';
import { About } from './About/About';
import { Form } from './Header/Header';
import { Footer } from './Header/Header';

function App() {
	return (
		<>
			<main>
				<Header />
				<About />
				<Form />
				<Footer />
			</main>
		</>
	);
}

export default App;
