import Navbar from "../components/Navbar";
import Logo from "@/components/Logo";

const navBar = async () => {

    const schedule = {
        label: "Schedule",
        href: "/schedule",
    }
    const songs = {
        label: "Song Sheet",
        href: "/songs",
    };


    return <Navbar items={[schedule, songs]} logo={<Logo xl siteName={"The Irish Aires"}/>}
                   textColor="text-amber-500 dark:bg-text-white"
                   backgroundColor="bg-emerald-800"
                   hoverTextColor={"hover:text-emerald-500"}
    />;
};

export default navBar;
