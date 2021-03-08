import React from "react";
import styles from "./css/banner.module.scss";

const Banner = () => {
    return (
        <>
            <div className={`${styles.banner} sect`}>
                <div class="container-fluid">
                    <div className={`col-lg-12 ${styles.bannerContents}`}>
                        <div className={`${styles.bannerHeading}`}>
                            <span className={`${styles.bh1}`}>Keywest</span> 
                            <div className={`${styles.bhimgCont}`}>
                                <div className={`${styles.bhimg}`}></div>
                            </div>
                            <span className={`${styles.bh2}`}>Interlude</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;