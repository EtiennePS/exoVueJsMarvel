import AbstractMarvelService from "@/services/AbstractMarvelService";
import Comics from "@/models/Comic";

const COMICS = "comics";

export default class ComicService extends AbstractMarvelService {
  static entity = COMICS;

  getList(onSuccess, onFail, onDone, options) {
    this.doRequest(COMICS, Comics, onSuccess, onFail, onDone, options);
  }

  getEntity(onSuccess, onFail, onDone, id, options) {
    this.doRequest(
      `${COMICS}/` + id,
      Comics,
      onSuccess,
      onFail,
      onDone,
      options
    );
  }
}
