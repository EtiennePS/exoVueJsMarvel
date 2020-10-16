import { Model } from "@vuex-orm/core";
import Enum from "@/enums/EnumServices";

export default class Character extends Model {
  static entity = Enum.CHARACTERS;

  static fields() {
    //console.error(Enum.CHARACTERS);
    return {
      id: this.attr(null),
      name: this.attr(null),
      description: this.attr(null),
      modified: this.attr(null),
      thumbnail: this.attr(null),
      resourceURI: this.attr(null),
      comics: this.attr(null),
      series: this.attr(null),
      stories: this.attr(null),
      events: this.attr(null),
      urls: this.attr(null)
    };
  }
}
