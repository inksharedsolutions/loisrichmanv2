import React from 'react';
import Layout from '../layout/layout';
import { Helmet } from 'react-helmet';
import Banner2 from '../components/banner2';
import Form from '../components/form';
import styles from './css/contact.module.scss';

const Contact = () => {
	return (
		<Layout>
			<Helmet>
				<title>Contact</title>
			</Helmet>
			<Banner2 pagetitle="Contact" />
			<div className="main-nonhome">
				<div className="container">
					<div className="row">
						<div className={`col-lg-12 ${styles.contactContents}`}>
							<p>
								Hello! Are you having a good day? Anyway, if you have any concerns or you just want to
								share something, please feel free to drop me a line. I would love to hear anything from
								you.
							</p>
						</div>
						<div className={`col-lg-12`}>
							<Form />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
