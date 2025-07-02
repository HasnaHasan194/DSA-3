class Graph{
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
           this.addVertex(vertex1)
       }
       if(!this.adjacentlist[vertex2]){
           this.addVertex(vertex2)
       }
       this.adjacentlist[vertex1].add(vertex2)
       this.adjacentlist[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return(
        this.adjacentlist[vertex1].has(vertex2)  &&
        this.adjacentlist[vertex2].has(vertex1)
        )
    }
    removeVertex(vertex){
        if(!vertex) return
        for(let adjacentvertex of this.adjacentlist[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacentlist[vertex]
    }
    removeEdge(vertex1,vertex2){
        this.adjacentlist[vertex1].delete(vertex2)
        this.adjacentlist[vertex2].delete(vertex1)
    }
    bfsTraversal(start){
        const queue=[start]
        const visited=new Set()
        visited.add(start)
        while(queue.length){
            let curr=queue.shift()
            for(let adjacentvertex of this.adjacentlist[curr]){
                if(!visited.has(adjacentvertex) && !queue.includes(adjacentvertex)){
                    queue.push(adjacentvertex)
                }
               
            }
             visited.add(curr)
        }
        console.log(visited)
    }
    dfsTraversal(start){
        const stack=[start]
        const visited=new Set()
        visited.add(start)
        while(stack.length){
            let curr=stack.pop()
            for(let adjacentvertex of this.adjacentlist[curr]){
                if(!visited.has(adjacentvertex) && !stack.includes(adjacentvertex)){
                    stack.push(adjacentvertex)
                }
            }
            visited.add(curr)
        }
        console.log(visited)
    }
    
    
    display(){
        for(let vertex in this.adjacentlist){
            console.log(vertex+"->"+[...this.adjacentlist[vertex]])
        }
    }
    
}
const graph=new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B")
graph.addEdge("B","C")
graph.bfsTraversal("A")
graph.display()
console.log(graph.hasEdge("A","B"))
graph.dfsTraversal("A")