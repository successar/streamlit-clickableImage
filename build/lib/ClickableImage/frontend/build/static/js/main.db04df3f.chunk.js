(this.webpackJsonpclickable_image=this.webpackJsonpclickable_image||[]).push([[0],{45:function(e,t,r){e.exports=r(57)},57:function(e,t,r){"use strict";r.r(t);var a=r(5),n=r.n(a),i=r(19),l=r.n(i),s=r(0),c=r(3),o=r(1),p=r(2),h=r(32),x=r(76),g=r(74),u=r(72),d=r(75),m=function(e){Object(o.a)(r,e);var t=Object(p.a)(r);function r(e){var a;return Object(s.a)(this,r),(a=t.call(this,e)).extra=6,a.svg=void 0,a.render=function(){return n.a.createElement("div",null,n.a.createElement(u.a,{container:!0,spacing:1},n.a.createElement(u.a,{item:!0,xs:6},n.a.createElement(d.a,{defaultValue:100,"aria-labelledby":"discrete-slider",valueLabelDisplay:"off",step:10,min:30,max:100,onChange:function(e,t){return a.setState({width:t})}})),a.props.args.interactive&&n.a.createElement(u.a,{item:!0,xs:3},n.a.createElement(x.a,{value:a.state.type,exclusive:!0,onChange:function(e,t){return a.setState((function(){return{type:t,start:null,end:null}}))},"aria-label":"selection type",style:{margin:2},size:"small"},n.a.createElement(g.a,{value:"row","aria-label":"row"},"Row"),n.a.createElement(g.a,{value:"col","aria-label":"col"},"Col")))),n.a.createElement("br",null),n.a.createElement("svg",{shapeRendering:"optimizeSpeed",viewBox:"0 0 ".concat(a.props.args.width+2*a.extra+1," ").concat(a.props.args.height+2*a.extra+1),xmlns:"http://www.w3.org/2000/svg",ref:function(e){return a.svg=e},onClick:a.props.args.interactive?function(e){return a.handler(e)}:void 0,width:"".concat(a.state.width,"%")},n.a.createElement("image",{href:a.props.args.src,width:a.props.args.width,height:a.props.args.height,x:a.extra,y:a.extra}),a.render_row_left_beams(),a.render_col_top_beams(),a.render_row_right_beams(),a.render_col_bottom_beams(),a.render_extra(),a.props.args.interactive&&a.render_clicked()))},a.render_extra=function(){var e=void 0!==a.props.args.extra_row?a.props.args.extra_row.map((function(e){return 1==e.length?n.a.createElement("line",{x1:a.extra,y1:a.extra+e[0],x2:a.extra+a.props.args.width,y2:a.extra+e[0],stroke:"darkgreen",strokeWidth:"3px"}):n.a.createElement("rect",{x:a.extra,y:a.extra+e[0],width:a.props.args.width,height:e[1]-e[0],fill:"darkgreen",opacity:"0.45"})})):[],t=void 0!==a.props.args.extra_col?a.props.args.extra_col.map((function(e){return 1==e.length?n.a.createElement("line",{x1:a.extra+e[0],y1:a.extra,y2:a.extra+a.props.args.height,x2:a.extra+e[0],stroke:"darkgreen",strokeWidth:"3px"}):n.a.createElement("rect",{x:a.extra+e[0],y:a.extra,height:a.props.args.height,width:e[1]-e[0],fill:"darkgreen",opacity:"0.45"})})):[];return e.concat(t)},a.render_row_left_beams=function(){return a.props.args.row_left_beams.map((function(e,t){return n.a.createElement(n.a.Fragment,null,n.a.createElement("rect",{x:a.extra,y:a.extra+e[0],width:a.props.args.width,height:e[1]-e[0],fill:"blue",opacity:"0.15"}),n.a.createElement("rect",{x:0,y:a.extra+e[0],width:a.extra,height:e[1]-e[0],fill:"blue",opacity:"1.0"}))}))},a.render_col_top_beams=function(){return a.props.args.col_top_beams.map((function(e,t){return n.a.createElement(n.a.Fragment,null,n.a.createElement("rect",{x:a.extra+e[0],y:a.extra,height:a.props.args.height,width:e[1]-e[0],fill:"red",opacity:"0.15"}),n.a.createElement("rect",{x:a.extra+e[0],y:0,height:a.extra,width:e[1]-e[0],fill:"red",opacity:"1.0"}))}))},a.render_row_right_beams=function(){return a.props.args.row_right_beams.map((function(e,t){return n.a.createElement(n.a.Fragment,null,n.a.createElement("rect",{x:a.extra,y:a.extra+e[0],width:a.props.args.width,height:e[1]-e[0],fill:"aqua",opacity:"0.15"}),n.a.createElement("rect",{x:a.extra+a.props.args.width,y:a.extra+e[0],width:a.extra,height:e[1]-e[0],fill:"aqua",opacity:"1.0"}))}))},a.render_col_bottom_beams=function(){return a.props.args.col_bottom_beams.map((function(e,t){return n.a.createElement(n.a.Fragment,null,n.a.createElement("rect",{x:a.extra+e[0],y:a.extra,height:a.props.args.height,width:e[1]-e[0],fill:"orchid",opacity:"0.15"}),n.a.createElement("rect",{x:a.extra+e[0],y:a.extra+a.props.args.height,height:a.extra+1,width:e[1]-e[0],fill:"orchid",opacity:"1.0"}))}))},a.render_clicked=function(){return null!=a.state.start&&null!=a.state.end?"row"==a.state.type?n.a.createElement("rect",{x:a.extra,y:a.extra+a.state.start,width:a.props.args.width,height:a.state.end-a.state.start,fill:"black",opacity:"1.0"}):n.a.createElement("rect",{x:a.extra+a.state.start,y:a.extra,height:a.props.args.height,width:a.state.end-a.state.start,fill:"black",opacity:"1.0"}):null!=a.state.start?"row"==a.state.type?n.a.createElement("line",{x1:a.extra,y1:a.extra+a.state.start,x2:a.extra+a.props.args.width,y2:a.extra+a.state.start,stroke:"black"}):n.a.createElement("line",{x1:a.extra+a.state.start,y1:a.extra,y2:a.extra+a.props.args.height,x2:a.extra+a.state.start,stroke:"black"}):void 0},a.svg=n.a.createRef(),a.state={start:null,end:null,type:"row",width:100},a}return Object(c.a)(r,[{key:"handler",value:function(e){var t=this;e.preventDefault();var r=this.svg.createSVGPoint();r.x=e.clientX,r.y=e.clientY,(r=r.matrixTransform(this.svg.getScreenCTM().inverse())).x=r.x-this.extra,r.y=r.y-this.extra,this.setState((function(e){var t="row"==e.type?r.y:r.x;return null===e.start||null!=e.end?{start:t,end:null,type:e.type}:{start:e.start,end:t,type:e.type}}),(function(){null!=t.state.start&&null!=t.state.end&&t.state.start<t.state.end&&h.a.setComponentValue(t.state)}))}}]),r}(h.b),y=Object(h.c)(m);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.db04df3f.chunk.js.map