import { HnUIComponent } from './component'

export type IconSize = 'normal' | 'small'

/** icon Component */
export declare class HnIcon extends HnUIComponent {
  /** size */
  size: IconSize

  alwaysOn: boolean

  name: string

  disabled: boolean
}
