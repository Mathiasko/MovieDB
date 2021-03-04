import { store } from "react-notifications-component";

export const successHandler = (desc) => {
  store.addNotification({
    title: desc,
    message:'jako',
    type: "success",
    container: "top-right",
    insert: "top",
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};
