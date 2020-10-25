<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
    <v-app-bar color="white" light fixed app>
      <v-row
      >
      <v-row 
       
       >
       <img src="bsnllogo.png" style="width: 140px; padding-left: 50px ; padding-right: 50px;" class=" pl-ml-16 hidden-xs-only">
       <img src="bsnllogo.png" style="width: 140px; padding-left: 50px ; padding-right: 50px; padding-top: 60px" class=" pl-ml-16 hidden-sm-and-up">
        </v-row >
       <!-- Component Example -->
        <v-row  justify="start" class="col-md-7">
       <tabs/>
       </v-row>

      
       <!--Hamburger menu dropdown for sm and xs screens -->


    <v-menu transition="slide-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        style="margin-top: -10px; margin-left: 340px;"
          color="primary"
          width="40px"
          height="40px"
          v-bind="attrs"
          v-on="on"
          class="hidden-md-and-up"
          justify="e"
          @click.stop="drawer = !drawer"
          >
          menu
        </v-btn>
      </template>

      <v-expansion-panels accordion >
    <v-expansion-panel
    style="background-color:#0161B0; paddin"
    >
      <v-expansion-panel-header>HOME</v-expansion-panel-header>
      <v-expansion-panel-header>PREPAID</v-expansion-panel-header>
      <v-expansion-panel-header>POSTPAID</v-expansion-panel-header>
      <v-expansion-panel-header>FIBER AND WIFI</v-expansion-panel-header>
      <v-expansion-panel-header>CUSTOMIZE MOBILE NUMBER</v-expansion-panel-header>
      
    </v-expansion-panel>
  </v-expansion-panels>
   </v-menu>
      </v-row>
  
  <!-- v-toolbar-title>Application</v-toolbar-title -->
       <!-- Component Example -->
      <search/>
      <!-- this is the code that showcases the career corporate option on the top right of the corner-->
      <v-row  justify="end" class="col-md-2 col-xs-1 col-sm-4 hidden-xs-only">
          <v-col  justify="end" style="font-family:Futura Std, sans-serif">
            <v-btn text small color="primary" class="mt-6">career</v-btn>
            <v-btn text small color="primary" class="mt-6">corporate</v-btn>
          </v-col>
          <v-col style="font-family:Futura Std, sans-serif">
            <v-btn text small color="primary" class="mt-n12">Sign up</v-btn>
            <v-btn text small color="primary" class="mt-n12">Log in</v-btn>
          </v-col>
        </v-row>
      
     
      
    

    </v-app-bar>

    <!-- Body -->
    <v-content dark>
      <nuxt /> 
     </v-content>
    
    <!-- Footer -->
    <v-content dark>
      <footertab/>
      </v-content>
    <v-footer color="#0160B0" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

  </v-app>
</template>
<script>
export default {}
</script>

<style> 
  .white--text {
    border: 1px solid;
  }

   #inspire {
    background-color: white;
    color: black;
  }
</style>