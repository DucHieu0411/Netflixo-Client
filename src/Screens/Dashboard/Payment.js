import React, { useState } from "react";
import SideBar from "./SideBar";

import { useDispatch } from "react-redux";
import { vnpPayMent } from "../../Redux/Actions/userActions";

import { Input } from "../../Components/UsedInputs";
import { MdOutlinePayment } from "react-icons/md";
const Payment = () => {
  const dispatch = useDispatch();
  const handleVnpPayMent = (data) => {
    dispatch(vnpPayMent({ data }));
  };
  const [formData, setFormData] = useState({
    amount: 100000,
    bankCode: "",
    orderInfo: "Payment Account to watch movie",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleVnpPayMent(formData);
    console.log("Form submitted:", formData);
  };
  return (
    <SideBar>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Payment</h2>
        <div className="w-full cursor-pointer">
          <Input
            label="Amount"
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            placeholder="Enter price"
          />
        </div>

        <div className="w-full">
          <label htmlFor="" className="text-border font-semibold">
            Choose your bank
          </label>
          <select
            name="bankCode"
            id="input"
            required="required"
            onChange={handleInputChange}
            className="w-full mt-2 px-6 py-4 text-text bg-main border border-border rounded cursor-pointer"
          >
            <option value="VCB">Vietcombank</option>
            <option value="BIDV">BIDV</option>
            <option value="NCB">NCB</option>
            <option value="AGRB">AGRIBANK</option>
            <option value="BVB">Bảo Việt Bank</option>
            <option value="VPB">VP Bank</option>
          </select>
        </div>

        <div className="w-full">
          <label htmlFor="" className="text-border font-semibold">
            Information
          </label>
          <textarea
            type="text"
            name="orderInfo"
            value={formData.orderInfo}
            onChange={handleInputChange}
            placeholder="Make it short and sweet"
            aria-describedby="helpId"
            className="w-full h-40 mt-2 p-6 bg-main border border-border rounded cursor-pointer"
          />
        </div>

        <div className="w-full">
          <label htmlFor="" className="text-border font-semibold">
            Payment for
          </label>

          <select
            name="orderType"
            required="required"
            onChange={handleInputChange}
            className="w-full mt-2 px-6 py-4 text-text bg-main border border-border rounded cursor-pointer"
          >
            <option value="100000">VNPAY</option>
          </select>
        </div>
        <div className="form-group">
          <button
            onClick={handleVnpPayMent}
            className="bg-subMain w-full flex-rows gap-6 font-medium transitions hover:bg-dry border border-subMain text-white py-4 rounded "
          >
            <>
              <MdOutlinePayment /> Go to payment
            </>
          </button>
        </div>
      </form>
    </SideBar>
  );
};

export default Payment;
