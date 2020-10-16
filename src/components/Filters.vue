<template lang="pug">
form(v-on:submit.prevent="onSubmit")
  label {{ getName }}
  input(type="text" :name="getName") 
  label {{ getNameStartWith }}
  input(type="text" :name="getNameStartWith") 
  label Order by
  select(name="orderBy")
    option
    option(v-for="option in orderByValues" :value="option.value") {{ option.text }}
  slot
  button(type="submit") Validate
</template>

<script>
export default {
  name: "Filters",
  props: {
    isName: Boolean,
    orderByValues: Array
  },
  computed: {
    getName() {
      return this.isName ? "name" : "title";
    },
    getNameStartWith() {
      return this.getName + "StartsWith";
    }
  },
  methods: {
    onSubmit(event) {
      let data = new Object();
      event.target.elements.forEach(function(e) {
        if (e.name && e.value) {
          data[e.name] = e.value;
        }
      });
      this.$emit("filters-submit", data);
    }
  }
};
</script>
