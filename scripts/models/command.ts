import { EnvironmentConfig } from './environment-config';

/** a single command/action to take when configuring an environment */
export type Command<T = unknown> = (
  environmentConfig: EnvironmentConfig,
  value: T
) => Promise<any> | void;
