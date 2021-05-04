const swaggerAutogen = require('swagger-autogen')()
const doc = {
    info : {
        version: "1.0.0",
        title: "spender API",
        description: "Documentation for the spender API"
    },
    host : "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "User",
            "description": "Endpoints",

        },
        {
            "name": "Merchant",
            "description": "merchant endpoints",
        },
        {
            "name": "Card",
            "description": "card endpoints",
        },
        {
            "name": "Transactoion",
            "description": "transaction endpoints",
        }
    ],
    securityDefinitions: {
        apiKeyAuth: {
            type: "apikey",
            in: "cookie",
            name: "access_token",
            description: "cookie based authentication"
        }
    },
definitions: {
User: {
FirstName: "John",
LastName: "Doe",
Email: "abe@gmail.com",
password: "King4#Latin",
ProfilePicture: "http://",
Wallet: {
    $ref: '#/definitions/Wallet'
},
Phonenumbers: [
    {
        $ref: '#/definitions/Phonenumber'
    },
],
Cards: [
    {
        $ref: '#/definitions/Card',        
    }
],
Transactions: [
    {
        $ref: '#/definitions/Transaction'
    }
]
},
Card: {
value : 1000.00,
Merchant: "chicken republic"
},
Transaction: {
    value: 1000.00,
    Type: "credit"
},
Phonenumber: {
    CountryCode : "+234",
    AreaCode: "81634556789"
},
Wallet: {
    Balance: 1000.00
}
}
}

const outputFile = './swagger-output.json';
const endpointsFile = ['./server.js'];
swaggerAutogen(outputFile, endpointsFile, doc).then(() => {
    require('./bin/www')
}).catch((e) => {
    console.log(e);
})
