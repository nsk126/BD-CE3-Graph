
// create an array with nodes
var len = undefined;
var color = "gray";

var nodes = new vis.DataSet([
{id: 1, label: 'SAGE', group: 1, size: 1583/36.77},
{id: 2, label: 'WS', group: 1, size: 1506/36.77},
{id: 3, label: 'FEAR', group: 1, size: 1160/36.77},
{id: 4, label: 'SoL', group: 1, size: 687/36.77},
{id: 5, label: 'FAIR', group: 1, size: 304/36.77},
{id: 6, label: 'WaSp', group: 0, size: 1418/36.77},
{id: 7, label: 'TFI', group: 0, size: 731/36.77},
{id: 8, label: 'AA', group: 2, size: 1652/36.77},
{id: 9, label: 'A', group: 2, size: 234/36.77},
{id: 10, label: 'AK', group: 2, size: 1732/36.77},
{id: 11, label: 'JOHN', group: 2, size: 920/36.77},
{id: 12, label: 'GS', group: 2, size: 937/36.77},
{id: 13, label: 'WW', group: 2, size: 529/36.77},
{id: 14, label: 'SEXY', group: 0, size: 1100/36.77},
{id: 15, label: 'ToS', group: 0, size: 530/36.77},
{id: 16, label: 'HIRE', group: 0, size: 470/36.77},
{id: 17, label: 'DINO', group: 0, size: 1240/36.77},
{id: 18, label: 'YNV', group: 0, size: 1137/36.77},
{id: 19, label: 'SHIP', group: 0, size: 524/36.77},
{id: 20, label: 'CC', group: 3, size: 774/36.77},
{id: 21, label: 'LVA', group: 3, size: 961/36.77},
{id: 22, label: 'OFF', group: 0, size: 1073/36.77},
{id: 23, label: 'WAR', group: 0, size: 1012/36.77},
{id: 24, label: 'pepe', group: 0, size: 1240/36.77},
{id: 25, label: 'PFH', group: 0, size: 362/36.77},
{id: 26, label: 'AK47', group: 0, size: 290/36.77},
{id: 27, label: 'HOLD', group: 0, size: 619/36.77},
{id: 28, label: 'QUAR', group: 0, size: 469/36.77},
{id: 29, label: 'SAND', group: 5, size: 2250/36.77},
{id: 30, label: 'Kram', group: 5, size: 1780/36.77},
{id: 31, label: 'VORE', group: 5, size: 1002/36.77},
{id: 32, label: 'HC', group: 5, size: 1600/36.77},
{id: 33, label: 'HCs', group: 5, size: 153/36.77},
{id: 34, label: 'PKM', group: 5, size: 1004/36.77},
{id: 35, label: 'ZEUS', group: 5, size: 1691/36.77},
{id: 36, label: 'EROS', group: 5, size: 1082/36.77},
{id: 37, label: 'ARES', group: 5, size: 191/36.77},
{id: 38, label: 'SA', group: 6, size: 1984/36.77},
{id: 39, label: 'SE', group: 6, size: 1491/36.77},
{id: 40, label: 'BD2', group: 6, size: 899/36.77},
{id: 41, label: 'BLCK', group: 6, size: 1059/36.77},
{id: 42, label: 'HINI', group: 7, size: 1385/36.77},
{id: 43, label: 'HlNl', group: 7, size: 1200/36.77},
{id: 44, label: 'HlNI', group: 7, size: 982/36.77},
{id: 45, label: 'RIP', group: 0, size: 419/36.77},
{id: 46, label: 'FUN', group: 0, size: 922/36.77},
{id: 47, label: 'jw', group: 0, size: 355/36.77},
{id: 48, label: 'Meh', group: 0, size: 320/36.77},
{id: 49, label: 'NwS', group: 0, size: 273/36.77},
{id: 50, label: 'OTFW', group: 0, size: 189/36.77}
]);

// create an array with edges
var edges = new vis.DataSet([
{from: 1, to: 2},
{from: 1, to: 3},
{from: 1, to: 4},
{from: 2, to: 3},
{from: 3, to: 5},
{from: 8, to: 9},
{from: 8, to: 11},
{from: 8, to: 10},
{from: 8, to: 13},
{from: 8, to: 14},
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
{from: 30, to: 23},
{from: 24, to: 42},
{from: 42, to: 15, arrows: "to, from", color: "#FF0000", length: 300},
{from: 43, to: 15, arrows: "to, from", color: "#FF0000", length: 300},
{from: 44, to: 15, arrows: "to, from", color: "#FF0000", length: 300},
{from: 8, to: 15, arrows: "to, from", color: "#FF0000", length: 300},
{from: 1, to: 26, arrows: "to, from", color: "#FF0000", length: 300},
{from: 3, to: 45, arrows: "to, from", color: "#FF0000", length: 300},
{from: 18, to: 15, arrows: "to, from", color: "#FF0000", length: 300},
{from: 18, to: 16, arrows: "to, from", color: "#FF0000", length: 300},
{from: 25, to: 26, arrows: "to, from", color: "#FF0000", length: 300},
{from: 23, to: 5, arrows: "to, from", color: "#FF0000", length: 300},
{from: 6, to: 5, arrows: "to, from", color: "#FF0000", length: 300},




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
