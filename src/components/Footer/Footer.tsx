import scss from './Footer.module.scss';

const Footer = () => {
	return (
		<div className={scss.footer}>
			<h3>Skontaktuj się ze mną:</h3>
			<ul className={scss.footer__list}>
				<li>Linkedin</li>
				<li>Instagram</li>
				<li>Telefon</li>
				<li>Mail</li>
			</ul>
		</div>
	);
};

export { Footer };
