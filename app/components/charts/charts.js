/*

 Chart controllers

 Includes controller for :

 https://github.com/rendro/easy-pie-chart - Easypiechart
 Morris charts
 FlotCharts
 http://omnipotent.net/jquery.sparkline/ - Sparkline

 */

angular.module("app.chart.ctrls", [])
  .controller("chartingCtrl", ["$scope", 'config', '$rootScope',
    function ($scope, config, $rootScope) {
      return $scope.easypiesquare1 = {
        percent: 34,
        options: {
          trackColor: config.chart_lines,
          scaleColor: false,
          animate: 3000,
          rotate: 270,
          barColor: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
          lineCap: "butt",
          color: $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade),
          size: 130,
          lineWidth: 12,
        },
        name: "Task performance"
      },
      $scope.easypiewater = {
        percent: 65,
        options: {
          lineWidth: 70,
          trackColor: '#fff',
          barColor: config.chart_lines,
          scaleColor: '#fff',
          size: 130,
          lineCap: 'butt',
          rotate: 90,
          animate: 5000,
        },
        name: "Achievements"
      },
      $scope.easypie1 = {
        percent: 25,
        options: {
          animate: {
            duration: 1e2,
            enabled: !0
          },
          barColor: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
          lineCap: "round",
          size: 130,
          lineWidth: 8
        },
        name: "Bounce rate"
      }, $scope.easypie2 = {
        percent: 35,
        options: {
          animate: {
            duration: 1e2,
            enabled: !0
          },
          barColor: $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade),
          lineCap: "round",
          size: 130,
          lineWidth: 8
        },
        name: "Daily active user activation"
      }, $scope.easypie3 = {
        percent: 87,
        options: {
          animate: {
            duration: 1e2,
            enabled: !0
          },
          barColor: config.color_warning,
          lineCap: "round",
          size: 130,
          lineWidth: 8
        },
        name: "registration / unique visit"
      }, $scope.easypiesmall1 = {
        percent: 25,
        options: {
          animate: {
            duration: 1e2,
            enabled: !0
          },
          trackColor: false,
          scaleColor: false,
          barColor: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
          lineCap: "round",
          size: 67,
          lineWidth: 5
        },
        name: "Bounce rate"
      }, $scope.easypiemedium1 = {
        percent: 45,
        options: {
          animate: {
            duration: 1e2,
            enabled: !0
          },
          trackColor: '#dedede',
          scaleColor: '#dedede',
          barColor: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
          lineCap: "round",
          size: 80,
          lineWidth: 5
        },
        name: "Bounce rate"
      }, $scope.easypiesmall2 = {
        percent: 35,
        options: {
          animate: {
            duration: 1e2,
            enabled: !0
          },
          trackColor: config.chart_lines,
          scaleColor: config.chart_lines,
          barColor: config.color_warning,
          lineCap: "round",
          size: 67,
          lineWidth: 5
        },
        name: "Daily active user activation"
      }, $scope.easypiesmall3 = {
        percent: 87,
        options: {
          animate: {
            duration: 1e2,
            enabled: !0
          },
          trackColor: config.chart_lines,
          scaleColor: config.chart_lines,
          barColor: config.danger_color,
          lineCap: "round",
          size: 67,
          lineWidth: 5
        },
        name: "registration / unique visit"
      };
    }
  ]).controller("gaugeCtrl", ["$scope", "config","$rootScope",
    function ($scope, config, $rootScope) {
      return $scope.gaugeHome = {
        gaugeData: {
          maxValue: 3e3,
          animationSpeed: 100,
          val: 1075
        },
        gaugeOptions: {
          lines: 12,
          angle: 0,
          lineWidth: 0.47,
          pointer: {
            length: 0.6,
            strokeWidth: 0.03,
            color: "#555555"
          },
          limitMax: "false",
          colorStart: $rootScope.RGB2HTML($rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade)),
          colorStop: $rootScope.RGB2HTML($rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade)),
          strokeColor: "#F5F5F5",
          generateGradient: !0,
          percentColors: [
            [0, $rootScope.RGB2HTML($rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade))],
            [1, $rootScope.RGB2HTML($rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade))]
          ]
        }
      }, $scope.gauge1 = {
        gaugeData: {
          maxValue: 3e3,
          animationSpeed: 100,
          val: 1075
        },
        gaugeOptions: {
          lines: 12,
          angle: 0,
          lineWidth: 0.47,
          pointer: {
            length: 0.6,
            strokeWidth: 0.03,
            color: "#555555"
          },
          limitMax: "false",
          colorStart: $rootScope.RGB2HTML($rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade)),
          colorStop: $rootScope.RGB2HTML($rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade)),
          strokeColor: "#F5F5F5",
          generateGradient: !0,
          percentColors: [
            [0, $rootScope.RGB2HTML($rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade))],
            [1, $rootScope.RGB2HTML($rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade))]
          ]
        }
      }, $scope.gauge2 = {
        gaugeData: {
          maxValue: 3e3,
          animationSpeed: 100,
          val: 1300
        },
        gaugeOptions: {
          lines: 12,
          angle: 0,
          lineWidth: 0.47,
          pointer: {
            length: 0.6,
            strokeWidth: 0.03,
            color: "#555555"
          },
          limitMax: "false",
          colorStart: $rootScope.RGB2HTML($rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade)),
          colorStop: $rootScope.RGB2HTML($rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade)),
          strokeColor: "#F5F5F5",
          generateGradient: !0,
          percentColors: [
            [0, $rootScope.RGB2HTML($rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade))],
            [1, $rootScope.RGB2HTML($rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade))]
          ]
        }
      }, $scope.gauge3 = {
        gaugeData: {
          maxValue: 3e3,
          animationSpeed: 100,
          val: 1500
        },
        gaugeOptions: {
          lines: 12,
          angle: 0,
          lineWidth: 0.47,
          pointer: {
            length: 0.6,
            strokeWidth: 0.03,
            color: "#555555"
          },
          limitMax: "false",
          colorStart: config.color_warning,
          colorStop: config.color_warning,
          strokeColor: "#F5F5F5",
          generateGradient: !0,
          percentColors: [
            [0, config.color_warning],
            [1, config.color_warning]
          ]
        }
      };
    }
  ]).controller("morrisChartCtrl", ["$scope", "config", "$rootScope",
    function ($scope, config, $rootScope) {
      return $scope.mainData = [{
        month: "2013-01",
        xbox: 294e3,
        will: 136e3,
        playstation: 244e3
      }, {
        month: "2013-02",
        xbox: 228e3,
        will: 335e3,
        playstation: 127e3
      }, {
        month: "2013-03",
        xbox: 199e3,
        will: 159e3,
        playstation: 13e4
      }, {
        month: "2013-04",
        xbox: 174e3,
        will: 16e4,
        playstation: 82e3
      }, {
        month: "2013-05",
        xbox: 255e3,
        will: 318e3,
        playstation: 82e3
      }, {
        month: "2013-06",
        xbox: 298400,
        will: 401800,
        playstation: 98600
      }, {
        month: "2013-07",
        xbox: 37e4,
        will: 225e3,
        playstation: 159e3
      }, {
        month: "2013-08",
        xbox: 376700,
        will: 303600,
        playstation: 13e4
      }, {
        month: "2013-09",
        xbox: 527800,
        will: 301e3,
        playstation: 119400
      }], $scope.simpleData = [{
        year: "2008",
        value: 20
      }, {
        year: "2009",
        value: 10
      }, {
        year: "2010",
        value: 5
      }, {
        year: "2011",
        value: 5
      }, {
        year: "2012",
        value: 20
      }, {
        year: "2013",
        value: 19
      }],
        $scope.simpleColors = [$rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade)],
        $scope.comboData = [{
          year: "2008",
          a: 20,
          b: 16,
          c: 12
        }, {
          year: "2009",
          a: 10,
          b: 22,
          c: 30
        }, {
          year: "2010",
          a: 5,
          b: 14,
          c: 20
        }, {
          year: "2011",
          a: 5,
          b: 12,
          c: 19
        }, {
          year: "2012",
          a: 20,
          b: 19,
          c: 13
        }, {
          year: "2013",
          a: 28,
          b: 22,
          c: 20
        }],
        $scope.comboColors = [$rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade), $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade), config.color_warning],
        $scope.donutData = [{
          label: "Download Sales",
          value: 12
        }, {
          label: "In-Store Sales",
          value: 30
        }, {
          label: "Mail-Order Sales",
          value: 20
        }, {
          label: "Online Sales",
          value: 19
        }],
        $scope.doughnutColors = [$rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade), $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade), config.color_warning, config.danger_color];
    }
  ]).controller("chartjsCtrl", ["$scope", "config", "$rootScope",
    function ($scope, config, $rootScope) {
      return $scope.chartjsLine = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
            strokeColor: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
            pointColor: "#fff",
            pointStrokeColor: "#fff",
            pointHighlightFill: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            fillColor: config.color_warning,
            strokeColor: config.color_warning,
            pointColor: "#fff",
            pointStrokeColor: "#fff",
            pointHighlightFill: config.color_warning,
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      }, $scope.chartjsBar = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
            strokeColor: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
            highlightFill: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
            highlightStroke: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            fillColor: config.color_warning,
            strokeColor: config.color_warning,
            highlightFill: config.color_warning,
            highlightStroke: config.color_warning,
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      }, $scope.chartjsRadar = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
          {
            label: "My First dataset",
            fillColor: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
            strokeColor: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
            pointColor: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            fillColor: config.color_warning,
            strokeColor: config.color_warning,
            pointColor: config.color_warning,
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: config.color_warning,
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      }, $scope.chartjsPolarArea = [{
        value: 300,
        color: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
        highlight: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
        label: "Primary"
      },
        {
          value: 50,
          color: $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade),
          highlight: $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade),
          label: "Secondary"
        },
        {
          value: 100,
          color: config.color_warning,
          highlight: config.color_warning,
          label: "Third"
        },
        {
          value: 40,
          color: config.danger_color,
          highlight: config.danger_color,
          label: "Four"
        },
        {
          value: 120,
          color: "#503f3c",
          highlight: "#503f3c",
          label: "Dark Brown"
        }],
        $scope.chartjsPie = [{
          value: 300,
          color: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
          highlight: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
          label: "Primary"
        },
          {
            value: 50,
            color: $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade),
            highlight: $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade),
            label: "Secondary"
          },
          {
            value: 100,
            color: config.color_warning,
            highlight: config.color_warning,
            label: "Third"
          }],
        $scope.chartjsDoughnut = [{
          value: 300,
          color: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
          highlight: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
          label: "Primary"
        },
          {
            value: 50,
            color: $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade),
            highlight: $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade),
            label: "Secondary"
          },
          {
            value: 100,
            color: config.color_warning,
            highlight: config.color_warning,
            label: "Third"
          }];
    }
  ]).controller("flotChartCtrl", ["$scope", 'config', '$rootScope',
    function ($scope, config, $rootScope) {

      var areaChart, barChart, lineChart1, lineChart1Small;

      return lineChart1 = {}, lineChart1.data1 = [
        [1, 15],
        [2, 20],
        [3, 14],
        [4, 10],
        [5, 10],
        [6, 20],
        [7, 28],
        [8, 26],
        [9, 22],
        [10, 23],
        [11, 24]
      ], lineChart1.data2 = [
        [1, 9],
        [2, 15],
        [3, 17],
        [4, 21],
        [5, 16],
        [6, 15],
        [7, 13],
        [8, 15],
        [9, 29],
        [10, 21],
        [11, 29]
      ], lineChart1Small = {}, lineChart1Small.data1 = [
        [1, 15],
        [2, 20],
        [3, 14],
        [4, 10],
        [5, 10]
      ], lineChart1Small.data2 = [
        [1, 9],
        [2, 15],
        [3, 17],
        [4, 21],
        [5, 16]
      ], $scope.line1 = {}, $scope.line1.data = [{
        data: lineChart1.data1,
        label: "New visitors",
        lines: {
          fill: !1
        }
      }, {
        data: lineChart1.data2,
        label: "Returning visitors",
        lines: {
          fill: !1
        }
      }], $scope.line1.options = {
        series: {
          lines: {
            show: !0,
            fill: !1,
            lineWidth: 3,
            fillColor: {
              colors: [{
                opacity: 0.3
              }, {
                opacity: 0.3
              }]
            }
          },
          points: {
            show: !0,
            lineWidth: 3,
            fill: !0,
            fillColor: "#ffffff",
            symbol: "circle",
            radius: 5
          },
          shadowSize: 0

        },
        colors: [$rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade), $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade)],
        tooltip: !0,
        tooltipOpts: {
          defaultTheme: !1,
          content: '<div class="tooltip-header">%s</div>' +
          '<div class="tooltip-body">%y unique visitors</div>',
          shifts: {
            x: -95,
            y: 25
          }
        },
        grid: {
          hoverable: !0,
          clickable: !0,
          tickColor: config.chart_lines,
          borderWidth: 1,
          borderColor: config.chart_lines
        },
        xaxis: {
          ticks: [
            [1, "Jan."],
            [2, "Feb."],
            [3, "Mar."],
            [4, "Apr."],
            [5, "May"],
            [6, "June"],
            [7, "July"],
            [8, "Aug."],
            [9, "Sept."],
            [10, "Oct."],
            [11, "Nov."],
            [12, "Dec."]
          ]
        }
      }, $scope.line1Small = {}, $scope.line1Small.data = [{
        data: lineChart1Small.data1,
        //label: "New visitors",
        lines: {
          fill: !1
        }
      }, {
        data: lineChart1Small.data2,
        //label: "Returning visitors",
        lines: {
          fill: !1
        }
      }], $scope.line1Small.options = {
        series: {
          lines: {
            show: !0,
            fill: !1,
            lineWidth: 2,
            fillColor: {
              colors: [{
                opacity: 0.3
              }, {
                opacity: 0.3
              }]
            }
          },
          points: {
            show: !0,
            lineWidth: 2,
            fill: !0,
            fillColor: "#ffffff",
            symbol: "circle",
            radius: 3
          },
          shadowSize: 0

        },
        colors: [$rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade), $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade)],
        tooltip: !1,
        tooltipOpts: {
          defaultTheme: !1
        },
        grid: {
          show: !1,
          hoverable: !0,
          clickable: !0,
          tickColor: config.chart_lines,
          borderWidth: 1,
          borderColor: config.chart_lines
        }
      }, areaChart = {}, areaChart.data1 = [
        [2007, 7],
        [2008, 13],
        [2009, 26],
        [2010, 23],
        [2011, 17],
        [2012, 13],
        [2013, 10],
        [2014, 15],
        [2015, 20],
        [2016, 28]
      ], areaChart.data2 = [
        [2007, 4],
        [2008, 6],
        [2009, 13],
        [2010, 20],
        [2011, 19],
        [2012, 16],
        [2013, 14],
        [2014, 20],
        [2015, 15],
        [2016, 13]
      ], $scope.area = {},
        $scope.area.data = [{
        data: areaChart.data1,
        label: "New visits",
        lines: {
          fill: true
        }
      }, {
        data: areaChart.data2,
        label: "New sales",
        lines: {
          fill: true
        },
        yaxis: 2
      }], $scope.area.options = {
        series: {
          shadowSize: 0,
          lines: {
            show: true,
            lineWidth: false,
            fill: true
          },
          curvedLines: {
            apply: true,
            active: true,
            monotonicFit: false
          }
        },
        grid: {
          hoverable: !0,
          clickable: !0,
          tickColor: "#f5f5f5",
          borderWidth: 1,
          borderColor: "#f5f5f5"
        },
        tooltip: !0,
        tooltipOpts: {
          defaultTheme: !1,
          content: '<div class="tooltip-header">%s</div>' +
          '<div class="tooltip-body">%y items</div>',
          shifts: {
            x: -95,
            y: 25
          }
        },
        colors: [$rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade), $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade)]
      },
      $scope.areapoints = {},
      $scope.areapoints.data = [{
          data: [[1,7.5],[2,7.5],[3,5.7],[4,8.9],[5,10],[6,7],[7,9],[8,6],[9,8],[10,9]],
          label: "New visits",
          lines: {
            fill: false
          }
        }],
        $scope.areapoints.options = {
        series: {
          shadowSize: 0,
          points: { show: true, radius: 3, lineWidth: 1, fillColor: $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade)},
          lines:  { show: false, lineWidth: 0, fill: 0.5, fillColor: config.chart_lines },
        },
        grid: {
          hoverable: 1,
          clickable: 1,
          tickColor: "#f5f5f5",
          borderWidth: 0,
          borderColor: "#f5f5f5"
        },
        xaxis: { show: true, font: { color: '#ccc' }, position: 'bottom' },
        yaxis:{ show: true, font: { color: '#ccc' }},
        tooltip: !0,
        tooltipOpts: {
          defaultTheme: !1,
          content: '<div class="tooltip-header">%s</div>' +
          '<div class="tooltip-body">%y items</div>',
          shifts: {
            x: -95,
            y: 25
          }
        },
        colors: [$rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade), $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade)]
      }, barChart = {}, barChart.data1 = [
        [2008, 20],
        [2009, 10],
        [2010, 5],
        [2011, 5],
        [2012, 20],
        [2013, 28]
      ], barChart.data2 = [
        [2008, 16],
        [2009, 22],
        [2010, 14],
        [2011, 12],
        [2012, 19],
        [2013, 22]
      ], barChart.data3 = [
        [2008, 12],
        [2009, 30],
        [2010, 20],
        [2011, 19],
        [2012, 13],
        [2013, 20]
      ], $scope.barChart = {}, $scope.barChart.data = [{
        label: "Value A",
        data: barChart.data1
      }, {
        label: "Value B",
        data: barChart.data2
      }, {
        label: "Value C",
        data: barChart.data3
      }], $scope.barChart.options = {
        series: {
          stack: !0,
          bars: {
            show: !0,
            fill: 1,
            barWidth: 0.3,
            align: "center",
            horizontal: !1,
            order: 1
          }
        },
        grid: {
          hoverable: !0,
          borderWidth: 1,
          borderColor: "#f5f5f5"
        },
        tooltip: !0,
        tooltipOpts: {
          defaultTheme: !1,
          content: '<div class="tooltip-header">%s</div>' +
          '<div class="tooltip-body">%y ammount sold</div>',
          shifts: {
            x: -95,
            y: 25
          }
        },
        colors: [$rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade), $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade), config.color_warning]
      }, $scope.pieChart = {}, $scope.pieChart.data = [{
        label: "Download Sales",
        data: 12
      }, {
        label: "In-Store Sales",
        data: 30
      }, {
        label: "Mail-Order Sales",
        data: 20
      }, {
        label: "Online Sales",
        data: 19
      }], $scope.pieChart.options = {
        series: {
          pie: {
            show: !0
          }
        },
        legend: {
          show: !0
        },
        grid: {
          hoverable: !0,
          clickable: !0
        },
        colors: [$rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade), $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade), config.color_warning, config.danger_color],
        tooltip: !0,
        tooltipOpts: {
          defaultTheme: !1,
          content: '<div class="tooltip-header">%s</div>' +
          '<div class="tooltip-body">%y ammount sold</div>',
          shifts: {
            x: -95,
            y: 25
          }
        }
      }, $scope.donutChart = {},
        $scope.donutChart.data = [{
        label: "Download Sales",
        data: 12
      }, {
        label: "In-Store Sales",
        data: 30
      }, {
        label: "Mail-Order Sales",
        data: 20
      }, {
        label: "Online Sales",
        data: 19
      }],
        $scope.donutChart.options = {
        series: {
          pie: {
            show: !0,
            innerRadius: 0.5
          }
        },
        legend: {
          show: !0
        },
        grid: {
          hoverable: !0,
          clickable: !0
        },
        colors: [$rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade), $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade), config.color_warning, config.danger_color],
        tooltip: !0,
        tooltipOpts: {
          defaultTheme: !1,
          content: '<div class="tooltip-header">%s</div>' +
          '<div class="tooltip-body">%y ammount sold</div>',
          shifts: {
            x: -95,
            y: 25
          }
        }
      }, $scope.donutChart2 = {}, $scope.donutChart2.data = [{
        label: "Download Sales",
        data: 12
      }, {
        label: "In-Store Sales",
        data: 30
      }, {
        label: "Mail-Order Sales",
        data: 20
      }, {
        label: "Online Sales",
        data: 19
      }, {
        label: "Direct Sales",
        data: 15
      }], $scope.donutChart2.options = {
        series: {
          pie: {
            show: !0,
            innerRadius: 0.5
          }
        },
        legend: {
          show: !1
        },
        grid: {
          hoverable: !0,
          clickable: !0
        },
        colors: [$rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade), $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade), config.color_warning, config.danger_color],
        tooltip: !0,
        tooltipOpts: {
          defaultTheme: !1,
          content: '<div class="tooltip-header">%s</div>' +
          '<div class="tooltip-body">%y ammount sold</div>',
          shifts: {
            x: -95,
            y: 25
          }
        }
      },
        $scope.new_visitors = true,
        $scope.returning_visitors = true,
        $scope.switchClick = function (attr) {
          var choiceContainer = $(".choices");
          choiceContainer.find('input[name=' + attr + ']').click();
        };
    }
  ]).controller("flotChartCtrl.realtime", ["$scope", "config", "$rootScope",
    function ($scope, config, $rootScope) {
      $scope.color = $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade);
    }
  ]).controller("sparklineCtrl", ["$scope", "config", "$rootScope",
    function ($scope, config, $rootScope) {
      return $scope.demoData1 = {
        sparkData: [3, 1, 2, 2, 4, 6, 4, 5, 2, 4, 5, 3, 4, 6, 4, 7],
        sparkOptions: {
          type: "line",
          lineColor: "#fff",
          highlightLineColor: "#fff",
          fillColor: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
          spotColor: !1,
          minSpotColor: !1,
          maxSpotColor: !1,
          width: "100%",
          height: "150px"
        }
      }, $scope.simpleChart1 = {
        sparkData: [3, 1, 2, 3, 5, 3],
        sparkOptions: {
          type: "line",
          lineColor: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
          fillColor: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
          spotColor: !1,
          minSpotColor: !1,
          maxSpotColor: !1,
          width: "80px",
          height: "50px"
        }
      }, $scope.simpleChartNoFill = {
        sparkData: [100, 200, 459, 234, 600, 800, 345, 987, 675, 457, 765],
        sparkOptions: {
          type: "line",
          lineColor: '#ffffff',
          fillColor: !1,
          resize: true,
          minSpotColor: false,
          maxSpotColor: false,
          highlightSpotColor: $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade),
          highlightLineColor: '#fffff',
          spotColor: '#ffffff',
          valueSpots: {'0:': '#ffffff'},
          spotRadius: 3,
          lineWidth: 1,
          width: "90%",
          height: "75px"
        }
      }, $scope.simpleChart2 = {
        sparkData: [1, 2, 4, 1, 5, 3, 4, 2, 1, 5, 1, 4],
        sparkOptions: {
          type: "bar",
          barColor: config.color_warning,
          width: "150px",
          height: "50px"
        }
      }, $scope.simpleChart2Long = {
        sparkData: [1, 2, 4, 1, 5, 3, 4, 2, 1, 5, 1, 4, 1, 2, 4, 1, 5, 3, 4, 2, 1, 5, 1, 4],
        sparkOptions: {
          type: "bar",
          barColor: config.color_warning,
          width: "300px",
          height: "50px"
        }
      }, $scope.simpleChartwhiteLong = {
        sparkData: [1, 2, 4, 1, 5, 3, 4, 2, 1, 5, 1, 4, 1, 2, 4, 1, 5, 3, 4, 2, 1, 5, 1, 4, 1, 2, 4, 1, 5, 3, 4, 2, 1, 5, 1, 4, 1, 2],
        sparkOptions: {
          type: "bar",
          barColor: '#fff',
          width: "300px",
          height: "50px"
        }
      }, $scope.simpleChart2danger = {
        sparkData: [3, 1, 2, 3, 5, 3, 4, 2, 3, 1, 2, 3],
        sparkOptions: {
          type: "bar",
          barColor: config.danger_color,
          width: "150px",
          height: "50px"
        }
      }, $scope.simpleChart2dangerLong = {
        sparkData: [3, 1, 2, 3, 5, 3, 4, 2, 3, 1, 2, 3, 2, 1, 2, 3, 5, 3, 4, 2, 3, 1, 2, 3],
        sparkOptions: {
          type: "bar",
          barColor: config.danger_color,
          width: "300px",
          height: "50px"
        }
      }, $scope.simpleChartlong = {
        sparkData: [1, 3, 2, 5, 4, 2, 1, 7, 1, 8, 4, 3, 5, 2, 4, 5, 1, 7, 1, 8],
        sparkOptions: {
          type: "bar",
          barColor: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
          width: "250px",
          height: "30px"
        }
      }, $scope.simpleChart2long = {
        sparkData: [3, 1, 2, 3, 5, 3, 4, 2, 5, 4, 2, 6, 2, 4, 3, 1],
        sparkOptions: {
          type: "bar",
          barColor: config.color_warning,
          width: "200px",
          height: "30px"
        }
      }, $scope.simpleChart2info = {
        sparkData: [3, 1, 2, 3, 5, 3, 4, 2],
        sparkOptions: {
          type: "bar",
          barColor: "#FFFFFF",
          width: "100px",
          height: "30px"
        }
      }, $scope.simpleChart3 = {
        sparkData: [3, 1, 2, 3, 5, 3, 4, 2],
        sparkOptions: {
          type: "pie",
          sliceColors: [$rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade), $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade), config.color_warning, config.danger_color, "#CCCCCC", "#365340"],
          width: "50px",
          height: "50px"
        }
      }, $scope.tristateChart1 = {
        sparkData: [1, 2, -3, -5, 3, 1, -4, 2],
        sparkOptions: {
          type: "tristate",
          posBarColor: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
          negBarColor: $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade),
          width: "100%",
          height: "50px"
        }
      }, $scope.tristateChart1Long = {
        sparkData: [1, 2, -3, -5, 3, 1, -4, 2, -5, 1, 2, 4, -7, 3, -5, -4, 1, -4, 2, -5, 1, 2, 4, -7, 3],
        sparkOptions: {
          type: "tristate",
          posBarColor: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
          negBarColor: $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade),
          width: "100%",
          height: "50px"
        }
      }, $scope.largeChart1 = {
        sparkData: [3, 1, 2, 3, 5, 3, 4, 2],
        sparkOptions: {
          type: "line",
          lineColor: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
          highlightLineColor: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
          fillColor: $rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade),
          spotColor: !1,
          minSpotColor: !1,
          maxSpotColor: !1,
          width: "100%",
          height: "150px"
        }
      }, $scope.largeChart2 = {
        sparkData: [3, 1, 2, 3, 5, 3, 4, 2],
        sparkOptions: {
          type: "bar",
          barColor: $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade),
          barWidth: 10,
          width: "100%",
          height: "150px"
        }
      }, $scope.largeChart3 = {
        sparkData: [3, 1, 2, 3, 5],
        sparkOptions: {
          type: "pie",
          sliceColors: [$rootScope.getMaterialColor(config.md_primary.base, config.md_primary.shade), , $rootScope.getMaterialColor(config.md_accent.base, config.md_accent.shade), , config.color_warning, config.danger_color, "#CCCCCC", "#365340"],
          width: "150px",
          height: "150px"
        }
      };
    }
  ]);

/*
 Charting directives
 Provides custom directives for charting elements
 */

angular.module("app.chart.directives", [])
  .directive("gaugeChart", [
  function () {
    return {
      scope: {
        gaugeData: "=",
        gaugeOptions: "="
      },
      link: function (scope, ele) {
        var data, gauge, options;

        data = scope.gaugeData;
        options = scope.gaugeOptions;

        gauge = new Gauge(ele[0]).setOptions(options);
        gauge.maxValue = data.maxValue;
        gauge.animationSpeed = data.animationSpeed;
        gauge.set(data.val);

        //Update when charts data changes
        scope.$watch(function () {
          return scope.gaugeData;
        }, function (value) {
          if (!value) return;

          data = scope.gaugeData;
          options = scope.gaugeOptions;

          gauge = new Gauge(ele[0]).setOptions(options);
          gauge.maxValue = data.maxValue;
          gauge.animationSpeed = data.animationSpeed;
          gauge.set(data.val);
        });
      }
    };
  }
]).directive('chart',
  function () {
    var baseWidth = 600;
    var baseHeight = 400;

    return {
      restrict: 'E',
      template: '<canvas></canvas>',
      scope: {
        chartObject: "=value",
        data: "="
      },
      link: function (scope, element, attrs) {
        var canvas = element.find('canvas')[0],
          context = canvas.getContext('2d'),
          chart;

        var options = {
          type: attrs.type || "Line",
          width: attrs.width || baseWidth,
          height: attrs.height || baseHeight
        };
        canvas.width = options.width;
        canvas.height = options.height;
        chart = new Chart(context);

        var chartType = attrs.type;

        chart[chartType](scope.data, options);

        //Update when charts data changes
        scope.$watch(function () {
          return scope.chartObject;
        }, function (value) {
          if (!value) return;
          var chartType = options.type;
          chart[chartType](scope.chartObject.data, scope.chartObject.options);
        });
      }
    };
  })
  .directive("flotChart", [
    function () {
      return {
        restrict: "A",
        scope: {
          data: "=",
          options: "="
        },
        link: function (scope, ele) {
          var data, options, plot;


          // hard-code color indices to prevent them from shifting as
          // countries are turned on/off

          var datasets;

          datasets = scope.data;

          var i = 0;
          $.each(datasets, function (key, val) {
            val.color = i;
            ++i;
          });

          // insert checkboxes

          if ($(ele[0]).parent().find(".choices").length > 0) {

            // insert checkboxes
            var choiceContainer = $(ele[0]).parent().find(".choices");
            var material_choiceContainer = $(ele[0]).parent().find(".choice-switches");

            choiceContainer.html("");

            $.each(datasets, function (key, val) {

              choiceContainer.append("<br/><div class='choice-item'><label for='id" + key + "' class='ui-checkbox'>" +
                "<input name='" + key +
                "' type='checkbox' id='id" + key + "' checked='checked' value='option1'>" +
                "<span>" + val.label + "</span>" +
                "</label></div>");
            });

            var plotAccordingToChoices = function () {

              var data_to_push = [];

              choiceContainer.find("input:checked").each(function () {
                var key = $(this).attr("name");
                if (key && datasets[key]) {
                  data_to_push.push(datasets[key]);
                }
              });

              if (data_to_push.length > 0) {
                $.plot(ele[0], data_to_push, scope.options);
              }
            };

            choiceContainer.find("input").click(plotAccordingToChoices);

          }

          //plotAccordingToChoices();

          return data = scope.data, options = scope.options, plot = $.plot(ele[0], data, options);
        }
      };
    }
  ])
  .directive("flotChartRealtime", [
    function () {
      return {
        restrict: "A",
        link: function (scope, ele) {
          var data, getRandomData, plot, totalPoints, update, updateInterval;
          return data = [], totalPoints = 300, getRandomData = function () {
            var i, prev, res, y;
            for (data.length > 0 && (data = data.slice(1)); data.length < totalPoints;) {
              if (data.length > 0) {
                prev = data[data.length - 1];
              }
              else {
                prev = 50;
              }
              y = prev + 10 * Math.random() - 5;
              if (0 > y) {
                y = 0;
              } else {
                if (y > 100) {
                  y = 100;
                }
              }
              data.push(y);
            }
            for (res = [], i = 0; i < data.length;) {
              res.push([i, data[i]]);
              ++i;
            }
            return res;
          }, update = function () {
            plot.setData([getRandomData()]);
            plot.draw();
            setTimeout(update, updateInterval);
          }, data = [], totalPoints = 300, updateInterval = 200, plot = $.plot(ele[0], [getRandomData()], {
            series: {
              lines: {
                show: !0,
                fill: !0
              },
              shadowSize: 0
            },
            yaxis: {
              min: 0,
              max: 100,
              show: !0,
              color: "#f5f5f5"
            },
            xaxis: {
              show: !0,
              color: "#f5f5f5"
            },
            tooltip: !0,
            tooltipOpts: {
              defaultTheme: !1,
              content: '<div class="tooltip-header">Realtime</div>' +
              '<div class="tooltip-body">%y current items</div>',
              shifts: {
                x: -95,
                y: 25
              }
            },
            grid: {
              hoverable: !0,
              borderWidth: 1,
              borderColor: "#f5f5f5"
            },
            colors: [scope.color]
          }), update();
        }
      };
    }
  ]).directive("sparkline", [
    function () {
      return {
        scope: {
          sparkData: "=",
          sparkOptions: "="
        },
        link: function (scope, ele) {
          var data, options, sparkResize, sparklineDraw;

          data = scope.sparkData;
          options = scope.sparkOptions;
          sparkResize = void 0;
          sparklineDraw = function () {

            ele.sparkline(data, options);

          };
          $(window).resize(function () {
            return clearTimeout(sparkResize), sparkResize = setTimeout(sparklineDraw, 200);
          });
          sparklineDraw();
        }
      };
    }
  ]).directive("morrisChart", [
    function () {
      return {
        scope: {
          data: "="
        },
        link: function (scope, ele, attrs) {
          var colors, data, func, options, chart;
          switch (data = scope.data, attrs.type) {
            case "line":
              return colors = void 0 === attrs.lineColors || "" === attrs.lineColors ? null : JSON.parse(attrs.lineColors), options = {
                element: ele[0],
                data: data,
                resize: true,
                xkey: attrs.xkey,
                ykeys: JSON.parse(attrs.ykeys),
                labels: JSON.parse(attrs.labels),
                lineWidth: attrs.lineWidth || 2,
                lineColors: colors || ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"]
              }, chart = new Morris.Line(options),setTimeout(function(){
                chart.redraw();
              },1), $(window).resize(function () {
                chart.redraw();
              });
            case "area":
              return colors = void 0 === attrs.lineColors || "" === attrs.lineColors ? null : JSON.parse(attrs.lineColors), options = {
                element: ele[0],
                data: data,
                resize: true,
                xkey: attrs.xkey,
                ykeys: JSON.parse(attrs.ykeys),
                labels: JSON.parse(attrs.labels),
                lineWidth: attrs.lineWidth || 2,
                lineColors: colors || ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
                behaveLikeLine: attrs.behaveLikeLine || !1,
                fillOpacity: attrs.fillOpacity || "auto",
                pointSize: attrs.pointSize || 4
              }, chart = new Morris.Area(options),setTimeout(function(){
                chart.redraw();
              },1), $(window).resize(function () {
                chart.redraw();
              });
            case "bar":
              return colors = void 0 === attrs.barColors || "" === attrs.barColors ? null : JSON.parse(attrs.barColors), options = {
                element: ele[0],
                data: data,
                resize: true,
                xkey: attrs.xkey,
                ykeys: JSON.parse(attrs.ykeys),
                labels: JSON.parse(attrs.labels),
                barColors: colors || ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
                stacked: attrs.stacked || null
              }, chart = new Morris.Bar(options),setTimeout(function(){
                chart.redraw();
              },1), $(window).resize(function () {
                //chart.redraw();
              });
            case "donut":
              /*jslint evil: true */
              return colors = void 0 === attrs.colors || "" === attrs.colors ? null : JSON.parse(attrs.colors), options = {
                element: ele[0],
                data: data,
                resize: true,
                colors: colors || ["#0B62A4", "#3980B5", "#679DC6", "#95BBD7", "#B0CCE1", "#095791", "#095085", "#083E67", "#052C48", "#042135"]
              }, attrs.formatter && (func = new Function("y", "data", attrs.formatter), options.formatter = func), chart = new Morris.Donut(options),setTimeout(function(){
                chart.redraw();
              },1), $(window).resize(function () {
                chart.redraw();
              });
          }
        }
      };
    }
  ]);