import md5 from "js-md5";

export default class AbstractMarvelService {
  constructor() {
    if (this.constructor === AbstractMarvelService) {
      throw new TypeError(
        'Abstract class "AbstractMarvelService" cannot be instantiated directly'
      );
    }
  }

  extractResult(data) {
    return data.results ? data.results : data.result;
  }

  getConfig() {
    return {
      baseURL: "https://gateway.marvel.com:443/v1/public/",
      dataTransformer: ({ data }) => {
        return this.extractResult(data.data);
      }
    };
  }

  getAuthenticationParams() {
    var apiKey = process.env.VUE_APP_PUBLIC_API_KEY;
    var ts = Date.now;
    var hash = md5(ts + process.env.VUE_APP_PRIVATE_API_KEY + apiKey);
    return "?apikey=" + apiKey + "&ts=" + ts + "&hash=" + hash;
  }

  doRequest(url, entity, onSuccess, onFail, onDone) {
    entity
      .api()
      .get(url + this.getAuthenticationParams(), this.getConfig())
      .then(response => {
        var data = response.response.data.data;
        var result = this.extractResult(data);
        onSuccess(result, response.response.attributionText);
      })
      .catch(response => {
        var message = response.response.message
          ? response.response.message
          : "An errored occured, please try again later.";
        onFail(message);
      })
      .finally(() => onDone());
  }
}
