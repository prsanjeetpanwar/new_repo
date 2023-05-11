const nodeCron = require("node-cron");

const job = nodeCron.schedule("0.01 * * * * *", () => {
  console.log(new Date().toLocaleString());
});