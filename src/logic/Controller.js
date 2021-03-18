let computerUser = new Graph(names.length);
var nodesArray = [],
    edgesArray = [];

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

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.render("home");
})




app.listen(3030, () =>{
    console.log("App Running!");
})