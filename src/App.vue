<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link to="/">백천서당</router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn text>
        <router-link to="/about">학술활동/강좌</router-link>
      </v-btn>
      <v-btn small rounded depressed color="white">
        <router-link to="/contact">강의문의</router-link>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
