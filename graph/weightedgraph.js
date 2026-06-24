class Graph{
    constructor(){
        this.adjacentlist={}
    }
    addvertex(vertex){
        if(!this.adjacentlist[vertex]){
            this.adjacentlist[vertex]=[]
        }
    }
    addEdge(vertex1,vertex2,weight){
        if(!this.adjacentlist[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adjacentlist[vertex2]){
            this.addvertex(vertex2)
        }
        this.adjacentlist[vertex1].push({node:vertex2,weight})
        this.adjacentlist[vertex2].push({node:vertex1,weight})
    }
    hasEdge(vertex1,vertex2){
        return this.adjacentlist[vertex1].some(edge=>edge.node===vertex2)
        
    }
    removeEdge(vertex1,vertex2){
        this.adjacentlist[vertex1]=this.adjacentlist[vertex1].filter(edge=>edge.node!==vertex2)
        this.adjacentlist[vertex2]=this.adjacentlist[vertex2].filter(edge=>edge.node!==vertex1)
    }
    removevertex(vertex){
        if(!this.adjacentlist[vertex]) return
        for(let adj of this.adjacentlist[vertex]){
            this.removeEdge(vertex,adj.node)
        }
        delete this.adjacentlist[vertex]
    }
    display(){
        for(let vertex in this.adjacentlist){
            console.log(vertex,"=====>",this.adjacentlist[vertex])
        }
    }
}
const graph=new Graph()
graph.addvertex('A')
graph.addvertex('B')
graph.addvertex('C')
graph.addEdge('A','B',4)
graph.addEdge('B','C',2)
graph.addEdge('A','C',3)
graph.removeEdge('A','B')
// graph.removevertex('A')
console.log(graph.hasEdge('A','B'))
graph.display()