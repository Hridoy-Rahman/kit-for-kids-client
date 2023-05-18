import React from "react";
import { Tab } from "react-tabs";
import Toy from "./Toy";


function ShopByCategory() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center font-bold mb-4">Shop By Category</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 px-4 mb-6">
          <Tab label="Math Toys">
            <Toy
              pictureUrl="https://example.com/toy1.jpg"
              name="Toy 1"
              price={19.99}
              rating={4.5}
            />
            <Toy
              pictureUrl="https://example.com/toy2.jpg"
              name="Toy 2"
              price={24.99}
              rating={3.8}
            />
          </Tab>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-6">
          <Tab label="Language Toys">
            <Toy
              pictureUrl="https://example.com/toy3.jpg"
              name="Toy 3"
              price={14.99}
              rating={4.9}
            />
            <Toy
              pictureUrl="https://example.com/toy4.jpg"
              name="Toy 4"
              price={29.99}
              rating={4.0}
            />
          </Tab>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-6">
          <Tab label="Science Toys">
            <Toy
              pictureUrl="https://example.com/toy5.jpg"
              name="Toy 5"
              price={39.99}
              rating={4.7}
            />
            <Toy
              pictureUrl="https://example.com/toy6.jpg"
              name="Toy 6"
              price={49.99}
              rating={3.5}
            />
          </Tab>
        </div>
      </div>
    </div>
  );
}

export default ShopByCategory;
