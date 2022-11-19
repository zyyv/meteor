import type { App } from 'vue'

export type UserModule = (ctx: App) => void

export interface GlobModule {
  install: UserModule
  [key: string]: any
}

export interface ICursorStyle {
  dot: Record<string, number | string>
  cursor: Record<string, number | string>
  circle: Record<string, number | string>
}
