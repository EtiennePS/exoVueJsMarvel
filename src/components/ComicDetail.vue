<template lang="pug">
EntityDetail(
  :serviceName="serviceName"
  :entityName="entityName"
  :entityId="entityId"
  :passedEntity="passedEntity"
)
  template(v-slot="{entity}")
    section(id="mainData" v-bind:class="[{ short: isShort, notShort: !isShort }]")
      img(
        :src="entity.thumbnail.path + '.' + entity.thumbnail.extension"
        id="thumbnail"
      )
      p(id="title")
        span {{ entity.title }}
    section(v-if="!isShort")
      label Description :
      p {{ entity.description }}
</template>

<script>
import EntityDetail from "@/components/EntityDetail";
import Enum from "@/enums/EnumServices";
import detailMixin from "@/mixins/detailMixin";

export default {
  name: "ComicDetail",
  components: { EntityDetail },
  mixins: [detailMixin],
  data() {
    return {
      serviceName: Enum.COMICS,
      entityName: "Comic"
    };
  }
};
</script>

<style scoped lang="scss">
#mainData {
  display: flex;
  align-items: center;
  justify-content: center;
}
#title {
  margin-left: 10px;
  font-weight: bold;
}
#title span {
  vertical-align: middle;
  display: table-cell;
}
.notShort #title span,
.notShort #thumbnail {
  height: 300px;
  font-size: 2em;
}
.short #title span,
.short #thumbnail {
  height: 150px;
  font-size: 1.2em;
}
</style>
