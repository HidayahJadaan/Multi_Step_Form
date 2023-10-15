import AddsItem from "../components/AddsItem"

export default function PickAddsOn({
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
