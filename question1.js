function isIsomorphic(s, t) {
    if (s.length !== t.length) {
      return false;
    }
  
    const mapS = {};
    const mapT = {};
  
    for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      const charT = t[i];
  
      if (mapS[charS]) {
        if (mapS[charS] !== charT) {
          return false;
        }
      } else {
        mapS[charS] = charT;
      }
  
      if (mapT[charT]) {
        if (mapT[charT] !== charS) {
          return false;
        }
      } else {
        mapT[charT] = charS;
      }
    }
  
    return true;
  }
  
  // Example usage:
  console.log(isIsomorphic("egg", "add"));  // Output: true
 
  