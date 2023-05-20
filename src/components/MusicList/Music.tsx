"use client";

import Image from "next/image";

import { MusicType } from "@/app/page";
import { use, useEffect, useRef, useState } from "react";

const Music = ({ image, name, id, src, type }: MusicType) => {
  // const musicRef = useRef<HTMLAudioElement>(null);

  // const playHandler = () => {
  //   musicRef?.current?.play();
  // };

  const [audio, setAudio] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    setAudio(new Audio(src));
  }, []);

  const playHandler = () => {
    audio?.play();
    setIsPlaying(true);
  };

  const pauseHandler = () => {
    audio?.pause();
    setIsPlaying(false);
  };

  return (
    <div className={`flex mb-8 last-of-type:mb-0`}>
      <Image src={image} alt="" className="w-[150px] h-[150px] rounded-md" />
      <div className="flex flex-col justify-between mr-4">
        <span>
          {id}. {name}
        </span>
        <span>ژانر: {type}</span>
        {/* <audio src={src} ref={musicRef} /> */}
        <div className="flex gap-4">
          {!isPlaying ? (
            <button
              onClick={playHandler}
              className="w-max px-4 py-1 border-2 text-green-300 border-green-300 rounded-md hover:text-[#1b1b1b] hover:bg-green-300 transition duration-300"
            >
              منو پلی کن
            </button>
          ) : null}
          {isPlaying ? (
            <button
              onClick={pauseHandler}
              className="w-max px-4 py-1 border-2 text-red-300 border-red-300 rounded-md hover:text-[#1b1b1b] hover:bg-red-300 transition duration-300"
            >
              منو قطع کن
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Music;
