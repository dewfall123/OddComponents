export * from './exports';
import * as components from './exports';
import { Plugin } from 'vue';
import './index.css';

const plugin: Plugin = {
  install(app) {
    Object.keys(components).forEach((name) => {
      // console.log(name);
      app.component(name, components[name as keyof typeof components]);
    });
  },
};

export default plugin;
