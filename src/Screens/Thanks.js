import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";

function Thanks() {
  return (
    <div className="flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6">
      <img
        className="w-full h-32 object-contain"
        src="/images/Check_Circle.png"
        alt="Thanks"
      />
      <h1 className="lg:text-4xl font-bold">Thank You for Payment</h1>
      <p className="font-medium text-border italic leading-6">
        You Payment 100.000 VNĐ for account
      </p>
      <Link
        to="/"
        className="bg-subMain transitions text-white flex-rows gap-4 font-medium py-3 hover:text-main px-6 rounded-md"
      >
        <BiHomeAlt /> Go Back Home and Enjoy
      </Link>
    </div>
  );
}

export default Thanks;
