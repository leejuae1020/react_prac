import React, { useContext } from "react";
import { FamilyContext } from "../context/FamilyContext";

function Child() {
  const data = useContext(FamilyContext);
  const style = {
    color: "red",
    fontWeight: "900",
  };
  return (
    <div>
      나는 이 집안의 막내에요 <br />
      할아버지가 우리 집 이름은 <span style={style}>{data.houseName}</span>라고 하셨어요. <br />
      그리고 용돈을 <span style={style}>{data.poketMoney}</span> 만큼이나 주셨지뭐람
    </div>
  );
}

export default Child;
