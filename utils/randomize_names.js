const basePath = process.cwd();
const fs = require("fs");

const {
    names,
    middleNames,
    surnames
} = require(`${basePath}/src/randomize_names_config.js`);
const format = [names, middleNames, surnames];

const create = () => {
    let output = [];
    format.forEach((list) => {
        let word = list[Math.floor(Math.random() * list.length)];
        output.push(word);
    });
    return output.join(" ");
};

// read json data
let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
let data = JSON.parse(rawdata);

data.forEach((item) => {
    item.name = create();
    fs.writeFileSync(
        `${basePath}/build/json/${item.edition}.json`,
        JSON.stringify(item, null, 2)
    );
});

fs.writeFileSync(
    `${basePath}/build/json/_metadata.json`,
    JSON.stringify(data, null, 2)
);

console.log(`Updated names for images to random names`);