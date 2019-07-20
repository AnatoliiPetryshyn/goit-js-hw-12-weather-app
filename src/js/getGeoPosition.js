const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    const options = {
      minimumAge: 30,
    };
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

export default getCurrentPosition;
