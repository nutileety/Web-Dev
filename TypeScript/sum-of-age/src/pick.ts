interface userProfile{
    name: string,
    age: number,
    email: string,
    phone: number
}

type updateProps = Pick<userProfile, 'name' | 'age'>

function UserUpdate(user: updateProps) {
    return user.name;
}

const update = UserUpdate({name: 'sahil', age:28})
console.log(update)