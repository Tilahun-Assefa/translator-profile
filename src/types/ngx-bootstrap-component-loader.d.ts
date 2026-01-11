// Minimal focused declarations for 'ngx-bootstrap/component-loader'
// These declarations provide the shapes used by ngx-bootstrap modal/directive
// so the library's distributed .d.ts files can reference the types correctly.
declare module 'ngx-bootstrap/component-loader' {
  import type { ComponentRef, Injector, TemplateRef, ViewContainerRef } from '@angular/core';

  export class ComponentLoader<T = any> {
    constructor(_viewContainerRef?: ViewContainerRef, _injector?: Injector);
    attach(template: TemplateRef<any> | (new (...args: any[]) => T)): this;
    show(): this;
    hide(): this;
    dispose(): void;
    toString(): string;
  }

  export class ComponentLoaderFactory {
    createLoader<T = any>(viewContainerRef?: ViewContainerRef, injector?: Injector): ComponentLoader<T>;
  }

  export type ComponentLoaderOptions = {
    attachment?: string;
    container?: string | HTMLElement;
    [key: string]: any;
  };
}
