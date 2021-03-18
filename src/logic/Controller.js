let computerUser = new Graph(names.length);
var nodesArray = [],
    edgesArray = [];

// Busca para verificar se a vertice já foi adicionada anteriormente
var validate = (array, index, size) => {

  var esq = -1,
    dir = size;

  while (esq < dir - 1) {
      var half = (esq + dir) / 2;
      if (array[half] < index) esq = half;
      else dir = half;
  }
  
  return dir === index ? false : true;

};
function find (j,vertex) {

    var list = computerUser.getValues(j);
    var list2 = computerUser.getValues(vertex);
    
    for(var i=0; i<list;++i) 
      if(list[i]==vertex) return 0;
    
    for(var i=0; i<list2;++i) 
      if(list2[i]==j) return 0;

    return 1;
}
// Adicionando Vertice;
for (var i = 0; i < names.length; ++i) {
    computerUser.addVertex(i);
        nodesArray.push({ id: i, label: names[i]})
}

// Adicionando Arestas de modo aleátorio
for (var j = 0; j < names.length; ++j) {

  var verifica = [];
  var edgesAux = parseInt(Math.random() * (4 - 0) + 0);

  for (var h = 0; h < edgesAux; ++h) {
    var vertex = parseInt(Math.random() * (names.length - 0) + 0);

    if (vertex != j && validate(verifica.sort((a, b) => a - b), vertex , verifica.length)){
      if(find(j,vertex))edgesArray.push({ from: j, to: vertex })
        computerUser.addEdge(j, vertex);
            verifica.push(vertex);
    }
  
  }

}
computerUser.AproximateVertexCover();
var users = computerUser.getApVertex();

var PQ = [];

for(var i = 0; i< users.length; ++i)PQ.push(names[users[i]]);

var nodes = new vis.DataSet(nodesArray);
var edges = new vis.DataSet(edgesArray);

var container = document.getElementById("mynetwork");
var data = {
    nodes: nodes,
    edges: edges
};
var options = {};
var network = new vis.Network(container, data, options);


app.listen(3030, () =>{
    console.log("App Running!");
})