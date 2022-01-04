import { SideNavigation } from "@awsui/components-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navigations = () => {
  const [activeHref, setActiveHref] = useState("/alerts");
  const navigate = useNavigate();

  return (
    <SideNavigation
      activeHref={activeHref}
      onFollow={function updateActiveHref(e) {
        setActiveHref(e.detail.activeHref);
        navigate(e.detail.activeHref);
      }}
      items={[
          {text: "Alerts", id: "alerts", href: "/alerts"}
      ]}
    />
  );
};

export default Navigations;
