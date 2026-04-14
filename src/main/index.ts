import { app, BrowserWindow, ipcMain, globalShortcut, Tray, Menu, nativeImage } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { sendEmoji, setLastExternalWindow } from './emoji-sender'
import koffi from 'koffi'
import icon from '../../resources/icon.png?asset'

const user32 = koffi.load('user32.dll')
const GetForegroundWindow = user32.func('void* GetForegroundWindow()')

let mainWindow: BrowserWindow | null = null
let tray: Tray | null = null

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 380,
    height: 540,
    show: false,
    frame: false,
    transparent: true,
    backgroundColor: '#00000000',
    alwaysOnTop: true,
    skipTaskbar: true,
    resizable: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow?.show()
  })

  // Track the last focused external window so we can paste into it
  mainWindow.on('focus', () => {
    // When our window gets focus, the previous foreground window was the target.
    // We already tracked it via the interval below.
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

function createTray(): void {
  const trayIcon = nativeImage.createFromPath(icon).resize({ width: 16, height: 16 })
  tray = new Tray(trayIcon)

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Anzeigen',
      click: (): void => {
        mainWindow?.show()
      }
    },
    { type: 'separator' },
    {
      label: 'Beenden',
      click: (): void => {
        app.quit()
      }
    }
  ])

  tray.setToolTip('Everymoji')
  tray.setContextMenu(contextMenu)

  tray.on('click', () => {
    if (mainWindow?.isVisible()) {
      mainWindow.hide()
    } else {
      mainWindow?.show()
    }
  })
}

function toggleWindow(): void {
  if (mainWindow?.isVisible()) {
    mainWindow.hide()
  } else {
    mainWindow?.show()
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.everymoji.app')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC handlers
  ipcMain.handle('send-emoji', async (_event, emoji: string) => {
    return sendEmoji(emoji)
  })

  ipcMain.on('window-minimize', () => {
    mainWindow?.hide()
  })

  ipcMain.on('window-close', () => {
    app.quit()
  })

  createWindow()
  createTray()

  // Periodically track the foreground window so we know where to paste
  setInterval(() => {
    if (!mainWindow?.isFocused()) {
      const hwnd = GetForegroundWindow()
      if (hwnd) {
        setLastExternalWindow(hwnd)
      }
    }
  }, 300)

  // Global hotkey Alt+E to toggle visibility
  globalShortcut.register('Alt+E', toggleWindow)

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
