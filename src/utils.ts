import moment from "moment";

export class Utils {

   static convertTimestampToReadableTime = (timestamp: number): string => {
        return moment(new Date(timestamp*1000)).fromNow()
       }
}