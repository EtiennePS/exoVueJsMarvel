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
        :src="entity.thumbnail.path + '.' + entity.thumbnail.extension"
      )#thumbnail
      p#title
        span {{ entity.title }}
    section(v-if="!isShort")
      h2 Characteristics
      p Description :
        span {{ entity.description }}
      p Variant description :
        span {{ entity.variantDescription }}
      p Format :
        span {{ entity.format }}
      p Page count :
        span {{ entity.pageCount }}
      p Issue number :
        span {{ entity.issueNumber }}
      p Modified :
        span {{ entity.modified }}
      p Digital id :
        span {{ entity.digitalId }}
      p ISBN :
        span {{ entity.isbn }}
      p UPC :
        span {{ entity.upc }}
      p Diamond code :
        span {{ entity.diamondCode }}
      p EAN :
        span {{ entity.ean }}
      p ISSN :
        span {{ entity.issn }}
      p Link :
        span {{ entity.resourceURI }}
      h2 Images
      div(v-for="i in entity.images")
        img(:src="i.path + '.' + i.extension")
      h2(v-if="entity.characters.available > 0") Characters
      div(v-for="c in entity.characters.items" :key="extractId(c.resourceURI)")
        router-link(:to="{ name: 'CharacterDetail', params: { entityId: extractId(c.resourceURI) }}")
          CharacterDetail(:entityId="extractId(c.resourceURI)" :isShort="true")

</template>

<script>
import EntityDetail from "@/components/EntityDetail";
import CharacterDetail from "@/components/CharacterDetail";
import Enum from "@/enums/EnumServices";
import detailMixin from "@/mixins/detailMixin";

export default {
  name: "ComicDetail",
  components: { EntityDetail, CharacterDetail },
  mixins: [detailMixin],
  data() {
    return {
      serviceName: Enum.COMICS,
      entityName: "Comic"
    };
  },
  methods: {
    extractId(url) {
      return url.substring(url.lastIndexOf("/") + 1);
    }
  }
};
</script>

<style scoped lang="scss"></style>
