/**
 * Central catalogue for product imagery.
 *
 * Put future placeholder assets in `docs/public/images/placeholders/`, then
 * add matching phone and iPad screenshots to each entry. Every page using that
 * key will pick up the pair automatically. For example:
 *
 *   phone: { src: '/images/placeholders/ssh-workspace-phone.webp' },
 *   ipad: { src: '/images/placeholders/ssh-workspace-ipad.webp' }
 */
export interface DeviceScreenshot {
  src: string | null
  width?: number
  height?: number
}

export interface PlaceholderImage {
  phone: DeviceScreenshot
  ipad: DeviceScreenshot
}

export const placeholderImages = {
  homeWorkflow: { phone: { src: null }, ipad: { src: null } },
  workspaceOverview: { phone: { src: null }, ipad: { src: null } },
  featureOverview: { phone: { src: null }, ipad: { src: null } },
  sshWorkspace: { phone: { src: null }, ipad: { src: null } },
  editor: { phone: { src: null }, ipad: { src: null } },
  terminal: {
    phone: {
      src: '/images/Terminal.png',
      width: 1320,
      height: 2868
    },
    ipad: { src: null }
  },
  aiAssistant: { phone: { src: null }, ipad: { src: null } },
  sourceControl: { phone: { src: null }, ipad: { src: null } },
  lsp: { phone: { src: null }, ipad: { src: null } },
  debugging: { phone: { src: null }, ipad: { src: null } },
  syncCache: { phone: { src: null }, ipad: { src: null } },
  remoteHotfix: { phone: { src: null }, ipad: { src: null } },
  onCallDiagnostics: { phone: { src: null }, ipad: { src: null } },
  mobileIde: { phone: { src: null }, ipad: { src: null } },
  sshIde: { phone: { src: null }, ipad: { src: null } },
  androidSshClient: { phone: { src: null }, ipad: { src: null } },
  iphoneSshClient: { phone: { src: null }, ipad: { src: null } },
  ipadCoding: { phone: { src: null }, ipad: { src: null } },
  mobileAiCoding: { phone: { src: null }, ipad: { src: null } },
  claudeCodeFromPhone: { phone: { src: null }, ipad: { src: null } },
  codexFromPhone: { phone: { src: null }, ipad: { src: null } },
  termiusAlternative: { phone: { src: null }, ipad: { src: null } },
  blinkShellAlternative: { phone: { src: null }, ipad: { src: null } },
  terminalVsWorkspace: { phone: { src: null }, ipad: { src: null } },
  bestMobileIdes: { phone: { src: null }, ipad: { src: null } },
  bestSshClients: { phone: { src: null }, ipad: { src: null } }
} as const satisfies Record<string, PlaceholderImage>

export type PlaceholderImageKey = keyof typeof placeholderImages
