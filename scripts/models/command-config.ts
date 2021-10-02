import { CommandKey } from './command-key';

/** used to determine which command to run (using @see key) and what @see value to pass to it */
export interface CommandConfig {
  key: CommandKey;
  value?: any;
};