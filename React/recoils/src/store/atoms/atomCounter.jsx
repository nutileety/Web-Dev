import { atom, selector } from 'recoil'

export const counterAtom = atom({
    key: "Counter",
    default: 0
})

export const evenSelector = selector({
    key: "IsEvenSelector",
    get: ({get}) => {
        const count = get(counterAtom);
        const isEven = (count % 2 == 0);
            return isEven
    }
})