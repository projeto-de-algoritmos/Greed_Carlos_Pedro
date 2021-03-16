class Graph {

    constructor(vertex) {
      this.vertex = vertex;
      this.listAdj = new Map(); 
    }
    // Get 
    getKeys() {
      return this.lis1tAdj.keys();
    }
    getValues(i) {
      return this.listAdj.get(i);
    }
    // Adicionando Vertice;
    addVertex(v) {
      this.listAdj.set(v, []);
    }
    // Adicionando Arestas;
    addEdge(v, w) {
      this.listAdj.get(v).push(w);
    }
    // Auxiliar 
    print() {
      var vertex = this.listAdj.keys();
      console.log('VERTEX -> LIST\n');
      for (var i of vertex) {
        var listAdj = this.listAdj.get(i);
        var sum = '';
        for (var j = 0; j < listAdj.length; ++j) {
          sum += listAdj[j];
          if (j != listAdj.length - 1) sum += ' && ';
        }
        console.log(i + ' -> ' + sum);
      }
    }
    dijkstra(start) {

        var path = {};
            path[start] = [],
            path[start].dist = 0;
        
        while(1) {

          var parent= null,
            P = null,
            dist = Infinity;
         
          for(var j in path) {

            if(!path[j]){
                continue;
            }
              
            var distN = path[j].dist;
            var adj = this.listAdj.get(j);
            
            for(var i in adj) {

                if(path[i]){
                    continue;
                }

                var d = adj[i] + distN;
              
                if(d < dist) {
                    parent = path[j];
                    P = i;
                    dist = d;
                }
            }
          }
     
          if(dist === Infinity) break;
          path[P] = parent.concat(P);
          path[P].dist = dist;
        }
        
        return path;
      }
   
  }
  
  module.exports = Graph;