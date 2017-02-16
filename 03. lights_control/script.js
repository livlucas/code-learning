"use strict";

//nao use essa variavel, o meu script vai enche-la com todos os interruptores do prédio
var lights = [];


//clique nos interruptores e botoes e veja no console como a invocaçao funciona
function switchLight(on, id) {
	var i = 0, light;

	while (i < lights.length) {
		light = lights[i];

		if (light.id === id) {
			light.on = on;
			return;
		}
		i += 1;
	}
}

function switchFloorLights(on, floorNumber) {
	var i = 0, light;

	while (i < lights.length) {
		light = lights[i];

		if (light.floor === floorNumber) {
			light.on = on;
		}

		i += 1;
	}
}

function switchBuildingLights(on) {
	var i = 0, light;

	while (i < lights.length) {
		light = lights[i];
		light.on = on;

		i += 1;
	}
}

function toggleBuildingLights() {
	var i = 0, light;

	while (i < lights.length) {
		light = lights[i];
		
		light.on = !light.on;
		// if (light.on) {
		// 	light.on = false;
		// } else {
		// 	light.on = true;
		// }

		i += 1;
	}
}

function toggleEvenBuildingLights() {
	var i =0, light;

	for (i = 0; i < lights.length; i += 1) {
		light = lights[i];

		if (light.floor % 2 === 0) {
			light.on = !light.on;
		}
	}
	//nas linhas de cima usei um for e abaixo usei um while.
	// while (i < lights.length) {
	// 	light = lights[i];

	// 	if (light.floor % 2 === 0) {
	// 		light.on = !light.on;
	// 	}

	// 	i += 1;
}

function toggleOddBuildingLights() {
	var i =0, light;

	for (i = 0; i < lights.length; i += 1) {
		light = lights[i];

		if (light.floor % 2 !== 0) {
			light.on = !light.on;
		}
	}
	//nas linhas de cima usei um for e abaixo usei um while.
	// while (i < lights.length) {
	// 	light = lights[i];

	// 	if (light.floor % 2 !== 0) {
	// 		light.on = !light.on;
	// 	}

	// 	i += 1;
}
