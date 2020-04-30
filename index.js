
// create an array with nodes
var len = undefined;
var color = "gray";

var nodes = new vis.DataSet([
{id: 1, label: 'MSA', group: 1, size: 1420/36.77},
{id: 2, label: 'WOOF', group: 1, size: 1899/36.77},
{id: 3, label: 'FEAR', group: 1, size: 1436/36.77},
{id: 4, label: 'ICE', group: 1, size: 1112/36.77},
{id: 5, label: 'FAIR', group: 1, size: 340/36.77},
{id: 6, label: 'MoDe', group: 0, size: 1817/36.77},
{id: 7, label: 'TFI', group: 0, size: 1091/36.77},
{id: 9, label: 'GAYS', group: 0, size: 948/36.77}, 
{id: 8, label: 'AF', group: 2, size: 1586/36.77},
// {id: 9, label: 'A', group: 2, size: 135/36.77},// disbanded
{id: 10, label: 'AK', group: 2, size: 2275/36.77}, 
{id: 11, label: 'JOHN', group: 2, size: 1315/36.77},
{id: 12, label: 'GS', group: 2, size: 1259/36.77},
{id: 13, label: 'WW', group: 2, size: 586/36.77},
{id: 14, label: 'SEXY', group: 0, size: 1370/36.77},
{id: 17, label: 'DINO', group: 0, size: 1031/36.77},
{id: 18, label: 'YNV', group: 2, size: 72/36.77},
{id: 19, label: 'SHIP', group: 7, size: 1326/36.77},
{id: 20, label: 'CC', group: 3, size: 1207/36.77},
{id: 21, label: 'LVA', group: 3, size: 1353/36.77},
{id: 22, label: 'OFF', group: 0, size: 1522/36.77},
{id: 23, label: 'WAR', group: 0, size: 1805/36.77},
{id: 24, label: 'pepe', group: 0, size: 1604/36.77},
{id: 25, label: 'PFH', group: 0, size: 623/36.77},
{id: 26, label: 'UC', group: 0, size: 143/36.77},
{id: 27, label: 'HOLD', group: 0, size: 879/36.77},
{id: 28, label: 'QUAR', group: 0, size: 406/36.77},
{id: 29, label: 'SAND', group: 5, size: 2993/36.77},
{id: 30, label: 'Kram', group: 5, size: 2506/36.77},
{id: 31, label: 'VORE', group: 5, size: 1763/36.77},
{id: 32, label: 'HC', group: 5, size: 2109/36.77},
{id: 33, label: 'HCs', group: 5, size: 309/36.77},
{id: 34, label: 'PKM', group: 5, size: 1212/36.77},
{id: 35, label: 'ZEUS', group: 8, size: 2113/36.77},
{id: 36, label: 'EROS', group: 8, size: 830/36.77},
{id: 37, label: 'ARES', group: 8, size: 869/36.77},
{id: 38, label: 'SA', group: 6, size: 2267/36.77},
{id: 39, label: 'SE', group: 6, size: 1838/36.77},
{id: 40, label: 'BD2', group: 6, size: 1409/36.77},
{id: 41, label: 'BLCK', group: 6, size: 1564/36.77},
{id: 42, label: 'HINI', group: 7, size: 2124/36.77},
{id: 43, label: 'HlNl', group: 7, size: 1471/36.77},
{id: 44, label: 'HlNI', group: 7, size: 1420/36.77},
{id: 16, label: 'HINl', group: 0, size: 867/36.77},
{id: 45, label: 'UC', group: 0, size: 783/36.77},
{id: 46, label: 'FUN', group: 0, size: 1229/36.77},
{id: 47, label: 'jw', group: 0, size: 374/36.77},
{id: 48, label: 'JK', group: 0, size: 844/36.77},
{id: 49, label: 'CCs', group: 0, size: 232/36.77},



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
{from: 8, to: 18},
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
{from: 32, to: 23},
{from: 24, to: 42},
{from: 8, to: 26},
{from: 8, to: 45},  
{from: 42, to: 17, arrows: "to, from", color: "#FF0000", length: 300},
{from: 43, to: 17, arrows: "to, from", color: "#FF0000", length: 300},
{from: 44, to: 17, arrows: "to, from", color: "#FF0000", length: 300},
{from: 42, to: 8, arrows: "to, from", color: "#FF0000", length: 300},
{from: 43, to: 8, arrows: "to, from", color: "#FF0000", length: 300},
{from: 44, to: 8, arrows: "to, from", color: "#FF0000", length: 300},
{from: 19, to: 17, arrows: "to, from", color: "#FF0000", length: 300}
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
