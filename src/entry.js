const testing = !!process.env.VUE_APP_E2E;

const ruid = {
  bind(el, bindings) {
    if (!testing) return;

    const ref = bindings.value;
    // eslint-disable-next-line
    el.dataset.ruid = ref.replace(/\'/g, '');
  },

  unbind(el) {
    if (!testing) return;

    el.removeAttribute('data-ruid');
  },
};

export default {
  install(Vue) {
    Vue.directive('ruid', ruid);
  },
};
