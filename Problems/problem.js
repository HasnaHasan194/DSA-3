//to count the number of nodes
function counting(root){
    let count = 0
    function node(root){
        if(root){
            count++;
            node(root.left);
            node(root.right);
        }
    }
    node(root)
    return count
}
function counting(root){
    let count=0
    function count(root){
        if(root){
            count++
            count(root.left)
            count(root.right)
        }
    }

}


//to find the kth largest
function smallest(root,k){
    let result = [];
    
    function small(root){
        if(root){
            small(root.left);
            result.push(root.value);
            small(root.right);
        }
    };
    
    small(root);
    return result[result.length - k]
}
function smallest(root,k){
   let result=[]
   function small(root){
    if(root){
        small(root.oeft)
        result.push(root.value)
    }
   }
}


//to find the kth smallest
function smallest(root,k){
    let result = [];
    
    function small(root){
        if(root){
            small(root.left);
            result.push(root.value);
            small(root.right);
        }
    };
    
    small(root);
    return result[k - 1]
}


//to find the no of leaf nodes
function countLeaves(root) {
    if (root === null) return 0;
    if (root.left === null && root.right === null) return 1;
    return countLeaves(root.left) + countLeaves(root.right);
  }


  //to find the no of  nodes with one children
function leaves(root) {
    if (root === null) return 0;
    if ((root.left === null && root.right !== null) || (root.left !== null && root.right === null)) return 1;
    return leaves(root.left) + leaves(root.right);
  }


  
  //max heap to min heap
  
class Heap {
    constructor(array=[]){
        this.heap = array
        this.buildHeap()
    }

    getLeftChildInd(index){
        return (index*2)+1
    }

    getRightChildInd(index){
        return (index*2)+2
    }

    getParent(index){
        return Math.floor((index -1)/2)
    }

    buildHeap(){
        for(let i = this.getParent(this.heap.length - 1);i>=0;i--){
            this.heapifyUp(i)
        }
    }

    heapifyUp(index){
        let highest = index
        let left = this.getLeftChildInd(index)
        let right = this.getRightChildInd(index)

        if(left < this.heap.length && this.heap[left] > this.heap[highest]){
            highest = left
        }

        if(right < this.heap.length && this.heap[right] > this.heap[highest]){
            highest = right
        }

        if(highest !== index){
            [this.heap[index],this.heap[highest]] = [this.heap[highest],this.heap[index]]
            this.heapifyUp(highest)
        }
    }
    
      buildMinHeap(){
        for(let i = this.getParent(this.heap.length - 1);i>=0;i--){
            this.heapifyDown(i)
        }
    }

    heapifyDown(index){
        let smallest = index
        let left = this.getLeftChildInd(index)
        let right = this.getRightChildInd(index)

        if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
            smallest = left
        }

        if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
            smallest = right
        }

        if(smallest !== index){
            [this.heap[index],this.heap[smallest]] = [this.heap[smallest],this.heap[index]]
            this.heapifyUp(smallest)
        }
    }
    
    

    display(){
        console.log(this.heap)
    }
}

const maxHeap = new Heap([10,5,25,3,30,22,12])
maxHeap.buildMinHeap();

maxHeap.display();













// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
const root=new Node(20)
root.left=new Node(9)
root.right=new Node(25)
root.left.left=new Node(0)
root.left.right=new Node(15)
root.right.left=new Node(35)
root.right.right=new Node(92)
function small(root,k){
    let result=[]
    function smallest(root){
        if(root){
            smallest(root.left)
           result.push(root.value)
            smallest(root.right)
        }
    }
 smallest(root)
 return result[k-1]
 
 
 
}
console.log(small(root,3))


class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
const root=new Node(20)
root.left=new Node(9)
root.right=new Node(25)
root.left.left=new Node(0)
root.left.right=new Node(15)
root.right.left=new Node(35)
root.right.right=new Node(92)
function depth(root,value){
let depth=0
while(root!==null){
    if(root.value===value) return depth
    else if(value<root.value) root=root.left
    else root=root.right 
    depth++
}
}
console.log(depth(root,15))




class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (this.isEmpty()) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(root, newNode) {
      if (newNode.value < root.value) {
        if (root.left === null) {
          root.left = newNode;
        } else {
          this.insertNode(root.left, newNode);
        }
      } else {
        if (root.right === null) {
          root.right = newNode;
        } else {
          this.insertNode(root.right, newNode);
        }
      }
    }
  
    search(root,value){
      if(!root) return false
      else {
          if(root.value === value) return true
          else if(value < root.value){
              return this.search(root.left,value)
          }else{
              return this.search(root.right,value)
          }
      }
    }

    isBST(){
        const stack = [{node : this.root, min : -Infinity, max : Infinity}]

        while(stack.length){
            const{node,min,max} = stack.pop()
            if(node.value < min || node.value > max) return false
            
            else if(node.left){
                stack.push({node : node.left , min , max : node.value})
            }
            
            else if(node.right){
                stack.push({node : node.right , min : node.value, max})
            }
        }
        return true
    }
  
    isEmpty() {
      return this.root === null;
    }
  
  }
//   function counting(root){
//     let count=0
//     function node(root){
//         if(root){
//             count++
//             node(root.left)
//             node(root.right)
//         }
//     }
//     node(root)
//     return count
// }


function height(root){
    if(root === null) return -1;
    
    let left = height(root.left)
    let right = height(root.right)
    
    return Math.max(left,right) + 1
}

function depth(root,value){
    let depth = 0;
    
    function findDepth(root,value){
        
        if(!root) return -1;
        
        if(root.value === value) return depth;
        else if (value < root.value){
            depth++;
           return  findDepth(root.left,value)
        }else{
            depth++;
             return findDepth(root.right,value)
        }
    }
    
    return findDepth(root,value)
}


function finding(root,k){
    let result=[]
    function node(root){
        if(root){
            node(root.left)
            result.push(root.value)
            node(root.right)
        }
    }
    node(root)
    return result[k-1]
}
const bst=new BinarySearchTree()
 bst.insert(9)
 bst.insert(8)
 bst.insert(29)
 bst.insert(18)
//  console.log(counting(bst.root))
console.log(depth(bst.root,8))














