import React from 'react';
import PageTitle from './PageTitle';
import "./Admin.css"
export default function Admin({ Tabs, selectdTabID, Allusers }) {
  const storedAllusers = JSON.parse(localStorage.getItem('allusers')) || [];


  return (

    <div>
      {console.log(storedAllusers)}
    </div>
    // <div className="content-box">
    //   <PageTitle Tabs={Tabs} selectdTabID={selectdTabID} />
    //   <div className="user-cards">
    //     {Allusers.length > 0 ? (
    //       Allusers.map((user, index) => (
    //         <div key={index} className="user-card">
    //           <h3>User {index + 1}</h3>
    //           <div className="user-info">
    //             <h4>User Data</h4>
    //             <p>Name: {user.UserData.Name}</p>
    //             <p>Email: {user.UserData.Email}</p>
    //             <p>Phone Number: {user.UserData.PhoneNumber}</p>
    //           </div>
    //           <div className="user-info">
    //             <h4>User Plan</h4>
    //             <p>Plan Name: {user.UserPlan.Planname}</p>
    //             <p>Plan Type: {user.UserPlan.Plantype}</p>
    //             <p>Plan Amount: {user.UserPlan.Planamount}</p>
    //             <p>Plan Icon: {user.UserPlan.icon}</p>
    //           </div>
    //           <div className="user-info">
    //             <h4>User Adds Info</h4>
    //             <ul>
    //               {user.UserAddsInfo.map((adds, addsIndex) => (
    //                 <li key={addsIndex}>
    //                   <strong>Adds ID:</strong> {adds.AddsId}<br />
    //                   <strong>Adds Title:</strong> {adds.AddsTitle}<br />
    //                   <strong>Adds Description:</strong> {adds.AddsDescription}<br />
    //                   <strong>Adds Amount:</strong> {adds.AddsAmount}<br />
    //                   <strong>Adds Type:</strong> {adds.AddsType}<br />
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       ))
    //     ) : (
    //       <p>No Users Yet</p>
    //     )}
    //   </div>
    // </div>
  );
}
