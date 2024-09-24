const Form = () => {
	return (
		<form>
			<label htmlFor='name'>Imię</label>
			<input
				type='text'
				name='imię'
				pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я
                ])?[a-zA-Zа-яА-Я]*)*$"
				title="Name may contain only letters,
                apostrophe, dash and spaces. For example Adrian, Jacob Mercer,
                Charles de Batz de Castelmore d'Artagnan"
				required={true}
			/>
			<label htmlFor='email'>Email</label>
			<input type='email' name='imię' pattern='' title='' required={true} />
			<button type='submit'>Zapisz się</button>
		</form>
	);
};

export { Form };
