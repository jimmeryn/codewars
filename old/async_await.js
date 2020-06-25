function after(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}
(async function log() {
  let x = await after(10);
  console.log(`sthsr sdfnkjsn ${x}`);
})();
