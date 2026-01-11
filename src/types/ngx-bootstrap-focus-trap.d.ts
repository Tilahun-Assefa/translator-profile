// Minimal focused types for 'ngx-bootstrap/focus-trap'
// Provides the runtime symbols used by ngx-bootstrap. These are conservative
// and can be expanded later to provide stricter typings for APIs you use.
declare module 'ngx-bootstrap/focus-trap' {
  /** FocusTrap service or factory exported by ngx-bootstrap focus-trap */
  export interface FocusTrap {
    activate(): void;
    deactivate(): void;
    pause(): void;
    unpause(): void;
  }

  const createFocusTrap: {
    /** Create and return a focus-trap like object */
    (element: HTMLElement, options?: any): FocusTrap;
  };

  // NgModule exported by the package, used by other ngx-bootstrap modules
  export class FocusTrapModule {
  }

  export default createFocusTrap;
}
