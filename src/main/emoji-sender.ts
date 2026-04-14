import { clipboard } from 'electron'
import koffi from 'koffi'

const user32 = koffi.load('user32.dll')

const keybd_event = user32.func(
  'void keybd_event(uint8 bVk, uint8 bScan, uint32 dwFlags, uintptr_t dwExtraInfo)'
)
const GetForegroundWindow = user32.func('void* GetForegroundWindow()')
const SetForegroundWindow = user32.func('bool SetForegroundWindow(void* hWnd)')

const VK_CONTROL = 0x11
const VK_V = 0x56
const KEYEVENTF_KEYUP = 0x0002

let lastExternalWindow: unknown = null

/**
 * Call this periodically or on window blur to track the last
 * non-Everymoji window that had focus.
 */
export function trackForegroundWindow(ownHwnd: Buffer | null): void {
  const hwnd = GetForegroundWindow()
  if (hwnd && ownHwnd && hwnd !== ownHwnd) {
    lastExternalWindow = hwnd
  }
}

export function setLastExternalWindow(hwnd: unknown): void {
  lastExternalWindow = hwnd
}

function simulateCtrlV(): void {
  keybd_event(VK_CONTROL, 0, 0, 0)
  keybd_event(VK_V, 0, 0, 0)
  keybd_event(VK_V, 0, KEYEVENTF_KEYUP, 0)
  keybd_event(VK_CONTROL, 0, KEYEVENTF_KEYUP, 0)
}

export async function sendEmoji(emoji: string): Promise<boolean> {
  try {
    // 1. Copy emoji to clipboard
    clipboard.writeText(emoji)

    // 2. Get the current foreground window (might be our own)
    //    and try to restore the last external window
    const current = GetForegroundWindow()

    // Try to find the right target: use tracked window or current
    const target = lastExternalWindow || current
    if (target) {
      SetForegroundWindow(target)
    }

    // 3. Wait for focus to switch
    await new Promise((r) => setTimeout(r, 100))

    // 4. Simulate Ctrl+V in the now-focused window
    simulateCtrlV()

    return true
  } catch (err) {
    console.error('Failed to send emoji:', err)
    return false
  }
}
