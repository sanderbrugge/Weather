declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.json' {
  const src: any;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.mp4' {
  const src: string;
  export default src;
}
