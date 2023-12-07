function shortcut(s1, s2) {
  // your code here
	 // Check if either of the input strings is empty
  if (s1 === "" || s2 === "") {
    return "";
  }

  // Get the initial letters of the input strings and convert to uppercase
  const initialLetters = s1.charAt(0) + s2.charAt(0);

  return initialLetters;
	
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
