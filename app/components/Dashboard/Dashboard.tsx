import Image from "next/image";
import defaultProfilePicture from "public/defaultProfilePicture.webp";
import getRandomNumber from "@/app/utils/getRandomNumber";
import randomGreetings from "@/app/constants/randomGreetings";
import SearchBar from "../SearchBar/SearchBar";
import "./Dashboard.scss";

export default function Dashboard() {
  const randomGreeting =
    randomGreetings[getRandomNumber(randomGreetings.length)];

  return (
    <header className='header mb-3'>
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
      <SearchBar />
    </header>
  );
}
