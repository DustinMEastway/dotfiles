import { EnvironmentConfig } from './environment-config';

/** a single command/action to take when configuring an environment */
export type Command<T = any> = (environmentConfig: EnvironmentConfig, value: T) => void;
