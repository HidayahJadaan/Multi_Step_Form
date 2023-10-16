import { useState } from "react";
import PageTitle from "../components/PageTitle"
import PersonalInfo from "./PersonalInfo.js"
import SelectYourPlan from "../components/SelectPlan"
import PickAddsOn from "../components/PickAdds"
import FinishingUp from "../components/FinishingUp"
import ThankFullComponent from "../components/Thank"
import Admin from "../components/Admin"
import AdminLoginPage from "../components/AdminLogin"
import "./ContentBox.css"

export default function ContentBox({ Tabs, selectdTabID, GoBack, GoNextTab, GoFirst, onConfirm, confirmationMade, Allusers,specialGoAdmin,showAdmin,adminLoggedIn,
  GoToAdminPage,handleAdminLogin }) {
  
    function saveAllUsersToLocalStorage(Allusers) {
      localStorage.setItem('allusers', JSON.stringify(Allusers));
    }
    
 
  function onCancel() {
    // Reset the form state to its initial values
    setUserInfo({
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

    GoFirst();
  }

  

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
      if (
        userInfo.UserData.Name &&
        userInfo.UserData.Email &&
        userInfo.UserData.PhoneNumber &&
        userInfo.UserPlan.Planname
      ) {
        // Check if the user doesn't already exist in the Allusers array
        const userExists = Allusers.some((user) => user.UserData.Email === userInfo.UserData.Email);
  
        if (!userExists) {
          Allusers.push(userInfo);
          saveAllUsersToLocalStorage(Allusers);
console.log("Saving To Local Storage Successed")
          setUserInfo({
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
          console.log("User Confirmation Successfully", Allusers);
        }
      }

    // selectdTabID = selectdTabID+1;
  
    return (
      
      showAdmin && !adminLoggedIn ? (
        <AdminLoginPage Tabs={Tabs} selectdTabID={selectdTabID}  GoBack={onCancel} onAdminLogin={handleAdminLogin} />
      ) : adminLoggedIn ? (
        <Admin Tabs={Tabs} selectdTabID={selectdTabID} Allusers={Allusers} />
      ) : (
        <ThankFullComponent GoNextTab={GoNextTab} GoBack={onCancel} selectdTabID={selectdTabID}  specialGoAdmin={specialGoAdmin} />
      )
    );
    } 
  
    else 
   {
    return (
      <div className="content-box">


        <PageTitle Tabs={Tabs} selectdTabID={selectdTabID} />
  


        {selectdTabID === 1 && (
          <PersonalInfo
            GoNextTab={GoNextTab}
            userInfo={userInfo}
            onSetName={(e) => updateName(e.target.value)}
            onSetEmail={(e) => updateEmail(e.target.value)}
            onSetPhone={(e) => updatePhoneNumber(+e.target.value)}
            specialGoAdmin={specialGoAdmin}
           
          />
        )}
  
        {selectdTabID === 2 && (
         <SelectYourPlan
         GoBack={GoBack}
         GoNextTab={GoNextTab}
         userInfo={userInfo}
         updatePlanInfo={updatePlanInfo}
         setUserInfo={setUserInfo}
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

{selectdTabID !==1 && selectdTabID !==5 && 
          <button className="btn" onClick={GoBack}>
            Go Back
          </button> }


        {
          selectdTabID !==5 &&

          
          <button
          className="btn next-btn"
          onClick={
            selectdTabID === 4 ? onConfirm : GoNextTab
          }
        >
          {selectdTabID === 4 ? "Confirm" : "Next Step"}

         
        </button>

        }
        </div>
  
      </div>
    );
  
   }
  }