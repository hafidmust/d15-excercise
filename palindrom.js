function palindrome(kata) {
    var len = Math.floor(kata.length / 2)
    for (var i = 0; i < len; i++) {
      if (kata[i] === kata[kata.length - i - 1]) {
        return true
      }
      return false
    }
  }
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
  