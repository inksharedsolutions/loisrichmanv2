import React from 'react';
import Layout from '../layout/layout';
import { Helmet } from 'react-helmet';
import Banner2 from '../components/banner2';
import styles from './css/about-the-book.module.scss';

const Book = () => {
	return (
		<Layout>
			<Helmet>
				<title>About the Book</title>
			</Helmet>
			<Banner2 pagetitle="About the Book" />
			<div className="main-nonhome">
				<div className="container">
					<div className="row">
						<div className={`col-md-6 ${styles.aboutTheBookImg}`}>
							<img src="../book.png" alt="Book" />
						</div>
						<div className={`col-lg-6 ${styles.aboutTheBookContents}`}>
							<h2 className="title">
								Key West Interlude
								<span>By Lois Richman</span>
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
							<p>
								Her student Ariel Costa is the victim of sexual abuse by the captain, who had been her
								mentor and provider as well as a father figure. Ariel was aboard that ill-fated trip to
								Islamorada and is considered a person of interest to local authorities. Pregnant with
								Max’s child and only an alcoholic mother and absent father to turn to, who can Ariel
								trust now?
							</p>
							<p>
								Further, there is the issue of $300,000 missing from the safe of Hernandez’s fishing
								boat. If Ariel tells authorities about the one envelope she did take, feeling assured
								Hernandez wanted her to have the money for a new start, she could go to jail and be
								charged with stealing the entire amount.
							</p>
							<p>
								This plays right into the plans of Susanna, the captain’s youngest daughter, who is hot
								to recover the $300,000 so her drug dealer husband will take her back.
							</p>
							<p>
								In between all the action, Key West turns out to be the perfect getaway for Paulette as
								she works through no longer being “someone’s daughter, wife, or mother.” As a woman
								finally able to seek her own road, Paulette hopes she can do the same for Ariel.
							</p>

							<ul className={`${styles.booklinks}`}>
								<li>
									<b>Ebook:</b>
								</li>
								<li>
									<a
										href="https://www.amazon.com/Key-West-Interlude-Lois-Richman-ebook/dp/B07QMP67HG/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Amazon
									</a>
								</li>
								<li>
									<a
										href="https://www.barnesandnoble.com/w/key-west-interlude-lois-richman/1131275986?ean=9781643454658"
										target="_blank"
										rel="noopener noreferrer"
									>
										Barnes &amp; Noble
									</a>
								</li>
							</ul>

							<ul className={`${styles.booklinks}`}>
								<li>
									<b>Paperback:</b>
								</li>
								<li>
									<a
										href="https://www.amazon.com/Key-West-Interlude-Lois-Richman/dp/1643454633/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Amazon
									</a>
								</li>
								<li>
									<a
										href="https://www.barnesandnoble.com/w/key-west-interlude-lois-richman/1131275986"
										target="_blank"
										rel="noopener noreferrer"
									>
										Barnes &amp; Noble
									</a>
								</li>
								<li>
									<a
										href="https://www.booksamillion.com/p/Key-West-Interlude/Lois-Richman/9781643454634"
										target="_blank"
										rel="noopener noreferrer"
									>
										Books-A-Million
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Book;
