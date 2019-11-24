const YAML = require("yaml");
const FS = require("fs");

var file = FS.readFileSync("./game.yml", 'utf-8');
console.log(YAML.parse(file));