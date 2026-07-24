// function updateUser(user: userRecord) {
//     return user.id
// }
const user = {
    'n01': {
        age: 20,
        name: 'Raj'
    }
};
console.log(user);
//Map much fancier type 
const userMap = new Map();
userMap.set('n02', {
    name: 'Rock',
    age: 35
});
console.log(userMap.get('n02'));
export {};
