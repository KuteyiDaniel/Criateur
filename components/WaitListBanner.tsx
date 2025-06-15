import React from "react";
import styles from "@/css/components/waitListBan.module.scss";
import Image from "next/image";
import image1 from "@/images/image1.png"

function WaitListBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.txtSection}>
        <h1 className={styles.mainText}>Creative Marketing<br /> Smarter Growth</h1>
        <h3 className={styles.subText}>
          Join other businesses, individuals and companies who are enjoying
          comprehensive marketing solutions. Elevate your business and achieve
          measurable success with Criateur
        </h3>
      </div>
      <div className={styles.designSection}>
        <div className={styles.ellipseBackground}></div>
        <Image src={image1} alt="" className={styles.img}></Image>
      </div>
    </div>
  );
}

export default WaitListBanner;
