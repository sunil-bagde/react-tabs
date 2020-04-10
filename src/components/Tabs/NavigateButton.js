import React from "react";

let NavigateButton = () => {
    return (
        <span className="relative z-0 inline-flex flex items-center  ">
            <button
                type="button"
                className=" relative inline-flex items-center px-2 py-2     border-gray-300 bg-white text-sm leading-5 font-medium text-black hover:text-gray-800 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-black transition ease-in-out duration-150 bg-gray-300 border-r border-gray-500  bg-gray-300   "
            >
                <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <button
                type="button"
                className="-ml-px relative inline-flex items-center px-2 py-2     border-gray-300 bg-white text-sm leading-5 font-medium text-black hover:text-gray-800 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-black transition ease-in-out duration-150 bg-gray-300 border-r border-l border-gray-500  bg-gray-300 "
            >
                <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </span>
    );
};

export default NavigateButton;
