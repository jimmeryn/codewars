const data = require("./data.json").properties;

const newData = data.reduce((acc, curr) => {
  Object.keys(curr).forEach(key =>
    key === "type" ? (acc[`${curr[key]}`] = {}) : null
  );
  return acc;
}, {});

newData.groups = [];
for (let prop in newData) {
  if (prop !== "groups") {
    newData[prop].byLabel = {};
    newData[prop].allLabels = [];
  }
}
data.forEach(e => {
  newData.groups.indexOf(e.group) === -1 ? newData.groups.push(e.group) : null;
  let { type, ...newObject } = e;
  newData[e.type].byLabel[e.label] = newObject;
  newData[e.type].allLabels.push(e.label);
});

console.log(newData);
