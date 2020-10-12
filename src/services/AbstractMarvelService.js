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
  getConfig(page = undefined) {
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
        limit: page && page.limit ? page.limit : null,
        offset: page && page.offset ? page.offset : null,
        orderBy: page && page.orderBy ? page.orderBy : null
      },
      dataTransformer: ({ data }) => {
        return this.extractResult(data.data);
      }
    };
  }

  doRequest(url, entity, onSuccess, onFail, onDone, page) {
    entity
      .api()
      .get(url, this.getConfig(page))
      .then(response => {
        onSuccess(
          response.response.data.data,
          response.response.data.attributionText
        );
      })
      .catch(error => {
        let message =
          error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : "An errored occured, please try again later.";
        onFail(message);
      })
      .finally(() => onDone());
  }
}
