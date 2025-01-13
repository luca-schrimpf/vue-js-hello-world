<template>
  <div class="hello">
    <h1>{{ $t("message.helloWorld") }}</h1>
    <h3>{{ $t("message.hello") }} {{ name }}</h3>
    <Entwickler />
  </div>
</template>

<script>
import Entwickler from "./Entwickler.vue";

export default {
  name: "HelloWorld",
  props: {
    name: String,
  },
  components: {
    Entwickler,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
