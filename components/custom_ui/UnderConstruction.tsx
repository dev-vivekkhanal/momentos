import { AlertTriangle } from "lucide-react";
import React from "react";

const UnderConstruction = () => {
  return (
    <div className="h-screen flex flex-col gap-5 justify-center items-center  text-4xl font-extrabold text-neutral-800">
      <AlertTriangle size={"200px"} />
      <h1> Page Under Construction</h1>
    </div>
  );
};

export default UnderConstruction;
