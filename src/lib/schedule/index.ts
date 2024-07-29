import GoogleJWTClient from "@/lib/google-auth";
import {google} from "googleapis";
import {parse} from 'date-fns'

interface ScheduleResponse {
    pastEvents: Array<ScheduleEntry>;
    futureEvents: Array<ScheduleEntry>;
}


const parseDate = (date: string, time: string): Date => {
    return parse(`${date} ${time}`, 'MM/dd/yyyy h:mm:ss aa', new Date());
}

export const getSchedule = async (): Promise<ScheduleResponse> => {
    const sheets = google.sheets({version: "v4", auth: GoogleJWTClient});
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: '1QcBWYDbfbyNwTIguAlteb5WFzUrT0QIwq_FgrjqIJAc',
        range: "Schedule!A2:J",
    });
    const rows = response.data.values;
    if (!!rows) {
        const events = rows.map((row) => {

            const entry: ScheduleEntry = {
                date: parse(row[0], 'MM/dd/yyyy', new Date()),
                startTime: row[1],
                startDate: parseDate(row[0], row[1]),
                endTime: row[2],
                endDate: parseDate(row[0], row[2]),
                name: row[3],
                locationName: row[4],
                address: row[5],
                city: row[6],
                state: row[7],
                zip: row[8],
                details: row[9],
                imageUrl: row[10],
            };
            return entry;
        });

        events.sort((a, b) => a.date.getTime() - b.date.getTime());
        const pastEvents = events.filter((event) => event.endDate.getTime() < Date.now());
        const futureEvents = events.filter((event) => event.endDate.getTime() >= Date.now());

        pastEvents.reverse();


        return {
            pastEvents,
            futureEvents,
        };


    }
    return {
        pastEvents: [],
        futureEvents: [],
    };
}