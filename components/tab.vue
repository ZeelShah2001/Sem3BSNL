<template>
    <div style="font-family:Futura Std, sans-serif">
      <!-- The purpose was to hide the tabs and change the option according to the selection made. It leads you further to the
      task that lead you further -->
  
    <v-tabs
    class="hidden-xs-only"

          v-model="tab"
      light
   background-color="white"
    color="#0160B0"
    md="4"
    sm="2"
    xs="2"
    >
      <v-tab 
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>


    <v-tabs-items v-model="tab" class="hidden-xs-only">
      <v-tab-item 
        v-for="item in items"
        :key="item.tab"
      >

      <v-row>
        <v-app-bar width="1920" dense color="#015FAF"  flat tile>
        
  <v-btn text>{{item.button}} </v-btn>
  <v-btn text>{{item.button1}} </v-btn>
  <v-btn text>{{item.button2}} </v-btn>
        
  <v-btn text>{{item.button3}} </v-btn> 
  <v-btn text>{{item.button4}} </v-btn>
  <v-btn text>{{item.button5}} </v-btn>
 
        </v-app-bar> </v-row>
      </v-tab-item>
    </v-tabs-items>
   
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tab: null
        ,
        items: [
          { tab: 'PREPAID', button: 'Recharge', button1:'Prepaid to Postpaid',button2:'Roaming',button3: 'International Roaming', button4:'Upgrade',button5:'View Plans ' },
          { tab: 'POSTPAID', button: 'Pay Bills', button1:'Roaming',button2:'International Roaming', button3: 'View Plans' },
          { tab: 'FIBER & WIFI', button: 'Why Bharat Fiber?', button1:'Check Locality',button2:'View Plans' },
          { tab: 'CUSTOMIZE NUMBER', button: 'Vanity Numbers', button1:'Fancy Numbers',button2:'Choose your Mobile Number (CYMN)'},
          
        ],
      }
    },
  }
</script>