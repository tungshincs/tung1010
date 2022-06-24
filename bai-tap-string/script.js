// 1.Viết hàm capitalize(str) nhận vào một chuỗi, trả về chuỗi chỉ viết hoa ký tự đầu tiên, tất cả
// ký tự khác viết thường, loại bỏ khoảng trắng ở 2 đầu nếu có
// capitalize("hello world"); // Hello World
// capitalize("javascript is fun"); // Javascript is fun

function capitalize(str) {
  return str.map((value) => {
    return value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
  });
}

console.log(capitalize(["hello world"]));

console.log(capitalize(["javascript is fun"]));

// 2. Viết hàm title(str) nhận vào một chuỗi, trả về chuỗi dạng viết hoa chữ cái đầu tiên của từng
// từ, những chữ cái khác phía sau viết thường, lưu ý loại bỏ phần khoảng trắng ở 2 đầu nếu có.

// title("hello world"); // Hello World
// title(" ba nGuyỄn "); // Ba Nguyễn

function title(str) {
  let arrayStr = str.trim().split(" ");

  return arrayStr.map(function (value) {
    return value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
  });
}

console.log(title("hello world"));
console.log(title("      ba nGuyỄn    "));

// Viết hàm protectEmail(email) nhận vào một chuỗi là địa chỉ email, trả về chuỗi email dạng
// rút gọn, chỉ hiển thị 2 ký tự đầu và thay thế các ký tự khác trước @ dấu ...

// protectEmail("banx9x@gmail.com"); // ba...@gmail.com
// protectEmail("phoebedo@gmail.com"); // ph...@gmail.com

function protectEmail(email) {
  let emailSplit = email.split("@");

  let part1 = emailSplit[0];

  let part2 = emailSplit[1];

  part1 = part1.substring(0, 2);

  return part1 + "...@" + part2;
}

console.log(protectEmail("tungshincs@gmail.com"));

console.log(protectEmail("phoebedo@gmail.com"));

// 4.. Viết hàm reverse(str) nhận vào một chuỗi, trả về chuỗi đảo ngược tất cả ký tự

// reverse("hello"); // olleh
// reverse("béo ú"); // ú oéb

function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("béo ú"));

console.log(reverse("Tùng Shin"));

// 5.Viết hàm countVowel(str) nhận vào một chuỗi, trả về số ký tự nguyên âm có trong chuỗi, các
// ký tự nguyên âm là aeiou

// countVowel('hello'); // 3

function countVowel(str) {
  let count = str.match(/[aeiou]/g).length;

  return count;
}

console.log(countVowel("hello"));

console.log(countVowel("gemini"));

// 6. Viết hàm reverseWords(str) nhận vào một chuỗi, trả về chuỗi đảo ngược thứ tự các từ
// (không phải toàn bộ ký tự)

// reverseWords('The fox is comming for the chicken'); // chicken the
// comming is fox The

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("The fox is comming for the chicken"));

// 7.Viết hàm randomHex() trả về một giá trị màu HEX ngẫu nhiên, mã màu HEX là hệ cơ số 16 (0-
//   9a-f) và có dạng #00ffaa

// randomHex(); // #0abd4f => kết quả có thể khác nhau

function randomHex() {
  let color;

  color = Math.floor(Math.random() * 16777215).toString(16);

  return color;
}

console.log(randomHex());

// 8. Viết hàm parameterize(str) nhận vào một chuỗi bất kỳ (chỉ chứa các từ không dấu), trả về
// chuỗi dạng url dạng viết thường và các từ được nối bằng các dấu -

// parameterize("Hello World"); // hello-world
// parameterize(" javascript is very funny "); // javascript-is-veryfunny

function parameterize(str) {
  return str.split(" ").join("-").toLowerCase();
}

console.log(parameterize("Hello World"));
console.log(parameterize("javascript is very funny"));

// 9.Viết hàm isPalindrome(str) nhận vào một chuỗi bất kỳ, kiểm tra và trả về kết quả chuỗi gốc
// và chuỗi đảo ngược có giống nhau hay không, không phân biệt hoa thường và không tính dấu
// khoảng trắng

// isPalindrome("Race car"); // racecar == racecar => true
// isPalindrome("Ba"); // ba != ab => false

// function isPalindrome(string) {

//   const len = string.length;

//   for (let i = 0; i < len / 2; i++) {
//     let lower = string.map(function (value) {
//       return value.toLowerCase();
//     });

//     if (string[i] !== lower[lower.length - 1 - i]) {
//       return "It is not a palindrome";
//     }
//   }
//   return "It is a palindrome";
// }

// console.log(isPalindrome("Ba"));

// function isPalindrome(str) {
//   str = str.toLowerCase().replace(/ /g, "");
//   let strReverse = str.split("").reverse().join("");
//   return str === strReverse;
// }

// console.log(isPalindrome("   Race    car"));

function isPalindrome(str) {
  str = str.toLowerCase().replace(/ /g, "");
  let strLower = str.split("").reverse().join("");

  return str === strLower;
}

console.log(isPalindrome("Race car"));

console.log(isPalindrome("Tung"));
