/**
 * Used to calculate the cartesian co-ordinates to represent an analogue unit of time
 * @param {number} centerX The X center of the clock face
 * @param {number} centerY The Y center of the clock face
 * @param {number} Radius The radius of the clock face
 * @param {number} angleInDegrees The desired angle of the unit of time
 * @return {Object} X and Y co-ordinate
 */
const getCartesian = (
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

export default getCartesian;
