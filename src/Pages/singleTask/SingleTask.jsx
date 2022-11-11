import React from "react";
import { useParams } from "react-router-dom";

export default function SingleTask() {
  let { oneDay } = useParams();
  return <div>{oneDay}</div>;
}
