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
      urls: [
        {
          type: this.string(null),
          url: this.string(null)
        }
      ],
      modified: this.attr(null),
      startYear: this.number(null),
      endYear: this.number(null),
      thumbnail: {
        path: this.string(null),
        extension: this.string(null)
      },
      comics: this.attr(null),
      stories: this.attr(null),
      events: this.attr(null),
      characters: this.attr(null),
      creators: this.attr(null),
      next: {
        resourceURI: this.string(null),
        name: this.string(null)
      },
      previous: {
        resourceURI: this.string(null),
        name: this.string(null)
      }
    };
  }
}
