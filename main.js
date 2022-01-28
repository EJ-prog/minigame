const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

//LEVEL 1 ENTITIES
// ASSET_MANAGER.queueDownload("./Sprites_and_Assets/MetalDesertBackground.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	// gameEngine.addEntity(new MetalDesert(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
