"use strict";(self["webpackChunkproyecto_practico"]=self["webpackChunkproyecto_practico"]||[]).push([[987],{2987:function(t,a,e){e.r(a),e.d(a,{default:function(){return x}});var i=e(3396),o=e(7139);const s={class:"container-fluid page-header-plan"},c={class:"container"},n={class:"d-flex flex-column align-items-center justify-content-center",style:{"min-height":"400px"}},l=(0,i._)("h3",{class:"display-4 text-white text-uppercase"},"PLAN DE ESTUDIOS",-1),r={class:"d-inline-flex text-white"},h={class:"m-0 text-uppercase"},u={class:"text-white",href:"/"},g={class:"container-background-5",style:{position:"relative"}},p={class:"container",style:{padding:"60px"}},_=(0,i._)("hr",{size:"8px",class:"color-main"},null,-1),d=(0,i._)("br",null,null,-1),v={class:"row align-items-center back_bg zoomIn animated",style:{"background-color":"white"}},m={class:"col-md-12"},b={class:"tab-content card",id:"myTabContentMD",style:{width:"100%"}},y=["href"],C=(0,i._)("i",{class:""},null,-1);function A(t,a,e,A,f,S){const E=(0,i.up)("vue-pdf-embed");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",s,[(0,i._)("div",c,[(0,i._)("div",n,[l,(0,i._)("div",r,[(0,i._)("p",h,[(0,i._)("a",u,(0,o.zw)(t.Institucion.institucion_nombre),1)])])])])]),(0,i._)("div",g,[(0,i._)("div",p,[_,d,(0,i._)("div",v,[(0,i._)("div",m,[(0,i._)("div",b,[(0,i._)("a",{href:t.url_api+"/InstitucionUpea/"+t.Institucion.institucion_organigrama,target:"_blank"},[(0,i.Wm)(E,{source:t.url_api+"/InstitucionUpea/"+t.Institucion.institucion_organigrama},null,8,["source"])],8,y)])])]),(0,i._)("button",{style:{left:"0"},class:"btn-primary",onClick:a[0]||(a[0]=a=>t.$router.go(-1))},[C,(0,i.Uk)(" Volver atrás ")])])])],64)}e(7658);var f=e(65),S=e(3627),E=e.n(S),O={name:"HomeCustom",data(){return{stado_video:0,Conv:0,latestConv:{},latestComun:{},latestAv:{},Cur:0,latestCur:{},latestSem:{},Serv:[],Ofer:[],Publi:[],Gac:[],Event:[],Vid:[],NUM_RESULTS:3,pag:1,pager:0,NUM_RESULTS_CUR:3,pag_cur:1,pager_cur:0,NUM_RESULTS_PUB:3,pag_pub:1,pager_pub:0,Eventos:[],search:"",searchGet:!1,searchValues:[],Publicaciones:[],Ofertas:[],Convocatorias:[]}},computed:{...(0,f.rn)(["url_api","Institucion","MenuConv","MenuCur","Links"])},components:{VuePdfEmbed:E()},methods:{async getTipoConv(){try{let t=await this.axios.get("/api/Tipoconvocatorias/5");this.tipo=t.data.Descripcion.tipo_conv_comun_titulo,this.getConvocatorias()}catch(t){console.log(t)}},async getConvocatorias(){try{let t=await this.axios.get("/api/convocatoriasAll/27");this.Convocatorias=[],t.data.forEach((t=>{"1"==t.con_estado&&t.tipo_conv_comun.tipo_conv_comun_titulo==this.tipo&&this.Convocatorias.push(t)})),this.pager=this.Convocatorias.length/this.NUM_RESULTS,this.pager-Math.trunc(this.pager)>0&&(this.pager=Math.trunc(this.pager)+1),this.$store.commit("loading")}catch(t){console.log(t)}},async getOfertas(){try{let t=await this.axios.get("/api/OfertasAcademicasAll/27");this.Ofertas=t.data,this.pager=this.Ofertas.length/this.NUM_RESULTS,this.pager-Math.trunc(this.pager)>0&&(this.pager=Math.trunc(this.pager)+1),this.$store.commit("loading")}catch(t){console.log(t)}},async getPublicaciones(){try{let t=await this.axios.get("/api/PublicacionesAll/27");this.Publicaciones=t.data,this.pager_pub=this.Publicaciones.length/this.NUM_RESULTS_PUB,this.pager_pub-Math.trunc(this.pager_pub)>0&&(this.pager_pub=Math.trunc(this.pager_pub)+1),this.$store.commit("loading")}catch(t){console.log(t)}},async getEventosAll(){try{let t=await this.axios.get("/api/eventoAll/27");this.Eventos=t.data,this.pager=this.Eventos.length/this.NUM_RESULTS,this.pager-Math.trunc(this.pager)>0&&(this.pager=Math.trunc(this.pager)+1),this.$store.commit("loading")}catch(t){console.log(t)}},async getConvocatoriasAll(){try{let t=await this.axios.get("/api/convocatoriasAll/27");this.Conv=t.data,this.Conv.forEach((t=>{"CONVOCATORIAS"==t.tipo_conv_comun.tipo_conv_comun_titulo&&"1"==t.con_estado?0==Object.keys(this.latestConv).length&&(this.latestConv=t):"COMUNICADOS"==t.tipo_conv_comun.tipo_conv_comun_titulo&&"1"==t.con_estado?0==Object.keys(this.latestComun).length&&(this.latestComun=t):"AVISOS"==t.tipo_conv_comun.tipo_conv_comun_titulo&&"1"==t.con_estado&&0==Object.keys(this.latestAv).length&&(this.latestAv=t)})),this.pager=this.Institucion.autoridad.length/this.NUM_RESULTS,this.pager-Math.trunc(this.pager)>0&&(this.pager=Math.trunc(this.pager)+1)}catch(t){console.log(t)}},async getCursosAll(){try{let t=await this.axios.get("/api/cursosAll/27");this.Cur=t.data,this.Cur.forEach((t=>{"CURSOS"==t.tipo_curso_otro.tipo_conv_curso_nombre&&"1"==t.det_estado?0==Object.keys(this.latestCur).length&&(this.latestCur=t):"SEMINARIOS"==t.tipo_curso_otro.tipo_conv_curso_nombre&&"1"==t.det_estado&&0==Object.keys(this.latestSem).length&&(this.latestSem=t)}))}catch(t){console.log(t)}},async getServiciosAll(){try{let t=await this.axios.get("/api/ServicioAll/27");this.Serv=t.data}catch(t){console.log(t)}},async getOfertasAll(){try{let t=await this.axios.get("/api/OfertasAcademicasAll/27");this.Ofer=t.data}catch(t){console.log(t)}},async getPublicacionesAll(){try{let t=await this.axios.get("/api/publicacionesAll/27");this.Publi=t.data}catch(t){console.log(t)}},async getGacetaAll(){try{let t=await this.axios.get("/api/gacetaunivAll/27");this.Gac=t.data}catch(t){console.log(t)}},async getEventos(){try{let t=await this.axios.get("/api/eventoAll/27");this.Event=t.data}catch(t){console.log(t)}},async getVideos(){try{let t=await this.axios.get("/api/VideosAll/27");this.Vid=t.data,this.$store.commit("loading")}catch(t){console.log(t)}},async setImage(t,a){try{await document.querySelector("."+t).setAttribute("style",'background-image: url("'+a+'");')}catch(e){console.log(e)}},contarConv(t){if(t&&this.Conv){let a=0;return this.Conv.forEach((e=>{e.tipo_conv_comun.tipo_conv_comun_titulo==t&&a++})),a}},contarCur(t){if(t&&this.Cur){let a=0;return this.Cur.forEach((e=>{e.tipo_curso_otro.tipo_conv_curso_nombre==t&&a++})),a}},dmy(t){if(void 0!=t){const a=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];let e=t.substr(0,10),i=e.split("-");return i[2]+" de "+a[i[1]-1]+" de "+i[0]}}},created(){this.$store.commit("loadOn"),this.getConvocatoriasAll(),this.getCursosAll(),this.getServiciosAll(),this.getOfertasAll(),this.getOfertas(),this.getPublicaciones(),this.getPublicacionesAll(),this.getGacetaAll(),this.getEventos(),this.getVideos(),this.getEventosAll(),this.getConvocatorias(),this.getTipoConv()}},U=e(89);const w=(0,U.Z)(O,[["render",A]]);var x=w}}]);
//# sourceMappingURL=987.b65e8c0d.js.map