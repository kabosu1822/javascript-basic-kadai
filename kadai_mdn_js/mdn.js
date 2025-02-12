const data = new Date();
const[ month, day, year] = [
  data.getMonth()+1,
  data.getDate(),
  data.getFullYear(),
];
console.log(`${year}年${month}月${day}日`);