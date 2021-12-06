let seGanoElDulce = true;

const premio = new Promise((resolve, reject) => {
  if (seGanoElDulce) {
    const teComproDulce = 'Distruta el dulce';
    resolve(console.log(teComproDulce));
  } else {
    const noTeComproDulce = 'castigado';
    reject(console.log(noTeComproDulce));
  }
});