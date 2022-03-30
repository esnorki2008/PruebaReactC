import axios from "axios";
import ENVIRONMENT from "../environment";
export default {
  getAll: () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${ENVIRONMENT.URL}/usuario`)
        .then((res) => {
          resolve(res.data);
        })
        .catch(() => {
          reject([]);
        });
    });
  },

  create: (newUsuario) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENVIRONMENT.URL}/usuario`,newUsuario)
        .then((res) => {
          resolve(res.data);
        })
        .catch(() => {
          reject([]);
        });
    });
  },
};
