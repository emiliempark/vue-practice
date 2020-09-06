<template>
  <div class="pageContact">
    <v-content>
      <hgroup>
        <h2>문의하기</h2>
        <p>이메일로 연락주세요</p>
      </hgroup>
      <h1>강의</h1>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>논어</v-list-item-title>
          <v-list-item-subtitle>설명 논어 </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>초서</v-list-item-title>
          <v-list-item-subtitle>난이도, 강의계획</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-content>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "Contanct",
  components: {
    ContactForm,
  },
};
</script>

<style lang="scss" scoped>
.pageContact {
  display: flex;
  justify-content: center;
  hgroup {
    margin-right: 32px;
    max-width: 350px;
    width: 100%;
    h2,
    p {
      text-align: left;
    }
  }
}
</style>
