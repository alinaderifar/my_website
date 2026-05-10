/* jsdom does not provide these APIs; code and tests expect them */
const IO = class {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};

const RO = class {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};

globalThis.IntersectionObserver = IO;
globalThis.ResizeObserver = RO;

if (typeof window !== 'undefined') {
  window.IntersectionObserver = IO;
  window.ResizeObserver = RO;
}

if (typeof window !== 'undefined' && typeof window.matchMedia !== 'function') {
  window.matchMedia = function matchMedia(query) {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener() {},
      removeListener() {},
      addEventListener() {},
      removeEventListener() {},
      dispatchEvent() {
        return false;
      },
    };
  };
}
