
/**
 * Calculates the coordinates of a point in 3D space for different types of orbits.
 *
 * @param {number} index - The current index in the orbit sequence.
 * @param {number} totalCalls - The total number of calls to this function in the orbit sequence.
 * @param {number} randomValue - A random value to determine the type of orbit.
 * @param {Object} coordinates - The initial coordinates of the point (optional).
 * @param {number} coordinates.x - The initial x-coordinate (default: 0).
 * @param {number} coordinates.y - The initial y-coordinate (default: 0).
 * @param {number} coordinates.z - The initial z-coordinate (default: 0).
 * @returns {Object} An object containing the updated coordinates (x, y, z), current index, and random value.
 */
export const calculateOrbitCoordinates = (index:number, totalCalls:number, randomValue:number, { x = 0, y = 0, z = 0 }) => {
    let phi, theta
   
   // Determine the axis or combination of axes for the orbit based on the random value
   if (randomValue < 0.2) {
     // Orbit around the x-axis
     phi = Math.acos(1 - 2 * (index / totalCalls));
     theta = 2 * Math.PI * (index / totalCalls);
   } else if (randomValue < 0.4) {
     // Orbit around the y-axis
     phi = 2 * Math.PI * (index / totalCalls);
     theta = Math.acos(1 - 2 * (index / totalCalls));
   } else if (randomValue < 0.6) {
     // Orbit around the z-axis
     phi = 2 * Math.PI * (index / totalCalls);
     theta = 2 * Math.PI * (index / totalCalls);
   } else if (randomValue < 0.8) {
     // Orbit between x and y axes
     phi = Math.acos(1 - 2 * (index / totalCalls));
     theta = Math.acos(1 - 2 * (index / totalCalls));
   } else if (randomValue < 0.9) {
     // Orbit between y and z axes
     phi = 2 * Math.PI * (index / totalCalls);
     theta = Math.acos(1 - 2 * (index / totalCalls));
   } else {
     // Orbit between x and z axes
     phi = Math.acos(1 - 2 * (index / totalCalls));
     theta = 2 * Math.PI * (index / totalCalls);
   }
   
     const radius = 3; // You can adjust the radius as needed
   
     x += radius * Math.sin(phi) * Math.cos(theta);
     y += radius * Math.sin(phi) * Math.sin(theta);
     z += radius * Math.cos(phi);
   
     return { x, y, z };
   }
   