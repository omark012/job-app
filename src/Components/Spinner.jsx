import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <BeatLoader color="#4338ca" loading={loading} cssOverride={override} />
  );
};

export default Spinner;
