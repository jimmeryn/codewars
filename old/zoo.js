// Zoo disaster
const zooAnim = new Map();
zooAnim.set("antelope", ["grass"]);
zooAnim.set("big-fish", ["little-fish"]);
zooAnim.set("bug", ["leaves"]);
zooAnim.set("bear", ["big-fish", "bug", "chicken", "cow", "leaves", "sheep"]);
zooAnim.set("chicken", ["bug"]);
zooAnim.set("cow", ["grass"]);
zooAnim.set("fox", ["chicken", "sheep"]);
zooAnim.set("giraffe", ["leaves"]);
zooAnim.set("lion", ["antelope", "cow"]);
zooAnim.set("panda", ["leaves"]);
zooAnim.set("sheep", ["grass"]);

const whoEatsWho = zoo => {
  let ans = [];
  ans.push(zoo);
  zoo = zoo.split(",");
  for (let i = 0; i < zoo.length; i++) {
    if (zooAnim.get(zoo[i]) && zooAnim.get(zoo[i]).includes(zoo[i - 1])) {
      ans.push(`${zoo[i]} eats ${zoo[i - 1]}`);
      zoo.splice(i - 1, 1);
      i = -1;
    } else if (
      zooAnim.get(zoo[i]) &&
      zooAnim.get(zoo[i]).includes(zoo[i + 1])
    ) {
      ans.push(`${zoo[i]} eats ${zoo[i + 1]}`);
      zoo.splice(i + 1, 1);
      i = -1;
    }
  }
  ans.push(zoo.join(","));
  return ans;
};

const input = "fox,bug,chicken,grass,sheep";

console.log(whoEatsWho(input));
