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




// deepclone
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
        if(!vertex) return 
        for(let adj of this.adjacentlist[vertex]){
            this.removeEdge(vertex,adj)
        }
        delete this.adjacentlist[vertex]
        
    }
    display(){
        for(let vertex in this.adjacentlist){
            console.log(vertex+"-->"+[...this.adjacentlist[vertex]])
        }
    }
    bfs(start){
        const queue=[start]
        const visited=new Set()
        visited.add(start)
        while(queue.length){
            const currvertex=queue.shift()
            for(let adj of this.adjacentlist[currvertex]){
                if(!visited.has(adj) && !queue.includes(adj)){
                    queue.push(adj)
                }
            }
            visited.add(currvertex)
        }
        console.log([...visited])
    }
    Dfs(start){
        const stack=[start]
        const visited=new Set()
        visited.add(start)
        while(stack.length){
            const curr=stack.pop()
            for(let adj of this.adjacentlist[curr]){
                if(!visited.has(adj) && !stack.includes(adj)){
                    stack.push(adj)
                }
            }
            visited.add(curr)
        }
        console.log([...visited]
        )
    }
    hascycle(){
        const visited=new Set()
        const dfs=(node,parent)=>{
            visited.add(node)
        
        for(let adj of this.adjacentlist[node]){
            if(!visited.has(adj)){
                if(dfs(adj,node)) return true
            }else if(adj!==parent){
                return true
            }
        }
        return false
        }
       for(let vertex in this.adjacentlist){
           if(!visited.has(vertex)){
               if(dfs(vertex,null)) return true
           }
       }
       return false
    }
    removecycle(){
        const visited=new Set()
        const dfs=(node,parent)=>{
            visited.add(node)
            for(let adj of this.adjacentlist[node]){
                if(!visited.has(adj)){
                    if(dfs(adj,node)) return true
                }else if(adj!==parent){
                    this.removeEdge(node,adj)
                    return true
                }
            }
            return false
        }
        for(let vertex in this.adjacentlist){
            if(!visited.has(vertex)){
                if(dfs(vertex,null)) return true
            }
        }
        return false
    }
}
function clonedgraph(original){
    let graph=new Graph()
    for(let vertex in original.adjacentlist){
        graph.addVertex(vertex)
    }
    for(let vertex in original.adjacentlist){
         for(let nei of original.adjacentlist[vertex]){
             graph.addEdge(vertex,nei)
         }
    }
    return graph
}
const graph=new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B")
graph.addEdge("B","C")
// graph.addEdge("C","A")
// graph.removeEdge("C","A")
// graph.removeVertex("A")
// graph.bfs('A')
// graph.Dfs('A')

// console.log(graph.removecycle())
// console.log(graph.hascycle())
let deepcloned=clonedgraph(graph)
console.log(deepcloned)
graph.display()