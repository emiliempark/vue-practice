<template>
  <form class="contactForm" @submit.prevent="sendEmail">
    <div class="field">
      <label>Name</label>
      <input type="text" name="user_name" />
    </div>
    <div class="field">
      <label>Email</label>
      <input type="email" name="user_email" />
    </div>
    <div class="field">
      <label>Message</label>
      <textarea name="message"></textarea>
    </div>
    <input type="submit" value="Send" />
  </form>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "ContactForm",
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "gmail",
          "template_OXrECX91",
          e.target,
          "user_h0nO51xg6TSNC1YRhNCaK"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  margin-top: 32px;
  .field {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    label {
      box-sizing: border-box;
      display: flex;
      height: 36px;
      align-items: center;
      font-size: 12px;
      font-weight: 700;
    }
    input {
      box-sizing: border-box;
      display: flex;
      height: 36px;
      border: 1px solid silver;
      border-radius: 2px;
      outline: none;
      padding: 0 8px;
    }
    textarea {
      box-sizing: border-box;
      border: 1px solid silver;
      border-radius: 2px;
      outline: none;
      width: 100%;
      max-width: 350px;
      height: 200px;
      padding: 8px;
    }
  }
  input[type="submit"] {
    height: 38px;
    border: 1px solid silver;
    border-radius: 2px;
    font-size: 13px;
    font-weight: 700;
    outline: none;
    margin: 16px 0;
    &:hover {
      background-color: silver;
      cursor: pointer;
    }
  }
}
</style>
