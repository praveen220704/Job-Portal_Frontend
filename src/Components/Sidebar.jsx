import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

    const [active, setActive] = useState("Dashboard");
    const items = ["Dashboard", "Jobs", "Applications", "Profile"];

  return (
    <div className="list-group">
          {
              items.map((item, index) => (
                  <Link key={index} to={`/dashboard/${item.toLowerCase()}`} className={`list-group-item list-group-item-action ${active === item ? "active" : ""}`}
                      onClick={() => setActive(item)}
                  >
                      {item}
                  </Link>
              ))
      }
    </div>
  )
}

export default Sidebar;