import { useState } from "react";
import SideBar from "./components/SideBar"
import ContentBox from "./components/ContentBox"

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
          Allusers = {Allusers}
        />

      </div>
    </div>
  );
}
