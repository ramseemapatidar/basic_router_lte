export const sleep = (time) =>
  new Promise((res) => setTimeout(res, time));

export const calculateWindowSize = (windowWidth) => {
  if (windowWidth >= 1200) {
    return 'lg';
  }
  if (windowWidth >= 992) {
    return 'md';
  }
  if (windowWidth >= 768) {
    return 'sm';
  }
  return 'xs';
};

export const setWindowClass = (classList) => {
  const window = document && document.getElementById('root');
  if (window) {
    window.className = classList;
  }
};

export const addWindowClass = (classList) => {
  const window = document && document.getElementById('root');
  if (window) {
    window.classList.add(classList);
  }
};

export const removeWindowClass = (classList) => {
  const window = document && document.getElementById('root');
  if (window) {
    window.classList.remove(classList);
  }
};
