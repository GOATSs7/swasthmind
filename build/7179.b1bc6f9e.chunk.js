"use strict";(self.webpackChunkswasthmind=self.webpackChunkswasthmind||[]).push([[7179],{7179:(hs,Q,s)=>{s.d(Q,{ReviewWorkflowsEditPage:()=>is});var t=s(92132),_=s(21272),$=s(85963),A=s(83997),X=s(43064),C=s(30893),M=s(69593),b=s(54514),T=s(61535),q=s(54894),l=s(82437),ss=s(17703),ts=s(17493),os=s(82529),e=s(24491),es=s(1927),S=s(70671),ns=s(45865),h=s(11266),E=s(45084),W=s(25524),as=s(17866),cs=s(35658),Ls=s(56336),As=s(48940),Cs=s(12083),Ts=s(55151),Ws=s(79077),Rs=s(2600),Is=s(51187),Bs=s(15126),Us=s(63299),Ks=s(67014),ys=s(59080),us=s(79275),ws=s(14718),js=s(5790),Ss=s(35223),ps=s(5409),xs=s(74930),Fs=s(41286),Ys=s(13426),Ns=s(84624),Hs=s(77965),Vs=s(54257),ks=s(71210),zs=s(39404),Gs=s(58692),Zs=s(501),Js=s(57646),Qs=s(23120),$s=s(44414),Xs=s(25962),bs=s(14664),qs=s(42588),st=s(90325),tt=s(62785),ot=s(87443),et=s(41032),nt=s(22957),at=s(93179),it=s(73055),lt=s(15747),_t=s(85306),rt=s(26509),Et=s(32058),dt=s(81185),Mt=s(82261);const is=()=>{const{workflowId:R}=(0,ss.g)(),ls=(0,l.d4)(es.s),{formatMessage:n}=(0,q.A)(),r=(0,l.wA)(),{_unstableFormatAPIError:_s,_unstableFormatValidationErrors:rs}=(0,M.wq)(),D=(0,M.hN)(),{isLoading:P,meta:O,workflows:g}=(0,as.u)(),{collectionTypes:p,singleTypes:x,isLoading:I}=(0,os.u)(),Es=(0,l.d4)(e.j),ds=(0,l.d4)(e.a),a=(0,l.d4)(e.b),F=(0,l.d4)(e.k),Y=(0,l.d4)(e.c),v=(0,l.d4)(e.s),{allowedActions:{canDelete:Ms,canUpdate:B}}=(0,M.ec)(ls.settings?.["review-workflows"]),[c,L]=_.useState({}),{getFeature:Ds,isLoading:N}=(0,S.m)(),{isLoading:U,roles:H}=(0,ts.u)(void 0),[V,d]=_.useState(null),[Ps,k]=_.useState(),[Os,z]=_.useState(!1),K=g?.find(o=>o.id===parseInt(R,10)),G=g?.filter(o=>o.id!==parseInt(R,10)).flatMap(o=>o.contentTypes),y=Ds("review-workflows"),f=y?.[W.C],m=y?.[W.a],[gs]=(0,ns.e)(),Z=async()=>{k(void 0),z(!0);try{const o=await gs({id:R,data:{...a,stages:a.stages?.map(i=>{let J=!0;const w=Es.workflow?.stages?.find(j=>j.id===i?.id);return w&&(J=w.permissions?.length!==i.permissions?.length||!w.permissions?.every(j=>!!i.permissions?.find(ms=>ms.role===j.role))),{...i,permissions:J?i.permissions:void 0}})}});if("error"in o){(0,S.x)(o.error)&&o.error.name==="ValidationError"&&k(rs(o.error)),D({type:"warning",message:_s(o.error)});return}D({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})}catch{D({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{z(!1)}L({})},vs=async()=>{await Z()},fs=()=>{L({})},u=(0,T.Wx)({enableReinitialize:!0,initialErrors:Ps,initialValues:a,async onSubmit(){const o=a.contentTypes?.some(i=>G?.includes(i));O&&f&&O?.workflowCount>parseInt(f,10)?d("workflow"):a.stages&&m&&a.stages.length>parseInt(m,10)?d("stage"):F||o?(F&&L(i=>({...i,hasDeletedServerStages:!0})),o&&L(i=>({...i,hasReassignedContentTypes:!0}))):Z()},validate(o){return(0,e.v)({values:o,formatMessage:n})}});return(0,e.u)(W.R,e.i),_.useEffect(()=>(!P&&K&&g&&(r((0,e.l)({workflow:K})),r((0,e.d)({workflows:g}))),I||r((0,e.e)({collectionTypes:p,singleTypes:x})),U||r((0,e.f)(H)),r((0,e.g)(P||I||U)),()=>{r((0,e.r)())}),[p,r,I,P,U,H,x,K,g]),_.useEffect(()=>{!P&&!N&&(O&&f&&O?.workflowCount>parseInt(f,10)?d("workflow"):a.stages&&m&&a.stages.length>parseInt(m,10)&&d("stage"))},[a.stages,N,P,y,O,f,m]),_.useEffect(()=>{!v&&Y?.length===0&&D({blockTransition:!0,type:"warning",message:n({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"})})},[n,v,Y,D]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.D,{}),(0,t.jsx)(T.QI,{value:u,children:(0,t.jsxs)(T.lV,{onSubmit:u.handleSubmit,children:[(0,t.jsx)(h.H,{navigationAction:(0,t.jsx)(h.B,{href:"/settings/review-workflows"}),primaryAction:B&&(0,t.jsx)($.$,{startIcon:(0,t.jsx)(b.A,{}),type:"submit",size:"M",disabled:!ds,loading:!Boolean(Object.keys(c).length>0)&&Os,children:n({id:"global.save",defaultMessage:"Save"})}),subtitle:!v&&n({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:a.stages?.length}),title:a.name||""}),(0,t.jsx)(h.R,{children:v?(0,t.jsx)(A.s,{justifyContent:"center",children:(0,t.jsx)(X.a,{children:n({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})})}):(0,t.jsxs)(A.s,{alignItems:"stretch",direction:"column",gap:7,children:[(0,t.jsx)(e.W,{canUpdate:B}),(0,t.jsx)(e.S,{canDelete:Ms,canUpdate:B,stages:u.values?.stages})]})})]})}),(0,t.jsx)(M.TM.Root,{isConfirmButtonLoading:v,isOpen:Object.keys(c).length>0,onToggleDialog:fs,onConfirm:vs,children:(0,t.jsx)(M.TM.Body,{children:(0,t.jsxs)(A.s,{direction:"column",gap:5,children:[c.hasDeletedServerStages&&(0,t.jsx)(C.o,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.stages.body",defaultMessage:"All entries assigned to deleted stages will be moved to the previous stage."})}),c.hasReassignedContentTypes&&(0,t.jsx)(C.o,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:G?.filter(o=>a.contentTypes?.includes(o)).length})}),(0,t.jsx)(C.o,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"})})]})})}),(0,t.jsxs)(E.L.Root,{isOpen:V==="workflow",onClose:()=>d(null),children:[(0,t.jsx)(E.L.Title,{children:n({id:"Settings.review-workflows.edit.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(E.L.Body,{children:n({id:"Settings.review-workflows.edit.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,t.jsxs)(E.L.Root,{isOpen:V==="stage",onClose:()=>d(null),children:[(0,t.jsx)(E.L.Title,{children:n({id:"Settings.review-workflows.edit.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,t.jsx)(E.L.Body,{children:n({id:"Settings.review-workflows.edit.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})}}}]);
