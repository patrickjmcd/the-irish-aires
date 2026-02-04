import Image from 'next/image';
import Schedule from '@/templates/Schedule';
import BandPhoto from '../../public/band-photo.jpeg';

export const dynamic = 'force-dynamic';

const Home = async () => {
    const schedule = await Schedule({ showPastEvents: false });
    return (
        <div className="grow flex flex-col">
            <div className="grow flex flex-col items-center justify-center">
                <h1 className="md:text-6xl text-4xl text-green-700 dark:text-emerald-50 mt-5 uppercase">
                    The Irish Aires
                </h1>
                <div className="mx-5 mt-10">
                    <Image
                        src={BandPhoto}
                        alt={'the guys in the band'}
                        className="rounded-lg max-h-screen"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </div>
                {schedule}
            </div>
        </div>
    );
};

export default Home;
