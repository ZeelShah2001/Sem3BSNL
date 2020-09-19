<template>
  <v-breadcrumbs :items="items">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :href="item.href"
        :enabled="item.enabled"
      >
        {{ item.text.toUpperCase() }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
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