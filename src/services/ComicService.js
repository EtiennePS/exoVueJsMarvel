import AbstractMarvelService from "@/services/AbstractMarvelService.js";
import Comic from "@/models/Comic.js";

export default class ComicService extends AbstractMarvelService {
  static entity = "comics";

  async getAllComics(onSuccess, onFail, onDone) {
    this.handleResponse("comics", Comic.api(), onSuccess, onFail, onDone);
  }
}
