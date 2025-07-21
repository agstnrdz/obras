var wms_layers = [];


        var lyr_Argenmap_0 = new ol.layer.Tile({
            'title': 'Argenmap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var format_Barrios_1 = new ol.format.GeoJSON();
var features_Barrios_1 = format_Barrios_1.readFeatures(json_Barrios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barrios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barrios_1.addFeatures(features_Barrios_1);
var lyr_Barrios_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barrios_1, 
                style: style_Barrios_1,
                popuplayertitle: 'Barrios',
                interactive: false,
                title: '<img src="styles/legend/Barrios_1.png" /> Barrios'
            });
var format_Obraspblicas20242025_2 = new ol.format.GeoJSON();
var features_Obraspblicas20242025_2 = format_Obraspblicas20242025_2.readFeatures(json_Obraspblicas20242025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obraspblicas20242025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obraspblicas20242025_2.addFeatures(features_Obraspblicas20242025_2);
var lyr_Obraspblicas20242025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obraspblicas20242025_2, 
                style: style_Obraspblicas20242025_2,
                popuplayertitle: 'Obras públicas 2024 - 2025',
                interactive: true,
    title: 'Obras públicas 2024 - 2025<br />\
    <img src="styles/legend/Obraspblicas20242025_2_0.png" /> Efluentes cloacales<br />\
    <img src="styles/legend/Obraspblicas20242025_2_1.png" /> Redes de agua<br />\
    <img src="styles/legend/Obraspblicas20242025_2_2.png" /> Redes de gas<br />\
    <img src="styles/legend/Obraspblicas20242025_2_3.png" /> Sistema desagüe<br />'
        });

lyr_Argenmap_0.setVisible(true);lyr_Barrios_1.setVisible(true);lyr_Obraspblicas20242025_2.setVisible(true);
var layersList = [lyr_Argenmap_0,lyr_Barrios_1,lyr_Obraspblicas20242025_2];
lyr_Barrios_1.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', });
lyr_Obraspblicas20242025_2.set('fieldAliases', {'fid': 'fid', 'Nombre de obra': 'Nombre de obra', 'lat': 'lat', 'lng': 'lng', 'Tipo': 'Tipo', 'Número': 'Número', 'Barrio': 'Barrio', 'Acta inicio': 'Acta inicio', 'Empresa': 'Empresa', 'Presupuesto': 'Presupuesto', 'Monto contrato': 'Monto contrato', 'Año': 'Año', 'Observaciones': 'Observaciones', 'Clase': 'Clase', });
lyr_Barrios_1.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', });
lyr_Obraspblicas20242025_2.set('fieldImages', {'fid': 'TextEdit', 'Nombre de obra': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'Tipo': 'TextEdit', 'Número': 'TextEdit', 'Barrio': 'TextEdit', 'Acta inicio': 'TextEdit', 'Empresa': 'TextEdit', 'Presupuesto': 'TextEdit', 'Monto contrato': 'TextEdit', 'Año': 'TextEdit', 'Observaciones': 'TextEdit', 'Clase': 'TextEdit', });
lyr_Barrios_1.set('fieldLabels', {'fid': 'no label', 'nombre': 'no label', });
lyr_Obraspblicas20242025_2.set('fieldLabels', {'fid': 'hidden field', 'Nombre de obra': 'inline label - visible with data', 'lat': 'hidden field', 'lng': 'hidden field', 'Tipo': 'inline label - visible with data', 'Número': 'inline label - visible with data', 'Barrio': 'inline label - visible with data', 'Acta inicio': 'inline label - visible with data', 'Empresa': 'inline label - visible with data', 'Presupuesto': 'inline label - visible with data', 'Monto contrato': 'inline label - visible with data', 'Año': 'inline label - visible with data', 'Observaciones': 'inline label - visible with data', 'Clase': 'hidden field', });
lyr_Obraspblicas20242025_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});