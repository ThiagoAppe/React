export const apiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        import('./MocksAsync.json').then(data => {
          resolve(data);
        });
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
};
