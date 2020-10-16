<template lang="pug">
.paginate
  p {{ entityName }} {{ startIndex }} to {{ endIndex }} of {{ total }}
  button(@click="$emit('page-change', 1)" v-if="!isFirstPage").chevron &lt;&lt;
  button(@click="previousPage" v-if="!isFirstPage").chevron &lt;
  button(v-for="i in totalList" :key="i.number" @click="$emit('page-change', i.number)" v-bind:class="[{ current: i.number == currentPage }]") {{ i.text }}
  button(@click="nextPage" v-if="!isLastPage").chevron &gt;
  button(@click="$emit('page-change', totalPage)" v-if="!isLastPage").chevron &gt;&gt;
</template>

<script>
export default {
  name: "Paginate",
  props: {
    currentPage: Number,
    perPage: Number,
    total: Number,
    displayLength: { type: Number, default: 3 },
    entityName: { type: String, default: "Element" }
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.perPage);
    },
    startIndex() {
      return (this.currentPage - 1) * this.perPage + 1;
    },
    endIndex() {
      if (this.isLastPage) {
        return (
          (this.total % this.perPage) +
          Math.floor(this.total / this.perPage) * this.perPage
        );
      } else {
        return this.startIndex + this.perPage;
      }
    },
    isFirstPage() {
      return this.currentPage === 1;
    },
    isLastPage() {
      return this.currentPage === this.totalPage;
    },
    firstList() {
      let indexList = [];
      let lastIndex = Math.min(
        this.displayLength,
        this.currentPage - this.displayLength - 1
      );
      for (let i = 1; i <= lastIndex; i++) {
        indexList.push(i);
      }
      return indexList;
    },
    lastList() {
      let indexList = [];
      let firstIndex = Math.max(
        this.totalPage - this.displayLength + 1,
        this.currentPage + this.displayLength,
        this.currentPageList[this.currentPageList.length - 1] + 1
      );
      for (let i = firstIndex; i <= this.totalPage; i++) {
        indexList.push(i);
      }
      return indexList;
    },
    currentPageList() {
      let indexList = [];
      let firstIndex = Math.max(1, this.currentPage - this.displayLength);
      let lastIndex = Math.min(
        this.totalPage,
        this.currentPage + this.displayLength
      );
      for (let i = firstIndex; i <= lastIndex; i++) {
        indexList.push(i);
      }
      return indexList;
    },
    totalList() {
      let firList = this.firstList;
      let midList = this.currentPageList;
      let lastList = this.lastList;
      let middle1 = Math.floor((firList[firList.length - 1] + midList[0]) / 2);
      let middle2 = Math.ceil((midList[midList.length - 1] + lastList[0]) / 2);
      let totalList = [];

      for (let i = 0; i < firList.length; i++) {
        totalList.push({ number: firList[i], text: firList[i] });
      }

      if (
        firList.length === this.displayLength &&
        firList[firList.length - 1] + 1 < midList[0]
      ) {
        totalList.push({ number: middle1, text: "..." });
      }

      for (let i = 0; i < midList.length; i++) {
        totalList.push({ number: midList[i], text: midList[i] });
      }

      if (
        lastList.length === this.displayLength &&
        midList[midList.length - 1] + 1 < lastList[0]
      ) {
        totalList.push({ number: middle2, text: "..." });
      }

      for (let i = 0; i < lastList.length; i++) {
        totalList.push({ number: lastList[i], text: lastList[i] });
      }
      return totalList;
    }
  },
  methods: {
    nextPage() {
      if (!this.isLastPage) {
        this.$emit("page-change", this.currentPage + 1);
      }
    },
    previousPage() {
      if (!this.isFirstPage) {
        this.$emit("page-change", this.currentPage - 1);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.paginate button {
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  border-left: 1px solid grey;
  width: 38px;
  height: 26px;
  text-align: center;
  vertical-align: middle;
}
button.current {
  font-weight: bold;
}
.paginate button:first-of-type {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.paginate button:last-of-type {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-right: 1px solid grey;
}
.paginate button.chevron,
.paginate button.chevron {
  font-size: 0.7em;
}
</style>
