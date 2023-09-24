import "./Dashboard.scss";
import Image from "next/image";
import defaultProfilePicture from "public/defaultProfilePicture.webp";
import getRandomNumber from "@/app/utils/getRandomNumber";
import randomGreetings from "@/app/constants/randomGreetings";

export default function Dashboard() {
  const randomGreeting =
    randomGreetings[getRandomNumber(randomGreetings.length)];

  return (
    <header>
      <section className='dashboard-container flex justify-between px-4'>
        <div className='text-container'>
          <p>Hello, [NAME]</p>
          <p>{randomGreeting}</p>
        </div>
        <div className='image-container flex'>
          <Image
            src={defaultProfilePicture}
            alt='Profile picture'
            className='profile-picture'
            loading='lazy'
            width={55}
            height={55}
          />
        </div>
      </section>
    </header>
  );
}
