import md5 from "js-md5";

export default class AbstractMarvelService {
  constructor() {
    if (this.constructor === AbstractMarvelService) {
      throw new TypeError(
        'Abstract class "AbstractMarvelService" cannot be instantiated directly'
      );
    }
  }

  getConfig() {
    return {
      baseURL: "https://gateway.marvel.com:443/v1/public/",
      dataKey: "data.data.results"
    };
  }

  getAuthenticationParams() {
    var apiKey = process.env.VUE_APP_PUBLIC_API_KEY;
    var ts = Date.now;
    var hash = md5(ts + process.env.VUE_APP_PRIVATE_API_KEY + apiKey);
    return "?apikey=" + apiKey + "&ts=" + ts + "&hash=" + hash;
  }

  handleResponse(url, store, onSuccess, onFail, onDone) {
    store
      .get(url + this.getAuthenticationParams(), this.getConfig())
      .then(response => {
        var data = response.response.data.data;
        var result = data.results ? data.results : data.result;
        onSuccess(result, response.response.attributionText);
      })
      .catch(response => {
        onFail(response.response.message);
      })
      .finally(() => onDone());
  }
}
