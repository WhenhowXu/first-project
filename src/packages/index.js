import HButton from "./HButton";

const components = [HButton];
const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  HButton,
};
