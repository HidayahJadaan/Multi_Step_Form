import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import BillItem from "../components/BillItem";
import { useState } from "react";
import "./SelectPlan.css"

export default function SelectYourPlan({ userInfo, updatePlanInfo }) {
  const [planType, setPlanType] = useState('mo'); // Initialize planType state to 'mo'

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
    const newPlanType = planType === 'mo' ? 'yr' : 'mo'; // Toggle between 'mo' and 'yr'
    setPlanType(newPlanType); // Update planType state

    // Calculate the new Planamount values for each billing item based on the newPlanType
    const updatedBillings = billings.map((item) => {
      const newAmount = newPlanType === 'mo' ? item.Planamount : item.Planamount * 10;
      return { ...item, Plantype: newPlanType, Planamount: newAmount };
    });

    // Update the billing items and userInfo
    setBillings(updatedBillings);

    // Assuming you want to update userInfo based on the first billing item
    if (updatedBillings.length > 0) {
      updatePlanInfo(updatedBillings[0].Planname, updatedBillings[0].icon, updatedBillings[0].Planamount, newPlanType);
    }
  };

  return (
    <div className="SelectYourPlan">
      <div className="Billings">
      {billings.map((item) => (
  <BillItem
    billItem={item}
    key={item.Planname}
    userInfo={userInfo}
    updatePlanInfo={updatePlanInfo}
    onClick={() => togglePlanType(item, userInfo)} // Pass the clicked billing item
  />
))}

      </div>

      <div className="toggle-bill">
        <span>Monthly</span>
        <label className="switch">
          <input type="checkbox" onClick={togglePlanType} />
          <span className="slider round"></span>
        </label>

        <span>Yearly</span>
      </div>
    </div>
  );
}
