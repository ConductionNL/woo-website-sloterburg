"use strict";(self.webpackChunkproduct_website_template=self.webpackChunkproduct_website_template||[]).push([[944,123],{8944:function(e,l,a){a.r(l),a.d(l,{default:function(){return k}});var i=a(1609),t=a.n(i),d="WOOItemDetailTemplate-module--tableRow--d28f2",n=a(549),o=a(5663),s=a(404),r=a(1072),v=a(4160),u=a(7814),c=a(9417),j=a(8767),m=a(4348);const h=e=>{if(!e)return;const l=e.lastIndexOf("/");return e.substring(l+1)};var x=a(7713),p=a(5893);const b=e=>{var l,a,i,b,k,g,f,z,C,N,S,I,O,D,w,T,y,L,U,W,B,R,_,A,Q,Z,F,G,q,E,H,J,K,M,P,$,V,X,Y,ee,le,ae,ie,te,de,ne,oe,se,re,ve,ue,ce,je,me,he,xe,pe,be,ke,ge,fe,ze,Ce,Ne,Se;let{wooItemId:Ie}=e;const{t:Oe,i18n:De}=(0,r.$G)(),we=new j.QueryClient,Te=(0,m.K)(we).getOne(Ie);return(0,p.jsx)(o.T3,{children:(0,p.jsxs)(o.JH,{className:"WOOItemDetailTemplate-module--container--ccf27",children:[(0,p.jsx)("div",{children:(0,p.jsxs)(o.rU,{className:"WOOItemDetailTemplate-module--backLink--e33aa",href:"/",onClick:e=>{e.preventDefault(),(0,v.c4)("/")},tabIndex:0,children:[(0,p.jsx)(u.G,{icon:c.acZ})," ",(0,p.jsx)("span",{children:Oe("Back to homepage")})]})}),Te.isSuccess&&Te.data&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.nL,{id:"mainContent",children:""!==Te.data.titel?Te.data.titel:Oe("No title available")}),(0,p.jsx)(x.QZ,{ariaLabels:{scrollLeftButton:Oe("Scroll table to the left"),scrollRightButton:Oe("Scroll table to the right")},children:(0,p.jsx)(o.iA,{className:"WOOItemDetailTemplate-module--table--d7844",children:(0,p.jsxs)(o.RM,{className:"WOOItemDetailTemplate-module--tableBody--9d96b",children:[Te.data.id&&(0,p.jsxs)(o.SC,{className:d,children:[(0,p.jsx)(o.pj,{children:Oe("Feature")}),(0,p.jsx)(o.pj,{children:Te.data.id})]}),Te.data.titel&&(0,p.jsxs)(o.SC,{className:d,children:[(0,p.jsx)(o.pj,{children:Oe("Category")}),(0,p.jsx)(o.pj,{children:null!==(l=Te.data.categorie)&&void 0!==l?l:"-"})]}),Te.data.samenvatting&&(0,p.jsxs)(o.SC,{className:d,children:[(0,p.jsx)(o.pj,{children:Oe("Summary")}),(0,p.jsx)(o.pj,{children:Te.data.samenvatting})]}),Te.data.beschrijving&&(0,p.jsxs)(o.SC,{className:d,children:[(0,p.jsx)(o.pj,{children:Oe("Description")}),(0,p.jsx)(o.pj,{children:Te.data.beschrijving})]}),(null===(a=Te.data.metadata)||void 0===a||null===(i=a.verzoek)||void 0===i?void 0:i.termijnoverschrijding)&&(0,p.jsxs)(o.SC,{className:d,children:[(0,p.jsx)(o.pj,{children:Oe("Exceeding the term")}),(0,p.jsx)(o.pj,{children:null===(b=Te.data.metadata)||void 0===b||null===(k=b.verzoek)||void 0===k?void 0:k.termijnoverschrijding})]}),Te.data.publicatiedatum&&(0,p.jsxs)(o.SC,{className:d,children:[(0,p.jsx)(o.pj,{children:Oe("Publication date")}),(0,p.jsx)(o.pj,{children:Te.data.publicatiedatum?(0,s.p)(De.language,Te.data.publicatiedatum):"-"})]}),(null===(g=Te.data.metadata)||void 0===g||null===(f=g.verzoek)||void 0===f?void 0:f.ontvangstdatum)&&(0,p.jsxs)(o.SC,{className:d,children:[(0,p.jsx)(o.pj,{children:Oe("Registration date")}),(0,p.jsx)(o.pj,{children:null!==(z=(0,s.p)(De.language,null===(C=Te.data.metadata)||void 0===C||null===(N=C.verzoek)||void 0===N?void 0:N.ontvangstdatum))&&void 0!==z?z:"-"})]}),(null===(S=Te.data.metadata)||void 0===S?void 0:S.besluitdatum)&&(0,p.jsxs)(o.SC,{className:d,children:[(0,p.jsxs)(o.pj,{children:[Oe("Decision date")," "]}),(0,p.jsx)(o.pj,{children:null!==(I=(0,s.p)(De.language,null===(O=Te.data.metadata)||void 0===O?void 0:O.besluitdatum))&&void 0!==I?I:"-"})]}),!t()(Te.data.themas)&&(0,p.jsxs)(o.SC,{className:d,children:[(0,p.jsx)(o.pj,{children:Oe("Themes")}),(0,p.jsx)(o.pj,{children:Te.data.themas.map(((e,l)=>{var a;return(0,p.jsx)("span",{children:e.hoofdthema+(l!==(null===(a=Te.data.themas)||void 0===a?void 0:a.length)-1?", ":"")},l)}))})]}),(null===(D=Te.data.metadata)||void 0===D||null===(w=D.verzoek)||void 0===w?void 0:w.informatieverzoek)&&(0,p.jsxs)(o.SC,{className:d,children:[(0,p.jsx)(o.pj,{children:Oe("Information request")}),(0,p.jsx)(o.pj,{children:(0,p.jsx)(o.rU,{href:null===(T=Te.data.metadata)||void 0===T||null===(y=T.verzoek)||void 0===y||null===(L=y.informatieverzoek)||void 0===L?void 0:L.url,target:"blank",children:null!==(U=null===(W=Te.data.metadata)||void 0===W||null===(B=W.verzoek)||void 0===B||null===(R=B.informatieverzoek)||void 0===R?void 0:R.titel)&&void 0!==U?U:h(null===(_=Te.data.metadata)||void 0===_||null===(A=_.verzoek)||void 0===A||null===(Q=A.informatieverzoek)||void 0===Q?void 0:Q.url)})})]}),((null===(Z=Te.data.metadata)||void 0===Z||null===(F=Z.verzoek)||void 0===F?void 0:F.besluit)||(null!==(G=null===(q=Te.data.metadata)||void 0===q||null===(E=q.verzoek)||void 0===E?void 0:E.besluit)&&void 0!==G?G:null===(H=Te.data.metadata)||void 0===H||null===(J=H.verzoek)||void 0===J||null===(K=J.besluit)||void 0===K?void 0:K.url))&&(0,p.jsxs)(o.SC,{className:d,children:[(0,p.jsx)(o.pj,{children:Oe("Decision")}),(0,p.jsx)(o.pj,{children:(null!==(M=null===(P=Te.data.metadata)||void 0===P||null===($=P.verzoek)||void 0===$?void 0:$.besluit)&&void 0!==M?M:null===(V=Te.data.metadata)||void 0===V||null===(X=V.verzoek)||void 0===X||null===(Y=X.besluit)||void 0===Y?void 0:Y.url)&&(0,p.jsx)(o.rU,{href:null!==(ee=null===(le=Te.data.metadata)||void 0===le||null===(ae=le.verzoek)||void 0===ae||null===(ie=ae.besluit)||void 0===ie?void 0:ie.url)&&void 0!==ee?ee:null===(te=Te.data.metadata)||void 0===te||null===(de=te.verzoek)||void 0===de||null===(ne=de.besluit)||void 0===ne?void 0:ne.url,target:"blank",children:null!==(oe=null===(se=Te.data.metadata)||void 0===se||null===(re=se.verzoek)||void 0===re||null===(ve=re.besluit)||void 0===ve?void 0:ve.titel)&&void 0!==oe?oe:h(null===(ue=Te.data.metadata)||void 0===ue||null===(ce=ue.verzoek)||void 0===ce||null===(je=ce.besluit)||void 0===je?void 0:je.url)})})]}),(null===(me=Te.data.metadata)||void 0===me||null===(he=me.verzoek)||void 0===he?void 0:he.inventarisatielijst)&&(0,p.jsxs)(o.SC,{className:d,children:[(0,p.jsx)(o.pj,{children:Oe("Inventory list")}),(0,p.jsx)(o.pj,{children:(0,p.jsx)(o.rU,{href:null===(xe=Te.data.metadata)||void 0===xe||null===(pe=xe.verzoek)||void 0===pe||null===(be=pe.inventarisatielijst)||void 0===be?void 0:be.url,target:"blank",children:null!==(ke=null===(ge=Te.data.metadata)||void 0===ge||null===(fe=ge.verzoek)||void 0===fe||null===(ze=fe.inventarisatielijst)||void 0===ze?void 0:ze.titel)&&void 0!==ke?ke:h(null===(Ce=Te.data.metadata)||void 0===Ce||null===(Ne=Ce.verzoek)||void 0===Ne||null===(Se=Ne.inventarisatielijst)||void 0===Se?void 0:Se.url)})})]}),!t()(Te.data.bijlagen)&&(0,p.jsxs)(o.SC,{className:d,children:[(0,p.jsx)(o.pj,{children:Oe("Attachments")}),(0,p.jsx)(o.pj,{children:(0,p.jsx)(o.QI,{children:Te.data.bijlagen.map(((e,l)=>{var a,i;return e.titel&&(0,p.jsx)(o.AS,{children:(0,p.jsx)(o.rU,{href:0!==(null===(a=e.url)||void 0===a?void 0:a.length)?e.url:"#",target:0!==(null===(i=e.url)||void 0===i?void 0:i.length)?"blank":"",children:e.titel})},l)}))})})]})]})})})]}),Te.isLoading&&(0,p.jsx)(n.Z,{height:"200px"})]})})};var k=e=>(0,p.jsx)(b,{wooItemId:e.params.id})},1525:function(e,l,a){a.r(l);var i=a(8944);l.default=i.default}}]);
//# sourceMappingURL=component---src-pages-[id]-index-tsx-09824ee7e314e88b454f.js.map