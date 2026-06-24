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
         for(let adjvertex of this.adjacentlist[vertex]){
             this.removeEdge(vertex,adjvertex)
         }
         delete this.adjacentlist[vertex]
    }
    bfstraversal(start){
        const queue=[start]
        const visited=new Set()
        visited.add(start)
        while(queue.length){
            let curr=queue.shift()
            for(let neigh of this.adjacentlist[curr]){
                if(!visited.has(neigh)  &&  !queue.includes(neigh) ){
                    queue.push(neigh)
                }
                
            }
            visited.add(curr)
        }
        console.log(visited)
    }
    display(){
        for(let vertex in this.adjacentlist){
            console.log(vertex+"--->"+[...this.adjacentlist[vertex]])
        }
    }
    hasCycle(){
        const visited=new Set()
        const dfs=(node,parent)=>{
             visited.add(node)
                                               
        for(let adj of this.adjacentlist[node]){
            if(!visited.has(adj)){
              if(dfs(adj,node)) return true  
        }else if(adj!==parent) return true
       
    }
        
    return false
        }
    for(let vertex in this.adjacentlist){
        if(!visited.has(vertex)) {
            if(dfs(vertex,null)) return true
        }
        
    }
    return false
                                                       }
        removeCycle(){
    const visited = new Set()

    const dfs = (node,parent) => {

        visited.add(node)

        for(let adj of this.adjacentlist[node]){

            if(!visited.has(adj)){

                if(dfs(adj,node))
                    return true

            }else if(adj !== parent){

                // Remove cycle edge
                this.removeEdge(node,adj)

                return true
            }
        }

        return false
    }

    for(let vertex in this.adjacentlist){

        if(!visited.has(vertex)){

            if(dfs(vertex,null))
                return true
        }
    }

    return false
}

}
const graph=new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addEdge("A","B")
graph.addEdge("B","C")
graph.addEdge("C","A")
graph. removeCycle()
console.log(graph.hasCycle())

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
graph.display()