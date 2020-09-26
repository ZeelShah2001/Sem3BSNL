<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
    <v-app-bar color="white" light fixed app>
    <!-- v-toolbar-title>Application</v-toolbar-title -->
       <!-- Component Example -->
      <logo/>
      <search/>
      <tabtwo/>
      
    

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