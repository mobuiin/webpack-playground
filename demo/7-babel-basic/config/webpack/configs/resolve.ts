import { ConfigTweaker } from '../types';

export const configEntry: ConfigTweaker = (config, resolver) => {
  config.resolve.extensions.merge(['.ts', '.tsx', '.js', '.jsx']);
};
