interface userProfile {
    name:string,
    age: number,
    email: string
}

type UserProps = Partial<userProfile>

function userUpdate(userProps: UserProps) {
    return userProps.name
}

console.log(userUpdate({name: 'Raj', age: 34}))