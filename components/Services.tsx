import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import styles from "./services.module.css";
import book from '@/images/Book.svg'
import briefcase from '@/images/Briefcase.svg'
import clipboard from '@/images/Clipboard.svg'
import calender from '@/images/Calendar.svg'
import type { StaticImageData } from "next/image";
import Image from 'next/image';
import styles from '@/css/components/services.module.scss'


function Services() {
  const ser: ServiceProps[] = [
    {
      img: book,
      label: "Content creation & Strategy",
      button: "Learn More",
    },
    {
      img: briefcase,
      label: "Design & Branding",
      button: "Learn More",
    },
    {
      img: clipboard,
      label: "Digital Marketing Management",
      button: "Coming Soon",
    },
    {
      img: calender,
      label: "Marketing Consulting & Auditing",
      button: "Coming Soon",
    },
  ];

  return (
    <div className={styles.services}>
      <div>
        <h1 className={styles.header}>
          Our services gives your business that unique touch
        </h1>
      </div>
      <div className={styles.serviceConParent}>
        {ser.map((item, index) => (
          <Service
            key={index}
            img={item.img}
            label={item.label}
            button={item.button}
          />
        ))}
      </div>
      <div>
        <p className={styles.contentDesc}>
          Your brand’s messaging matters, but getting it right takes time,
          expertise, and strategy. That’s where we come in, to give compelling
          content, standout design. We provide marketing solutions that connect,
          convert, and build trust and confident
        </p>
      </div>
    </div>
  );
}

type ServiceProps = {
  img: StaticImageData;
  label: string;
  button: string;
};


function Service({ img, label, button }: ServiceProps) {
  return (
    <div className={styles.serviceCon}>
      <Image src={img} alt="" className={styles.icon} />
      <div className={styles.labelCon}>
        <h3 className={styles.label}>{label}</h3>
      </div>
      <button className={styles.button}>
        {button} 
        <FontAwesomeIcon icon={faArrowRight} className={styles.buttonIcon} />
      </button>
    </div>
  );
}

export default Services;
