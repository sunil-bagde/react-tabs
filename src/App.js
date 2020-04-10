import React from "react";
import "./tailwind.generated.css";
import "./index.css";

import Tabs from "./components/Tabs";
import NavigateButton from "./components/Tabs/NavigateButton";
import AddMoreTab from "./components/Tabs/AddMoreTab";

function App() {
  return (
    <div className=" ">
      <Tabs>
        <div className="react-tabs-container">
          <NavigateButton />

          {[1, 2, 3].map((i) => {
            return (
              <div
                key={i}
                className={`react-tabs-tab border-r border-gray-500    text-black flex items-center justify-between ${
                  i === 3 ? "bg-gray-200" : "bg-gray-400"
                } `}
                draggable="true"
              >
                <div className="react-tabs-tab-content pl-3">New Tab</div>
                <div className=" text-gray-700 cursor-pointer text-center hover:bg-gray-300  ">
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
          })}
          <AddMoreTab />
        </div>
      </Tabs>
    </div>
  );
}

export default App;
