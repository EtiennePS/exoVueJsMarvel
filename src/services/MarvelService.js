import AbstractMarvelService from "@/services/AbstractMarvelService";
import Character from "@/models/Character";
import Comic from "@/models/Comic";

const SERVICES = {
  characters: {
    name: "characters",
    model: Character
  },
  comics: {
    name: "comics",
    model: Comic
  }
};

export default class MarvelService extends AbstractMarvelService {
  constructor(service) {
    super();
    if (!(service in SERVICES)) {
      throw new TypeError(`The service ${service} is not defined`);
    }
    this.service = SERVICES[service];
  }

  getList(onSuccess, onFail, onDone, options) {
    this.doRequest(
      this.service.name,
      this.service.model,
      onSuccess,
      onFail,
      onDone,
      options
    );
  }

  getEntity(onSuccess, onFail, onDone, id, options) {
    this.doRequest(
      `${this.service.name}/` + id,
      this.service.model,
      onSuccess,
      onFail,
      onDone,
      options
    );
  }
}
