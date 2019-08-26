class WeatherComponent{
          constructor(week){
                    let main = document.getElementById("main");
                    for (let i = 0; i < week.length; i++) {
                              new DailyComponent(week[i]);
                    }
          }
}