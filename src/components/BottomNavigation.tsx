"use client"

/**
 * Based on https://flowbite.com/docs/components/bottom-navigation/
 */

import React from "react";

type RoundedBottomNavigation = React.HTMLAttributes<HTMLDivElement> & {
    itemCount: number;
    children: React.ReactNode;
}

type RoundedBottomNavigationItem = React.HTMLAttributes<HTMLButtonElement> & {
    item_text: string;
    onClick: () => void;
    viewBox: string;
    children: React.ReactNode;
}

type HighlightedBottomNavigationItem = React.HTMLAttributes<HTMLButtonElement> & {
    item_text: string;
    onClick: () => void;
    viewBox: string;
    children: React.ReactNode;
}

type BottomNavigation = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
}

type BottomNavigationItem = React.HTMLAttributes<HTMLButtonElement> & {
    item_text: string;
    onClick: () => void;
    children: React.ReactNode;
}

/**
 * Parent class for a rounded bottom navigation bar. contains 4-5 items
 * @param children must be one of RoundedBottomNavigationItem or HighlightedBottomNavigationItem
 * @constructor
 */
const RoundedBottomNavigation: React.FC<RoundedBottomNavigation> = ({ children, ...props }) => {
    return (
        <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600" {...props}>
            <div className={`grid h-full max-w-lg grid-cols-5 mx-auto`}>
                {children}
            </div>
        </div>
    );
};

/**
 * Inserts an item in a rounded bottom navigation bar. Has to be placed inside a RoundedBottomNavigation element
 * @param item_text Text of the page
 * @param onClick function which will be executed if the button is clicked
 * @param children SVG <path> elements
 * @constructor
 */
const RoundedBottomNavigationItem: React.FC<RoundedBottomNavigationItem> = ({ item_text, onClick, viewBox, children, ...props }) => {
    return (
        <button onClick={onClick} type="button" className="inline-flex overflow-hidden flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group" {...props}>
            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox={viewBox}>
                {children}
            </svg>
            <span className="sr-only">{ item_text }</span>
        </button>
    );
}

/**
 * Inserts a highlighted item in a rounded bottom navigation bar. Has to be placed inside a RoundedBottomNavigation element
 * @param item_text Text of the page
 * @param onClick function which will be executed if the button is clicked
 * @param children SVG <path> elements
 * @constructor
 */
const HighlightedBottomNavigationItem: React.FC<HighlightedBottomNavigationItem> = ({ item_text, onClick, viewBox, children, ...props }) => {
    return (
        <div className="flex items-center justify-center">
            <button onClick={onClick} type="button" className="inline-flex overflow-hidden items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800" {...props}>
                <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={viewBox}>
                    {children}
                </svg>
                <span className="sr-only">{item_text}</span>
            </button>
        </div>
    );
};


/**
 * Parent class for a bottom navigation bar. contains 4 items
 * @param children must be one of BottomNavigationItem
 * @constructor
 */
const BottomNavigation: React.FC<BottomNavigation> = ({ children }) => {
    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                {children}
            </div>
        </div>
    );
};

/**
 * Inserts an item in a bottom navigation bar. Has to be placed inside a BottomNavigation element
 * @param item_text Text of the page
 * @param onClick function which will be executed if the button is clicked
 * @param children SVG <path> elements
 * @constructor
 */
const BottomNavigationItem: React.FC<BottomNavigationItem> = ({ item_text, onClick, children, ...props }) => {
    return (
        <button onClick={onClick} type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" {...props}>
            <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                {children}
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{ item_text }</span>
        </button>
    );
}


export { RoundedBottomNavigation, RoundedBottomNavigationItem, HighlightedBottomNavigationItem, BottomNavigation, BottomNavigationItem };
