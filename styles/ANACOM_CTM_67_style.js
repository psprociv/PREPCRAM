var size = 0;
var placement = 'point';
function categories_ANACOM_CTM_67(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'ANACOM':
                    return [ 
                        new ol.style.Style({
                            image: new ol.style.Circle({
                                radius: 15 + size,
                                stroke: new ol.style.Stroke({
                                    color: 'rgba(35,35,35,1.0)',
                                    lineDash: null,
                                    lineCap: 'butt',
                                    lineJoin: 'miter',
                                    width: 1.0 // Adicione uma borda visível para o círculo
                                }),
                                fill: new ol.style.Fill({
                                    color: 'rgba(255,255,255,0.996078431372549)'
                                })
                            }),
                            text: new ol.style.Text({
                                text: 'A', // O texto a ser exibido
                                font: 'bold 16px Arial, sans-serif', // Fonte e tamanho
                                fill: new ol.style.Fill({
                                    color: 'rgba(0,0,0,1.0)' // Cor do texto
                                }),
                                textAlign: 'center', // Alinhar horizontalmente ao centro
                                textBaseline: 'middle', // Alinhar verticalmente ao centro
                                offsetX: 0, // Sem deslocamento horizontal
                                offsetY: 0 // Sem deslocamento vertical
                            })
                        })
                    ];
                
                    break;
                    case 'Centro de Telecomunicações da Madeira':
                        return [ 
                            new ol.style.Style({
                                image: new ol.style.Circle({
                                    radius: 15 + size,
                                    stroke: new ol.style.Stroke({
                                        color: 'rgba(35,35,35,1.0)',
                                        lineDash: null,
                                        lineCap: 'butt',
                                        lineJoin: 'miter',
                                        width: 1.0 // Adicione uma borda visível para o círculo
                                    }),
                                    fill: new ol.style.Fill({
                                        color: 'rgba(255,255,255,0.996078431372549)'
                                    })
                                }),
                                text: new ol.style.Text({
                                    text: 'T', // O texto a ser exibido
                                    font: 'bold 16px Arial, sans-serif', // Fonte e tamanho
                                    fill: new ol.style.Fill({
                                        color: 'rgba(0,0,0,1.0)' // Cor do texto
                                    }),
                                    textAlign: 'center', // Alinhar horizontalmente ao centro
                                    textBaseline: 'middle', // Alinhar verticalmente ao centro
                                    offsetX: 0, // Sem deslocamento horizontal
                                    offsetY: 0 // Sem deslocamento vertical
                                })
                            })
                        ];
                    
                    break;}};

var style_ANACOM_CTM_67 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Class");
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
    
    var style = categories_ANACOM_CTM_67(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
