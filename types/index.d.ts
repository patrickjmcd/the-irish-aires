declare interface ScheduleEntry {
    date: Date;
    startTime: string;
    startDate: Date;
    endTime: string;
    endDate: Date;
    name: string;
    locationName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    details?: string;
    imageUrl?: string;
}