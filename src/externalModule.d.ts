import 'styled-components';

declare module '@indigoichigo/network' {
  var indigoichigoNetwork: any;
  export = indigoichigoNetwork;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      secondary: string;
    };
  }
}