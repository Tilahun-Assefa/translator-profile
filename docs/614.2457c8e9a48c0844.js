"use strict";(self.webpackChunktranslator_profile=self.webpackChunktranslator_profile||[]).push([[614],{9614:(m,l,o)=>{o.r(l),o.d(l,{ShippingComponent:()=>_});var c=o(177),t=o(3953),n=o(4341),h=o(2906);const u=(i,a)=>a.id;function g(i,a){if(1&i&&(t.j41(0,"div",0)(1,"span"),t.EFF(2),t.k0s(),t.j41(3,"span"),t.EFF(4),t.nI1(5,"currency"),t.k0s()()),2&i){const e=a.$implicit;t.R7$(2),t.JRh(e.type),t.R7$(2),t.JRh(t.bMT(5,2,e.price))}}function d(i,a){if(1&i&&(t.j41(0,"option",6),t.EFF(1),t.k0s()),2&i){const e=a.$implicit;t.Y8G("value",e),t.R7$(),t.JRh(e)}}let _=(()=>{class i{constructor(e){this.cartService=e,this.price=new n.MJ(""),this.quantity=(0,t.vPA)(1),this.qtyAvailable=(0,t.vPA)([1,2,3,4]),this.selectedShippingCost=(0,t.vPA)({id:1,type:"Port",price:70}),this.costs=(0,t.vPA)([]),this.exPrice=(0,t.EWP)(()=>this.selectedShippingCost().price*this.quantity()),this.qtyEffect=(0,t.QZP)(()=>console.log("Latest quantity",this.quantity())),console.log("constructor",this.quantity())}ngOnInit(){this.shippingCosts=this.cartService.getShippingPrices()}onChangeSelectedQuantity(e){this.quantity.update(s=>e)}onChangeSelectedPrice(e){this.selectedShippingCost.update(s=>({id:s.id,type:s.type,price:e}))}static{this.\u0275fac=function(s){return new(s||i)(t.rXU(h.m))}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["app-shipping"]],standalone:!0,features:[t.aNF],decls:29,vars:13,consts:[[1,"shipping-item"],["for","price"],["id","price","type","text",3,"change","formControl"],["for","quantity"],[3,"change","ngModel"],["disabled","","value",""],[3,"value"]],template:function(s,p){1&s&&(t.j41(0,"h3"),t.EFF(1,"Shipping Prices"),t.k0s(),t.Z7z(2,g,6,4,"div",0,u),t.nI1(4,"async"),t.j41(5,"div")(6,"h1"),t.EFF(7,"Select Price"),t.k0s(),t.j41(8,"label",1),t.EFF(9,"Price: "),t.k0s(),t.j41(10,"input",2),t.bIt("change",function(r){return p.onChangeSelectedPrice(r.target.value)}),t.k0s()(),t.j41(11,"div")(12,"h1"),t.EFF(13,"Select Quantity"),t.k0s(),t.j41(14,"label",3),t.EFF(15,"Quantity: "),t.k0s(),t.j41(16,"select",4),t.bIt("change",function(r){return p.onChangeSelectedQuantity(r.target.value)}),t.j41(17,"option",5),t.EFF(18,"--select a quantity--"),t.k0s(),t.Z7z(19,d,2,2,"option",6,t.Vm6),t.k0s()(),t.j41(21,"div"),t.EFF(22),t.k0s(),t.j41(23,"div"),t.EFF(24),t.nI1(25,"number"),t.k0s(),t.j41(26,"div"),t.EFF(27),t.nI1(28,"number"),t.k0s()),2&s&&(t.R7$(2),t.Dyx(t.bMT(4,5,p.shippingCosts)),t.R7$(8),t.Y8G("formControl",p.price),t.R7$(6),t.Y8G("ngModel",p.quantity()),t.R7$(3),t.Dyx(p.qtyAvailable()),t.R7$(3),t.SpI("Shipping Type: ",p.selectedShippingCost().type,""),t.R7$(2),t.SpI("Price: ",t.i5U(25,7,p.selectedShippingCost().price,"1.2-2"),""),t.R7$(3),t.SpI("Total Price: ",t.i5U(28,10,p.exPrice(),"1.2-2"),""))},dependencies:[c.MD,c.Jj,c.QX,c.oe,n.YN,n.xH,n.y7,n.me,n.wz,n.BC,n.vS,n.X1,n.l_],styles:[".shipping-item[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;gap:20px;padding:20px;flex-direction:row;border-radius:10px;box-shadow:#00000029 0 10px 36px,#0000000f 0 0 0 1px;width:300px}"]})}}return i})()}}]);