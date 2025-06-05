import React from 'react'
import styles from '@/app/waitlist/waitlist.module.scss'
import Activity from '@/components/Activity'
import WaitListForm from '@/components/WaitListForm'

const WaitList = () => {
  return (
    <div className={styles.waitlist}>
      {/*  */}

      {/* What we do */}
      <Activity />
      {/* Form */}
      <WaitListForm />
    </div>
  )
}

export default WaitList