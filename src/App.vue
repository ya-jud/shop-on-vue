<template>
  <div class="app">
    <Navbar></Navbar>
    <router-link to="/Home"></router-link>
    <router-view/>
    <Footer></Footer>
  </div>  
</template>  

<script>
  import Navbar from './components/Header/Navbar.vue'
  import Footer from './components/Footer/Footer.vue'
  export default{
    components:{
      Navbar,
      Footer
    }
  }
</script>

<style scoped>
@font-face {/*подключение шрифтов*/ 
    font-family: 'Font Awesome 5 Free';
    font-style: normal;
    font-weight: 400;
    font-display: block;
    src: url("../public/fonts/fontawesome-free-5.13.0-web/webfonts/fa-regular-400.eot");
    src: url("../public/fonts/fontawesome-free-5.13.0-web/webfonts/fa-regular-400.eot?#iefix") format("embedded-opentype"), url("../public/fonts/fontawesome-free-5.13.0-web/webfonts/fa-regular-400.woff2") format("woff2"), url("../public/fonts/fontawesome-free-5.13.0-web/webfonts/fa-regular-400.woff") format("woff"), url("../public/fonts/fontawesome-free-5.13.0-web/webfonts/fa-regular-400.ttf") format("truetype"), url("../public/fonts/fontawesome-free-5.13.0-web/webfonts/fa-regular-400.svg#fontawesome") format("svg"); }
  
  .far {  
    font-family: 'Font Awesome 5 Free';
    font-weight: 400; 
} 
@font-face{/*подключение шрифтов*/
    font-family: 'RobotoSlab'; 
    src: url("../public/fonts/robotoslab/RobotoSlab-Regular.ttf");
}
@font-face {
	font-family: 'Oswald DemiBold';
	src: url('../public/fonts/e0f79531a9eb181d09140c8e33656263/fonts/oswald_demibold.eot?#iefix') format('embedded-opentype'), /* IE < 9 */
		url('../public/fonts/e0f79531a9eb181d09140c8e33656263/fonts/oswald_demibold.woff2') format('woff2'), /* Super Modern Browsers */
		url('../public/fonts/e0f79531a9eb181d09140c8e33656263/fonts/oswald_demibold.woff') format('woff'), /* Firefox >= 3.6, any other modern browser */
		url('../public/fonts/e0f79531a9eb181d09140c8e33656263/fonts/oswald_demibold.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../public/fonts/e0f79531a9eb181d09140c8e33656263/fonts/oswald_demibold.svg#oswald_demibold') format('svg'); /* Chrome < 4, Legacy iOS */
} 
.app{
  width: 100%;
  height: 100%;
  min-width: 1270px;
  position: absolute;
}
</style>
