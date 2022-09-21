// An array of users
// One of them will be admin and the other will be customer 

import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },

    {
        name: 'Gaurav Sarage',
        email: 'gaurav@example.com',
        password: bcrypt.hashSync('123456', 10),
    },

    {
        name: 'Aryan Sarage',
        email: 'aryan@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users