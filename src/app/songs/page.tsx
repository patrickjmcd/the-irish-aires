import Link from 'next/link';
import Section from '@/components/Section';
import Song from '@/components/Song';
import songs from './songs.json';

export default function SongPage() {
    const songList = (
        <div>
            <ul>
                {songs.map((song, index) => (
                    <div key={index}>
                        <li className="text-emerald-700 dark:text-emerald-200 hover:underline">
                            <Link
                                href={`#${song.title.toLowerCase().replaceAll(' ', '-')}`}
                            >
                                {song.title}
                            </Link>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="m-10">
            <div className="flex justify-center items-center">
                <h1 className="text-3xl mb-10">Your Favorite Irish Choruses</h1>
            </div>
            <div className="flex md:space-x-10 flex-wrap">
                <div className={'w-full md:w-1/3 md:grow-0'}>
                    <Section
                        collapsible
                        title={'Song List'}
                        collapseButtonStyle={'text-emerald-800'}
                    >
                        {songList}
                    </Section>
                </div>

                <div className="flex flex-col grow mt-10 md:mt-0">
                    {songs.map((song, index) => (
                        <div
                            key={index}
                            className="mb-5 divide-green-700 dark:divide-emerald-200"
                        >
                            <Song
                                title={song.title}
                                chorusLines={song.chorusLines}
                            />
                            <Link href={`#`}>
                                <p className="text-emerald-700 dark:text-emerald-200 hover:underline mt-3">
                                    Back to top
                                </p>
                            </Link>
                            <hr className={'mt-5 border'} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
