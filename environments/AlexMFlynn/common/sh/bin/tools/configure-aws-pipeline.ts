import { exec } from './functions';
import {
  AwsPipelineConfiguration,
  AwsPipelineSourceActionConfiguration
} from './types';

export interface ConfigureAwsPipelineConfig {
  sourceBranch: string;
  pipelineName: string;
}

export module ConfigureAwsPipelineConfig {
  export function isInstance(config: any): config is ConfigureAwsPipelineConfig;
  export function isInstance(config: ConfigureAwsPipelineConfig): config is ConfigureAwsPipelineConfig {
    return (
      config != null
      && typeof config === 'object'
      && (typeof config.sourceBranch === 'string')
      && (typeof config.pipelineName === 'string')
    );
  }
}

/** Update AWS CodePipeline pipeline configuration. */
async function main() {
  const [ configString ] = process.argv.slice(2);
  const config = JSON.parse(configString);
  if (!ConfigureAwsPipelineConfig.isInstance(config)) {
    return;
  }

  const { sourceBranch, pipelineName } = config;
  const pipelineData: AwsPipelineConfiguration = JSON.parse(
    await exec(`aws codepipeline get-pipeline --name=${pipelineName}`)
  );
  delete (pipelineData as { metadata: unknown; }).metadata;

  const pipelineDataChanged = configureBranchName(pipelineData, sourceBranch);
  if (!pipelineDataChanged) {
    return;
  }

  const pipelineDataString = `"${JSON.stringify(pipelineData).replace(/([\\"])/g, '\\$1')}"`;
  await exec(`aws codepipeline update-pipeline --cli-input-json ${pipelineDataString}`);
}

function configureBranchName(pipelineData: AwsPipelineConfiguration, sourceBranch?: string): boolean {
  if (!sourceBranch) {
    return false;
  }

  const sourceStage = pipelineData.pipeline.stages.find((stage) => {
    return stage.name === 'Source'
  });
  const sourceAction = sourceStage?.actions.find((action) => {
    return (
      action.name === 'Source'
      && action.actionTypeId.category === 'Source'
      && action.actionTypeId.provider === 'CodeStarSourceConnection'
    );
  });

  if (!sourceAction || !AwsPipelineSourceActionConfiguration.isInstance(sourceAction.configuration)) {
    throw new Error('Unable to locate source action');
  } else if (sourceAction.configuration.BranchName === sourceBranch) {
    return false;
  }

  sourceAction.configuration.BranchName = sourceBranch;

  return true;
}

main();
