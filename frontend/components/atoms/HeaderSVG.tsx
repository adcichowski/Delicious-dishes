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
        className={"min-w-24 text-xl mt-5 text-white-100"}
      >
        <span>
          {loginView === "Process" && (
            <svg
              className="inline animate-spin w-8 stroke-1 mr-1 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
            </svg>
          )}
          {loginView}
        </span>
      </Button>
    </div>
  );
};
export { HeaderSVG };
