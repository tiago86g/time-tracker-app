export function someTime(times: any[]) {
  const time = times.map((time) => time.hour);
  console.log(typeof time);
  console.log(typeof Object.keys(times));

  const totalTime = times.reduce((a: any, b: any) => a.value + b.value, 0);

  console.log('total time', totalTime);
}
