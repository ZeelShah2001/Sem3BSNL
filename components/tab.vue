<template>
<v-tabs color="#0160B0"
  background-color="white"
  font= "Gotham">
    <v-tab>Prepaid</v-tab>
    <v-tab>Postpaid</v-tab>
    <v-tab>Fiber and WiFi</v-tab>
    <v-tab>Customize Number</v-tab>
    
    <v-row align="end">
      <v-col offset-md="6"
>
    <v-text-field centered="true"
            hide-details
            width= "10"
            height="20" 
            label="Filled" 
            placeholder="Search" 
            filled 
            rounded 
            dense 
            single-line 
            append-icon="mdi-magnify" class="shrink">
    </v-text-field>
     </v-col>
   </v-row>
  </v-tabs>
</template>