var wms_layers = [];

var format_Median_Income_and_AMI_census_tract_0 = new ol.format.GeoJSON();
var features_Median_Income_and_AMI_census_tract_0 = format_Median_Income_and_AMI_census_tract_0.readFeatures(json_Median_Income_and_AMI_census_tract_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Median_Income_and_AMI_census_tract_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Median_Income_and_AMI_census_tract_0.addFeatures(features_Median_Income_and_AMI_census_tract_0);
var lyr_Median_Income_and_AMI_census_tract_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Median_Income_and_AMI_census_tract_0, 
                style: style_Median_Income_and_AMI_census_tract_0,
                popuplayertitle: 'Median_Income_and_AMI_(census_tract)',
                interactive: true,
    title: 'Median_Income_and_AMI_(census_tract)<br />\
    <img src="styles/legend/Median_Income_and_AMI_census_tract_0_0.png" /> 1 - 47192<br />\
    <img src="styles/legend/Median_Income_and_AMI_census_tract_0_1.png" /> 47192 - 61548<br />\
    <img src="styles/legend/Median_Income_and_AMI_census_tract_0_2.png" /> 61548 - 77866<br />\
    <img src="styles/legend/Median_Income_and_AMI_census_tract_0_3.png" /> 77866 - 100685<br />\
    <img src="styles/legend/Median_Income_and_AMI_census_tract_0_4.png" /> 100685 - 250001<br />' });
var format_2024BusData_1 = new ol.format.GeoJSON();
var features_2024BusData_1 = format_2024BusData_1.readFeatures(json_2024BusData_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024BusData_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024BusData_1.addFeatures(features_2024BusData_1);
var lyr_2024BusData_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024BusData_1, 
                style: style_2024BusData_1,
                popuplayertitle: '2024 Bus Data',
                interactive: true,
                title: '<img src="styles/legend/2024BusData_1.png" /> 2024 Bus Data'
            });
var format_2024RailData_2 = new ol.format.GeoJSON();
var features_2024RailData_2 = format_2024RailData_2.readFeatures(json_2024RailData_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024RailData_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024RailData_2.addFeatures(features_2024RailData_2);
var lyr_2024RailData_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024RailData_2, 
                style: style_2024RailData_2,
                popuplayertitle: '2024 Rail Data',
                interactive: true,
                title: '<img src="styles/legend/2024RailData_2.png" /> 2024 Rail Data'
            });
var format_2023BusData_3 = new ol.format.GeoJSON();
var features_2023BusData_3 = format_2023BusData_3.readFeatures(json_2023BusData_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2023BusData_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023BusData_3.addFeatures(features_2023BusData_3);
var lyr_2023BusData_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2023BusData_3, 
                style: style_2023BusData_3,
                popuplayertitle: '2023 Bus Data',
                interactive: true,
                title: '<img src="styles/legend/2023BusData_3.png" /> 2023 Bus Data'
            });
var format_2023RailData_4 = new ol.format.GeoJSON();
var features_2023RailData_4 = format_2023RailData_4.readFeatures(json_2023RailData_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2023RailData_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023RailData_4.addFeatures(features_2023RailData_4);
var lyr_2023RailData_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2023RailData_4, 
                style: style_2023RailData_4,
                popuplayertitle: '2023 Rail Data',
                interactive: true,
                title: '<img src="styles/legend/2023RailData_4.png" /> 2023 Rail Data'
            });
var format_2022BusData_5 = new ol.format.GeoJSON();
var features_2022BusData_5 = format_2022BusData_5.readFeatures(json_2022BusData_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022BusData_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022BusData_5.addFeatures(features_2022BusData_5);
var lyr_2022BusData_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2022BusData_5, 
                style: style_2022BusData_5,
                popuplayertitle: '2022 Bus Data',
                interactive: true,
                title: '<img src="styles/legend/2022BusData_5.png" /> 2022 Bus Data'
            });
var format_2022RailData_6 = new ol.format.GeoJSON();
var features_2022RailData_6 = format_2022RailData_6.readFeatures(json_2022RailData_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2022RailData_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2022RailData_6.addFeatures(features_2022RailData_6);
var lyr_2022RailData_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2022RailData_6, 
                style: style_2022RailData_6,
                popuplayertitle: '2022 Rail Data',
                interactive: true,
                title: '<img src="styles/legend/2022RailData_6.png" /> 2022 Rail Data'
            });
var format_2021BusLines_7 = new ol.format.GeoJSON();
var features_2021BusLines_7 = format_2021BusLines_7.readFeatures(json_2021BusLines_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021BusLines_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021BusLines_7.addFeatures(features_2021BusLines_7);
var lyr_2021BusLines_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2021BusLines_7, 
                style: style_2021BusLines_7,
                popuplayertitle: '2021 Bus Lines',
                interactive: true,
                title: '<img src="styles/legend/2021BusLines_7.png" /> 2021 Bus Lines'
            });
var format_2020BusData_8 = new ol.format.GeoJSON();
var features_2020BusData_8 = format_2020BusData_8.readFeatures(json_2020BusData_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020BusData_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020BusData_8.addFeatures(features_2020BusData_8);
var lyr_2020BusData_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2020BusData_8, 
                style: style_2020BusData_8,
                popuplayertitle: '2020 Bus Data',
                interactive: true,
                title: '<img src="styles/legend/2020BusData_8.png" /> 2020 Bus Data'
            });
var format_2019BusData_9 = new ol.format.GeoJSON();
var features_2019BusData_9 = format_2019BusData_9.readFeatures(json_2019BusData_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019BusData_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2019BusData_9.addFeatures(features_2019BusData_9);
var lyr_2019BusData_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2019BusData_9, 
                style: style_2019BusData_9,
                popuplayertitle: '2019 Bus Data',
                interactive: true,
                title: '<img src="styles/legend/2019BusData_9.png" /> 2019 Bus Data'
            });
var format_2018BusData_10 = new ol.format.GeoJSON();
var features_2018BusData_10 = format_2018BusData_10.readFeatures(json_2018BusData_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018BusData_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2018BusData_10.addFeatures(features_2018BusData_10);
var lyr_2018BusData_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2018BusData_10, 
                style: style_2018BusData_10,
                popuplayertitle: '2018 Bus Data',
                interactive: true,
                title: '<img src="styles/legend/2018BusData_10.png" /> 2018 Bus Data'
            });
var format_20182021RailData_11 = new ol.format.GeoJSON();
var features_20182021RailData_11 = format_20182021RailData_11.readFeatures(json_20182021RailData_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20182021RailData_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20182021RailData_11.addFeatures(features_20182021RailData_11);
var lyr_20182021RailData_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20182021RailData_11, 
                style: style_20182021RailData_11,
                popuplayertitle: '2018/2021 Rail Data',
                interactive: true,
                title: '<img src="styles/legend/20182021RailData_11.png" /> 2018/2021 Rail Data'
            });

lyr_Median_Income_and_AMI_census_tract_0.setVisible(true);lyr_2024BusData_1.setVisible(true);lyr_2024RailData_2.setVisible(true);lyr_2023BusData_3.setVisible(true);lyr_2023RailData_4.setVisible(true);lyr_2022BusData_5.setVisible(true);lyr_2022RailData_6.setVisible(true);lyr_2021BusLines_7.setVisible(true);lyr_2020BusData_8.setVisible(true);lyr_2019BusData_9.setVisible(true);lyr_2018BusData_10.setVisible(true);lyr_20182021RailData_11.setVisible(true);
var layersList = [lyr_Median_Income_and_AMI_census_tract_0,lyr_2024BusData_1,lyr_2024RailData_2,lyr_2023BusData_3,lyr_2023RailData_4,lyr_2022BusData_5,lyr_2022RailData_6,lyr_2021BusLines_7,lyr_2020BusData_8,lyr_2019BusData_9,lyr_2018BusData_10,lyr_20182021RailData_11];
lyr_Median_Income_and_AMI_census_tract_0.set('fieldAliases', {'tract': 'tract', 'med_hh_inc': 'med_hh_inc', 'med_hh_i_1': 'med_hh_i_1', 'ami_catego': 'ami_catego', 'below_med_': 'below_med_', 'below_60pc': 'below_60pc', 'below_mode': 'below_mode', 'sup_dist': 'sup_dist', 'csa': 'csa', 'spa': 'spa', 'ESRI_OID': 'ESRI_OID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_2024BusData_1.set('fieldAliases', {'fid': 'fid', 'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', 'layer': 'layer', 'path': 'path', 'year': 'year', });
lyr_2024RailData_2.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'shape_id': 'shape_id', 'route_id': 'route_id', 'agency_id': 'agency_id', 'rt_shrt_nm': 'rt_shrt_nm', 'rt_long_nm': 'rt_long_nm', 'route_desc': 'route_desc', 'route_type': 'route_type', 'rt_typ_txt': 'rt_typ_txt', 'route_url': 'route_url', 'rt_color': 'rt_color', 'rt_col_fmt': 'rt_col_fmt', 'rt_txt_col': 'rt_txt_col', 'rt_txt_fmt': 'rt_txt_fmt', 'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_2023BusData_3.set('fieldAliases', {'fid': 'fid', 'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', 'layer': 'layer', 'path': 'path', 'year': 'year', });
lyr_2023RailData_4.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'shape_id': 'shape_id', 'route_id': 'route_id', 'agency_id': 'agency_id', 'rt_shrt_nm': 'rt_shrt_nm', 'rt_long_nm': 'rt_long_nm', 'route_desc': 'route_desc', 'route_type': 'route_type', 'rt_typ_txt': 'rt_typ_txt', 'route_url': 'route_url', 'rt_color': 'rt_color', 'rt_col_fmt': 'rt_col_fmt', 'rt_txt_col': 'rt_txt_col', 'rt_txt_fmt': 'rt_txt_fmt', 'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_2022BusData_5.set('fieldAliases', {'fid': 'fid', 'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', 'layer': 'layer', 'path': 'path', 'year': 'year', });
lyr_2022RailData_6.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'shape_id': 'shape_id', 'route_id': 'route_id', 'agency_id': 'agency_id', 'rt_shrt_nm': 'rt_shrt_nm', 'rt_long_nm': 'rt_long_nm', 'route_desc': 'route_desc', 'route_type': 'route_type', 'rt_typ_txt': 'rt_typ_txt', 'route_url': 'route_url', 'rt_color': 'rt_color', 'rt_col_fmt': 'rt_col_fmt', 'rt_txt_col': 'rt_txt_col', 'rt_txt_fmt': 'rt_txt_fmt', 'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_2021BusLines_7.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', 'layer': 'layer', 'path': 'path', });
lyr_2020BusData_8.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', 'layer': 'layer', 'path': 'path', });
lyr_2019BusData_9.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', 'layer': 'layer', 'path': 'path', });
lyr_2018BusData_10.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', 'layer': 'layer', 'path': 'path', });
lyr_20182021RailData_11.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'shape_id': 'shape_id', 'route_id': 'route_id', 'agency_id': 'agency_id', 'rt_shrt_nm': 'rt_shrt_nm', 'rt_long_nm': 'rt_long_nm', 'route_desc': 'route_desc', 'route_type': 'route_type', 'rt_typ_txt': 'rt_typ_txt', 'route_url': 'route_url', 'rt_color': 'rt_color', 'rt_col_fmt': 'rt_col_fmt', 'rt_txt_col': 'rt_txt_col', 'rt_txt_fmt': 'rt_txt_fmt', 'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_Median_Income_and_AMI_census_tract_0.set('fieldImages', {'tract': 'TextEdit', 'med_hh_inc': 'Range', 'med_hh_i_1': 'Range', 'ami_catego': 'TextEdit', 'below_med_': 'TextEdit', 'below_60pc': 'TextEdit', 'below_mode': 'TextEdit', 'sup_dist': 'TextEdit', 'csa': 'TextEdit', 'spa': 'TextEdit', 'ESRI_OID': 'Range', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_2024BusData_1.set('fieldImages', {'fid': 'TextEdit', 'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'year': 'TextEdit', });
lyr_2024RailData_2.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'shape_id': 'TextEdit', 'route_id': 'TextEdit', 'agency_id': 'TextEdit', 'rt_shrt_nm': 'TextEdit', 'rt_long_nm': 'TextEdit', 'route_desc': 'TextEdit', 'route_type': 'TextEdit', 'rt_typ_txt': 'TextEdit', 'route_url': 'TextEdit', 'rt_color': 'TextEdit', 'rt_col_fmt': 'TextEdit', 'rt_txt_col': 'TextEdit', 'rt_txt_fmt': 'TextEdit', 'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_2023BusData_3.set('fieldImages', {'fid': 'TextEdit', 'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'year': 'TextEdit', });
lyr_2023RailData_4.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'shape_id': 'TextEdit', 'route_id': 'TextEdit', 'agency_id': 'TextEdit', 'rt_shrt_nm': 'TextEdit', 'rt_long_nm': 'TextEdit', 'route_desc': 'TextEdit', 'route_type': 'TextEdit', 'rt_typ_txt': 'TextEdit', 'route_url': 'TextEdit', 'rt_color': 'TextEdit', 'rt_col_fmt': 'TextEdit', 'rt_txt_col': 'TextEdit', 'rt_txt_fmt': 'TextEdit', 'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_2022BusData_5.set('fieldImages', {'fid': 'TextEdit', 'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'year': 'TextEdit', });
lyr_2022RailData_6.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'shape_id': 'TextEdit', 'route_id': 'TextEdit', 'agency_id': 'TextEdit', 'rt_shrt_nm': 'TextEdit', 'rt_long_nm': 'TextEdit', 'route_desc': 'TextEdit', 'route_type': 'TextEdit', 'rt_typ_txt': 'TextEdit', 'route_url': 'TextEdit', 'rt_color': 'TextEdit', 'rt_col_fmt': 'TextEdit', 'rt_txt_col': 'TextEdit', 'rt_txt_fmt': 'TextEdit', 'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_2021BusLines_7.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_2020BusData_8.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_2019BusData_9.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_2018BusData_10.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_20182021RailData_11.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', 'shape_id': 'TextEdit', 'route_id': 'TextEdit', 'agency_id': 'TextEdit', 'rt_shrt_nm': 'TextEdit', 'rt_long_nm': 'TextEdit', 'route_desc': 'TextEdit', 'route_type': 'Range', 'rt_typ_txt': 'TextEdit', 'route_url': 'TextEdit', 'rt_color': 'TextEdit', 'rt_col_fmt': 'TextEdit', 'rt_txt_col': 'TextEdit', 'rt_txt_fmt': 'TextEdit', 'OBJECTID': 'Range', 'SHAPE_Leng': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Median_Income_and_AMI_census_tract_0.set('fieldLabels', {'tract': 'no label', 'med_hh_inc': 'no label', 'med_hh_i_1': 'no label', 'ami_catego': 'no label', 'below_med_': 'no label', 'below_60pc': 'no label', 'below_mode': 'no label', 'sup_dist': 'no label', 'csa': 'no label', 'spa': 'no label', 'ESRI_OID': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_2024BusData_1.set('fieldLabels', {'fid': 'no label', 'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', 'layer': 'no label', 'path': 'no label', 'year': 'no label', });
lyr_2024RailData_2.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'shape_id': 'no label', 'route_id': 'no label', 'agency_id': 'no label', 'rt_shrt_nm': 'no label', 'rt_long_nm': 'no label', 'route_desc': 'no label', 'route_type': 'no label', 'rt_typ_txt': 'no label', 'route_url': 'no label', 'rt_color': 'no label', 'rt_col_fmt': 'no label', 'rt_txt_col': 'no label', 'rt_txt_fmt': 'no label', 'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_2023BusData_3.set('fieldLabels', {'fid': 'no label', 'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', 'layer': 'no label', 'path': 'no label', 'year': 'no label', });
lyr_2023RailData_4.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'shape_id': 'no label', 'route_id': 'no label', 'agency_id': 'no label', 'rt_shrt_nm': 'no label', 'rt_long_nm': 'no label', 'route_desc': 'no label', 'route_type': 'no label', 'rt_typ_txt': 'no label', 'route_url': 'no label', 'rt_color': 'no label', 'rt_col_fmt': 'no label', 'rt_txt_col': 'no label', 'rt_txt_fmt': 'no label', 'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_2022BusData_5.set('fieldLabels', {'fid': 'no label', 'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', 'layer': 'no label', 'path': 'no label', 'year': 'no label', });
lyr_2022RailData_6.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'shape_id': 'no label', 'route_id': 'no label', 'agency_id': 'no label', 'rt_shrt_nm': 'no label', 'rt_long_nm': 'no label', 'route_desc': 'no label', 'route_type': 'no label', 'rt_typ_txt': 'no label', 'route_url': 'no label', 'rt_color': 'no label', 'rt_col_fmt': 'no label', 'rt_txt_col': 'no label', 'rt_txt_fmt': 'no label', 'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_2021BusLines_7.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_2020BusData_8.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_2019BusData_9.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_2018BusData_10.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_20182021RailData_11.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'shape_id': 'no label', 'route_id': 'no label', 'agency_id': 'no label', 'rt_shrt_nm': 'no label', 'rt_long_nm': 'no label', 'route_desc': 'no label', 'route_type': 'no label', 'rt_typ_txt': 'no label', 'route_url': 'no label', 'rt_color': 'no label', 'rt_col_fmt': 'no label', 'rt_txt_col': 'no label', 'rt_txt_fmt': 'no label', 'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_20182021RailData_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});