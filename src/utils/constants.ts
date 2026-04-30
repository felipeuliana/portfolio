const STORAGE_KINDS = {
  GITHUB: 'github',
  LOCAL: 'local',
} as const;

const STORAGE_CONFIGS = {
  [STORAGE_KINDS.LOCAL]: {
    kind: STORAGE_KINDS.LOCAL,
  },
  [STORAGE_KINDS.GITHUB]: {
    kind: STORAGE_KINDS.GITHUB,
    repo: {
      name: import.meta.env.PUBLIC_REPO_NAME || '',
      owner: import.meta.env.PUBLIC_REPO_OWNER || '',
    },
  },
};

export { STORAGE_CONFIGS, STORAGE_KINDS };