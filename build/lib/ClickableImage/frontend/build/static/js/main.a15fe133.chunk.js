(this.webpackJsonpclickable_image=this.webpackJsonpclickable_image||[]).push([[0],{45:function(e,t,a){e.exports=a(57)},57:function(e,t,a){"use strict";a.r(t);var r=a(5),n=a.n(r),l=a(19),i=a.n(l),s=a(0),c=a(3),o=a(1),p=a(2),h=a(32),x=a(76),u=a(74),g=a(72),m=a(75),d=function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).extra=6,r.svg=void 0,r.render=function(){return n.a.createElement("div",null,n.a.createElement(g.a,{container:!0,spacing:1},n.a.createElement(g.a,{item:!0,xs:6},n.a.createElement(m.a,{defaultValue:100,"aria-labelledby":"discrete-slider",valueLabelDisplay:"off",step:10,min:30,max:100,onChange:function(e,t){return r.setState({width:t})}})),r.props.args.interactive&&n.a.createElement(g.a,{item:!0,xs:3},n.a.createElement(x.a,{value:r.state.type,exclusive:!0,onChange:function(e,t){return r.setState((function(){return{type:t,start:null,end:null}}))},"aria-label":"selection type",style:{margin:2},size:"small"},n.a.createElement(u.a,{value:"row","aria-label":"row"},"Row"),n.a.createElement(u.a,{value:"col","aria-label":"col"},"Col")))),n.a.createElement("br",null),n.a.createElement("svg",{shapeRendering:"optimizeSpeed",viewBox:"0 0 ".concat(r.props.args.width+2*r.extra+1," ").concat(r.props.args.height+2*r.extra+1),xmlns:"http://www.w3.org/2000/svg",ref:function(e){return r.svg=e},onClick:r.props.args.interactive?function(e){return r.handler(e)}:void 0,width:"".concat(r.state.width,"%")},n.a.createElement("image",{href:r.props.args.src,width:r.props.args.width,height:r.props.args.height,x:r.extra,y:r.extra}),r.render_row_left_beams(),r.render_col_top_beams(),r.render_row_right_beams(),r.render_col_bottom_beams(),r.render_extra(),r.props.args.interactive&&r.render_clicked()))},r.render_extra=function(){var e=void 0!==r.props.args.extra_row?r.props.args.extra_row.map((function(e){return 1==e.length?n.a.createElement("line",{x1:r.extra,y1:r.extra+e[0],x2:r.extra+r.props.args.width,y2:r.extra+e[0],stroke:"black"}):n.a.createElement("rect",{x:r.extra,y:r.extra+e[0],width:r.props.args.width,height:e[1]-e[0],fill:"black",opacity:"0.95"})})):[],t=void 0!==r.props.args.extra_col?r.props.args.extra_col.map((function(e){return 1==e.length?n.a.createElement("line",{x1:r.extra+e[0],y1:r.extra,y2:r.extra+r.props.args.height,x2:r.extra+e[0],stroke:"black"}):n.a.createElement("rect",{x:r.extra+e[0],y:r.extra,height:r.props.args.height,width:e[1]-e[0],fill:"black",opacity:"0.95"})})):[];return e.concat(t)},r.render_row_left_beams=function(){return r.props.args.row_left_beams.map((function(e,t){return n.a.createElement(n.a.Fragment,null,n.a.createElement("rect",{x:r.extra,y:r.extra+e[0],width:r.props.args.width,height:e[1]-e[0],fill:"blue",opacity:"0.25"}),n.a.createElement("rect",{x:0,y:r.extra+e[0],width:r.extra,height:e[1]-e[0],fill:"blue",opacity:"1.0"}))}))},r.render_col_top_beams=function(){return r.props.args.col_top_beams.map((function(e,t){return n.a.createElement(n.a.Fragment,null,n.a.createElement("rect",{x:r.extra+e[0],y:r.extra,height:r.props.args.height,width:e[1]-e[0],fill:"red",opacity:"0.25"}),n.a.createElement("rect",{x:r.extra+e[0],y:0,height:r.extra,width:e[1]-e[0],fill:"red",opacity:"1.0"}))}))},r.render_row_right_beams=function(){return r.props.args.row_right_beams.map((function(e,t){return n.a.createElement(n.a.Fragment,null,n.a.createElement("rect",{x:r.extra,y:r.extra+e[0],width:r.props.args.width,height:e[1]-e[0],fill:"aqua",opacity:"0.25"}),n.a.createElement("rect",{x:r.extra+r.props.args.width,y:r.extra+e[0],width:r.extra,height:e[1]-e[0],fill:"aqua",opacity:"1.0"}))}))},r.render_col_bottom_beams=function(){return r.props.args.col_bottom_beams.map((function(e,t){return n.a.createElement(n.a.Fragment,null,n.a.createElement("rect",{x:r.extra+e[0],y:r.extra,height:r.props.args.height,width:e[1]-e[0],fill:"orchid",opacity:"0.25"}),n.a.createElement("rect",{x:r.extra+e[0],y:r.extra+r.props.args.height,height:r.extra+1,width:e[1]-e[0],fill:"orchid",opacity:"1.0"}))}))},r.render_clicked=function(){return null!=r.state.start&&null!=r.state.end?"row"==r.state.type?n.a.createElement("rect",{x:r.extra,y:r.extra+r.state.start,width:r.props.args.width,height:r.state.end-r.state.start,fill:"black",opacity:"1.0"}):n.a.createElement("rect",{x:r.extra+r.state.start,y:r.extra,height:r.props.args.height,width:r.state.end-r.state.start,fill:"black",opacity:"1.0"}):null!=r.state.start?"row"==r.state.type?n.a.createElement("line",{x1:r.extra,y1:r.extra+r.state.start,x2:r.extra+r.props.args.width,y2:r.extra+r.state.start,stroke:"black"}):n.a.createElement("line",{x1:r.extra+r.state.start,y1:r.extra,y2:r.extra+r.props.args.height,x2:r.extra+r.state.start,stroke:"black"}):void 0},r.svg=n.a.createRef(),r.state={start:null,end:null,type:"row",width:100},r}return Object(c.a)(a,[{key:"handler",value:function(e){var t=this;e.preventDefault();var a=this.svg.createSVGPoint();a.x=e.clientX,a.y=e.clientY,(a=a.matrixTransform(this.svg.getScreenCTM().inverse())).x=a.x-this.extra,a.y=a.y-this.extra,this.setState((function(e){var t="row"==e.type?a.y:a.x;return null===e.start||null!=e.end?{start:t,end:null,type:e.type}:{start:e.start,end:t,type:e.type}}),(function(){null!=t.state.start&&null!=t.state.end&&t.state.start<t.state.end&&h.a.setComponentValue(t.state)}))}}]),a}(h.b),y=Object(h.c)(d);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.a15fe133.chunk.js.map