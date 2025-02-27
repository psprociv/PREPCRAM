document.addEventListener('DOMContentLoaded', function () {
    var layerSwitcher = new ol.control.LayerSwitcher({
        tipLabel: 'Legenda',
        groupSelectStyle: 'group',
        collapseTipLabel: 'Recolher Legenda',
        reverse: false,
        activationMode: 'click',
        startActive: false
    });

    map.addControl(layerSwitcher);

    // Capturar o estado inicial das camadas
    var initialLayerStates = [];
    map.getLayers().forEach(function (layer) {
        if (layer instanceof ol.layer.Group) {
            layer.getLayers().forEach(function (subLayer) {
                initialLayerStates.push({ layer: subLayer, visible: subLayer.getVisible() });
            });
        } else {
            initialLayerStates.push({ layer: layer, visible: layer.getVisible() });
        }
    });

    // Função para alternar a visibilidade de todas as camadas
    function toggleAllLayers(checked) {
        initialLayerStates.forEach(function (state) {
            state.layer.setVisible(checked ? state.visible : false);
        });
    }

    // Adicionar o checkbox ao painel do LayerSwitcher
    function addLayerToggleCheckbox() {
        var layerSwitcherPanel = document.querySelector('.layer-switcher .panel');
        if (layerSwitcherPanel && !document.getElementById('toggle-layers-checkbox')) {
            var checkboxDiv = document.createElement('div');
            checkboxDiv.style.textAlign = 'left';
            checkboxDiv.style.marginBottom = '10px';

            var toggleCheckbox = document.createElement('input');
            toggleCheckbox.type = 'checkbox';
            toggleCheckbox.id = 'toggle-layers-checkbox';

            var checkboxLabel = document.createElement('label');
            checkboxLabel.htmlFor = 'toggle-layers-checkbox';
            checkboxLabel.textContent = 'Ocultar Todas as Camadas';
            checkboxLabel.style.marginLeft = '8px';

            toggleCheckbox.addEventListener('change', function () {
                toggleAllLayers(this.checked);
            });

            checkboxDiv.appendChild(toggleCheckbox);
            checkboxDiv.appendChild(checkboxLabel);

            layerSwitcherPanel.insertBefore(checkboxDiv, layerSwitcherPanel.firstChild);
        }
    }

    var observer = new MutationObserver(addLayerToggleCheckbox);
    observer.observe(document.body, { childList: true, subtree: true });

    setTimeout(addLayerToggleCheckbox, 500);
});
