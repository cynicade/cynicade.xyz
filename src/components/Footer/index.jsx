import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			&copy; {new Date().getFullYear()} cynicade
			<small className={Styles.byline}>🚀 Built with AstroJS</small>
		</footer>
	);
}
export default Footer;
