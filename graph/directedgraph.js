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
        
    }
    hasEdge(vertex1,vertex2){
        return(
            this.adjacentlist[vertex1].has(vertex2) 
            )
    }
    removeEdge(vertex1,vertex2){
        this.adjacentlist[vertex1].delete(vertex2)
    }
    removevertex(vertex){
        if(!vertex) return 
        for(let adj in this.adjacentlist){
            this.adjacentlist[adj].delete(vertex)
        }
       delete this.adjacentlist[vertex] 
    }
    display(){
        for(let vertex in this.adjacentlist){
            console.log(vertex+"--->"+[...this.adjacentlist[vertex]])
        }
    }
}
const graph=new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B")
graph.addEdge("B","C")
graph.addEdge("C","A")
graph.removeEdge("A","B")
// graph.removevertex("A")
graph.display()



//all 
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
        
    }
    hasEdge(vertex1,vertex2){
        return(
            this.adjacentlist[vertex1].has(vertex2) 
            )
    }
    removeEdge(vertex1,vertex2){
        this.adjacentlist[vertex1].delete(vertex2)
    }
    removevertex(vertex){
        if(!vertex) return 
        for(let adj in this.adjacentlist){
            this.adjacentlist[adj].delete(vertex)
        }
       delete this.adjacentlist[vertex] 
    }
    display(){
        for(let vertex in this.adjacentlist){
            console.log(vertex+"--->"+[...this.adjacentlist[vertex]])
        }
    }
    bfs(start){
        const queue=[start]
        const visited=new Set()
        visited.add(start)
        while(queue.length){
            const curr=queue.shift()
            for(let adj of this.adjacentlist[curr]){
               if(!visited.has(adj) && !queue.includes(adj)){
                   queue.push(adj)
               }
            }
            visited.add(curr)
        }
        console.log(visited)
    }
    hasCycle(){
        const visited=new Set()
        const recstack=new Set()
        const dfs=(node)=>{
            visited.add(node)
            recstack.add(node)
            for(let adj of this.adjacentlist[node]){
                if(!visited.has(adj)){
                    if(dfs(adj)){
                        return true
                    }
                }else if(recstack.has(adj)){
                    this.removeEdge(node,adj) 
                    return true
                }
            }
            recstack.delete(node)
            return false
        }
        for(let vertex in this.adjacentlist){
            if(!visited.has(vertex)){
                if(dfs(vertex)){
                    return true
                }
            }
        }
        return false
    }
}
const graph=new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B")
graph.addEdge("B","C")
graph.addEdge("C","A")
graph. removeEdge("C","A")
// graph.removeEdge("A","B")
// graph.removevertex("A")
graph.bfs('A')
console.log(graph. hasCycle())
graph.display()


///minheap remove
[15,20,25,30,35,40,45]
//maxheap
[100,90,80,70,60,50,40,30]