import { StaticImageData } from "next/image";
import MusicList from "@/components/MusicList/MusicList";
import quietNightImage from "../../public/images/quiet-nights.jpeg";
import reminiscenceImage from "../../public/images/Matthew-Paull-Reminiscence-2023.jpeg";

import peacefulGuitarVol12 from "../../public/images/Peaceful-Guitar-Vol-12.jpeg";

import aliSautIamge from "../../public/images/Ali-Suat-Tukel-Serhat-Songur-Plays-Sezen-Aksu-2023.jpeg";

export default function Home() {
  const musicArrays: MusicType[] = [
    {
      image: quietNightImage,
      name: "Silent Reflections",
      id: 1,
      src: "https://db.vmusic.ir/2023/05/Sleep%20Tales%20-%20Quiet%20Nights%20(2023)/128k/10)%20Corey%20J.%20Beats%20-%20Silent%20Reflections.mp3",
      type: "Lo-Fi",
    },
    {
      image: reminiscenceImage,
      name: "Muriwai",
      id: 2,
      src: "https://db.vmusic.ir/2023/01/Matthew%20Paull%20-%20Reminiscence%20(2023)/128k/01)%20Matthew%20Paull%20-%20Muriwai.mp3",
      type: "آرامش بخش، عاشقانه",
    },
    {
      image: peacefulGuitarVol12,
      name: "On The Nature Of Daylight",
      id: 3,
      src: "https://db.vmusic.ir/2023/05/Peaceful%20Guitar%20Vol%2012/128k/02)%20Beyond%20The%20Guitar%20-%20On%20The%20Nature%20Of%20Daylight%20-%20Instrumental%20Guitar.mp3",
      type: "Classical Crossover، Instrumental، New Age",
    },
    {
      image: aliSautIamge,
      name: "Minik Serçe",
      id: 4,
      src: "https://db.vmusic.ir/H/2023/05/Ali%20Suat%20T%C3%BCkel%20&%20Serhat%20Songur%20-%20Plays%20Sezen%20Aksu%20(2022)/128k/01)%20Ali%20Suat%20T%C3%BCkel%20&%20Serhat%20Songur%20-%20Minik%20Ser%C3%A7e.mp3",
      type: "آرامش بخش، عاشقانه",
    },
  ];

  return (
    <main className="flex flex-col w-screen p-20">
      <div className="flex items-center">
        <h4 className="my-10 ml-12 text-green-400">
          فعلا معلوم نیست اینجا چه خبر باشه
        </h4>
        <p className="animate-walker">سایت در حال طراحیه...</p>
      </div>
      <h3 className="mb-8">فعلا اهنگ هست :)</h3>

      <MusicList musics={musicArrays} />
      <p className="my-8">
        برای شنیدن بیشتر به سایت <a href="https://vmusic.ir" target="_blank" className="text-purple-400">والا موزیک</a>{" "}
        مراجعه کنید
      </p>
    </main>
  );
}

export interface MusicType {
  image: StaticImageData;
  name: string;
  id: number;
  src: string;
  type: string;
}

export interface MusicListProps {
  musics: MusicType[];
}
