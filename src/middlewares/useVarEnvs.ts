import * as dotenv from 'dotenv';

const useVarEnvs = () => {
  return dotenv.config({
    path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env.production'
  });
}

export { useVarEnvs };