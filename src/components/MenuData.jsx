import React, { useEffect, useRef, useState } from "react";
import NotFound from "../img/NotFound.svg";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { getAllFoodItems } from "../utils/firebaseFunctions";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
  const [{ cartItems, user }, dispatch] = useStateValue();
  const [items, setItems] = useState([]);

  const rowContainer = useRef();

  const handleStar = async (id, newValue) => {
    await updateDoc(
      doc(firestore, "foodItems", `${id}`),
      {
        star: newValue,
      },
      { merge: true }
    );
    fetchData();
  };
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);
  useEffect(() => {
    addtoCart();
  }, [items]);

  const addtoCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };
  return (
    <div
      ref={rowContainer}
      className={`w-full my-6 md:my-0 gap-3 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : " items-center justify-center flex-wrap"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="w-225 min-w-[225px] md:w-300 md:min-w-[400px] h-auto bg-cardOverlay rounded-lg my-3 md:my-5 p-2 backdrop-filter backdrop-blur-lg hover:drop-shadow-lg flex   flex-direction: row
              items-center justify-between"
          >
            <div
              className="h-30 flex
            w-full items-center justify-between"
            >
              <div>
                <img
                  src={item?.imageURL}
                  alt=""
                  className="h-10 w-10 object-contain"
                />

                <p className="border-b relative w-full text-sm font-bold">
                  {item?.title}
                </p>
              </div>
              <div>
                <p>₹{item?.price}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="w-300" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
