import scss from './App.module.scss';
import { Header } from './Header/Header';
import { About } from './About/About';
import { Courses } from './Courses/Courses';
import { Form } from './Form/Form';
import { Footer } from './Footer/Footer';

function App() {
	return (
		<>
			<main className={scss.boxApp}>
				<Header />
				<About />
				<Courses />
				<Form />
				<Footer />
			</main>
		</>
	);
}

export { App };
