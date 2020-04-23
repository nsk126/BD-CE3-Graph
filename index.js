
// create an array with nodes
var len = undefined;
var color = "gray";

var nodes = new vis.DataSet([
{id: 1, label: 'SAGE', group: 1, size: 1700/36.77},
{id: 2, label: 'WS', group: 1, size: 1598/36.77},
{id: 3, label: 'FEAR', group: 1, size: 1253/36.77},
{id: 4, label: 'SoL', group: 1, size: 749/36.77},
{id: 5, label: 'FAIR', group: 1, size: 336/36.77},
{id: 6, label: 'WaSp', group: 0, size: 1506/36.77},
{id: 7, label: 'TFI', group: 0, size: 787/36.77},
{id: 8, label: 'AA', group: 2, size: 1784/36.77},
{id: 9, label: 'A', group: 2, size: 272/36.77},
{id: 10, label: 'AK', group: 2, size: 1823/36.77},
{id: 11, label: 'JOHN', group: 2, size: 1035/36.77},
{id: 12, label: 'GS', group: 2, size: 1002/36.77},
{id: 13, label: 'WW', group: 2, size: 528/36.77},
{id: 14, label: 'SEXY', group: 0, size: 1179/36.77},
{id: 15, label: 'ToS', group: 0, size: 136/36.77},
{id: 16, label: 'HIRE', group: 0, size: 416/36.77},
{id: 17, label: 'DINO', group: 0, size: 1311/36.77},
{id: 18, label: 'YNV', group: 0, size: 1262/36.77},
{id: 19, label: 'SHIP', group: 0, size: 986/36.77},
{id: 20, label: 'CC', group: 3, size: 836/36.77},
{id: 21, label: 'LVA', group: 3, size: 1043/36.77},
{id: 22, label: 'OFF', group: 0, size: 1180/36.77},
{id: 23, label: 'WAR', group: 0, size: 1241/36.77},
{id: 24, label: 'pepe', group: 0, size: 1319/36.77},
{id: 25, label: 'PFH', group: 0, size: 494/36.77},
{id: 26, label: 'AK47', group: 0, size: 343/36.77},
{id: 27, label: 'HOLD', group: 0, size: 678/36.77},
{id: 28, label: 'QUAR', group: 0, size: 490/36.77},
{id: 29, label: 'SAND', group: 5, size: 2374/36.77},
{id: 30, label: 'Kram', group: 5, size: 1915/36.77},
{id: 31, label: 'VORE', group: 5, size: 1016/36.77},
{id: 32, label: 'HC', group: 5, size: 1663/36.77},
{id: 33, label: 'HCs', group: 5, size: 169/36.77},
{id: 34, label: 'PKM', group: 5, size: 1060/36.77},
{id: 35, label: 'ZEUS', group: 8, size: 1766/36.77},
{id: 36, label: 'EROS', group: 8, size: 1137/36.77},
{id: 37, label: 'ARES', group: 8, size: 289/36.77},
{id: 38, label: 'SA', group: 6, size: 2060/36.77},
{id: 39, label: 'SE', group: 6, size: 1549/36.77},
{id: 40, label: 'BD2', group: 6, size: 1070/36.77},
{id: 41, label: 'BLCK', group: 6, size: 1171/36.77},
{id: 42, label: 'HINI', group: 7, size: 1465/36.77},
{id: 43, label: 'HlNl', group: 7, size: 1290/36.77},
{id: 44, label: 'HlNI', group: 7, size: 1045/36.77},
{id: 45, label: 'RIP', group: 0, size: 328/36.77},
{id: 46, label: 'FUN', group: 0, size: 1000/36.77},
{id: 47, label: 'jw', group: 0, size: 377/36.77},
{id: 48, label: 'Meh', group: 0, size: 462/36.77},
{id: 49, label: 'NwS', group: 0, size: 297/36.77},
{id: 50, label: 'OTFW', group: 0, size: 211/36.77}
]);

// create an array with edges
var edges = new vis.DataSet([
{from: 1, to: 2},
{from: 1, to: 3},
{from: 1, to: 4},
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
{from: 32, to: 23},
{from: 24, to: 42},
{from: 8, to: 26},
{from: 8, to: 45},
{from: 8, to: 1, arrows: "to, from", color: "#FF0000", length: 300},
{from: 8, to: 2, arrows: "to, from", color: "#FF0000", length: 300},
{from: 8, to: 25, arrows: "to, from", color: "#FF0000", length: 300},
{from: 1, to: 26, arrows: "to, from", color: "#FF0000", length: 300},
{from: 18, to: 15, arrows: "to, from", color: "#FF0000", length: 300},
{from: 18, to: 16, arrows: "to, from", color: "#FF0000", length: 300},
{from: 25, to: 26, arrows: "to, from", color: "#FF0000", length: 300},
{from: 24, to: 16, arrows: "to, from", color: "#FF0000", length: 300},

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
