enchant();

window.onload = function() {
	var game = new Game(320, 560);
	game.preload('img/enchant.png');

	game.onload = function() {
		var scene = new Scene3D();
		var cube = new Cube();
		cube.mesh.texture.src = game.assets['img/enchant.png'];

		cube.onenterframe = function() {
			cube.rotateRoll(0.1);
			cube.rotateYaw(0.1);
		}
		scene.addChild(cube);
	}

	game.start();
}
