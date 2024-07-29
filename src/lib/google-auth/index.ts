import {google} from "googleapis";

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];


const makeJwtClient = async () => {
    const serviceAccountB64 = process.env.GOOGLE_SA_B64 || ''


    try {
        const serviceAccount = JSON.parse(Buffer.from(serviceAccountB64, 'base64').toString())
        const jwtClient = new google.auth.JWT(
            serviceAccount.client_email,
            undefined,
            serviceAccount.private_key,
            SCOPES
        );
        const authResult = await jwtClient.authorize();
        console.log(authResult);
        return jwtClient;
    } catch (e) {
        console.error(e);
        throw e;
    }
}


export default await makeJwtClient();
