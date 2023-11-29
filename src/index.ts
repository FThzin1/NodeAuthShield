import fastify from "fastify";

const app = fastify()

require("./api/connect")(app)

app.listen({port: 3500},() => {
    console.log("SERVER")
})