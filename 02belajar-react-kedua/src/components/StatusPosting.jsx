import React from "react";
import Published from "./Published";
import Draft from "./Draft";

const StatusPosting = (props) => {
  const isPublished = props.isPublished;

  return <>{isPublished ? <Published /> : <Draft />}</>;
};

export default StatusPosting;
