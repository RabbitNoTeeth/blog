(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{353:function(t,i,n){"use strict";n.r(i);var o=n(7),s=Object(o.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[this._v("可变参数的方法在每次调用时都会进行一次数组分配和初始化，在重视性能的情况下，如果无法承受这个成本，同时又需要可变参数的灵活性，那么建议提供多个重载方法。假如确定对某个方法的调用在95%的情况下会有3个或者更少的参数，那么就这样声明重载方法：")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("public void foo(){}\npublic void foo(int a){}\npublic void foo(int a,int b){}\npublic void foo(int a,int b,int c){}\npublic void foo(int a,int b,int c,int... args){}\n")])])]),t("p",[this._v("这样能在提供灵活性的前提下提供最大的性能优化，虽然并不美观，但是对于性能提升确是实实在在的。")])])}),[],!1,null,null,null);i.default=s.exports}}]);