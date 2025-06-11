import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "@/css/components/review.module.scss";

type cardProps = {
  name: string;
  role: string;
  message: string;
};

function ReviewCard({ name, role, message }: cardProps) {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.cardData}>
        <h3 className={styles.rName}>{name}</h3>
        <p className={styles.rRole}>{role}</p>
        <div style={{ display: "flex", gap: "1px", height: "15px" }}>
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              style={{ color: "#FFD700", fontSize: "12px" }}
            />
          ))}
        </div>
        <p className={styles.rMessage}>{message}</p>
      </div>
    </div>
  );
}

function Review() {
  return (
    <div className={styles.reviewPage}>
      <div className={styles.headers}>
        <h1 className={styles.priHd}>What our clients say about us</h1>
        <h4 className={styles.secHd}>
          Our unique services always leaves a lasting impression.
        </h4>
      </div>
      <div className={styles.reviewCardCon}>
        {reviewCardData.map((item, index) => (
          <ReviewCard
            key={index}
            name={item.name}
            role={item.role}
            message={item.message}
          />
        ))}
      </div>
    </div>
  );
}

const reviewCardData: cardProps[] = [
  {
    name: "Emmanuel David",
    role: "Product Manager",
    message:
      "The company demonstrated strong adherence to guidelines and professionalism, tailoring each project to its unique requirements. Their commitment to quality and customization makes them a reliable choice for anyone seeking well-crafted, impactful content",
  },
  {
    name: "Paul, UK",
    role: "Product Manager",
    message:
      "Criateur’s services were essential in helping me achieve my project goals. The writing was well-researched, clear, and organized perfectly. Their professionalism and attention to detail, especially in following guidelines, made the process smooth. I highly recommend them for top-quality content.",
  },
  {
    name: "Cyril Okolie",
    role: "CEO, FarmPower And Equipment",
    message:
      "I was genuinely impressed by the depth and professionalism of the insights provided for improving our company’s website. The recommendations were clear, actionable, and exactly what we needed to take the next steps confidently",
  },
  {
    name: "Temidayo, UK",
    role: "Product Manager",
    message:
      "The depth of analysis and attention to detail are always exceptional. The company has always delivered, even with tight deadlines, and the quality has never disappointed.",
  },
];

export default Review;
