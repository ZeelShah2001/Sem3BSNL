<template>


  <v-row align="center">
    <v-item-group
      v-model="window"
      class="shrink mr-6"
      mandatory
      tag="v-flex"
    >
    
      <v-item
        v-for="n in length"
        :key="n"
        v-slot:default="{ active, toggle }"
      >
        <div>
         
          <v-btn
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </div>
      </v-item>
    </v-item-group>

    <v-col>
      <v-window
        v-model="window"
        class="elevation-1"
        vertical
      >
        <v-window-item
          v-for="n in length"
          :key="n"
        >
          <v-card flat>
            <v-card-text>
              <v-row class="mb-6" align="center">
                
                <v-spacer></v-spacer>
                </v-row>
                

              <p>
              - Choose Your Mobile Number assists you in selecting a phone number of your choice, containing 
              the desired digits and preferred series of digits.
              </p>

              <p>
              - BSNL Choose Your Mobile Number is an online feature that allows you to select a mobile number 
              of your choice from the BSNL Choose Your Number list containing several series of mobile numbers.

              </p>
              - The Choose Your Number feature allows its users to own the phone number of their preference by 
              browsing through states, which are further subdivided into different zone categories

              <p>

              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      length: 5,
      window: 0,
    }),
  }
</script> 