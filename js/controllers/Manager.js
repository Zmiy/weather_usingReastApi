class Manager {
    LATITUDE = "32.0133591";
    LONGITUDE = "34.7304079";
    
    static get instance(){
        if (!Manager._instance) {
            Manager._instance = new Manager();
        }
        return Manager._instance;
    }
    initProject() {
        ProxyManager.instance.getWeather(this.LATITUDE, this.LONGITUDE, 
        (data)=> this.onGetWeather(data),  ()=> this.onError());
    }

    onGetWeather(data) {
        let daily = data.daily.data;
        this.days = [];
        for (let i=0; i < daily.length; i++) {
            this.days.push(new DailyWeather(daily[i]));
        }
        this.pageView = new WeatherComponent(this.days);
        
    }
    onError(){

    }
}