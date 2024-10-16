import photo from '../../assets/photo.jpg';
import scss from './About.module.scss';

const About = () => {
	return (
		<div className={scss.about}>
			<img className={scss.about__photo} src={photo} alt='Jan Tymiński profile photo' />
			<div className={scss.about__info}>
				<h2>Nazywam się Jan Tymiński i chciałbym Ci opowiedzieć coś o sobie!</h2>
				<p>1st degree connection1st Senior DevOps Engineer | AWS Community Builder | AWS, Terraform, Docker, CI/CD</p>
				<p>
					If you want to place me an offer, please see the guidance at https://offers.tymik.me Not actively looking 👀 AWS ☁ | Linux 🐧 | DevOps ♾️ | 👨‍🎓 Kubernetes Automation | CI/CD - CircleCI
					Contact: 📩 tyminski.jan@gmail.com 📵 no calling without prior appointment 🙏 Hobbies: Motorcycles 🏍️ | CrossFit 🏋️ | Calisthenics | SCUBA 🤿 | OCRs 🏃 | Post-Apocalyptic books 📖 ⏳ = 💰 so
					please follow the guidance: https://offers.tymik.me
				</p>
			</div>
		</div>
	);
};

export { About };
