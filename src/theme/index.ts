// theme.ts - Complete Design System for React Native

interface TypographyStyle {
    fontSize: number;
    lineHeight: number;
    letterSpacing: number;
    fontWeight: '400' | '600';
    fontFamily: string;
  }
  
  interface TextVariant {
    regular: TypographyStyle;
    semibold: TypographyStyle;
  }
  
  interface HeadingStyle {
    fontSize: number;
    lineHeight: number;
    letterSpacing: number;
    fontWeight: '600';
    fontFamily: string;
  }
  
  interface Theme {
    fonts: {
      regular: string;
      semibold: string;
    };
    colors: {
      brandPrimary: string;
      brandSecondary: string;
      transparent: string;
      black: string;
      white: string;
      grey: string;
      lightGrey: string;
      textPrimary: string;
      textSecondary: string;
      red: string;
      green: string;
      borderSecondary: string;
      editProfile: string;
    };
    typography: {
      heading: {
        [key: string]: HeadingStyle;
      };
      text: {
        [key: string]: TextVariant;
      };
    };
    spacing: {
      [key: string]: number;
    };
    borderRadius: {
      [key: string]: number;
    };
    borderWidth: {
      [key: string]: number;
    };
    breakpoints: {
      s: number;
      m: number;
      l: number;
      xl: number;
    };
  }
  
  const theme: Theme = {
    // Font Family
    fonts: {
      regular: 'Urbanist-Regular',
      semibold: 'Urbanist-SemiBold',
    },
  
    // Colors
    colors: {
      // Brand Colors
      brandPrimary: '#4eb0ff',
      brandSecondary: '#8063ff',
      
      // Base Colors
      transparent: '#ffffff00',
      black: '#000000',
      white: '#ffffff',
      grey: '#aaaaaa',
      lightGrey: '#f5f5f5',
      
      // Text Colors
      textPrimary: '#000000',
      textSecondary: '#707070',
      
      // Status Colors
      red: '#ff0c0c',
      green: '#34c759',
      
      // UI Colors
      borderSecondary: '#999999',
      editProfile: '#f1f1f1',
    },
  
    // Typography
    typography: {
      // Headings
      heading: {
        '2xs': {
          fontSize: 12,
          lineHeight: 16,
          letterSpacing: 0,
          fontWeight: '600',
          fontFamily: 'Urbanist-SemiBold',
        },
        xs: {
          fontSize: 14,
          lineHeight: 20,
          letterSpacing: -0.5,
          fontWeight: '600',
          fontFamily: 'Urbanist-SemiBold',
        },
        s: {
          fontSize: 20,
          lineHeight: 28,
          letterSpacing: -0.5,
          fontWeight: '600',
          fontFamily: 'Urbanist-SemiBold',
        },
        m: {
          fontSize: 24,
          lineHeight: 32,
          letterSpacing: -0.5,
          fontWeight: '600',
          fontFamily: 'Urbanist-SemiBold',
        },
        l: {
          fontSize: 28,
          lineHeight: 36,
          letterSpacing: -1,
          fontWeight: '600',
          fontFamily: 'Urbanist-SemiBold',
        },
        xl: {
          fontSize: 32,
          lineHeight: 40,
          letterSpacing: -1,
          fontWeight: '600',
          fontFamily: 'Urbanist-SemiBold',
        },
        '2xl': {
          fontSize: 40,
          lineHeight: 48,
          letterSpacing: -1,
          fontWeight: '600',
          fontFamily: 'Urbanist-SemiBold',
        },
        '3xl': {
          fontSize: 48,
          lineHeight: 56,
          letterSpacing: -1,
          fontWeight: '600',
          fontFamily: 'Urbanist-SemiBold',
        },
        '4xl': {
          fontSize: 56,
          lineHeight: 64,
          letterSpacing: -1,
          fontWeight: '600',
          fontFamily: 'Urbanist-SemiBold',
        },
        '5xl': {
          fontSize: 64,
          lineHeight: 72,
          letterSpacing: -1,
          fontWeight: '600',
          fontFamily: 'Urbanist-SemiBold',
        },
      },
      
      // Text/Body
      text: {
        xs: {
          regular: {
            fontSize: 10,
            lineHeight: 14,
            letterSpacing: 0,
            fontWeight: '400',
            fontFamily: 'Urbanist-Regular',
          },
          semibold: {
            fontSize: 10,
            lineHeight: 14,
            letterSpacing: 0,
            fontWeight: '600',
            fontFamily: 'Urbanist-SemiBold',
          },
        },
        s: {
          regular: {
            fontSize: 12,
            lineHeight: 16,
            letterSpacing: 0,
            fontWeight: '400',
            fontFamily: 'Urbanist-Regular',
          },
          semibold: {
            fontSize: 12,
            lineHeight: 16,
            letterSpacing: 0,
            fontWeight: '600',
            fontFamily: 'Urbanist-SemiBold',
          },
        },
        m: {
          regular: {
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: 0,
            fontWeight: '400',
            fontFamily: 'Urbanist-Regular',
          },
          semibold: {
            fontSize: 14,
            lineHeight: 20,
            letterSpacing: 0,
            fontWeight: '600',
            fontFamily: 'Urbanist-SemiBold',
          },
        },
        l: {
          regular: {
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: 0,
            fontWeight: '400',
            fontFamily: 'Urbanist-Regular',
          },
          semibold: {
            fontSize: 16,
            lineHeight: 24,
            letterSpacing: 0,
            fontWeight: '600',
            fontFamily: 'Urbanist-SemiBold',
          },
        },
        xl: {
          regular: {
            fontSize: 20,
            lineHeight: 28,
            letterSpacing: 0,
            fontWeight: '400',
            fontFamily: 'Urbanist-Regular',
          },
          semibold: {
            fontSize: 20,
            lineHeight: 28,
            letterSpacing: 0,
            fontWeight: '600',
            fontFamily: 'Urbanist-SemiBold',
          },
        },
      },
    },
  
    // Spacing
    spacing: {
      '2xs': 2,
      xs: 4,
      s: 8,
      m: 12,
      l: 16,
      xl: 24,
      '2xl': 32,
      '3xl': 40,
      '4xl': 48,
      '5xl': 56,
      '6xl': 64,
      '7xl': 72,
      '8xl': 80,
      '9xl': 88,
      '10xl': 96,
      '11xl': 104,
      '12xl': 112,
    },
  
    // Border Radius
    borderRadius: {
      xs: 4,
      s: 8,
      m: 12,
      l: 16,
      xl: 20,
      '2xl': 24,
      pill: 999,
      circle: 50,
    },
  
    // Border Width
    borderWidth: {
      xs: 1,
      s: 1.5,
      m: 2,
      l: 4,
      xl: 8,
    },
  
    // Breakpoints
    breakpoints: {
      s: 393,  // Mobile
      m: 768,  // Tablet
      l: 1024, // Desktop
      xl: 1440, // Large Desktop
    },
  };
  
  export default theme;
  
  // Helper function to get typography styles
  export const getTextStyle = (
    variant: keyof typeof theme.typography.text = 'm', 
    weight: 'regular' | 'semibold' = 'regular'
  ) => {
    return theme.typography.text[variant]?.[weight] || theme.typography.text.m.regular;
  };
  
  // Helper function to get heading styles
  export const getHeadingStyle = (size = 'm') => {
    return theme.typography.heading[size] || theme.typography.heading.m;
  };
  
  // Example usage in components:
  /*
  import theme, { getTextStyle, getHeadingStyle } from './theme';
  
  // In your component:
  <Text style={{
    ...getTextStyle('l', 'semibold'),
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.m,
  }}>
    Hello World
  </Text>
  
  <Text style={{
    ...getHeadingStyle('xl'),
    color: theme.colors.brandPrimary,
    paddingHorizontal: theme.spacing.l,
  }}>
    Welcome
  </Text>
  */

