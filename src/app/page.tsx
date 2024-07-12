import BandPhoto from '../../public/band-photo.jpeg'
import Image from "next/image";


export default function Home() {
    return (
        <div className="min-h-screen">
            <div className="flex-grow flex flex-col">
                <div className="flex-grow flex flex-col items-center justify-center">
                    <h1 className="md:text-6xl text-2xl font-bold text-green-700 mt-5">The Irish Aires</h1>
                    <div className="mx-5 mt-10">
                        <Image src={BandPhoto} alt={"the guys in the band"} className="rounded-lg"/>
                    </div>
                    <p className="md:text-2xl text-l text-gray-700 mt-5">CURRENTLY UNDER CONSTRUCTION</p>
                    <p className="md:text-2xl text-l text-gray-700 mt-5 mb-5">Come back soon?</p>
                </div>
            </div>
        </div>
    );
}
