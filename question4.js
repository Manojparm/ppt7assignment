function reverseWords(s) {
    const words = s.split(" ");
  
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseString(words[i]);
    }
  
    return words.join(" ");
  }
  
  function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  // Example usage:
  console.log(reverseWords("Let's take LeetCode contest"));  // Output: "s'teL ekat edoCteeL tsetnoc"
 
  