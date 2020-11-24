<template>
  <v-app>
    <v-main class="general-color">
      <router-view></router-view>
    </v-main>
    <v-footer app>
      <v-container>
        <v-row align="center" justify="center">
          <p class="footer-p-margin">Mantido e feito com</p>
          <v-icon color="red">mdi-heart-outline</v-icon>
          <p class="footer-p-margin">Por Mufolk</p>
          <p class="footer-p-margin">CopytRight @2020</p>
          <img src="./assets/footer-logo.png" class="footer-img" />
          <p class="footer-p-margin">, All rights reserved</p>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script src="./App.js"></script>
<style src="./App.css"></style>
