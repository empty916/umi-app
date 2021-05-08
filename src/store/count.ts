const state = 0;
const actions = {
  update: (ns: number) => ns,
};
const maps = {
  isEven: (s: number) => s % 2 === 0,
};

export default {
  state,
  actions,
  maps,
};
