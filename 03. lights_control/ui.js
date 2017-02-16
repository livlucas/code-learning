"use strict";

//
//
//      NAO MEXA NEM OLHE ESSE ARQUIVO (apenas quando concluir o desafio)
//
//

window.addEventListener('load', function () {
    fillLights(5, 8);
    renderUI();
    
    document.addEventListener('click', function (e) {
        var target = e.target,
            classList = e.target.classList,
            id, floor, on, data;
            
        if (classList.contains('floor-light')) {
            on = !classList.contains('on');
            id = target.getAttribute('id');
            switchLight(on, id);
        } else if (classList.contains('floor-light-button')) {
            on = target.getAttribute('data-switch') === 'on';
            floor = target.parentElement.getAttribute('data-floor') * 1;
            switchFloorLights(on, floor);
        } else if (classList.contains('control-light-button')) {
            data = target.getAttribute('data-switch');
            if (data === 'toggle') {
                toggleBuildingLights();
            } else if (data === 'toggle-evens') {
                toggleEvenBuildingLights();
            } else if (data === 'toggle-odds') {
                toggleOddBuildingLights();
            } else {
                on = target.getAttribute('data-switch') === 'on';
                switchBuildingLights(on);
            }
        } else return;
        
        renderUI();
    }, false);
}, false);

var template = {
    floor: '<div class="floor">{floor_html}</div>',
    floorNumber: '<div class="floor-number">{floor}</div>',
    floorLight: '<div id="{id}" class="floor-light {on}">{id}</div>',
    floorControl: '<div class="floor-light-control" data-floor="{floor}"><button class="floor-light-button" data-switch="on">ON</button><button class="floor-light-button" data-switch="off">OFF</button></div>',
    buildingControl: '<div class="control-panel"><button class="control-light-button" data-switch="on">ON</button><button class="control-light-button" data-switch="off">OFF</button><button class="control-light-button" data-switch="toggle">TOGGLE</button><button class="control-light-button" data-switch="toggle-odds">Toggle ODDs</button><button class="control-light-button" data-switch="toggle-evens">Toggle EVENs</button></div>'
};

function fillLights(amountPerFloor, numberOfFloors) {
    var i, nextId;
    
    nextId = 'A'.charCodeAt(0);
    for (i = 1; i <= (amountPerFloor * numberOfFloors); i += 1, nextId += 1) {
        lights.push({
            id: String.fromCharCode(nextId),
            on: Math.random() > 0.5,
            floor: Math.ceil(i / amountPerFloor)
        });
    }
}

function renderUI() {
    var floor,
        html = '', floorHtml;
    
    lights.forEach(function (light) {
        if (floor === undefined) {
            floor = light.floor;
            floorHtml = template.floorNumber.replace('{floor}', floor);
        }

        if (floor != light.floor) {
            floorHtml += template.floorControl.replace('{floor}', floor);
            html = template.floor.replace('{floor_html}', floorHtml) + html;
            floor = light.floor;
            floorHtml = template.floorNumber.replace('{floor}', floor);
        }
        
        floorHtml += template.floorLight.replace(/{id}/gi, light.id).replace('{on}', (light.on) ? 'on' : 'off');
    });
    
    floorHtml += template.floorControl.replace('{floor}', floor);
    html = template.floor.replace('{floor_html}', floorHtml) + html;
    html += template.buildingControl;
    
    document.body.innerHTML = html;
}
