<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Sr.No.',
            align: 'center',
            width: '400px',
            value: 'name',
          },
          {
            text: 'Number Choice.',
            align: 'center',
            width: '400px',
            value: 'num',
          },
         
        ],
        desserts: [
          {
            name: '1.',
            num: 981985142,
          },
          {
            name: '2.',
            num: 981985142,
          },
          {
            name: '3.',
            num: 981985142,
          },
          {
            name: '4.',
            num: 981985142,
          },
          {
            name: '5.',
            num: 981985142,
          },
          {
            name: '6.',
            num: 981985142,
          },
          {
            name: '7.',
            num: 981985142,
          },
          {
            name: '8.',
            num: 981985142,
          },
          {
            name: '9.',
            num: 981985142,
          },
          {
            name: '10 .',
            num: 981985142,
          },
      
        ],
      }
    },
  }
</script>