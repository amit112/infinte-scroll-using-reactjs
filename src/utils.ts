import moment from "moment";

export class Utils {

   static convertTimestampToReadableTime = (timestamp: number) => {
        return moment(new Date(timestamp*1000)).fromNow()
       }
}