function UserUpdate(user) {
    return user.name;
}
const update = UserUpdate({ name: 'sahil', age: 28 });
console.log(update);
export {};
