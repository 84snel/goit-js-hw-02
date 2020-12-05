const checkForSpam = function (message) {
  const forbiddenWords = ['spam', 'sale'];
  for (let forbiddenWord of forbiddenWords) {
    if (message.toLowerCase().includes(forbiddenWord)) {
      return true;
    }
  }
  return false;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
