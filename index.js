
// create an array with nodes
var len = undefined;
var color = "gray";

var nodes = new vis.DataSet([
{id: 1, label: 'MSA', group: 1, size: 1800/36.77},
{id: 2, label: 'WOOF', group: 1, size: 1936/36.77},
{id: 3, label: 'SAIL', group: 1, size: 1500/36.77},
{id: 4, label: 'PuG', group: 1, size: 1117/36.77},
{id: 5, label: 'FAIR', group: 1, size: 203/36.77},
{id: 6, label: 'MoDe', group: 0, size: 1837/36.77},
{id: 7, label: 'TFI', group: 0, size: 1040/36.77},
{id: 9, label: 'SASS', group: 0, size: 1023/36.77}, 
{id: 8, label: 'AF', group: 2, size: 1528/36.77},
// {id: 9, label: 'A', group: 2, size: 135/36.77},// disbanded
{id: 10, label: 'SGC', group: 2, size: 2083/36.77}, 
{id: 11, label: 'APE', group: 2, size: 1425/36.77},
{id: 12, label: 'GS', group: 2, size: 1464/36.77},
{id: 13, label: 'AA', group: 2, size: 592/36.77},
{id: 14, label: 'SEXY', group: 0, size: 1414/36.77},
{id: 17, label: 'DINO', group: 0, size: 1101/36.77},
{id: 18, label: 'H1Nl', group: 2, size: 111/36.77}, 
{id: 19, label: 'SHIP', group: 7, size: 1459/36.77},
{id: 20, label: 'CC', group: 3, size: 1243/36.77},
{id: 21, label: 'LVA', group: 3, size: 1323/36.77},
{id: 22, label: 'WIND', group: 0, size: 1408/36.77},
{id: 23, label: 'WAR', group: 0, size: 1828/36.77},
{id: 24, label: 'pepe', group: 0, size: 1707/36.77},
{id: 25, label: 'PFH', group: 0, size: 707/36.77},
{id: 26, label: 'AU', group: 0, size: 181/36.77},
{id: 27, label: 'HOLD', group: 0, size: 927/36.77},
{id: 28, label: 'QUAR', group: 0, size: 405/36.77},
{id: 29, label: 'SAND', group: 5, size: 2835/36.77},
{id: 30, label: 'Kram', group: 5, size: 2629/36.77},
{id: 31, label: 'VORE', group: 5, size: 1429/36.77},
{id: 32, label: 'HC', group: 5, size: 2074/36.77},
{id: 33, label: 'HCs', group: 5, size: 446/36.77},
{id: 34, label: 'PKM', group: 5, size: 1237/36.77},
{id: 35, label: 'ZEUS', group: 8, size: 2187/36.77},
{id: 36, label: 'EROS', group: 8, size: 854/36.77},
{id: 37, label: 'ARES', group: 8, size: 859/36.77},
{id: 38, label: 'SA', group: 6, size: 2416/36.77},
{id: 39, label: 'HOF', group: 6, size: 1729/36.77},
{id: 40, label: 'BD2', group: 6, size: 1690/36.77},
{id: 41, label: 'BLCK', group: 6, size: 1648/36.77},
{id: 42, label: 'HINI', group: 7, size: 2207/36.77}, // chuck
{id: 43, label: 'HlNl', group: 7, size: 1534/36.77}, // bruce
{id: 44, label: 'IND', group: 7, size: 1423/36.77}, // indian gang 
{id: 16, label: 'MINE', group: 0, size: 1049/36.77}, // sigh team 
{id: 45, label: 'RIP', group: 0, size: 916/36.77},
{id: 46, label: 'FUN', group: 0, size: 1298/36.77},
{id: 47, label: 'jw', group: 0, size: 382/36.77},
{id: 48, label: 'JK', group: 0, size: 971/36.77},
{id: 49, label: 'CCs', group: 3, size: 249/36.77},



]);

// create an array with edges
var edges = new vis.DataSet([
{from: 1, to: 2},
{from: 1, to: 3},
{from: 1, to: 4},
{from: 3, to: 5},
{from: 8, to: 11},
{from: 8, to: 10},
{from: 8, to: 13},
{from: 8, to: 14},
{from: 8, to: 18},
{from: 6, to: 7},
{from: 12, to: 10},
{from: 20, to: 21},
{from: 29, to: 30},
{from: 29, to: 31},
{from: 29, to: 32},
{from: 29, to: 34},
{from: 32, to: 33},
{from: 29, to: 35},
{from: 35, to: 36},
{from: 35, to: 37},
{from: 38, to: 39}, 
{from: 38, to: 40},
{from: 38, to: 41},
{from: 44, to: 42},
{from: 43, to: 42},
{from: 19, to: 42},
{from: 24, to: 42},
{from: 8, to: 26},
{from: 8, to: 45}, 
{from: 20, to: 49},  
{from: 42, to: 17, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 43, to: 17, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 44, to: 17, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 42, to: 8, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 43, to: 8, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 44, to: 8, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 19, to: 17, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 35, to: 4, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 37, to: 4, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 22, to: 25, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 22, to: 29, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 6, to: 29, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 6, to: 30, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 6, to: 32, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 1, to: 29, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 1, to: 30, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 1, to: 32, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 1, to: 34, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 2, to: 29, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 2, to: 30, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 2, to: 32, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 2, to: 34, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 23, to: 29, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 23, to: 30, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 23, to: 32, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 42, to: 10, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 42, to: 11, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 42, to: 12, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 42, to: 13, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 42, to: 45, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 43, to: 10, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 43, to: 11, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 43, to: 12, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 43, to: 13, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 43, to: 45, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 44, to: 11, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 44, to: 12, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 44, to: 13, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 44, to: 45, arrows: "to, from", color: "#FF0000", length: 1200},

{from: 24, to: 8, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 24, to: 11, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 24, to: 12, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 24, to: 13, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 24, to: 45, arrows: "to, from", color: "#FF0000", length: 1200},

{from: 19, to: 8, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 19, to: 11, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 19, to: 12, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 19, to: 13, arrows: "to, from", color: "#FF0000", length: 1200},
{from: 19, to: 45, arrows: "to, from", color: "#FF0000", length: 1200},




]);

// create a network
var container = document.getElementById('mynetwork');
var data = {
nodes: nodes,
edges: edges
};
var options = {
nodes: {
    shape: "dot",
    font: {
        size: 32
    },
    borderWidth: 2,
    shadow: true
},
edges: {
    width: 2,
    shadow: true,
    length: 180
}
};
var network = new vis.Network(container, data, options);
