(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{5:function(e,t){},P6RS:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={aws_project_region:"us-east-1",aws_cognito_identity_pool_id:"us-east-1:0654ad78-a1e7-4799-b868-ccad336068cc",aws_cognito_region:"us-east-1",aws_user_pools_id:"us-east-1_9WJ8uxbk9",aws_user_pools_web_client_id:"66vntbnp4mpgn1o1p50pqd43kl",oauth:{domain:"wms-mxitgo.auth.us-east-1.amazoncognito.com",scope:["phone","email","openid","profile","aws.cognito.signin.user.admin"],redirectSignIn:"http://localhost:8000/dashboard",redirectSignOut:"http://localhost:8000/user/login",responseType:"code"},federationTarget:"COGNITO_USER_POOLS"},s=r;t.default=s},a3w7:function(e,t,a){"use strict";var r=a("tAuX"),s=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("J+/v");var l=s(a("MoRW"));a("Q9mQ");var n=s(a("diRs"));a("Pwec");var o=s(a("CtXQ"));a("5NDa");var i=s(a("5rEg"));a("+L6B");var u=s(a("2/Rp"));a("/zsF");var d=s(a("PArb"));a("MXD1");var c=s(a("CFYs")),m=s(a("2Taf")),f=s(a("vZ4D")),g=s(a("rlhR")),p=s(a("MhPg")),h=s(a("l4Ni")),b=s(a("ujKo"));a("OaEy");var v=s(a("2fM7"));a("y8nQ");var E=s(a("Vl3Y")),y=r(a("q1tI")),w=a("Y2fQ"),S=s(a("vyRF")),_=s(a("wY1l")),F=s(a("3a4m")),M=r(a("AL3R")),C=s(a("P6RS")),N=a("RBnf");function R(e){var t=k();return function(){var a,r=(0,b.default)(e);if(t){var s=(0,b.default)(this).constructor;a=Reflect.construct(r,arguments,s)}else a=r.apply(this,arguments);return(0,h.default)(this,a)}}function k(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}M.default.configure(C.default);var P=E.default.Item,x=a("cU5C"),U=v.default.Option,O={ok:y.default.createElement("div",{className:S.default.success},y.default.createElement(w.FormattedMessage,{id:"register.mode.message.password.strong"})),poor:y.default.createElement("div",{className:S.default.error},y.default.createElement(w.FormattedMessage,{id:"register.mode.message.password.short"})),uppercase:y.default.createElement("div",{className:S.default.error},y.default.createElement(w.FormattedMessage,{id:"register.mode.message.password.uppercase"})),characters:y.default.createElement("div",{className:S.default.error},y.default.createElement(w.FormattedMessage,{id:"register.mode.message.password.character"})),numbers:y.default.createElement("div",{className:S.default.error},y.default.createElement(w.FormattedMessage,{id:"register.mode.message.password.number"})),lowercase:y.default.createElement("div",{className:S.default.error},y.default.createElement(w.FormattedMessage,{id:"register.mode.message.password.lowercase"}))},T={ok:"success",poor:"exception"},z=function(e){(0,p.default)(a,e);var t=R(a);function a(){var e;return(0,m.default)(this,a),e=t.apply(this,arguments),e.state={visible:!1,help:"",visibleResultSuccess:!1,titleResultSuccess:"",subTitleResultSuccess:"",dataresult:"",valueOption:"+521"},e.getPasswordStatus=function(){var t=e.props.form,a=t.getFieldValue("password");return e.hasUpperCase(a)?e.hasCharacters(a)?e.hasNumbers(a)?e.hasLowerCase(a)?a&&a.length<8?"poor":"ok":"lowercase":"numbers":"characters":"uppercase"},e.hasUpperCase=function(e){return/[A-Z]/.test(e)},e.hasCharacters=function(e){return/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e)},e.hasNumbers=function(e){return/[0-9]/.test(e)},e.hasLowerCase=function(e){return/[a-z]/.test(e)},e.renderPasswordProgress=function(){var t=e.props.form,a=t.getFieldValue("password"),r=e.getPasswordStatus();return a&&a.length?y.default.createElement("div",{className:S.default["progress-".concat(r)]},y.default.createElement(c.default,{status:T[r],className:S.default.progress,strokeWidth:8,percent:10*a.length>100?100:10*a.length,showInfo:!1})):null},e.handleSubmit=function(t){t.preventDefault();var a=(0,g.default)(e),r=e.props.form;r.validateFields({force:!0},function(e,t){if(!e){var r=a.state.valueOption+t.phone_number;t.phone_number=r,localStorage.setItem("socialNetwork","false"),x.signUpCognito(t).then(function(e){var t=e.user,r=e.codeDeliveryDetails.Destination;a.setState({visibleResultSuccess:!0,dataresult:"success",titleResultSuccess:"Usuario ".concat(t.getUsername()," creado con \xe9xito."),subTitleResultSuccess:"Enviamos un correo de verificaci\xf3n a: ".concat(r)})}).catch(function(e){a.setState({visibleResultSuccess:!0,dataresult:"error",titleResultSuccess:"".concat(e.message||JSON.stringify(e)),subTitleResultSuccess:""})})}})},e.checkPassword=function(t,a,r){var s=e.state,l=s.visible,n=s.confirmDirty;if(a)if(e.setState({help:""}),l||e.setState({visible:!!a}),a.length<8)r("error");else{var o=e.props.form;a&&n&&o.validateFields(["confirm"],{force:!0}),r()}else e.setState({help:y.default.createElement(w.FormattedMessage,{id:"register.label.message.password"}),visible:!!a}),r("error")},e.checkConfirm=function(t,a,r){var s=e.props.form;a&&a!==s.getFieldValue("password")?r((0,w.formatMessage)({id:"register.security.message.password-again"})):r()},e.redirectLogin=function(){F.default.push("/user/login")},e.handleChange=function(t){e.setState({valueOption:t})},e}return(0,f.default)(a,[{key:"render",value:function(){var e=this.props,t=e.form,a=e.submitting,r=t.getFieldDecorator,s=this.state,c=s.visible,m=s.help,f=s.visibleResultSuccess,g=s.titleResultSuccess,p=s.subTitleResultSuccess,h=s.dataresult,b=r("prefix",{initialValue:"+521"})(y.default.createElement(v.default,{onChange:this.handleChange},y.default.createElement(U,{value:"+521"},"+521"),y.default.createElement(U,{value:"+522"},"+522")));return y.default.createElement("div",{className:S.default.main},y.default.createElement(d.default,{plain:!0},y.default.createElement(w.FormattedMessage,{id:"register.social-Network.register"})),y.default.createElement("div",{className:S.default.iconsSocial},y.default.createElement(u.default,{type:"primary",className:S.default.btnFb,onClick:function(){return M.Auth.federatedSignIn({provider:"Facebook"})}},y.default.createElement(N.FacebookOutlined,null),"Facebook"),y.default.createElement(u.default,{type:"danger",className:S.default.btnGo,onClick:function(){return M.Auth.federatedSignIn({provider:"Google"})}},y.default.createElement(N.GoogleOutlined,null),"Google")),!1===f&&y.default.createElement("div",null,y.default.createElement(d.default,{plain:!0,style:{paddingTop:"12px"}},y.default.createElement(w.FormattedMessage,{id:"register.modal.register"})),y.default.createElement(E.default,{onSubmit:this.handleSubmit},y.default.createElement(P,null,r("name",{rules:[{required:!0,message:y.default.createElement(w.FormattedMessage,{id:"register.mode.message.name"})}]})(y.default.createElement(i.default,{size:"large",placeholder:(0,w.formatMessage)({id:"register.label.name"}),prefix:y.default.createElement(o.default,{type:"user",style:{color:"rgba(0,0,0,.25)"}})}))),y.default.createElement(P,null,r("family_name",{rules:[{required:!0,message:y.default.createElement(w.FormattedMessage,{id:"register.mode.message.lastfam"})}]})(y.default.createElement(i.default,{size:"large",placeholder:(0,w.formatMessage)({id:"register.label.lastfam"}),prefix:y.default.createElement(o.default,{type:"user",style:{color:"rgba(0,0,0,.25)"}})}))),y.default.createElement(P,null,r("middle_name",{rules:[{required:!0,message:y.default.createElement(w.FormattedMessage,{id:"register.mode.message.lastmid"})}]})(y.default.createElement(i.default,{size:"large",placeholder:(0,w.formatMessage)({id:"register.label.lastmid"}),prefix:y.default.createElement(o.default,{type:"user",style:{color:"rgba(0,0,0,.25)"}})}))),y.default.createElement(P,null,r("email",{rules:[{required:!0,message:y.default.createElement(w.FormattedMessage,{id:"register.mode.message.email"})},{type:"email",message:y.default.createElement(w.FormattedMessage,{id:"register.mode.message.email-inv"})}]})(y.default.createElement(i.default,{size:"large",placeholder:(0,w.formatMessage)({id:"register.label.email"}),prefix:y.default.createElement(o.default,{type:"mail",style:{color:"rgba(0,0,0,.25)"}})}))),y.default.createElement(P,{help:m},y.default.createElement(n.default,{getPopupContainer:function(e){return e&&e.parentNode?e.parentNode:e},content:y.default.createElement("div",{style:{padding:"4px 0"}},O[this.getPasswordStatus()],this.renderPasswordProgress(),y.default.createElement("div",{style:{marginTop:10}},y.default.createElement(w.FormattedMessage,{id:"register.security.message.password"}))),overlayStyle:{width:240},placement:"right",visible:c},r("password",{rules:[{validator:this.checkPassword}]})(y.default.createElement(i.default.Password,{size:"large",type:"password",placeholder:(0,w.formatMessage)({id:"register.label.password"}),prefix:y.default.createElement(o.default,{type:"lock",style:{color:"rgba(0,0,0,.25)"}})})))),y.default.createElement(P,null,r("confirm",{rules:[{required:!0,message:y.default.createElement(w.FormattedMessage,{id:"register.label.message.password"})},{validator:this.checkConfirm}]})(y.default.createElement(i.default.Password,{size:"large",type:"password",placeholder:(0,w.formatMessage)({id:"register.label.password-again"}),prefix:y.default.createElement(o.default,{type:"lock",style:{color:"rgba(0,0,0,.25)"}})}))),y.default.createElement(P,null,r("phone_number",{rules:[{required:!0,message:y.default.createElement(w.FormattedMessage,{id:"register.mode.message.phone"})},{pattern:/^\d{10}$/,message:y.default.createElement(w.FormattedMessage,{id:"register.security.message.phone"})}]})(y.default.createElement(i.default,{size:"large",placeholder:(0,w.formatMessage)({id:"register.label.phone"}),addonBefore:b,prefix:y.default.createElement(o.default,{type:"mobile",style:{color:"rgba(0,0,0,.25)"}})}))),y.default.createElement(P,null,y.default.createElement(u.default,{size:"large",loading:a,className:S.default.submit,type:"primary",htmlType:"submit"},y.default.createElement(w.FormattedMessage,{id:"register.button.register"})),y.default.createElement(_.default,{className:S.default.login,to:"/user/login"},y.default.createElement(w.FormattedMessage,{id:"register.button.account"}))))),!0===f&&y.default.createElement("div",null,y.default.createElement(l.default,{status:h,title:g,subTitle:p,extra:[y.default.createElement(u.default,{type:"primary",key:"console",onClick:this.redirectLogin},y.default.createElement(w.FormattedMessage,{id:"register.button.button-success"}))]})))}}]),a}(y.Component),A=E.default.create()(z);t.default=A},cU5C:function(e,t,a){"use strict";var r=a("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.signUpCognito=void 0;r(a("Sp1i"));var s=a("TESy"),l=function(e){return new Promise(function(t,a){var r=s.CognitoUserPool,l={UserPoolId:"us-east-1_9WJ8uxbk9",ClientId:"66vntbnp4mpgn1o1p50pqd43kl"},n=new r(l),o=[],i={Name:"name",Value:e.name},u={Name:"family_name",Value:e.family_name},d={Name:"middle_name",Value:e.middle_name},c={Name:"phone_number",Value:e.phone_number},m=(e.password,new s.CognitoUserAttribute(i)),f=new s.CognitoUserAttribute(u),g=new s.CognitoUserAttribute(d),p=new s.CognitoUserAttribute(c);o.push(m),o.push(f),o.push(g),o.push(p),n.signUp(e.email,e.password,o,null,function(e,r){e?a(e):t(r)})})};t.signUpCognito=l},vyRF:function(e,t,a){e.exports={main:"antd-pro-pages-user-register-style-main",getCaptcha:"antd-pro-pages-user-register-style-getCaptcha",submit:"antd-pro-pages-user-register-style-submit",login:"antd-pro-pages-user-register-style-login",btnFb:"antd-pro-pages-user-register-style-btnFb",btnGo:"antd-pro-pages-user-register-style-btnGo",iconsSocial:"antd-pro-pages-user-register-style-iconsSocial",icon:"antd-pro-pages-user-register-style-icon",iconG:"antd-pro-pages-user-register-style-iconG",other:"antd-pro-pages-user-register-style-other",register:"antd-pro-pages-user-register-style-register",error:"antd-pro-pages-user-register-style-error",success:"antd-pro-pages-user-register-style-success",warning:"antd-pro-pages-user-register-style-warning","progress-pass":"antd-pro-pages-user-register-style-progress-pass",progress:"antd-pro-pages-user-register-style-progress"}}}]);