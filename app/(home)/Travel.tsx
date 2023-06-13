import React from "react";
import Card from "../(shared)/Card";

type Props = {};

const Travel = (props: Props) => {
  return (
    <section className="mt-10">
      <hr className="border-1" />
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-green py-2 px-5 text-wh-900 text-sm font-bold">
          Travel
        </h4>

        <p className="font-bold text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sim
        </p>
      </div>

      {/* CARD ROW */}

      <div>
        <Card
          imageHeight="h-96"
          isLongForm
          className="col-span-1 row-span-3 bg-wh-500"
        />
      </div>
    </section>
  );
};

export default Travel;
