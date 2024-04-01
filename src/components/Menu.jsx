import React, { useEffect, useRef, useState } from "react";
import { StateProvider, useStateValue } from "../context/StateProvider";
import MenuData from "./MenuData";

function Menu() {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setscrollValue] = useState(0);
  useEffect(() => {}, [scrollValue]);
  console.log(foodItems);
  return (
    <>
      <section className="flex justify-between px-28 pt-10 border-b pb-20">
        <div>
          <div>
            <h1 className=" text-xl font-bold text-orange-600">
              <u>Rice</u>
            </h1>
            <MenuData
              scrollValue={scrollValue}
              flag={true}
              data={foodItems?.filter((n) => n.category === "rice")}
            />
          </div>
          <div>
            <h1 className=" text-xl font-bold text-orange-600">
              <u>Chicken</u>
            </h1>
            <MenuData
              scrollValue={scrollValue}
              flag={true}
              data={foodItems?.filter((n) => n.category === "chicken")}
            />
          </div>
        </div>
        <div>
          <div>
            <h1 className=" text-xl font-bold text-orange-600">
              <u>Curry</u>
            </h1>
            <MenuData
              scrollValue={scrollValue}
              flag={true}
              data={foodItems?.filter((n) => n.category === "curry")}
            />
          </div>
          <div>
            <h1 className=" text-xl font-bold text-orange-600">
              <u>Fish</u>
            </h1>
            <MenuData
              scrollValue={scrollValue}
              flag={true}
              data={foodItems?.filter((n) => n.category === "fish")}
            />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold text-orange-600">
            <u>Soft Drinks</u>
          </h1>
          <MenuData
            scrollValue={scrollValue}
            flag={true}
            data={foodItems?.filter((n) => n.category === "drinks")}
          />
        </div>
        <div>
          <div>
            <h1 className="text-xl font-bold text-orange-600">
              <u>Ice Creams</u>
            </h1>
            <MenuData
              scrollValue={scrollValue}
              flag={true}
              data={foodItems?.filter((n) => n.category === "icecreams")}
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-orange-600">
              <u>Soups</u>
            </h1>
            <MenuData
              scrollValue={scrollValue}
              flag={true}
              data={foodItems?.filter((n) => n.category === "soups")}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
