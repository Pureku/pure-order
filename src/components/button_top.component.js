"use client";

import React, { useRef, useState } from "react";

const ButtonTop = () => {
  const scrollRef = useRef(null);

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  };

  return (
    <>
      <div class="fixed right-8 bottom-8 z-50  flex-col gap-3 flex ">
        <div class="dropdown dropdown-left">
          <button
            aria-label="Scroll To Comment"
            type="button"
            class="rounded-full swap bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
            tabindex="0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 swap-on fill-current"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 swap-off fill-current"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
          </button>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <button
          aria-label="Scroll To Comment"
          type="button"
          class="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
        >
          <svg viewBox="0 0 32 32" class="h-5 w-5" fill="currentColor">
            <title />
            <g id="Shops">
              <path d="M27.92,24.08l-2.24-13A4.73,4.73,0,0,0,21.14,7H21A5,5,0,0,0,11,7h-.14a4.73,4.73,0,0,0-4.54,4.08l-2.24,13a5.23,5.23,0,0,0,1.13,4.29A4.45,4.45,0,0,0,8.62,30H23.38a4.45,4.45,0,0,0,3.41-1.63A5.23,5.23,0,0,0,27.92,24.08ZM16,4a3,3,0,0,1,3,3H13A3,3,0,0,1,16,4Zm9.26,23.08a2.45,2.45,0,0,1-1.88.92H8.62a2.45,2.45,0,0,1-1.88-.92,3.21,3.21,0,0,1-.69-2.66l2.24-13A2.74,2.74,0,0,1,10.86,9H21.14a2.74,2.74,0,0,1,2.57,2.42l2.24,13A3.21,3.21,0,0,1,25.26,27.08Z" />
            </g>
          </svg>
        </button>

        <div ref={scrollRef}>
          <button
            aria-label="Scroll To Top"
            type="button"
            onClick={scrollToTop}
            class="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
          >
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonTop;
