export const get12hClock = (hour: number): number => {
  return hour > 12 ? hour - 12 : hour;
};

export default get12hClock;
