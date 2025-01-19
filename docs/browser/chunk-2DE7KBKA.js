import{a as A}from"./chunk-4OQO3I3K.js";import{f as I}from"./chunk-ULSK6AIX.js";import"./chunk-RCMLRJ4B.js";import{a as O}from"./chunk-I5U74EJ7.js";import"./chunk-KXDR3QM3.js";import{a as D,c as F,e as j,i as L,j as $,t as N}from"./chunk-KEJPACTK.js";import{A as J,Cb as o,Db as v,Eb as l,Ia as r,Kb as h,Mb as C,Sa as b,Sb as g,Vb as k,Xa as x,_,d as S,gb as c,ic as q,kb as y,lb as P,nb as M,ob as w,pb as e,qb as t,rb as T,s as E,tb as s,ua as u,ub as f}from"./chunk-KSU6WVC3.js";var B=(()=>{class i{static{this.\u0275fac=function(a){return new(a||i)}}static{this.\u0275cmp=b({type:i,selectors:[["app-job-card"]],inputs:{job:"job",index:"index"},decls:20,vars:17,consts:[[1,"job-card"],[1,"profile-name"],[1,"job-headline"],[1,"profile-description"]],template:function(a,n){a&1&&(e(0,"article",0)(1,"p",1),o(2),h(3,"date"),t(),e(4,"p",2),o(5),t(),e(6,"p",3),o(7),t(),e(8,"p"),o(9),h(10,"date"),t(),e(11,"p"),o(12),h(13,"date"),t(),e(14,"p"),o(15),t(),e(16,"p"),o(17),t(),e(18,"p"),o(19),t()()),a&2&&(r(2),l("Date: ",C(3,8,n.job.date,"mediumDate"),""),r(3),l("Part Number: ",n.job.partNumber,""),r(2),l("Quantity: ",n.job.quantity,""),r(2),l("Start Time: ",C(10,11,n.job.startTime,"short"),""),r(3),l("Finish Time: ",C(13,14,n.job.finishTime,"short"),""),r(3),l("Pack Code: ",n.job.packCode,""),r(2),l("Pieces in Pack: ",n.job.packQty,""),r(2),l("Points: ",n.job.points,""))},dependencies:[q],styles:[".job-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;border-radius:10px;padding:15px;box-shadow:#00000029 0 10px 36px,#0000000f 0 0 0 1px;width:300px}.job-img[_ngcontent-%COMP%]{border-radius:10px 10px 0 0;width:300px}.job-description[_ngcontent-%COMP%], .job-headline[_ngcontent-%COMP%], .job-learn-more[_ngcontent-%COMP%]{padding:10px}.job-headline[_ngcontent-%COMP%]{font-size:14pt;font-weight:700}"]})}}return i})();function R(i,d){i&1&&(e(0,"div"),o(1,"...Loading products"),t())}function V(i,d){if(i&1&&(e(0,"div",11),o(1),t()),i&2){let p=f();r(),l("An error occured: ",p.loadingErrorMessage(),"")}}function z(i,d){if(i&1&&T(0,"app-job-card",15),i&2){let p=d.$implicit,a=d.$index;c("index",a)("job",p)}}function W(i,d){if(i&1&&(e(0,"section",12)(1,"h2",13),o(2,"Job List"),t(),e(3,"article",14),M(4,z,1,2,"app-job-card",15,P),t()()),i&2){let p=f(2);r(4),w(p.filteredJobs())}}function G(i,d){if(i&1&&x(0,W,6,0,"section",12),i&2){let p=f();y(p.filteredJobs().length>0?0:-1)}}var re=(()=>{class i{constructor(){this.jobService=_(A),this.router=_(I),this.queryCtl=new j(""),this.typeCtl=new j(""),this.query=u(""),this.type=u("all"),this.filteredJobs=u([]),this.isLoading=this.jobService.isLoading,this.loadingErrorMessage=this.jobService.loadingErrorMessage,this.jobsCount=g(()=>`Jobs found ${this.filteredJobs().length}`),this.jobSearchParameters=g(()=>`Query ${this.query()} with type ${this.type()}`),this.now=O(J(1e3).pipe(E(()=>new Date)),{initialValue:new Date}),this.curTime=g(()=>this.now()?.toLocaleTimeString()),k(()=>{let p=this.jobService.find(this.query(),this.type());this.filteredJobs.set(p())})}search(){return S(this,null,function*(){this.query.update(a=>a=this.queryCtl.value),this.type.update(a=>a=this.typeCtl.value);let p=yield this.jobService.find(this.query(),this.type());this.filteredJobs.update(a=>a=p())})}createJob(){this.router.navigate(["/add-job"])}static{this.\u0275fac=function(a){return new(a||i)}}static{this.\u0275cmp=b({type:i,selectors:[["app-job"]],decls:30,vars:8,consts:[["type","button",1,"button_1",3,"click"],["id","query"],[1,"container"],["for","query"],["type","text","id","query",3,"input","formControl"],["type","radio","id","partnumber","value","partNumber","checked","",3,"change","formControl"],["for","partnumber"],["type","radio","id","workdate","value","date",3,"change","formControl"],["for","workdate"],["type","radio","id","packcode","value","packCode",3,"change","formControl"],["for","packcode"],[2,"color","red"],[1,"job-section"],[1,"profile-header"],[1,"job-list"],[3,"index","job"]],template:function(a,n){a&1&&(e(0,"div")(1,"p"),o(2),t(),e(3,"p"),o(4),t(),e(5,"p"),o(6),t()(),e(7,"button",0),s("click",function(){return n.createJob()}),o(8,"Add Job"),t(),e(9,"section",1)(10,"div",2)(11,"label",3),o(12,"Query: "),t(),e(13,"input",4),s("input",function(){return n.search()}),t()(),e(14,"fieldset")(15,"legend"),o(16,"Please select your preferred filter type:"),t(),e(17,"div")(18,"input",5),s("change",function(){return n.search()}),t(),e(19,"label",6),o(20,"Part Number"),t(),e(21,"input",7),s("change",function(){return n.search()}),t(),e(22,"label",8),o(23,"Work Date"),t(),e(24,"input",9),s("change",function(){return n.search()}),t(),e(25,"label",10),o(26,"Pack Code"),t()()()(),x(27,R,2,0,"div")(28,V,2,1,"div",11)(29,G,1,1)),a&2&&(r(2),v(n.jobsCount()),r(2),v(n.jobSearchParameters()),r(2),l("Current Time: ",n.curTime(),""),r(7),c("formControl",n.queryCtl),r(5),c("formControl",n.typeCtl),r(3),c("formControl",n.typeCtl),r(3),c("formControl",n.typeCtl),r(3),y(n.isLoading()?27:n.loadingErrorMessage()?28:29))},dependencies:[N,D,L,F,$,B],styles:[".container[_ngcontent-%COMP%]{width:80%;margin:auto;overflow:hidden}.job-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;height:100vh}.job-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px;padding:10px}.job-header[_ngcontent-%COMP%]{font-size:36px;text-align:center;padding:10px}.button_1[_ngcontent-%COMP%]{height:38px;background:#e8491d;border:0;padding-left:20px;padding-right:20px;margin:10px;color:#fff}#query[_ngcontent-%COMP%]{padding:15px;color:#000;background:#b4c7d3}#query[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{padding:4px;height:25px;width:250px;background:#fff}"]})}}return i})();export{re as JobComponent};
