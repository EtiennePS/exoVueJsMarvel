<template lang="pug">
EntityDetail(
  :serviceName="serviceName"
  :entityName="entityName"
  :entityId="entityId"
  :passedEntity="passedEntity"
)
  template(v-slot="{entity}")
    section(:class="[{ short: isShort, notShort: !isShort }]").entityData
      img(
        v-if="entity.thumbnail"
        :src="entity.thumbnail.path + '.' + entity.thumbnail.extension"
      )#thumbnail
      p#title
        span {{ entity.fullName }}
    section(v-if="!isShort")#secondaryData
      h2 To do
      
</template>

<script>
import EntityDetail from "@/components/EntityDetail";
import Enum from "@/enums/EnumServices";
import detailMixin from "@/mixins/detailMixin";

export default {
  name: "CreatorDetail",
  components: { EntityDetail },
  mixins: [detailMixin],
  data() {
    return {
      serviceName: Enum.CREATORS,
      entityName: "Creator"
    };
  }
};
</script>

<style scoped lang="scss">
.notShort #mainData {
  display: flex;
  align-items: center;
  justify-content: center;
}
.notShort img,
#secondaryData img {
  display: inline-block;
}
.notShort #title {
  font-weight: bold;
}
.notShort #title span,
.notShort #thumbnail {
  height: 300px;
  font-size: 2em;
}
#secondaryData h2 {
  font-weight: bold;
  margin: 3px;
}
</style>
