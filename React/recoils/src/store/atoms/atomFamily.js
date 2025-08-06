import TODOS from "../TODOS";
import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todoAtomFamily = atomFamily({
    key: "TodoFamily",
     default: selectorFamily({
      key: "todoSelectorfamily",
      get: (id) => async ({get})=> {
          const res = await axios.get("https://json-placeholder.mock.beeceptor.com/todos")
          return res.data.find(x => x.id === id)
        }
     })
       //id => {
    //   return TODOS.find(x => x.id == id)
    //}
})

