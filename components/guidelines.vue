<template>
  <v-card
    v-scroll.self="onScroll"
    class="overflow-y-auto"
    max-width="1500"
    height="450"
    color="#0161b0"
    outlined
  >
    <v-card-text>
      <div
        v-for="n in 1"
        :key="n"
        class="mb-4"
        >
<h2
  class="text-left pl-5 pr-5 pt-15 pb-15" >
    - Choose Your Mobile Number assists you in selecting a phone number of your choice, containing 
    the desired digits and preferred series of digits.
  </h2>

  <h2 class="text-justify pl-5 pr-5 pb-15">
   - BSNL Choose Your Mobile Number is an online feature that allows you to select a mobile number 
    of your choice from the BSNL Choose Your Number list containing several series of mobile numbers.
   </h2> 

   <h2 class="text-justify pl-5 pr-5 pb-15">
      - The Choose Your Number feature allows its users to own the phone number of their preference by 
    browsing through states, which are further subdivided into different zone categories
  </h2>      </div>
    </v-card-text>
  </v-card>
</template>