declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.css' {
  const content: string;
  export default content;
}

declare module 'tailwindcss' {
  const content: any;
  export default content;
}

declare module 'tailwindcss/plugin' {
  const content: any;
  export default content;
}

declare module 'tailwindcss/colors' {
  const content: any;
  export default content;
}

type CSSModuleClasses = { [key: string]: string };

declare module '*.module.css' {
  const classes: CSSModuleClasses;
  export default classes;
}

declare module '*.module.scss' {
  const classes: CSSModuleClasses;
  export default classes;
}

declare module '*.module.sass' {
  const classes: CSSModuleClasses;
  export default classes;
}

declare module '*.module.less' {
  const classes: CSSModuleClasses;
  export default classes;
}

declare module '*.module.styl' {
  const classes: CSSModuleClasses;
  export default classes;
}
