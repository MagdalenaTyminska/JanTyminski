import { useEffect } from 'react';
// import scss from './Form.module.scss';

const Form = () => {
	useEffect(() => {

		const script = document.createElement('script');
		script.src = 'https://assets.mailerlite.com/js/universal.js';
		script.async = true;

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div className='ml-embedded' data-form='gVUj3w'>
			dupa
		</div>
		// <form className={scss.form}>
		// 	<h2>Zapisz się do newslettera!</h2>
		// 	<label htmlFor='name'>Imię</label>
		// 	<input
		// 		type='text'
		// 		name='imię'
		// 		pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
		// 		title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
		// 		required={true}
		// 	/>
		// 	<label htmlFor='email'>Email</label>
		// 	<input type='email' name='email' required={true} />
		// 	<label htmlFor='phone'>Telefon</label>
		// 	<input type='tel' name='phone' pattern='^\+?[0-9]{9,15}$' title='Wprowadź prawidłowy numer telefonu. Przykład: +48123456789' required={true} />
		// 	<div>
		// 		<input type='checkbox' name='privacyPolicy' required={true} />
		// 		<label htmlFor='privacyPolicy'>Akceptuję politykę prywatności i regulamin newslettera.</label>
		// 	</div>
		// 	<button type='submit'>Zapisz się</button>
		// </form>
	);
};

export { Form };
