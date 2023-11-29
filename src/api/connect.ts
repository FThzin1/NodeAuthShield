import { auth } from "./server/auth"


module.exports = (fastify) => {
    auth(fastify)
}