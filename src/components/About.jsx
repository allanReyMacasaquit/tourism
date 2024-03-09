import aboutImg from '../images/about.jpeg';
import Title from './Title';
import { aboutlinks } from './data';
const About = () => {
	return (
		<section className='section' id='about'>
			<Title title='about' subtitle='us' />

			<div className='section-center about-center'>
				<div className='about-img'>
					<img src={aboutImg} className='about-photo' alt='awesome beach' />
				</div>
				<article className='about-info'>
					{aboutlinks.map(({ id, title, text1, text2, href, btnText }) => (
						<div key={id}>
							<h3>{title}</h3>
							<p>{text1}</p>
							<p>{text2}</p>
							<a href={href} className='btn'>
								{btnText}
							</a>
						</div>
					))}
				</article>
			</div>
		</section>
	);
};
export default About;
