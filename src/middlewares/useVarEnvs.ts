import * as dotenv from 'dotenv';

const useVarEnvs = () => {
  return dotenv.config();
}

export { useVarEnvs };