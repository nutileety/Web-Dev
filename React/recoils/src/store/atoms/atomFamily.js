import TODOS from "../TODOS";
import { atomFamily } from "recoil";

export const todoAtomFamily = atomFamily({
    key: "TodoFamily",
    default: id => {
      return TODOS.find(x => x.id == id)
    }
})

