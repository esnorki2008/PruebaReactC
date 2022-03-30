import axios from "axios";
import ENVIRONMENT from "../environment";


export default {
  getAll: () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${ENVIRONMENT.URL}/curso`)
        .then((res) => {
          resolve(res.data);
        })
        .catch(() => {
          reject([]);
        });
    });
  },

  create: (newCcurso) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENVIRONMENT.URL}/curso`, newCcurso)
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
        .delete(`${ENVIRONMENT.URL}/curso/${idToDelete}`)
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
        .put(`${ENVIRONMENT.URL}/curso/${idToUpdate}`,newContent)
        .then((res) => {
          resolve(res.data);
        })
        .catch(() => {
          reject([]);
        });
    });
  },
};
