import AbstractMarvelService from "@/services/AbstractMarvelService.js";
import Comic from "@/models/Comic.js";

export default class ComicService extends AbstractMarvelService {
  static entity = "comics";

  getList(onSuccess, onFail, onDone, options) {
    this.doRequest("comics", Comic, onSuccess, onFail, onDone, options);
  }

  getEntity(onSuccess, onFail, onDone, id, options) {
    this.doRequest("comics/" + id, Comic, onSuccess, onFail, onDone, options);
  }
}
