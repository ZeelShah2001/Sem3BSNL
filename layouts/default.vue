<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
    <v-app-bar color="white" light fixed app>
    <!-- v-toolbar-title>Application</v-toolbar-title -->
       <!-- Component Example -->
      <logo/>
      <search/>
      <corcar/>
      <relog/>
      
    

    </v-app-bar>

    <!-- Body -->
    <v-content dark>
      <hamburg/>
      <nuxt /> 
     </v-content>
    
    <!-- Footer -->
    <v-content dark>
      <footertab/>
      </v-content>
    <v-footer color="#0160B0" app>
      <span class="#0160B0">&copy; {{ new Date().getFullYear() }}</span>
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