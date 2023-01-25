<template>
  <v-row>
    <v-col cols="12">
      <div>
        <v-form
          ref="form"
          v-model="rollingInfo.valid"
          lazy-validation
          class="formLength"
          enctype="multipart/form-data"
        >
          <div>
            <v-card>
              <v-text-field
                v-model="rollingInfo.target"
                :counter="10"
                :rules="rollingInfo.nameRules"
                label="TARGET"
                required
              ></v-text-field>
              <v-text-field
                v-model="rollingInfo.title"
                :rules="rollingInfo.titleRules"
                label="TITLE"
                required
              ></v-text-field>
              <v-file-input label="File input" @change="selectFile"></v-file-input>
              <hr />
              <div>이미지 미리보기</div>
            </v-card>
          </div>
          <br />
          <div class="center">
            <v-btn class="vbtn" color="primary" @click="handleClickAdd"
              >작성하기</v-btn
            >
            <v-btn class="vbtn" :to="{ name: 'RollingList' }">목록으로</v-btn>
          </div>
        </v-form>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

const rollingInfo = ref({
  vaild: true,
  nameRules: [
    (v) => !!v || "target is required",
    (v) => (v && v.length <= 10) || "target must be less than 10 characters",
  ],
  titleRules: [(v) => !!v || "title is required"],
});

const handleClickAdd = async () => {
  const target = rollingInfo.value;
  console.log(target);

  const res = await axios.post(
    `http://localhost:8080/api/rolling/postRollingPaper`,
    target
  );
  const data = res.data;

  console.log(data);
};
</script>

<style scoped>
.formLength {
  width: 50vw;
}

.vbtn {
  float: right;
  margin-bottom: 1em;
  margin-right: 1em;
}
</style>
