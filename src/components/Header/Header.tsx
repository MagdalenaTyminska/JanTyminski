import scss from './Header.module.scss';

const Header = () => {
	return (
		<header className={scss.header}>
			<div>
				<h1 className={scss.header__logo}>
					<span className={scss.header__logo_first}>Jan</span>
					<span className={scss.header__logo_second}>Tymiński</span>
				</h1>
			</div>
		</header>
	);
};

export { Header };
