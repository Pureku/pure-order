"use client";
import React, { useState } from "react";

const Tab = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="bg-white border-b-0 ">
      <div className="overflow-x-auto">
        <div className="flex p-2">
          {items.map((e) => {
            return (
              <>
                <div className="w-64 h-10 p-2 m-0">
                  <button className="badge badge-outline">default</button>
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
