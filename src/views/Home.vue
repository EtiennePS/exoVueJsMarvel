<template>
  <div class="home">
    <span>The home page will probably be the characters list</span>
  </div>
  <br />
  <Paginate
    :perPage="50"
    :currentPage="10"
    :total="10050"
    :callback="callbackPaginate"
    :displayLength="3"
  />
  <div>
    <Spinner fill="orange" height="40px" dur="1.3s" />
    <Spinner fill="blue" height="30px" dur="0.9s" />
  </div>
</template>

<script>
import Paginate from "@/components/Paginate.vue";
import Spinner from "@/components/icons/Spinner.vue";

export default {
  name: "Home",
  components: {
    Paginate,
    Spinner
  },
  methods: {
    callbackPaginate(index) {
      console.log(index);
    }
  }
};
</script>
