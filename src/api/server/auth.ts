import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify"
import bcrypt from 'bcrypt';

interface UserData {
  email: string;
  senha: string;
}

const fakedb: UserData[] = [];

export const auth = (fastify: FastifyInstance): void => {
  fastify.post('/login', async (request: FastifyRequest, reply: FastifyReply) => {  
    const { email, senha } = request.body as { email: string, senha: string };
    const usuarioEncontrado = fakedb.find((usuario) => usuario.email === email);
    if (usuarioEncontrado) {
      const hash = await bcrypt.compare(senha,usuarioEncontrado.senha)
      if (hash) {
        return { status : true }
      }
    }
    return usuarioEncontrado;
  });  
  fastify.post('/signup', async (request: FastifyRequest, reply: FastifyReply) => {
    const { email, senha } = request.body as { email: string, senha: string };
    const valido = validarEmail(email);
    if (valido) {
      const hashedPassword = await bcrypt.hash(senha, 13);
      const novoUsuario: UserData = { email, senha: hashedPassword };
      fakedb.push(novoUsuario);
      return {hash: hashedPassword}
    } else {
      return {message: "Invalido"}
    }
  });
};

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}