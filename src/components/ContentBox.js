import { useState } from "react";
import Allusers from "../App"
import PageTitle from "../components/PageTitle"
import PersonalInfo from "./PersonalInfo.js"
import SelectYourPlan from "../components/SelectPlan"
import PickAddsOn from "../components/PickAdds"
import FinishingUp from "../components/FinishingUp"
import ThankFullComponent from "../components/Thank"

export default function ContentBox({ Tabs, selectdTabID, GoBack, GoNextTab, GoFirst, onConfirm, confirmationMade, Allusers }) {
 

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
    Allusers.push(userInfo)
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