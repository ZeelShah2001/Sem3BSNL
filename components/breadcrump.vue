<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-forward</v-icon>
      </template>
    </v-breadcrumbs>
    

    
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'Home',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Customize Number',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'CYMN',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Fill Application',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        
        
      ],
    }),
  }
</script>