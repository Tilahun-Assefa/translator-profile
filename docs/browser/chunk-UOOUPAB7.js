import{a as m,b}from"./chunk-RCMLRJ4B.js";import{b as l}from"./chunk-F25ULYJU.js";import{a as c,d as u}from"./chunk-ZNGF2SSX.js";import{D as h,Q as n,Sb as s,U as p,_ as d,p as a,s as i}from"./chunk-T46RF4ED.js";var H=(()=>{class o{constructor(){this.http=d(u),this.errorMessage="",this.urlAddress=m.urlAddress,this.jobResource=l({loader:()=>this.http.get(this.urlAddress+"/api/Job/GetAll").pipe(i(e=>e.data))}),this.jobs=s(()=>this.jobResource.value()??[]),this.error=s(()=>this.jobResource.error()),this.loadingErrorMessage=s(()=>b(this.error(),"Job")),this.errorStatus=s(()=>this.error().status),this.isLoading=this.jobResource.isLoading,this.find=(e,r)=>s(()=>this.jobs().filter(g=>!e||g.partNumber?.includes(e))),this.getOneJob=e=>this.http.get(this.createCompleteRoute(e,this.urlAddress)).pipe(i(r=>r)),this.createJob=(e,r)=>{this.http.post(this.createCompleteRoute(e,this.urlAddress),r,this.generateHeaders()).pipe(i(t=>t.data)).subscribe({next:t=>{this.jobs=s(()=>t??[])},error:t=>{this.errorMessage=t.message}})},this.updateJob=(e,r)=>{this.http.put(this.createCompleteRoute(e,this.urlAddress),r,this.generateHeaders()).pipe(n(t=>console.log(t)),i(t=>t.data),h(t=>this.handleError(t))).subscribe({next:t=>{console.log(t)},error:t=>{this.errorMessage=t.message}})},this.deleteJob=e=>this.http.delete(this.createCompleteRoute(e,this.urlAddress)),this.createCompleteRoute=(e,r)=>`${r}/${e}`,this.generateHeaders=()=>({headers:new c({"Content-Type":"application/json"})})}handleError(e){let r="";return e.error instanceof ErrorEvent?r=`An error occurred: ${e.error.message}`:r=`Server returned code: ${e.status}, error message is: ${e.message}`,console.error(r),a(()=>r)}static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275prov=p({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();export{H as a};
