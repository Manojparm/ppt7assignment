function isStrobogrammatic(num) {
    const strobogrammaticDigits = {
      '0': '0',
      '1': '1',
      '6': '9',
      '8': '8',
      '9': '6',
    };
  
    let left = 0;
    let right = num.length - 1;
  
    while (left <= right) {
      const leftDigit = num[left];
      const rightDigit = num[right];
  
      if (!(leftDigit in strobogrammaticDigits) || strobogrammaticDigits[leftDigit] !== rightDigit) {
        return false;
      }
  
      left++;
      right--;
    }
  
    return true;
  }
  
  // Example usage:
  console.log(isStrobogrammatic("69"));