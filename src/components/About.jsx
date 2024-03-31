import React from "react";
import img from "../img/Fast-food-design-Premium-vector-PNG.png";

function About() {
  return (
    <div>
      <div className="">
        <section className="content-section py-6 flex justify-between items-center">
          <div className="text-container flex">
            <div className="img-container w-1/2">
              <img
                src={img}
                alt=""
                className="h-64 mx-auto transition-transform duration-300 transform hover:scale-110"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-center text-xl font-bold py-2">
                Welcome to FreshDelights
              </h2>
              <p className="mb-4">
                FreshDelights: Your Ultimate Destination for Fast and
                Delicious Cravings 
                Description: Welcome to FreshDelights, your
                go-to destination for satisfying your cravings with
                lightning-fast delivery! At FreshDelights, we pride ourselves on
                offering a diverse selection of fresh and mouthwatering options,
                ranging from succulent fruits to delectable dishes, refreshing
                juices, and creamy ice cream. With our commitment to speed and
                quality, you can trust that your order will be delivered
                promptly, ensuring a delicious and satisfying experience every
                time. Don't wait any longer – order now and indulge in the
                delightful flavors and speedy service of FreshDelights!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
