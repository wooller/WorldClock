/**
 * Does the current path (route) stem from the given parent
 *
 * @param {String} path The current path
 * @param {String} parent The parent to check against
 *
 * @return {Boolean} Whether the path is within the parent route
 */
const doesPathContainParent = (path: string, parent: string) => {
  // If we are on the home path then only return true if we are checking
  // against that or "/home" or "/home/any/other/route"
  if (!parent) {
    return false;
  }
  if (parent === '/') {
    return parent === path || path.indexOf('/home') === 0;
  }

  return path.startsWith(parent);
};

export default doesPathContainParent;
