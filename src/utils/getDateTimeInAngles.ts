/**
 * Util to convert date time to polar coordinates.
 *
 * We think of a clock represented in degrees. 12 being 0 degrees, 6 being 180 degrees
 * To calculate degrees from time we take the unit h/m/s, divide that by the number of those units in one
 * revolution of a clock (i.e. minutes its 60). We then times that number by the number of degrees in a complete circular
 * revolution which is 360.
 *
 */

import get12hClock from './get12hrClock';

const getTimeInAngles = (dateTime: Date) => {
  const hours = (get12hClock(dateTime.getHours()) / 12) * 360;
  const minutes = (dateTime.getMinutes() / 60) * 360;
  const seconds = (dateTime.getSeconds() / 60) * 360;
  return { hours, minutes, seconds };
};

export default getTimeInAngles;
