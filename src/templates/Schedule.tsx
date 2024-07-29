import {getSchedule} from "@/lib/schedule";
import ScheduleSection from "@/templates/ScheduleSection";

interface ScheduleProps {
    showPastEvents: boolean;
}

const Schedule = async ({showPastEvents}: ScheduleProps) => {
    const schedule = await getSchedule();

    return (
        <div className={"flex flex-col mt-10 mb-5"}>
            <h1 className={"text-3xl font-bold self-center uppercase"}>Upcoming Events</h1>
            <div className={"m-10"}>
                {schedule.futureEvents.length === 0 &&
                    <p className={"text-2xl text-center"}>No upcoming performances, check back soon!</p>}
                {schedule.futureEvents.length > 0 && <ScheduleSection eventList={schedule.futureEvents}/>}
            </div>
            {showPastEvents && <h1 className={"text-3xl font-bold self-center uppercase"}>Previous Events</h1>}
            {showPastEvents && (
                <div className={"m-10"}>
                    {schedule.pastEvents.length === 0 &&
                        <p className={"text-2xl text-center"}>No past performances, hopefully the boys will perform
                            someday!</p>}
                    {schedule.pastEvents.length > 0 && <ScheduleSection eventList={schedule.pastEvents}/>}
                </div>
            )}
        </div>
    );
}

export default Schedule;