import { atom, selector } from "recoil";

const profileState = atom({
  key: "countState",
  default: 0
});

export {
  profileState
};