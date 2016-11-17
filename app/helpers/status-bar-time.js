import Ember from 'ember';
import moment from 'moment';

export function statusBarTime([time, remaining]/*, hash*/) {
  console.log(time)
  const formattedTime = (() => {
    const localOffset = moment().format('Z');
    const isoTime = moment(time, 'YYYY-MM-DDThh:mm:ss.SSSZ').toISOString();

    if(time && remaining) {
      const timeFormat = remaining < 48 * 60 * 60 * 1000 ? 'hh:mm:ss' : 'D [days]'
      return moment.utc(remaining).format(timeFormat);
    }

    return moment(isoTime.replace(/Z/, localOffset)).format('MM/DD/YYYY hh:mm A');
  })();

  return formattedTime
}

export default Ember.Helper.helper(statusBarTime);
