import Vue from 'vue'
import { HnUIComponent } from './component'

import { HnHello } from './hello'

export interface InstallationOptions {
  locale: any
  i18n: any
  size: string
}

/** The version of element-ui */
export const version: string

/**
 * Install all hn-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(HdUI)` to install.
 */
export function install(vue: typeof Vue, options: InstallationOptions): void

/** ElementUI component common definition */
export type Component = HnUIComponent

// TS cannot merge imported class with namespace, so declare subclasses instead

/** Hello Component */
export class Hello extends HnHello {}
