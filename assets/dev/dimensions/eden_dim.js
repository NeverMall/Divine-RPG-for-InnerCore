var Eden_biome = new CustomBiome("eden_biome")
.setCoverBlock(BlockID.edenGrass, 0)
.setSurfaceBlock(BlockID.edenDirt, 0)
.setFillingBlock(BlockID.stoneTwilight, 0);

var Eden = new Dimensions.CustomDimension("Eden", 420);
Eden.setSkyColor(.64, 1, .98);
Eden.setFogColor(.64, 1, .98);

Eden.setGenerator(Dimensions.newGenerator({
	biome: Eden_biome.id,
    layers: [
        {
            minY: 16, maxY: 128, 
            yConversion: [[0.1, 0.14], [0.7, -0.8], [1, -0.5]], 
            material: {
            base: BlockID.stoneTwilight,
            surface: {
            	id: BlockID.edenDirt,
                data: 0,
                width: 10
                }, 
            cover: BlockID.edenGrass
            },
            noise: {
                octaves: {count: 4, scale: 37, weight: .8}
            },
        }
    ]
}));

Callback.addCallback('ItemUse', function (coords, item) {
    if (item.id == 369) {
        Dimensions.transfer(Player.get(), Player.getDimension() == 420 ? dimension.id : 420);
    }
});