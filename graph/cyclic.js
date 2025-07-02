
// cyclic graph
class Graph{
    constructor(){
        this.adjacentlist={}
    }
    Addvertex(vertex){
        if(!this.adjacentlist[vertex]){
            this.adjacentlist[vertex]=new Set()
        }
    }
    AddEdge(vertex1,vertex2){
        if(!this.adjacentlist[vertex1]){
            this.adjacentlist[vertex2]=new Set()
        }
        if(!this.adjacentlist[vertex2]){
            this.adjacentlist[vertex2]=new Set()
        }
        this.adjacentlist[vertex1].add(vertex2)
        this.adjacentlist[vertex2].add(vertex1)
    }
  hasCycleUtil(vertex,visited,recStack){
         visited.add(vertex)
         recStack.add(vertex)
         for(let neigh of this.adjacentlist[vertex]){
             if(!visited.has(neigh)){
                 if(this.hasCycleUtil(neigh,visited,recStack)){
                     return true;
                 }
             }else if(recStack.has(neigh)){
                 return true;
             }
         }
         recStack.delete(vertex)
         return false;
     }
     hasCycle(){
         const visited=new Set()
         const recStack=new Set()
         for(const vertex in this.adjacentlist){
             if(!visited.has(vertex)){
                 if(this.hasCycleUtil(vertex,visited,recStack)){
                     return "has cycle"
                 }
             }
         }
         return "nocycle"
     }
    
    display(){
        for(let vertex in this.adjacentlist){
            console.log(vertex+"--->"+[...this.adjacentlist[vertex]])
        }
    }
}
const graph=new Graph()
graph.Addvertex("A")
graph.Addvertex("B")
graph.Addvertex("C")
graph.AddEdge("A","B")
graph.AddEdge("B","C")
graph.AddEdge("C","A")
console.log(graph.hasCycle())
graph.display()