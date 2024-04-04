import React, { useEffect, useRef, useState } from "react";
import { StateProvider, useStateValue } from "../context/StateProvider";
import MenuData from "./MenuData";
import im from "../img/bgmenu.jpeg";

function Menu() {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setscrollValue] = useState(0);
  useEffect(() => {}, [scrollValue]);
  console.log(foodItems);
  return (
    <>
    <section
    style={{backgroundImage:`url(${im})`}}
    className="bg-cover h-[350px] bg-[url(')] flex flex-col items-center justify-center px-[20rem] border-b">
        <h1 className="font-semibold text-[3rem] space-x-1 pb-4 text text-white">
          Authentic Dishes
        </h1>
      </section>
      <section className="w-full flex justify-between px-5 pt-10 border-b pb-20">
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
