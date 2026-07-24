type User = {
    link: string,
    readonly apikey: number,
}

const userProps: User = {
    link : 'gpt', //changable
    apikey: 234     //readonly
} 
//  or 
const userProps2: Readonly<User> = {
    link: 'openai', //readonly
    apikey: 124        //readonly
}
