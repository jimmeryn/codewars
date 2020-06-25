const removeDuplicate = s => [...new Set(s.split(" "))].join(" ");

module.exports = removeDuplicate;
