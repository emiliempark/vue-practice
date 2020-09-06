<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-btn text>백천서당</v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn default text>
        <router-link to="/">Home</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/about">About</router-link>
      </v-btn>
      <v-btn small rounded depressed color="white">
        <router-link to="/contact">Contact</router-link>
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
