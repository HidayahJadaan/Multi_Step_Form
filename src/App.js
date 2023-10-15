import { useState } from "react";
import arcade from "./assets/images/icon-arcade.svg";
import advanced from "./assets/images/icon-advanced.svg";
import pro from "./assets/images/icon-pro.svg";
import thank from "./assets/images/icon-thank-you.svg"
//===============================================
const  Allusers = [];

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
  const [confirmationMade, setConfirmationMade] = useState(false);
  const [back, setBack] = useState(selectdTabID);

  function handleSelectedTabID() {
    if (selectdTabID > 0 && selectdTabID < 4) setSelectedTabID(selectdTabID + 1);
  }



  function handleGoBack() {
    setBack(setSelectedTabID(selectdTabID - 1));
  }

  function handleConfirmation() {
    setConfirmationMade(true);
  }

  function specialGoBack() {
    setConfirmationMade(false);
    setSelectedTabID(1);
  }



  return (
    <div className="container">
      <div className="app">
        <SideBar
          Tabs={Tabs}
          selectdTabID={selectdTabID}
          GoNextTab={handleSelectedTabID}
        />
        <ContentBox
          Tabs={Tabs}
          selectdTabID={selectdTabID}
          back={back}
          GoBack={handleGoBack}
          GoFirst={specialGoBack}
          GoNextTab={handleSelectedTabID}
          onConfirm={handleConfirmation}
          confirmationMade={confirmationMade} // Pass confirmation status as a prop
        />

      </div>
    </div>
  );
}
//===============================================

//===============================================

function SideBar({ Tabs, selectdTabID }) {
  return (
    <ul className="sidebar">
      {Tabs.map((tab) => (
        <Tab Tab={tab} key={tab.id} selectdTabID={selectdTabID} />
      ))}
    </ul>
  );
}
//===============================================

function Tab({ Tab, selectdTabID }) {
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

function ContentBox({ Tabs, selectdTabID, GoBack, GoNextTab, GoFirst, onConfirm, confirmationMade }) {
 

  const [userInfo, setUserInfo] = useState({
    UserData: {
      Name: "",
      Email: "",
      PhoneNumber: "",
    },
    UserPlan: {
      Planname: "",
      icon: "",
      Planamount: "",
      Plantype: "",
      PlanID: "",
    },
    UserAddsInfo: [],
  });

  // Define functions to update the userInfo object
  const updateName = (name) => {
    setUserInfo({ ...userInfo, UserData: { ...userInfo.UserData, Name: name } });
  };

  const updateEmail = (email) => {
    setUserInfo({ ...userInfo, UserData: { ...userInfo.UserData, Email: email } });
  };

  const updatePhoneNumber = (phoneNumber) => {
    setUserInfo({
      ...userInfo,
      UserData: { ...userInfo.UserData, PhoneNumber: phoneNumber },
    });
  };

  const updatePlanInfo = (planName, planIcon, planAmount, planType) => {
    setUserInfo({
      ...userInfo,
      UserPlan: {
        Planname: planName,
        icon: planIcon,
        Planamount: planAmount,
        Plantype: planType,
      },
    });
  };
if (confirmationMade) {
  Allusers.push(userInfo);
  console.log(userInfo)
  console.log(Allusers)

    return (
      <ThankFullComponent />
      
    );
  } 

  else 
 {
  return (
    <div className="content-box">
      <PageTitle Tabs={Tabs} selectdTabID={selectdTabID} />

      {selectdTabID === 1 && (
        <PersonalInfo
          selectdTabID={selectdTabID}
          GoNextTab={GoNextTab}
          userInfo={userInfo}
          onSetName={(e) => updateName(e.target.value)}
          onSetEmail={(e) => updateEmail(e.target.value)}
          onSetPhone={(e) => updatePhoneNumber(+e.target.value)}
        />
      )}

      {selectdTabID === 2 && (
       <SelectYourPlan
       GoBack={GoBack}
       GoNextTab={GoNextTab}
       userInfo={userInfo}
       updatePlanInfo={updatePlanInfo}
     />
      )}

      {selectdTabID === 3 && (
        <PickAddsOn 
        GoBack={GoBack}
        GoNextTab={GoNextTab}
        userInfo={userInfo}
        onSetAddsID={() => {}}
        onSetAddsTitle={() => {}}
        onSetAddsDescription={() => {}}
        onSetAddsAmount={() => {}}

        />
      )}

     {
      selectdTabID === 4 && (
        <FinishingUp
        GoBack={GoFirst}
        userInfo={userInfo}
        selectdTabID={selectdTabID}
      />

      )
     }
      
      <div className="buttons">
        <button className="btn" onClick={GoBack}>
          Go Back
        </button>
        <button
          className="btn next-btn"
          onClick={
            selectdTabID === 4 ? onConfirm : GoNextTab
          }
        >
          {selectdTabID === 4 ? "Confirm" : "Next Step"}
        </button>
      </div>

    </div>
  );

 }
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

function PersonalInfo({
  GoNextTab,
  userInfo,
  onSetName,
  onSetEmail,
  onSetPhone,
}) 

{
  function handleOnSumbit(e) {
    e.preventDefault();
    console.log(userInfo);

    GoNextTab();
  }

  return (
    <form className="personalInfo" onSubmit={handleOnSumbit}>
      <label>Name</label>
      <input type="text" placeholder="e.g. Stephen king" onChange={onSetName}  required/>

      <label>Email</label>
      <input
        type="email"
        placeholder="e.g. Stephenking@lorem.com"
        onChange={onSetEmail}
        required
      />

      <label>Phone Number</label>
      <input
        type="text"
        placeholder="e.g. + 1234567890"
        onChange={onSetPhone}
        required
      />

     
    </form>
  );
}

//===============================================
function SelectYourPlan({ GoBack, GoNextTab, userInfo ,  updatePlanInfo})

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

//===============================================
function BillItem({ billItem, userInfo , updatePlanInfo }) 
  
  {
  const [currPlan, setCurrPlan] = useState("");

  
  function handleSelection() {
    setCurrPlan(billItem.name);

    
    // Update the state using the provided functions
    updatePlanInfo(billItem.Planname, billItem.icon ,billItem.Planamount, billItem.Plantype);
       console.log(userInfo);
  }



  return (
      <label className="Item" onClick={handleSelection}>
      <input id={currPlan} name="plan" type="radio" />


      <img src={billItem.icon} alt={billItem.Planname} className="billIcon" />
      <h3>{billItem.Planname}</h3>
      <label className="bill-desc">
        <span>${billItem.Planamount}/</span>

        <span>{billItem.Plantype}</span>
      </label>
      <p>2 months free</p>
    </label>
  );
}

//===============================================

function PickAddsOn({
  GoBack,
  GoNextTab,
  userInfo,
  onSetAddsID,
  onSetAddsTitle,
  onSetAddsDescription,
  onSetAddsAmount,
}) {
  const PickAdds = [
    {
      AddsId: 0,
      AddsTitle: "Online Service",
      AddsDescription: "Access to multiplayer games",
      AddsAmount: 1,
      AddsType: "mo",
    },
    {
      AddsId: 1,
      AddsTitle: "Large Storage",
      AddsDescription: "Extra 1TB on cloud save",
      AddsAmount: 2,
      AddsType: "mo",
    },
    {
      AddsId: 2,
      AddsTitle: "Customizable profile",
      AddsDescription: "Custom theme on your profile",
      AddsAmount: 1,
      AddsType: "mo",
    },
   ];

   const handleSelection = (item) => {
    const existingAddOnIndex = userInfo.UserAddsInfo.findIndex(
      (add) => add.AddsId === item.AddsId
    );

    if (existingAddOnIndex === -1) {
      // If it doesn't exist, add the new Add-On to the array
      userInfo.UserAddsInfo.push(item);
    } else {
      // If it exists, remove it from the array
      userInfo.UserAddsInfo.splice(existingAddOnIndex, 1);
    }

    // Call the provided functions to update the corresponding state
    onSetAddsID(item.AddsId);
    onSetAddsTitle(item.AddsTitle);
    onSetAddsDescription(item.AddsDescription);
    onSetAddsAmount(item.AddsAmount);
  };
  


  return (
    <div className="PickAddsOn">
      {PickAdds.map((addsItem) => (
        <AddsItem
          key={addsItem.AddsId}
          item={addsItem}
          userInfo={userInfo}
          handleSelection={handleSelection}
        />
        
      ))}

     
    </div>
  );
}

//===============================================
function AddsItem({ item, userInfo, handleSelection }) {
  const isAddOnSelected = userInfo.UserAddsInfo.some(
    (add) => add.AddsId === item.AddsId
  );

  const handleCheckboxClick = () => {
    handleSelection(item);
    console.log(userInfo);
  };

  return (
    <label className="AddsItem">
      <input
        type="checkbox"
        defaultChecked={isAddOnSelected} // Use defaultChecked
        onClick={handleCheckboxClick}
      />

      <div>
        <h1>{item.AddsTitle}</h1>
        <p>{item.AddsDescription}</p>
      </div>

      <p className="adds-amount">
        +$
        <span>
          {item.AddsAmount}/{item.AddsType}
        </span>
      </p>
    </label>
  );
}




//===============================================

function FinishingUp({  userInfo }) {

  

  return (
    <>
      <div className="FinishingUp">
        <div className="userInfo">
          <h2>
            {userInfo.UserPlan.Planname}{' '}
            {userInfo.UserPlan.Plantype === 'mo' ? '(Monthly)' : '(Yearly)'}
          </h2>
          <h2>
            +${userInfo.UserPlan.Planamount}/
            {userInfo.UserPlan.Plantype === 'mo' ? 'mo' : 'yr'}
          </h2>
        </div>
        <div className="selected">
          <button>Change</button>
        </div>
        <FinishItem userInfo={userInfo}/>
      </div>

      <TotalItem userInfo={userInfo}/>

    </>
  );
}


//===============================================
function FinishItem({userInfo}) {
  return (
    <div>
      {userInfo.UserAddsInfo.map((item, index) => (
        <div className="selected" key={index}>
          <p>{item.AddsTitle}</p>
          <p>+${item.AddsAmount}/{item.AddsType}</p>
        </div>
      ))}
    </div>
  );
}

//===============================================
function TotalItem({userInfo}) {

  const totalAmount = userInfo.UserAddsInfo.reduce((total, item) => total + parseFloat(item.AddsAmount), 0);

  return (
    <div className="selected Total">
     <p> Total per {userInfo.UserPlan.Plantype === "mo" ? "month" : "year"} </p>
     <h2> {`$${totalAmount + userInfo.UserPlan.Planamount}/${userInfo.UserPlan.Plantype}`}</h2>
    </div>
  );
}

//============================================

function ThankFullComponent() {
  

  return (
    <div className="content-box Thanks">
    <img src={thank} alt="thankImage" />
    <h1>Thank You</h1>
    <p>Thanks for confirming your subscription! We hope you have fun 
      using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  );
}