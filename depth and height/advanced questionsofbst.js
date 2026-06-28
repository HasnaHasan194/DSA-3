class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class Bst{
    constructor(){
        this.root=null
    }
   isEmpty(){
       return this.root===null
   }
   insert(value){
       const newnode=new Node(value)
       if(this.isEmpty()){
           this.root=newnode
       }else{
           this.insertNode(this.root,newnode)
       }
   }
   insertNode(root,newnode){
       if(newnode.value<root.value){
          if(root.left===null){
              root.left=newnode
          }else{
              this.insertNode(root.left,newnode)
          }
       }else{
           if(root.right===null){
               root.right=newnode
           }else{
               this.insertNode(root.right,newnode)
           }
       }
   }
   search(root,value){
       if(!root) return false
       if(root.value===value){
           return true
       }else if(value<root.value){
           return this.search(root.left,value)
       }else{
           return this.search(root.right,value)
       }
   }
   min(root){
       if(!root.left){
           return root.value
       }else{
           return this.min(root.left)
       }
   }
   
   delete(value){
       this.root=this.deleteNode(this.root,value)
   }
   deleteNode(root,value){
       if(root===null) return root
       if(value<root.value){
           root.left=this.deleteNode(root.left,value)
       }else if(value>root.value){
           root.right=this.deleteNode(root.right,value)
       }else{
           if(!root.left && !root.right){
               return null
           }if(!root.left){
               return root.right
           }else if(!root.right){
               return root.left
           }
           root.value=this.min(root.right)
           root.right=this.deleteNode(root.right,root.value)
       }
       return root
   }
   max(root){
       if(!root.right){
           return root.value
       }else{
           return this.max(root.right)
       }
   }
   bfs(root){
       const queue=[this.root]
       while(queue.length){
           let curr=queue.shift()
           console.log(curr.value)
           if(curr.left) queue.push(curr.left)
           if(curr.right) queue.push(curr.right)
       }
   }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
             this.postOrder(root.right)
             console.log(root.value)
        }
    }
    isBst(){
        const stack=[{node:this.root,min:-Infinity,max:Infinity}]
        while(stack.length){
            const {node,min,max}=stack.pop()
            if(node.value<min || node.value>max){
                return false
            }
            if(node.left){
                 stack.push({node:node.left,min,max:node.value})
            }
            if(node.right){
                stack.push({node:node.right,min:node.value,max})
            }
        }
        return true
    }
    
    findheight(root){
        if(root===null) return 0
        return 1+this.findheight(root.left)
    }
    isPerfect(root,level,height){
        if(root===null) return true
        if(!root.left && !root.right){
            return level===height
        }
        if(!root.left || !root.right){
            return false
        }
        return this.isPerfect(root.left,level+1,height) && this.isPerfect(root.right,level+1,height) 
    }
    isBstperfect(){
        const hei=this.findheight(this.root)
        return this.isPerfect(this.root,1,hei)
    }
    
    
 
}
const bst = new Bst()

// bst.root=new Node(12)
// bst.root.left=new Node(9)
// bst.root.right=new Node(25)
// bst.root.left.right=new Node(90)
bst.insert(9)
bst.insert(12)
bst.insert(78)
bst.insert(67)
bst.insert(1)
// console.log(bst.search(bst.root,45))
// bst.delete(12)
// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))
// bst.bfs(bst.root)
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// console.log(bst.search(bst.root,12))
// console.log(bst.findheight(bst.root))
// console.log(bst.isBst(),"bsttt")
console.log(bst.isBstperfect()