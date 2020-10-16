import AbstractMarvelService from "@/services/AbstractMarvelService";
import { Character, Comic, Creator, Event, Series, Story } from "@/models";
import Enum from "@/enums/EnumServices";

const SERVICES = {
  characters: {
    name: Enum.CHARACTERS,
    model: Character
  },
  comics: {
    name: Enum.COMICS,
    model: Comic
  },
  creators: {
    name: Enum.CREATORS,
    model: Creator
  },
  events: {
    name: Enum.EVENTS,
    model: Event
  },
  series: {
    name: Enum.SERIES,
    model: Series
  },
  story: {
    name: Enum.STORIES,
    model: Story
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
