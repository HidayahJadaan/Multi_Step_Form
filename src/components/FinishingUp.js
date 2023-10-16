import FinishItem from "../components/FinishItem"
import TotalItem from "../components/TotalItem"
import "./FinishingUp.css"


export default function FinishingUp({  userInfo }) {

  

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