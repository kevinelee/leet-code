function hasPalindromePermutation(theString) {

  const unpairedCharacters = new Set();

  for (let char of theString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  console.log(unpairedCharacters);
  
  return unpairedCharacters.size <= 1;

}