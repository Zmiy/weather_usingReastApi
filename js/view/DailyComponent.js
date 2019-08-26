class DailyComponent {

    constructor(day) {
        // TODO: handle daily view (enter to main.innerHTML)
        let el = document.getElementById("weaserTableBody");
        if (!el) {
            return; //ToDo make new function for create a table element
        }
        el.innerHTML += "<tr>" +
            " <td>" + day.currentDate.toLocaleDateString("he-il") + "</td>" + "<td>" + day.dayOfWeek + "</td>" +
            " <td>" + day.summary + " " + this.iconName2Html(day.icon) + "</td>" + "<td>" + day.minTemp + "</td>" + "<td>" + day.maxTemp + "</td>" + "<td>" + day.wind + "</td>" +
            "</tr>";

    }
    iconName2Html(iconName) {
        //clear-day, , , snow, , , , , partly-cloudy-day, or partly-cloudy-night
        let result = "";
        switch (iconName) {
            case "clear-day":
                result = "<i class=\"fas fa-sun\"></i>";
                break;
            case "clear-night":
                result = "<i class=\"fas fa-moon\"></i>";
                break;
            case "rain":
                result = "<i class=\"fas fa-umbrella\"></i>";
                break;
            case "snow":
                result = "<i class=\"far fa-snowflake\"></i>";
                break;
            case "sleet":
                result = "";
                break;
            case "wind":
                result = "<i class=\"far fa-wind\"></i>";
                break;
            case "fog":
                result = "<i class=\"far fa-smog\"></i>";
                break;
            case "partly-cloudy-day":
                result = "<i class=\"fas fa-cloud-sun\"></i>";
                break;
            case "partly-cloudy-night":
                result = "<i class=\"far fa-cloud-moon\"></i>";
                break;

            default:

                break;
        }
        return result;
    }

}