import {atom, selector} from 'recoil' 

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