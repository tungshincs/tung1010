console.log(`LEVEL 1`);

//Câu 1:

let isOddNumber = function (number) {
  if (number % 2 == 0) {
    console.log(`Vậy số ${number} là số chẵn.`);
  } else {
    console.log(`Vậy số ${number} là số lẻ.`);
  }
};

isOddNumber(25);

//Câu 2:

let maxOfTwo = function (a, b) {
  let max = a;

  if (max < b) max = b;

  console.log(`Số lớn nhất là ${max}`);
};

maxOfTwo(15, 20);
maxOfTwo(50, 50);
maxOfTwo(35, 25);

//Câu 3:

let divisibleByThreeAndFive = function (number) {
  if (number % 15 == 0) {
    console.log(`Vậy ${number} chia hết cho 3 và 5.`);
  } else {
    console.log(`Vậy ${number} không chia hết cho 3 và 5.`);
  }
};

divisibleByThreeAndFive(15);
divisibleByThreeAndFive(24);

//Câu 4:

let season = function (month) {
  if (month == 12 || month == 1 || month == 2)
    console.log(`Tháng ${month} là mùa đông.`);
  if (month == 3 || month == 4 || month == 5)
    console.log(`Tháng ${month} là mùa xuân.`);
  if (month == 6 || month == 7 || month == 8)
    console.log(`Tháng ${month} là mùa hè.`);
  else console.log(`Tháng ${month} là mùa thu.`);
};

season(1);
season(6);

//Câu 5:

let trafficLight = function (light) {
  let report;

  if (light == "red") report = "Dừng lại!";
  if (light == "yellow") report = "Giảm tốc độ và dừng lại!";
  else report = "Được phép di chuyển!";

  console.log(report);
};

trafficLight("green");
trafficLight("yellow");

//Câu 6:

let calcCommissions = function (totalSales) {
  let commission;

  if (totalSales <= 100_000_000) commission = (totalSales * 5) / 100;

  if (totalSales <= 300_000_000) commission = (totalSales * 10) / 100;
  else commission = (totalSales * 20) / 100;

  console.log(
    `Với doanh số ${totalSales} cửa hàng nhận được ${commission}VNĐ tiền hoa hồng`
  );
};

calcCommissions(150_000_000);
calcCommissions(700_000_000);

console.log(`LEVEL 2`);

//Câu 1:

let isLeafYear = function (year) {
  if (year % 4 == 0) console.log(`Năm ${year} là năm nhuận`);
  else console.log(`Năm ${year} không phải là năm nhuận`);
};

isLeafYear(2000);
isLeafYear(1997);

//Câu 2:

let daysOfMonth = function (month) {
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  )
    console.log(`Tháng ${month} có 31 ngày`);

  if (month == 4 || month == 6 || month == 9 || month == 11)
    console.log(`Tháng ${month} có 30 ngày`);
  if (month == 2)
    console.log(
      `Tháng ${month} có 29 ngày nếu là năm nhuận, nếu không là 28 ngày.`
    );
};

daysOfMonth(6);
daysOfMonth(12);

//Câu 3:

let calcGrade = function (point) {
  if (point < 4.0) console.log(`Điểm ${point} xếp loại F`);
  else if (point < 5.5) console.log(`Điểm ${point} xếp loại D`);
  else if (point < 7.0) console.log(`Điểm ${point} xếp loại C`);
  else if (point < 8.5) console.log(`Điểm ${point} xếp loại B`);
  else console.log(`Điểm ${point} xếp loại A`);
};

calcGrade(1.0);
calcGrade(7.0);

//Câu 4:

let calcTaxiFee = function calcTaxiFee(km) {
  let fee;

  if (km <= 30) fee = km * 11000 + 10000;
  else fee = (km - 30) * 9500 + 330000 + 10000;

  console.log(`Tiền taxi là ${fee}VNĐ`);
};

calcTaxiFee(55);
calcTaxiFee(20);

//Câu 5:

let findMaxOfThree = function (a, b, c) {
  let max = a;

  if (max < b) max = b;
  if (max < c) max = c;
  if (a == b && a == c) console.log(`Ba số bằng nhau.`);

  console.log(`Số lớn nhất là ${max}.`);
};

findMaxOfThree(10, 10, 10);
findMaxOfThree(1, 7, 15);

// Câu 6:

let solveEquation = function (a, b, c) {
  let delta = b ** 2 - 4 * a * c;
  let x1;
  let x2;

  if (a == 0 && b == 0) console.log(`Phương trình vô nghiệm`);

  if (a == 0) console.log(`Phương trình có 1 nghiệm là: ${-c / b}`);
  else {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`PT có 2 nghiệm x1 = ${x1} ; x2 = ${x2}`);
  }
};

solveEquation(0, 5, 9);
solveEquation(4, -2, -6);
solveEquation(2, 10, -12);
