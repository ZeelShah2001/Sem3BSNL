<template>
  <div>
   
     <v-row justify="start">
        <v-btn        
         class=" ml-2 d-flex d-sm-none"         
         color="blue darken-3"
          @click.stop="drawer = !drawer"
        ><v-icon> mdi-menu </v-icon>
          
        </v-btn>
      </v-row>
 

    <v-navigation-drawer
      v-model="drawer"
      absolute
      light
      temporary
      class=" d-flex d-sm-none"
    >
     

  <v-expansion-panels>
    <v-expansion-panel
      v-for="item in items"
      :key="item.panel"
    > 
      <v-expansion-panel-header>{{item.panel}}</v-expansion-panel-header>
      <v-expansion-panel-content>
          <v-btn text>{{item.button}} </v-btn>
  <v-btn  text>{{item.button1}} </v-btn>
  <v-btn  text >{{item.button2}} </v-btn>
        
  <v-btn text>{{item.button3}} </v-btn> 
  <v-btn text>{{item.button4}} </v-btn>
  <v-btn text>{{item.button5}} </v-btn>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

        
    </v-navigation-drawer>
 </div>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          {panel:'PREPAID', button: 'Recharge', button1:'Prepaid to Postpaid',button2:'Roaming',button3: 'International Roaming', button4:'Upgrade',button5:'View Plans '},
          {panel:'POSTPAID', button: 'Pay Bills', button1:'Roaming',button2:'International Roaming', button3: 'View Plans' },
          {panel:'FIBER & WIFI', button: 'Why Bharat Fiber?', button1:'Check Locality',button2:'View Plans' },
          {panel:'CUSTOMIZE NUMBER', button: 'Vanity Numbers?', button1:'Fancy Numbers',button2:'Choose Mobile Number'},
          
        ],
      }
    },
  }
</script>
