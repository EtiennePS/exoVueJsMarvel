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
  label(for="limit") Result per page
  select(name="limit")
    option(v-for="i in [10,20,50,100]" :key="i" :value="i" :selected="i===initialForm.limit") {{ i }}
  button(type="submit") Validate
</template>

<script>
export default {
  name: "Filters",
  props: {
    isName: Boolean,
    orderByValues: Array,
    initialForm: Object
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
      data.limit = parseInt(data.limit);
      this.$emit("filters-submit", data);
    }
  }
};
</script>
