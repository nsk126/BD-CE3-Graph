
// create an array with nodes
var len = undefined;
var color = "gray";

var nodes = new vis.DataSet([
{id: 1, label: 'SAGE', group: 1, size: 1591/36.77},
{id: 2, label: 'WS', group: 1, size: 1480/36.77},
{id: 3, label: 'FEAR', group: 1, size: 1123/36.77},
{id: 4, label: 'SoL', group: 1, size: 665/36.77},
{id: 5, label: 'FAIR', group: 1, size: 296/36.77},
{id: 6, label: 'WaSp', group: 0, size: 1372/36.77},
{id: 7, label: 'TFI', group: 0, size: 706/36.77},
{id: 8, label: 'AA', group: 2, size: 1608/36.77},
{id: 9, label: 'A', group: 2, size: 230/36.77},
{id: 10, label: 'AK', group: 2, size: 1686/36.77},
{id: 11, label: 'SGC', group: 2, size: 845/36.77},
{id: 12, label: 'GS', group: 2, size: 927/36.77},
{id: 13, label: 'WW', group: 2, size: 611/36.77},
{id: 14, label: 'SEXY', group: 0, size: 1092/36.77},
{id: 15, label: 'ToS', group: 0, size: 628/36.77},
{id: 16, label: 'HIRE', group: 0, size: 454/36.77},
{id: 17, label: 'DINO', group: 0, size: 1199/36.77},
{id: 18, label: 'YNV', group: 0, size: 1092/36.77},
{id: 19, label: 'SHIP', group: 0, size: 433/36.77},
{id: 20, label: 'CC', group: 3, size: 734/36.77},
{id: 21, label: 'LVA', group: 3, size: 929/36.77},
{id: 22, label: 'OFF', group: 0, size: 1024/36.77},
{id: 23, label: 'WAR', group: 0, size: 956/36.77},
{id: 24, label: 'pepe', group: 0, size: 1213/36.77},
{id: 25, label: 'PFH', group: 0, size: 350/36.77},
{id: 26, label: 'AK47', group: 0, size: 412/36.77},
{id: 27, label: 'HOLD', group: 0, size: 591/36.77},
{id: 28, label: 'QUAR', group: 0, size: 454/36.77},
{id: 29, label: 'SAND', group: 5, size: 2206/36.77},
{id: 30, label: 'Kram', group: 5, size: 1738/36.77},
{id: 31, label: 'VORE', group: 5, size: 979/36.77},
{id: 32, label: 'HC', group: 5, size: 1581/36.77},
{id: 33, label: 'HCs', group: 5, size: 149/36.77},
{id: 34, label: 'PKM', group: 5, size: 968/36.77},
{id: 35, label: 'ZEUS', group: 5, size: 1647/36.77},
{id: 36, label: 'EROS', group: 5, size: 1050/36.77},
{id: 37, label: 'ARES', group: 5, size: 96/36.77},
{id: 38, label: 'SA', group: 6, size: 1957/36.77},
{id: 39, label: 'SE', group: 6, size: 1467/36.77},
{id: 40, label: 'BD2', group: 6, size: 868/36.77},
{id: 41, label: 'BLCK', group: 6, size: 1146/36.77},
{id: 42, label: 'HINI', group: 7, size: 1351/36.77},
{id: 43, label: 'HlNl', group: 7, size: 1169/36.77},
{id: 44, label: 'HlNI', group: 7, size: 1169/36.77},
{id: 45, label: 'RIP', group: 0, size: 436/36.77},


]);

// create an array with edges
var edges = new vis.DataSet([
{from: 1, to: 2},
{from: 1, to: 3},
{from: 1, to: 4},
{from: 2, to: 3},
{from: 3, to: 5},
{from: 8, to: 9},
{from: 8, to: 10},
{from: 8, to: 11},
{from: 8, to: 12},
{from: 8, to: 13},
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
{from: 42, to: 43},
{from: 43, to: 44},
{from: 42, to: 44},
{from: 29, to: 23},
{from: 42, to: 15, arrows: "to, from", color: "#FF0000", length: 300},
{from: 43, to: 15, arrows: "to, from", color: "#FF0000", length: 300},
{from: 44, to: 15, arrows: "to, from", color: "#FF0000", length: 300},
{from: 8, to: 15, arrows: "to, from", color: "#FF0000", length: 300},
{from: 1, to: 26, arrows: "to, from", color: "#FF0000", length: 300},
{from: 3, to: 45, arrows: "to, from", color: "#FF0000", length: 300},





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
