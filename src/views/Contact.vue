<template>
  <div class="pageContact">
    <hgroup>
      <h2>
        Contact Us
      </h2>
      <p>
        Feel free to contact us for any questions
      </p>
    </hgroup>
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
