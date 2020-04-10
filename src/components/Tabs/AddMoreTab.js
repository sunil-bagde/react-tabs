import React from "react";

let AddMoreTab = () => {
    return (
        <div className=" ml-auto flex-grow-0   relative z-0 inline-flex flex items-center   ">
            <button
                type="button"
                className="-ml-px relative inline-flex items-center   py-2  border border-gray-300 bg-white text-sm leading-5 font-medium  text-black focus:z-10 focus:outline-none     bg-gray-300 "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-5 icon-add"
                >
                    <path
                        className="secondary"
                        fillRule="evenodd"
                        d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
                    ></path>
                </svg>
            </button>
        </div>
    );
};

export default AddMoreTab;
