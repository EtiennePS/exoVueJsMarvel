import { Model } from "@vuex-orm/core";
import Enum from "@/enums/EnumServices";

export default class Series extends Model {
  static entity = Enum.SERIES;

  static fields() {
    return {
      id: this.number(null),
      title: this.string(null),
      description: this.string(null),
      resourceURI: this.string(null),
      urls: this.attr(null),
      modified: this.attr(null),
      startYear: this.number(null),
      endYear: this.number(null),
      thumbnail: this.attr(null),
      comics: this.attr(null),
      stories: this.attr(null),
      events: this.attr(null),
      characters: this.attr(null),
      creators: this.attr(null),
      next: this.attr(null),
      previous: this.attr(null),
    };
  }
}
