import {getSchedule} from "@/lib/schedule";
import Link from "next/link";

interface ScheduleSectionProps {
    eventList: ScheduleEntry[];
}


const ScheduleSection = async ({eventList}: ScheduleSectionProps) => {
    const schedule = await getSchedule();

    return (

        <div className={"m-5"}>
            {eventList.map((entry) => {
                const detailsParts = entry.details?.split('\n');
                const details = detailsParts?.map((part, i) => (<p key={i} className={"pb-2"}>{part}</p>));
                const addressEncoded = encodeURIComponent(`${entry.address} ${entry.city}, ${entry.state} ${entry.zip}`);

                return (<div key={entry.date.toString()} className={"mb-10"}>

                        <h2 className={"text-2xl font-bold uppercase"}>{entry.name}</h2>
                        <div className={"flex md:space-x-8 flex-wrap md:flex-nowrap mt-5"}>
                            <div className={"flex-shrink-0 grow-0"}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td className={"font-bold align-top pr-5"}>When:</td>
                                        <td>{entry.date.toDateString()}</td>
                                    </tr>


                                    <tr>
                                        <td className={"font-bold align-top pr-5"}>Time:</td>
                                        <td>{entry.startDate.toLocaleTimeString([], {
                                            hour: "numeric",
                                            minute: "2-digit",
                                        })} - {entry.endDate.toLocaleTimeString([], {
                                            hour: "numeric",
                                            minute: "2-digit",
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td className={"font-bold align-top pr-5"}>Where:</td>
                                        <td>
                                            <Link
                                                href={`https://www.google.com/maps/search/?api=1&query=${addressEncoded}`}
                                                target={"_blank"}
                                                className={"hover:underline hover:text-emerald-600"}
                                            >
                                                <p>{entry.locationName}</p>
                                                <p>{entry.address}</p>
                                                <p>{entry.city}, {entry.state} {entry.zip}</p>
                                            </Link>
                                        </td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div className={"mt-5 md:mt-0"}>
                                {details}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ScheduleSection;