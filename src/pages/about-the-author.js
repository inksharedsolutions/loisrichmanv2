import React from 'react';
import Layout from '../layout/layout';
import { Helmet } from 'react-helmet';
import Banner2 from '../components/banner2';
import styles from './css/about-the-author.module.scss';

const Author = () => {
	return (
		<Layout>
			<Helmet>
				<title>About the Author</title>
			</Helmet>
			<Banner2 pagetitle="About the Author" />
			<div className="main-nonhome">
				<div className="container">
					<div className="row">
						<div className={`col-lg-6 ${styles.aboutTheAuthorImg}`}>
							<img src="../author.png" alt="Author" />
						</div>
						<div className={`col-lg-6 ${styles.aboutTheAuthorContents}`}>
							<p>
								Lois Richman left Palm Beach, Florida and went directly to Hollywood, California right
								after graduation from high school where she was hired as a columnist and west coast
								editor for various fan magazines. She also wrote articles for national women’s magazines
								before she finished her formal education at Cal State Northridge, earning a B.A. in
								English Literature.
							</p>
							<p>
								Teaching for the L.A. Unified School District, she taught in gang schools (the basis for
								her soon-to-be completed third novel in the Paulette Marshall Mystery Series, entitled
								L.A. Interlude.) Her year in Key West “to do my Ernest Hemingway thing” resulted in a
								novel entitled “Wanted First Mate” and the first draft for the trilogy, “Key West
								Interlude” (both available on Amazon.com.) Returning to Florida, she earned her Master’s
								Degree at F.A.U. As a professor at the college level for Keiser University, she
								established their ESL Department for the West Palm Beach campus where her students
								learned English and American skills. Her students were from such countries as China,
								South Korea, Europe, and South America.
							</p>
							<p>
								A serious interest in human nature and its journeys, her books capture the essence of
								today’s society as told through her characters. The travails of Paulette Marshall help
								the reader escape into her fast-paced, page-turning and intimate style, giving a good
								read that will make a reader laugh or cry while becoming involved and excited by their
								ongoing problems and resolutions. She is a swimmer; she gardens, reads, and loves to
								bring her two rescues, Foxie and Pearlie, along wherever she may go. She is also a
								collector of movie memorabilia including a “Gone with the Wind” poster board, Disney
								art, and various dress sketches from “Suddenly Last Summer”, “Raintree County,” and
								“Boys Town”. She currently resides in Florida.
							</p>
							<hr />
							<div className={`${styles.ataSig}`}>
								<h2>Lois Richman</h2>
								<span>Author | Writer</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Author;
