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
        .post(`${ENVIRONMENT.URL}/usuario`, newUsuario)
        .then((res) => {
          resolve(res.data);
        })
        .catch(() => {
          reject([]);
        });
    });
  },

  delete: (idToDelete) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${ENVIRONMENT.URL}/usuario/${idToDelete}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch(() => {
          reject([]);
        });
    });
  },

  update: (idToUpdate,newContent) => {
    return new Promise((resolve, reject) => {
      axios
        .put(`${ENVIRONMENT.URL}/usuario/${idToUpdate}`,newContent)
        .then((res) => {
          resolve(res.data);
        })
        .catch(() => {
          reject([]);
        });
    });
  },
};
