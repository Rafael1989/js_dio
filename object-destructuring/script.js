// QUANDO PASSAR O OBJETO, PODE USAR SÓ O QUE VOCE PRECISAR

const user = {
    id: 42,
    displayName: 'Rafael',
    fullName: {
        firstName: 'Rafael',
        lastName: 'Bertoni'
    }
};

function userId({id}){
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}){
    return `${first} ${last}`;
}

console.log(userId(user))

console.log(getFullName(user))