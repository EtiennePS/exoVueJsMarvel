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

  doRequest(url, entity, onSuccess, onFail, onDone, page) {
    url += this.getAuthenticationParams();
    if (page && page.limit) url += "&limit=" + page.limit;
    if (page && page.offset) url += "&offset=" + page.offset;
    if (page && page.orderBy) url += "&orderBy=" + page.orderBy;

    entity
      .api()
      .get(url, this.getConfig())
      .then(response => {
        onSuccess(
          response.response.data.data,
          response.response.data.attributionText
        );
      })
      .catch(error => {
        var message =
          error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : "An errored occured, please try again later.";
        onFail(message);
      })
      .finally(() => onDone());
  }
}
