import NodeCache from 'node-cache';

const cache = new NodeCache();

const addToCache = async (email: string,token: string): Promise<void> => {
  cache.set(email,token);
};

const getAllFromCache = (): any => {
  return cache.keys().map(key => ({ [key]: cache.get(key) }));
};

const clearCache = (): void => {
  cache.flushAll();
};

const checkEmailInCache = (email: string): boolean => {
  return cache.has(email);
};


const deleteFromCache = (email: string): boolean => {
  const deletedCount = cache.del(email);
  return deletedCount > 0; // Retorna true se algum item foi excluído, false caso contrário
};


export { addToCache,getAllFromCache,clearCache,deleteFromCache,checkEmailInCache }; // Exporta a função para ser usada em outros arquivos
