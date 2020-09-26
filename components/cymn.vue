<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
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
          {
            name: '11 .',
            num: 981985142,
          },
          {
            name: '12.',
            num: 981985142,
          },
          {
            name: '13.',
            num: 981985142,
          },
          {
            name: '14.',
            num: 981985142,
          },
          {
            name: '15.',
            num: 981985142,
          },
          {
            name: '16.',
            num: 981985142,
          },
          {
            name: '17.',
            num: 981985142,
          },
          {
            name: '18.',
            num: 981985142,
          },
          {
            name: '19.',
            num: 981985142,
          },
          {
            name: '20.',
            num: 981985142,
          },
          {
            name: '21.',
            num: 981985142,
          },
          {
            name: '22.',
            num: 981985142,
          },
          {
            name: '23.',
            num: 981985142,
          },
          {
            name: '24.',
            num: 981985142,
          },
          {
            name: '25.',
            num: 981985142,
          },
          {
            name: '26.',
            num: 981985142,
          },
          {
            name: '27.',
            num: 981985142,
          },
          {
            name: '28.',
            num: 981985142,
          },
          {
            name: '29.',
            num: 981985142,
          },
          {
            name: '30.',
            num: 981985142,
          },
          {
            name: '30.',
            num: 981985142,
          },
          {
            name: '31.',
            num: 981985142,
          },
          {
            name: '32.',
            num: 981985142,
          },
          {
            name: '33.',
            num: 981985142,
          },
          {
            name: '34.',
            num: 981985142,
          },
          {
            name: '35.',
            num: 981985142,
          },
          {
            name: '36.',
            num: 981985142,
          },
          {
            name: '37.',
            num: 981985142,
          },
          {
            name: '38.',
            num: 981985142,
          },
          {
            name: '39.',
            num: 981985142,
          },
          {
            name: '40.',
            num: 981985142,
          },
          {
            name: '41.',
            num: 981985142,
          },
          {
            name: '42.',
            num: 981985142,
          },
          {
            name: '43.',
            num: 981985142,
          },
          {
            name: '44.',
            num: 981985142,
          },
          {
            name: '45.',
            num: 981985142,
          },
          {
            name: '46.',
            num: 981985142,
          },
          {
            name: '47.',
            num: 981985142,
          },
          {
            name: '48.',
            num: 981985142,
          },
          {
            name: '49.',
            num: 981985142,
          },
          {
            name: '50.',
            num: 981985142,
          },


        
      
        ],
      }
    },
  }
</script>