var size = 0;
var placement = 'point';
function categories_OcupacaoSolo_82(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Espaços Verdes Urbanos, Equipamentos Desportivos, Culturais e de Lazer e Zonas Históricas':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(247,179,247,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Áreas de extracção de inertes, áreas de deposição de resíduos e estaleiros de construção':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(219,112,147,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Florestas Abertas, Vegetação Arbustiva e Herbácea':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(51,160,44,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Zonas Descobertas e com pouca vegetação':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(178,223,138,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Indústria, Comércio e Transportes':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(227,26,28,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Áreas Agrícolas Heterogéneas':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,127,0,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Águas interiores':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(166,206,227,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Águas marinhas e costeiras':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(35,134,201,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Culturas Permanentes':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,224,52,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Culturas temporárias':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,224,139,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Florestas':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(70,218,60,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pastagens Permanentes':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,245,152,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Tecido Urbano':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(205,133,63,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Zonas húmidas interiores':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(22,146,200,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Zonas húmidas litorais':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(150,150,150,0.75)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_OcupacaoSolo_82 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Nivel_2");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_OcupacaoSolo_82(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
