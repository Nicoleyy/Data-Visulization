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
    "type": "line",
    "img": "./css/images/LineChart.jpg",
    "alt": "Line Chart",
    "Opt": {
        "type": "serial",
        "theme": "light",
        "marginRight":80,
        "marginTop":24,
        "dataDateFormat":"YYYY-MM-DD",
        "rotate": true,
        "valueAxes": [{
            "maximum": 30,
            "minimum": 10,
            "axisAlpha": 0,
            "guides": [{
                "fillAlpha": 0.1,
                "fillColor": "#99dc67",
                "lineAlpha": 0,
                "toValue": 20,
                "value": 10
            }, {
                "fillAlpha": 0.1,
                "fillColor": "#67b7dc",
                "lineAlpha": 0,
                "toValue": 30,
                "value": 20
            }]
        }],
        "graphs": [{
            "bullet": "round",
            "dashLength": 4,
            "valueField": "value"
        }],
        "chartCursor": {
            "cursorAlpha": 0,
            "categoryBalloonEnabled": false
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true
        },
        "chartScrollbar":{
            "scrollbarHeight":5,
            "backgroundAlpha":0.1,
            "backgroundColor":"#868686",
            "selectedBackgroundColor":"#67b7dc",
            "selectedBackgroundAlpha":1
        },
        "export": {
            "enabled": true
         }
    }
},{
    "type": "area",
    "img": "./css/images/DataBasedData.jpg",
    "alt": "Data Based Data",
    "Opt": chartDefaultOpt
},{
    "type": "stepLine",
    "img": "./css/images/StepLineChart.jpg",
    "alt": "Step Line Chart",
    "Opt": {
        "type": "serial",
        "titles":[{"text":"Step Line Chart"}],
        "theme": "light",
        "autoMarginOffset":25,
        "valueAxes": [{
            "axisAlpha": 0,
            "position": "right"
        }],
        "graphs": [{
            "id":"g1",
            "balloonText": "[[category]]<br><b>[[value]] C</b>",
            "type": "step",
            "bullet":"square",
            "bulletAlpha":0,
            "bulletSize":4,
            "bulletBorderAlpha":0,
            "valueField": "value"
        }],
        "chartScrollbar": {
            "graph":"g1",
            "gridAlpha":0,
            "color":"#888888",
            "scrollbarHeight":55,
            "backgroundAlpha":0,
            "selectedBackgroundAlpha":0.1,
            "selectedBackgroundColor":"#888888",
            "graphFillAlpha":0,
            "autoGridCount":true,
            "selectedGraphFillAlpha":0,
            "graphLineAlpha":1,
            "graphLineColor":"#c2c2c2",
            "selectedGraphLineColor":"#888888",
            "selectedGraphLineAlpha":1
        },
        "chartCursor": {
            "fullWidth":true,
            "categoryBalloonDateFormat": "YYYY-MM-DD",
            "cursorAlpha": 0.05,
            "graphBulletAlpha":1

        },
        "dataDateFormat": "YYYY-MM-DD",
        "categoryField": "date",
        "categoryAxis": {
            "minPeriod": "DD",
            "parseDates": true,
            "gridAlpha": 0
        },
        "export": {
            "enabled": true
         }
    }
},{
    "type": "dount",
    "img": "./css/images/DonutChart.jpg",
    "alt": "Dount Chart",
    "Opt": {
        "type": "pie",
        "theme": "light",
        "titleField": "title",
        "valueField": "titleValue",
        "labelRadius": 5,
        "radius": "42%",
        "innerRadius": "60%",
        "labelText": "[[title]]",
        "export": {
            "enabled": true
        }
    }
},{
    "type": "bubble",
    "img": "./css/images/BubbleChart.jpg",
    "alt": "Bubble Chart",
    "Opt": {
        "type": "xy",
      "theme": "light",
      "balloon":{
       "fixedPosition":true,
      },
      "valueAxes": [ {
        "position": "bottom",
        "axisAlpha": 0
      }, {
        "minMaxMultiplier": 1.2,
        "axisAlpha": 0,
        "position": "left"
      } ],
      "startDuration": 1.5,
      "graphs": [ {
        "balloonText": "x:<b>[[x]]</b> y:<b>[[y]]</b><br>value:<b>[[value]]</b>",
        "bullet": "circle",
        "bulletBorderAlpha": 0.2,
        "bulletAlpha": 0.8,
        "lineAlpha": 0,
        "fillAlphas": 0,
        "valueField": "value",
        "xField": "x",
        "yField": "y",
        "maxBulletSize": 100
      }, {
        "balloonText": "x:<b>[[x]]</b> y:<b>[[y]]</b><br>value:<b>[[value]]</b>",
        "bullet": "diamond",
        "bulletBorderAlpha": 0.2,
        "bulletAlpha": 0.8,
        "lineAlpha": 0,
        "fillAlphas": 0,
        "valueField": "value2",
        "xField": "x2",
        "yField": "y2",
        "maxBulletSize": 100
      } ],
      "marginLeft": 46,
      "marginBottom": 35,
      "export": {
        "enabled": true
      }
    }
},{
    "type": "polar",
    "img": "./css/images/PolarChart.jpg",
    "alt": "Paoart Chart",
    "Opt": {
        "type": "radar",
      "theme": "light",
      "valueAxes": [ {
        "gridType": "circles",
        "minimum": 0,
        "autoGridCount": false,
        "axisAlpha": 0.2,
        "fillAlpha": 0.05,
        "fillColor": "#FFFFFF",
        "gridAlpha": 0.08,
        "guides": [ {
          "angle": 225,
          "fillAlpha": 0.3,
          "fillColor": "#0066CC",
          "tickLength": 0,
          "toAngle": 315,
          "toValue": 14,
          "value": 0,
          "lineAlpha": 0,

        }, {
          "angle": 45,
          "fillAlpha": 0.3,
          "fillColor": "#CC3333",
          "tickLength": 0,
          "toAngle": 135,
          "toValue": 14,
          "value": 0,
          "lineAlpha": 0,
        } ],
        "position": "left"
      } ],
      "startDuration": 1,
      "graphs": [ {
        "balloonText": "[[category]]: [[value]] m/s",
        "bullet": "round",
        "fillAlphas": 0.3,
        "valueField": "value"
      } ],
      "categoryField": "direction",
      "export": {
        "enabled": true
      }
    }
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