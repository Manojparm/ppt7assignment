function checkStraightLine(coordinates) {
    if (coordinates.length <= 2) {
      return true;  // Any 2 points form a straight line
    }
  
    const [x0, y0] = coordinates[0];
    const [x1, y1] = coordinates[1];
    const initialSlope = getSlope(x0, y0, x1, y1);
  
    for (let i = 2; i < coordinates.length; i++) {
      const [x, y] = coordinates[i];
      const slope = getSlope(x0, y0, x, y);
  
      if (slope !== initialSlope) {
        return false;  // Slopes are not equal, points don't form a straight line
      }
    }
  
    return true;  // All slopes are equal, points form a straight line
  }
  
  function getSlope(x1, y1, x2, y2) {
    return (y2 - y1) / (x2 - x1);
  }
  
  // Example usage:
  console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]));  // Output: true

  