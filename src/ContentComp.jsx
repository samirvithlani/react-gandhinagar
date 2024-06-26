import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent } from "./redux/ContentSlice";

export const ContentComp = () => {
  const dispatch = useDispatch();
  const content = useSelector((state)=>state.content.content)
  const isLoading = useSelector((state)=>state.content.isLoading)
  const isError = useSelector((state)=>state.content.isError)
  console.log("content",content)
    console.log("isLoading",isLoading)
    console.log("isError",isError)
  useEffect(() => {
    dispatch(fetchContent());
  }, []);

  return <div>ContentComp</div>;
};
