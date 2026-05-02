import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const GLOBAL_STYLES = defineGlobalStyles({
  'html, body': {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    lineHeight: 'base',
    minHeight: '100vh',
    textStyle: 'body'
  },
  'h1, .title': {
    textStyle: 'heading.h1'
  },
  'h2, .sub-title': {
    textStyle: 'heading.h2'
  },
  'h3, .small-title': {
    textStyle: 'heading.h3'
  },
  'h4, h5, h6, .tiny-title': {
    textStyle: 'heading.h4'
  },
  'h1, h2, h3,h4, h5, h6': {
    lineHeight: 'heading'
  },
  'p, .body': {
    textStyle: 'primary'
  },
  'code, pre, .code': {
    textStyle: 'secondary'
  },
  'caption, footer, small, .caption': {
    fontSize: `{fontSizes.xs}`,
    textDecoration: 'None',
    textTransform: 'None'
  },
});
const HEADING_SMALL = {
  fontFamily: `{fonts.secondary}`,
  fontSize: `{fontSizes.md}`,
  fontWeight: `{fontWeights.bold}`,
  letterSpacing: '0',
  textDecoration: 'None',
  textTransform: 'None'
};

export default defineConfig({
  // The output directory for your css system
  globalCss: GLOBAL_STYLES,
  // Files to exclude
  exclude: [],
  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx,astro}",],  
  // The output directory for your css system
  outdir: "styled-system",
  // Whether to use css reset
  preflight: true,
  // Useful for theme customization
  theme: {
    extend: {
      // Design breakpoints
      breakpoints: {
        sm: '600px',   // Mobile
        md: '1024px',  // Tablets
        lg: '1440px',  // Desktops
        xl: '1441px'   // UHD
      },
      // Design text styles
      textStyles: {
        primary: {
          description: 'The primary text style - used for body text',
          value: {
            fontFamily: `{fonts.primary}`,
            fontSize: `{fontSizes.base}`,
            fontWeight: `{fontWeights.light}`,
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'None'
          }
        },
        secondary: {
          description: 'The secondary text style - used in other contexts',
          value: {
            fontFamily: `{fonts.secondary}`,
            fontSize: `{fontSizes.base}`,
            fontWeight: `{fontWeights.regular}`,
            letterSpacing: '0',
            textDecoration: 'None',
            textTransform: 'None'
          }
        },
        heading: {
          h1: {
            description: 'Heading 1 - used for main titles',
            value: {
              fontFamily: `{fonts.secondary}`,
              fontSize: `{fontSizes.2xl}`,
              fontWeight: `{fontWeights.bold}`,
              letterSpacing: '0',
              textDecoration: 'None',
              textTransform: 'None'
            }
          },
          h2: {
            description: 'Heading 2 - used for section titles',
            value: {
              fontFamily: `{fonts.secondary}`,
              fontSize: `{fontSizes.xl}`,
              fontWeight: `{fontWeights.bold}`,
              letterSpacing: '0',
              textDecoration: 'None',
              textTransform: 'None'
            },
          },
          h3: {
            description: 'Heading 3 - used for subsection titles',
            value: {
              fontFamily: `{fonts.secondary}`,
              fontSize: `{fontSizes.lg}`,
              fontWeight: `{fontWeights.bold}`,
              letterSpacing: '0',
              textDecoration: 'None',
              textTransform: 'None'
            },
          },
          h4: {
            description: 'Heading 4 - used for smaller titles',
            value: HEADING_SMALL,
          },
          h5: {
            description: 'Heading 5 - used for minor titles',
            value: HEADING_SMALL,
          },
          h6: {
            description: 'Heading 6 - used for minor titles',
            value: HEADING_SMALL,
          },
        },
      },
      // Design tokens
      tokens: {
        // Design typography
        fonts: {
          primary: { value: `Fira Sans, {fonts.sans}` },
          secondary: { value: `Fira Code, {fonts.mono}` },
        },
        fontWeights: {
          light: { value: '300' },
          regular: { value: '500' },
          bold: { value: '700' },
          black: { value: '900' },
        },
        fontSizes: {
          xs: { value: '15px' },
          base: { value: '18px' },
          md: { value: '21.6px' },
          lg: { value: '25.9px' },
          xl: { value: '31.1px' },
          '2xl': { value: '37.3px' },
        },
        lineHeights: {
          base: { value: '1.6' },
          heading: { value: '1.15' },
          none: { value: '1' },
          normal: { value: 'normal' },
        },
      },
    },
  },
});
