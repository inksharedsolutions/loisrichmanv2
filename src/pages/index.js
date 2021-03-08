import React from 'react';
import Layout from '../layout/layout';
import { Helmet } from 'react-helmet';
import Banner from '../components/banner';
import { Link } from 'gatsby';
import styles from './css/home.module.scss';

const Home = () => {
	return (
		<Layout className="home">
			<Helmet>
				<title>Home</title>
			</Helmet>
			<Banner />
			<div className={`sect ${styles.ataCont}`}>
				<div className="container">
					<div className="row">
						<div className={`col-md-6 ${styles.aboutTheAuthorImg}`}>
							<img src="../author.png" alt="Author" />
						</div>
						<div className={`col-lg-6 ${styles.aboutTheAuthorContents}`}>
							<p class="span-taglines">
								<span class="f-name">Author</span>
								<span class="amper">&amp;</span>
								<span>Writer</span>
							</p>
							<h2 className="title">
								<span>Lois</span> <span>Richman</span>
							</h2>
							<p>
								Lois Richman left Palm Beach, Florida and went directly to Hollywood, California right
								after graduation from high school where she was hired as a columnist and west coast
								editor for various fan magazines. She also wrote articles for national women's magazines
								before she finished her formal education at Cal State Northridge, earning a B.A. in
								English Literature.
							</p>
							<div className="readMoreCont">
								<Link to="/about-the-author" className="readMore">
									Read More
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`sect`}>
				<div className="container">
					<div className="row">
						<div className={`col-lg-6 ${styles.aboutTheBookContents}`}>
							<p class="span-taglines">
								<span>Featured Book</span>
							</p>
							<h2 className="title">
								<span>Keywest</span>
								<span>Interlude</span>
							</h2>
							<p>
								Captain Maxwell Hernandez has been found dead next to his fishing vessel, The Ramblin’
								Rose, facedown in the waters at the Bahia Honda Inlet near Key West, Florida.
							</p>
							<p>
								Meanwhile, Paulette Marshall has left her mansion on top of Mulholland Drive in the very
								rich and prestigious Bel Air, California, neighborhood after winning the property during
								a very contentious divorce she did not want. Arriving at Key West, she is hired by the
								local high school as a counselor.
							</p>
							<div className="readMoreCont">
								<Link to="/about-the-book" className="readMore">
									Read More
								</Link>
							</div>
						</div>
						<div className={`col-md-6 ${styles.aboutTheBookImg}`}>
							<img src="../book.png" alt="Book" />
						</div>
					</div>
				</div>
			</div>

			<div className={`${styles.newsletterCont}`}>
				<div className="container">
					<div className="row">
						<div className={`col-lg-12 ${styles.newsletter}`}>
							<h2 className="title">
								<span>Newsletter</span>
							</h2>
							<p>Stay up to date with latest from me</p>

							<form action="#" method="post" className={`${styles.newsletterForm}`}>
								<input
									type="email"
									name="newsletterEmail"
									data-submit="newsletterSubmit"
									autocomplete="off"
									placeholder="Enter your e-mail address"
									required
								/>
								<input type="submit" value="Sign up" />
								<div className={`${styles.formMessage}`}>
									<p>Success!</p>
								</div>
								<div className={`${styles.loader}`} />
							</form>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
