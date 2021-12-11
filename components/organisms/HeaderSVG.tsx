import React from "react";
import { Button } from "components/atoms/Button";
import HeaderImg from "public/girl-with-fruits.svg";

const HeaderSVG = ({
  goToLogin,
  loginView,
}: {
  goToLogin: () => void;
  loginView: string;
}) => {
  const ArrowSVG = () => (
    <svg
      className="inline animate-spin w-8 stroke-1 mr-1 stroke-current"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
    </svg>
  );

  return (
    <div className="flex flex-col place-items-center">
      <div className="girl-size">
        <HeaderImg />
      </div>
      <Button
        type="button"
        onClick={goToLogin}
        className={"min-w-30 text-xl mt-5 text-white-100"}
      >
        <span>
          {loginView === "Process" && <ArrowSVG />}
          {loginView}
        </span>
      </Button>
    </div>
  );
};
export { HeaderSVG };
