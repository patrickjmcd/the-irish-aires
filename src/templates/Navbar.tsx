import Navbar from "../components/Navbar";
import Logo from "@/components/Logo";

const navBar = async () => {

    const home = {
        label: "Home",
        href: "/",
    };


    return <Navbar items={[home]} logo={<Logo xl siteName={"The Irish Aires"}/>}
                   textColor="text-gray-950 dark:bg-text-white hover:text-green-400"/>;
};

export default navBar;
