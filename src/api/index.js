
//const url = 'http://houseofoni-001-site1.btempurl.com/';
const url = 'http://127.0.0.1:8080/';
//const url = 'http://paychange-dev.westeurope.cloudapp.azure.com:89';


export const getUrl = () => {
  return url;
};


export const getAccessToken = async () => {
  return localStorage.getItem("token");
};

export const ifLogedIn = async () => {
  return localStorage.getItem("logged_in");
};





