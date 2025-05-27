var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_WorldImagery_1 = new ol.layer.Tile({
            'title': 'World Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_BatasKHDTKSumberwringin_2 = new ol.format.GeoJSON();
var features_BatasKHDTKSumberwringin_2 = format_BatasKHDTKSumberwringin_2.readFeatures(json_BatasKHDTKSumberwringin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKHDTKSumberwringin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKHDTKSumberwringin_2.addFeatures(features_BatasKHDTKSumberwringin_2);
var lyr_BatasKHDTKSumberwringin_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKHDTKSumberwringin_2, 
                style: style_BatasKHDTKSumberwringin_2,
                popuplayertitle: 'Batas KHDTK Sumberwringin',
                interactive: true,
                title: '<img src="styles/legend/BatasKHDTKSumberwringin_2.png" /> Batas KHDTK Sumberwringin'
            });
var format_BatasKHDTKWonogiri_3 = new ol.format.GeoJSON();
var features_BatasKHDTKWonogiri_3 = format_BatasKHDTKWonogiri_3.readFeatures(json_BatasKHDTKWonogiri_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKHDTKWonogiri_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKHDTKWonogiri_3.addFeatures(features_BatasKHDTKWonogiri_3);
var lyr_BatasKHDTKWonogiri_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKHDTKWonogiri_3, 
                style: style_BatasKHDTKWonogiri_3,
                popuplayertitle: 'Batas KHDTK Wonogiri',
                interactive: true,
                title: '<img src="styles/legend/BatasKHDTKWonogiri_3.png" /> Batas KHDTK Wonogiri'
            });
var format_BatasKHDTKPlayen_4 = new ol.format.GeoJSON();
var features_BatasKHDTKPlayen_4 = format_BatasKHDTKPlayen_4.readFeatures(json_BatasKHDTKPlayen_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKHDTKPlayen_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKHDTKPlayen_4.addFeatures(features_BatasKHDTKPlayen_4);
var lyr_BatasKHDTKPlayen_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKHDTKPlayen_4, 
                style: style_BatasKHDTKPlayen_4,
                popuplayertitle: 'Batas KHDTK Playen',
                interactive: true,
                title: '<img src="styles/legend/BatasKHDTKPlayen_4.png" /> Batas KHDTK Playen'
            });
var format_Tanaman_Eks_Penelitian_rev_5 = new ol.format.GeoJSON();
var features_Tanaman_Eks_Penelitian_rev_5 = format_Tanaman_Eks_Penelitian_rev_5.readFeatures(json_Tanaman_Eks_Penelitian_rev_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tanaman_Eks_Penelitian_rev_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tanaman_Eks_Penelitian_rev_5.addFeatures(features_Tanaman_Eks_Penelitian_rev_5);
var lyr_Tanaman_Eks_Penelitian_rev_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tanaman_Eks_Penelitian_rev_5, 
                style: style_Tanaman_Eks_Penelitian_rev_5,
                popuplayertitle: 'Tanaman_Eks_Penelitian_rev',
                interactive: true,
                title: '<img src="styles/legend/Tanaman_Eks_Penelitian_rev_5.png" /> Tanaman_Eks_Penelitian_rev'
            });
var format_RHL_Lahan_Kosong_6 = new ol.format.GeoJSON();
var features_RHL_Lahan_Kosong_6 = format_RHL_Lahan_Kosong_6.readFeatures(json_RHL_Lahan_Kosong_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RHL_Lahan_Kosong_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RHL_Lahan_Kosong_6.addFeatures(features_RHL_Lahan_Kosong_6);
var lyr_RHL_Lahan_Kosong_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RHL_Lahan_Kosong_6, 
                style: style_RHL_Lahan_Kosong_6,
                popuplayertitle: 'RHL_Lahan_Kosong',
                interactive: true,
                title: '<img src="styles/legend/RHL_Lahan_Kosong_6.png" /> RHL_Lahan_Kosong'
            });
var format_RHL_Sawah_Tadah_Hujan_7 = new ol.format.GeoJSON();
var features_RHL_Sawah_Tadah_Hujan_7 = format_RHL_Sawah_Tadah_Hujan_7.readFeatures(json_RHL_Sawah_Tadah_Hujan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RHL_Sawah_Tadah_Hujan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RHL_Sawah_Tadah_Hujan_7.addFeatures(features_RHL_Sawah_Tadah_Hujan_7);
var lyr_RHL_Sawah_Tadah_Hujan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RHL_Sawah_Tadah_Hujan_7, 
                style: style_RHL_Sawah_Tadah_Hujan_7,
                popuplayertitle: 'RHL_Sawah_Tadah_Hujan',
                interactive: true,
                title: '<img src="styles/legend/RHL_Sawah_Tadah_Hujan_7.png" /> RHL_Sawah_Tadah_Hujan'
            });
var format_KHDTK_Gabung1_8 = new ol.format.GeoJSON();
var features_KHDTK_Gabung1_8 = format_KHDTK_Gabung1_8.readFeatures(json_KHDTK_Gabung1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KHDTK_Gabung1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KHDTK_Gabung1_8.addFeatures(features_KHDTK_Gabung1_8);
var lyr_KHDTK_Gabung1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KHDTK_Gabung1_8, 
                style: style_KHDTK_Gabung1_8,
                popuplayertitle: 'KHDTK_Gabung1',
                interactive: true,
                title: 'KHDTK_Gabung1'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_WorldImagery_1.setVisible(true);lyr_BatasKHDTKSumberwringin_2.setVisible(true);lyr_BatasKHDTKWonogiri_3.setVisible(true);lyr_BatasKHDTKPlayen_4.setVisible(true);lyr_Tanaman_Eks_Penelitian_rev_5.setVisible(true);lyr_RHL_Lahan_Kosong_6.setVisible(true);lyr_RHL_Sawah_Tadah_Hujan_7.setVisible(true);lyr_KHDTK_Gabung1_8.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_WorldImagery_1,lyr_BatasKHDTKSumberwringin_2,lyr_BatasKHDTKWonogiri_3,lyr_BatasKHDTKPlayen_4,lyr_Tanaman_Eks_Penelitian_rev_5,lyr_RHL_Lahan_Kosong_6,lyr_RHL_Sawah_Tadah_Hujan_7,lyr_KHDTK_Gabung1_8];
lyr_BatasKHDTKSumberwringin_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BatasKHDTKWonogiri_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'PROVINSI': 'PROVINSI', 'FUNGSI_BSR': 'FUNGSI_BSR', 'PENGUKUHAN': 'PENGUKUHAN', 'PNJK_PROV': 'PNJK_PROV', 'TGL_PROV': 'TGL_PROV', 'LUAS_PROV': 'LUAS_PROV', 'SK_JUK': 'SK_JUK', 'TGL_JUK': 'TGL_JUK', 'LUAS_JUK': 'LUAS_JUK', 'TGL_BATB': 'TGL_BATB', 'SAH_BATB': 'SAH_BATB', 'LUAS_TTBha': 'LUAS_TTBha', 'SK_TAP': 'SK_TAP', 'TGL_TAP': 'TGL_TAP', 'LUAS_TAP': 'LUAS_TAP', 'SK_LEPAS': 'SK_LEPAS', 'TGL_LEPAS': 'TGL_LEPAS', 'LUAS_LEPAS': 'LUAS_LEPAS', 'ASAL_TNH': 'ASAL_TNH', 'PEMOHON': 'PEMOHON', 'SK_PERKEM': 'SK_PERKEM', 'TGL_PERKEM': 'TGL_PERKEM', 'RPD': 'RPD', 'EDITOR': 'EDITOR', 'TGL_EDIT': 'TGL_EDIT', 'EDIT': 'EDIT', 'TahunTap': 'TahunTap', 'FUNGSIAWAL': 'FUNGSIAWAL', 'KODE_KH': 'KODE_KH', 'F_AKHIR': 'F_AKHIR', 'LUAS': 'LUAS', 'KODE_PROV': 'KODE_PROV', 'KD_FUNGSI': 'KD_FUNGSI', 'KD_ST_TAP': 'KD_ST_TAP', 'KD_THP_TAP': 'KD_THP_TAP', 'JENIS_KEGI': 'JENIS_KEGI', 'THN_PB': 'THN_PB', 'BATB_PV': 'BATB_PV', 'INFORMASI': 'INFORMASI', 'NAMA': 'NAMA', 'UPAYA_TAP': 'UPAYA_TAP', 'THN_USULAN': 'THN_USULAN', 'Hectares': 'Hectares', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'LUAS_Ha': 'LUAS_Ha', });
lyr_BatasKHDTKPlayen_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'luas__ha_': 'luas__ha_', });
lyr_Tanaman_Eks_Penelitian_rev_5.set('fieldAliases', {'Luas': 'Luas', 'Jenis_tnm': 'Tutupan Lahan', 'Tuplah': 'Tuplah', });
lyr_RHL_Lahan_Kosong_6.set('fieldAliases', {'Luas__Ha1_': 'Luas__Ha1_', 'Calon_RHL': 'Tutupan Lahan', 'Luas_Ha': 'Luas_Ha', });
lyr_RHL_Sawah_Tadah_Hujan_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luas__ha_': 'Luas__ha_', 'Tuplah': 'Tutupan Lahan', });
lyr_KHDTK_Gabung1_8.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Id': 'Id', 'Nama': 'Nama', 'OBJECTID': 'OBJECTID', 'Lokasi_1': 'Letak', 'LokasiKawa': 'Kawasan', 'Koordina_1': 'Koordinat', 'Luas': 'Luas', 'SK_1': 'SK', 'Foto': 'Foto', 'Peta': 'Peta', 'Nama_KHDTK': 'Alamat GMaps', 'auxiliary_storage_labeling_predefinedpositionorder': 'auxiliary_storage_labeling_predefinedpositionorder', 'auxiliary_storage_labeling_offsetquad': 'auxiliary_storage_labeling_offsetquad', });
lyr_BatasKHDTKSumberwringin_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BatasKHDTKWonogiri_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'PROVINSI': 'TextEdit', 'FUNGSI_BSR': 'TextEdit', 'PENGUKUHAN': 'TextEdit', 'PNJK_PROV': 'TextEdit', 'TGL_PROV': 'TextEdit', 'LUAS_PROV': 'TextEdit', 'SK_JUK': 'TextEdit', 'TGL_JUK': 'TextEdit', 'LUAS_JUK': 'TextEdit', 'TGL_BATB': 'TextEdit', 'SAH_BATB': 'TextEdit', 'LUAS_TTBha': 'TextEdit', 'SK_TAP': 'TextEdit', 'TGL_TAP': 'TextEdit', 'LUAS_TAP': 'TextEdit', 'SK_LEPAS': 'TextEdit', 'TGL_LEPAS': 'TextEdit', 'LUAS_LEPAS': 'TextEdit', 'ASAL_TNH': 'TextEdit', 'PEMOHON': 'TextEdit', 'SK_PERKEM': 'TextEdit', 'TGL_PERKEM': 'TextEdit', 'RPD': 'TextEdit', 'EDITOR': 'TextEdit', 'TGL_EDIT': 'TextEdit', 'EDIT': 'TextEdit', 'TahunTap': 'TextEdit', 'FUNGSIAWAL': 'TextEdit', 'KODE_KH': 'TextEdit', 'F_AKHIR': 'TextEdit', 'LUAS': 'TextEdit', 'KODE_PROV': 'TextEdit', 'KD_FUNGSI': 'TextEdit', 'KD_ST_TAP': 'TextEdit', 'KD_THP_TAP': 'TextEdit', 'JENIS_KEGI': 'TextEdit', 'THN_PB': 'TextEdit', 'BATB_PV': 'TextEdit', 'INFORMASI': 'TextEdit', 'NAMA': 'TextEdit', 'UPAYA_TAP': 'TextEdit', 'THN_USULAN': 'TextEdit', 'Hectares': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'LUAS_Ha': 'TextEdit', });
lyr_BatasKHDTKPlayen_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'luas__ha_': 'TextEdit', });
lyr_Tanaman_Eks_Penelitian_rev_5.set('fieldImages', {'Luas': 'Hidden', 'Jenis_tnm': 'TextEdit', 'Tuplah': 'Hidden', });
lyr_RHL_Lahan_Kosong_6.set('fieldImages', {'Luas__Ha1_': 'TextEdit', 'Calon_RHL': 'Hidden', 'Luas_Ha': 'Hidden', });
lyr_RHL_Sawah_Tadah_Hujan_7.set('fieldImages', {'OBJECTID': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Luas__ha_': 'Hidden', 'Tuplah': 'TextEdit', });
lyr_KHDTK_Gabung1_8.set('fieldImages', {'OBJECTID_1': 'Hidden', 'Id': 'Hidden', 'Nama': 'TextEdit', 'OBJECTID': 'Hidden', 'Lokasi_1': 'TextEdit', 'LokasiKawa': 'Hidden', 'Koordina_1': 'Hidden', 'Luas': 'TextEdit', 'SK_1': 'Hidden', 'Foto': 'ExternalResource', 'Peta': 'Hidden', 'Nama_KHDTK': 'TextEdit', 'auxiliary_storage_labeling_predefinedpositionorder': 'TextEdit', 'auxiliary_storage_labeling_offsetquad': 'TextEdit', });
lyr_BatasKHDTKSumberwringin_2.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BatasKHDTKWonogiri_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'PROVINSI': 'no label', 'FUNGSI_BSR': 'no label', 'PENGUKUHAN': 'no label', 'PNJK_PROV': 'no label', 'TGL_PROV': 'no label', 'LUAS_PROV': 'no label', 'SK_JUK': 'no label', 'TGL_JUK': 'no label', 'LUAS_JUK': 'no label', 'TGL_BATB': 'no label', 'SAH_BATB': 'no label', 'LUAS_TTBha': 'no label', 'SK_TAP': 'no label', 'TGL_TAP': 'no label', 'LUAS_TAP': 'no label', 'SK_LEPAS': 'no label', 'TGL_LEPAS': 'no label', 'LUAS_LEPAS': 'no label', 'ASAL_TNH': 'no label', 'PEMOHON': 'no label', 'SK_PERKEM': 'no label', 'TGL_PERKEM': 'no label', 'RPD': 'no label', 'EDITOR': 'no label', 'TGL_EDIT': 'no label', 'EDIT': 'no label', 'TahunTap': 'no label', 'FUNGSIAWAL': 'no label', 'KODE_KH': 'no label', 'F_AKHIR': 'no label', 'LUAS': 'no label', 'KODE_PROV': 'no label', 'KD_FUNGSI': 'no label', 'KD_ST_TAP': 'no label', 'KD_THP_TAP': 'no label', 'JENIS_KEGI': 'no label', 'THN_PB': 'no label', 'BATB_PV': 'no label', 'INFORMASI': 'no label', 'NAMA': 'no label', 'UPAYA_TAP': 'no label', 'THN_USULAN': 'no label', 'Hectares': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'LUAS_Ha': 'no label', });
lyr_BatasKHDTKPlayen_4.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'luas__ha_': 'no label', });
lyr_Tanaman_Eks_Penelitian_rev_5.set('fieldLabels', {'Jenis_tnm': 'no label', });
lyr_RHL_Lahan_Kosong_6.set('fieldLabels', {'Luas__Ha1_': 'no label', });
lyr_RHL_Sawah_Tadah_Hujan_7.set('fieldLabels', {'Tuplah': 'no label', });
lyr_KHDTK_Gabung1_8.set('fieldLabels', {'Nama': 'inline label - always visible', 'Lokasi_1': 'inline label - always visible', 'Luas': 'inline label - always visible', 'Foto': 'inline label - always visible', 'Nama_KHDTK': 'inline label - visible with data', 'auxiliary_storage_labeling_predefinedpositionorder': 'no label', 'auxiliary_storage_labeling_offsetquad': 'no label', });
lyr_KHDTK_Gabung1_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});