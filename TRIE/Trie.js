class Trienode{
    constructor(){
        this.children={}
        this.isEndofword=false
    }
}
class Trie{
    constructor(){
        this.root=new Trienode()
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new Trienode()
            }
           node= node.children[char]
        }
        node.isEndofword=true
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]) return false
            node=node.children[char]
        }
        return node.isEndofword
    }
    startsWith(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.children[char]) return false
            node=node.children[char]
        }
     return true   
    }
    delete(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]) return -1
            node=node.children[char]
        }
        if(node.isEndofword){
            node.isEndofword=false
        }else{
            return -1
        }
    }

autocomplete(prefix){
    let node=this.root
    for(let char of prefix){
        if(!node.children[char]) return false
        node=node.children[char]
    }
  
    const queue=[[node,prefix]]
    const result=[]
    while(queue.length){
        const [currentnode,word]=queue.shift()
        if(currentnode.isEndofword){
            result.push(word)
        }
        for(let char in currentnode.children){
            queue.push([currentnode.children[char],word+char])
        }
    }
    return result
    
}
longestprefix(){
    let node=this.root
  let prefix=""
    while(node && !node.isEndofword && Object.keys(node.children).length===1){
        let char =Object.keys(node.children)[0]
        prefix+=char
        node=node.children[char]
    }
    return prefix
}
}
const trie=new Trie()
trie.insert("carr")
trie.insert("cat")
trie.insert("cliat")
// console.log(trie.search("carr"))
console.log("--------")
// console.log(trie.startsWith("ca"))
// trie.delete("cat")
// console.log(trie.search("cat"))
console.log(trie.autocomplete("ca"))
console.log(trie.longestprefix())