<script>
import ComicService from "@/services/ComicService.js";
import EntityList from "@/components/EntityList.vue";

export default {
  name: "ComicsList",
  extends: EntityList,
  data() {
    return {
      service: new ComicService(),
      entityName: "Comic"
    };
  }
};
</script>
