function canShiftString(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    const concatenated = s + s;
    return concatenated.includes(goal);
  }
  
  // Example usage:
  console.log(canShiftString("abcde", "cdeab"));  // Output: true

  