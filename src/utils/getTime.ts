/**
 * Util to convert date time to polar coordinates.
 *
 * We think of a clock represented in degrees. 12 being 0 degrees, 6 being 180 degrees
 * To calculate degrees from time we take the unit h/m/s, divide that by the number of those units in one
 * revolution of a clock (i.e. minutes its 60). We then times that number by the number of degrees in a complete circular
 * revolution which is 360.
 *
 */

/**
 * Converts 24hr clock to 12hr clock
 * @param {number} hour The date to convert
 * @return {number} hour from 1 - 12
 */
const convert24hrTo12hr = (hour: number): number => {
  return hour > 12 ? hour - 12 : hour;
};

/**
 * Converts a date into degrees to represent an analogue clock
 * @param {Date} date The date to convert
 * @return {Object} {analogueHours, analogueMinutes, analogueSeconds}
 */
const getTimeInAngles = (date: Date) => {
  const analogueHours = (convert24hrTo12hr(date.getHours()) / 12) * 360;
  const analogueMinutes = (date.getMinutes() / 60) * 360;
  const analogueSeconds = (date.getSeconds() / 60) * 360;
  return { analogueHours, analogueMinutes, analogueSeconds };
};

/**
 * Gets the time in analogue degrees and digital hours, mins, seconds.
 * @return {Object} Analogue and digital hours, minutes and seconds
 */
const getTime = () => {
  const date = new Date();
  // eslint-disable-next-line prettier/prettier
  const { analogueHours, analogueMinutes, analogueSeconds } = getTimeInAngles(date);
  return {
    analogue: {
      hours: analogueHours,
      minutes: analogueMinutes,
      seconds: analogueSeconds,
    },
    digital: {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    },
  };
};

export default getTime;
