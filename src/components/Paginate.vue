<template lang="pug">
.paginate
  p {{ entityName }} {{ startIndex }} to {{ endIndex }} of {{ total }}
  button(@click="updatePage(1)").chevron &lt;&lt;
  button(@click="previousPage").chevron &lt;
  button(v-for="i in totalList" :key="i.number" @click="updatePage(i.number)" v-bind:class="[{ current: i.number == currentPage }]") {{ i.text }}
  button(@click="nextPage").chevron &gt;
  button(@click="updatePage(totalPage)").chevron &gt;&gt;
</template>

<script>
export default {
  name: "Paginate",
  props: {
    currentPage: Number,
    perPage: Number,
    total: Number,
    callback: Function,
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
        return this.total % this.perPage;
      } else {
        return this.startIndex + this.perPage;
      }
    },
    isFirstPage() {
      return this.currentPage == 1;
    },
    isLastPage() {
      return this.currentPage == this.totalPage;
    },
    firstList() {
      var indexList = [];
      var lastIndex = Math.min(
        this.displayLength,
        this.currentPage - this.displayLength - 1
      );
      for (var i = 1; i <= lastIndex; i++) {
        indexList.push(i);
      }
      return indexList;
    },
    lastList() {
      var indexList = [];
      var firstIndex = Math.max(
        this.totalPage - this.displayLength + 1,
        this.currentPage + this.displayLength
      );
      for (var i = firstIndex; i <= this.totalPage; i++) {
        indexList.push(i);
      }
      return indexList;
    },
    currentPageList() {
      var indexList = [];
      var firstIndex = Math.max(1, this.currentPage - this.displayLength);
      var lastIndex = Math.min(
        this.totalPage,
        this.currentPage + this.displayLength
      );
      for (var i = firstIndex; i <= lastIndex; i++) {
        indexList.push(i);
      }
      return indexList;
    },
    totalList() {
      var firList = this.firstList;
      var midList = this.currentPageList;
      var lastList = this.lastList;
      var middle1 = Math.floor((firList[firList.length - 1] + midList[0]) / 2);
      var middle2 = Math.ceil((midList[midList.length - 1] + lastList[0]) / 2);
      var totalList = [];

      for (var i = 0; i < firList.length; i++) {
        totalList.push({ number: firList[i], text: firList[i] });
      }

      if (firList.length == this.displayLength) {
        totalList.push({ number: middle1, text: "..." });
      }

      for (i = 0; i < midList.length; i++) {
        totalList.push({ number: midList[i], text: midList[i] });
      }

      if (lastList.length == this.displayLength) {
        totalList.push({ number: middle2, text: "..." });
      }

      for (i = 0; i < lastList.length; i++) {
        totalList.push({ number: lastList[i], text: lastList[i] });
      }
      return totalList;
    }
  },
  methods: {
    updatePage(index) {
      this.callback(index);
    },
    nextPage() {
      if (!this.isLastPage) {
        this.updatePage(this.currentPage + 1);
      }
    },
    previousPage() {
      if (!this.isFirstPage) {
        this.updatePage(this.currentPage - 1);
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
  width: 35px;
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
