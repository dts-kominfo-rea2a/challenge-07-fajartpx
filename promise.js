const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = async (emosi) => {

  //deklarasi variable untuk memuat data hasil
  let result = 0;

  const theaterSatu = await promiseTheaterIXX();
  const theaterDua= await promiseTheaterVGC();
  
  //gabungkan
  const combineTheater = [...theaterSatu, ...theaterDua];
 combineTheater.map((param1) => param1.hasil == emosi && (result += 1));
  return result;
};

module.exports = {
  promiseOutput,
};