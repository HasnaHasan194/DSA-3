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
   le result=[]
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


























