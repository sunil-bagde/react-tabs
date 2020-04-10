import React, { useState, useContext, Children } from "react";
import "./tailwind.generated.css";
import "./index.css";

import Tabs_ from "./components/Tabs";
import NavigateButton from "./components/Tabs/NavigateButton";
import AddMoreTab from "./components/Tabs/AddMoreTab";

import * as text from "./text";
const TabsContext = React.createContext({
  activeIndex: 0,
  onSelectTab: () => {},
});

let tabData = [
  {
    content: text.cars,
  },
  {
    content: text.hotels,
  },
  {
    content: text.flights,
  },
];

function Tabs({ children }) {
  let [activeIndex, setActiveIndex] = useState(0);

  return (
    <TabsContext.Provider value={{ activeIndex, onSelectTab: setActiveIndex }}>
      {children}
    </TabsContext.Provider>
  );
}

function TabList({ children: C }) {
  const { activeIndex, onSelectTab } = useContext(TabsContext);
  let children = Children.map(C, (child, index) => {
    return React.cloneElement(child, {
      isActive: index === activeIndex,
      onSelect: () => onSelectTab(index),
      index: index,
    });
  });
  return children;
}

function Tab({ children, isActive, onSelect, index }) {
  let isDisabled = false;

  return (
    <div
      className={`react-tabs-tab border-r border-gray-500 text-black flex items-center justify-between ${
        isActive ? "bg-gray-200" : "bg-gray-400"
      } `}
      draggable="true"
      onClick={onSelect}
    >
      <div className=" text-gray-700 cursor-pointer text-center hover:bg-gray-300 ">
        {"#"}
        {index}
      </div>
      <div className="react-tabs-tab-content pl-3">{children}</div>
      <div className="text-gray-700 cursor-pointer text-center hover:bg-gray-300  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-5 h-5 "
        >
          <path
            fillRule="evenodd"
            d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

function TabPanels({ children }) {
  const { activeIndex } = useContext(TabsContext);

  return (
    <div className="bg-white relative" id="features">
      <div className="overflow-hidden">
        <div className="container   pt-2 md:px-4 px-4 ">
          {children[activeIndex]}
        </div>
      </div>
    </div>
  );
}

function TabPanel({ children }) {
  return children;
}

function App() {
  return (
    <div className=" ">
      <Tabs>
        {/*<NavigateButton />*/}
        {/*  */}
        <div className="react-tabs-container h-6">
          <NavigateButton></NavigateButton>
          <TabList>
            <Tab>New Tab 0</Tab>
            <Tab>New Tab 1 </Tab>
            <Tab>New Tab 2 </Tab>
            <AddMoreTab />
          </TabList>
        </div>

        {/*Panels*/}
        <TabPanels>
          <TabPanel>{text.cars}</TabPanel>
          <TabPanel>{text.hotels}</TabPanel>
          <TabPanel>{text.flights}</TabPanel>
          <TabPanel>{text.space}</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
