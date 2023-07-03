function backspaceCompare(s, t) {
    let i = s.length - 1;
    let j = t.length - 1;
  
    while (i >= 0 || j >= 0) {
      i = getNextValidIndex(s, i);
      j = getNextValidIndex(t, j);
  
      if (i < 0 && j < 0) {
        return true;  // Both strings ended simultaneously
      }
  
      if (i < 0 || j < 0 || s[i] !== t[j]) {
        return false;  // Characters don't match
      }
  
      i--;
      j--;
    }
  
    return true;  // Both strings ended simultaneously
  }
  
  function getNextValidIndex(str, index) {
    let backspaceCount = 0;
  
    while (index >= 0) {
      if (str[index] === '#') {
        backspaceCount++;
      } else if (backspaceCount > 0) {
        backspaceCount--;
      } else {
        break;  // Found a valid character
      }
  
      index--;
    }
  
    return index;
  }
  
  // Example usage:
  console.log(backspaceCompare("ab#c", "ad#c"));  // Output: true

  