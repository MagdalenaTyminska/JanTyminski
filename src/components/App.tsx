import './App.scss';
import { Header } from './Header/Header';
import { About } from './About/About';
import { Form } from './Form/Form';
import { Contact } from './Contact/Contact';

function App() {
	return (
		<>
			<main className='main'>
				<Header />
				<About />
				<Form />
				<Contact />
			</main>
		</>
	);
}

export { App };
