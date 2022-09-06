import * as dotenv from 'dotenv';

const useVarEnvs = () => {
  return dotenv.config({
    path: process.env.TS_NODE_DEV === 'true' ? '.env.development' : '.env.production'
  });
}

export { useVarEnvs };