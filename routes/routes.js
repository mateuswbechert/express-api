//Router definitions
const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });

    app.get('/users', (request, response) => {
        response.send(users);
    });
}

const users = [{
        id: 1,
        name: "Mateus",
        email: "mateuswb@wolbec.com",
    },
    {
        id: 2,
        name: "Elliot de Chidambar",
        email: "elliotc@wolbec.com",
    },
];


// Export the router
module.exports = router;
