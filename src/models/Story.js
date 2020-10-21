import { Model } from "@vuex-orm/core";
import Enum from "@/enums/EnumServices";

export default class Story extends Model {
  static entity = Enum.STORIES;

  static fields() {
    return {
      id: this.number(null),
      title: this.string(null),
      description: this.string(null),
      resourceURI: this.string(null),
      type: this.string(null),
      modified: this.attr(null),
      thumbnail: this.attr(null),
      comics: this.attr(null),
      series: this.attr(null),
      characters: this.attr(null),
      creators: this.attr(null),
      events: this.attr(null),
      originalissue: this.attr(null)
    };
  }
}
