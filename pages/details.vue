<!-- details to reserve the number  -->
<template>
  <div>
    <breadcrumb/>
   <v-container class="pa-xs-6 ma-xs-6">
      
      <v-row>
        <v-col
          align="center">
          <v-card
            color="white"
            elevation="0" 
            width="650"
            justify="space-around"
            align="center">

            <!-- Mobile Number details --> 

            <v-row  class= "col-sm-12" >
              <v-col 
                cols="12"
                md="4"
                align="start"
                justify="center">
                
                <h3 style="color:#0161B0; font-family:futura std" class="font-weight-regular">Mobile Number:</h3>
              </v-col> 
              
              <v-text-field
                v-model="email"
                color="white" light fixed app
                solo
                background-color="#F3F3F3"
                label="Mobile Number"
                style="font-family:futura std"
                required
              ></v-text-field>
            </v-row>
            
           <v-row class= "col-sm-12">
              <v-col 
                cols="12"
                md="4"
                align="start"
                justify="end">
                <!-- Account number header --> 
                <h3 style="color:#0161B0; font-family:futura std" class="font-weight-regular">Account Number:</h3>
              </v-col> 
              
              <v-text-field
                v-model="email"
                color="white" light fixed app
                solo
                background-color="#F3F3F3"
                label="Account Number"
                style="font-family:futura std"
                required
              ></v-text-field>
            </v-row>

           <!-- prompt asking for more details -->

            <h5 style="color:black; text-align:center; font-family:futura std" class="font-weight-light"> Please enter email id to recieve confirmation </h5>
            <br>

           <!-- Email Id details -->

            <v-row class= "col-sm-12">
              <v-col 
                cols="12"
                md="4"
                align="start"
                justify="end">
                
                <h3 style="color:#0161B0; font-family:futura std" class="font-weight-regular">Email Id:</h3>
              </v-col> 
              
              <v-text-field
                v-model="email"
                color="white" light fixed app
                :rules="emailRules"
                background-color="#F3F3F3"
                solo
                label="Email Id"
                style="font-family:futura std"
                required>
              </v-text-field>
            </v-row>

           <!-- Contact Number details -->

            <v-row class= "col-sm-12">
              <v-col 
                cols="12"
                md="4"
                align="start"
                justify="end">
                   
                <h3 style="color:#0161B0; font-family:futura std" class="font-weight-regular">Contact Number:</h3>
              </v-col>
              
              <v-text-field
                v-model="email"
                background-color="#F3F3F3"
                color="white" light fixed app
                :counter="10"
                :rules="nameRules"
                solo
                style="font-family:futura std"
                label="Contact Number"
                required>
              </v-text-field>
            </v-row>

          

            <v-row 
              align="center"
              justify="center"
            >
              <v-col
                cols="12"
                md="4"
                align="center"
                justify="center">
                </v-col>
            
                
             

              <v-col
                cols="12"
                md="2"
                align="center"
                justify="center">
                <!-- Submit button-->
                  <v-btn
                    :disabled="!valid"
                    color="#D9262C"
                  
                    style="font-family:futura std"
                    @click="check; $router.push('confirmation')"
                    >
                    SUMBIT
                  </v-btn>
              </v-col>
            </v-row>

          </v-card>
        </v-col>
     </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Please enter valid details',
        ],
      emailRules: [
        v => !!v || 'Please enter valid details',
        ],
      
      
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
     
    goToEvents: function () {
        location.href='http://localhost:3000/BSNLDesign/PayBills'
    }
},
    
  }
</script>