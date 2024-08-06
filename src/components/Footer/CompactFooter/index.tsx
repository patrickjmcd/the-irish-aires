import type {ReactNode} from "react";

import {FooterCopyright} from "../FooterCopyright";
import {SocialIcon} from "react-social-icons";

interface FooterLink {
    label: string;
    href: string;
}

type ICenteredFooterProps = {
    logo?: ReactNode;
    siteTitle: string;
    links?: FooterLink[][];
};

const CenteredFooter = (props: ICenteredFooterProps) => (
    <div
        className={"flex flex-col"}
    >
        <div className="flex justify-between">
            <nav className="flex">
                {props.links?.map((linkColumn, index) => (
                    <ul key={index} className="navbar flex flex-row items-center font-medium text-gray-200">
                        {linkColumn.map((link, index) => (
                            <li key={index} className="mx-2 py-3">
                                <a href={link.href} className="hover:text-primary">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                ))}
            </nav>
            <div className="text-sm self-center">
                <FooterCopyright title={props.siteTitle}/>
            </div>
        </div>
        <div className="flex place-content-center">
            <div className={"flex space-x-2 justify-between"}>
                <SocialIcon url={"https://www.instagram.com/theirishaires"} target={"_blank"}/>
                <SocialIcon url={"https://www.facebook.com/irishaires"} target={"_blank"}/>
                <SocialIcon url={"https://www.twitter.com/theirishaires"} target={"_blank"}/>
                <SocialIcon url={"https://youtu.be/JD91pxnBusE"} network={"youtube"} target={"_blank"}/>
                <SocialIcon url={"https://open.spotify.com/artist/3fMFzyejXMaQC9YjvOT8fx?si=wLImHumNRGOEffuCVUIT8g"}
                            target={"_blank"}/>
                <SocialIcon url={"https://music.apple.com/us/artist/the-irish-aires/362448368"} network={"itunes"}
                            target={"_blank"}/>
            </div>

        </div>
    </div>
);

export default CenteredFooter;
