var size = 0;
var placement = 'point';
function categories_AgentesPC_RAM_42(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Corpos de Bombeiros':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.03793103448275862,
                  anchor: [300, 300],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/transport_bus_stop.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Forças de Segurança':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.03793103448275862,
                  anchor: [300, 300],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/background_security.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Autoridade Marítima':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [579.997, 579.997],
                  scale: 0.037931230678779376,
                  anchor: [300, 300],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/amenity=police.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Forças Armadas':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.02586206896551724,
                  anchor: [300, 300],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/background_safety.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SEMER':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [579.997, 580.457],
                  scale: 0.0327587901316731,
                  anchor: [300, 300],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/amenity=hospital.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Serviços de Saúde':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10 + size,
            stroke: new ol.style.Stroke({color: 'rgba(31,120,180,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,0.996078431372549)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.032758620689655175,
                  anchor: [300, 300],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/health_hospital.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Corpo da Polícia Florestal':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.032758620689655175,
                  anchor: [300, 300],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/amenity_firestation2.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Corpo de Vigilates da Natureza':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [579.997, 579.997],
                  scale: 0.037931230678779376,
                  anchor: [300, 300],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/amenity=police_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
                    case 'CVP - Delegação da Madeira':
    return [
        // Estilo do círculo branco
        new ol.style.Style({
            image: new ol.style.Circle({
                radius: 10.0 + size, // Tamanho do círculo
                stroke: new ol.style.Stroke({
                    color: 'rgba(255,0,0,1.0)', // Borda vermelha
                    width: 1.5 // Espessura da borda
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(255,255,255,1.0)' // Preenchimento branco
                })
            })
        }),
        // Estilo da cruz vermelha menor (sem rotação, dois segmentos)
        new ol.style.Style({
            image: new ol.style.Icon({
                // Cruz vermelha menor em SVG
                src: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" y="6" width="16" height="4" fill="rgba(227,26,28,1.0)"/>
                        <rect x="6" y="0" width="4" height="16" fill="rgba(227,26,28,1.0)"/>
                    </svg>
                `),
                scale: 1, // Escala do ícone
                anchor: [8, 8], // Centralizar o ícone (metade de 16x16)
                anchorXUnits: 'pixels',
                anchorYUnits: 'pixels'
            })
        })
    ];

                    break;
case 'SANAS':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.03793103448275862,
                  anchor: [300, 300],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/transport_marina.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_AgentesPC_RAM_42 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("APC");
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
    
    var style = categories_AgentesPC_RAM_42(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
