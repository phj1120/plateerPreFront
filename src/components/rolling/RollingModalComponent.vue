<template>
  <v-row justify="center">

      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="()=>{emits('clickAddButton')}">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>

  </v-row>
</template>

<script setup>

const emits = defineEmits(['clickAddButton'])
</script>

<style scoped>

</style>
