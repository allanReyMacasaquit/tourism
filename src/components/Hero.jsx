import { herolinks } from './data';

const Hero = () => {
	return (
		<section className='hero' id='home'>
			<div className='hero-banner'>
				{herolinks.map(({ id, title, text, href, btnText }) => (
					<div key={id}>
						<h1>{title}</h1>
						<p>{text}</p>
						<a href={href} className='btn hero-btn'>
							{btnText}
						</a>
					</div>
				))}
			</div>
		</section>
	);
};
export default Hero;
