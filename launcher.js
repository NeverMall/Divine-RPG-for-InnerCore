ConfigureMultiplayer({
    name: "Test/1",
    version: "0.1",
    isClientOnly: false
});

IMPORT("DependenceHelper");
Translation.addTranslation("• Requires api DungeonUtility {version}, current {now}", {
 ru: "• Требуется api DungeonUtility {version}, текущее {now}",
});
const version = 4;
new Dependence(__name__)
 .addDependence("DungeonUtility", "https://icmods.mineprogramming.org/mod?id=783", null, function(api){
  return api.version >= version;
 }, function(api){
  if(api)
   return Translation.translate("• Requires api DungeonUtility {version}, current {now}").replace("{version}", version).replace("{now}", api.version||1);
  return "• DungeonUtility";
 })
 .setLaunch(function(all_api,api) {
 Launch(api);
 });
 
 Launch();