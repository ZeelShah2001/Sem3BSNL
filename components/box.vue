<template>
  <v-row justify="end" style="font-family:Futura Lt Bt, sans-serif">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
      light
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn rounded
          color="#EA2424"
          class="text-right font-weight-light ml-4 mt-5" style="font-family:Futura Lt Bt, sans-serif"
          dark
          v-bind="attrs"
          v-on="on">
         Fill application
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Fill Application</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              
              <v-col
                cols="12">
                
                <v-text-field
                  label="Full Name*"
                  required
                ></v-text-field>
              </v-col>
              
              <v-col cols="12">
                <v-text-field
                  label="Mobile Number*"
                  required
                ></v-text-field>
              </v-col>
              
              
              <v-col
                cols="12"
                
              >
              <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              
              </v-col>
              
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="#0160B0"
            text
            @click="dialog = true"
          >
            Submit
          </v-btn>
          <v-btn
            color="#EA2424"
            text
            @click="dialog = true"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>