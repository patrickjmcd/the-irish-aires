import Logo from "@/components/Logo";
import CompactFooter from "@/components/Footer/CompactFooter";

const Footer = () => {
    return (
        <div className="bg-gray-400 dark:bg-gray-900">
            <div className="py-4 px-4 text-gray-200">
                <CompactFooter
                    logo={<Logo siteName={"The Irish Aires"} color="text-gray-200"/>}
                    siteTitle={"The Irish Aires"}
                    links={[[{label: "Contact Us", href: "/"}]]}
                />
            </div>
        </div>
    );
};

export default Footer;
