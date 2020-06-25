// EASY AS PIE: Composition
const barker = state => ({
  bark: () => console.log(`Woof, I am ${state.name}`)
});

const driver = state => ({
  drive: () => (state.position = state.position + state.speed)
});

const dogRobot = name => {
  let state = {
    name,
    speed: 100,
    position: 0
  };
  return Object.assign({}, barker(state), driver(state));
};

console.log(dogRobot("sniffls").drive());
dogRobot("sniffls").bark();
