import { DEC, INC } from "../constants";

export const increment = () => {
  return {
    type: INC,
  };
};

export const decrement = () => {
  return {
    type: DEC,
  };
};
