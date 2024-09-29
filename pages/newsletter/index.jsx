import React from "react";
import Story from "../../components/about/Story";
import Meta from "../../components/Meta";

const newsletter = () => {
  return (
    <div>
      <Meta title="newseletter UnchainPet: Decentralized Pet Adoption Network" />
      <div className="pt-[5.5rem] lg:pt-24">
        <Story compFor="news" />
      </div>
    </div>
  );
};

export default newsletter;
