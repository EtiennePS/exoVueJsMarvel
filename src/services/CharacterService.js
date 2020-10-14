import AbstractMarvelService from "@/services/AbstractMarvelService";
import Character from "@/models/Character";

const CHARACTERS = "characters";

export default class CharacterService extends AbstractMarvelService {
  static entity = CHARACTERS;

  getList(onSuccess, onFail, onDone, options) {
    this.doRequest(CHARACTERS, Character, onSuccess, onFail, onDone, options);
  }

  getEntity(onSuccess, onFail, onDone, id, options) {
    this.doRequest(
      `${CHARACTERS}/` + id,
      Character,
      onSuccess,
      onFail,
      onDone,
      options
    );
  }
}
