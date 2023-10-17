import AddsItem from "../components/AddsItem"

export default function PickAddsOn({

  userInfo,
  PickAdds,
}) {
  

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

    
  };
  

 
  
  // console.log(billings);
  // updateAdds();



 

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
