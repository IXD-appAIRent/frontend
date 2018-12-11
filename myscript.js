function formatDate(dateObj, format) {
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var curr_date = dateObj.getDate();
  var curr_month = dateObj.getMonth();
  curr_month = curr_month + 1;
  var curr_year = dateObj.getFullYear();
  var curr_min = dateObj.getMinutes();
  var curr_hr = dateObj.getHours();
  var curr_sc = dateObj.getSeconds();
  if (curr_month.toString().length == 1)
    curr_month = '0' + curr_month;
  if (curr_date.toString().length == 1)
    curr_date = '0' + curr_date;
  if (curr_hr.toString().length == 1)
    curr_hr = '0' + curr_hr;
  if (curr_min.toString().length == 1)
    curr_min = '0' + curr_min;

  if (format == 1) //dd-mm-yyyy
  {
    return curr_date + "-" + curr_month + "-" + curr_year;
  } else if (format == 2) //yyyy-mm-dd
  {
    return curr_year + "-" + curr_month + "-" + curr_date;
  } else if (format == 3) //dd/mm/yyyy
  {
    return curr_date + "/" + curr_month + "/" + curr_year;
  } else if (format == 4) // MM/dd/yyyy HH:mm:ss
  {
    return curr_month + "/" + curr_date + "/" + curr_year + " " + curr_hr + ":" + curr_min + ":" + curr_sc;
  }
}



var jsonfile = {
  "jsonarray": [{
      "PM25": "0.07",
      "latitude": "52.3600",
      "PM10": "0.07",
      "id": 2439382533,
      "timestamp": "2018-12-05 21:05:03",
      "longitude": "13.1340"
    },
    {
      "PM25": "0.07",
      "latitude": "52.4780",
      "PM10": "0.07",
      "id": 2439387353,
      "timestamp": "2018-12-05 21:06:06",
      "longitude": "13.5240"
    },
    {
      "PM25": "0.40",
      "latitude": "52.5580",
      "PM10": "0.40",
      "id": 2439375148,
      "timestamp": "2018-12-05 21:03:23",
      "longitude": "13.4960"
    },
    {
      "PM25": "0.37",
      "latitude": "52.4780",
      "PM10": "0.43",
      "id": 2439376337,
      "timestamp": "2018-12-05 21:03:40",
      "longitude": "13.5240"
    },
    {
      "PM25": "0.70",
      "latitude": "52.5200",
      "PM10": "0.80",
      "id": 2439375107,
      "timestamp": "2018-12-05 21:03:23",
      "longitude": "13.4500"
    },
    {
      "PM25": "0.80",
      "latitude": "52.5200",
      "PM10": "0.80",
      "id": 2439384300,
      "timestamp": "2018-12-05 21:05:28",
      "longitude": "13.4500"
    }, {
      "PM25": "0.80",
      "latitude": "52.5200",
      "PM10": "0.90",
      "id": 2439389182,
      "timestamp": "2018-12-05 21:06:30",
      "longitude": "13.4500"
    },
    {
      "PM25": "0.90",
      "latitude": "52.5200",
      "PM10": "1.00",
      "id": 2439393699,
      "timestamp": "2018-12-05 21:07:33",
      "longitude": "13.4500"
    },
    {
      "PM25": "0.93",
      "latitude": "52.5040",
      "PM10": "1.20",
      "id": 2439387740,
      "timestamp": "2018-12-05 21:06:11",
      "longitude": "13.4180"
    }, {
      "PM25": "1.13",
      "latitude": "52.5580",
      "PM10": "1.53",
      "id": 2439386235,
      "timestamp": "2018-12-05 21:05:51",
      "longitude": "13.4960"
    },
    {
      "PM25": "0.90",
      "latitude": "52.5660",
      "PM10": "1.90",
      "id": 2439387135,
      "timestamp": "2018-12-05 21:06:03",
      "longitude": "13.3480"
    },
    {
      "PM25": "1.65",
      "latitude": "52.5240",
      "PM10": "2.0",
      "id": 2439388029,
      "timestamp": "2018-12-05 21:06:15",
      "longitude": "13.4600"
    },
    {
      "PM25": "1.92",
      "latitude": "52.5180",
      "PM10": "2.02",
      "id": 2439376066,
      "timestamp": "2018-12-05 21:03:35",
      "longitude": "13.4520"
    }, {
      "PM25": "2.25",
      "latitude": "52.5040",
      "PM10": "2.58",
      "id": 2439376798,
      "timestamp": "2018-12-05 21:03:45",
      "longitude": "13.4180"
    },
    {
      "PM25": "1.60",
      "latitude": "52.4160",
      "PM10": "2.70",
      "id": 2439376960,
      "timestamp": "2018-12-05 21:03:47",
      "longitude": "13.5660"
    }, {
      "PM25": "1.55",
      "latitude": "52.5200",
      "PM10": "2.75",
      "id": 2439379971,
      "timestamp": "2018-12-05 21:04:26",
      "longitude": "13.4500"
    },
    {
      "PM25": "2.52",
      "latitude": "52.5840",
      "PM10": "3.58",
      "id": 2439382582,
      "timestamp": "2018-12-05 21:05:04",
      "longitude": "13.3000"
    }, {
      "PM25": "1.42",
      "latitude": "52.3420",
      "PM10": "3.62",
      "id": 2439390803,
      "timestamp": "2018-12-05 21:06:50",
      "longitude": "13.1100"
    },
    {
      "PM25": "1.70",
      "latitude": "52.5660",
      "PM10": "3.73",
      "id": 2439376152,
      "timestamp": "2018-12-05 21:03:36",
      "longitude": "13.3480"
    }, {
      "PM25": "2.00",
      "latitude": "52.5120",
      "PM10": "3.90",
      "id": 2439389013,
      "timestamp": "2018-12-05 21:06:28",
      "longitude": "13.4860"
    }
  ]

};

var labels = jsonfile.jsonarray.map(function(e) {
  return e.id;
});
var pmzehn = jsonfile.jsonarray.map(function(e) {
  return e.PM10;
});
var pmzwei = jsonfile.jsonarray.map(function(e) {
  return e.PM25;
});
var lon = jsonfile.jsonarray.map(function(e) {
  return e.longitude;
});
var lat = jsonfile.jsonarray.map(function(e) {
  return e.latitude;
});

// var dataset = [
//   {label: "PM10", data: pmzehn},
//   {label:"PM2.5", data: pmzwei},
//   {label:"longitude", data: lon},
//   {label:"latitude", data: lat},
// ]

var dataset = pmzehn;


var ctxJSON = canvas.getContext('2d');
var configJSON = {
  type: 'bar',
  data: {
     labels: labels,
     datasets: [{
        label: 'Graph Line',
        data: dataset,
        backgroundColor: 'rgba(0, 119, 204, 0.3)'
     }]
  }
};

var chartJSON = new Chart(ctxJSON, configJSON);



	var mymap = L.map('mapid').setView([52.4949,13.4052],11);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibGlsbGlwaWxsaSIsImEiOiJjanBjc3J3ZmozMG55M3dwaHFpcmFlZDNoIn0.Eh9Spcc3_PNF72jAYeGTmQ', {
    minZoom: 11,
		maxZoom: 13,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.light' //fuer satelit: mapbox.satellite
	}).addTo(mymap);



  function getColor(d) {
    return d <= 4 ? '#a6611a' :
           d <= 8   ? '#dfc27d' :
           d <= 12   ? '#80cdc1' :
                      '#f5f5f5';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.cartodb_id),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

L.geoJson(bezirke, {style: style}).addTo(mymap);

/* var geojson;

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

geojson = L.geoJson(bezirke, {
    style: style
    ,onEachFeature: onEachFeature
}).addTo(mymap); */


// finding location on mobile
//map.locate({setView: true, maxZoom: 11}); //for mobile locating
/*function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);*/


  var marker = L.marker([52.5, 13.40]).addTo(mymap);

  var circle = L.circle([52.4, 13.403], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(mymap);


  var sensorloc = jsonfile.jsonarray.map(function(e) {
    L.marker([e.latitude, e.longitude]).addTo(mymap);
  });


  marker.bindPopup("<b>Luftverschmutzung</b><br>gefääährlich!").openPopup();
  circle.bindPopup("I am a circle.");
  polygon.bindPopup("I am a polygon.");

  var popup = L.popup()
    .setLatLng([52.4, 13.5])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

    var popupzwei = L.popup();

    function onMapClick(e) {
        popupzwei
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mymap);
    }

    mymap.on('click', onMapClick);

    var LeafIcon = L.Icon.extend({
        options: {
            shadowUrl: 'leaf-shadow.png',
            iconSize:     [38, 38],
            shadowSize:   [30, 30],
            iconAnchor:   [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor:  [-3, -76]
        }
    });

    var greenIcon = new LeafIcon({iconUrl: 'testButton.png'}),
        redIcon = new LeafIcon({iconUrl: 'Fotos/kimono.jpg'}),
        orangeIcon = new LeafIcon({iconUrl: 'Fotos/foto1.jpg'});



L.marker([52.35, 13.6], {icon: greenIcon}).addTo(mymap);
L.marker([52.55, 13.6], {icon: redIcon}).addTo(mymap).bindPopup("I am a red leaf.");
L.marker([52.55, 13.2], {icon: orangeIcon}).addTo(mymap).bindPopup("I am an orange leaf.");

new Chart(document.getElementById("bubble-chart"), {
    type: 'bubble',
    data: {
      labels: "Africa",
      datasets: [
        {
          label: ["China"],
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
          data: [{
            x: 21269017,
            y: 5.245,
            r: 15
          }]
        }, {
          label: ["Denmark"],
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          data: [{
            x: 258702,
            y: 7.526,
            r: 10
          }]
        }, {
          label: ["Germany"],
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#000",
          data: [{
            x: 3979083,
            y: 6.994,
            r: 15
          }]
        }, {
          label: ["Japan"],
          backgroundColor: "rgba(193,46,12,0.2)",
          borderColor: "rgba(193,46,12,1)",
          data: [{
            x: 4931877,
            y: 5.921,
            r: 15
          }]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }, scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Happiness"
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: "GDP (PPP)"
          }
        }]
      }
    }
});

new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "1950",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [8.77,55.61,21.69,6.62,6.82]
        }, {
          label: "2050",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          data: [25.48,54.16,7.61,8.06,4.45]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Distribution in % of world population'
      }
    }
});
