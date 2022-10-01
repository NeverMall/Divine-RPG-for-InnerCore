IDRegistry.genBlockID("edenGrass");
Block.createBlock("edenGrass", [
     {name: "Eden grass", texture: [["eden_dirt", 0], ["eden_grass_top", 0], ["eden_grass_side", 0]], inCreative: true}]);
     
IDRegistry.genBlockID("edenDirt");
Block.createBlock("edenDirt", [
     {name: "Eden dirt", texture: [["eden_dirt", 0]], inCreative: true}]);
     
IDRegistry.genBlockID("stoneTwilight");
Block.createBlock("stoneTwilight", [
     {name: "Twilight stone", texture: [["twilight_stone", 0]], inCreative: true}]);
     
IDRegistry.genBlockID("edenOre");
Block.createBlock("edenOre", [
     {name: "Eden ore", texture: [["eden_ore", 0]], inCreative: true}]);
     
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Eden.id) return;
UniqueGen.generateOreInDimension(BlockID.edenOre, 0, chunkX, chunkZ, random, { 
 veinCounts: 30, 
 minY: 16,
 maxY: 128,
 size: random.nextInt(4, 6),
 mode: true,
 check: [BlockID.stoneTwilight]
}); 
});
     
IDRegistry.genBlockID("edenLog");
Block.createBlockWithRotation("edenLog", [
     {name: "Eden log", texture: [["eden_log_top", 0], ["eden_log_top", 0], ["eden_log_side", 0], ["eden_log_side", 0], ["eden_log_side", 0], ["eden_log_side", 0]], inCreative: true}]);
     
IDRegistry.genBlockID("edenLeaves");
Block.createBlock("edenLeaves", [
     {name: "Eden leaves", texture: [["eden_leaves", 0]], inCreative: true, renderlayer: 1}]);