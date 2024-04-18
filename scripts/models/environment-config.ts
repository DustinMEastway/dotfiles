import { CommandConfig } from './command-config';

/** Configuration used to set up an environment. */
export type EnvironmentConfig = {
  /** The commands to run. */
  commands: CommandConfig[];
  /** The path to the configuration file. */
  configPath: string;
  /** The root directory of the configuration file. */
  fileRoot: string;
};
