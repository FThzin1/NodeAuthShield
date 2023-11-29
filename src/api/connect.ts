import { auth } from "./server/auth"
import { cache } from "./server/cache"


module.exports = (fastify) => {
    auth(fastify)
    cache()
}