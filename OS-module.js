const os = require("os")

console.log("system info: \n")
console.log("-".repeat(50))

console.log(" \n platform Details:")
console.log("Platform:", os.platform())
console.log("Architecure:", os.arch())
console.log("os-type:", os.type())
console.log("os-realise:", os.release())
console.log("os-hostname:", os.hostname())

console.log("\nCPU info : ");
const cpus = os.cpus();
console.log("CPU Model : ", cpus[0].model);
console.log("Number of cores : ", cpus.length);
console.log("CPU Speed : ", cpus[0].speed);

console.log("\nmemory info : ");
const totalMem=os.totalmem()
const freeMem = os.freemem();
console.log(
  "Total Memory : ",
  (totalMem / 1024 / 1024 / 1024).toFixed(2),
  "GB"
);
console.log("Free Memory : ",(freeMem / 1024 / 1024 / 1024).toFixed(2), "GB");

console.log("-".repeat(50))

const uptime = os.uptime();

const days = Math.floor(uptime / 86400);
const hours = Math.floor((uptime % 86400) / 3600);
const minutes = Math.floor((uptime % 3600) / 60);

console.log(`${days} days ${hours} hours ${minutes} minutes`);
