import { Model } from "@vuex-orm/core";
import Enum from "@/enums/EnumServices";

export default class Comic extends Model {
  static entity = Enum.COMICS;

  static fields() {
    return {
      id: this.attr(null),
      digitalId: this.attr(null),
      title: this.attr(null),
      issueNumber: this.attr(null),
      variantDescription: this.attr(null),
      description: this.attr(null),
      modified: this.attr(null),
      isbn: this.attr(null),
      upc: this.attr(null),
      diamondCode: this.attr(null),
      ean: this.attr(null),
      issn: this.attr(null),
      format: this.attr(null),
      pageCount: this.attr(null),
      textObjects: this.attr(null),
      resourceURI: this.attr(null),
      thumbnail: this.attr(null),
      images: this.attr(null),
      creators: this.attr(null),
      characters: this.attr(null),
      stories: this.attr(null),
      events: this.attr(null)
    };
  }
}
