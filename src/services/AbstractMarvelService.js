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

  // TODO MEttre des arguments de taille indéfinie ici
  getConfig(options = undefined) {
    const ts = Date.now();

    return {
      baseURL: "https://gateway.marvel.com:443/v1/public/",
      params: {
        apikey: process.env.VUE_APP_PUBLIC_API_KEY,
        ts: ts,
        hash: md5(
          ts +
            process.env.VUE_APP_PRIVATE_API_KEY +
            process.env.VUE_APP_PUBLIC_API_KEY
        ),
        ...options
      },
      dataTransformer: ({ data }) => {
        return this.extractResult(data.data);
      }
    };
  }

  doRequest(url, entity, onSuccess, onFail, onDone, options) {
    entity
      .api()
      .get(url, this.getConfig(options))
      .then(response => {
        onSuccess(
          response.response.data.data,
          response.response.data.attributionText
        );
      })
      .catch(error => {
        let message = "An errored occured, please try again later.";
        let code = null;
        if (error.response && error.response.data) {
          if (error.response.data.message)
            message = error.response.data.message;
          else if (error.response.data.status)
            message = error.response.data.message;
          if (error.response.data.code) code = error.response.data.code;
        }
        onFail(message, code);
      })
      .finally(() => onDone());
  }
}
