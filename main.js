//npm module dependences
const fs = require('fs');
const path = require('path');
//local dependencies
var tools = require('./tools.js');

//Initialize
if (process.argv.length != 7) {
	console.log("Please us the format:\nnode main.js <Function Name OR Group Name> <Sample Count> <Include Function Name> <Hide Inner Functions> <Include Assignment Samples>");
	process.exit();
}

var input_folder_loc = "Samples/mass_data/";
var output_file_loc = "output.js";
exports.FUNCTION_NAMES = [process.argv[2]];
exports.SAMPLE_COUNT = parseInt(process.argv[3]);
exports.INCLUDE_FUNCTION_NAME = (process.argv[4].toLowerCase() == 'true');
exports.HIDE_INNER_FUNCTIONS = (process.argv[5].toLowerCase() == 'true');
exports.INCLUDE_ASSIGNMENT_SAMPLES = (process.argv[6].toLowerCase() == 'true');
var output = "";

var tags = JSON.parse(fs.readFileSync('tags.json', 'utf8'));
if (tags.hasOwnProperty(exports.FUNCTION_NAMES[0])) {
	exports.FUNCTION_NAMES = tags[exports.FUNCTION_NAMES[0]];
	console.log("Looking for d3 functions: " + exports.FUNCTION_NAMES);
}

var samples = fs.readdirSync(input_folder_loc).filter(file => fs.statSync(path.join(input_folder_loc, file)).isDirectory());
var sample_count = 0;

samples.some(function(sample_folder) {
	if (!exports.INCLUDE_ASSIGNMENT_SAMPLES) {
		if (sample_folder.indexOf("Assignment") > -1) {
			return false;
		}
	}
	sample_loc = input_folder_loc + sample_folder + '/index.html';
	result = tools.process_file(sample_loc);
	if (result == null || result.length == 0) {
		return false;
	}
	output += "// ##### File: " + sample_folder + " #####\n";
	output += result;
	sample_count += 1;
	return (exports.SAMPLE_COUNT > 0 && sample_count >= exports.SAMPLE_COUNT);
});

if (output.trim().length < 1) {
	output = "None found.";
}
output = "// ----------------------\n// Results for '" + process.argv[2] + "'\n// ----------------------\n\n" + output;

fs.writeFile(output_file_loc, output, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The output file was saved at " + output_file_loc + "!");
});