<template>
<v-container>
    <v-row
    no-gutters
    >
    <v-col
    v-for="i in 3"
    :key=i
    cols="12"
    md="4"
    >

      <v-card
        class="ma-3 pa-3"
      >
      <v-img
            height="250"
            width="250"
            src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
          ></v-img>
        <v-card-text>
          house
        </v-card-text>
      </v-card>

    </v-col>
    </v-row>

  <v-row
    no-gutters
    >
    <v-col
      cols="12"
      md="6"
    >

      <v-card
        class="purple pa-3"
      >
       <v-img
            height="250"
            width="250"
            src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
          ></v-img>
        <v-card-text>
          house
        </v-card-text>
      </v-card>
</v-col>
<v-col
      cols="12"
      md="10"
    >

      <v-card
        class="purple pa-3"
      >
      
        <v-card-text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </v-card-text>
      </v-card>
    </v-col>
    </v-row>
</v-container>
  </template>