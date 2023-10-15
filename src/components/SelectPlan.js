import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import BillItem from "../components/BillItem"


export default function SelectYourPlan({ GoBack, GoNextTab, userInfo ,  updatePlanInfo})

{
  const Billings = [
    {
      Planname: "Arcade",
      icon: arcade,
      Planamount: 9,
      Plantype: "mo",
    },
    {
      Planname: "Advanced",
      icon: advanced,
      Planamount: 15,
      Plantype: "mo",
    },
    {
      Planname: "Pro",
      icon: pro,
      Planamount: 15,
      Plantype: "mo",
    },
  ];
  return (
    <div className="SelectYourPlan">
      <div className="Billings">
        {Billings.map((item) => (
          <BillItem billItem={item} key={item.name} userInfo={userInfo} updatePlanInfo={updatePlanInfo} />
        ))}
      </div>

      <div className="toggle-bill">
        <span>Monthly</span>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>

        <span>Yearly</span>
      </div>

      
    </div>
  );
}