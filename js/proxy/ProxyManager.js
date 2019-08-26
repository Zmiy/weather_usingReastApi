class ProxyManager {
          BASE_URL = "https://api.darksky.net/forecast/aa371eaf6b8af33b1f4f775960565a46/";
          static get instance() {
                    if (!ProxyManager._instance) {
                              ProxyManager._instance = new ProxyManager();
                    }
                    return ProxyManager._instance;
          }

          getWeather(latitude, longitude, successFunc, errorFunc) {
                    new ApiRequest("GET", this.BASE_URL + latitude + "," + longitude, successFunc, errorFunc);
          }


}