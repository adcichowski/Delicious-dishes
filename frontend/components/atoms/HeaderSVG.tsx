import React from "react";
import { Button } from "./Button";
import HeaderImg from "/public/girl-with-fruits.svg";
import Spinner from "/public/icons/spinner.svg";
const HeaderSVG = ({
  goToLogin,
  loginView,
}: {
  goToLogin: () => void;
  loginView: string;
}) => {
  return (
    <div className="flex flex-col place-items-center">
      <div className="girl-size">
        <HeaderImg />
      </div>
      <Button
        element="button"
        onClick={goToLogin}
        className={"w-24 text-center text-xl mt-5 ``"}
      >
        {loginView === "Process" && <Spinner />}
        {loginView}
      </Button>
    </div>
  );
};
export { HeaderSVG };
