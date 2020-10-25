<template>
  <v-row>
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="300px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn rounded
          color="#0160B0"
          dark
          v-bind="attrs"
          v-on="on"
          style="margin-left: 1070px; mt-5"
        >
          Filter
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Select</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 150px;">
          <v-radio-group
            v-model="dialogm1"
            column
          >
            <v-radio
              label="Starts With"
              value="Starts With"
            ></v-radio>

            <v-radio
              label="Ends With"
              value="Ends With"
            ></v-radio>

            <v-radio
              label="Contains"
              value="Contains"
            ></v-radio>

          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            color="#0160B0"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="#0160B0"
            text
            @click="dialog = false"
          >
            Enter
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>