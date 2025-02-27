var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ArqMadeira_Mun_CAOP2023_2 = new ol.format.GeoJSON();
var features_ArqMadeira_Mun_CAOP2023_2 = format_ArqMadeira_Mun_CAOP2023_2.readFeatures(json_ArqMadeira_Mun_CAOP2023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArqMadeira_Mun_CAOP2023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArqMadeira_Mun_CAOP2023_2.addFeatures(features_ArqMadeira_Mun_CAOP2023_2);
var lyr_ArqMadeira_Mun_CAOP2023_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArqMadeira_Mun_CAOP2023_2, 
                style: style_ArqMadeira_Mun_CAOP2023_2,
                popuplayertitle: 'Municípios RAM',
                interactive: true,
                title: '<img src="styles/legend/ArqMadeira_Mun_CAOP2023_2.png" /> Municípios RAM'
            });

var format_ClinicasVeterinrias_4 = new ol.format.GeoJSON();
var features_ClinicasVeterinrias_4 = format_ClinicasVeterinrias_4.readFeatures(json_ClinicasVeterinrias_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClinicasVeterinrias_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClinicasVeterinrias_4.addFeatures(features_ClinicasVeterinrias_4);
var lyr_ClinicasVeterinrias_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClinicasVeterinrias_4, 
                style: style_ClinicasVeterinrias_4,
                popuplayertitle: 'Clinicas Veterinárias',
                interactive: true,
                title: '<img src="styles/legend/ClinicasVeterinrias_4.png" /> Clínicas Veterinárias'
            });
var format_HospitalVeterinrio_5 = new ol.format.GeoJSON();
var features_HospitalVeterinrio_5 = format_HospitalVeterinrio_5.readFeatures(json_HospitalVeterinrio_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HospitalVeterinrio_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HospitalVeterinrio_5.addFeatures(features_HospitalVeterinrio_5);
var lyr_HospitalVeterinrio_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HospitalVeterinrio_5, 
                style: style_HospitalVeterinrio_5,
                popuplayertitle: 'Hospital Veterinário',
                interactive: true,
                title: '<img src="styles/legend/HospitalVeterinrio_5.png" /> Hospital Veterinário'
            });
var format_UnidadesHoteleiras_6 = new ol.format.GeoJSON();
var features_UnidadesHoteleiras_6 = format_UnidadesHoteleiras_6.readFeatures(json_UnidadesHoteleiras_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidadesHoteleiras_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesHoteleiras_6.addFeatures(features_UnidadesHoteleiras_6);
var lyr_UnidadesHoteleiras_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesHoteleiras_6, 
                style: style_UnidadesHoteleiras_6,
                popuplayertitle: 'Unidades Hoteleiras',
                interactive: true,
    title: 'Unidades Hoteleiras<br />\
    <img src="styles/legend/UnidadesHoteleiras_6_0.png" /> Hotel<br />\
    <img src="styles/legend/UnidadesHoteleiras_6_1.png" /> Hotel Apartamento<br />'
        });
var format_SuperficiesComerciais_7 = new ol.format.GeoJSON();
var features_SuperficiesComerciais_7 = format_SuperficiesComerciais_7.readFeatures(json_SuperficiesComerciais_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuperficiesComerciais_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuperficiesComerciais_7.addFeatures(features_SuperficiesComerciais_7);
var lyr_SuperficiesComerciais_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SuperficiesComerciais_7, 
                style: style_SuperficiesComerciais_7,
                popuplayertitle: 'Superficies Comerciais',
                interactive: true,
                title: '<img src="styles/legend/SuperficiesComerciais_7.png" /> Superfícies Comerciais'
            });
var format_aguas_costeiras_zonas_protecao_8 = new ol.format.GeoJSON();
var features_aguas_costeiras_zonas_protecao_8 = format_aguas_costeiras_zonas_protecao_8.readFeatures(json_aguas_costeiras_zonas_protecao_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aguas_costeiras_zonas_protecao_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aguas_costeiras_zonas_protecao_8.addFeatures(features_aguas_costeiras_zonas_protecao_8);
var lyr_aguas_costeiras_zonas_protecao_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aguas_costeiras_zonas_protecao_8, 
                style: style_aguas_costeiras_zonas_protecao_8,
                popuplayertitle: 'Águas Costeiras - Zonas de Proteção',
                interactive: true,
                title: '<img src="styles/legend/aguas_costeiras_zonas_protecao_8.png" /> Águas Costeiras - Zonas de Proteção'
            });
var format_Laurissilva_9 = new ol.format.GeoJSON();
var features_Laurissilva_9 = format_Laurissilva_9.readFeatures(json_Laurissilva_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Laurissilva_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Laurissilva_9.addFeatures(features_Laurissilva_9);
var lyr_Laurissilva_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Laurissilva_9, 
                style: style_Laurissilva_9,
                popuplayertitle: 'Laurissilva',
                interactive: true,
                title: '<img src="styles/legend/Laurissilva_9.png" /> Laurissilva'
            });
var format_macico_montanhoso_central_10 = new ol.format.GeoJSON();
var features_macico_montanhoso_central_10 = format_macico_montanhoso_central_10.readFeatures(json_macico_montanhoso_central_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_macico_montanhoso_central_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_macico_montanhoso_central_10.addFeatures(features_macico_montanhoso_central_10);
var lyr_macico_montanhoso_central_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_macico_montanhoso_central_10, 
                style: style_macico_montanhoso_central_10,
                popuplayertitle: 'Maciço Montanhoso Central',
                interactive: true,
                title: '<img src="styles/legend/macico_montanhoso_central_10.png" /> Maciço Montanhoso Central'
            });
var format_Ponta_SLourencpo_11 = new ol.format.GeoJSON();
var features_Ponta_SLourencpo_11 = format_Ponta_SLourencpo_11.readFeatures(json_Ponta_SLourencpo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ponta_SLourencpo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ponta_SLourencpo_11.addFeatures(features_Ponta_SLourencpo_11);
var lyr_Ponta_SLourencpo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ponta_SLourencpo_11, 
                style: style_Ponta_SLourencpo_11,
                popuplayertitle: 'Ponta de São Lourenço',
                interactive: true,
                title: '<img src="styles/legend/Ponta_SLourencpo_11.png" /> Ponta de São Lourenço'
            });
var format_Moledos_madalenaMar_12 = new ol.format.GeoJSON();
var features_Moledos_madalenaMar_12 = format_Moledos_madalenaMar_12.readFeatures(json_Moledos_madalenaMar_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Moledos_madalenaMar_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Moledos_madalenaMar_12.addFeatures(features_Moledos_madalenaMar_12);
var lyr_Moledos_madalenaMar_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Moledos_madalenaMar_12, 
                style: style_Moledos_madalenaMar_12,
                popuplayertitle: 'Moledos - Madalena do Mar',
                interactive: true,
                title: '<img src="styles/legend/Moledos_madalenaMar_12.png" /> Moledos Madalena do Mar'
            });
var format_achadas_da_cruz_13 = new ol.format.GeoJSON();
var features_achadas_da_cruz_13 = format_achadas_da_cruz_13.readFeatures(json_achadas_da_cruz_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_achadas_da_cruz_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_achadas_da_cruz_13.addFeatures(features_achadas_da_cruz_13);
var lyr_achadas_da_cruz_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_achadas_da_cruz_13, 
                style: style_achadas_da_cruz_13,
                popuplayertitle: 'Achadas da Cruz',
                interactive: true,
                title: '<img src="styles/legend/achadas_da_cruz_13.png" /> Achadas da Cruz'
            });
var format_reaProtegidadoCaboGiro_14 = new ol.format.GeoJSON();
var features_reaProtegidadoCaboGiro_14 = format_reaProtegidadoCaboGiro_14.readFeatures(json_reaProtegidadoCaboGiro_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaProtegidadoCaboGiro_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaProtegidadoCaboGiro_14.addFeatures(features_reaProtegidadoCaboGiro_14);
var lyr_reaProtegidadoCaboGiro_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaProtegidadoCaboGiro_14, 
                style: style_reaProtegidadoCaboGiro_14,
                popuplayertitle: 'Área Protegida do Cabo Girão',
                interactive: true,
                title: '<img src="styles/legend/reaProtegidadoCaboGiro_14.png" /> Área Protegida do Cabo Girão'
            });
var format_ReservaNaturalParcialdoGarajau_15 = new ol.format.GeoJSON();
var features_ReservaNaturalParcialdoGarajau_15 = format_ReservaNaturalParcialdoGarajau_15.readFeatures(json_ReservaNaturalParcialdoGarajau_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReservaNaturalParcialdoGarajau_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservaNaturalParcialdoGarajau_15.addFeatures(features_ReservaNaturalParcialdoGarajau_15);
var lyr_ReservaNaturalParcialdoGarajau_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservaNaturalParcialdoGarajau_15, 
                style: style_ReservaNaturalParcialdoGarajau_15,
                popuplayertitle: 'Reserva Natural Parcial do Garajau',
                interactive: true,
                title: '<img src="styles/legend/ReservaNaturalParcialdoGarajau_15.png" /> Reserva Natural Parcial do Garajau'
            });
var format_reaProtegidadaPontadoPargo_16 = new ol.format.GeoJSON();
var features_reaProtegidadaPontadoPargo_16 = format_reaProtegidadaPontadoPargo_16.readFeatures(json_reaProtegidadaPontadoPargo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaProtegidadaPontadoPargo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaProtegidadaPontadoPargo_16.addFeatures(features_reaProtegidadaPontadoPargo_16);
var lyr_reaProtegidadaPontadoPargo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaProtegidadaPontadoPargo_16, 
                style: style_reaProtegidadaPontadoPargo_16,
                popuplayertitle: 'Área Protegida da Ponta do Pargo',
                interactive: true,
                title: '<img src="styles/legend/reaProtegidadaPontadoPargo_16.png" /> Área Protegida da Ponta do Pargo'
            });
var format_RededereasMarinhasdoPortoSanto_17 = new ol.format.GeoJSON();
var features_RededereasMarinhasdoPortoSanto_17 = format_RededereasMarinhasdoPortoSanto_17.readFeatures(json_RededereasMarinhasdoPortoSanto_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RededereasMarinhasdoPortoSanto_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RededereasMarinhasdoPortoSanto_17.addFeatures(features_RededereasMarinhasdoPortoSanto_17);
var lyr_RededereasMarinhasdoPortoSanto_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RededereasMarinhasdoPortoSanto_17, 
                style: style_RededereasMarinhasdoPortoSanto_17,
                popuplayertitle: 'Rede de Áreas Marinhas do Porto Santo',
                interactive: true,
                title: '<img src="styles/legend/RededereasMarinhasdoPortoSanto_17.png" /> Rede de Áreas Marinhas do Porto Santo'
            });
var format_ReservaNaturaldaRochadoNavio_18 = new ol.format.GeoJSON();
var features_ReservaNaturaldaRochadoNavio_18 = format_ReservaNaturaldaRochadoNavio_18.readFeatures(json_ReservaNaturaldaRochadoNavio_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReservaNaturaldaRochadoNavio_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservaNaturaldaRochadoNavio_18.addFeatures(features_ReservaNaturaldaRochadoNavio_18);
var lyr_ReservaNaturaldaRochadoNavio_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservaNaturaldaRochadoNavio_18, 
                style: style_ReservaNaturaldaRochadoNavio_18,
                popuplayertitle: 'Reserva Natural da Rocha do Navio',
                interactive: true,
                title: '<img src="styles/legend/ReservaNaturaldaRochadoNavio_18.png" /> Reserva Natural da Rocha do Navio'
            });
var format_ParqueNaturaldaMadeira_19 = new ol.format.GeoJSON();
var features_ParqueNaturaldaMadeira_19 = format_ParqueNaturaldaMadeira_19.readFeatures(json_ParqueNaturaldaMadeira_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParqueNaturaldaMadeira_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParqueNaturaldaMadeira_19.addFeatures(features_ParqueNaturaldaMadeira_19);
var lyr_ParqueNaturaldaMadeira_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParqueNaturaldaMadeira_19, 
                style: style_ParqueNaturaldaMadeira_19,
                popuplayertitle: 'Parque Natural da Madeira',
                interactive: true,
                title: '<img src="styles/legend/ParqueNaturaldaMadeira_19.png" /> Parque Natural da Madeira'
            });
var format_PatrimonioClassificadoEdificado_27 = new ol.format.GeoJSON();
var features_PatrimonioClassificadoEdificado_27 = format_PatrimonioClassificadoEdificado_27.readFeatures(json_PatrimonioClassificadoEdificado_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PatrimonioClassificadoEdificado_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PatrimonioClassificadoEdificado_27.addFeatures(features_PatrimonioClassificadoEdificado_27);
var lyr_PatrimonioClassificadoEdificado_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PatrimonioClassificadoEdificado_27, 
                style: style_PatrimonioClassificadoEdificado_27,
                popuplayertitle: 'Património Classificado Edificado',
                interactive: true,
                title: '<img src="styles/legend/PatrimonioClassificadoEdificado_27.png" /> Património Classificado Edificado'
            });
var format_Igrejas_28 = new ol.format.GeoJSON();
var features_Igrejas_28 = format_Igrejas_28.readFeatures(json_Igrejas_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Igrejas_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Igrejas_28.addFeatures(features_Igrejas_28);
var lyr_Igrejas_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Igrejas_28, 
                style: style_Igrejas_28,
                popuplayertitle: 'Igrejas',
                interactive: true,
                title: '<img src="styles/legend/Igrejas_28.png" /> Igrejas'
            });
var format_equipamentos_culturais_29 = new ol.format.GeoJSON();
var features_equipamentos_culturais_29 = format_equipamentos_culturais_29.readFeatures(json_equipamentos_culturais_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_equipamentos_culturais_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_equipamentos_culturais_29.addFeatures(features_equipamentos_culturais_29);
var lyr_equipamentos_culturais_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_equipamentos_culturais_29, 
                style: style_equipamentos_culturais_29,
                popuplayertitle: 'Equipamentos Culturais',
                interactive: true,
    title: 'Equipamentos Culturais<br />\
    <img src="styles/legend/equipamentos_culturais_29_0.png" /> Auditório<br />\
    <img src="styles/legend/equipamentos_culturais_29_1.png" /> Biblioteca<br />\
    <img src="styles/legend/equipamentos_culturais_29_2.png" /> Casa da Cultura<br />\
    <img src="styles/legend/equipamentos_culturais_29_3.png" /> Centro Cultural<br />\
    <img src="styles/legend/equipamentos_culturais_29_4.png" /> Cinema<br />\
    <img src="styles/legend/equipamentos_culturais_29_5.png" /> Galeria<br />\
    <img src="styles/legend/equipamentos_culturais_29_6.png" /> Museu<br />\
    <img src="styles/legend/equipamentos_culturais_29_7.png" /> Teatro<br />\
    <img src="styles/legend/equipamentos_culturais_29_8.png" /> Outros Espaços<br />'
        });
var format_Equipamentos_sociais_30 = new ol.format.GeoJSON();
var features_Equipamentos_sociais_30 = format_Equipamentos_sociais_30.readFeatures(json_Equipamentos_sociais_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Equipamentos_sociais_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Equipamentos_sociais_30.addFeatures(features_Equipamentos_sociais_30);
var lyr_Equipamentos_sociais_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Equipamentos_sociais_30, 
                style: style_Equipamentos_sociais_30,
                popuplayertitle: 'Equipamentos Sociais',
                interactive: true,
    title: 'Equipamentos Sociais<br />\
    <img src="styles/legend/Equipamentos_sociais_30_0.png" /> Centro de Dia / Centro de Convívio / Centro Comunitário / Centro Social / Casa do Povo<br />\
    <img src="styles/legend/Equipamentos_sociais_30_1.png" /> Associação / Fundação<br />\
    <img src="styles/legend/Equipamentos_sociais_30_2.png" /> Casa de Saúde / Centro Psicopedagógico / Lar<br />\
    <img src="styles/legend/Equipamentos_sociais_30_3.png" /> Santa Casa da Misericórdia<br />'
        });
var format_equipamentos_saude_31 = new ol.format.GeoJSON();
var features_equipamentos_saude_31 = format_equipamentos_saude_31.readFeatures(json_equipamentos_saude_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_equipamentos_saude_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_equipamentos_saude_31.addFeatures(features_equipamentos_saude_31);
var lyr_equipamentos_saude_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_equipamentos_saude_31, 
                style: style_equipamentos_saude_31,
                popuplayertitle: 'Equipamentos de Saúde',
                interactive: true,
    title: 'Equipamentos de Saúde<br />\
    <img src="styles/legend/equipamentos_saude_31_0.png" /> Hospital<br />\
    <img src="styles/legend/equipamentos_saude_31_1.png" /> Centro de Saúde<br />\
    <img src="styles/legend/equipamentos_saude_31_2.png" /> Farmácia<br />\
    <img src="styles/legend/equipamentos_saude_31_3.png" /> Outra Unidade<br />'
        });

var format_PolidesportivoDescoberto_33 = new ol.format.GeoJSON();
var features_PolidesportivoDescoberto_33 = format_PolidesportivoDescoberto_33.readFeatures(json_PolidesportivoDescoberto_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolidesportivoDescoberto_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolidesportivoDescoberto_33.addFeatures(features_PolidesportivoDescoberto_33);
var lyr_PolidesportivoDescoberto_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolidesportivoDescoberto_33, 
                style: style_PolidesportivoDescoberto_33,
                popuplayertitle: 'Polidesportivo Descoberto',
                interactive: true,
                title: '<img src="styles/legend/PolidesportivoDescoberto_33.png" /> Polidesportivo Descoberto'
            });
var format_Piscina_34 = new ol.format.GeoJSON();
var features_Piscina_34 = format_Piscina_34.readFeatures(json_Piscina_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Piscina_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Piscina_34.addFeatures(features_Piscina_34);
var lyr_Piscina_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Piscina_34, 
                style: style_Piscina_34,
                popuplayertitle: 'Piscina',
                interactive: true,
                title: '<img src="styles/legend/Piscina_34.png" /> Piscina'
            });
var format_financas_35 = new ol.format.GeoJSON();
var features_financas_35 = format_financas_35.readFeatures(json_financas_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_financas_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_financas_35.addFeatures(features_financas_35);
var lyr_financas_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_financas_35, 
                style: style_financas_35,
                popuplayertitle: 'Finanças',
                interactive: true,
                title: '<img src="styles/legend/financas_35.png" /> Finanças'
            });
var format_Tribunais_36 = new ol.format.GeoJSON();
var features_Tribunais_36 = format_Tribunais_36.readFeatures(json_Tribunais_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tribunais_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tribunais_36.addFeatures(features_Tribunais_36);
var lyr_Tribunais_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tribunais_36, 
                style: style_Tribunais_36,
                popuplayertitle: 'Tribunais',
                interactive: true,
                title: '<img src="styles/legend/Tribunais_36.png" /> Tribunais'
            });
var format_JuntasdeFreguesia_37 = new ol.format.GeoJSON();
var features_JuntasdeFreguesia_37 = format_JuntasdeFreguesia_37.readFeatures(json_JuntasdeFreguesia_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JuntasdeFreguesia_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JuntasdeFreguesia_37.addFeatures(features_JuntasdeFreguesia_37);
var lyr_JuntasdeFreguesia_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JuntasdeFreguesia_37, 
                style: style_JuntasdeFreguesia_37,
                popuplayertitle: 'Juntas de Freguesia',
                interactive: true,
                title: '<img src="styles/legend/JuntasdeFreguesia_37.png" /> Juntas de Freguesia'
            });
var format_CmarasMunicipais_38 = new ol.format.GeoJSON();
var features_CmarasMunicipais_38 = format_CmarasMunicipais_38.readFeatures(json_CmarasMunicipais_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CmarasMunicipais_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CmarasMunicipais_38.addFeatures(features_CmarasMunicipais_38);
var lyr_CmarasMunicipais_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CmarasMunicipais_38, 
                style: style_CmarasMunicipais_38,
                popuplayertitle: 'Câmaras Municipais',
                interactive: true,
                title: '<img src="styles/legend/CmarasMunicipais_38.png" /> Câmaras Municipais'
            });
var format_EquipamentosAdministrativos_39 = new ol.format.GeoJSON();
var features_EquipamentosAdministrativos_39 = format_EquipamentosAdministrativos_39.readFeatures(json_EquipamentosAdministrativos_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EquipamentosAdministrativos_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EquipamentosAdministrativos_39.addFeatures(features_EquipamentosAdministrativos_39);
var lyr_EquipamentosAdministrativos_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EquipamentosAdministrativos_39, 
                style: style_EquipamentosAdministrativos_39,
                popuplayertitle: 'Equipamentos Administrativos',
                interactive: true,
                title: '<img src="styles/legend/EquipamentosAdministrativos_39.png" /> Equipamentos Administrativos'
            });
var format_TorresVigia_40 = new ol.format.GeoJSON();
var features_TorresVigia_40 = format_TorresVigia_40.readFeatures(json_TorresVigia_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TorresVigia_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TorresVigia_40.addFeatures(features_TorresVigia_40);
var lyr_TorresVigia_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TorresVigia_40, 
                style: style_TorresVigia_40,
                popuplayertitle: 'Torres de Vigia',
                interactive: true,
                title: '<img src="styles/legend/TorresVigia_40.png" /> Torres de Vigia'
            });
var format_PostosFlorestais_41 = new ol.format.GeoJSON();
var features_PostosFlorestais_41 = format_PostosFlorestais_41.readFeatures(json_PostosFlorestais_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostosFlorestais_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostosFlorestais_41.addFeatures(features_PostosFlorestais_41);
var lyr_PostosFlorestais_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostosFlorestais_41, 
                style: style_PostosFlorestais_41,
                popuplayertitle: 'Postos Florestais',
                interactive: true,
    title: 'Postos Florestais<br />\
    <img src="styles/legend/PostosFlorestais_41_0.png" /> 1- Fonte do Bispo<br />\
    <img src="styles/legend/PostosFlorestais_41_1.png" /> 2- Prazeres<br />\
    <img src="styles/legend/PostosFlorestais_41_2.png" /> 3- Cova Grande<br />\
    <img src="styles/legend/PostosFlorestais_41_3.png" /> 4- Malhadinha<br />\
    <img src="styles/legend/PostosFlorestais_41_4.png" /> 5- Trompica<br />\
    <img src="styles/legend/PostosFlorestais_41_5.png" /> 6- Jardim da Serra<br />\
    <img src="styles/legend/PostosFlorestais_41_6.png" /> 7- Curral das Freiras<br />\
    <img src="styles/legend/PostosFlorestais_41_7.png" /> 8- Areeiro<br />\
    <img src="styles/legend/PostosFlorestais_41_8.png" /> 9- Poiso<br />\
    <img src="styles/legend/PostosFlorestais_41_9.png" /> 10- Levada do Pico<br />\
    <img src="styles/legend/PostosFlorestais_41_10.png" /> 11- Casa Velha<br />\
    <img src="styles/legend/PostosFlorestais_41_11.png" /> 12- Piquinho (Machico)<br />\
    <img src="styles/legend/PostosFlorestais_41_12.png" /> 13- Lamaceiros<br />\
    <img src="styles/legend/PostosFlorestais_41_13.png" /> 14-  Ribeiro Frio<br />\
    <img src="styles/legend/PostosFlorestais_41_14.png" /> 15- Pico das Pedras<br />\
    <img src="styles/legend/PostosFlorestais_41_15.png" /> 16- Vale da Lapa (Ilha)<br />\
    <img src="styles/legend/PostosFlorestais_41_16.png" /> 17- Cascalho (São Jorge)<br />\
    <img src="styles/legend/PostosFlorestais_41_17.png" /> 18- Fajã do Penedo (Boaventura)<br />\
    <img src="styles/legend/PostosFlorestais_41_18.png" /> 19- Encumeada<br />\
    <img src="styles/legend/PostosFlorestais_41_19.png" /> 20- Passo (São Vicente)<br />\
    <img src="styles/legend/PostosFlorestais_41_20.png" /> 21- Estanquinhos;<br />\
    <img src="styles/legend/PostosFlorestais_41_21.png" /> 22- Fanal<br />\
    <img src="styles/legend/PostosFlorestais_41_22.png" /> 23- Santa<br />\
    <img src="styles/legend/PostosFlorestais_41_23.png" /> 24- Salões<br />\
    <img src="styles/legend/PostosFlorestais_41_24.png" /> 25- Chapas<br />'
        });
var format_AgentesPC_RAM_42 = new ol.format.GeoJSON();
var features_AgentesPC_RAM_42 = format_AgentesPC_RAM_42.readFeatures(json_AgentesPC_RAM_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgentesPC_RAM_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgentesPC_RAM_42.addFeatures(features_AgentesPC_RAM_42);
var lyr_AgentesPC_RAM_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AgentesPC_RAM_42, 
                style: style_AgentesPC_RAM_42,
                popuplayertitle: 'Agentes de Proteção Civil - RAM',
                interactive: true,
    title: 'Agentes de Proteção Civil<br />\
    <img src="styles/legend/AgentesPC_RAM_42_0.png" /> Corpos de Bombeiros<br />\
    <img src="styles/legend/AgentesPC_RAM_42_1.png" /> Forças de Segurança<br />\
    <img src="styles/legend/AgentesPC_RAM_42_2.png" /> Autoridade Marítima Nacional<br />\
    <img src="styles/legend/AgentesPC_RAM_42_3.png" /> Forças Armadas<br />\
    <img src="styles/legend/AgentesPC_RAM_42_4.png" /> SEMER<br />\
    <img src="styles/legend/AgentesPC_RAM_42_5.png" /> Serviços de Saúde<br />\
    <img src="styles/legend/AgentesPC_RAM_42_6.png" /> Corpo da Polícia Florestal<br />\
    <img src="styles/legend/AgentesPC_RAM_42_7.png" /> Corpo de Vigilates da Natureza<br />\
    <img src="styles/legend/AgentesPC_RAM_42_8.png" /> CVP - Delegação da Madeira<br />\
    <img src="styles/legend/AgentesPC_RAM_42_9.png" /> SANAS<br />'
        });
var format_parques_empresariais_43 = new ol.format.GeoJSON();
var features_parques_empresariais_43 = format_parques_empresariais_43.readFeatures(json_parques_empresariais_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parques_empresariais_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parques_empresariais_43.addFeatures(features_parques_empresariais_43);
var lyr_parques_empresariais_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parques_empresariais_43, 
                style: style_parques_empresariais_43,
                popuplayertitle: 'Parques Empresariais',
                interactive: true,
                title: '<img src="styles/legend/parques_empresariais_43.png" /> Parques Empresariais'
            });
var format_GsdePetrleoLiquefeito_44 = new ol.format.GeoJSON();
var features_GsdePetrleoLiquefeito_44 = format_GsdePetrleoLiquefeito_44.readFeatures(json_GsdePetrleoLiquefeito_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GsdePetrleoLiquefeito_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GsdePetrleoLiquefeito_44.addFeatures(features_GsdePetrleoLiquefeito_44);
var lyr_GsdePetrleoLiquefeito_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GsdePetrleoLiquefeito_44, 
                style: style_GsdePetrleoLiquefeito_44,
                popuplayertitle: 'Gás de Petróleo Liquefeito',
                interactive: true,
                title: '<img src="styles/legend/GsdePetrleoLiquefeito_44.png" /> Gás de Petróleo Liquefeito'
            });
var format_PostosdeAbastecimentoemInfraestruturas_45 = new ol.format.GeoJSON();
var features_PostosdeAbastecimentoemInfraestruturas_45 = format_PostosdeAbastecimentoemInfraestruturas_45.readFeatures(json_PostosdeAbastecimentoemInfraestruturas_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostosdeAbastecimentoemInfraestruturas_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostosdeAbastecimentoemInfraestruturas_45.addFeatures(features_PostosdeAbastecimentoemInfraestruturas_45);
var lyr_PostosdeAbastecimentoemInfraestruturas_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostosdeAbastecimentoemInfraestruturas_45, 
                style: style_PostosdeAbastecimentoemInfraestruturas_45,
                popuplayertitle: 'Postos de Abastecimento em Infraestruturas',
                interactive: true,
                title: '<img src="styles/legend/PostosdeAbastecimentoemInfraestruturas_45.png" /> Postos de Abastecimento em Infraestruturas'
            });
var format_PostosdeCombustiveis_46 = new ol.format.GeoJSON();
var features_PostosdeCombustiveis_46 = format_PostosdeCombustiveis_46.readFeatures(json_PostosdeCombustiveis_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostosdeCombustiveis_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostosdeCombustiveis_46.addFeatures(features_PostosdeCombustiveis_46);
var lyr_PostosdeCombustiveis_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostosdeCombustiveis_46, 
                style: style_PostosdeCombustiveis_46,
                popuplayertitle: 'Postos de Combustíveis',
                interactive: true,
                title: '<img src="styles/legend/PostosdeCombustiveis_46.png" /> Postos de Combustíveis'
            });
var format_Levadas_47 = new ol.format.GeoJSON();
var features_Levadas_47 = format_Levadas_47.readFeatures(json_Levadas_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Levadas_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Levadas_47.addFeatures(features_Levadas_47);
var lyr_Levadas_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Levadas_47, 
                style: style_Levadas_47,
                popuplayertitle: 'Levadas',
                interactive: true,
                title: '<img src="styles/legend/Levadas_47.png" /> Levadas'
            });
var format_CanaisPrincipais_48 = new ol.format.GeoJSON();
var features_CanaisPrincipais_48 = format_CanaisPrincipais_48.readFeatures(json_CanaisPrincipais_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CanaisPrincipais_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisPrincipais_48.addFeatures(features_CanaisPrincipais_48);
var lyr_CanaisPrincipais_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisPrincipais_48, 
                style: style_CanaisPrincipais_48,
                popuplayertitle: 'Canais Principais',
                interactive: true,
                title: '<img src="styles/legend/CanaisPrincipais_48.png" /> Canais Principais'
            });
var format_ReservatriosdeRegaMeioAreo_49 = new ol.format.GeoJSON();
var features_ReservatriosdeRegaMeioAreo_49 = format_ReservatriosdeRegaMeioAreo_49.readFeatures(json_ReservatriosdeRegaMeioAreo_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReservatriosdeRegaMeioAreo_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservatriosdeRegaMeioAreo_49.addFeatures(features_ReservatriosdeRegaMeioAreo_49);
var lyr_ReservatriosdeRegaMeioAreo_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservatriosdeRegaMeioAreo_49, 
                style: style_ReservatriosdeRegaMeioAreo_49,
                popuplayertitle: 'Reservatórios de Rega Meio Aéreo',
                interactive: true,
                title: '<img src="styles/legend/ReservatriosdeRegaMeioAreo_49.png" /> Reservatórios de Rega Meio Aéreo'
            });
var format_ReservatriosdeRega_50 = new ol.format.GeoJSON();
var features_ReservatriosdeRega_50 = format_ReservatriosdeRega_50.readFeatures(json_ReservatriosdeRega_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReservatriosdeRega_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservatriosdeRega_50.addFeatures(features_ReservatriosdeRega_50);
var lyr_ReservatriosdeRega_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservatriosdeRega_50, 
                style: style_ReservatriosdeRega_50,
                popuplayertitle: 'Reservatórios de Rega',
                interactive: true,
                title: '<img src="styles/legend/ReservatriosdeRega_50.png" /> Reservatórios de Rega'
            });
var format_ETAR_51 = new ol.format.GeoJSON();
var features_ETAR_51 = format_ETAR_51.readFeatures(json_ETAR_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ETAR_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ETAR_51.addFeatures(features_ETAR_51);
var lyr_ETAR_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ETAR_51, 
                style: style_ETAR_51,
                popuplayertitle: 'ETAR',
                interactive: true,
                title: '<img src="styles/legend/ETAR_51.png" /> ETAR'
            });
var format_Furos_52 = new ol.format.GeoJSON();
var features_Furos_52 = format_Furos_52.readFeatures(json_Furos_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Furos_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Furos_52.addFeatures(features_Furos_52);
var lyr_Furos_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Furos_52, 
                style: style_Furos_52,
                popuplayertitle: 'Furos',
                interactive: true,
                title: '<img src="styles/legend/Furos_52.png" /> Furos'
            });
var format_NascenteseCaptaes_53 = new ol.format.GeoJSON();
var features_NascenteseCaptaes_53 = format_NascenteseCaptaes_53.readFeatures(json_NascenteseCaptaes_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NascenteseCaptaes_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NascenteseCaptaes_53.addFeatures(features_NascenteseCaptaes_53);
var lyr_NascenteseCaptaes_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NascenteseCaptaes_53, 
                style: style_NascenteseCaptaes_53,
                popuplayertitle: 'Nascentes e Captações',
                interactive: true,
                title: '<img src="styles/legend/NascenteseCaptaes_53.png" /> Nascentes e Captações'
            });
var format_PostodeCloragem_54 = new ol.format.GeoJSON();
var features_PostodeCloragem_54 = format_PostodeCloragem_54.readFeatures(json_PostodeCloragem_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostodeCloragem_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostodeCloragem_54.addFeatures(features_PostodeCloragem_54);
var lyr_PostodeCloragem_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostodeCloragem_54, 
                style: style_PostodeCloragem_54,
                popuplayertitle: 'Posto de Cloragem',
                interactive: true,
                title: '<img src="styles/legend/PostodeCloragem_54.png" /> Posto de Cloragem'
            });
var format_Reservatrios_55 = new ol.format.GeoJSON();
var features_Reservatrios_55 = format_Reservatrios_55.readFeatures(json_Reservatrios_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reservatrios_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reservatrios_55.addFeatures(features_Reservatrios_55);
var lyr_Reservatrios_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reservatrios_55, 
                style: style_Reservatrios_55,
                popuplayertitle: 'Reservatórios',
                interactive: true,
                title: '<img src="styles/legend/Reservatrios_55.png" /> Reservatórios'
            });
var format_CentralMiniHdrica_56 = new ol.format.GeoJSON();
var features_CentralMiniHdrica_56 = format_CentralMiniHdrica_56.readFeatures(json_CentralMiniHdrica_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentralMiniHdrica_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentralMiniHdrica_56.addFeatures(features_CentralMiniHdrica_56);
var lyr_CentralMiniHdrica_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentralMiniHdrica_56, 
                style: style_CentralMiniHdrica_56,
                popuplayertitle: 'Central Mini Hídrica',
                interactive: true,
                title: '<img src="styles/legend/CentralMiniHdrica_56.png" /> Central Mini Hídrica'
            });
var format_Barragens_57 = new ol.format.GeoJSON();
var features_Barragens_57 = format_Barragens_57.readFeatures(json_Barragens_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barragens_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barragens_57.addFeatures(features_Barragens_57);
var lyr_Barragens_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barragens_57, 
                style: style_Barragens_57,
                popuplayertitle: 'Barragens',
                interactive: true,
                title: '<img src="styles/legend/Barragens_57.png" /> Barragens'
            });
var format_Galerias_58 = new ol.format.GeoJSON();
var features_Galerias_58 = format_Galerias_58.readFeatures(json_Galerias_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Galerias_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Galerias_58.addFeatures(features_Galerias_58);
var lyr_Galerias_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Galerias_58, 
                style: style_Galerias_58,
                popuplayertitle: 'Galerias',
                interactive: true,
                title: '<img src="styles/legend/Galerias_58.png" /> Galerias'
            });
var format_TneiseCanais_59 = new ol.format.GeoJSON();
var features_TneiseCanais_59 = format_TneiseCanais_59.readFeatures(json_TneiseCanais_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TneiseCanais_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TneiseCanais_59.addFeatures(features_TneiseCanais_59);
var lyr_TneiseCanais_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TneiseCanais_59, 
                style: style_TneiseCanais_59,
                popuplayertitle: 'Túneis e Canais',
                interactive: true,
                title: '<img src="styles/legend/TneiseCanais_59.png" /> Túneis e Canais'
            });
var format_condutas_alta_pressao_60 = new ol.format.GeoJSON();
var features_condutas_alta_pressao_60 = format_condutas_alta_pressao_60.readFeatures(json_condutas_alta_pressao_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_condutas_alta_pressao_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_condutas_alta_pressao_60.addFeatures(features_condutas_alta_pressao_60);
var lyr_condutas_alta_pressao_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_condutas_alta_pressao_60, 
                style: style_condutas_alta_pressao_60,
                popuplayertitle: 'Condutas de  Alta Pressão',
                interactive: true,
                title: '<img src="styles/legend/condutas_alta_pressao_60.png" /> Condutas Alta Pressão'
            });
var format_rede_energetica_pontos_ram_61 = new ol.format.GeoJSON();
var features_rede_energetica_pontos_ram_61 = format_rede_energetica_pontos_ram_61.readFeatures(json_rede_energetica_pontos_ram_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rede_energetica_pontos_ram_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rede_energetica_pontos_ram_61.addFeatures(features_rede_energetica_pontos_ram_61);
var lyr_rede_energetica_pontos_ram_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rede_energetica_pontos_ram_61, 
                style: style_rede_energetica_pontos_ram_61,
                popuplayertitle: 'Rede Energética - Pontos',
                interactive: true,
                title: '<img src="styles/legend/rede_energetica_pontos_ram_61.png" /> Rede Energética - Pontos'
            });
var format_Rede_Energetica_PSanto_62 = new ol.format.GeoJSON();
var features_Rede_Energetica_PSanto_62 = format_Rede_Energetica_PSanto_62.readFeatures(json_Rede_Energetica_PSanto_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rede_Energetica_PSanto_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rede_Energetica_PSanto_62.addFeatures(features_Rede_Energetica_PSanto_62);
var lyr_Rede_Energetica_PSanto_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rede_Energetica_PSanto_62, 
                style: style_Rede_Energetica_PSanto_62,
                popuplayertitle: 'Rede Energética - ilha do Porto Santo',
                interactive: true,
    title: 'Rede Energética - ilha do Porto Santo<br />\
    <img src="styles/legend/Rede_Energetica_PSanto_62_0.png" /> 30Kv<br />\
    <img src="styles/legend/Rede_Energetica_PSanto_62_1.png" /> 6_6Kv<br />'
        });
var format_Rede_Energetica_MAD_63 = new ol.format.GeoJSON();
var features_Rede_Energetica_MAD_63 = format_Rede_Energetica_MAD_63.readFeatures(json_Rede_Energetica_MAD_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rede_Energetica_MAD_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rede_Energetica_MAD_63.addFeatures(features_Rede_Energetica_MAD_63);
var lyr_Rede_Energetica_MAD_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rede_Energetica_MAD_63, 
                style: style_Rede_Energetica_MAD_63,
                popuplayertitle: 'Rede Energética - ilha da Madeira',
                interactive: true,
    title: 'Rede Energética - ilha da Madeira<br />\
    <img src="styles/legend/Rede_Energetica_MAD_63_0.png" /> 60KV<br />\
    <img src="styles/legend/Rede_Energetica_MAD_63_1.png" /> 30KV<br />\
    <img src="styles/legend/Rede_Energetica_MAD_63_2.png" /> 6_6KV<br />'
        });
var format_rede_energetica_pontos_ram_64 = new ol.format.GeoJSON();
var features_rede_energetica_pontos_ram_64 = format_rede_energetica_pontos_ram_64.readFeatures(json_rede_energetica_pontos_ram_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rede_energetica_pontos_ram_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rede_energetica_pontos_ram_64.addFeatures(features_rede_energetica_pontos_ram_64);
var lyr_rede_energetica_pontos_ram_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rede_energetica_pontos_ram_64, 
                style: style_rede_energetica_pontos_ram_64,
                popuplayertitle: 'Rede Energética - Pontos',
                interactive: true,
    title: 'Centrais Elétricas- Subestações<br />\
    <img src="styles/legend/rede_energetica_pontos_ram_64_0.png" /> Central 60Kv<br />\
    <img src="styles/legend/rede_energetica_pontos_ram_64_1.png" /> Central 30Kv<br />\
    <img src="styles/legend/rede_energetica_pontos_ram_64_2.png" /> Central 6Kv<br />\
    <img src="styles/legend/rede_energetica_pontos_ram_64_3.png" /> Subestacao_30Kv<br />\
    <img src="styles/legend/rede_energetica_pontos_ram_64_4.png" /> Subestacao_60Kv<br />'
        });
var format_EEM_AIE_65 = new ol.format.GeoJSON();
var features_EEM_AIE_65 = format_EEM_AIE_65.readFeatures(json_EEM_AIE_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EEM_AIE_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EEM_AIE_65.addFeatures(features_EEM_AIE_65);
var lyr_EEM_AIE_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EEM_AIE_65, 
                style: style_EEM_AIE_65,
                popuplayertitle: 'EEM_AIE',
                interactive: true,
    title: '<br />\
    <img src="styles/legend/EEM_AIE_65_0.png" /> Atlantica Islands Electricity<br />\
    <img src="styles/legend/EEM_AIE_65_1.png" /> Empresa de Eletricidade da Madeira<br />'
        });
var format_Antenas_66 = new ol.format.GeoJSON();
var features_Antenas_66 = format_Antenas_66.readFeatures(json_Antenas_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Antenas_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Antenas_66.addFeatures(features_Antenas_66);
var lyr_Antenas_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Antenas_66, 
                style: style_Antenas_66,
                popuplayertitle: 'Antenas',
                interactive: true,
                title: '<img src="styles/legend/Antenas_66.png" /> Antenas'
            });
var format_ANACOM_CTM_67 = new ol.format.GeoJSON();
var features_ANACOM_CTM_67 = format_ANACOM_CTM_67.readFeatures(json_ANACOM_CTM_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANACOM_CTM_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANACOM_CTM_67.addFeatures(features_ANACOM_CTM_67);
var lyr_ANACOM_CTM_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANACOM_CTM_67, 
                style: style_ANACOM_CTM_67,
                popuplayertitle: 'ANACOM_CTM',
                interactive: true,
    title: 'ANACOM - CTM<br />\
    <img src="styles/legend/ANACOM_CTM_67_0.png" /> ANACOM<br />\
    <img src="styles/legend/ANACOM_CTM_67_1.png" /> Centro de Telecomunicações da Madeira<br />'
        });
var format_pontes_viadutos_ram_68 = new ol.format.GeoJSON();
var features_pontes_viadutos_ram_68 = format_pontes_viadutos_ram_68.readFeatures(json_pontes_viadutos_ram_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pontes_viadutos_ram_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pontes_viadutos_ram_68.addFeatures(features_pontes_viadutos_ram_68);
var lyr_pontes_viadutos_ram_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pontes_viadutos_ram_68, 
                style: style_pontes_viadutos_ram_68,
                popuplayertitle: 'Pontes e viadutos',
                interactive: true,
                title: '<img src="styles/legend/pontes_viadutos_ram_68.png" /> Pontes e Viadutos'
            });
var format_tuneis_todos_69 = new ol.format.GeoJSON();
var features_tuneis_todos_69 = format_tuneis_todos_69.readFeatures(json_tuneis_todos_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuneis_todos_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuneis_todos_69.addFeatures(features_tuneis_todos_69);
var lyr_tuneis_todos_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuneis_todos_69, 
                style: style_tuneis_todos_69,
                popuplayertitle: 'Túneis - Total',
                interactive: true,
                title: '<img src="styles/legend/tuneis_todos_69.png" /> Túneis - Total'
            });
var format_tuneis_500m_ou_mais_70 = new ol.format.GeoJSON();
var features_tuneis_500m_ou_mais_70 = format_tuneis_500m_ou_mais_70.readFeatures(json_tuneis_500m_ou_mais_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuneis_500m_ou_mais_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuneis_500m_ou_mais_70.addFeatures(features_tuneis_500m_ou_mais_70);
var lyr_tuneis_500m_ou_mais_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuneis_500m_ou_mais_70, 
                style: style_tuneis_500m_ou_mais_70,
                popuplayertitle: 'Túneis - 500 metros ou mais',
                interactive: true,
                title: '<img src="styles/legend/tuneis_500m_ou_mais_70.png" /> Túneis - 500 metros ou mais'
            });
var format_EquipamentosAeroportuarios_71 = new ol.format.GeoJSON();
var features_EquipamentosAeroportuarios_71 = format_EquipamentosAeroportuarios_71.readFeatures(json_EquipamentosAeroportuarios_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EquipamentosAeroportuarios_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EquipamentosAeroportuarios_71.addFeatures(features_EquipamentosAeroportuarios_71);
var lyr_EquipamentosAeroportuarios_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EquipamentosAeroportuarios_71, 
                style: style_EquipamentosAeroportuarios_71,
                popuplayertitle: 'Equipamentos Aeroportuários',
                interactive: true,
    title: 'Equipamentos Aeroportuários<br />\
    <img src="styles/legend/EquipamentosAeroportuarios_71_0.png" /> Aeroporto da Madeira<br />\
    <img src="styles/legend/EquipamentosAeroportuarios_71_1.png" /> Aeroporto de Porto Santo<br />\
    <img src="styles/legend/EquipamentosAeroportuarios_71_2.png" /> Porto de Porto Santo<br />\
    <img src="styles/legend/EquipamentosAeroportuarios_71_3.png" /> Porto do Caniçal<br />\
    <img src="styles/legend/EquipamentosAeroportuarios_71_4.png" /> Porto do Funchal<br />'
        });
var format_RedeViriacomTneis_72 = new ol.format.GeoJSON();
var features_RedeViriacomTneis_72 = format_RedeViriacomTneis_72.readFeatures(json_RedeViriacomTneis_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedeViriacomTneis_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedeViriacomTneis_72.addFeatures(features_RedeViriacomTneis_72);
var lyr_RedeViriacomTneis_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedeViriacomTneis_72, 
                style: style_RedeViriacomTneis_72,
                popuplayertitle: 'Rede Viária com Túneis',
                interactive: true,
    title: 'Rede Viária com Túneis<br />\
    <img src="styles/legend/RedeViriacomTneis_72_0.png" /> Estrada Regional Principal<br />\
    <img src="styles/legend/RedeViriacomTneis_72_1.png" /> Túneis<br />\
    <img src="styles/legend/RedeViriacomTneis_72_2.png" /> Estradas Antigas<br />\
    <img src="styles/legend/RedeViriacomTneis_72_3.png" /> Estrada Regional Complementar<br />\
    <img src="styles/legend/RedeViriacomTneis_72_4.png" /> 251<br />\
    <img src="styles/legend/RedeViriacomTneis_72_5.png" /> Vias Regionais a Construir<br />'
        });
var format_concelhos_73 = new ol.format.GeoJSON();
var features_concelhos_73 = format_concelhos_73.readFeatures(json_concelhos_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_concelhos_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_concelhos_73.addFeatures(features_concelhos_73);
var lyr_concelhos_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_concelhos_73, 
                style: style_concelhos_73,
                popuplayertitle: 'Concelhos',
                interactive: true,
    title: 'Concelhos<br />\
    <img src="styles/legend/concelhos_73_0.png" /> Sem Alojamentos<br />\
    <img src="styles/legend/concelhos_73_1.png" /> 1<br />\
    <img src="styles/legend/concelhos_73_2.png" /> 2<br />\
    <img src="styles/legend/concelhos_73_3.png" /> 3<br />\
    <img src="styles/legend/concelhos_73_4.png" /> 4<br />\
    <img src="styles/legend/concelhos_73_5.png" /> 5 a 9<br />\
    <img src="styles/legend/concelhos_73_6.png" /> 10 a 20<br />\
    <img src="styles/legend/concelhos_73_7.png" /> 20 a 40<br />'
        });
var format_subsecoes_74 = new ol.format.GeoJSON();
var features_subsecoes_74 = format_subsecoes_74.readFeatures(json_subsecoes_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_subsecoes_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_subsecoes_74.addFeatures(features_subsecoes_74);
var lyr_subsecoes_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_subsecoes_74, 
                style: style_subsecoes_74,
                popuplayertitle: 'Densidade Demográfica',
                interactive: true,
    title: 'Subsecções<br />\
    <img src="styles/legend/subsecoes_74_0.png" /> Sem Residentes<br />\
    <img src="styles/legend/subsecoes_74_1.png" /> ]0 - 100]<br />\
    <img src="styles/legend/subsecoes_74_2.png" /> ]100 - 400]<br />\
    <img src="styles/legend/subsecoes_74_3.png" /> ]400 - 800]<br />\
    <img src="styles/legend/subsecoes_74_4.png" /> ]800 - 2 000]<br />\
    <img src="styles/legend/subsecoes_74_5.png" /> ]2 000 - 5 000]<br />\
    <img src="styles/legend/subsecoes_74_6.png" /> ]5 000 - 10 000]<br />\
    <img src="styles/legend/subsecoes_74_7.png" /> ]10 000 - 20 000]<br />\
    <img src="styles/legend/subsecoes_74_8.png" /> ]20 000 - 45000]<br />'
        });
var format_BaciasHidrogrficas_75 = new ol.format.GeoJSON();
var features_BaciasHidrogrficas_75 = format_BaciasHidrogrficas_75.readFeatures(json_BaciasHidrogrficas_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaciasHidrogrficas_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasHidrogrficas_75.addFeatures(features_BaciasHidrogrficas_75);
var lyr_BaciasHidrogrficas_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasHidrogrficas_75, 
                style: style_BaciasHidrogrficas_75,
                popuplayertitle: 'Bacias Hidrográficas',
                interactive: true,
                title: '<img src="styles/legend/BaciasHidrogrficas_75.png" /> Bacias Hidrográficas'
            });
var format_RedeHidrogrfica_77 = new ol.format.GeoJSON();
var features_RedeHidrogrfica_77 = format_RedeHidrogrfica_77.readFeatures(json_RedeHidrogrfica_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedeHidrogrfica_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedeHidrogrfica_77.addFeatures(features_RedeHidrogrfica_77);
var lyr_RedeHidrogrfica_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedeHidrogrfica_77, 
                style: style_RedeHidrogrfica_77,
                popuplayertitle: 'Rede Hidrográfica',
                interactive: true,
                title: '<img src="styles/legend/RedeHidrogrfica_77.png" /> Rede Hidrográfica'
            });
var format_geologia_im_78 = new ol.format.GeoJSON();
var features_geologia_im_78 = format_geologia_im_78.readFeatures(json_geologia_im_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geologia_im_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geologia_im_78.addFeatures(features_geologia_im_78);
var lyr_geologia_im_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geologia_im_78, 
                style: style_geologia_im_78,
                popuplayertitle: 'Geologia - ilha da Madeira',
                interactive: true,
    title: 'Geologia - ilha da Madeira<br />\
    <img src="styles/legend/geologia_im_78_0.png" /> CVI1B<br />\
    <img src="styles/legend/geologia_im_78_1.png" /> CVM1B<br />\
    <img src="styles/legend/geologia_im_78_2.png" /> CVM2B<br />\
    <img src="styles/legend/geologia_im_78_3.png" /> CVM3B<br />\
    <img src="styles/legend/geologia_im_78_4.png" /> CVS1<br />\
    <img src="styles/legend/geologia_im_78_5.png" /> CVS2<br />\
    <img src="styles/legend/geologia_im_78_6.png" /> Quaternário<br />\
    <img src="styles/legend/geologia_im_78_7.png" /> Intrusivas<br />'
        });
var format_geologia_ps_79 = new ol.format.GeoJSON();
var features_geologia_ps_79 = format_geologia_ps_79.readFeatures(json_geologia_ps_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geologia_ps_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geologia_ps_79.addFeatures(features_geologia_ps_79);
var lyr_geologia_ps_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geologia_ps_79, 
                style: style_geologia_ps_79,
                popuplayertitle: 'Geologia ilha do Porto Santo',
                interactive: true,
    title: 'Geologia - ilha do Porto Santo<br />\
    <img src="styles/legend/geologia_ps_79_0.png" /> CVI<br />\
    <img src="styles/legend/geologia_ps_79_1.png" /> CVM<br />\
    <img src="styles/legend/geologia_ps_79_2.png" /> CVS<br />\
    <img src="styles/legend/geologia_ps_79_3.png" /> Quaternário<br />'
        });
var lyr_relevo_sombreado_im_80 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Relevo Sombreado - ilha da Madeira',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/relevo_sombreado_im_80.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-1922189.959451, 3845971.422121, -1853844.362387, 3879242.228661]
                            })
                        });
var lyr_relevo_sombreado_ps_81 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Relevo Sombreado - ilha do Porto Santo',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/relevo_sombreado_ps_81.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-1826987.562753, 3894758.778433, -1811894.127653, 3912318.121745]
                            })
                        });
var format_OcupacaoSolo_82 = new ol.format.GeoJSON();
var features_OcupacaoSolo_82 = format_OcupacaoSolo_82.readFeatures(json_OcupacaoSolo_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OcupacaoSolo_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OcupacaoSolo_82.addFeatures(features_OcupacaoSolo_82);
var lyr_OcupacaoSolo_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OcupacaoSolo_82, 
                style: style_OcupacaoSolo_82,
                popuplayertitle: 'Ocupação do Solo',
                interactive: true,
    title: 'Ocupação do Solo<br />\
    <img src="styles/legend/OcupacaoSolo_82_0.png" /> Espaços Verdes Urbanos, Equipamentos Desportivos, Culturais e de Lazer e Zonas Históricas<br />\
    <img src="styles/legend/OcupacaoSolo_82_1.png" /> Áreas de extracção de inertes, áreas de deposição de resíduos e estaleiros de construção<br />\
    <img src="styles/legend/OcupacaoSolo_82_2.png" /> Florestas Abertas, Vegetação Arbustiva e Herbácea<br />\
    <img src="styles/legend/OcupacaoSolo_82_3.png" /> Zonas Descobertas e com pouca vegetação<br />\
    <img src="styles/legend/OcupacaoSolo_82_4.png" /> Indústria, Comércio e Transportes<br />\
    <img src="styles/legend/OcupacaoSolo_82_5.png" /> Áreas Agrícolas Heterogéneas<br />\
    <img src="styles/legend/OcupacaoSolo_82_6.png" /> Águas interiores<br />\
    <img src="styles/legend/OcupacaoSolo_82_7.png" /> Águas marinhas e costeiras<br />\
    <img src="styles/legend/OcupacaoSolo_82_8.png" /> Culturas Permanentes<br />\
    <img src="styles/legend/OcupacaoSolo_82_9.png" /> Culturas temporárias<br />\
    <img src="styles/legend/OcupacaoSolo_82_10.png" /> Florestas<br />\
    <img src="styles/legend/OcupacaoSolo_82_11.png" /> Pastagens Permanentes<br />\
    <img src="styles/legend/OcupacaoSolo_82_12.png" /> Tecido Urbano<br />\
    <img src="styles/legend/OcupacaoSolo_82_13.png" /> Zonas húmidas interiores<br />\
    <img src="styles/legend/OcupacaoSolo_82_14.png" /> Zonas húmidas litorais<br />'
        });
var lyr_relevo_sombreado_imcopiar_84 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Relevo Sombreado - ilha da Madeira',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/relevo_sombreado_imcopiar_84.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-1922189.959451, 3845971.422121, -1853844.362387, 3879242.228661]
                            })
                        });
var lyr_relevo_sombreado_pscopiar_85 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Relevo Sombreado - ilha do Porto Santo',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/relevo_sombreado_pscopiar_85.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-1826987.562753, 3894758.778433, -1811894.127653, 3912318.121745]
                            })
                        });
var lyr_Declive_86 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Declive',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Declive_86.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-2003750.834279, 3763164.777444, -1781111.852692, 4028802.026134]
                            })
                        });
var lyr_relevo_sombreado_madeira_87 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Relevo Sombreado - ilha da Madeira',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/relevo_sombreado_madeira_87.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-1922189.959451, 3845971.422121, -1853844.362387, 3879242.228661]
                            })
                        });
var lyr_hipsometria_im_88 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Hipsometria - ilha da Madeira',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/hipsometria_im_88.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-1922191.996002, 3845971.502139, -1853846.511650, 3879242.069798]
                            })
                        });
var lyr_relevo_sombreado_ps_89 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Relevo Sombreado - ilha do Porto Santo',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/relevo_sombreado_ps_89.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-1826987.562753, 3894758.778433, -1811894.127653, 3912318.121745]
                            })
                        });
var lyr_hipsometria_ps_90 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Hipsometria - ilha do Porto Santo',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/hipsometria_ps_90.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-1826989.419424, 3894745.626544, -1811865.457542, 3912365.214848]
                            })
                        });
var format_NecPro_91 = new ol.format.GeoJSON();
var features_NecPro_91 = format_NecPro_91.readFeatures(json_NecPro_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NecPro_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NecPro_91.addFeatures(features_NecPro_91);
var lyr_NecPro_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NecPro_91, 
                style: style_NecPro_91,
                popuplayertitle: 'NecPro',
                interactive: true,
    title: 'Necrotério Provisório<br />\
    <img src="styles/legend/NecPro_91_0.png" /> Aeroporto da Madeira - Centro de Salvamento<br />\
    <img src="styles/legend/NecPro_91_1.png" /> Armazém de carga - Porto Santo Line<br />'
        });
var format_ZRnM_92 = new ol.format.GeoJSON();
var features_ZRnM_92 = format_ZRnM_92.readFeatures(json_ZRnM_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZRnM_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZRnM_92.addFeatures(features_ZRnM_92);
var lyr_ZRnM_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZRnM_92, 
                style: style_ZRnM_92,
                popuplayertitle: 'ZRnM',
                interactive: true,
    title: 'Zona de Reunião de Mortos<br />\
    <img src="styles/legend/ZRnM_92_0.png" /> Cemitério de Santa Catarina<br />\
    <img src="styles/legend/ZRnM_92_1.png" /> Hospital Dr. Nélio Mendonça<br />'
        });
var format_ZCAP_93 = new ol.format.GeoJSON();
var features_ZCAP_93 = format_ZCAP_93.readFeatures(json_ZCAP_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZCAP_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZCAP_93.addFeatures(features_ZCAP_93);
var lyr_ZCAP_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZCAP_93, 
                style: style_ZCAP_93,
                popuplayertitle: 'ZCAP',
                interactive: true,
                title: '<img src="styles/legend/ZCAP_93.png" /> Zona de Concentração e Apoio à População'
            });
var format_ZRR_94 = new ol.format.GeoJSON();
var features_ZRR_94 = format_ZRR_94.readFeatures(json_ZRR_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZRR_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZRR_94.addFeatures(features_ZRR_94);
var lyr_ZRR_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZRR_94, 
                style: style_ZRR_94,
                popuplayertitle: 'ZRR',
                interactive: true,
    title: 'Zona de Receção de Reforços<br />\
    <img src="styles/legend/ZRR_94_0.png" /> Aeroporto da Madeira<br />\
    <img src="styles/legend/ZRR_94_1.png" /> Aeroporto do Porto Santo<br />\
    <img src="styles/legend/ZRR_94_2.png" /> Porto Maritimo do Canical<br />\
    <img src="styles/legend/ZRR_94_3.png" /> Porto Maritimo do Funchal<br />\
    <img src="styles/legend/ZRR_94_4.png" /> Porto Maritimo do Porto Santo<br />'
        });
var group_ZRR = new ol.layer.Group({
            layers: [lyr_ZRR_94,],
            fold: "close",
            title: 'Zona de Receção de Reforços'});
var group_ZCAP = new ol.layer.Group({
            layers: [lyr_ZCAP_93,],
            fold: "close",
            title: 'Zona de Concentração e Apoio à População'});
var group_ZRnM_NecPro = new ol.layer.Group({
            layers: [lyr_NecPro_91,lyr_ZRnM_92,],
            fold: "close",
            title: 'Zona de Reunião de Mortos - Necrotério Provisório'});
var group_Hipsometria = new ol.layer.Group({
            layers: [lyr_relevo_sombreado_madeira_87,lyr_hipsometria_im_88,lyr_relevo_sombreado_ps_89,lyr_hipsometria_ps_90,],
            fold: "close",
            title: 'Hipsometria'});
var group_Declives = new ol.layer.Group({
            layers: [lyr_relevo_sombreado_imcopiar_84,lyr_relevo_sombreado_pscopiar_85,lyr_Declive_86,],
            fold: "close",
            title: 'Declives'});
var group_OcupaodoSolo = new ol.layer.Group({
            layers: [lyr_relevo_sombreado_im_80,lyr_relevo_sombreado_ps_81,lyr_OcupacaoSolo_82,],
            fold: "close",
            title: 'Ocupação do Solo'});
var group_Geologia = new ol.layer.Group({
            layers: [lyr_geologia_im_78,lyr_geologia_ps_79,],
            fold: "close",
            title: 'Geologia'});
var group_Hidrografia = new ol.layer.Group({
            layers: [lyr_BaciasHidrogrficas_75,lyr_RedeHidrogrfica_77,],
            fold: "close",
            title: 'Hidrografia'});
var group_DensidadePopulacional = new ol.layer.Group({
            layers: [lyr_subsecoes_74,],
            fold: "close",
            title: 'Densidade Populacional'});
var group_NmerodeAlojamentosporEdifcio = new ol.layer.Group({
            layers: [lyr_concelhos_73,],
            fold: "close",
            title: 'Número de Alojamentos por Edifício'});
var group_InfraestuturasdeComunicao = new ol.layer.Group({
            layers: [lyr_EquipamentosAeroportuarios_71,lyr_RedeViriacomTneis_72,],
            fold: "close",
            title: 'Infraestuturas de Comunicação'});
var group_TneisPonteseViadutos = new ol.layer.Group({
            layers: [lyr_pontes_viadutos_ram_68,lyr_tuneis_todos_69,lyr_tuneis_500m_ou_mais_70,],
            fold: "close",
            title: 'Túneis, Pontes e Viadutos'});
var group_Telecomunicaes = new ol.layer.Group({
            layers: [lyr_Antenas_66,lyr_ANACOM_CTM_67,],
            fold: "close",
            title: 'Telecomunicações'});
var group_RedeEltrica = new ol.layer.Group({
            layers: [lyr_rede_energetica_pontos_ram_61,lyr_Rede_Energetica_PSanto_62,lyr_Rede_Energetica_MAD_63,lyr_rede_energetica_pontos_ram_64,lyr_EEM_AIE_65,],
            fold: "close",
            title: 'Rede Elétrica'});
var group_Abastecimentodegua = new ol.layer.Group({
            layers: [lyr_ETAR_51,lyr_Furos_52,lyr_NascenteseCaptaes_53,lyr_PostodeCloragem_54,lyr_Reservatrios_55,lyr_CentralMiniHdrica_56,lyr_Barragens_57,lyr_Galerias_58,lyr_TneiseCanais_59,lyr_condutas_alta_pressao_60,],
            fold: "close",
            title: 'Abastecimento de Água'});
var group_ReservatriosdeguaderegasobgestodaARMSA = new ol.layer.Group({
            layers: [lyr_ReservatriosdeRegaMeioAreo_49,lyr_ReservatriosdeRega_50,],
            fold: "close",
            title: 'Reservatórios de água de rega sob gestão da ARM, S.A.'});
var group_CanaisPrincipaisdeguasobgestodaARMSA = new ol.layer.Group({
            layers: [lyr_Levadas_47,lyr_CanaisPrincipais_48,],
            fold: "close",
            title: 'Canais Principais de água sob gestão da ARM, S.A.'});
var group_PostosdeAbastecimentodeCombustvel = new ol.layer.Group({
            layers: [lyr_GsdePetrleoLiquefeito_44,lyr_PostosdeAbastecimentoemInfraestruturas_45,lyr_PostosdeCombustiveis_46,],
            fold: "close",
            title: 'Postos de Abastecimento de Combustível'});
var group_ParquesEmpresariais = new ol.layer.Group({
            layers: [lyr_parques_empresariais_43,],
            fold: "close",
            title: 'Parques Empresariais'});
var group_AgentesdeProteoCivil = new ol.layer.Group({
            layers: [lyr_AgentesPC_RAM_42,],
            fold: "close",
            title: 'Agentes de Proteção Civil'});
var group_PostosFlorestaiseTorresdeVigia = new ol.layer.Group({
            layers: [lyr_TorresVigia_40,lyr_PostosFlorestais_41,],
            fold: "close",
            title: 'Postos Florestais e Torres de Vigia'});
var group_EquipamentosAdministrativos = new ol.layer.Group({
            layers: [lyr_financas_35,lyr_Tribunais_36,lyr_JuntasdeFreguesia_37,lyr_CmarasMunicipais_38,lyr_EquipamentosAdministrativos_39,],
            fold: "close",
            title: 'Equipamentos Administrativos'});
var group_EquipamentosDesportivos = new ol.layer.Group({
            layers: [lyr_PolidesportivoDescoberto_33,lyr_Piscina_34,],
            fold: "close",
            title: 'Equipamentos Desportivos'});
var group_EquipamentosdeSade = new ol.layer.Group({
            layers: [lyr_equipamentos_saude_31,],
            fold: "close",
            title: 'Equipamentos de Saúde'});
var group_EquipamentosSociais = new ol.layer.Group({
            layers: [lyr_Equipamentos_sociais_30,],
            fold: "close",
            title: 'Equipamentos Sociais'});
var group_EquipamentosCulturais = new ol.layer.Group({
            layers: [lyr_equipamentos_culturais_29,],
            fold: "close",
            title: 'Equipamentos Culturais'});
var group_Igrejas = new ol.layer.Group({
            layers: [lyr_Igrejas_28,],
            fold: "close",
            title: 'Igrejas'});
var group_PatrimnioClassificado = new ol.layer.Group({
            layers: [lyr_PatrimonioClassificadoEdificado_27,],
            fold: "close",
            title: 'Património Classificado'});
var group_RedeNacionaldereasProtegidas = new ol.layer.Group({
            layers: [lyr_reaProtegidadoCaboGiro_14,lyr_ReservaNaturalParcialdoGarajau_15,lyr_reaProtegidadaPontadoPargo_16,lyr_RededereasMarinhasdoPortoSanto_17,lyr_ReservaNaturaldaRochadoNavio_18,lyr_ParqueNaturaldaMadeira_19,],
            fold: "close",
            title: 'Rede Nacional de Áreas Protegidas'});
var group_ZonasEspeciaisdeConservao = new ol.layer.Group({
            layers: [lyr_Laurissilva_9,lyr_macico_montanhoso_central_10,lyr_Ponta_SLourencpo_11,lyr_Moledos_madalenaMar_12,lyr_achadas_da_cruz_13,],
            fold: "close",
            title: 'Zonas Especiais de Conservação'});
var group_guasMarinhasProtegidas = new ol.layer.Group({
            layers: [lyr_aguas_costeiras_zonas_protecao_8,],
            fold: "close",
            title: 'Águas Marinhas Protegidas'});
var group_GrandeSuperfciesComerciais = new ol.layer.Group({
            layers: [lyr_SuperficiesComerciais_7,],
            fold: "close",
            title: 'Grande Superfícies Comerciais'});
var group_UnidadeHoteleiras = new ol.layer.Group({
            layers: [lyr_UnidadesHoteleiras_6,],
            fold: "close",
            title: 'Unidade Hoteleiras'});
var group_HospitaleClnicasVeterinrias = new ol.layer.Group({
            layers: [lyr_ClinicasVeterinrias_4,lyr_HospitalVeterinrio_5,],
            fold: "close",
            title: 'Hospital e Clínicas Veterinárias'});
var group_MapasBase = new ol.layer.Group({
            layers: [lyr_GoogleSatellite_0,lyr_ArqMadeira_Mun_CAOP2023_2,],
            fold: "close",
            title: 'Mapas Base'});


lyr_GoogleSatellite_0.setVisible(true);lyr_ArqMadeira_Mun_CAOP2023_2.setVisible(true);lyr_ClinicasVeterinrias_4.setVisible(false);lyr_HospitalVeterinrio_5.setVisible(false);lyr_UnidadesHoteleiras_6.setVisible(false);lyr_SuperficiesComerciais_7.setVisible(false);lyr_aguas_costeiras_zonas_protecao_8.setVisible(false);lyr_Laurissilva_9.setVisible(false);lyr_macico_montanhoso_central_10.setVisible(false);lyr_Ponta_SLourencpo_11.setVisible(false);lyr_Moledos_madalenaMar_12.setVisible(false);lyr_achadas_da_cruz_13.setVisible(false);lyr_reaProtegidadoCaboGiro_14.setVisible(false);lyr_ReservaNaturalParcialdoGarajau_15.setVisible(false);lyr_reaProtegidadaPontadoPargo_16.setVisible(false);lyr_RededereasMarinhasdoPortoSanto_17.setVisible(false);lyr_ReservaNaturaldaRochadoNavio_18.setVisible(false);lyr_ParqueNaturaldaMadeira_19.setVisible(false);lyr_PatrimonioClassificadoEdificado_27.setVisible(false);lyr_Igrejas_28.setVisible(false);lyr_equipamentos_culturais_29.setVisible(false);lyr_Equipamentos_sociais_30.setVisible(false);lyr_equipamentos_saude_31.setVisible(false);lyr_PolidesportivoDescoberto_33.setVisible(false);lyr_Piscina_34.setVisible(false);lyr_financas_35.setVisible(false);lyr_Tribunais_36.setVisible(false);lyr_JuntasdeFreguesia_37.setVisible(false);lyr_CmarasMunicipais_38.setVisible(false);lyr_EquipamentosAdministrativos_39.setVisible(false);lyr_TorresVigia_40.setVisible(false);lyr_PostosFlorestais_41.setVisible(false);lyr_AgentesPC_RAM_42.setVisible(false);lyr_parques_empresariais_43.setVisible(false);lyr_GsdePetrleoLiquefeito_44.setVisible(false);lyr_PostosdeAbastecimentoemInfraestruturas_45.setVisible(false);lyr_PostosdeCombustiveis_46.setVisible(false);lyr_Levadas_47.setVisible(false);lyr_CanaisPrincipais_48.setVisible(false);lyr_ReservatriosdeRegaMeioAreo_49.setVisible(false);lyr_ReservatriosdeRega_50.setVisible(false);lyr_ETAR_51.setVisible(false);lyr_Furos_52.setVisible(false);lyr_NascenteseCaptaes_53.setVisible(false);lyr_PostodeCloragem_54.setVisible(false);lyr_Reservatrios_55.setVisible(false);lyr_CentralMiniHdrica_56.setVisible(false);lyr_Barragens_57.setVisible(false);lyr_Galerias_58.setVisible(false);lyr_TneiseCanais_59.setVisible(false);lyr_condutas_alta_pressao_60.setVisible(false);lyr_rede_energetica_pontos_ram_61.setVisible(false);lyr_Rede_Energetica_PSanto_62.setVisible(false);lyr_Rede_Energetica_MAD_63.setVisible(false);lyr_rede_energetica_pontos_ram_64.setVisible(false);lyr_EEM_AIE_65.setVisible(false);lyr_Antenas_66.setVisible(false);lyr_ANACOM_CTM_67.setVisible(false);lyr_pontes_viadutos_ram_68.setVisible(false);lyr_tuneis_todos_69.setVisible(false);lyr_tuneis_500m_ou_mais_70.setVisible(false);lyr_EquipamentosAeroportuarios_71.setVisible(false);lyr_RedeViriacomTneis_72.setVisible(false);lyr_concelhos_73.setVisible(false);lyr_subsecoes_74.setVisible(false);lyr_BaciasHidrogrficas_75.setVisible(false);lyr_RedeHidrogrfica_77.setVisible(false);lyr_geologia_im_78.setVisible(false);lyr_geologia_ps_79.setVisible(false);lyr_relevo_sombreado_im_80.setVisible(false);lyr_relevo_sombreado_ps_81.setVisible(false);lyr_OcupacaoSolo_82.setVisible(false);lyr_relevo_sombreado_imcopiar_84.setVisible(false);lyr_relevo_sombreado_pscopiar_85.setVisible(false);lyr_Declive_86.setVisible(false);lyr_relevo_sombreado_madeira_87.setVisible(false);lyr_hipsometria_im_88.setVisible(false);lyr_relevo_sombreado_ps_89.setVisible(false);lyr_hipsometria_ps_90.setVisible(false);lyr_NecPro_91.setVisible(false);lyr_ZRnM_92.setVisible(false);lyr_ZCAP_93.setVisible(false);lyr_ZRR_94.setVisible(false);

var layersList =[group_MapasBase,group_ZRR,group_ZCAP,group_ZRnM_NecPro,group_Hipsometria,group_Declives,group_OcupaodoSolo,group_Geologia,group_Hidrografia,group_DensidadePopulacional,group_NmerodeAlojamentosporEdifcio,group_InfraestuturasdeComunicao,group_TneisPonteseViadutos,group_Telecomunicaes,group_RedeEltrica,group_Abastecimentodegua,group_ReservatriosdeguaderegasobgestodaARMSA,group_CanaisPrincipaisdeguasobgestodaARMSA,group_PostosdeAbastecimentodeCombustvel,group_ParquesEmpresariais,group_AgentesdeProteoCivil,group_PostosFlorestaiseTorresdeVigia,group_EquipamentosAdministrativos,group_EquipamentosDesportivos,group_EquipamentosdeSade,group_EquipamentosSociais,group_EquipamentosCulturais,group_Igrejas,group_PatrimnioClassificado,group_RedeNacionaldereasProtegidas,group_ZonasEspeciaisdeConservao,group_guasMarinhasProtegidas,group_GrandeSuperfciesComerciais,group_UnidadeHoteleiras,group_HospitaleClnicasVeterinrias,];
lyr_ZRR_94.set('fieldLabels', {'id': 'no label', 'DESIGNACAO': 'no label', 'COORDENADA': 'no label', 'CONCELHO': 'no label', });
lyr_ArqMadeira_Mun_CAOP2023_2.set('fieldAliases', {'fid': 'fid', 'DICO': 'DICO', 'Municipio': 'Municipio', 'Ilha': 'Ilha', 'N_Freguesi': 'N_Freguesi', 'NUTSIII': 'NUTSIII', 'NUTSII': 'NUTSII', 'NUTSI': 'NUTSI', 'Alt_Max': 'Alt_Max', 'Alt_Min': 'Alt_Min', 'Area_ha': 'Area_ha', 'Perim_km': 'Perim_km', });
lyr_ClinicasVeterinrias_4.set('fieldAliases', {'id': 'id', 'Designacao': 'Designacao', 'Morada': 'Morada', 'Contacto': 'Contacto', 'Coordenada': 'Coordenada', 'DirClinico': 'DirClinico', 'Concelho': 'Concelho', });
lyr_HospitalVeterinrio_5.set('fieldAliases', {'id': 'id', 'Designacao': 'Designacao', 'Morada': 'Morada', 'Contacto': 'Contacto', 'Coordenada': 'Coordenada', 'DirClinico': 'DirClinico', 'Concelho': 'Concelho', });
lyr_UnidadesHoteleiras_6.set('fieldAliases', {'NOME': 'NOME', 'MORADA': 'MORADA', 'TELEFONE': 'TELEFONE', 'FAX': 'FAX', 'E_MAIL': 'E_MAIL', 'SITE': 'SITE', 'Tipo': 'Tipo', 'N_CAMAS': 'N_CAMAS', });
lyr_SuperficiesComerciais_7.set('fieldAliases', {'cadeia': 'cadeia', 'nome': 'nome', 'lat': 'lat', 'lon': 'lon', 'id': 'id', });
lyr_aguas_costeiras_zonas_protecao_8.set('fieldAliases', {'id': 'id', });
lyr_Laurissilva_9.set('fieldAliases', {'id': 'id', });
lyr_macico_montanhoso_central_10.set('fieldAliases', {'id': 'id', });
lyr_Ponta_SLourencpo_11.set('fieldAliases', {'id': 'id', });
lyr_Moledos_madalenaMar_12.set('fieldAliases', {'id': 'id', });
lyr_achadas_da_cruz_13.set('fieldAliases', {'id': 'id', });
lyr_reaProtegidadoCaboGiro_14.set('fieldAliases', {'id': 'id', 'Designacao': 'Designacao', 'layer': 'layer', 'path': 'path', });
lyr_ReservaNaturalParcialdoGarajau_15.set('fieldAliases', {'FID': 'FID', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_reaProtegidadaPontadoPargo_16.set('fieldAliases', {'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_RededereasMarinhasdoPortoSanto_17.set('fieldAliases', {'id': 'id', });
lyr_ReservaNaturaldaRochadoNavio_18.set('fieldAliases', {'id': 'id', });
lyr_ParqueNaturaldaMadeira_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'Denominaca': 'Denominaca', 'Sub_Denomi': 'Sub_Denomi', 'Area': 'Area', 'Perimetro': 'Perimetro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PatrimonioClassificadoEdificado_27.set('fieldAliases', {'Id': 'Id', 'Designacao': 'Designacao', });
lyr_Igrejas_28.set('fieldAliases', {'IGREJA': 'IGREJA', 'MORADA': 'MORADA', 'TELEFONE': 'TELEFONE', 'FAX': 'FAX', 'CONTACTO': 'CONTACTO', });
lyr_equipamentos_culturais_29.set('fieldAliases', {'Descricao': 'Descricao', 'Tipo': 'Tipo', 'Eq_Cultura': 'Eq_Cultura', 'Fonte': 'Fonte', 'LUG11': 'LUG11', 'FIRST_LUG1': 'FIRST_LUG1', 'Freguesia': 'Freguesia', 'Concelho': 'Concelho', 'Ilha': 'Ilha', 'Categoria': 'Categoria', });
lyr_Equipamentos_sociais_30.set('fieldAliases', {'Nome': 'Nome', 'Morada': 'Morada', 'Concelho': 'Concelho', 'Resp_': 'Resp_', 'Telef_': 'Telef_', 'e_mail': 'e_mail', 'DESIGNACAO': 'DESIGNACAO', 'Tipo': 'Tipo', 'Categoria': 'Categoria', });
lyr_equipamentos_saude_31.set('fieldAliases', {'Label': 'Label', 'CONCELHO': 'CONCELHO', 'DESIGNACAO': 'DESIGNACAO', 'Categoria': 'Categoria', });
lyr_PolidesportivoDescoberto_33.set('fieldAliases', {'id': 'id', 'Descricao': 'Descricao', 'Legenda': 'Legenda', 'Concelho': 'Concelho', 'Categoria': 'Categoria', });
lyr_Piscina_34.set('fieldAliases', {'Instalaç�': 'Instalaç�', 'Valências': 'Valências', 'Concelho': 'Concelho', 'Legenda': 'Legenda', 'Categoria': 'Categoria', });
lyr_financas_35.set('fieldAliases', {'NOME': 'NOME', 'LUGAR': 'LUGAR', 'Categoria': 'Categoria', });
lyr_Tribunais_36.set('fieldAliases', {'NOME': 'NOME', 'Categoria': 'Categoria', });
lyr_JuntasdeFreguesia_37.set('fieldAliases', {'NOME': 'NOME', 'MORADA': 'MORADA', 'COD_POSTAL': 'COD_POSTAL', 'LOC_POSTAL': 'LOC_POSTAL', 'TELEFONE': 'TELEFONE', 'FAX': 'FAX', 'SITE': 'SITE', 'EMAIL': 'EMAIL', 'Categoria': 'Categoria', });
lyr_CmarasMunicipais_38.set('fieldAliases', {'NOME': 'NOME', 'Categoria': 'Categoria', });
lyr_EquipamentosAdministrativos_39.set('fieldAliases', {'DICOFRE': 'DICOFRE', 'NOME': 'NOME', 'TIPO': 'TIPO', 'LUGAR': 'LUGAR', 'MORADA': 'MORADA', 'COD_POSTAL': 'COD_POSTAL', 'LOC_POSTAL': 'LOC_POSTAL', 'TELEFONE': 'TELEFONE', 'FAX': 'FAX', 'SITE': 'SITE', 'EMAIL': 'EMAIL', 'HORARIO': 'HORARIO', 'OBS': 'OBS', 'DATA_ACT': 'DATA_ACT', 'FONTE': 'FONTE', 'ID1': 'ID1', 'DATA_INICI': 'DATA_INICI', 'DATA_FIM': 'DATA_FIM', });
lyr_TorresVigia_40.set('fieldAliases', {'id': 'id', 'IDENTIFICA': 'IDENTIFICA', 'TIPO': 'TIPO', 'ILHA': 'ILHA', 'DICOFRE': 'DICOFRE', 'FREGUESIA': 'FREGUESIA', 'MUNICIPIO': 'MUNICIPIO', 'Numeracao': 'Numeracao', });
lyr_PostosFlorestais_41.set('fieldAliases', {'ID': 'ID', 'IDENTIFICA': 'IDENTIFICA', 'TIPO1': 'TIPO1', 'TIPO2': 'TIPO2', 'TIPO3': 'TIPO3', 'ILHA': 'ILHA', 'DICOFRE': 'DICOFRE', 'FREGUESIA': 'FREGUESIA', 'MUNICIPIO': 'MUNICIPIO', 'Numeracao': 'Numeracao', });
lyr_AgentesPC_RAM_42.set('fieldAliases', {'Descricao': 'Descricao', 'APC': 'APC', 'Instalacao': 'Instalacao', 'LUG11': 'LUG11', 'FIRST_LUG1': 'FIRST_LUG1', 'Freguesia': 'Freguesia', 'Concelho': 'Concelho', 'Ilha': 'Ilha', 'Categoria': 'Categoria', });
lyr_parques_empresariais_43.set('fieldAliases', {'DESIGNACAO': 'DESIGNACAO', 'CONCELHO': 'CONCELHO', 'FREGUESIA': 'FREGUESIA', 'N_LOTES': 'N_LOTES', 'Morada': 'Morada', });
lyr_GsdePetrleoLiquefeito_44.set('fieldAliases', {'Fonte': 'Fonte', 'Número_Pro': 'Número_Pro', 'Promotor_E': 'Promotor_E', 'Morada': 'Morada', 'Freguesia': 'Freguesia', 'Concelho': 'Concelho', 'Tipo_Posto': 'Tipo_Posto', 'Tipo_de_Co': 'Tipo_de_Co', 'Legend': 'Legend', });
lyr_PostosdeAbastecimentoemInfraestruturas_45.set('fieldAliases', {'Fonte': 'Fonte', 'Número_Pro': 'Número_Pro', 'Promotor_E': 'Promotor_E', 'Morada': 'Morada', 'Freguesia': 'Freguesia', 'Concelho': 'Concelho', 'Tipo_Posto': 'Tipo_Posto', 'Tipo_de_Co': 'Tipo_de_Co', 'Legend': 'Legend', });
lyr_PostosdeCombustiveis_46.set('fieldAliases', {'id': 'id', });
lyr_Levadas_47.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'ID_GIIGA': 'ID_GIIGA', 'DESCRICAO': 'DESCRICAO', 'TIPO': 'TIPO', 'DESCRICA_1': 'DESCRICA_1', 'SUPRA_SIST': 'SUPRA_SIST', 'SISTEMA': 'SISTEMA', 'COD_CONFIG': 'COD_CONFIG', 'CONFIGURAC': 'CONFIGURAC', 'TIPO_CONFI': 'TIPO_CONFI', 'ID_GIIGA_1': 'ID_GIIGA_1', 'ID_FEATURE': 'ID_FEATURE', 'TIPO_1': 'TIPO_1', 'SUPRA_SI_1': 'SUPRA_SI_1', 'SISTEMA_1': 'SISTEMA_1', 'COD_CONF_1': 'COD_CONF_1', 'CONFIGUR_1': 'CONFIGUR_1', 'TIPO_CON_1': 'TIPO_CON_1', 'ID_GIIGA_2': 'ID_GIIGA_2', 'PROPRIETÁ': 'PROPRIETÁ', 'Shape_Leng': 'Shape_Leng', });
lyr_CanaisPrincipais_48.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'IDCanal': 'IDCanal', 'Designacao': 'Designacao', 'CodTipoCan': 'CodTipoCan', 'levada': 'levada', 'Shape_Leng': 'Shape_Leng', });
lyr_ReservatriosdeRegaMeioAreo_49.set('fieldAliases', {'Número': 'Número', 'Cod__Canal': 'Cod__Canal', 'Dsc__canal': 'Dsc__canal', 'Cod__Confi': 'Cod__Confi', 'Desc__Conf': 'Desc__Conf', 'Concelho': 'Concelho', 'Freguesia': 'Freguesia', 'X': 'X', 'y': 'y', 'Trabalhos': 'Trabalhos', });
lyr_ReservatriosdeRega_50.set('fieldAliases', {'Número': 'Número', 'Cod__Canal': 'Cod__Canal', 'Dsc__canal': 'Dsc__canal', 'Cod__Confi': 'Cod__Confi', 'Desc__Conf': 'Desc__Conf', 'Concelho': 'Concelho', 'Freguesia': 'Freguesia', 'X': 'X', 'y': 'y', 'Trabalhos': 'Trabalhos', });
lyr_ETAR_51.set('fieldAliases', {'DESCRICAO': 'DESCRICAO', 'DSC_INSTAL': 'DSC_INSTAL', 'Capacidade': 'Capacidade', });
lyr_Furos_52.set('fieldAliases', {'DESCRICAO': 'DESCRICAO', 'SUPRA_SIST': 'SUPRA_SIST', 'SISTEMA': 'SISTEMA', 'Caudal': 'Caudal', });
lyr_NascenteseCaptaes_53.set('fieldAliases', {'DESCRICAO': 'DESCRICAO', 'SISTEMA': 'SISTEMA', 'Clasificac': 'Clasificac', });
lyr_PostodeCloragem_54.set('fieldAliases', {'DESCRICAO': 'DESCRICAO', 'SISTEMA': 'SISTEMA', 'Capacidade': 'Capacidade', });
lyr_Reservatrios_55.set('fieldAliases', {'DESCRICAO': 'DESCRICAO', 'SUPRA_SIST': 'SUPRA_SIST', 'SISTEMA': 'SISTEMA', 'Volume': 'Volume', });
lyr_CentralMiniHdrica_56.set('fieldAliases', {'DESCRICAO': 'DESCRICAO', 'Caudal': 'Caudal', 'ORIG_FID': 'ORIG_FID', });
lyr_Barragens_57.set('fieldAliases', {'DESCRIÇÃ': 'DESCRIÇÃ', 'CAPACIDADE': 'CAPACIDADE', 'ORIG_FID': 'ORIG_FID', });
lyr_Galerias_58.set('fieldAliases', {'DSC_OBJ': 'DSC_OBJ', 'Compr': 'Compr', });
lyr_TneiseCanais_59.set('fieldAliases', {'SISTEMA': 'SISTEMA', });
lyr_condutas_alta_pressao_60.set('fieldAliases', {'DESCRICAO': 'DESCRICAO', 'SISTEMA': 'SISTEMA', });
lyr_rede_energetica_pontos_ram_61.set('fieldAliases', {'Legenda': 'Legenda', });
lyr_Rede_Energetica_PSanto_62.set('fieldAliases', {'Class': 'Class', });
lyr_Rede_Energetica_MAD_63.set('fieldAliases', {'Class': 'Class', });
lyr_rede_energetica_pontos_ram_64.set('fieldAliases', {'Legenda': 'Legenda', });
lyr_EEM_AIE_65.set('fieldAliases', {'Entidade': 'Entidade', });
lyr_Antenas_66.set('fieldAliases', {'Concelho': 'Concelho', 'Class': 'Class', 'Categoria': 'Categoria', });
lyr_ANACOM_CTM_67.set('fieldAliases', {'Concelho': 'Concelho', 'Class': 'Class', 'Categoria': 'Categoria', });
lyr_pontes_viadutos_ram_68.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'compriment': 'compriment', });
lyr_tuneis_todos_69.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_tuneis_500m_ou_mais_70.set('fieldAliases', {'name': 'name', 'ref': 'ref', 'compriment': 'compriment', 'susce': 'susce', 'Ext. Aprox': 'Ext. Aprox', });
lyr_EquipamentosAeroportuarios_71.set('fieldAliases', {'Descricao': 'Descricao', 'Tipo': 'Tipo', });
lyr_RedeViriacomTneis_72.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_concelhos_73.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'BGRI2021': 'BGRI2021', 'DT21': 'DT21', 'DTMN21': 'DTMN21', 'DTMNFR21': 'DTMNFR21', 'DTMNFRSEC2': 'DTMNFRSEC2', 'SECNUM21': 'SECNUM21', 'SSNUM21': 'SSNUM21', 'SECSSNUM21': 'SECSSNUM21', 'SUBSECCAO': 'SUBSECCAO', 'NUTS1': 'NUTS1', 'NUTS2': 'NUTS2', 'NUTS3': 'NUTS3', 'N_EDIFICIO': 'N_EDIFICIO', 'N_EDIFIC_1': 'N_EDIFIC_1', 'N_EDIFIC_2': 'N_EDIFIC_2', 'N_EDIFIC_3': 'N_EDIFIC_3', 'N_EDIFIC_4': 'N_EDIFIC_4', 'N_EDIFIC_5': 'N_EDIFIC_5', 'N_EDIFIC_6': 'N_EDIFIC_6', 'N_EDIFIC_7': 'N_EDIFIC_7', 'N_EDIFIC_8': 'N_EDIFIC_8', 'N_EDIFIC_9': 'N_EDIFIC_9', 'N_EDIFIC10': 'N_EDIFIC10', 'N_EDIFIC11': 'N_EDIFIC11', 'N_ALOJAMEN': 'N_ALOJAMEN', 'N_ALOJAM_1': 'N_ALOJAM_1', 'N_ALOJAM_2': 'N_ALOJAM_2', 'N_ALOJAM_3': 'N_ALOJAM_3', 'N_RHABITUA': 'N_RHABITUA', 'N_RHABIT_1': 'N_RHABIT_1', 'N_RHABIT_2': 'N_RHABIT_2', 'N_RHABIT_3': 'N_RHABIT_3', 'N_AGREGADO': 'N_AGREGADO', 'N_ADP_1_OU': 'N_ADP_1_OU', 'N_ADP_3_OU': 'N_ADP_3_OU', 'N_NUCLEOS_': 'N_NUCLEOS_', 'N_NUCLEO_1': 'N_NUCLEO_1', 'N_INDIVIDU': 'N_INDIVIDU', 'N_INDIVI_1': 'N_INDIVI_1', 'N_INDIVI_2': 'N_INDIVI_2', 'N_INDIVI_3': 'N_INDIVI_3', 'N_INDIVI_4': 'N_INDIVI_4', 'N_INDIVI_5': 'N_INDIVI_5', 'N_INDIVI_6': 'N_INDIVI_6', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'aloj/edi': 'aloj/edi', 'fid': 'fid', 'aloj/edi_1': 'aloj/edi_1', 'layer': 'layer', 'aloja_edif': 'aloja_edif', });
lyr_subsecoes_74.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'BGRI2021': 'BGRI2021', 'DT21': 'DT21', 'DTMN21': 'DTMN21', 'DTMNFR21': 'DTMNFR21', 'DTMNFRSEC2': 'DTMNFRSEC2', 'SECNUM21': 'SECNUM21', 'SSNUM21': 'SSNUM21', 'SECSSNUM21': 'SECSSNUM21', 'SUBSECCAO': 'SUBSECCAO', 'NUTS1': 'NUTS1', 'NUTS2': 'NUTS2', 'NUTS3': 'NUTS3', 'N_EDIFICIO': 'N_EDIFICIO', 'N_EDIFIC_1': 'N_EDIFIC_1', 'N_EDIFIC_2': 'N_EDIFIC_2', 'N_EDIFIC_3': 'N_EDIFIC_3', 'N_EDIFIC_4': 'N_EDIFIC_4', 'N_EDIFIC_5': 'N_EDIFIC_5', 'N_EDIFIC_6': 'N_EDIFIC_6', 'N_EDIFIC_7': 'N_EDIFIC_7', 'N_EDIFIC_8': 'N_EDIFIC_8', 'N_EDIFIC_9': 'N_EDIFIC_9', 'N_EDIFIC10': 'N_EDIFIC10', 'N_EDIFIC11': 'N_EDIFIC11', 'N_ALOJAMEN': 'N_ALOJAMEN', 'N_ALOJAM_1': 'N_ALOJAM_1', 'N_ALOJAM_2': 'N_ALOJAM_2', 'N_ALOJAM_3': 'N_ALOJAM_3', 'N_RHABITUA': 'N_RHABITUA', 'N_RHABIT_1': 'N_RHABIT_1', 'N_RHABIT_2': 'N_RHABIT_2', 'N_RHABIT_3': 'N_RHABIT_3', 'N_AGREGADO': 'N_AGREGADO', 'N_ADP_1_OU': 'N_ADP_1_OU', 'N_ADP_3_OU': 'N_ADP_3_OU', 'N_NUCLEOS_': 'N_NUCLEOS_', 'N_NUCLEO_1': 'N_NUCLEO_1', 'N_INDIVIDU': 'N_INDIVIDU', 'N_INDIVI_1': 'N_INDIVI_1', 'N_INDIVI_2': 'N_INDIVI_2', 'N_INDIVI_3': 'N_INDIVI_3', 'N_INDIVI_4': 'N_INDIVI_4', 'N_INDIVI_5': 'N_INDIVI_5', 'N_INDIVI_6': 'N_INDIVI_6', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'aloj/edi': 'aloj/edi', 'fid': 'fid', 'aloj/edi_1': 'aloj/edi_1', 'layer': 'layer', 'aloja_edif': 'aloja_edif', 'area_km': 'area_km', 'dens_pop': 'dens_pop', });
lyr_BaciasHidrogrficas_75.set('fieldAliases', {'Bacia': 'Bacia', 'ID_Label': 'ID_Label', });
lyr_RedeHidrogrfica_77.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_geologia_im_78.set('fieldAliases', {'code2': 'code2', });
lyr_geologia_ps_79.set('fieldAliases', {'code2': 'code2', 'ponderacao': 'ponderacao', 'code3': 'code3', 'descriçao': 'descriçao', 'valor1': 'valor1', 'area': 'area', 'code': 'code', });
lyr_OcupacaoSolo_82.set('fieldAliases', {'Nivel_2': 'Nivel_2', 'Nivel_1': 'Nivel_1', 'Area': 'Area', });
lyr_NecPro_91.set('fieldAliases', {'id': 'id', 'DESIGNACAO': 'DESIGNACAO', 'COORDENADA': 'COORDENADA', });
lyr_ZRnM_92.set('fieldAliases', {'id': 'id', 'DESIGNACAO': 'DESIGNACAO', 'COORDENADA': 'COORDENADA', });
lyr_ZCAP_93.set('fieldAliases', {'id': 'id', 'DESIGNACAO': 'DESIGNACAO', 'LOCAL': 'LOCAL', 'COORDENADA': 'COORDENADA', });
lyr_ZRR_94.set('fieldAliases', {'id': 'id', 'DESIGNACAO': 'DESIGNACAO', 'COORDENADA': 'COORDENADA', 'CONCELHO': 'CONCELHO', });
lyr_ArqMadeira_Mun_CAOP2023_2.set('fieldImages', {'fid': 'TextEdit', 'DICO': 'TextEdit', 'Municipio': 'TextEdit', 'Ilha': 'TextEdit', 'N_Freguesi': 'TextEdit', 'NUTSIII': 'TextEdit', 'NUTSII': 'TextEdit', 'NUTSI': 'TextEdit', 'Alt_Max': 'TextEdit', 'Alt_Min': 'TextEdit', 'Area_ha': 'TextEdit', 'Perim_km': 'TextEdit', });
lyr_ClinicasVeterinrias_4.set('fieldImages', {'id': 'TextEdit', 'Designacao': 'TextEdit', 'Morada': 'TextEdit', 'Contacto': 'Range', 'Coordenada': 'TextEdit', 'DirClinico': 'TextEdit', 'Concelho': 'TextEdit', });
lyr_HospitalVeterinrio_5.set('fieldImages', {'id': 'TextEdit', 'Designacao': 'TextEdit', 'Morada': 'TextEdit', 'Contacto': 'Range', 'Coordenada': 'TextEdit', 'DirClinico': 'TextEdit', 'Concelho': 'TextEdit', });
lyr_UnidadesHoteleiras_6.set('fieldImages', {'NOME': 'TextEdit', 'MORADA': 'TextEdit', 'TELEFONE': 'TextEdit', 'FAX': 'TextEdit', 'E_MAIL': 'TextEdit', 'SITE': 'TextEdit', 'Tipo': 'TextEdit', 'N_CAMAS': 'Range', });
lyr_SuperficiesComerciais_7.set('fieldImages', {'cadeia': 'TextEdit', 'nome': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'id': 'Range', });
lyr_aguas_costeiras_zonas_protecao_8.set('fieldImages', {'id': '', });
lyr_Laurissilva_9.set('fieldImages', {'id': '', });
lyr_macico_montanhoso_central_10.set('fieldImages', {'id': '', });
lyr_Ponta_SLourencpo_11.set('fieldImages', {'id': '', });
lyr_Moledos_madalenaMar_12.set('fieldImages', {'id': '', });
lyr_achadas_da_cruz_13.set('fieldImages', {'id': '', });
lyr_reaProtegidadoCaboGiro_14.set('fieldImages', {'id': 'TextEdit', 'Designacao': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ReservaNaturalParcialdoGarajau_15.set('fieldImages', {'FID': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_reaProtegidadaPontadoPargo_16.set('fieldImages', {'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_RededereasMarinhasdoPortoSanto_17.set('fieldImages', {'id': 'TextEdit', });
lyr_ReservaNaturaldaRochadoNavio_18.set('fieldImages', {'id': 'TextEdit', });
lyr_ParqueNaturaldaMadeira_19.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'Denominaca': 'TextEdit', 'Sub_Denomi': 'TextEdit', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PatrimonioClassificadoEdificado_27.set('fieldImages', {'Id': 'Range', 'Designacao': 'TextEdit', });
lyr_Igrejas_28.set('fieldImages', {'IGREJA': 'TextEdit', 'MORADA': 'TextEdit', 'TELEFONE': 'TextEdit', 'FAX': 'TextEdit', 'CONTACTO': 'TextEdit', });
lyr_equipamentos_culturais_29.set('fieldImages', {'Descricao': 'TextEdit', 'Tipo': 'TextEdit', 'Eq_Cultura': 'TextEdit', 'Fonte': 'TextEdit', 'LUG11': 'TextEdit', 'FIRST_LUG1': 'TextEdit', 'Freguesia': 'TextEdit', 'Concelho': 'TextEdit', 'Ilha': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_Equipamentos_sociais_30.set('fieldImages', {'Nome': 'TextEdit', 'Morada': 'TextEdit', 'Concelho': 'TextEdit', 'Resp_': 'TextEdit', 'Telef_': 'TextEdit', 'e_mail': 'TextEdit', 'DESIGNACAO': 'TextEdit', 'Tipo': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_PolidesportivoDescoberto_33.set('fieldImages', {'id': 'TextEdit', 'Descricao': 'TextEdit', 'Legenda': 'TextEdit', 'Concelho': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_Piscina_34.set('fieldImages', {'Instalaç�': 'TextEdit', 'Valências': 'TextEdit', 'Concelho': 'TextEdit', 'Legenda': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_financas_35.set('fieldImages', {'NOME': 'TextEdit', 'LUGAR': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_Tribunais_36.set('fieldImages', {'NOME': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_JuntasdeFreguesia_37.set('fieldImages', {'NOME': 'TextEdit', 'MORADA': 'TextEdit', 'COD_POSTAL': 'TextEdit', 'LOC_POSTAL': 'TextEdit', 'TELEFONE': 'TextEdit', 'FAX': 'TextEdit', 'SITE': 'TextEdit', 'EMAIL': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_CmarasMunicipais_38.set('fieldImages', {'NOME': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_EquipamentosAdministrativos_39.set('fieldImages', {'DICOFRE': 'TextEdit', 'NOME': 'TextEdit', 'TIPO': 'TextEdit', 'LUGAR': 'TextEdit', 'MORADA': 'TextEdit', 'COD_POSTAL': 'TextEdit', 'LOC_POSTAL': 'TextEdit', 'TELEFONE': 'TextEdit', 'FAX': 'TextEdit', 'SITE': 'TextEdit', 'EMAIL': 'TextEdit', 'HORARIO': 'TextEdit', 'OBS': 'TextEdit', 'DATA_ACT': 'DateTime', 'FONTE': 'TextEdit', 'ID1': 'TextEdit', 'DATA_INICI': 'DateTime', 'DATA_FIM': 'DateTime', });
lyr_TorresVigia_40.set('fieldImages', {'id': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'TIPO': 'TextEdit', 'ILHA': 'TextEdit', 'DICOFRE': 'TextEdit', 'FREGUESIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'Numeracao': 'TextEdit', });
lyr_PostosFlorestais_41.set('fieldImages', {'ID': 'Range', 'IDENTIFICA': 'TextEdit', 'TIPO1': 'TextEdit', 'TIPO2': 'TextEdit', 'TIPO3': 'TextEdit', 'ILHA': 'TextEdit', 'DICOFRE': 'TextEdit', 'FREGUESIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'Numeracao': 'TextEdit', });
lyr_AgentesPC_RAM_42.set('fieldImages', {'Descricao': 'TextEdit', 'APC': 'TextEdit', 'Instalacao': 'TextEdit', 'LUG11': 'TextEdit', 'FIRST_LUG1': 'TextEdit', 'Freguesia': 'TextEdit', 'Concelho': 'TextEdit', 'Ilha': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_parques_empresariais_43.set('fieldImages', {'DESIGNACAO': 'TextEdit', 'CONCELHO': 'TextEdit', 'FREGUESIA': 'TextEdit', 'N_LOTES': 'Range', 'Morada': 'TextEdit', });
lyr_GsdePetrleoLiquefeito_44.set('fieldImages', {'Fonte': 'TextEdit', 'Número_Pro': 'TextEdit', 'Promotor_E': 'TextEdit', 'Morada': 'TextEdit', 'Freguesia': 'TextEdit', 'Concelho': 'TextEdit', 'Tipo_Posto': 'TextEdit', 'Tipo_de_Co': 'TextEdit', 'Legend': 'TextEdit', });
lyr_PostosdeAbastecimentoemInfraestruturas_45.set('fieldImages', {'Fonte': 'TextEdit', 'Número_Pro': 'TextEdit', 'Promotor_E': 'TextEdit', 'Morada': 'TextEdit', 'Freguesia': 'TextEdit', 'Concelho': 'TextEdit', 'Tipo_Posto': 'TextEdit', 'Tipo_de_Co': 'TextEdit', 'Legend': 'TextEdit', });
lyr_PostosdeCombustiveis_46.set('fieldImages', {'id': 'TextEdit', });
lyr_Levadas_47.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'ID_GIIGA': 'TextEdit', 'DESCRICAO': 'TextEdit', 'TIPO': 'TextEdit', 'DESCRICA_1': 'TextEdit', 'SUPRA_SIST': 'TextEdit', 'SISTEMA': 'TextEdit', 'COD_CONFIG': 'TextEdit', 'CONFIGURAC': 'TextEdit', 'TIPO_CONFI': 'TextEdit', 'ID_GIIGA_1': 'TextEdit', 'ID_FEATURE': 'TextEdit', 'TIPO_1': 'TextEdit', 'SUPRA_SI_1': 'TextEdit', 'SISTEMA_1': 'TextEdit', 'COD_CONF_1': 'TextEdit', 'CONFIGUR_1': 'TextEdit', 'TIPO_CON_1': 'TextEdit', 'ID_GIIGA_2': 'TextEdit', 'PROPRIETÁ': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_CanaisPrincipais_48.set('fieldImages', {'OBJECTID': 'TextEdit', 'IDCanal': 'TextEdit', 'Designacao': 'TextEdit', 'CodTipoCan': 'TextEdit', 'levada': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_ReservatriosdeRegaMeioAreo_49.set('fieldImages', {'Número': 'TextEdit', 'Cod__Canal': 'TextEdit', 'Dsc__canal': 'TextEdit', 'Cod__Confi': 'TextEdit', 'Desc__Conf': 'TextEdit', 'Concelho': 'TextEdit', 'Freguesia': 'TextEdit', 'X': 'TextEdit', 'y': 'TextEdit', 'Trabalhos': 'TextEdit', });
lyr_ReservatriosdeRega_50.set('fieldImages', {'Número': '', 'Cod__Canal': '', 'Dsc__canal': '', 'Cod__Confi': '', 'Desc__Conf': '', 'Concelho': '', 'Freguesia': '', 'X': '', 'y': '', 'Trabalhos': '', });
lyr_ETAR_51.set('fieldImages', {'DESCRICAO': 'TextEdit', 'DSC_INSTAL': 'TextEdit', 'Capacidade': 'TextEdit', });
lyr_Furos_52.set('fieldImages', {'DESCRICAO': 'TextEdit', 'SUPRA_SIST': 'TextEdit', 'SISTEMA': 'TextEdit', 'Caudal': 'TextEdit', });
lyr_NascenteseCaptaes_53.set('fieldImages', {'DESCRICAO': 'TextEdit', 'SISTEMA': 'TextEdit', 'Clasificac': 'TextEdit', });
lyr_PostodeCloragem_54.set('fieldImages', {'DESCRICAO': 'TextEdit', 'SISTEMA': 'TextEdit', 'Capacidade': 'TextEdit', });
lyr_Reservatrios_55.set('fieldImages', {'DESCRICAO': 'TextEdit', 'SUPRA_SIST': 'TextEdit', 'SISTEMA': 'TextEdit', 'Volume': 'TextEdit', });
lyr_CentralMiniHdrica_56.set('fieldImages', {'DESCRICAO': 'TextEdit', 'Caudal': 'TextEdit', 'ORIG_FID': 'Range', });
lyr_Barragens_57.set('fieldImages', {'DESCRIÇÃ': 'TextEdit', 'CAPACIDADE': 'Range', 'ORIG_FID': 'Range', });
lyr_Galerias_58.set('fieldImages', {'DSC_OBJ': 'TextEdit', 'Compr': 'TextEdit', });
lyr_TneiseCanais_59.set('fieldImages', {'SISTEMA': 'TextEdit', });
lyr_condutas_alta_pressao_60.set('fieldImages', {'DESCRICAO': 'TextEdit', 'SISTEMA': 'TextEdit', });
lyr_rede_energetica_pontos_ram_61.set('fieldImages', {'Legenda': 'TextEdit', });
lyr_Rede_Energetica_PSanto_62.set('fieldImages', {'Class': 'TextEdit', });
lyr_Rede_Energetica_MAD_63.set('fieldImages', {'Class': 'TextEdit', });
lyr_rede_energetica_pontos_ram_64.set('fieldImages', {'Legenda': 'TextEdit', });
lyr_EEM_AIE_65.set('fieldImages', {'Entidade': 'TextEdit', });
lyr_Antenas_66.set('fieldImages', {'Concelho': 'TextEdit', 'Class': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_ANACOM_CTM_67.set('fieldImages', {'Concelho': 'TextEdit', 'Class': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_pontes_viadutos_ram_68.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'compriment': 'TextEdit', });
lyr_tuneis_todos_69.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_tuneis_500m_ou_mais_70.set('fieldImages', {'name': 'TextEdit', 'ref': 'TextEdit', 'compriment': 'TextEdit', 'susce': 'TextEdit', 'Ext. Aprox': 'TextEdit', });
lyr_EquipamentosAeroportuarios_71.set('fieldImages', {'Descricao': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_RedeViriacomTneis_72.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', });
lyr_concelhos_73.set('fieldImages', {'OBJECTID': 'TextEdit', 'BGRI2021': 'TextEdit', 'DT21': 'TextEdit', 'DTMN21': 'TextEdit', 'DTMNFR21': 'TextEdit', 'DTMNFRSEC2': 'TextEdit', 'SECNUM21': 'TextEdit', 'SSNUM21': 'TextEdit', 'SECSSNUM21': 'TextEdit', 'SUBSECCAO': 'TextEdit', 'NUTS1': 'TextEdit', 'NUTS2': 'TextEdit', 'NUTS3': 'TextEdit', 'N_EDIFICIO': 'TextEdit', 'N_EDIFIC_1': 'TextEdit', 'N_EDIFIC_2': 'TextEdit', 'N_EDIFIC_3': 'TextEdit', 'N_EDIFIC_4': 'TextEdit', 'N_EDIFIC_5': 'TextEdit', 'N_EDIFIC_6': 'TextEdit', 'N_EDIFIC_7': 'TextEdit', 'N_EDIFIC_8': 'TextEdit', 'N_EDIFIC_9': 'TextEdit', 'N_EDIFIC10': 'TextEdit', 'N_EDIFIC11': 'TextEdit', 'N_ALOJAMEN': 'TextEdit', 'N_ALOJAM_1': 'TextEdit', 'N_ALOJAM_2': 'TextEdit', 'N_ALOJAM_3': 'TextEdit', 'N_RHABITUA': 'TextEdit', 'N_RHABIT_1': 'TextEdit', 'N_RHABIT_2': 'TextEdit', 'N_RHABIT_3': 'TextEdit', 'N_AGREGADO': 'TextEdit', 'N_ADP_1_OU': 'TextEdit', 'N_ADP_3_OU': 'TextEdit', 'N_NUCLEOS_': 'TextEdit', 'N_NUCLEO_1': 'TextEdit', 'N_INDIVIDU': 'TextEdit', 'N_INDIVI_1': 'TextEdit', 'N_INDIVI_2': 'TextEdit', 'N_INDIVI_3': 'TextEdit', 'N_INDIVI_4': 'TextEdit', 'N_INDIVI_5': 'TextEdit', 'N_INDIVI_6': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'aloj/edi': 'TextEdit', 'fid': 'TextEdit', 'aloj/edi_1': 'TextEdit', 'layer': 'TextEdit', 'aloja_edif': 'TextEdit', });
lyr_subsecoes_74.set('fieldImages', {'OBJECTID': 'TextEdit', 'BGRI2021': 'TextEdit', 'DT21': 'TextEdit', 'DTMN21': 'TextEdit', 'DTMNFR21': 'TextEdit', 'DTMNFRSEC2': 'TextEdit', 'SECNUM21': 'TextEdit', 'SSNUM21': 'TextEdit', 'SECSSNUM21': 'TextEdit', 'SUBSECCAO': 'TextEdit', 'NUTS1': 'TextEdit', 'NUTS2': 'TextEdit', 'NUTS3': 'TextEdit', 'N_EDIFICIO': 'TextEdit', 'N_EDIFIC_1': 'TextEdit', 'N_EDIFIC_2': 'TextEdit', 'N_EDIFIC_3': 'TextEdit', 'N_EDIFIC_4': 'TextEdit', 'N_EDIFIC_5': 'TextEdit', 'N_EDIFIC_6': 'TextEdit', 'N_EDIFIC_7': 'TextEdit', 'N_EDIFIC_8': 'TextEdit', 'N_EDIFIC_9': 'TextEdit', 'N_EDIFIC10': 'TextEdit', 'N_EDIFIC11': 'TextEdit', 'N_ALOJAMEN': 'TextEdit', 'N_ALOJAM_1': 'TextEdit', 'N_ALOJAM_2': 'TextEdit', 'N_ALOJAM_3': 'TextEdit', 'N_RHABITUA': 'TextEdit', 'N_RHABIT_1': 'TextEdit', 'N_RHABIT_2': 'TextEdit', 'N_RHABIT_3': 'TextEdit', 'N_AGREGADO': 'TextEdit', 'N_ADP_1_OU': 'TextEdit', 'N_ADP_3_OU': 'TextEdit', 'N_NUCLEOS_': 'TextEdit', 'N_NUCLEO_1': 'TextEdit', 'N_INDIVIDU': 'TextEdit', 'N_INDIVI_1': 'TextEdit', 'N_INDIVI_2': 'TextEdit', 'N_INDIVI_3': 'TextEdit', 'N_INDIVI_4': 'TextEdit', 'N_INDIVI_5': 'TextEdit', 'N_INDIVI_6': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'aloj/edi': 'TextEdit', 'fid': 'TextEdit', 'aloj/edi_1': 'TextEdit', 'layer': 'TextEdit', 'aloja_edif': 'TextEdit', 'area_km': 'TextEdit', 'dens_pop': 'TextEdit', });
lyr_BaciasHidrogrficas_75.set('fieldImages', {'Bacia': 'TextEdit', 'ID_Label': 'TextEdit', });
lyr_RedeHidrogrfica_77.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_geologia_im_78.set('fieldImages', {'code2': 'TextEdit', });
lyr_geologia_ps_79.set('fieldImages', {'code2': 'TextEdit', 'ponderacao': 'Range', 'code3': 'TextEdit', 'descriçao': 'TextEdit', 'valor1': 'Range', 'area': 'TextEdit', 'code': 'TextEdit', });
lyr_OcupacaoSolo_82.set('fieldImages', {'Nivel_2': 'TextEdit', 'Nivel_1': 'TextEdit', 'Area': 'TextEdit', });
lyr_NecPro_91.set('fieldImages', {'id': 'TextEdit', 'DESIGNACAO': 'TextEdit', 'COORDENADA': 'TextEdit', });
lyr_ZRnM_92.set('fieldImages', {'id': 'TextEdit', 'DESIGNACAO': 'TextEdit', 'COORDENADA': 'TextEdit', });
lyr_ZCAP_93.set('fieldImages', {'id': 'TextEdit', 'DESIGNACAO': 'TextEdit', 'LOCAL': 'TextEdit', 'COORDENADA': 'TextEdit', });
lyr_ZRR_94.set('fieldImages', {'id': 'TextEdit', 'DESIGNACAO': 'TextEdit', 'COORDENADA': 'TextEdit', 'CONCELHO': 'TextEdit', });
lyr_ArqMadeira_Mun_CAOP2023_2.set('fieldLabels', {'fid': 'no label', 'DICO': 'inline label - visible with data', 'Municipio': 'no label', 'Ilha': 'no label', 'N_Freguesi': 'no label', 'NUTSIII': 'no label', 'NUTSII': 'no label', 'NUTSI': 'no label', 'Alt_Max': 'no label', 'Alt_Min': 'no label', 'Area_ha': 'no label', 'Perim_km': 'no label', });
lyr_ClinicasVeterinrias_4.set('fieldLabels', {'id': 'no label', 'Designacao': 'no label', 'Morada': 'no label', 'Contacto': 'no label', 'Coordenada': 'no label', 'DirClinico': 'no label', 'Concelho': 'no label', });
lyr_HospitalVeterinrio_5.set('fieldLabels', {'id': 'no label', 'Designacao': 'no label', 'Morada': 'no label', 'Contacto': 'no label', 'Coordenada': 'no label', 'DirClinico': 'no label', 'Concelho': 'no label', });
lyr_UnidadesHoteleiras_6.set('fieldLabels', {'NOME': 'no label', 'MORADA': 'no label', 'TELEFONE': 'no label', 'FAX': 'no label', 'E_MAIL': 'no label', 'SITE': 'no label', 'Tipo': 'no label', 'N_CAMAS': 'no label', });
lyr_SuperficiesComerciais_7.set('fieldLabels', {'cadeia': 'no label', 'nome': 'no label', 'lat': 'no label', 'lon': 'no label', 'id': 'no label', });
lyr_aguas_costeiras_zonas_protecao_8.set('fieldLabels', {'id': 'no label', });
lyr_Laurissilva_9.set('fieldLabels', {'id': 'no label', });
lyr_macico_montanhoso_central_10.set('fieldLabels', {'id': 'no label', });
lyr_Ponta_SLourencpo_11.set('fieldLabels', {'id': 'no label', });
lyr_Moledos_madalenaMar_12.set('fieldLabels', {'id': 'no label', });
lyr_achadas_da_cruz_13.set('fieldLabels', {'id': 'no label', });
lyr_reaProtegidadoCaboGiro_14.set('fieldLabels', {'id': 'no label', 'Designacao': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ReservaNaturalParcialdoGarajau_15.set('fieldLabels', {'FID': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_reaProtegidadaPontadoPargo_16.set('fieldLabels', {'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_RededereasMarinhasdoPortoSanto_17.set('fieldLabels', {'id': 'no label', });
lyr_ReservaNaturaldaRochadoNavio_18.set('fieldLabels', {'id': 'no label', });
lyr_ParqueNaturaldaMadeira_19.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'Denominaca': 'no label', 'Sub_Denomi': 'no label', 'Area': 'no label', 'Perimetro': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PatrimonioClassificadoEdificado_27.set('fieldLabels', {'Id': 'no label', 'Designacao': 'no label', });
lyr_Igrejas_28.set('fieldLabels', {'IGREJA': 'no label', 'MORADA': 'no label', 'TELEFONE': 'no label', 'FAX': 'no label', 'CONTACTO': 'no label', });
lyr_equipamentos_culturais_29.set('fieldLabels', {'Descricao': 'no label', 'Tipo': 'no label', 'Eq_Cultura': 'no label', 'Fonte': 'no label', 'LUG11': 'no label', 'FIRST_LUG1': 'no label', 'Freguesia': 'no label', 'Concelho': 'no label', 'Ilha': 'no label', 'Categoria': 'no label', });
lyr_Equipamentos_sociais_30.set('fieldLabels', {'Nome': 'no label', 'Morada': 'no label', 'Concelho': 'no label', 'Resp_': 'no label', 'Telef_': 'no label', 'e_mail': 'no label', 'DESIGNACAO': 'no label', 'Tipo': 'no label', 'Categoria': 'no label', });
lyr_equipamentos_saude_31.set('fieldLabels', {'Label': 'no label', 'CONCELHO': 'no label', 'DESIGNACAO': 'no label', 'Categoria': 'no label', });

lyr_PolidesportivoDescoberto_33.set('fieldLabels', {'id': 'no label', 'Descricao': 'no label', 'Legenda': 'no label', 'Concelho': 'no label', 'Categoria': 'no label', });
lyr_Piscina_34.set('fieldLabels', {'Instalaç�': 'no label', 'Valências': 'no label', 'Concelho': 'no label', 'Legenda': 'no label', 'Categoria': 'no label', });
lyr_financas_35.set('fieldLabels', {'NOME': 'no label', 'LUGAR': 'no label', 'Categoria': 'no label', });
lyr_Tribunais_36.set('fieldLabels', {'NOME': 'no label', 'Categoria': 'no label', });
lyr_JuntasdeFreguesia_37.set('fieldLabels', {'NOME': 'no label', 'MORADA': 'no label', 'COD_POSTAL': 'no label', 'LOC_POSTAL': 'no label', 'TELEFONE': 'no label', 'FAX': 'no label', 'SITE': 'no label', 'EMAIL': 'no label', 'Categoria': 'no label', });
lyr_CmarasMunicipais_38.set('fieldLabels', {'NOME': 'no label', 'Categoria': 'no label', });
lyr_EquipamentosAdministrativos_39.set('fieldLabels', {'DICOFRE': 'no label', 'NOME': 'no label', 'TIPO': 'no label', 'LUGAR': 'no label', 'MORADA': 'no label', 'COD_POSTAL': 'no label', 'LOC_POSTAL': 'no label', 'TELEFONE': 'no label', 'FAX': 'no label', 'SITE': 'no label', 'EMAIL': 'no label', 'HORARIO': 'no label', 'OBS': 'no label', 'DATA_ACT': 'no label', 'FONTE': 'no label', 'ID1': 'no label', 'DATA_INICI': 'no label', 'DATA_FIM': 'no label', });
lyr_TorresVigia_40.set('fieldLabels', {'id': 'no label', 'IDENTIFICA': 'no label', 'TIPO': 'no label', 'ILHA': 'no label', 'DICOFRE': 'no label', 'FREGUESIA': 'no label', 'MUNICIPIO': 'no label', 'Numeracao': 'no label', });
lyr_PostosFlorestais_41.set('fieldLabels', {'ID': 'no label', 'IDENTIFICA': 'no label', 'TIPO1': 'no label', 'TIPO2': 'no label', 'TIPO3': 'no label', 'ILHA': 'no label', 'DICOFRE': 'no label', 'FREGUESIA': 'no label', 'MUNICIPIO': 'no label', 'Numeracao': 'no label', });
lyr_AgentesPC_RAM_42.set('fieldLabels', {'Descricao': 'no label', 'APC': 'no label', 'Instalacao': 'no label', 'LUG11': 'no label', 'FIRST_LUG1': 'no label', 'Freguesia': 'no label', 'Concelho': 'no label', 'Ilha': 'no label', 'Categoria': 'no label', });
lyr_parques_empresariais_43.set('fieldLabels', {'DESIGNACAO': 'no label', 'CONCELHO': 'no label', 'FREGUESIA': 'no label', 'N_LOTES': 'no label', 'Morada': 'no label', });
lyr_GsdePetrleoLiquefeito_44.set('fieldLabels', {'Fonte': 'no label', 'Número_Pro': 'no label', 'Promotor_E': 'no label', 'Morada': 'no label', 'Freguesia': 'no label', 'Concelho': 'no label', 'Tipo_Posto': 'no label', 'Tipo_de_Co': 'no label', 'Legend': 'no label', });
lyr_PostosdeAbastecimentoemInfraestruturas_45.set('fieldLabels', {'Fonte': 'no label', 'Número_Pro': 'no label', 'Promotor_E': 'no label', 'Morada': 'no label', 'Freguesia': 'no label', 'Concelho': 'no label', 'Tipo_Posto': 'no label', 'Tipo_de_Co': 'no label', 'Legend': 'no label', });
lyr_PostosdeCombustiveis_46.set('fieldLabels', {'id': 'no label', });
lyr_Levadas_47.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'ID_GIIGA': 'no label', 'DESCRICAO': 'no label', 'TIPO': 'no label', 'DESCRICA_1': 'no label', 'SUPRA_SIST': 'no label', 'SISTEMA': 'no label', 'COD_CONFIG': 'no label', 'CONFIGURAC': 'no label', 'TIPO_CONFI': 'no label', 'ID_GIIGA_1': 'no label', 'ID_FEATURE': 'no label', 'TIPO_1': 'no label', 'SUPRA_SI_1': 'no label', 'SISTEMA_1': 'no label', 'COD_CONF_1': 'no label', 'CONFIGUR_1': 'no label', 'TIPO_CON_1': 'no label', 'ID_GIIGA_2': 'no label', 'PROPRIETÁ': 'no label', 'Shape_Leng': 'no label', });
lyr_CanaisPrincipais_48.set('fieldLabels', {'OBJECTID': 'no label', 'IDCanal': 'no label', 'Designacao': 'no label', 'CodTipoCan': 'no label', 'levada': 'no label', 'Shape_Leng': 'no label', });
lyr_ReservatriosdeRegaMeioAreo_49.set('fieldLabels', {'Número': 'no label', 'Cod__Canal': 'no label', 'Dsc__canal': 'no label', 'Cod__Confi': 'no label', 'Desc__Conf': 'no label', 'Concelho': 'no label', 'Freguesia': 'no label', 'X': 'no label', 'y': 'no label', 'Trabalhos': 'no label', });
lyr_ReservatriosdeRega_50.set('fieldLabels', {'Número': 'no label', 'Cod__Canal': 'no label', 'Dsc__canal': 'no label', 'Cod__Confi': 'no label', 'Desc__Conf': 'no label', 'Concelho': 'no label', 'Freguesia': 'no label', 'X': 'no label', 'y': 'no label', 'Trabalhos': 'no label', });
lyr_ETAR_51.set('fieldLabels', {'DESCRICAO': 'no label', 'DSC_INSTAL': 'no label', 'Capacidade': 'no label', });
lyr_Furos_52.set('fieldLabels', {'DESCRICAO': 'no label', 'SUPRA_SIST': 'no label', 'SISTEMA': 'no label', 'Caudal': 'no label', });
lyr_NascenteseCaptaes_53.set('fieldLabels', {'DESCRICAO': 'no label', 'SISTEMA': 'no label', 'Clasificac': 'no label', });
lyr_PostodeCloragem_54.set('fieldLabels', {'DESCRICAO': 'no label', 'SISTEMA': 'no label', 'Capacidade': 'no label', });
lyr_Reservatrios_55.set('fieldLabels', {'DESCRICAO': 'no label', 'SUPRA_SIST': 'no label', 'SISTEMA': 'no label', 'Volume': 'no label', });
lyr_CentralMiniHdrica_56.set('fieldLabels', {'DESCRICAO': 'no label', 'Caudal': 'no label', 'ORIG_FID': 'no label', });
lyr_Barragens_57.set('fieldLabels', {'DESCRIÇÃ': 'no label', 'CAPACIDADE': 'no label', 'ORIG_FID': 'no label', });
lyr_Galerias_58.set('fieldLabels', {'DSC_OBJ': 'no label', 'Compr': 'no label', });
lyr_TneiseCanais_59.set('fieldLabels', {'SISTEMA': 'no label', });
lyr_condutas_alta_pressao_60.set('fieldLabels', {'DESCRICAO': 'no label', 'SISTEMA': 'no label', });
lyr_rede_energetica_pontos_ram_61.set('fieldLabels', {'Legenda': 'no label', });
lyr_Rede_Energetica_PSanto_62.set('fieldLabels', {'Class': 'no label', });
lyr_Rede_Energetica_MAD_63.set('fieldLabels', {'Class': 'no label', });
lyr_rede_energetica_pontos_ram_64.set('fieldLabels', {'Legenda': 'no label', });
lyr_EEM_AIE_65.set('fieldLabels', {'Entidade': 'no label', });
lyr_Antenas_66.set('fieldLabels', {'Concelho': 'no label', 'Class': 'no label', 'Categoria': 'no label', });
lyr_ANACOM_CTM_67.set('fieldLabels', {'Concelho': 'no label', 'Class': 'no label', 'Categoria': 'no label', });
lyr_pontes_viadutos_ram_68.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'compriment': 'no label', });
lyr_tuneis_todos_69.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_tuneis_500m_ou_mais_70.set('fieldLabels', {'name': 'no label', 'ref': 'no label', 'compriment': 'no label', 'susce': 'no label', 'Ext. Aprox': 'no label', });
lyr_EquipamentosAeroportuarios_71.set('fieldLabels', {'Descricao': 'no label', 'Tipo': 'no label', });
lyr_RedeViriacomTneis_72.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', });
lyr_concelhos_73.set('fieldLabels', {'OBJECTID': 'no label', 'BGRI2021': 'no label', 'DT21': 'no label', 'DTMN21': 'no label', 'DTMNFR21': 'no label', 'DTMNFRSEC2': 'no label', 'SECNUM21': 'no label', 'SSNUM21': 'no label', 'SECSSNUM21': 'no label', 'SUBSECCAO': 'no label', 'NUTS1': 'no label', 'NUTS2': 'no label', 'NUTS3': 'no label', 'N_EDIFICIO': 'no label', 'N_EDIFIC_1': 'no label', 'N_EDIFIC_2': 'no label', 'N_EDIFIC_3': 'no label', 'N_EDIFIC_4': 'no label', 'N_EDIFIC_5': 'no label', 'N_EDIFIC_6': 'no label', 'N_EDIFIC_7': 'no label', 'N_EDIFIC_8': 'no label', 'N_EDIFIC_9': 'no label', 'N_EDIFIC10': 'no label', 'N_EDIFIC11': 'no label', 'N_ALOJAMEN': 'no label', 'N_ALOJAM_1': 'no label', 'N_ALOJAM_2': 'no label', 'N_ALOJAM_3': 'no label', 'N_RHABITUA': 'no label', 'N_RHABIT_1': 'no label', 'N_RHABIT_2': 'no label', 'N_RHABIT_3': 'no label', 'N_AGREGADO': 'no label', 'N_ADP_1_OU': 'no label', 'N_ADP_3_OU': 'no label', 'N_NUCLEOS_': 'no label', 'N_NUCLEO_1': 'no label', 'N_INDIVIDU': 'no label', 'N_INDIVI_1': 'no label', 'N_INDIVI_2': 'no label', 'N_INDIVI_3': 'no label', 'N_INDIVI_4': 'no label', 'N_INDIVI_5': 'no label', 'N_INDIVI_6': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'aloj/edi': 'no label', 'fid': 'no label', 'aloj/edi_1': 'no label', 'layer': 'no label', 'aloja_edif': 'no label', });
lyr_subsecoes_74.set('fieldLabels', {'OBJECTID': 'no label', 'BGRI2021': 'no label', 'DT21': 'no label', 'DTMN21': 'no label', 'DTMNFR21': 'no label', 'DTMNFRSEC2': 'no label', 'SECNUM21': 'no label', 'SSNUM21': 'no label', 'SECSSNUM21': 'no label', 'SUBSECCAO': 'no label', 'NUTS1': 'no label', 'NUTS2': 'no label', 'NUTS3': 'no label', 'N_EDIFICIO': 'no label', 'N_EDIFIC_1': 'no label', 'N_EDIFIC_2': 'no label', 'N_EDIFIC_3': 'no label', 'N_EDIFIC_4': 'no label', 'N_EDIFIC_5': 'no label', 'N_EDIFIC_6': 'no label', 'N_EDIFIC_7': 'no label', 'N_EDIFIC_8': 'no label', 'N_EDIFIC_9': 'no label', 'N_EDIFIC10': 'no label', 'N_EDIFIC11': 'no label', 'N_ALOJAMEN': 'no label', 'N_ALOJAM_1': 'no label', 'N_ALOJAM_2': 'no label', 'N_ALOJAM_3': 'no label', 'N_RHABITUA': 'no label', 'N_RHABIT_1': 'no label', 'N_RHABIT_2': 'no label', 'N_RHABIT_3': 'no label', 'N_AGREGADO': 'no label', 'N_ADP_1_OU': 'no label', 'N_ADP_3_OU': 'no label', 'N_NUCLEOS_': 'no label', 'N_NUCLEO_1': 'no label', 'N_INDIVIDU': 'no label', 'N_INDIVI_1': 'no label', 'N_INDIVI_2': 'no label', 'N_INDIVI_3': 'no label', 'N_INDIVI_4': 'no label', 'N_INDIVI_5': 'no label', 'N_INDIVI_6': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'aloj/edi': 'no label', 'fid': 'no label', 'aloj/edi_1': 'no label', 'layer': 'no label', 'aloja_edif': 'no label', 'area_km': 'no label', 'dens_pop': 'no label', });
lyr_BaciasHidrogrficas_75.set('fieldLabels', {'Bacia': 'no label', 'ID_Label': 'no label', });
lyr_RedeHidrogrfica_77.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_geologia_im_78.set('fieldLabels', {'code2': 'no label', });
lyr_geologia_ps_79.set('fieldLabels', {'code2': 'no label', 'ponderacao': 'no label', 'code3': 'no label', 'descriçao': 'no label', 'valor1': 'no label', 'area': 'no label', 'code': 'no label', });
lyr_OcupacaoSolo_82.set('fieldLabels', {'Nivel_2': 'no label', 'Nivel_1': 'no label', 'Area': 'no label', });
lyr_NecPro_91.set('fieldLabels', {'id': 'no label', 'DESIGNACAO': 'no label', 'COORDENADA': 'no label', });
lyr_ZRnM_92.set('fieldLabels', {'id': 'no label', 'DESIGNACAO': 'no label', 'COORDENADA': 'no label', });
lyr_ZCAP_93.set('fieldLabels', {'id': 'no label', 'DESIGNACAO': 'no label', 'LOCAL': 'no label', 'COORDENADA': 'no label', });
lyr_ZRR_94.on('precompose', function(evt) {
evt.context.globalCompositeOperation = 'lighten';
});