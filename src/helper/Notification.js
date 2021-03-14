import { store } from "react-notifications-component";

export const successHandler = (desc) => {
  store.addNotification({
    title: desc,
    message: "Success",
    type: "success",
    container: "top-right",
    insert: "top",
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};

export const errorHandler = (desc) => {
  store.addNotification({
    title: desc,
    message: "Failed",
    type: "danger",
    container: "top-right",
    insert: "top",
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};
