<template>
  <HelloWorld name="Johannes" />

  <button @click="changeLanguage('en')">English</button>
  <button @click="changeLanguage('de')">Deutsch</button>
  <button @click="changeLanguage('fr')">Français</button>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "HelloPage",
  components: {
    HelloWorld,
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style></style>
