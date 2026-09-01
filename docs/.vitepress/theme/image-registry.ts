/**
 * Central catalogue for product imagery.
 *
 * Put future placeholder assets in `docs/public/images/placeholders/`, then
 * add matching phone and iPad screenshots to each entry. Every page using that
 * key will pick up the pair automatically. For example:
 *
 *   phone: { src: '/images/placeholders/ssh-workspace-phone.webp' },
 *   ipad: { src: '/images/placeholders/ssh-workspace-ipad.webp' }
 *
 * A single composite image that already includes both devices can use:
 *
 *   layout: 'wide',
 *   wide: { src: '/images/placeholders/quick-start.webp' }
 */
export type PlaceholderImageLayout = 'device-pair' | 'wide'

export interface DeviceScreenshot {
  src: string | null
  width?: number
  height?: number
}

export interface PlaceholderImage {
  layout?: PlaceholderImageLayout
  wide?: DeviceScreenshot
  phone?: DeviceScreenshot
  ipad?: DeviceScreenshot
}

const PHONE_WIDTH = 1320
const PHONE_HEIGHT = 2868
const IPAD_WIDTH = 2560
const IPAD_HEIGHT = 1600

export const placeholderImages = {
  quickStart: {
    layout: 'wide',
    wide: {
      src: '/images/placeholders/QuickStart.png',
      width: 1024,
      height: 500
    }
  },
  workspaceOverview: {
    phone: {
      src: '/images/placeholders/Homepage_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/SSH_Workspace_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  featureOverview: {
    phone: {
      src: '/images/placeholders/Homepage_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/FeatureOverview_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  sshWorkspace: {
    phone: {
      src: '/images/placeholders/SSH_Workspace_Phone.PNG',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/SSH_Workspace_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  editor: {
    phone: {
      src: '/images/placeholders/Editor_Phone.PNG',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/LSP_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  terminal: {
    phone: {
      src: '/images/placeholders/Terminal_Phone.PNG',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/Terminal_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  aiAssistant: {
    phone: {
      src: '/images/placeholders/AI_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/AIAgent_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  sourceControl: {
    phone: {
      src: '/images/placeholders/GitPanel_Phone.PNG',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/GitPanel_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  lsp: {
    phone: {
      src: '/images/placeholders/LSP_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/LSP_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  debugging: {
    phone: {
      src: '/images/placeholders/Debug_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/Debug_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  syncCache: {
    phone: {
      src: '/images/placeholders/Cache_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/SearchSync_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  remoteHotfix: {
    phone: {
      src: '/images/placeholders/Editor_Remote_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/LSP_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  onCallDiagnostics: {
    phone: {
      src: '/images/placeholders/Debug_Diagnostics_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/Debug_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  mobileIde: {
    phone: {
      src: '/images/placeholders/Homepage_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/FeatureOverview_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  sshIde: {
    phone: {
      src: '/images/placeholders/Explorer_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/SSH_Workspace_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  androidSshClient: {
    phone: {
      src: '/images/placeholders/SSH_Workspace_Phone.PNG',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/SSH_Workspace_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  iphoneSshClient: {
    phone: {
      src: '/images/placeholders/Explorer_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/SSH_Workspace_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  ipadCoding: {
    phone: {
      src: '/images/placeholders/Homepage_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/FeatureOverview_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  mobileAiCoding: {
    phone: {
      src: '/images/placeholders/AI_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/AIAgent_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  claudeCodeFromPhone: {
    phone: {
      src: '/images/placeholders/AI_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/AIAgent_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  codexFromPhone: {
    phone: {
      src: '/images/placeholders/AI_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/AIAgent_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  termiusAlternative: {
    phone: {
      src: '/images/placeholders/Terminal_Phone.PNG',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/Terminal_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  blinkShellAlternative: {
    phone: {
      src: '/images/placeholders/Terminal_Phone.PNG',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/Terminal_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  terminalVsWorkspace: {
    phone: {
      src: '/images/placeholders/Terminal_Phone.PNG',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/Terminal_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  bestMobileIdes: {
    phone: {
      src: '/images/placeholders/Homepage_Phone.png',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/FeatureOverview_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  },
  bestSshClients: {
    phone: {
      src: '/images/placeholders/SSH_Workspace_Phone.PNG',
      width: PHONE_WIDTH,
      height: PHONE_HEIGHT
    },
    ipad: {
      src: '/images/placeholders/SSH_Workspace_IPad.png',
      width: IPAD_WIDTH,
      height: IPAD_HEIGHT
    }
  }
} as const satisfies Record<string, PlaceholderImage>

export type PlaceholderImageKey = keyof typeof placeholderImages
