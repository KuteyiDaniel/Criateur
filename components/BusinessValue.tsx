import React from 'react'
import styles from '@/css/components/businessValue.module.scss'
import Image from 'next/image';
import img from '@/images/2cee07ec1d06ec4999ad4d8de2eb2645 (1).jpg'

type cardProps = {
  hText: string,
  pText: string,
}

function Card({hText, pText}: cardProps) {
  return(
    <div className={styles.card}>
      <h3 className={styles.cardHd}>{hText}</h3>
      <p className={styles.cardBd}>{pText}</p>
    </div>
  )
}

const cardValues: cardProps[] = [
  {hText: 'Strategic Direction:', pText: 'Gain clarity on your brand voice, messaging, and audience engagement approach.'},
  {hText: 'Stronger Brand Presence:', pText: 'Build trust and recognition with consistent, high quality communication'},
  {hText: 'Time Back for What Matters:', pText: 'Free up internal resources while we handle your content and communication needs with precision'},
  {hText: 'Creative Expertise on Demand:', pText: 'Access a skilled team that thinks with you, not just for you. Bringing fresh ideas to the table.'},
]

function BusinessValue() {
  return (
    <div className={styles.body}>
      <div className={styles.headerCon}>
        <h1 className={styles.header}>We add great value to your business</h1>
      </div>
      <div className={styles.bodyCon}>
        <div className={styles.cardsCon}>
          {cardValues.map((card, index) => (
            <Card key={index} hText={card.hText} pText={card.pText} />
          ))}
        </div>
        <div className={styles.imageCon}>
          <Image src={img} alt='' className={styles.img}></Image>
        </div>
      </div>
      <div style={{height: '50px', width: '100%', background: '#00007B', display: "block"}}></div>
    </div>
  )
}

export default BusinessValue