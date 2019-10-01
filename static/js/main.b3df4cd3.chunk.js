(window["webpackJsonpinfyom-schema-generator"]=window["webpackJsonpinfyom-schema-generator"]||[]).push([[0],{21:function(e,t,a){e.exports=a(221)},221:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),s=a.n(o),l=(a(26),a(27),a(9)),i=a(10),c=a(3),u=a(4),m=a(6),h=a(5),p=a(2),d=a(7),f=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:" overflow-x-auto"},r.a.createElement("table",{className:"w-full text-center table-collapse border"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"text-sm font-semibold text-gray-700 p-2 bg-gray-100"}," #"),r.a.createElement("th",{className:"text-sm font-semibold text-gray-700 p-2 bg-gray-100"}," name"),r.a.createElement("th",{className:"text-sm font-semibold text-gray-700 p-2 bg-gray-100"}," dbType"),r.a.createElement("th",{className:"text-sm font-semibold text-gray-700 p-2 bg-gray-100"}," htmlType"),r.a.createElement("th",{className:"text-sm font-semibold text-gray-700 p-2 bg-gray-100"}," validations"),r.a.createElement("th",{className:"text-sm font-semibold text-gray-700 p-2 bg-gray-100",title:"(searchable, fillable, primary, inForm, inIndex)"}," Options"),r.a.createElement("th",{className:"text-sm font-semibold text-gray-700 p-2 bg-gray-100"},"More"))),r.a.createElement("tbody",{className:"align-baseline"},this.props.children)))}}]),t}(n.Component),b=a(223),g=a(224),v=a(225),y=a(19),w=a(1),x=a.n(w),E=a(14),O=a.n(E),N=a(12),k=a.n(N);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var C={Component:x.a.oneOfType([x.a.string,x.a.func]),defaultValue:x.a.string,disabled:x.a.bool,maxOptions:x.a.number,onBlur:x.a.func,onChange:x.a.func,onKeyDown:x.a.func,onRequestOptions:x.a.func,options:x.a.arrayOf(x.a.string),regex:x.a.string,matchAny:x.a.bool,minChars:x.a.number,requestOnlyIfNoOptions:x.a.bool,spaceRemovers:x.a.arrayOf(x.a.string),spacer:x.a.string,trigger:x.a.string,value:x.a.string,offsetX:x.a.number,offsetY:x.a.number},S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).isTrigger=a.isTrigger.bind(Object(p.a)(a)),a.getMatch=a.getMatch.bind(Object(p.a)(a)),a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handleKeyDown=a.handleKeyDown.bind(Object(p.a)(a)),a.handleResize=a.handleResize.bind(Object(p.a)(a)),a.handleSelection=a.handleSelection.bind(Object(p.a)(a)),a.updateCaretPosition=a.updateCaretPosition.bind(Object(p.a)(a)),a.updateHelper=a.updateHelper.bind(Object(p.a)(a)),a.resetHelper=a.resetHelper.bind(Object(p.a)(a)),a.renderAutocompleteList=a.renderAutocompleteList.bind(Object(p.a)(a)),a.state={helperVisible:!1,left:0,matchLength:0,matchStart:0,options:[],selection:0,top:0,value:null},a.recentValue=e.defaultValue,a.enableSpaceRemovers=!1,a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"componentDidUpdate",value:function(e,t,a){var n=e.options,r=t.caret;n.length!==this.props.options.length&&this.updateHelper(this.recentValue,r,this.props.options)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"getMatch",value:function(e,t,a){for(var n=this.props,r=n.trigger,o=n.matchAny,s=n.regex,l=new RegExp(s),i=r.length,c=r.match(l),u=t-1;u>=0;--u){var m=e.substring(u,t).match(l),h=-1;if(i>0){var p=c?u:u-i+1;if(p<0)return null;if(this.isTrigger(e,p)&&(h=p+i),!m&&h<0)return null}else{if(m&&u>0)continue;if(t-(h=0===u&&m?0:u+1)===0)return null}if(h>=0){var d=function(){var n=e.substring(h,t),r=a.filter((function(e){var t=e.toLowerCase().indexOf(n.toLowerCase());return-1!==t&&(o||0===t)})),s=n.length;return{v:{matchStart:h,matchLength:s,options:r}}}();if("object"===typeof d)return d.v}}return null}},{key:"isTrigger",value:function(e,t){var a=this.props.trigger;return!a||!a.length||e.substr(t,a.length)===a}},{key:"handleChange",value:function(e){var t=this.props,a=t.onChange,n=t.options,r=t.spaceRemovers,s=t.spacer,l=t.value,i=this.recentValue,c=e.target.value,u=k()(e.target).end;if(c.length||this.setState({helperVisible:!1}),this.recentValue=c,this.setState({caret:u,value:e.target.value}),!c.length||!u)return a(e);if(this.enableSpaceRemovers&&r.length&&c.length>2&&s.length){for(var m=0;m<Math.max(i.length,c.length);++m)if(i[m]!==c[m]){if(m>=2&&c[m-1]===s&&-1===r.indexOf(c[m-2])&&-1!==r.indexOf(c[m])&&this.getMatch(c.substring(0,m-2),u-3,n)){var h="".concat(c.slice(0,m-1)).concat(c.slice(m,m+1)).concat(c.slice(m-1,m)).concat(c.slice(m+1));return this.updateCaretPosition(m+1),Object(o.findDOMNode)(this.refInput).value=h,l||this.setState({value:h}),a(e)}break}this.enableSpaceRemovers=!1}return this.updateHelper(c,u,n),l||this.setState({value:e.target.value}),a(e)}},{key:"handleKeyDown",value:function(e){var t=this.state,a=t.helperVisible,n=t.options,r=t.selection,o=this.props.onKeyDown;if(a)switch(e.keyCode){case 27:e.preventDefault(),this.resetHelper();break;case 38:e.preventDefault(),this.setState({selection:(n.length+r-1)%n.length});break;case 40:e.preventDefault(),this.setState({selection:(r+1)%n.length});break;case 14:case 13:e.preventDefault(),this.handleSelection(r);break;default:o(e)}else o(e)}},{key:"handleResize",value:function(){this.setState({helperVisible:!1})}},{key:"handleSelection",value:function(e){var t=this.state,a=t.matchStart,n=t.matchLength,r=t.options,s=this.props.spacer,l=r[e],i=this.recentValue,c=i.substring(0,a),u=i.substring(a+n),m={target:Object(o.findDOMNode)(this.refInput)};m.target.value="".concat(c).concat(l).concat(s).concat(u),this.handleChange(m),this.resetHelper(),this.updateCaretPosition(c.length+l.length+1),this.enableSpaceRemovers=!0}},{key:"updateCaretPosition",value:function(e){var t=this;this.setState({caret:e},(function(){return Object(N.setCaretPosition)(Object(o.findDOMNode)(t.refInput),e)}))}},{key:"updateHelper",value:function(e,t,a){var n=Object(o.findDOMNode)(this.refInput),r=this.getMatch(e,t,a);if(r){var s=O()(n,t),l=n.getBoundingClientRect(),c=s.top+n.offsetTop,u=Math.min(s.left+n.offsetLeft-10,n.offsetLeft+l.width-100),m=this.props,h=m.minChars,p=m.onRequestOptions,d=m.requestOnlyIfNoOptions;r.matchLength>=h&&(r.options.length>1||1===r.options.length&&r.options[0].length!==r.matchLength)?this.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({helperVisible:!0,top:c,left:u},r)):(d&&r.options.length||p(e.substr(r.matchStart,r.matchLength)),this.resetHelper())}else this.resetHelper()}},{key:"resetHelper",value:function(){this.setState({helperVisible:!1,selection:0})}},{key:"renderAutocompleteList",value:function(){var e=this,t=this.state,a=t.helperVisible,n=t.left,o=t.matchStart,s=t.matchLength,l=t.options,i=t.selection,c=t.top,u=t.value;if(!a)return null;var m=this.props,h=m.maxOptions,p=m.offsetX,d=m.offsetY;if(0===l.length)return null;if(i>=l.length)return this.setState({selection:0}),null;var f=0===h?l.length:h,b=l.slice(0,f).map((function(t,a){var n=t.toLowerCase().indexOf(u.substr(o,s).toLowerCase());return r.a.createElement("li",{className:a===i?"active":null,key:t,onClick:function(){e.handleSelection(a)},onMouseEnter:function(){e.setState({selection:a})}},t.slice(0,n),r.a.createElement("strong",null,t.substr(n,s)),t.slice(n+s))}));return r.a.createElement("ul",{className:"react-autocomplete-input",style:{left:n+p,top:c+d}},b)}},{key:"render",value:function(){var e=this,t=this.props,a=t.Component,n=t.defaultValue,o=t.disabled,s=t.onBlur,l=t.value,i=Object(y.a)(t,["Component","defaultValue","disabled","onBlur","value"]),c=this.state.value,u=Object.assign({},i);Object.keys(C).forEach((function(e){delete u[e]}));var m="";return"undefined"!==typeof l&&null!==l?m=l:c?m=c:n&&(m=n),r.a.createElement("span",null,r.a.createElement(a,Object.assign({disabled:o,onBlur:s,onChange:this.handleChange,onKeyDown:this.handleKeyDown,ref:function(t){e.refInput=t},value:m},u)),this.renderAutocompleteList())}}]),t}(r.a.Component);S.defaultProps={Component:"textarea",defaultValue:"",disabled:!1,maxOptions:6,onBlur:function(){},onChange:function(){},onKeyDown:function(){},onRequestOptions:function(){},options:[],regex:"^[A-Za-z0-9\\-_]+$",matchAny:!1,minChars:0,requestOnlyIfNoOptions:!0,spaceRemovers:[",",".","!","?"],spacer:" ",trigger:"@",offsetX:0,offsetY:0,value:null};var R=S,D=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",null,r.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-no-wrap"},this.props.index+1),r.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-no-wrap"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Enter name",value:this.props.row.name,onChange:function(t){e.props.onChange(t.target)},className:"border rounded py-1 px-2 text-grey-darkest md:ml-2 focus:outline-none focus:bg-white focus:border-gray-500"})),r.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-no-wrap"},r.a.createElement(R,{Component:"input",options:B,trigger:"",spacer:"",type:"text",name:"dbType",placeholder:"Enter dbType",value:this.props.row.dbType,onChange:function(t){e.props.onChange(t.target)},className:"border rounded py-1 px-2 text-grey-darkest md:ml-2 focus:outline-none focus:bg-white focus:border-gray-500"})),r.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-no-wrap"},r.a.createElement(R,{Component:"input",options:K,trigger:"",spacer:"",type:"text",name:"htmlType",placeholder:"Enter htmlType",value:this.props.row.htmlType,onChange:function(t){e.props.onChange(t.target)},className:"border rounded py-1 px-2 text-grey-darkest md:ml-2 focus:outline-none focus:bg-white focus:border-gray-500"})),r.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-no-wrap"},r.a.createElement(R,{Component:"input",options:W,trigger:"",spacer:"",type:"text",name:"validations",placeholder:"Enter validations",value:this.props.row.validations,onChange:function(t){e.props.onChange(t.target)},className:"border rounded py-1 px-2 text-grey-darkest md:ml-2 focus:outline-none focus:bg-white focus:border-gray-500"})),r.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-no-wrap text-left"},r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{type:"checkbox",name:"searchable",className:"form-check-input",checked:this.props.row.searchable,onChange:function(t){e.props.onChange(t.target)}}),"searchable")),r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{type:"checkbox",name:"fillable",className:"form-check-input",checked:this.props.row.fillable,onChange:function(t){e.props.onChange(t.target)}}),"fillable")),r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{type:"checkbox",name:"primary",className:"form-check-input",checked:this.props.row.primary,onChange:function(t){e.props.onChange(t.target)}}),"primary")),r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{type:"checkbox",name:"inForm",className:"form-check-input",checked:this.props.row.inForm,onChange:function(t){e.props.onChange(t.target)}}),"inForm")),r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{type:"checkbox",name:"inIndex",className:"form-check-input",checked:this.props.row.inIndex,onChange:function(t){e.props.onChange(t.target)}}),"inIndex")),r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{type:"checkbox",name:"inView",className:"form-check-input",checked:this.props.row.inView,onChange:function(t){e.props.onChange(t.target)}}),"inView"))),r.a.createElement("td",{className:"p-2 border-t border-gray-300 font-mono text-xs text-gray-600 whitespace-no-wrap"},r.a.createElement("div",{className:"inline-flex flex-col"},r.a.createElement("button",{className:"hover:bg-gray-300 rounded focus:bg-gray-300",title:"Move Field Up",onClick:this.props.shiftRowUp},r.a.createElement(b.a,{size:20})),r.a.createElement("button",{className:"hover:bg-gray-300 rounded focus:bg-gray-300",title:"Move Field Down",onClick:this.props.shiftRowDown},r.a.createElement(g.a,{size:20})),r.a.createElement("button",{title:"Remove This Field",onClick:this.props.removeRowAt,className:"hover:bg-gray-300 rounded focus:bg-gray-300"},r.a.createElement(v.a,{size:20})))))}}]),t}(n.Component),M=a(230),L=a(18),_=a.n(L);function A(e){var t=[],a=function(e){return"\\"+t.push(e)+"\\"},n=function(e,a){return t[a-1]},r=function(e){return new Array(e+1).join("\t")};t=[];var o="",s=0;e=e.replace(/\\./g,a).replace(/(".*?"|'.*?')/g,a).replace(/\s+/,"");for(var l=0;l<e.length;l++){var i=e.charAt(l);switch(i){case"{":case"[":o+=i+"\n"+r(++s);break;case"}":case"]":o+="\n"+r(--s)+i;break;case",":o+=",\n"+r(s);break;case":":o+=": ";break;default:o+=i}}return o=o.replace(/\[[\d,\s]+?\]/g,(function(e){return e.replace(/\s/g,"")})).replace(/\\(\d+)\\/g,n).replace(/\\(\d+)\\/g,n)}var P=function(){var e=document.createElement("a");return document.body.appendChild(e),e.style="display: none",function(t,a){var n=new Blob([t],{type:"octet/stream"}),r=window.URL.createObjectURL(n);e.href=r,e.download=a,e.click(),window.URL.revokeObjectURL(r)}}();function V(e,t,a){if(a>=e.length)for(var n=a-e.length+1;n--;)e.push(void 0);return e.splice(a,0,e.splice(t,1)[0]),e}var z=a(226),T=a(227),q=a(228),I=a(229);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H={name:"title",dbType:"string",htmlType:"text",validations:"required",searchable:!0,fillable:!0,primary:!1,inForm:!0,inIndex:!0,inView:!0},B=["string","text","integer","enum"],K=["text","textarea","email","date","number","password","select","checkbox","radio","file","toggle-switch"],W=["accepted","active_url","after:date","after_or_equal:date","alpha","alpha_dash","alpha_num","array","bail","before:date","before_or_equal:date","between:min,max","boolean","confirmed","date","date_equals:date","date_format:format","different:field","digits:value","digits_between:min,max","dimensions","distinct","email","ends_with:foo,bar,...","exists:table,column","file","filled","gt:field","gte:field","image","in:foo,bar,...","in_array:anotherfield.*","integer","ip","ipv4","ipv6","json","lt:field","lte:field","max:value","mimetypes:text/plain,...","mimes:foo,bar,...","Basic Usage Of MIME Rule","min:value","not_in:foo,bar,...","not_regex:pattern","nullable","numeric","present","regex:pattern","required","required_if:anotherfield,value,...","required_unless:anotherfield,value,...","required_with:foo,bar,...","required_with_all:foo,bar,...","required_without:foo,bar,...","required_without_all:foo,bar,...","same:field","size:value","starts_with:foo,bar,...","string","timezone","unique:table,column,except,idColumn","url","uuid"],J=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).addRow=function(){var e=a.state.schemas;e.push(U({},H)),a.setState({schemas:e})},a.removeRow=function(){var e=Object(l.a)(a.state.schemas);e.pop(),a.setState({schemas:e})},a.removeRowAt=function(e){var t=Object(l.a)(a.state.schemas);t.splice(e,1),a.setState({schemas:t})},a.shiftRowUp=function(e){if(0!==e){var t=Object(l.a)(a.state.schemas);t=V(t,e,e-1),a.setState({schemas:t})}},a.shiftRowDown=function(e){if(e!==a.state.schemas.length-1){var t=Object(l.a)(a.state.schemas);t=V(t,e,e+1),a.setState({schemas:t})}},a.updateModelName=function(e){a.setState({modelName:e.target.value})},a.updateRow=function(e,t){var n=Object(l.a)(a.state.schemas);"checkbox"===e.type?n[t][e.name]=!n[t][e.name]:n[t][e.name]=e.value,a.setState({schemas:n})},a.downloadFile=function(){P(A(JSON.stringify(a.state.schemas)),a.state.modelName+".json")},a.state={schemas:[],modelName:"Schema",moreDropdown:!1},a.state.schemas.push(U({},H)),a.showMenu=a.showMenu.bind(Object(p.a)(a)),a.closeMenu=a.closeMenu.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"showMenu",value:function(e){var t=this;e.preventDefault(),this.setState({moreDropdown:!0},(function(){document.addEventListener("click",t.closeMenu)}))}},{key:"closeMenu",value:function(e){var t=this;this.dropdownMenu.contains(e.target)||this.setState({moreDropdown:!1},(function(){document.removeEventListener("click",t.closeMenu)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("nav",{id:"header",className:"bg-white fixed w-full z-10 top-0 shadow"},r.a.createElement("div",{className:"w-full container mx-auto flex flex-wrap justify-between items-center mt-0 pt-3 pb-3 md:pb-0"},r.a.createElement("div",{className:"pl-2 md:pl-0 pb-1 inline-flex",style:{alignItems:"center"}},r.a.createElement("img",{src:"/infyom-schema-generator/logo192.png",className:"w-10 h-10",alt:"Site Logo"})," ",r.a.createElement("span",{className:"text-blue-600 no-underline hover:no-underline font-bold pl-1"},"Infyom Json Schema Generator")),r.a.createElement("a",{href:"https://github.com/harish81/infyom-schema-generator",rel:"noopener noreferrer",target:"_blank",className:"text-gray-600 hover:bg-gray-300 focus:bg-gray-300 p-2 rounded mr-2",title:"Github"},r.a.createElement(z.a,{size:24})))),r.a.createElement("div",{className:"container m-auto bg-white shadow rounded px-8 pt-4 pb-8 mb-4 mt-20"},r.a.createElement("h5",{className:"font-bold text-gray-600 pb-2"},"Model/Schema Name "),r.a.createElement("div",{className:"mt-4 mb-4"},r.a.createElement("input",{type:"text",name:"model",id:"model",placeholder:"Enter model/schema name..",value:this.state.modelName,onChange:this.updateModelName,title:"Enter schema name here",className:"border rounded py-2 px-3 text-grey-darkest focus:outline-none focus:bg-white focus:border-gray-500"}),r.a.createElement("span",{className:"text-gray-600"},".json"))),r.a.createElement("div",{className:"container m-auto bg-white shadow rounded px-8 pt-4 pb-8 mb-4 mt-2"},r.a.createElement("h5",{className:"font-bold text-gray-600 pb-2"},"Fields "),r.a.createElement(f,null,this.state.schemas.map((function(t,a){return r.a.createElement(D,{key:a,row:t,index:a,onChange:function(t){e.updateRow(t,a)},removeRowAt:function(){e.removeRowAt(a)},shiftRowUp:function(){e.shiftRowUp(a)},shiftRowDown:function(){e.shiftRowDown(a)}})}))),r.a.createElement("div",{className:"flex items-center mt-4 bg-gray-100 rounded border justify-center"},r.a.createElement("button",{title:"Add Field",className:"hover:text-blue-500 focus:text-blue-500 text-gray-600 focus:outline-none py-2 px-3 inline-flex font-bold",type:"button",onClick:this.addRow},r.a.createElement(T.a,{size:20,className:"mr-2"})," ",r.a.createElement("span",{className:"hidden sm:inline"},"Add Field")),r.a.createElement("button",{onClick:this.downloadFile,title:"Download Schema File",className:"hover:text-green-500 focus:text-green-500 text-gray-600 focus:outline-none py-2 px-3 inline-flex font-bold"},r.a.createElement(q.a,{size:20,className:"mr-2"}),r.a.createElement("span",{className:"hidden sm:inline"},"Download")),r.a.createElement("button",{onClick:this.removeRow,title:"Remove Last Field",className:"hover:text-red-500 focus:text-red-500 text-gray-600 focus:outline-none py-2 px-3 inline-flex font-bold"},r.a.createElement(v.a,{size:20,className:"mr-2"}),r.a.createElement("span",{className:"hidden sm:inline"},"Remove Field")),r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{title:"More",onClick:this.showMenu,className:"hover:text-gray-700 focus:text-gray-700 text-gray-600 focus:outline-none py-2 px-3 inline-flex font-bold"},r.a.createElement(I.a,{size:20,className:"mr-2"}),r.a.createElement("span",{className:"hidden sm:inline"},"More")),this.state.moreDropdown?r.a.createElement("ul",{className:"dropdown-content",ref:function(t){e.dropdownMenu=t}},r.a.createElement("li",null,"Add id Column"),r.a.createElement("li",null,"Add created_at Column"),r.a.createElement("li",null,"Add updated_at Column"),r.a.createElement("li",null,"Add deleted_at Column"),r.a.createElement("li",null,"Add created_by Column")):""))),r.a.createElement("div",{className:"container m-auto bg-white shadow rounded px-8 pt-4 pb-8 mb-4 mt-2"},r.a.createElement("h5",{className:"font-bold text-gray-600"},this.state.modelName,".json"),r.a.createElement("div",{className:"overflow-auto mt-3 text-sm"},r.a.createElement(M.a,{language:"json",style:_.a},A(JSON.stringify(this.state.schemas))))))}}]),t}(n.Component),X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(r.a.createElement(J,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/infyom-schema-generator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/infyom-schema-generator","/service-worker.js");X?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Y(t,e)}))}}()},26:function(e,t,a){},27:function(e,t,a){}},[[21,1,2]]]);
//# sourceMappingURL=main.b3df4cd3.chunk.js.map