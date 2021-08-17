const isMockServer = process.env.USE_MSW_SERVER === "true";
const ise2e = process.env.CY === "true";

module.exports = {
  isMockServer,
  ise2e,
};
