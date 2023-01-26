<template>
  <v-card>
  <v-form
    ref="form"
    lazy-validation
  >
    <v-text-field
      v-model="reply.title"
      label="Title"
      required
    ></v-text-field>

    <v-textarea
      v-model="reply.content"
      label="Content"
      required
    ></v-textarea>

    <div class="btnPosition">
    <v-btn
      color="primary"
      class="me-4"
      @click="()=>emits('saveReply',reply)"
    >
      저장
    </v-btn>

    <v-btn
      color="primary"
      @click="()=>emits('changeDialogStatus')"
    >
     취소
    </v-btn>

    </div>
    작성자 누구누구 나중에 추가
  </v-form>
  </v-card>
</template>

<script setup>

import {ref} from "vue";
const emits = defineEmits(['changeDialogStatus','saveReply'])
const props = defineProps(['rollingId'])
const reply = ref({title : '' , content : '',rollingId:props.rollingId ,writerId : 21})





</script>

<style scoped>
.btnPosition{
  display: flex;
  justify-content: center;
}
</style>
