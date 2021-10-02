import { resolve } from 'path';
import { EnvironmentConfig } from '../models/index';
import { absolutePath } from './file-system';

const absolutePathCheck = /^(\~?\/)/;
export function absoluteConfigPath(config: EnvironmentConfig, path: string): string {
  return (absolutePathCheck.test(path))
    ? absolutePath(path)
    : resolve(config.fileRoot || '', path);
}