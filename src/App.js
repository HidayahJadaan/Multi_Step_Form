import { useState } from "react";
import arcade from "./assets/images/icon-arcade.svg";
import advanced from "./assets/images/icon-advanced.svg";
import pro from "./assets/images/icon-pro.svg";

//===============================================
let Allusers = [];

//===============================================

//===============================================
const Tabs = [
  {
    id: 1,
    title: "Personal Info",
    PageTitle: "Personal Info",
    description: "Please provide your name, email address, and phone number.",
  },
  {
    id: 2,
    title: "Select Plan",
    PageTitle: "Select your plan",
    description: "You have the option of monthly, yearly billing.",
  },

  {
    id: 3,
    title: "ADD-ONS",
    PageTitle: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  },
  {
    id: 4,
    title: "Summary",
    PageTitle: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
  },
];

//===============================================

export default function App() {
  const [selectdTabID, setSelectedTabID] = useState(Tabs[0].id);
  const [back, setBack] = useState(selectdTabID);

  function handleGoBack(){
    
    setBack ( setSelectedTabID(selectdTabID - 1) );
  }

  function handleSelectedTabID() {
    if (selectdTabID > 0 && selectdTabID < 4)
      setSelectedTabID(selectdTabID + 1);
  }

  return (
    <div className="container">
      <div className="app">
        <SideBar
          Tabs={Tabs}
          selectdTabID={selectdTabID}
          GoNextTab={handleSelectedTabID}
        />
        <ContentBox Tabs={Tabs} selectdTabID={selectdTabID} back={back} GoBack={handleGoBack} GoNextTab={handleSelectedTabID}/>
      </div>
    </div>
  );
}
//===============================================

//===============================================

function SideBar({ Tabs, selectdTabID}) {
  return (
    <ul className="sidebar">
      {Tabs.map((tab) => (
        <Tab
          Tab={tab}
          key={tab.id}
          selectdTabID={selectdTabID}
          
        />
      ))}
    </ul>
  );
}
//===============================================

function Tab({ Tab, selectdTabID}) {
  return (
    <div className="tab">
      <div className={`tabID ${selectdTabID === Tab.id ? "activeTabId" : ""}`}>
        {Tab.id}
      </div>
      <div className="tab-content">
        <p>Step{Tab.id}</p>
        <h4>{Tab.title}</h4>
      </div>
    </div>
  );
}
//===============================================

function ContentBox({ Tabs, selectdTabID , GoBack, GoNextTab}) {
  return (
    <div className="content-box">
      <PageTitle Tabs={Tabs} selectdTabID={selectdTabID} />

      {selectdTabID === 1 && <PersonalInfo selectdTabID={selectdTabID}  GoNextTab={GoNextTab}/>}

      {selectdTabID === 2 && <SelectYourPlan GoBack={GoBack} GoNextTab={GoNextTab} />}

      {selectdTabID === 3 && <PickAddsOn GoBack={GoBack} GoNextTab={GoNextTab} />}

      {selectdTabID === 4 && <FinishingUp GoBack={GoBack} GoNextTab={GoNextTab}/>}

      

    </div>
  );
}
//===============================================
function PageTitle({ Tabs, selectdTabID }) {
  const selectedObject = Tabs.find((tab) => tab.id === selectdTabID);
  return (
    <div className="Main-Title-Component">
      <h1 className="page-title">{selectedObject.PageTitle}</h1>
      <p className="page-description">{selectedObject.description}</p>
    </div>
  );
}

//===============================================

function PersonalInfo({ GoNextTab}) {
const [name, setName] =useState("");
const [email, setEmail] =useState("");
const [phoneNumber, setPhoneNumber] =useState("");





function handleOnSumbit(e){

  e.preventDefault();

 const  newUser = {name, email, phoneNumber};
 Allusers.push(newUser);

 console.log(newUser)
 console.log(Allusers);

 GoNextTab();
}



  return (
    <form className="personalInfo" onSubmit={handleOnSumbit} >
      <label>Name</label>
      <input type="text" placeholder="e.g. Stephen king" value={name} onChange={(e)=>setName(e.target.value)} />

      <label>Email</label>
      <input type="email" placeholder="e.g. Stephenking@lorem.com" value={email} onChange={(e)=>setEmail(e.target.value)} />

      <label>Phone Number</label>
      <input type="text" placeholder="e.g. + 1234567890" value={phoneNumber} onChange={(e)=>setPhoneNumber(+e.target.value)} />

      <div className="buttons">

<button className="btn next-btn" type="submit">Next Step</button>

</div>
      
    </form>
  );
}

//===============================================
function SelectYourPlan({GoBack, GoNextTab}) {
  const Billings = [
    {
      name: "Arcade",
      icon: arcade,
      amount: 9,
      type: "mo",
    },
    {
      name: "Advanced",
      icon: advanced,
      amount: 15,
      type: "mo",
    },
    {
      name: "Pro",
      icon: pro,
      amount: 15,
      type: "mo",
    },
  ];
  return (
    <div className="SelectYourPlan">
      <div className="Billings">
        {Billings.map((item) => (
          <BillItem billItem={item} key={item.name} />
        ))}
      </div>

      <div className="toggle-bill">
        <span>Monthly</span>
        <label class="switch">
          <input 
          type="checkbox" 
          
          />
          <span class="slider round"></span>
        </label>

        <span>Yearly</span>
      </div>

      <div className="buttons">
      <button className="btn" onClick={GoBack}>Go Back</button>

<button className="btn next-btn" onClick={GoNextTab}>Next Step</button>

</div>

    </div>
  );
}

//===============================================
function BillItem({ billItem }) {

  const [currPlan, setCurrPlan] = useState("");

  function handleSelection(){
    setCurrPlan(billItem.name);
    console.log(billItem.name)

  }

  return (
    <label className="Item" onClick={handleSelection}>

<input
            id={currPlan}
            name="plan"
            type="radio"
         
            
          />

      <img src={billItem.icon} alt={billItem.name} className="billIcon" />
      <h3>{billItem.name}</h3>
      <label className="bill-desc">


        <span>${billItem.amount}/</span>
        
        
         <span>{billItem.type}</span>


      </label>
      <p>2 months free</p>
    </label>
  );
}

//===============================================

function PickAddsOn({GoBack, GoNextTab}) {
  const PickAdds = [
    {
      id: 1,
      title: "Online Service",
      description: "Access to multiplyer games",
      amount: 1,
      type: "mo",
    },
    {
      id: 2,
      title: "Large Storage",
      description: "Extra 1TB on cloud save",
      amount: 2,
      type: "mo",
    },
    {
      id: 3,
      title: "Customizable profile",
      description: "Custom them on your profile",
      amount: 1,
      type: "mo",
    },
  ];

  return (
    <div className="PickAddsOn">
      {PickAdds.map((addsItem) => (
        <AddsItem Item={addsItem} key={addsItem.id} />
      ))}

<div className="buttons">
      <button className="btn" onClick={GoBack}>Go Back</button>

      <button className="btn next-btn" onClick={GoNextTab}>Next Step</button>

</div>
    </div>
  );
}

//===============================================
function AddsItem({ Item }) {
  return (
    <div className="AddsItem">
      <input type="checkbox" />

      <div>
        <h1>{Item.title}</h1>
        <p>{Item.description}</p>
      </div>

      <p className="adds-amount">
        {" "}
        +$
        <span>
          {Item.amount}/{Item.type}
        </span>
      </p>
    </div>
  );
}
//===============================================

function FinishingUp({GoBack, GoNextTab}) {
  return (
   <>
   
   <div className="FinishingUp">
      <div className="userInfo">
        <h2>Arcade(Monthely)</h2>
        <div className="selected">
          <button>Change</button>
          amount
        </div>
      </div>

     <FinishItem />
     <FinishItem />

<TotalItem />
     



    </div>

<div className="buttons">
<button className="btn" onClick={GoBack}>Go Back</button>

<button className="btn next-btn" onClick={GoNextTab}>Next Step</button>

</div>

   </>
  );
}

//===============================================
function FinishItem(){

return(
    <div className="selected">
    <p>Large Storage</p>
    amount
  </div>


  );
}

//===============================================
function TotalItem(){

  return(
    <div className="selected">

    <input type="text" disabled placeholder="Total (per month)"/>
    <p>+$1/mo</p>
    </div>
  
    );
  }