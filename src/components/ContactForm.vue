<template>
  <ValidationObserver>
    <form class="contactForm" @submit.prevent="handleSubmit(sendEmail)">
      <ValidationProvider name="Name">
        <div class="field">
          <label>성함</label>
          <input type="text" name="from_name" v-model="name" autocomplete="off" />
          <span class="error" v-if="errors.name">{{ errors.name[0] }}</span>
        </div>
      </ValidationProvider>
      <ValidationProvider>
        <div class="field">
          <label>이메일</label>
          <input type="email" name="from_email" v-model="email" autocomplete="off" />
          <span class="error" v-if="errors.email">{{ errors.email[0] }}</span>
        </div>
      </ValidationProvider>
      <ValidationProvider>
        <div class="field">
          <label>본문</label>
          <textarea name="message" v-model="message"></textarea>
          <span class="error" v-if="errors.message">{{ errors.message[0] }}</span>
        </div>
      </ValidationProvider>
      <input type="submit" value="보내기" />
    </form>
  </ValidationObserver>
</template>

<script>
// import emailjs from "emailjs-com";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import validator from "../validator";

// // extend rules
// extend("required", value => {
//   console.log("rules extended", value, value.length, value.length >= 0);
//   return value.length >= 0;
// });

// extend("max", value => {
//   console.log("max rule", value);
//   return value.length <= 3;
// });

export default {
  name: "ContactForm",
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      errors: {
        name: [],
        email: [],
        message: []
      }
    };
  },
  watch: {
    name(newVal, oldVal) {
      console.log("name", newVal, oldVal);
      this.name = newVal;
      // validate new value
      this.errors.name = validator.validate("성함", this.name.trim());
    },
    email(newVal, oldVal) {
      console.log("email", newVal, oldVal);
      // validate new value
      this.email = newVal;
      this.errors.email = validator.validate("이메일", this.email.trim());
    },
    message(newVal, oldVal) {
      console.log("email", newVal, oldVal);
      // validate new value
      this.message = newVal;
      this.errors.message = validator.validate("본문", this.message.trim());
    }
  },
  methods: {
    sendEmail: function() {
      console.log("hi", this.name, this);
      //   this.errors.name = validator.validate("name", this.name);
      //   emailjs
      //     .sendForm(
      //       "gmail",
      //       "template_OXrECX91",
      //       e.target,
      //       "user_h0nO51xg6TSNC1YRhNCaK"
      //     )
      //     .then(
      //       (result) => {
      //         console.log("SUCCESS!", result.status, result.text);
      //       },
      //       (error) => {
      //         console.log("FAILED...", error);
      //       }
      //     );
    }
  }
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
      align-items: flex-end;
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 4px;
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
    .error {
      display: flex;
      font-size: 12px;
      padding: 4px 0 0;
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
