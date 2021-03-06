import canvas from '@workday/canvas-kit-react-core';
import {
  AllButtonTypes,
  ButtonTypes,
  TextButtonTypes,
  BetaButtonTypes,
  IconButtonTypes,
} from './types';

export interface CanvasButtonColors
  extends Partial<typeof canvas.buttonColors.secondary>,
    Partial<typeof canvas.buttonColors.primary>,
    Partial<typeof canvas.buttonColors.delete> {}

export interface GenericButtonColors extends CanvasButtonColors {
  focusRingInner?: string;
  focusRingOuter?: string;
  labelData?: string;
  labelDataActive?: string;
  labelDataDisabled?: string;
  labelDataFocus?: string;
  labelDataHover?: string;
  labelIcon?: string;
  labelIconActive?: string;
  labelIconDisabled?: string;
  labelIconFocus?: string;
  labelIconHover?: string;
}

export type ButtonColorCollection = {[key in AllButtonTypes]: GenericButtonColors | null};

export const ButtonColors: ButtonColorCollection = {
  // TODO (beta button): remove in favor of beta buttons, consider moving from design-assets too
  [ButtonTypes.Primary]: canvas.buttonColors.primary,
  [ButtonTypes.Secondary]: canvas.buttonColors.secondary,
  [ButtonTypes.Delete]: canvas.buttonColors.delete,
  [BetaButtonTypes.Primary]: {
    background: canvas.colors.blueberry400,
    border: 'transparent',
    text: canvas.colors.frenchVanilla100,
    activeBackground: canvas.colors.blueberry600,
    activeBorder: 'transparent',
    activeText: canvas.colors.frenchVanilla100,
    disabledBackground: canvas.colors.blueberry200,
    disabledBorder: 'transparent',
    disabledText: canvas.colors.frenchVanilla100,
    focusBackground: canvas.colors.blueberry400,
    focusBorder: 'transparent',
    focusText: canvas.colors.frenchVanilla100,
    hoverBackground: canvas.colors.blueberry500,
    hoverBorder: 'transparent',
    hoverText: canvas.colors.frenchVanilla100,
    labelIcon: canvas.colors.frenchVanilla100,
    labelIconHover: canvas.colors.frenchVanilla100,
    labelIconActive: canvas.colors.frenchVanilla100,
    labelIconFocus: canvas.colors.frenchVanilla100,
    labelIconDisabled: canvas.colors.frenchVanilla100,
  },
  [BetaButtonTypes.Secondary]: {
    background: canvas.colors.soap200,
    border: 'transparent',
    text: canvas.colors.blackPepper400,
    activeBackground: canvas.colors.soap500,
    activeBorder: 'transparent',
    activeText: canvas.colors.blackPepper400,
    disabledBackground: canvas.colors.soap100,
    disabledBorder: 'transparent',
    disabledText: canvas.colors.licorice100,
    focusBackground: canvas.colors.soap200,
    focusBorder: 'transparent',
    focusText: canvas.colors.blackPepper400,
    hoverBackground: canvas.colors.soap400,
    hoverBorder: 'transparent',
    hoverText: canvas.colors.blackPepper400,
    labelIcon: canvas.colors.licorice200,
    labelIconHover: canvas.colors.licorice500,
    labelIconActive: canvas.colors.licorice500,
    labelIconFocus: canvas.colors.licorice200,
    labelIconDisabled: canvas.colors.soap600,
    labelData: canvas.colors.blackPepper400,
    labelDataDisabled: canvas.colors.licorice100,
  },
  [BetaButtonTypes.Delete]: {
    background: canvas.colors.cinnamon500,
    border: canvas.colors.cinnamon500,
    text: canvas.colors.frenchVanilla100,
    activeBackground: '#80160E',
    activeBorder: 'transparent',
    activeText: canvas.colors.frenchVanilla100,
    disabledBackground: canvas.colors.cinnamon200,
    disabledBorder: 'transparent',
    disabledText: canvas.colors.frenchVanilla100,
    focusBackground: canvas.colors.cinnamon500,
    focusText: canvas.colors.frenchVanilla100,
    hoverBackground: canvas.colors.cinnamon600,
    hoverBorder: canvas.colors.cinnamon600,
    hoverText: canvas.colors.frenchVanilla100,
  },
  [BetaButtonTypes.Highlight]: {
    background: canvas.colors.soap200,
    border: canvas.colors.soap200,
    text: canvas.colors.blueberry500,
    activeBackground: canvas.colors.soap500,
    activeBorder: 'transparent',
    activeText: canvas.colors.blueberry500,
    disabledBackground: canvas.colors.soap100,
    disabledBorder: 'transparent',
    disabledText: canvas.colors.licorice100,
    focusBackground: canvas.colors.soap200,
    focusBorder: 'transparent',
    focusText: canvas.colors.blueberry500,
    hoverBackground: canvas.colors.soap400,
    hoverBorder: 'transparent',
    hoverText: canvas.colors.blueberry500,
    labelIcon: canvas.colors.blueberry500,
    labelIconHover: canvas.colors.blueberry500,
    labelIconActive: canvas.colors.blueberry500,
    labelIconFocus: canvas.colors.blueberry500,
    labelIconDisabled: canvas.colors.soap600,
  },
  [BetaButtonTypes.OutlinePrimary]: {
    background: 'transparent',
    border: canvas.colors.blueberry400,
    text: canvas.colors.blueberry400,
    activeBackground: canvas.colors.blueberry500,
    activeBorder: 'transparent',
    activeText: canvas.colors.frenchVanilla100,
    disabledBackground: canvas.colors.frenchVanilla100,
    disabledBorder: canvas.colors.soap500,
    disabledText: canvas.colors.licorice100,
    focusBackground: canvas.colors.blueberry400,
    focusBorder: 'transparent',
    focusText: canvas.colors.frenchVanilla100,
    hoverBackground: canvas.colors.blueberry400,
    hoverBorder: 'transparent',
    hoverText: canvas.colors.frenchVanilla100,
    labelIcon: canvas.colors.blueberry400,
    labelIconHover: canvas.colors.frenchVanilla100,
    labelIconActive: canvas.colors.frenchVanilla100,
    labelIconFocus: canvas.colors.frenchVanilla100,
    labelIconDisabled: canvas.colors.soap600,
  },
  [BetaButtonTypes.OutlineSecondary]: {
    background: 'transparent',
    border: canvas.colors.soap500,
    text: canvas.colors.blackPepper400,
    activeBackground: canvas.colors.licorice600,
    activeBorder: 'transparent',
    activeText: canvas.colors.frenchVanilla100,
    disabledBackground: canvas.colors.frenchVanilla100,
    disabledBorder: canvas.colors.soap500,
    disabledText: canvas.colors.licorice100,
    focusBackground: canvas.colors.licorice500,
    focusBorder: 'transparent',
    focusText: canvas.colors.frenchVanilla100,
    hoverBackground: canvas.colors.licorice500,
    hoverBorder: 'transparent',
    hoverText: canvas.colors.frenchVanilla100,
    labelIcon: canvas.colors.licorice200,
    labelIconHover: canvas.colors.frenchVanilla100,
    labelIconActive: canvas.colors.frenchVanilla100,
    labelIconFocus: canvas.colors.frenchVanilla100,
    labelIconDisabled: canvas.colors.soap600,
  },
  [BetaButtonTypes.OutlineInverse]: {
    background: 'transparent',
    border: canvas.colors.frenchVanilla100,
    text: canvas.colors.frenchVanilla100,
    activeBackground: canvas.colors.soap300,
    activeBorder: 'transparent',
    activeText: canvas.colors.blackPepper400,
    disabledBackground: 'transparent',
    disabledBorder: 'rgba(255, 255, 255, 0.75)',
    disabledText: 'rgba(255, 255, 255, 0.75)',
    focusBackground: canvas.colors.frenchVanilla100,
    focusBorder: 'transparent',
    focusRingInner: 'currentColor',
    focusRingOuter: canvas.colors.frenchVanilla100,
    focusText: canvas.colors.blackPepper400,
    hoverBackground: canvas.colors.frenchVanilla100,
    hoverBorder: 'transparent',
    hoverText: canvas.colors.blackPepper400,
    labelIcon: canvas.colors.frenchVanilla100,
    labelIconHover: canvas.colors.licorice500,
    labelIconActive: canvas.colors.licorice500,
    labelIconFocus: canvas.colors.licorice500,
    labelIconDisabled: 'rgba(255, 255, 255, 0.75)',
    labelDataHover: canvas.colors.licorice300,
    labelDataActive: canvas.colors.licorice300,
    labelDataFocus: canvas.colors.licorice300,
    labelDataDisabled: 'rgba(255, 255, 255, 0.75)',
  },
  [TextButtonTypes.Default]: {
    background: 'transparent',
    border: 'transparent',
    text: canvas.colors.blueberry400,
    activeBackground: 'transparent',
    activeBorder: 'transparent',
    activeText: canvas.colors.blueberry500,
    disabledBackground: 'transparent',
    disabledBorder: 'transparent',
    disabledText: 'rgba(8, 117, 225, 0.5)',
    focusBackground: canvas.colors.blueberry100,
    focusText: canvas.colors.blueberry400,
    hoverBorder: 'transparent',
    hoverText: canvas.colors.blueberry500,
    labelIcon: canvas.colors.blueberry400,
    labelIconHover: canvas.colors.blueberry500,
    labelIconActive: canvas.colors.blueberry500,
    labelIconFocus: canvas.colors.blueberry400,
    labelIconDisabled: 'rgba(8, 117, 225, 0.5)',
  },
  [TextButtonTypes.Inverse]: {
    background: 'transparent',
    border: 'transparent',
    text: canvas.colors.frenchVanilla100,
    activeBackground: 'transparent',
    activeBorder: 'transparent',
    activeText: canvas.colors.frenchVanilla100,
    disabledBackground: 'transparent',
    disabledBorder: 'transparent',
    disabledText: 'rgba(255, 255, 255, 0.5)',
    focusBackground: canvas.colors.frenchVanilla100,
    focusText: canvas.colors.licorice500,
    hoverBorder: 'transparent',
    labelIcon: canvas.colors.frenchVanilla100,
    labelIconHover: 'currentColor',
    labelIconActive: canvas.colors.frenchVanilla100,
    labelIconFocus: canvas.colors.licorice500,
    labelIconDisabled: 'rgba(255, 255, 255, 0.5)',
  },
  [TextButtonTypes.AllCaps]: null,
  [TextButtonTypes.InverseAllCaps]: null,
  [IconButtonTypes.Square]: {
    background: 'transparent',
    activeBackground: canvas.colors.soap400,
    disabledBackground: 'transparent',
    focusBackground: canvas.colors.frenchVanilla100,
    hoverBackground: canvas.colors.soap300,
    labelIcon: canvas.colors.licorice200,
    labelIconHover: canvas.colors.licorice500,
    labelIconActive: canvas.colors.licorice500,
    labelIconFocus: canvas.colors.licorice200,
    labelIconDisabled: canvas.colors.soap600,
  },
  [IconButtonTypes.SquareFilled]: {
    background: canvas.colors.soap200,
    border: canvas.colors.soap500,
    activeBackground: canvas.colors.soap500,
    disabledBackground: canvas.colors.soap100,
    hoverBackground: canvas.colors.soap400,
    labelIcon: canvas.colors.licorice200,
    labelIconHover: canvas.colors.licorice500,
    labelIconFocus: canvas.colors.licorice200,
    labelIconDisabled: canvas.colors.soap600,
  },
  [IconButtonTypes.Plain]: {
    background: 'transparent',
    activeBackground: 'transparent',
    activeBorder: 'transparent',
    disabledBackground: 'transparent',
    focusBackground: 'transparent',
    hoverBackground: 'transparent',
    labelIcon: canvas.colors.licorice200,
    labelIconHover: canvas.colors.licorice500,
    labelIconActive: canvas.colors.licorice500,
    labelIconFocus: canvas.colors.licorice200,
    labelIconDisabled: canvas.colors.soap600,
  },
  [IconButtonTypes.Circle]: {
    background: 'transparent',
    activeBackground: canvas.colors.soap400,
    disabledBackground: 'transparent',
    focusBackground: canvas.colors.frenchVanilla100,
    hoverBackground: canvas.colors.soap300,
    labelIcon: canvas.colors.licorice200,
    labelIconHover: canvas.colors.licorice500,
    labelIconActive: canvas.colors.licorice500,
    labelIconFocus: canvas.colors.licorice200,
    labelIconDisabled: canvas.colors.soap600,
  },
  [IconButtonTypes.CircleFilled]: {
    background: canvas.colors.soap200,
    activeBackground: canvas.colors.soap500,
    disabledBackground: canvas.colors.soap100,
    hoverBackground: canvas.colors.soap400,
    labelIcon: canvas.colors.licorice200,
    labelIconHover: canvas.colors.licorice500,
    labelIconFocus: canvas.colors.licorice200,
    labelIconDisabled: canvas.colors.soap600,
  },
  [IconButtonTypes.Inverse]: {
    background: 'transparent',
    activeBackground: 'rgba(0, 0, 0, 0.4)',
    disabledBackground: 'transparent',
    hoverBackground: 'rgba(0, 0, 0, 0.2)',
    labelIcon: canvas.colors.frenchVanilla100,
    labelIconHover: canvas.colors.frenchVanilla100,
    labelIconDisabled: 'rgba(255, 255, 255, 0.75)',
    focusRingOuter: canvas.colors.frenchVanilla100,
  },
  [IconButtonTypes.InverseFilled]: {
    background: 'rgba(0, 0, 0, 0.2)',
    activeBackground: 'rgba(0, 0, 0, 0.4)',
    disabledBackground: 'rgba(0, 0, 0, 0.2)',
    hoverBackground: 'rgba(0, 0, 0, 0.3)',
    labelIcon: canvas.colors.frenchVanilla100,
    labelIconHover: canvas.colors.frenchVanilla100,
    labelIconActive: canvas.colors.frenchVanilla100,
    labelIconDisabled: 'rgba(255, 255, 255, 0.75)',
    focusRingOuter: canvas.colors.frenchVanilla100,
  },
};

export default ButtonColors;
