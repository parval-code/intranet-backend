import * as moment from 'moment-timezone';

export default function momentInstance(date?: Date){
  return moment(date).tz('America/Santo_Domingo').utc(true);
}

export function momentInstanceV2(date?: Date){
  return momentInstance(date).tz('America/Santo_Domingo').utc(true).startOf('day');
}
export function momentInstanceV3(date?: Date){
  return momentInstance(date).tz('America/Santo_Domingo').add(4,'h').utc(true).startOf('day');
}

export function momentInstanceV4(date?: Date, minutes?: number) {
  return moment(moment(date).format('YYYY-MM-DD HH:mm:ss'))
    .add(minutes, 'minutes').toISOString();
}

export function momentInstanceV5(date?: Date){
  return momentInstance(date).tz('America/Santo_Domingo').add(4,'h').utc(true);
}

