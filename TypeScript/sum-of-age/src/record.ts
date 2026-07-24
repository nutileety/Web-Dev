interface User {
    name: string,
    age: number
}

type UserRecord = Record<string, User>
// or
type UserRecord1 = {
    [key: string]: User
}

// function updateUser(user: userRecord) {
//     return user.id
// }

const user: UserRecord = {
    'n01': {
        age: 20,
        name: 'Raj'
    }
} 

console.log(user)

//Map much fancier type 
const userMap = new Map<string, User>();

userMap.set('n02', {
    name: 'Rock',
    age: 35
})

console.log(userMap.get('n02'))