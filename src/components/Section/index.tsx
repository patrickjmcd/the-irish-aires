"use client";
import React, {ReactNode, useState} from "react";
import {ChevronDownIcon} from "@heroicons/react/16/solid";

type SectionProps = {
    title?: string;
    description?: string;
    yPadding?: string;
    xPadding?: string;
    children: ReactNode;
    className?: string;
    collapsible?: boolean;
    titleStyle?: string;
    descriptionStyle?: string;
    collapseButtonStyle?: string;
    collapsedByDefault?: boolean;
};

const Section = (props: SectionProps) => {
    const [collapsed, setCollapsed] = useState(!!props.collapsedByDefault);
    const {
        yPadding = "py-5",
        xPadding = "px-3",
        titleStyle = "text-primary",
        descriptionStyle = "dark:text-gray-200 text-gray-700",
        collapseButtonStyle = "text-primary",
    } = props;

    return (
        <div className={`mx-auto max-w-screen-lg ${xPadding} ${yPadding} ${props.className}`}>
            <div
                className="flex items-center justify-between w-full p-5 mb-5 font-medium rtl:text-right rounded-t-xl gap-3">
        <span className={`${collapsed ? "text-left" : "text-center w-full"}`}>
          {props.title && <h2 className={`text-4xl font-bold ${titleStyle}`}>{props.title}</h2>}
            {props.description && <div className={`mt-4 text-xl ${descriptionStyle}`}>{props.description}</div>}
        </span>
                {props.collapsible && (
                    <button type="button" onClick={() => setCollapsed(!collapsed)}>
                        {collapsed ? (
                            <ChevronDownIcon className={`${collapseButtonStyle} h-6 w-6 duration-75`}/>
                        ) : (
                            <ChevronDownIcon
                                className={`${collapseButtonStyle} h-6 w-6 rotate-180 duration-75`}
                            />
                        )}
                    </button>
                )}
            </div>
            {!collapsed && props.children}
        </div>
    );
};

export default Section;
