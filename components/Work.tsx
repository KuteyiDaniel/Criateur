import React from "react";
import collab from "@/images/Collaboration-pana.svg";
import type { StaticImageData } from "next/image";
import Image from 'next/image';
import styles from '@/css/components/work.module.scss'

function Work() {
  const stepValues: WorkProps[] = [
    {
      num: "1",
      stepName: "Get in Touch",
      text: "Let us know what you're looking for . we're great listeners",
    },
    {
      num: "2",
      stepName: "Book a Free Consultation",
      text: "We'll dive deep into your needs and craft a personalized plan",
    },
    {
      num: "3",
      stepName: "Launch With Confidence",
      text: "We bring your project to life, on time, with care and excellence.",
    },
  ];

  return (
    <div className={styles.contentParent}>
      <div className={styles.textCon}>
        <h1 className={styles.mainText}>How we work with you</h1>
        <p className={styles.subText}>We are all about giving your business that personal touch</p>
      </div>
      <div className={styles.contentCon}>
        <div className={styles.imgCon}>
          <Image src={collab} alt="" className={styles.img}></Image>
        </div>
        <div className={styles.stepsCon}>
          {stepValues.map((item, index) => (
            <Step
              key={index}
              num={item.num}
              stepName={item.stepName}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type WorkProps = {
  num: string;
  stepName: string;
  text: string;
}

function Step({ num, stepName, text }: WorkProps) {
  return (
    <div className={styles.step}>
      <h3 className={styles.stepMainText}>
        Step {num}: {stepName}
      </h3>
      <p className={styles.stepSubText}>{text}</p>
    </div>
  );
}

export default Work;
