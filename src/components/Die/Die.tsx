import React, { FC } from "react";
import { DieWrapper } from "./Die.styled";

interface DieProps {
  isHeld: boolean;
  value: number;
  id: string;
  holdDice: any;
}

const Die: FC<DieProps> = ({ isHeld, value, id, holdDice }) => (
  <DieWrapper data-testid="Die">
    <div className="die-container" onClick={holdDice}>
      <h2 className="die-value">{value}</h2>
    </div>
  </DieWrapper>
);

export default Die;
export type { DieProps };
