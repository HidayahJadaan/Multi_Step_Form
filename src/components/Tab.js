import "./Tab.css"

export default function Tab({ Tab, selectdTabID }) {
  return (
    <div className="tab">
     <div className="tabbbs">
     <div className={`tabID ${selectdTabID === Tab.id ? "activeTabId" : ""}`}>
        {Tab.id}
      </div>
     </div>
      <div className="tab-content">
        <p>Step{Tab.id}</p>
        <h4>{Tab.title}</h4>
      </div>
    </div>
  );
}