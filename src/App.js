import { AppLayout } from "@awsui/components-react";
import React from "react";
import ContentHeader from "./ContentHeader";
import MainContent from "./MainContent";
import Navigations from "./Navigations";

const App = () => {
  return (
    <AppLayout
      contentHeader={<ContentHeader />}
      content={<MainContent />}
      tools="Some tool"
    />
  );
};

export default App;
