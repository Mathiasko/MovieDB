import { store } from "react-notifications-component";

export const defaultHandler = () => {
  store.addNotification({
    title: "no pojde to?",
    message: "No neviem skus",
    type: "warning",
    container: "top-right",
    insert: "top",
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};
