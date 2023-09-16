import styles from './styles.module.css';
import Image from 'next/image';
import defaultProfilePicture from 'public/profileTEST.png';
import getRandomNumber from '@/app/utils/getRandomNumber';
import randomGreetings from '@/app/constants/randomGreetings';

export default function Dashboard() {
  const randomGreeting =
    randomGreetings[
      getRandomNumber(randomGreetings.length)
    ];

  return (
    <header>
      <section className={styles.dashboardContainer}>
        <div className={styles.textContainer}>
          <p>Hello, [NAME]</p>
          <p>{randomGreeting}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={defaultProfilePicture}
            alt='Profile picture'
            className={styles.profilePicture}
            width={55}
            height={55}
          />
        </div>
      </section>
    </header>
  );
}
