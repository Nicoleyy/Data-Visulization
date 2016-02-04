var chartDefaultOpt = {
    "type": "serial",
    "theme": "light",
    "marginRight": 40,
    "marginLeft": 40,
    "autoMarginOffset": 20,
    "dataDateFormat": "YYYY-MM-DD",
    "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth":true
    }],
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
    "graphs": [{
        "id": "g1",
        "balloon":{
          "drop":true,
          "adjustBorderColor":false,
          "color":"#ffffff"
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value",
        "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
    }],
    "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis":false,
        "offset":30,
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount":true,
        "color":"#AAAAAA"
    },
    "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha":1,
        "cursorColor":"#258cbb",
        "limitToGraph":"g1",
        "valueLineAlpha":0.2
    },
    "valueScrollbar":{
        "oppositeAxis":false,
        "offset":50,
        "scrollbarHeight":10
    },
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true
    },
    "export": {
        "enabled": true
    }
};
var themeProperties = [{
    "img": "./css/images/theme_light.png",
    "alt": "theme_light",
    "theme": "light",
    "data_css": "width: 100%;height: 800px;font-size: 11px;"
},{
    "img": "./css/images/theme_dark.png",
    "alt": "theme_dark",
    "theme": "dark",
    "data_css": "background: #3f3f4f;color:#ffffff;"
},{
    "img": "./css/images/theme_chalk.png",
    "alt": "theme_chalk",
    "theme": "chalk",
    "data_css": "background: #282828 url('css/images/bg.jpg');color: #fff;"
},{
    "img": "./css/images/theme_pattern.png",
    "alt": "theme_pattern",
    "theme": "patterns",
    "data_css": "width: 100%;height: 800px;font-size: 11px;"
},{
    "img": "./css/images/theme_none.png",
    "alt": "theme_none",
    "theme": "none",
    "data_css": ""
}];
var chartTypes = [{
    "type": "column",
    "img": "./css/images/ColumnChart.jpg",
    "alt": "Column Chart",
    "Opt": {
        "type": "serial",
      "theme": "light",
      "valueAxes": [ {
        "gridColor": "#FFFFFF",
        "gridAlpha": 0.2,
        "dashLength": 0
      } ],
      "gridAboveGraphs": true,
      "startDuration": 1,
      "graphs": [ {
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "visits"
      } ],
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "country",
      "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
        "tickPosition": "start",
        "tickLength": 20
      },
      "export": {
        "enabled": true
      }
    }
},{
    "type": "lineArea",
    "img": "./css/images/DataBasedData.jpg",
    "alt": "Data Based Data"
},{
    "type": "stepLine",
    "img": "./css/images/StepLineChart.jpg",
    "alt": "Step Line Chart"
},{
    "type": "dount",
    "img": "./css/images/DonutChart.jpg",
    "alt": "Dount Chart"
},{
    "type": "bubble",
    "img": "./css/images/BubbleChart.jpg",
    "alt": "Bubble Chart"
},{
    "type": "polar",
    "img": "./css/images/PolarChart.jpg",
    "alt": "Paoart Chart"
}];
var data = [{
    "date": "2012-07-27",
    "title": "New",
    "titleValue": 4852,
    "direction": "N",
    "speed": 8,
    "value": 13,
    "country": "USA",
    "visits": 2025,
    "y": 10,
    "x": 14,
    "y2": -5,
    "x2": -3,
    "value2": 44
}, {
    "date": "2012-07-28",
    "title": "Returning",
    "titleValue": 9899,
    "direction": "NE",
    "speed": 9,
    "value": 11,
    "country": "China",
    "visits": 1882,
    "y": 5,
    "x": 3,
    "y2": -15,
    "x2": -8,
    "value2": 12
}, {
    "date": "2012-07-29",
    "direction": "E",
    "speed": 4.5,
    "value": 15,
    "country": "Japan",
    "visits": 1809,
    "y": -10,
    "x": 8,
    "y2": -4,
    "x2": 6,
    "value2": 35
}, {
    "date": "2012-07-30",
    "direction": "SE",
    "speed": 3.5,
    "value": 16,
    "country": "Germany",
    "visits": 1322,
    "y": -6,
    "x": 5,
    "y2": -5,
    "x2": -6,
    "value2": 168
}, {
    "date": "2012-07-31",
    "direction": "S",
    "speed": 9.2,
    "value": 18,
    "country": "UK",
    "visits": 1122,
    "y": 15,
    "x": -4,
    "y2": -10,
    "x2": -8,
    "value2": 102
}, {
    "date": "2012-08-01",
    "direction": "SW",
    "speed": 8.4,
    "value": 13,
    "country": "France",
    "visits": 1114,
    "y": 13,
    "x": 1,
    "y2": -2,
    "x2": 0,
    "value2": 41
}, {
    "date": "2012-08-02",
    "direction": "W",
    "speed": 11.1,
    "value": 22,
    "country": "India",
    "visits": 984,
    "y": 1,
    "x": 6,
    "y2": 0,
    "x2": -3,
    "value2": 16
}, {
    "date": "2012-08-03",
    "direction": "NW",
    "speed": 10,
    "value": 23,
    "country": "Spain",
    "visits": 711
}];