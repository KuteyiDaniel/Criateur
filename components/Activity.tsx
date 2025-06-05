import React from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "@/css/components/activity.module.scss";
import book from "@/images/Book.svg";
import briefcase from "@/images/Briefcase.svg";
import clipboard from "@/images/Clipboard.svg";
import calender from "@/images/Calendar.svg";

type ServiceProps = {
  img: StaticImageData;
  label: string;
  bgColor: string;
};

function Service({ img, label, bgColor }: ServiceProps) {
  return (
    <div className={styles.serviceCon} style={{ backgroundColor: bgColor }}>
      <Image src={img} alt="" className={styles.icon} />
      <div className={styles.labelCon}>
        <h3 className={styles.label}>{label}</h3>
      </div>
    </div>
  );
}

const colorA = "#FCFCCD";
const colorB = "#FFFFFF";

function Activity() {
  const act: ServiceProps[] = [
    {
      img: book,
      label: "Content creation & Strategy",
      bgColor: colorA,
    },
    {
      img: briefcase,
      label: "Design & Branding",
      bgColor: colorB,
    },
    {
      img: clipboard,
      label: "Digital Marketing Management",
      bgColor: colorA,
    },
    {
      img: calender,
      label: "Marketing Consulting & Auditing",
      bgColor: colorB,
    },
  ];

  return (
    <div className={styles.activity}>
      <div className={styles.textCon}>
        <h1 className={styles.header}>What We Do</h1>
        <p className={styles.pText}>
          We help brands communicate better with strategy, creativity, and
          clarity. Whether you're building from scratch or leveraging up an
          existing presence, our services are designed to meet you where you are
          and move you forward with intention. From content and design to
          digital presence and strategic consulting, we partner with you to
          create marketing that works and lasts.
        </p>
      </div>
      <div className={styles.serviceConParent}>
        {act.map((item, index) => (
          <Service
            key={index}
            img={item.img}
            label={item.label}
            bgColor={item.bgColor}
          />
        ))}
      </div>
    </div>
  );
}

export default Activity;
