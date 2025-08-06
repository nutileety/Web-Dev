import {atom, selector} from 'recoil' 
import axios from 'axios'

// export const notificationAtom = atom({
//     key:"notification",
//     default: selector({
//         key: "asyncNotification",
//         get: async () => {
//             const res = await axios.get("https://dummyjson.com/c/410e-9b7e-4e8f-a78c")
//             return res.data.default
//         }
//     })    
// })

export const notificationAtom = atom({
    key:"notification",
    default: 102   
})


export const messageAtom = atom({
    key: "messages",
    default: 10
})

export const jobsAtom = atom({
    key: "jobs",
    default: 4
})

export const totalNotification = selector({
    key: "totalNotification",
    get: ({get}) => {
        const notificationAtomCount = get(notificationAtom);
        const messageAtomCount = get(messageAtom);
        const jobsAtomCount = get(jobsAtom);
        return notificationAtomCount + messageAtomCount + jobsAtomCount
    }
})