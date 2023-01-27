<template>
  <h2>Dashboard Component</h2>
  <v-table>
    <thead>
    <tr class="font-size-l">
      <th>
        ID
      </th>
      <th>
        NAME
      </th>
      <th>
        ROLE
      </th>
    </tr>
    </thead>
    <tbody>
      <tr
        v-for="member in members"
        :key="member.id"
      >
        <td>{{ member.id }}</td>
        <td>{{ member.name }}</td>
        <td>{{ member.role }}</td>
      </tr>
    </tbody>
  </v-table>
  <hr>
</template>

<script setup>
import {ref} from "vue";

const members = ref([]);

members.value.push({id: 'swim', name: 'swim', role: 'admin'})
members.value.push({id: 'swim2', name: 'swim2', role: 'user'})
members.value.push({id: 'swim3', name: 'swim3', role: 'user'})
members.value.push({id: 'swim4', name: 'swim4', role: 'user'})
members.value.push({id: 'swim5', name: 'swim5', role: 'user'})

</script>

<style scoped>
.text-center {
  text-align: center;
}

.font-size-l {
  font-size: 30px;
}
</style>
