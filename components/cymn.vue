<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1" light
    max-width="1500"
     height="450"
  ></v-data-table>
</template>
<!-- I could'nt figure out how to upload the excel sheet so i just copy pasted for now  -->

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
            num: 981985143,
          },
          {
            name: '3.',
            num: 981985144,
          },
          {
            name: '4.',
            num: 981985145,
          },
          {
            name: '5.',
            num: 981985146,
          },
          {
            name: '6.',
            num: 981985147,
          },
          {
            name: '7.',
            num: 981985148,
          },
          {
            name: '8.',
            num: 981985149,
          },
          {
            name: '9.',
            num: 981985150,
          },
          {
            name: '10 .',
            num: 981985151,
          },
          {
            name: '11 .',
            num: 981985152,
          },
          {
            name: '12.',
            num: 981985153,
          },
          {
            name: '13.',
            num: 981985154,
          },
          {
            name: '14.',
            num: 981985155,
          },
          {
            name: '15.',
            num: 981985156,
          },
          {
            name: '16.',
            num: 981985157,
          },
          {
            name: '17.',
            num: 981985158,
          },
          {
            name: '18.',
            num: 981985159,
          },
          {
            name: '19.',
            num: 981985160,
          },
          {
            name: '20.',
            num: 981985161,
          },
          {
            name: '21.',
            num: 981985162,
          },
          {
            name: '22.',
            num: 981985163,
          },
          {
            name: '23.',
            num: 981985164,
          },
          {
            name: '24.',
            num: 981985165,
          },
          {
            name: '25.',
            num: 981985166,
          },
          {
            name: '26.',
            num: 981985167,
          },
          {
            name: '27.',
            num: 981985168,
          },
          {
            name: '28.',
            num: 981985169,
          },
          {
            name: '29.',
            num: 981985170,
          },
          {
            name: '30.',
            num: 981985171,
          },
          {
            name: '30.',
            num: 981985172,
          },
          {
            name: '31.',
            num: 981985173,
          },
          {
            name: '32.',
            num: 981985174,
          },
          {
            name: '33.',
            num: 981985175,
          },
          {
            name: '34.',
            num: 981985176,
          },
          {
            name: '35.',
            num: 981985178,
          },
          {
            name: '36.',
            num: 981985179,
          },
          {
            name: '37.',
            num: 981985180,
          },
          {
            name: '38.',
            num: 981985181,
          },
          {
            name: '39.',
            num: 981985182,
          },
          {
            name: '40.',
            num: 981985183,
          },
          {
            name: '41.',
            num: 981985184,
          },
          {
            name: '42.',
            num: 981985185,
          },
          {
            name: '43.',
            num: 981985142,
          },
          {
            name: '44.',
            num: 981985186,
          },
          {
            name: '45.',
            num: 981985187,
          },
          {
            name: '46.',
            num: 981985188,
          },
          {
            name: '47.',
            num: 981985189,
          },
          {
            name: '48.',
            num: 981985190,
          },
          {
            name: '49.',
            num: 981985190,
          },
          {
            name: '50.',
            num: 981985191,
          },


        
      
        ],
      }
    },
  }
</script>