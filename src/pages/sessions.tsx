import React from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import Sessions from "../components/Sessions";

const curriculums = () => {
  return (
    <DefaultLayout isMain={true}>
      <Sessions />
    </DefaultLayout>
  );
};

export default curriculums;
