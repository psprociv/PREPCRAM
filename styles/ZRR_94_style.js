var size = 0;
var placement = 'point';
function categories_ZRR_94(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Aeroporto da Madeira':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 15 + size,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,0.996078431372549)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [479.997, 479.997],
                  scale: 0.04482781807492108,
                  anchor: [300, 300],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/amenity=airport.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
    case 'Aeroporto do Porto Santo':
    return [ new ol.style.Style({
        image: new ol.style.Circle({
            radius: 15, 
            stroke: new ol.style.Stroke({
                color: 'rgba(35,35,35,1.0)',
                width: 1 
            }),
            fill: new ol.style.Fill({color: 'rgba(255,255,255,0.996078431372549)'
            })
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),
    new ol.style.Style({
        image: new ol.style.Icon({
            imgSize: [479.997, 479.997],
            scale: 0.04482781807492108,
            anchor: [300, 300], // Ajuste fino para centralizar
            anchorXUnits: "pixels",
            anchorYUnits: "pixels",
            rotation: 0.0,
            src: "styles/amenity=airport_1.svg"
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

                    
                    break;
case 'Porto Maritimo do Canical':
        return [ new ol.style.Style({
        image: new ol.style.Circle({
            radius: 15,
            stroke: new ol.style.Stroke({
                color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), 
                fill: new ol.style.Fill({color: 'rgba(255,255,255,0.996078431372549)'})
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [479.997, 479.997],
                  scale: 0.04482781807492108,
                  anchor: [300, 300],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/amenity=ferry_terminal_3.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Porto Maritimo do Funchal':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 15,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,0.996078431372549)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [479.997, 479.997],
                  scale: 0.04482781807492108,
                  anchor: [300, 300],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/amenity=ferry_terminal_4.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Porto Maritimo do Porto Santo':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 15,
            stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,0.996078431372549)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [479.997, 479.997],
                  scale: 0.04482781807492108,
                  anchor: [300, 300],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/amenity=ferry_terminal_5.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ZRR_94 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("DESIGNACAO");
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
    
    var style = categories_ZRR_94(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
