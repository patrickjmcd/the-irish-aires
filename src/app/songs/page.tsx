import songs from './songs.json'
import Song from "@/components/Song";
import Link from "next/link";

export default function SongPage() {

    const songList = (
        <div>
            <h1 className="text-xl mb-5">Song List</h1>
            <ul>
                {songs.map((song, index) => (
                    <div key={index}>
                        <li className="text-green-700 hover:underline"><Link
                            href={`#${song.title.toLowerCase().replaceAll(' ', '-')}`}>{song.title}</Link></li>
                    </div>
                ))}
            </ul>
        </div>)


    return (
        <div className="m-5">
            <div className="flex justify-center items-center">
                <h1 className="text-3xl mb-10 ">Your Favorite Irish Choruses</h1>
            </div>
            <div className="flex space-x-10">
                <div>

                    {songList}
                </div>
                <div className="flex flex-col">
                    {songs.map((song, index) => (
                        <div key={index} className="mb-5 divide-green-700">
                            <Song title={song.title} chorusLines={song.chorusLines}/>
                            <hr className={"mt-5 border-1"}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
