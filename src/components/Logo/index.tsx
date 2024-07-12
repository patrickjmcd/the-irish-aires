import Image from "next/image";
import tiaLogo from "../../../public/logo.png";

type ILogoProps = {
    siteName: string;
    xl?: boolean;
    color?: string;
    logoColor?: "black" | "white";
};

const Logo = (props: ILogoProps) => {
    const size = props.xl ? "44" : "32";
    const fontStyle = props.xl ? "font-semibold text-3xl" : "font-semibold text-xl";
    const color = props.color ? props.color : "text-gray-50";

    return (
        <span className={`inline-flex items-center ${fontStyle} ${color} h-auto`}>
      <Image src={tiaLogo} alt={"The Irish Aires Logo"} className="mr-3" height={size}/>
    </span>
    );
};

export default Logo;
