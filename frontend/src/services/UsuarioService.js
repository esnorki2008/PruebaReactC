import axios from "axios";
export default {
  getAll: ()=> {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://localhost:7166/usuario`)
        .then((res) => {
          resolve(res.data);
        })
        .catch(() => {
          reject([]);
        });
    });
  }
};
