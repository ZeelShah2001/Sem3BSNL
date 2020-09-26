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
          { text: 'Numbers Available', value: 'category' },
        ],
        desserts: [
          {
            name: '1.',
            category: '9809814052',
          },
           {
            name: '2.',
            category: '9809814052',
          },
           {
            name: '3.',
            category: '9809814052',
          },
           {
            name: '4.',
            category: '9809814052',
          },
           {
            name: '5.',
            category: '9809814052',
          },
           {
            name: '6.',
            category: '9809814052',
          },
           {
            name: '7.',
            category: '9809814052',
          },
           {
            name: '8.',
            category: '9809814052',
          },
           {
            name: '9.',
            category: '9809814052',
          },
           {
            name: '10.',
            category: '9809814052',
          },
           {
            name: '11.',
            category: '9809814052',
          },
           {
            name: '12.',
            category: '9809814052',
          },
           {
            name: '13.',
            category: '9809814052',
          },
           {
            name: '14.',
            category: '9809814052',
          },
           {
            name: '15.',
            category: '9809814052',
          },
           {
            name: '16.',
            category: '9809814052',
          },
           {
            name: '17.',
            category: '9809814052',
          },
           {
            name: '18.',
            category: '9809814052',
          },
           {
            name: '19.',
            category: '9809814052',
          },
           {
            name: '20.',
            category: '9809814052',
          },
           {
            name: '21.',
            category: '9809814052',
          },
           {
            name: '22.',
            category: '9809814052',
          },
           {
            name: '23.',
            category: '9809814052',
          },
           {
            name: '24.',
            category: '9809814052',
          },
           {
            name: '25.',
            category: '9809814052',
          },
           {
            name: '26.',
            category: '9809814052',
          },
           {
            name: '27.',
            category: '9809814052',
          },
           {
            name: '28.',
            category: '9809814052',
          },
           {
            name: '29.',
            category: '9809814052',
          },
           {
            name: '30.',
            category: '9809814052',
          },
           {
            name: '31.',
            category: '9809814052',
          },
           {
            name: '32.',
            category: '9809814052',
          },
           {
            name: '33.',
            category: '9809814052',
          },
           {
            name: '34.',
            category: '9809814052',
          },
           {
            name: '35.',
            category: '9809814052',
          },
           {
            name: '36.',
            category: '9809814052',
          },
           {
            name: '37.',
            category: '9809814052',
          },
           {
            name: '38.',
            category: '9809814052',
          }, {
            name: '39.',
            category: '9809814052',
          },
           {
            name: '40.',
            category: '9809814052',
          },
           {
            name: '41.',
            category: '9809814052',
          },
           {
            name: '42.',
            category: '9809814052',
          },
           {
            name: '43.',
            category: '9809814052',
          },
           {
            name: '44.',
            category: '9809814052',
          },
           {
            name: '45.',
            category: '9809814052',
          },
           {
            name: '46.',
            category: '9809814052',
          },
           {
            name: '47.',
            category: '9809814052',
          },
           {
            name: '48.',
            category: '9809814052',
          },
                     {
            name: '49.',
            category: '9809814052',
          },
                     {
            name: '50.',
            category: '9809814052',
          },

          
        ],
      }
    },
  }
</script>