class DailyWeather {
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
          constructor(data) {
                    //this.date = new Date(data.time * 1000);
                    //this.tempMax = data.temperatureMax;
                    //this.tempMin = data.temperatureMin;
                    this.currentDate = new Date(data.time*1000);
                    this.dayOfWeek = this.days[this.currentDate.getDay()];
                    this.summary = data.summary;
                    this.icon = data.icon;
                    this.minTemp = data.temperatureMin;
                    this.maxTemp = data.temperatureMax;
                    this.wind = data.windSpeed;
                    this.iconName = data.icon? data.icon:null;
          }
}