"use client";
import React, { useState } from "react";

const Tab = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="bg-base-100 border-b-0 border-b border-gray-200 dark:border-gray-8">
      <div className="overflow-x-auto">
        <div className="flex p-2">
          {items.map((e) => {
            return (
              <>
                <div className="w-64 h-10 p-2 m-0 ">
                  <button className="badge badge-outline badge-md">
                    default
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Tab;
