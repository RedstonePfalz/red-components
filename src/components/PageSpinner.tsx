"use client"

import React from "react";

/**
 * Creates a modern full page spinner
 * @returns 
 */
function PageSpinner() {
    return (
        <div className="container mx-auto p-4 grid place-items-center h-screen">
            <div
                className="inline-block h-40 w-40 align-[-0.125em] animate-spin rounded-full border-4 border-solid border-current border-e-transparent text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Wird geladen...</span>
            </div>
        </div>
    );
}

export default PageSpinner;