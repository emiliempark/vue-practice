<template>
  <div class="pageContact">
    <hgroup>
      <h2>문의하기</h2>
      <p>이메일로 연락주세요</p>
    </hgroup>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "Contanct",
  components: {
    ContactForm
  }
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
