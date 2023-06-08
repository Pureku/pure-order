import React from "react";
import Card from "./card.component";
import "../app/globals.css";
const Content = () => {
  return (
    <>
      <div class="grid grid-cols-3 sm:grid-cols-2 gap-4">
        <div class="...">
          <Card />
        </div>
        <div class="...">02</div>
        <div class="...">03</div>
        <div class="col-span-2 ...">04</div>
        <div class="...">05</div>
        <div class="...">06</div>
        <div class="col-span-2 ...">07</div>
      </div>
    </>
  );
};
export default Content;
