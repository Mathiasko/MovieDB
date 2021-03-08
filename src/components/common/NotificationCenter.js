import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { successHandler } from "../../helper/Notification";

export function NotificationCenter() {
  const sessionSuccess = useSelector(
    (state) => state.getNewToken.sessionId.success
  )
  useMemo(() => {
    if (sessionSuccess) {
      successHandler("Session ID granted");
    }
  }, [sessionSuccess]);

  const newListData = useSelector((state)=> state.listFetch.myNewList.success)
  if (newListData===true){
    successHandler("List Created")
  }

  return <></>;
}
