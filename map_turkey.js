 mapboxgl.accessToken = 'pk.eyJ1IjoibmlraGlsZXNoIiwiYSI6ImNqMnE1azNnajAzMXUycXF3dDFtZ3R3NGYifQ.TGSFnzs17dZjLPnN674h3g';
 function map_load(){
  var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/dark-v9', //stylesheet location
      center: [30.9637, 39.2433], // starting position
      zoom: 5 // starting zoom 5
  });
  
  var container = map.getCanvasContainer()
  var svg = d3.select(container).append("svg")

  $(document).ready(function(){
   setInterval( function(){ 
      map.resize();
    }  , 100 );
  });

  $(window).resize(map.resize());

  function project(d) {
    return map.project(getLL(d));
  }

  function getLL(d) {
    // alert(+d.Id)

    return new mapboxgl.LngLat(+d.lon, +d.lat)
  }
  
  d3.csv("Train-map.csv", function(err, data) {
    var dots = svg.selectAll("circle.dot").data(data)
     
    dots.enter().append("circle").classed("dot", true).attr("r", 1).style({
      fill: "#0082a3",
      "fill-opacity": 0.5,
      stroke: "#004d60",
      "stroke-width": 1
    }).transition().duration(1000).attr("r", function(d){return 5+d.revenue/900000})//.text(function(d){alert(d.revenue)})
      
    function render() {
      dots.attr({
        cx: function(d) { 
          var x = project(d).x;
          return x
        },
        cy: function(d) { 
          var y = project(d).y;
          return y
        }
      })
    }

    map.on("viewreset", function() {
      render()
    })
    map.on("move", function() {
      render()
    })

    render()
  });

 //layers*********************************************************************************************
     map.on('load', function () {
        // Add a layer showing the places.
        map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Istanbul</strong><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [28.9784,41.0082]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Ankara</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a <a href=\"http://madmens5finale.eventbrite.com/\" target=\"_blank\" title=\"Opens in a new window\">Mad Men Season Five Finale Watch Party</a>, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [32.8597,39.9334]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Diyarbakir</strong><p>One of the largest cities in southeast Turkey which is on the banks of the river Tigris. It is also know as Land of Copper</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [40.2110,37.9250]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Tokat</strong><p>Tokat Province, located to the east of Amasya, preserves the natural beauty of the Black Sea Region and is rich in historical and cultural assets. Tokat is called \"the Home of the Scientists, the Cradle of the Virtuous and the Place of Congregation of the Poets\".</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [36.6252,40.3903]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Gaziantep</strong><p>Previously and still informally called Antep, it is a city in the Western Part of Turkey's Southeastern Anatolia Region.</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [37.3781,37.0660]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Afyonkarahisar</strong><p>Afyon is in mountainous countryside island from the Aegean coast. It is famous for the Castle of Afyonkarahisar which was built around 1350 BC</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [30.5387,38.7569]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Edirne</strong><p>Edrine is blessed with imperial buiding stock, a notable culinary heritage and a lingering and much-cherished sense of civic grandeur</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [26.5557,41.6771]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Kocaeli</strong><p>Located in the north-western part of Turkey, it can be classified as a gateway between the Europe, the Middle East and the Central Asia. </p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [29.8815,40.8533]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Bursa</strong><p>Bursa if famous as it has a number mosques such as Ulu Cami built as a landmark of early Ottoman architecture andn Seljuk architecture.</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [29.0610,40.1885]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Izmir</strong><p> Founded by the Greeks, taken over by the Romans and rebuilt by Alexander the Great before becoming part of the Ottoman Empire</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [27.1428,38.4237]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Sakarya</strong><p>It is one of the paradise-like spots of the country with its sea, beaches, lakes, rivers,highlands and thermal springs.</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [30.3948,40.7731]
                    }
                },{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Elazig</strong><p>Located in the uppermost Euphrates valley, the plain on which the city extends has an altitude of 1067 metres. It resembles an inland peninsula </p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [39.2199,38.4965]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Kayseri</strong><p>It is located on the foot of the extinct Volcano Mount Erciyes that towers 3916 metres over the city</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [35.4826,38.7205]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Eskisehir</strong><p>Known as the University town as it has an university known as Anadolu University which has one of teh largest student enrollments in the world </p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [30.5256,39.7667]
                    }
                },  {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Samsun</strong><p>Along with its natural beauties it also has a reputation as an industrial city. Samsun, at the same time, has taken its place in history as the spot where Ataturk first landed to start the War of Independence on the lands of Anatolia.</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [36.3361,41.2797]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Adana</strong><p>A fast growing agriculture and industrial boom town, the commercial capital of the estern Mediterranean coast </p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [35.3308,36.9914]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Antalya</strong><p>It is a Turkish resort city with yatch-filled old harbour and beaches flanked by large hotels. It's a gateway to Turkey's sourthern Mediterranean region known as Turquoise Coast for its blue waters.</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [30.7133,36.8969]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Kastamonu</strong><p> The province is mostly covered with forests, thanks to the mild Black Sea climate. It also has many mansions which are traditionally built with an architectural style unique to this region.</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [33.6998,41.4104]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Usak</strong><p>Usak carpets also called Holbein carpets in reference to the 16th century painter Hans who depicted them in minute detail in his painings, reflecting their popularity. The word \"Ushak\" is considered an English Word of Turkic Origin</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [29.4059,38.6742]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Mugla</strong><p>A small city which gets its wealth from farming and tourism. Bodrum Castle is one of the significant historical sites</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [28.4864,37.1836]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Kirklareli</strong><p>It lies in the foothills of Istranca Mountains. The city is an important trade centre an dhas numerous Ottoman monuments.</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [27.2244,41.7355]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Konya</strong><p>An economic powerhouse that is religiously inspired and a busy university city that's as conservative as they come.</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [32.4932,37.8746]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Karabuk</strong><p>It wa sbuilt in the 1930s as the seat of the iron an dsteel industry of Turkey</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [32.7417,41.1875]
                    }
                },  {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Tekirdag</strong><p>It is a Turkish commercial town centre with a harbour for agriculture products</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [27.5117,40.9781]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Denizli</strong><p>An industrial city in the southwestern part of Turkey and the eastern end of the alluvial valley formed by the river where the plain reaches an elevation of about 350 meters.</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [29.0963,37.7830]
                    }
                  }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Balikesir</strong><p>It has a clocktower built in 1892 which is the symbol of the city. A historical fountain is another popular building</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [27.7373,39.5541]
                    }
                  }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Aydin</strong><p>It's know for traditional Zeybek dancing and archaeological sites such as the ruined city of Miletus with its Hellenistic theater</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [28.4864,37.8117]
                    }
                  }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Amasya</strong><p>Amasya, which gained great importance during the Ottoman Period, became one of the five large cultural centers of Anatolia where many scientists and Ottoman princes were educated and was described as \"the Oxford of Anatolia\" by European tourists.</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [35.8373,40.6565]
                    }
                  }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Kutahya</strong><p>The town preserves dome ancient ruins, a Byzantine castle and church. It is renowned for its Turkish earthenware.</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [29.6035,39.3581]
                    }
                  }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Bolu</strong><p>This is an attractive forested mountain district with abundant forents, lakes and mountains.</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [31.5788,40.5760]
                    }
                  }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Trabzon</strong><p>It is a focal point of trade to Persia because of the importance of its port.</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [39.5848,40.7992]
                    }
                  }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Isparta</strong><p>Named \"the Rose City\" as Isparta ranks among the world's biggest growers of the renowned Damascena rose.</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [30.5537,37.7626]
                    }
                  }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Osmaniye</strong><p>Known for the \"Karatepe Aslantas Acik Hava Museum\" and the beautiful waterfall, Sabun Cayl Selaleleri </p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [36.1763,37.2130]
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": true
        }
    });


      map.on('click', 'places', function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.features[0].geometry.coordinates)
            .setHTML(e.features[0].properties.description)
            .addTo(map);
      });

        // Change the cursor to a pointer when the mouse is over the places layer.
      map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
      });

        // Change it back to a pointer when it leaves.
      map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
      });
    });
}