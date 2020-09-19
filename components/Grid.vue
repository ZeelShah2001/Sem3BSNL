<template>
  <v-simple-table height="400px"
  width="500px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Sr No</th>
          <th class="text-left">Number Choice</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: '1',
            calories: 24562221,
          },
          {
            name: '2',
            calories: 24562221,
          },{
            name: '3',
            calories: 24562221,
          },
          {
            name: '4',
            calories: 24562221,
          },
         {
            name: '5',
            calories: 24562221,
          },
          {
            name: '6',
            calories: 24562221,
          },
          {
            name: '7',
            calories: 24562221,
          },
          {
            name: '8',
            calories: 24562221,
          },
          {
            name: '9',
            calories: 24562221,
          },
          {
            name: '10',
            calories: 24562221,
          },
        {
            name: '11',
            calories: 24562221,
          },
          {
            name: '12',
            calories: 24562221,
          },{
            name: '13',
            calories: 24562221,
          },
        ],
      }
    },
  }
</script>