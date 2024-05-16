import Category from "./Category/Category";
import Price from "./Price/Price";
import Colours from "./Colours/Colours"; // Corrected import statement

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category />
        <Price  />
        <Colours />
      </section>
    </>
  );
};

export default Sidebar;