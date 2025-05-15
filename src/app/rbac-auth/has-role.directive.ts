import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { RoleType } from './role.model';
import { RbacAuthService } from './rbac-auth.service';

@Directive({
  selector: '[hasRole]'
})
export class HasRoleDirective {
  @Input() hasRole!: RoleType[];
  private isVisible = false;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private authService: RbacAuthService
  ) { }

  ngOnInit() {
    if (this.authService.hasRole(this.hasRole)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
