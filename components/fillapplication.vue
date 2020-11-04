<template>
<!-- this leads you to the next page where you further need to fill in details-->
  <div class="text-right xs-sm-auto">
    <v-btn  color="#EA2424" 
    class="font-weight-light ml-4 mt-5 mx-auto" style="font-family:Futura Lt Bt, sans-serif"  
    @click="check; $router.push('details')"
    
    dark>fill application</v-btn>
  </div>
</template>