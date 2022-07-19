import { css } from "lit";

export default function typography() {
  // language=css
  return css`
    :root {
      --md-sys-typescale-headline1-font: Roboto;
      --md-sys-typescale-headline1-weight: Regular;
      --md-sys-typescale-headline1-size: 36px;
      --md-sys-typescale-headline1-line-height: 44px;
      --md-sys-typescale-headline1-tracking: 0px;
      --md-sys-typescale-display3-font: Roboto;
      --md-sys-typescale-display3-weight: Regular;
      --md-sys-typescale-display3-size: 45px;
      --md-sys-typescale-display3-line-height: 52px;
      --md-sys-typescale-display3-tracking: 0px;
      --md-sys-typescale-display2-font: Roboto;
      --md-sys-typescale-display2-weight: Regular;
      --md-sys-typescale-display2-size: 57px;
      --md-sys-typescale-display2-line-height: 64px;
      --md-sys-typescale-display2-tracking: -0.25px;
      --md-sys-typescale-headline4-font: Roboto;
      --md-sys-typescale-headline4-weight: Regular;
      --md-sys-typescale-headline4-size: 24px;
      --md-sys-typescale-headline4-line-height: 32px;
      --md-sys-typescale-headline4-tracking: 0px;
      --md-sys-typescale-headline3-font: Roboto;
      --md-sys-typescale-headline3-weight: Regular;
      --md-sys-typescale-headline3-size: 28px;
      --md-sys-typescale-headline3-line-height: 36px;
      --md-sys-typescale-headline3-tracking: 0px;
      --md-sys-typescale-headline2-font: Roboto;
      --md-sys-typescale-headline2-weight: Regular;
      --md-sys-typescale-headline2-size: 32px;
      --md-sys-typescale-headline2-line-height: 40px;
      --md-sys-typescale-headline2-tracking: 0px;
      --md-sys-typescale-overline-font: Roboto;
      --md-sys-typescale-overline-weight: Medium;
      --md-sys-typescale-overline-size: 12px;
      --md-sys-typescale-overline-line-height: 16px;
      --md-sys-typescale-overline-tracking: 0.5px;
      --md-sys-typescale-button-font: Roboto;
      --md-sys-typescale-button-weight: Medium;
      --md-sys-typescale-button-size: 14px;
      --md-sys-typescale-button-line-height: 20px;
      --md-sys-typescale-button-tracking: 0.10000000149011612px;
      --md-sys-typescale-subhead2-font: Roboto;
      --md-sys-typescale-subhead2-weight: Medium;
      --md-sys-typescale-subhead2-size: 14px;
      --md-sys-typescale-subhead2-line-height: 20px;
      --md-sys-typescale-subhead2-tracking: 0.10000000149011612px;
      --md-sys-typescale-subhead1-font: Roboto;
      --md-sys-typescale-subhead1-weight: Medium;
      --md-sys-typescale-subhead1-size: 16px;
      --md-sys-typescale-subhead1-line-height: 24px;
      --md-sys-typescale-subhead1-tracking: 0.15000000596046448px;
      --md-sys-typescale-headline5-font: Roboto;
      --md-sys-typescale-headline5-weight: Regular;
      --md-sys-typescale-headline5-size: 22px;
      --md-sys-typescale-headline5-line-height: 28px;
      --md-sys-typescale-headline5-tracking: 0px;
      --md-sys-typescale-caption-font: Roboto;
      --md-sys-typescale-caption-weight: Regular;
      --md-sys-typescale-caption-size: 12px;
      --md-sys-typescale-caption-line-height: 16px;
      --md-sys-typescale-caption-tracking: 0.4000000059604645px;
      --md-sys-typescale-body2-font: Roboto;
      --md-sys-typescale-body2-weight: Regular;
      --md-sys-typescale-body2-size: 14px;
      --md-sys-typescale-body2-line-height: 20px;
      --md-sys-typescale-body2-tracking: 0.25px;
      --md-sys-typescale-body1-font: Roboto;
      --md-sys-typescale-body1-weight: Regular;
      --md-sys-typescale-body1-size: 16px;
      --md-sys-typescale-body1-line-height: 24px;
      --md-sys-typescale-body1-tracking: 0.5px;
    }
    .headline1,
    .display-small {
      font-family: var(--md-sys-typescale-headline1-font);
      font-weight: var(--md-sys-typescale-headline1-weight);
      font-size: var(--md-sys-typescale-headline1-size);
      line-height: var(--md-sys-typescale-headline1-line-height);
      letter-spacing: var(--md-sys-typescale-headline1-tracking);
    }
    .display3,
    .display-medium {
      font-family: var(--md-sys-typescale-display3-font);
      font-weight: var(--md-sys-typescale-display3-weight);
      font-size: var(--md-sys-typescale-display3-size);
      line-height: var(--md-sys-typescale-display3-line-height);
      letter-spacing: var(--md-sys-typescale-display3-tracking);
    }
    .display2,
    .display-large {
      font-family: var(--md-sys-typescale-display2-font);
      font-weight: var(--md-sys-typescale-display2-weight);
      font-size: var(--md-sys-typescale-display2-size);
      line-height: var(--md-sys-typescale-display2-line-height);
      letter-spacing: var(--md-sys-typescale-display2-tracking);
    }
    .headline4,
    .headline-small {
      font-family: var(--md-sys-typescale-headline4-font);
      font-weight: var(--md-sys-typescale-headline4-weight);
      font-size: var(--md-sys-typescale-headline4-size);
      line-height: var(--md-sys-typescale-headline4-line-height);
      letter-spacing: var(--md-sys-typescale-headline4-tracking);
    }
    .headline3,
    .headline-medium {
      font-family: var(--md-sys-typescale-headline3-font);
      font-weight: var(--md-sys-typescale-headline3-weight);
      font-size: var(--md-sys-typescale-headline3-size);
      line-height: var(--md-sys-typescale-headline3-line-height);
      letter-spacing: var(--md-sys-typescale-headline3-tracking);
    }
    .headline2,
    .headline-large {
      font-family: var(--md-sys-typescale-headline2-font);
      font-weight: var(--md-sys-typescale-headline2-weight);
      font-size: var(--md-sys-typescale-headline2-size);
      line-height: var(--md-sys-typescale-headline2-line-height);
      letter-spacing: var(--md-sys-typescale-headline2-tracking);
    }
    .overline,
    .label-medium {
      font-family: var(--md-sys-typescale-overline-font);
      font-weight: var(--md-sys-typescale-overline-weight);
      font-size: var(--md-sys-typescale-overline-size);
      line-height: var(--md-sys-typescale-overline-line-height);
      letter-spacing: var(--md-sys-typescale-overline-tracking);
    }
    .button,
    .label-large {
      font-family: var(--md-sys-typescale-button-font);
      font-weight: var(--md-sys-typescale-button-weight);
      font-size: var(--md-sys-typescale-button-size);
      line-height: var(--md-sys-typescale-button-line-height);
      letter-spacing: var(--md-sys-typescale-button-tracking);
    }
    .subhead2,
    .title-small {
      font-family: var(--md-sys-typescale-subhead2-font);
      font-weight: var(--md-sys-typescale-subhead2-weight);
      font-size: var(--md-sys-typescale-subhead2-size);
      line-height: var(--md-sys-typescale-subhead2-line-height);
      letter-spacing: var(--md-sys-typescale-subhead2-tracking);
    }
    .subhead1,
    .title-medium {
      font-family: var(--md-sys-typescale-subhead1-font);
      font-weight: var(--md-sys-typescale-subhead1-weight);
      font-size: var(--md-sys-typescale-subhead1-size);
      line-height: var(--md-sys-typescale-subhead1-line-height);
      letter-spacing: var(--md-sys-typescale-subhead1-tracking);
    }
    .headline5,
    .title-large {
      font-family: var(--md-sys-typescale-headline5-font);
      font-weight: var(--md-sys-typescale-headline5-weight);
      font-size: var(--md-sys-typescale-headline5-size);
      line-height: var(--md-sys-typescale-headline5-line-height);
      letter-spacing: var(--md-sys-typescale-headline5-tracking);
    }
    .caption,
    .body-small {
      font-family: var(--md-sys-typescale-caption-font);
      font-weight: var(--md-sys-typescale-caption-weight);
      font-size: var(--md-sys-typescale-caption-size);
      line-height: var(--md-sys-typescale-caption-line-height);
      letter-spacing: var(--md-sys-typescale-caption-tracking);
    }
    .body2,
    .body-medium {
      font-family: var(--md-sys-typescale-body2-font);
      font-weight: var(--md-sys-typescale-body2-weight);
      font-size: var(--md-sys-typescale-body2-size);
      line-height: var(--md-sys-typescale-body2-line-height);
      letter-spacing: var(--md-sys-typescale-body2-tracking);
    }
    .body1,
    .body-large {
      font-family: var(--md-sys-typescale-body1-font);
      font-weight: var(--md-sys-typescale-body1-weight);
      font-size: var(--md-sys-typescale-body1-size);
      line-height: var(--md-sys-typescale-body1-line-height);
      letter-spacing: var(--md-sys-typescale-body1-tracking);
    }
  `;
}
