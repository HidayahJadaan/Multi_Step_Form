import Tab from "./Tab.js"
import './SideBar.css'

export default function SideBar({ Tabs, selectdTabID }) {
  return (
    <ul className="sidebar">
      {Tabs.map((tab) => (
        <Tab Tab={tab} key={tab.id} selectdTabID={selectdTabID} />
      ))}
    </ul>
  );
}