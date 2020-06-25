const _ = require("lodash");
let word = "hello";
word = _.capitalize(word);

console.log(word);

const famyliTree = {
  value: "wojtek",
  nodes: [
    {
      value: "maria",
      nodes: [{ value: "janina" }, { value: "karol" }]
    },
    {
      value: "krzysztof",
      nodes: [{ value: "helena" }, { value: "mieczyslaw" }]
    }
  ]
};

function mapTree(node, mapper) {
  return {
    value: mapper(node.value),
    nodes: node.nodes ? node.nodes.map(x => mapTree(x, mapper)) : null
  };
}
const _ = require("lodash");

console.log(mapTree(famyliTree, _.capitalize));
let myArray = ["ala", "ola", "basia", "kasia"];
console.log(myArray.map(_.capitalize));
myArray = ["ala", "ola", "basia", "kasia"];
console.log(_.map(myArray, _.capitalize));

// not working but get the general idea
function getInEnglish(word) {
  const apiKey = "AIzaSyB4DyRHIsNhogQXmH16YKbZfR-lTXrQpq0";
  const url = `https://translation.googleapis.com/language/translate/v2/?q=
    ${encodeURIComponent(word)}
  &source=pt&target=en?key=${apiKey}`;
  const promise = fetch(url)
    .then(response => response.json())
    .then(parsedResponse => parsedResponse.data.translations[0].translatedText);
  return promise;
}
let whenFood = new Promise(resolve => setTimeout(() => resolve("vaca"), 2000));
whenFood
  // .then(getInEnglish)
  .then(_.capitalize)
  .then(food => console.log(food));
