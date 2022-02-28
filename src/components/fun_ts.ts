type User = {
    name: string
    email: string
    address:{
        city: string
        state?: string
    }
}

function showWelcomeMessage(user: User) {
    return `Welcome ${user.name}, your e-mail is ${user.email}, you city is ${user.address.city}, and you state is ${user.address.state}`;
}

const user = {
    name: 'Luis Henrique',
    email: 'luis@gmail.com',
    address: {
           city: 'Mombaça',
           state: 'Ce',
    }
}

const message = showWelcomeMessage(user)