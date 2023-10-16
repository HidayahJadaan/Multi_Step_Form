import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import BillItem from "../components/BillItem";
import React, { useState } from "react";

import "./SelectPlan.css";

export default function SelectYourPlan({ userInfo, updatePlanInfo , setUserInfo}) {
  const [planType, setPlanType] = useState("mo"); // Initialize planType state to 'mo'
  const [selectedPlan, setSelectedPlan] = useState(null); // Initialize selectedPlan as null

  // Create a state variable for billing items with initial Planamount values
  const [billings, setBillings] = useState([
    {
      Planname: "Arcade",
      icon: arcade,
      Planamount: 9,
      Plantype: "mo",
    },
    {
      Planname: "Advanced",
      icon: advanced,
      Planamount: 12,
      Plantype: "mo",
    },
    {
      Planname: "Pro",
      icon: pro,
      Planamount: 15,
      Plantype: "mo",
    },
  ]);

  const togglePlanType = () => {
    const newPlanType = planType === "mo" ? "yr" : "mo"; // Toggle between 'mo' and 'yr'
    setPlanType(newPlanType); // Update planType state

    // Calculate the new Planamount values for each billing item based on the newPlanType
    const updatedBillings = billings.map((item) => {
      const newAmount =
        newPlanType === "mo" ? item.Planamount / 10 : item.Planamount * 10;

        setUserInfo({...userInfo, Planamount:newAmount, Plantype:newPlanType })
      return { ...item, Planamount: newAmount, Plantype: newPlanType };
    });

    // Update the billing items
    setBillings(updatedBillings);
  };

  const handlePlanSelection = (selectedPlan) => {
    setSelectedPlan(selectedPlan);

    const selectedBillingItem = billings.find(
      (item) => item.Planname === selectedPlan
    );
    updatePlanInfo(
      selectedBillingItem.Planname,
      selectedBillingItem.icon,
      selectedBillingItem.Planamount,
      selectedBillingItem.Plantype
    );
  };

  return (
    <div className="SelectYourPlan">
      <div className="Billings">
        {billings.map((item) => (
          <BillItem
            billItem={item}
            key={item.Planname}
            isSelected={selectedPlan === item.Planname} // Pass isSelected prop to highlight the selected plan
            updatePlanInfo={updatePlanInfo}
            onClick={() => handlePlanSelection(item.Planname)}
            userInfo={userInfo}
          />
        ))}
      </div>
      <div className="toggle-bill">
        <span>Monthly</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={planType === "yr"} // Check if it's yearly
            onClick={togglePlanType}
          />
          <span className="slider round"></span>
        </label>

        <span>Yearly</span>
      </div>
    </div>
  );
}
