import { MusicListProps } from "@/app/page";
import Music from "./Music";

const MusicList = ({ musics }: MusicListProps) => {
  return (
    <div className="p-4">
      {musics?.map((music) => (
        <Music
          key={music.id}
          image={music.image}
          id={music.id}
          src={music.src}
          name={music.name}
          type={music.type}
        />
      ))}
    </div>
  );
};

export default MusicList;
