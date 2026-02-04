import Schedule from '@/templates/Schedule';

export const dynamic = 'force-dynamic';

const SchedulePage = async () => {
    const schedule = await Schedule({ showPastEvents: true });

    return (
        <div className="m-5">
            <div className="flex justify-center items-center">
                <h1 className="text-3xl mb-10 ">Schedule</h1>
            </div>
            {schedule}
        </div>
    );
};

export default SchedulePage;
