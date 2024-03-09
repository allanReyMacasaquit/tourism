import { pageLinks, socialinks } from './data';

const Footer = () => {
	let currentYear = new Date().getFullYear();
	return (
		<footer className='section footer'>
			<ul className='footer-links'>
				{pageLinks.map(({ id, href, text }) => (
					<li key={id}>
						<a href={href} className='footer-link'>
							{text}
						</a>
					</li>
				))}
			</ul>

			<ul className='footer-icons'>
				{socialinks.map(({ id, href, icon }) => (
					<li key={id}>
						<a href={href} target='_' className='footer-icon'>
							<i className={icon}></i>
						</a>
					</li>
				))}
			</ul>
			<p className='copyright'>
				copyright &copy; Backroads travel tours company
				<span id='date'>{currentYear}.</span> all rights reserved
			</p>
		</footer>
	);
};
export default Footer;
