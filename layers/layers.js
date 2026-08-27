var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

var vectorTileUrl_classif_1 = 'layers/classif_1-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_classif_1 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 3,
    maxZoom: 4,
    url: vectorTileUrl_classif_1,
    attributions: ' '
});
var lyr_classif_1 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_classif_1,
    sourceType: 'pbf',
    popuplayertitle: 'classif',
    extent: ol.proj.transformExtent([-16063.8937750869, 681653.3966112132, 201311.6096344829, 1247725.1750644702], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_classif_1,
    title: '<img src="styles/legend/classif_1.png" /> classif'
});


var vectorTileUrl_prefecture_2 = 'layers/prefecture_2-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_prefecture_2 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 3,
    maxZoom: 4,
    url: vectorTileUrl_prefecture_2,
    attributions: ' '
});
var lyr_prefecture_2 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_prefecture_2,
    sourceType: 'pbf',
    popuplayertitle: 'prefecture',
    extent: ol.proj.transformExtent([-16063.8937750869, 1105903.6380924208, 102563.2194397101, 1247725.1750644702], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_prefecture_2,
    title: '<img src="styles/legend/prefecture_2.png" /> prefecture'
});


var vectorTileUrl_pmh_savanes_3 = 'layers/pmh_savanes_3-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_pmh_savanes_3 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 3,
    maxZoom: 4,
    url: vectorTileUrl_pmh_savanes_3,
    attributions: ' '
});
var lyr_pmh_savanes_3 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_pmh_savanes_3,
    sourceType: 'pbf',
    popuplayertitle: 'pmh_savanes',
    extent: ol.proj.transformExtent([-14873.953762343252, 1107148.56793938, 100065.09027407362, 1247172.9668267833], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_pmh_savanes_3,
    title: '<img src="styles/legend/pmh_savanes_3.png" /> pmh_savanes'
});


lyr_OSMStandard_0.setVisible(true);lyr_classif_1.setVisible(true);lyr_prefecture_2.setVisible(true);lyr_pmh_savanes_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_classif_1,lyr_prefecture_2,lyr_pmh_savanes_3];
lyr_classif_1.set('fieldAliases', {'fid': 'fid', 'region_id': 'region_id', 'region_nom': 'region_nom', 'prefecture': 'prefecture', 'prefectu_1': 'prefectu_1', 'grand_lome': 'grand_lome', 'nb_pmh': 'nb_pmh', });
lyr_prefecture_2.set('fieldAliases', {'fid': 'fid', 'region_id': 'region_id', 'region_nom': 'region_nom', 'prefecture': 'prefecture', 'prefectu_1': 'prefectu_1', 'grand_lome': 'grand_lome', });
lyr_pmh_savanes_3.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'region_nom': 'region_nom', 'prefecture': 'prefecture', 'commune_no': 'commune_no', 'canton_nom': 'canton_nom', 'nom_locali': 'nom_locali', 'organisme': 'organisme', });
lyr_classif_1.set('fieldImages', {'fid': '', 'region_id': '', 'region_nom': '', 'prefecture': '', 'prefectu_1': '', 'grand_lome': '', 'nb_pmh': '', });
lyr_prefecture_2.set('fieldImages', {'fid': '', 'region_id': '', 'region_nom': '', 'prefecture': '', 'prefectu_1': '', 'grand_lome': '', });
lyr_pmh_savanes_3.set('fieldImages', {'gid': '', 'id': '', 'region_nom': '', 'prefecture': '', 'commune_no': '', 'canton_nom': '', 'nom_locali': '', 'organisme': '', });
lyr_classif_1.set('fieldLabels', {'fid': 'header label - visible with data', 'region_id': 'header label - visible with data', 'region_nom': 'header label - visible with data', 'prefecture': 'header label - visible with data', 'prefectu_1': 'header label - visible with data', 'grand_lome': 'header label - visible with data', 'nb_pmh': 'header label - visible with data', });
lyr_prefecture_2.set('fieldLabels', {'fid': 'header label - visible with data', 'region_id': 'header label - visible with data', 'region_nom': 'header label - visible with data', 'prefecture': 'header label - visible with data', 'prefectu_1': 'header label - visible with data', 'grand_lome': 'header label - visible with data', });
lyr_pmh_savanes_3.set('fieldLabels', {'gid': 'header label - visible with data', 'id': 'header label - visible with data', 'region_nom': 'header label - visible with data', 'prefecture': 'header label - visible with data', 'commune_no': 'header label - visible with data', 'canton_nom': 'header label - visible with data', 'nom_locali': 'header label - visible with data', 'organisme': 'header label - visible with data', });
lyr_pmh_savanes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});