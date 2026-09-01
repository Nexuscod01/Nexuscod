/**
 * Central catalogue for product imagery.
 *
 * Put future placeholder assets in `docs/public/images/placeholders/`, then
 * replace the matching `null` with its public URL (for example,
 * `'/images/placeholders/ssh-workspace.webp'`). Every page using that key will
 * pick up the image automatically.
 */
export interface PlaceholderImage {
  src: string | null
}

export const placeholderImages = {
  homeWorkflow: { src: null },
  workspaceOverview: { src: null },
  featureOverview: { src: null },
  sshWorkspace: { src: null },
  editor: { src: null },
  terminal: { src: null },
  aiAssistant: { src: null },
  sourceControl: { src: null },
  lsp: { src: null },
  debugging: { src: null },
  syncCache: { src: null },
  remoteHotfix: { src: null },
  onCallDiagnostics: { src: null },
  mobileIde: { src: null },
  sshIde: { src: null },
  androidSshClient: { src: null },
  iphoneSshClient: { src: null },
  ipadCoding: { src: null },
  mobileAiCoding: { src: null },
  claudeCodeFromPhone: { src: null },
  codexFromPhone: { src: null },
  termiusAlternative: { src: null },
  blinkShellAlternative: { src: null },
  terminalVsWorkspace: { src: null },
  bestMobileIdes: { src: null },
  bestSshClients: { src: null }
} as const satisfies Record<string, PlaceholderImage>

export type PlaceholderImageKey = keyof typeof placeholderImages
