var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Beacon_2 = new ol.format.GeoJSON();
var features_Beacon_2 = format_Beacon_2.readFeatures(json_Beacon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beacon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beacon_2.addFeatures(features_Beacon_2);
var lyr_Beacon_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beacon_2, 
                style: style_Beacon_2,
                popuplayertitle: 'Beacon',
                interactive: true,
                title: '<img src="styles/legend/Beacon_2.png" /> Beacon'
            });
var format_Boundary_3 = new ol.format.GeoJSON();
var features_Boundary_3 = format_Boundary_3.readFeatures(json_Boundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_3.addFeatures(features_Boundary_3);
var lyr_Boundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_3, 
                style: style_Boundary_3,
                popuplayertitle: 'Boundary',
                interactive: false,
                title: '<img src="styles/legend/Boundary_3.png" /> Boundary'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Beacon_2.setVisible(true);lyr_Boundary_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_Beacon_2,lyr_Boundary_3];
lyr_Beacon_2.set('fieldAliases', {'Name': 'Name', 'Eastings': 'Eastings', 'Nothings': 'Nothings', });
lyr_Boundary_3.set('fieldAliases', {'id': 'id', });
lyr_Beacon_2.set('fieldImages', {'Name': 'Range', 'Eastings': 'TextEdit', 'Nothings': 'TextEdit', });
lyr_Boundary_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Beacon_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'Eastings': 'inline label - visible with data', 'Nothings': 'inline label - visible with data', });
lyr_Boundary_3.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_Boundary_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});