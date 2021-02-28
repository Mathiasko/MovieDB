import React from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

export function Notification() {
  const createNotification = (type) => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.info("Info message");
          break;
        case "success":
          NotificationManager.success("Success message", "Title here");
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          });
          break;
        default:
          return null;
      }
    };
  };
  return (
    <div>
      <button className="btn btn-info" onClick={createNotification("info")}>
        Info
      </button>
      <hr />
      <button
        className="btn btn-success"
        onClick={createNotification("success")}
      >
        Success
      </button>
      <hr />
      <button
        className="btn btn-warning"
        onClick={createNotification("warning")}
      >
        Warning
      </button>
      <hr />
      <button className="btn btn-danger" onClick={createNotification("error")}>
        Error
      </button>

      <NotificationContainer />
    </div>
  );
}
