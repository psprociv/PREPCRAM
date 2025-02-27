var size = 0;
var placement = 'point';

var style_subsecoes_74 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("dens_pop");
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
    if (value >= 0.000000 && value <= 0.100000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(211,211,211,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.100000 && value <= 100.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(250,216,212,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 100.000000 && value <= 400.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,150,122,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 400.000000 && value <= 800.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,160,122,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 800.000000 && value <= 2000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,127,80,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2000.000000 && value <= 5000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,99,71,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 5000.000000 && value <= 10000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(205,92,92,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 10000.000000 && value <= 20000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(220,20,60,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 20000.000000 && value <= 43128.300000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(128,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
