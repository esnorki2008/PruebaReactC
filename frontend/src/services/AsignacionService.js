import axios from "axios";
import ENVIRONMENT from "../environment";


export default {
  getAll: () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${ENVIRONMENT.URL}/asignacion`)
        .then((res) => {
          resolve(res.data);
        })
        .catch(() => {
          reject([]);
        });
    });
  },

  create: (newAsignacion) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENVIRONMENT.URL}/asignacion`, newAsignacion)
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
        .delete(`${ENVIRONMENT.URL}/asignacion/${idToDelete}`)
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
        .put(`${ENVIRONMENT.URL}/asignacion/${idToUpdate}`,newContent)
        .then((res) => {
          resolve(res.data);
        })
        .catch(() => {
          reject([]);
        });
    });
  },
};
