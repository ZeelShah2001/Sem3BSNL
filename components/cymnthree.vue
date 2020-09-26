<template>
  <v-data-table light
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    item-key="name"
    class="elevation-1" 
    :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'
    }"
  ></v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Sr. No.',
            align: 'start',
            value: 'name',
          },
          { text: 'Numbers Available'},
        ],
        desserts: [
         '981985143','981985144','981985145','981985146'
        ],
      }
    },
  }
</script>