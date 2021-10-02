import { CommandConfig } from './command-config';

/** configuration used to set up an environment */
export type EnvironmentConfig = {
  fileRoot: string;
  commands: CommandConfig[];
};
