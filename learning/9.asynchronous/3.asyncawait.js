const janji = new Promise((resolve, reject) => {
  const isPay = false;

  if (isPay) return resolve("Sudah bayar hutang!");

  reject("Galbay hutang!");
});

const runJanji = async () => {
  try {
    const response = await janji;
    console.log(response);
  } catch (error) {
    console.log("GAGAL : ", error);
  }
};

runJanji();
