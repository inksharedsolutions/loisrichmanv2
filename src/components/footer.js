import React from "react";
import { Link } from "gatsby";
import styles from "./css/footer.module.scss";

const Footer = () => {
    return (
        <>
            <footer className={``}>
                <div className={`${styles.footer} sect`}>
                    <div className="container">
                        <div className="row">
                            <div className={`col-lg-6`}>
                                <div className={`${styles.contactInfo}`}>
                                    <h2 className="title">GET IN TOUCH</h2>
                                    <p className={`${styles.contactText}`}>
                                        Lois Richman loves to hear from readers. You can reach her book via email. Feel free to send questions about writing, her works, interviews and other publicity matters.
                                    </p>
                                    <ul>
                                        <li>
                                            <a href="mailto:publish@stratton-press.com">publish@stratton-press.com</a>
                                        </li>
                                        <li>
                                            <a href="tel:8883237009">888-323-7009</a>
                                        </li>
                                        <li>
                                            831 N Tatnall Street, Suite M #188<br />Wilmington, DE 19801
                                        </li>
                                    </ul>
                                    <div className={`${styles.agreement}`}>
                                        <Link to="/terms-and-conditions">Terms and Conditions</Link>{' '}
                                        <Link to="/privacy-policy">Privacy Policy</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={`${styles.mapCont}`}>
                                    <iframe
                                        className={`${styles.map}`}
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12271.023799138637!2d-75.5511194!3d39.7451326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1162fb82ac3090ab!2sStratton%20Press%20Inc.!5e0!3m2!1sen!2sph!4v1584126833957!5m2!1sen!2sph"
                                        frameborder="0"
                                        allowfullscreen=""
                                        aria-hidden="false"
                                        title="Google map"
                                    />
                                </div>
                                <div  className={`${styles.socialMedia}`}>
                                    <a className={`${styles.socialMediaIcon}`} href="https://www.facebook.com/Lois-Richman-1960211394027015/" target="_blank" rel="noopener noreferrer"><img src="../sm-facebook.png" alt="Facebook"/></a>{' '}
                                    <a className={`${styles.socialMediaIcon}`} href="https://twitter.com/strattonpress/" target="_blank" rel="noopener noreferrer"><img src="../sm-twitter.png" alt="Twitter"/></a>{' '}
                                    <a className={`${styles.socialMediaIcon}`} href="https://www.instagram.com/strattonpress/" target="_blank" rel="noopener noreferrer"><img src="../sm-instagram.png" alt="Instagram"/></a>{' '}
                                    <a className={`${styles.socialMediaIcon}`} href="https://www.goodreads.com/book/show/45163586-key-west-interlude" target="_blank" rel="noopener noreferrer"><img src="../sm-goodreads.png" alt="Goodreads"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.copyright}`}>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                Copyright &copy; 2020. Lois Richman. All rights reserved.
                            </div>
                            <div class="col-md-6">
                                Developed by: <a href="https://stratton-press.com/" target="_blank" rel="noopener noreferrer">Stratton Press</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
