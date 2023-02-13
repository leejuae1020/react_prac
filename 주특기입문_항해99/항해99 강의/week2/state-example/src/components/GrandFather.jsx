import React from "react";
import { FamilyContext } from "../context/FamilyContext";
import Farther from "./Farther";

// 진도준에게 정보를 넘겨줘서 진도준이 그정보를 출력할 수있게하자.
function GrandFather() {
  const houseName = "순양가";
  const poketMoney = "땅 5만평";
  return (
    <FamilyContext.Provider
      value={{
        houseName,
        poketMoney,
      }}
    >
      <Farther />
    </FamilyContext.Provider>
  );
}

export default GrandFather;
