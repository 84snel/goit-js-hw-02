const findLongestWord = function (string) {
  const words = string.split(' ');
  let longesWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longesWord.length) {
      longesWord = words[i];
    }
  }
  return longesWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
