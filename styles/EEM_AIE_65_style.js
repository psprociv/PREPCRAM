var size = 0;
var placement = 'point';
function categories_EEM_AIE_65(feature, value, size, resolution, labelText, 
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Atlantica Islands Electricity':
                    return [
                        new ol.style.Style({
                            image: new ol.style.RegularShape({
                                radius: 14.8 + size,
                                points: 4, // Quadrado
                                angle: Math.PI / 4, // Rotação de 45 graus
                                stroke: new ol.style.Stroke({
                                    color: 'rgba(35,35,35,1.0)',
                                    lineDash: null,
                                    lineCap: 'butt',
                                    lineJoin: 'miter',
                                    width: 1.0 // Ajuste para uma borda visível
                                }),
                                fill: new ol.style.Fill({
                                    color: 'rgba(178,223,138,1.0)' // Cor do preenchimento
                                })
                            })
                        }),
                        new ol.style.Style({
                            text: new ol.style.Text({
                                text: 'AIE', // O texto a ser exibido
                                font: 'bold 10px Arial, sans-serif', // Estilo e tamanho da fonte
                                fill: new ol.style.Fill({
                                    color: 'rgba(0,0,0,1.0)' // Cor do texto
                                }),
                                textAlign: 'center', // Centralizar horizontalmente
                                textBaseline: 'middle', // Centralizar verticalmente
                                offsetX: 0, // Sem deslocamento horizontal
                                offsetY: 0, // Sem deslocamento vertical
                            })
                        })
                    ];
                    break;
                    case 'Empresa de Eletricidade da Madeira':
                        return [
                            new ol.style.Style({
                                image: new ol.style.RegularShape({
                                    radius: 14.8 + size,
                                    points: 4, // Quadrado
                                    angle: Math.PI / 4, // Rotação de 45 graus
                                    stroke: new ol.style.Stroke({
                                        color: 'rgba(35,35,35,1.0)',
                                        lineDash: null,
                                        lineCap: 'butt',
                                        lineJoin: 'miter',
                                        width: 1.0 // Ajuste para uma borda visível
                                    }),
                                    fill: new ol.style.Fill({
                                        color: 'rgba(51,160,44,1.0)' // Cor do preenchimento
                                    })
                                })
                            }),
                            new ol.style.Style({
                                text: new ol.style.Text({
                                    text: 'EEM', // O texto a ser exibido
                                    font: 'bold 10px Arial, sans-serif', // Estilo e tamanho da fonte
                                    fill: new ol.style.Fill({
                                        color: 'rgba(0,0,0,1.0)' // Cor do texto
                                    }),
                                    textAlign: 'center', // Centralizar horizontalmente
                                    textBaseline: 'middle', // Centralizar verticalmente
                                    offsetX: 0, // Sem deslocamento horizontal
                                    offsetY: 0, // Sem deslocamento vertical
                                })
                            })
                        ];
                    
                    break;}};

var style_EEM_AIE_65 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Entidade");
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
    
    var style = categories_EEM_AIE_65(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
