<template>
<!-- this is the option that allows the user to filter -->
  <v-col style="color: white;" class="mx-sx-auto">
          
            <v-data-iterator
      :items="items"
   
      :search="search"
      
      :sort-desc="sortDesc"
      hide-default-footer
      
      
    >
      <template v-slot:header>
        <v-toolbar
          style="margin-left: 620px;"
          color="#0160B0"
           width="500px"
           height="30px"
           rounded="rounded"
        
          
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            
            hide-details
           
            label ="Search"
          ></v-text-field>
          <template >
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
             solo-inverted
              
              hide-details
              prepend-inner-icon="mdi-magnify"
              :items="keys"
              
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            
          </template>
        </v-toolbar>
      </template>
      </v-data-iterator>
  </v-col>
</template>
<script>
  export default {
    data: () => ({
        
        keys: [
          'Starts with',
          'Ends with',
          'Contains',
          
        ],
}),
  }
   
  
</script>
