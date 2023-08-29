import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  const bank_limit = 10000;
  return (
    <>
      <SliderComponent
        label="home Value"
        min={1000}
        max={bank_limit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={100}
        onchange={(e, value) =>
          setData({
            ...data,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
            homeValue: value,
          })
        }
        unit="$"
        amount={data.homeValue}
      />

      <SliderComponent
        label="down Payment"
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={100}
        onchange={(e, value) =>
          setData({
            ...data,
            loanAmount: data.homeValue - value,
            downPayment: value,
          })
        }
        unit="$"
        amount={data.downPayment}
      />
      <SliderComponent
        label="loan Amount"
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        onchange={(e, value) =>
          setData({
            ...data,
            downPayment: data.homeValue - value,
            loanAmount: value,
          })
        }
        unit="$"
        amount={data.loanAmount}
      />
      <SliderComponent
        label="Interest Rate"
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={1}
        onchange={(e, value) => setData({ ...data, interestRate: value })}
        unit="%"
        amount={data.interestRate}
      />

      {/* <SliderComponent min={100} max={200} defaultValue={150} />
      <SliderComponent min={0} max={10} defaultValue={3} /> */}
    </>
  );
};

export default SliderSelect;
