const Storage = {
  Set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  Get: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
  Clear: (key) => {
    localStorage.removeItem(key);
  },
};

export default Storage;
