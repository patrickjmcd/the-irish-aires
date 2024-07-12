import Navbar from "../components/Navbar";
import Logo from "@/components/Logo";

const navBar = async () => {


    const songs = {
        label: "Song Sheet",
        href: "/songs",
    };


    return <Navbar items={[songs]} logo={<Logo xl siteName={"The Irish Aires"}/>}
                   textColor="text-gray-950 dark:bg-text-white hover:text-green-400"/>;
};

export default navBar;
