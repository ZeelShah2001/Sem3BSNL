<template>
<!-- This is a way to show the user on what step they are on -->
  <div style="font-family:Futura Lt Bt, sans-serif">
    <v-breadcrumbs :items="items" light>
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    

    
  </div>
</template>

<script>
  export default {
    data: () => {
      return ({
        items: [
          {
            text: 'Home',
            disabled: false,
            
          },
          {
            text: 'Customize Number',
            disabled: false,
           
          },
          {
            text: 'CYMN',
            disabled: false,
            href: 'breadcrumbs_dashboard',
          },
          {
            text: 'Fill Application',
            disabled: false,
           
          },
        ],
      })
    },
  }
</script>