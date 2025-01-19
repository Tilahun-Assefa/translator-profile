import{a as C}from"./chunk-JIN6SOWY.js";import{d as B,f as k,j as $}from"./chunk-ULSK6AIX.js";import"./chunk-KXDR3QM3.js";import{a as S,b as m,c as w,d as _,e as s,g as y,k as E,l as F,m as z,n as H,o as J,p as K,q as Q,r as N,s as x,t as h}from"./chunk-KEJPACTK.js";import{Cb as o,Db as D,Eb as G,Ia as l,Ja as p,Jb as L,Sa as v,Ta as T,V as I,Xa as f,gb as u,gc as O,kb as g,lb as P,lc as U,nb as A,ob as j,pb as i,qb as e,rb as d,tb as b,ub as q}from"./chunk-KSU6WVC3.js";var W=t=>({"is-invalid":t});function ee(t,c){t&1&&(i(0,"div"),o(1,"Email is required"),e())}function te(t,c){t&1&&(i(0,"div"),o(1,"The email should be more than 3 characters"),e())}function ie(t,c){if(t&1&&(i(0,"div"),f(1,ee,2,0,"div"),e(),i(2,"div"),f(3,te,2,0,"div"),e()),t&2){let r=q();l(),g(r.submitted&&(!(r.email==null||r.email.errors==null)&&r.email.errors.required)?1:-1),l(2),g(r.submitted&&(!(r.email==null||r.email.errors==null)&&r.email.errors.minlength)?3:-1)}}function re(t,c){t&1&&(i(0,"div"),o(1,"Password is required"),e())}function ne(t,c){if(t&1&&(i(0,"div",11),o(1),e()),t&2){let r=q();l(),D(r.errorMessage)}}var R=(()=>{class t{constructor(r,a,n,M){this.fb=r,this.route=a,this.router=n,this.authService=M,this.loading=!1,this.submitted=!1,this.errorMessage="",this.authService.userValue&&this.router.navigate(["/"])}ngOnInit(){this.loginForm=this.fb.group({email:new s("",m.required),password:new s("",m.required)}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}get f(){return this.loginForm.controls}get email(){return this.loginForm.get("email")}get password(){return this.loginForm.get("password")}onSubmit(){if(this.loginForm.invalid){this.errorMessage="Incorrect Credential";return}this.submitted=!0,this.loading=!0,this.authService.login(this.f.email?.value,this.f.password?.value).subscribe({next:r=>{this.router.navigate([this.returnUrl])},error:r=>{this.errorMessage=r,this.loading=!1},complete:()=>console.info("complete")})}static{this.\u0275fac=function(a){return new(a||t)(p(N),p(B),p(k),p(C))}}static{this.\u0275cmp=v({type:t,selectors:[["dl-login"]],decls:20,vars:11,consts:[[1,"card"],[1,"card-header"],[1,"card-body","col-md-4","offset-md-1"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","email",1,"col-form-label"],["id","email","type","email","formControlName","email","required","","minlength","3",1,"form-control",3,"ngClass"],[1,"alert","alert-danger"],["for","password",1,"col-form-label"],["id","password","type","text","formControlName","password",1,"form-control",3,"ngClass"],["type","submit",1,"btn","btn-primary","mb-2",3,"disabled"],["role","alert",1,"alert","alert-danger","mt-3","mb-0"]],template:function(a,n){a&1&&(i(0,"div",0)(1,"h3",1),o(2,"Login Form"),e(),i(3,"div",2)(4,"form",3),b("ngSubmit",function(){return n.onSubmit()}),i(5,"div",4)(6,"label",5),o(7,"Email: "),e(),d(8,"input",6),i(9,"div",7),f(10,ie,4,2),e()(),i(11,"div",4)(12,"label",8),o(13,"Password:"),e(),d(14,"input",9),i(15,"div"),f(16,re,2,0,"div"),e()(),i(17,"button",10),o(18," Login "),e(),f(19,ne,2,1,"div",11),e()()()),a&2&&(l(4),u("formGroup",n.loginForm),l(4),u("ngClass",L(7,W,n.submitted&&(n.email==null?null:n.email.errors))),l(2),g(n.email!=null&&n.email.invalid&&(n.email!=null&&n.email.dirty||n.email!=null&&n.email.touched)?10:-1),l(4),u("ngClass",L(9,W,n.submitted&&(n.password==null?null:n.password.errors))),l(2),g(n.submitted&&(!(n.email==null||n.email.errors==null)&&n.email.errors.required)?16:-1),l(),u("disabled",n.loading),l(2),g(n.errorMessage?19:-1))},dependencies:[x,y,S,w,_,K,Q,h,E,F,O],styles:[".ng-invalid[_ngcontent-%COMP%]:not(form).ng-touched{border:1px solid red}"]})}}return t})();function oe(t,c){if(t&1&&(i(0,"option",21),o(1),e()),t&2){let r=c.$implicit;u("ngValue",r),l(),G("",r," ")}}var V=(()=>{class t{constructor(r,a){this.fb=r,this.authService=a,this.roles=["Admin","Translator","User"],this.selectedRole=new s(this.roles[0])}ngOnInit(){this.registerForm=this.fb.group({firstName:new s("",[m.required,m.minLength(3)]),lastName:new s("",m.required),email:new s("",m.required),password:new s("",m.required),verifyPassword:new s("",m.required),telephone:new s("",m.required),address:new s("",m.required),role:new s("",m.required)})}onSubmit(){this.registerForm?.valid&&(console.log(this.registerForm.value),this.authService.register(this.registerForm.value).subscribe(r=>{this.user=r.body})),this.registerForm?.reset()}static{this.\u0275fac=function(a){return new(a||t)(p(N),p(C))}}static{this.\u0275cmp=v({type:t,selectors:[["dl-register"]],decls:44,vars:2,consts:[[1,"login-wrapper"],["card","",1,"box"],[1,"example-form",3,"ngSubmit","formGroup"],[1,"form-field"],["for","first_name"],["type","text","id","first_name","formControlName","first_name","placeholder","First Name",1,"example-full-width"],["for","last_name"],["type","text","id","last_name","formControlName","last_name","placeholder","Last Name",1,"example-full-width"],["for","email"],["type","email","id","","formControlName","email","placeholder","Email",1,"example-full-width"],["type","password","formControlName","password","placeholder","Password",1,"example-full-width"],["for","verify_password"],["type","password","formControlName","verify_password","placeholder","Verify Password",1,"example-full-width"],["for","telephone"],["type","text","id","telephone","formControlName","telephone","placeholder","Phone No.",1,"example-full-width"],["for","address"],["type","text","id","last_name","formControlName","address","placeholder","Address",1,"example-full-width"],["form-field",""],[1,"example-full-width"],["formControlName","selectedRole"],["disabled","","value",""],[3,"ngValue"],["type","submit",1,"btn-block",3,"disabled"]],template:function(a,n){a&1&&(i(0,"div",0)(1,"div",1)(2,"h2"),o(3,"Register"),e(),i(4,"form",2),b("ngSubmit",function(){return n.onSubmit()}),i(5,"div",3)(6,"label",4),o(7,"First Name: "),e(),d(8,"input",5),e(),i(9,"div",3)(10,"label",6),o(11,"Last Name: "),e(),d(12,"input",7),e(),i(13,"div",3)(14,"label",8),o(15,"Email: "),e(),d(16,"input",9),e(),i(17,"div",3)(18,"label",6),o(19,"Password: "),e(),d(20,"input",10),e(),i(21,"div",3)(22,"label",11),o(23,"Verify Password: "),e(),d(24,"input",12),e(),i(25,"div",3)(26,"label",13),o(27,"Phone No.: "),e(),d(28,"input",14),e(),i(29,"div",3)(30,"label",15),d(31,"Address"),o(32,": "),e(),d(33,"input",16),e(),i(34,"div",17)(35,"label",18),o(36,"Choose a role..."),e(),i(37,"select",19)(38,"option",20),o(39,"--select a role--"),e(),A(40,oe,2,2,"option",21,P),e()(),i(42,"button",22),o(43,"Register"),e()()()()),a&2&&(l(4),u("formGroup",n.registerForm),l(36),j(n.roles),l(2),u("disabled",!n.registerForm.valid))},dependencies:[h,y,H,J,S,z,w,_,E,F],encapsulation:2})}}return t})();var le=[{path:"",component:R},{path:"register",component:V}],be=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275mod=T({type:t})}static{this.\u0275inj=I({imports:[U,h,x,$.forChild(le),R,V]})}}return t})();export{be as LoginModule};
