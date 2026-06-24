
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


//class Graph{
    constructor(){
        this.adjacentlist={}
    }
    addVertex(vertex){
        if(!this.adjacentlist[vertex]){
           this.adjacentlist[vertex]=new Set() 
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacentlist[vertex1]){
            this.adjacentlist[vertex1]=new Set()
        }
        if(!this.adjacentlist[vertex2]){
            this.adjacentlist[vertex2]=new Set()
        }
        this.adjacentlist[vertex1].add(vertex2)
         this.adjacentlist[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
      return (
          this.adjacentlist[vertex1].has(vertex2) && 
          this.adjacentlist[vertex2].has(vertex1)
          )
    }
    removeEdge(vertex1,vertex2){
        this.adjacentlist[vertex1].delete(vertex2)
        this.adjacentlist[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        for(let adjacentVertex of this.adjacentlist[vertex]){
            this.removeEdge(adjacentVertex,vertex)
        }
        delete this.adjacentlist[vertex]
    }
    display(){
        for(let vertex in this.adjacentlist){
            console.log(vertex,"----->",...this.adjacentlist[vertex])
        }
    }
    DFS(start){
        const stack=[start]
        const visited=new Set()
        while(stack.length){
         const currVertex=stack.pop()
         for(let  adjacentVertex of this.adjacentlist[currVertex]){
             if(!visited.has(adjacentVertex ) && !stack.includes(adjacentVertex )){
                 stack.push(adjacentVertex )
             }
         }
         visited.add(currVertex)
        }
        
       console.log(visited) 
     }
    BFS(start){
        const queue=[start]
        const visited=new Set()
        visited.add(start)
        while(queue.length){
           const currVertex = queue.shift()
           for(let adjacentVertex of this.adjacentlist[currVertex]){
               if(!visited.has(adjacentVertex) && !queue.includes(adjacentVertex)){
                   queue.push(adjacentVertex)
               }
           }
          
        }
        console.log(visited)
    }
    cycledetection(start){
        const stack=[start]
        const visited=new Set()
        visited.add(start)
    while(stack.length){
        const currvertex=stack.pop()
        for(let adjacentVertex of this.adjacentlist[currvertex]){
            if( visited.has( adjacentVertex) && currvertex!== adjacentVertex){
                console.log("cycle detedted")
                return 
            }
            if(!visited.has( adjacentVertex) && !stack.includes( adjacentVertex)){
                stack.push(adjacentVertex)
            }
        }
        visited.add(currvertex)
    }
    console.log("cycle not detected")
    }
}
const graph=new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B")
// graph.addEdge("C","A")
console.log(graph.hasEdge("A","B"))
// graph.removeVertex("A")
graph.removeEdge("A","B")
graph.DFS("A")
graph.cycledetection("A")
graph.display()