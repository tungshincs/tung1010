// Cho nội dung HTML như trên, thực hiện các yêu cầu sau:
// 1. Thay đổi nội dung của thẻ title thành giá trị của heading

document.title = heading;
// 2. Thay đổi nội dung của thẻ h1 thành giá trị của heading

document.querySelector(".heading").textContent = heading;

// 3. Thay đổi src của thẻ img thành giá trị của avatar

document.querySelector(".avatar").src = avatar;
// 4. Thay đổi src của thẻ link thành giá trị của profile

document.querySelector(".profile").href = profile;
// 5. Thay đổi nội dung của thẻ li đầu tiên trong thẻ ul thành Code application

document.querySelector(".favorite li:first-child").innerHTML =
  "Code application";
// 6. Thay đổi nội dung của thẻ li cuối cùng trong thẻ ul thành Sleep

document.querySelector(".favorite li:last-child").innerHTML = "Sleep";

// 7. Thay đổi nội dung của div thành thời gian hiện tại theo mẫu Bây giờ là giờ:phút:giây,
// ngày ngày/tháng/năm

const date = new Date();
const now =
  "Bây giờ là " +
  date.getHours() +
  ":" +
  date.getMinutes() +
  ":" +
  date.getSeconds() +
  ", ngày " +
  date.getDate() +
  "/" +
  (date.getMonth() + 1) +
  "/" +
  date.getFullYear();
document.querySelector(".clock").innerHTML = now;

// 8. Đếm số từ trong đoạn văn p.bio xem có bao nhiêu từ Ba (không phân biệt chữ hoa chữ
// thường) và thêm nội dung vào thẻ p.num-of-words bên dưới thông báo kết quả dạng Ở đoạn
// văn trên có xx từ 'Ba'

const words = document
  .querySelector(".bio")
  .textContent.toLowerCase()
  .split(" ");
let total = 0;

for (let word of words) {
  if (word === "ba") total++;
}

document.querySelector(
  ".num-of-words"
).textContent = `Đoạn văn trên có ${total} Từ Ba`;
// 9. Thêm một hàng mới vào table (tham khảo API của HTMLTableElement)
const table = document.querySelector(".list-students tbody");

const row = table.insertRow();

const cell = row.insertCell();

// 10. Thêm một cột (ô) mới vào hàng vừa tạo có nội dung Thầy giáo Ba siêu cấp đẹp trai

cell.innerHTML = "Thầy giáo Ba siêu cấp đẹp trai";
