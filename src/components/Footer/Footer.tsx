import scss from './Footer.module.scss';

const Footer = () => {
	return (
		<div className={scss.footer}>
			<h3>Skontaktuj się ze mną:</h3>
			<ul className={scss.footer__list}>
				<li>
					<a href='tel:+48507656222'>507656222</a>
				</li>
				<li>
					<a href='mailto:tymikk@gmail.com'>tymikk@gmail.com</a>
				</li>
				<li>
					<a href='https://www.linkedin.com/in/jantyminski/' target='_blank' rel='noopener noreferrer'>
						LinkedIn
					</a>
				</li>
				<li>
					<a href='https://www.instagram.com/diving.devops/' target='_blank' rel='noopener noreferrer'>
						Instagram
					</a>
				</li>
			</ul>
		</div>
	);
};

export { Footer };
