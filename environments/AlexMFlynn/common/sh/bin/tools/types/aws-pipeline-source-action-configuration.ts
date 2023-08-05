export interface AwsPipelineSourceActionConfiguration {
  BranchName: string;
  ConnectionArn: string;
  FullRepositoryId: string;
  OutputArtifactFormat: string;
}

export module AwsPipelineSourceActionConfiguration {
  export function isInstance(config: any): config is AwsPipelineSourceActionConfiguration {
    return (
      typeof config === 'object'
      && typeof config?.BranchName === 'string'
      && typeof config?.ConnectionArn === 'string'
      && typeof config?.FullRepositoryId === 'string'
      && typeof config?.OutputArtifactFormat === 'string'
    );
  }
}
