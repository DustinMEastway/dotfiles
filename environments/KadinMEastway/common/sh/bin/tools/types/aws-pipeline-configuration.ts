export interface AwsPipelineConfiguration {
  metadata: {
    created: string;
    pipelineArn: string;
    updated: string;
  };
  pipeline: {
    artifactStore: {
      location: string;
      type: string;
    };
    name: string;
    roleArn: string;
    stages: {
      actions: {
        actionTypeId: {
          category: string;
          owner: string;
          provider: string;
          version: string;
        };
        configuration: unknown;
        inputArtifacts: {
          name: string;
        }[];
        name: string;
        namespace: string;
        outputArtifacts: {
          name: string;
        }[];
        region: string;
        runOrder: number;
      }[];
      name: string;
    }[];
    version: number;
  };
}
