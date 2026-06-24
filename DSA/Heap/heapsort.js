//descending order
class Heap{
    constructor(array=[]){
        this.heap=array
       
    }
    getParentchild(index){
        return Math.floor((index-1)/2)
    }
    getLeftchildindex(index){
        return (index*2)+1
    }
    getRightchild(index){
        return (index*2)+2
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }
    heapifyUp(index){
      if(index===0) return
      let parent=this.getParentchild(index)
      if(this.heap[index]<this.heap[parent]){
          [this.heap[index],this.heap[parent]]=[this.heap[parent],this.heap[index]]
      }
      this.heapifyUp(parent)
    }
    sort(){
        let n=this.heap.length
        for(let i=n-1;i>=0;i--){
         [this.heap[0],this.heap[i]]=[this.heap[i],this.heap[0]]
         this.heapifyDown(0,i)
        }
    }
    heapifyDown(index,n){
        let high=index
        let left=this.getLeftchildindex(index)
        let right=this.getRightchild(index)
        if(left<n && this.heap[left]<this.heap[high]){
            high=left
        }
        if(right<n && this.heap[right]<this.heap[high]){
            high=right
        }
        if(high!==index){
            [this.heap[index],this.heap[high]]=[this.heap[high],this.heap[index]]
            this.heapifyDown(high,n)
        }
    }
    display(){
        console.log(this.heap)
    }
    
}
const hpp=new Heap()
hpp.insert(9)
hpp.insert(8)
hpp.insert(7)
hpp.insert(2)
hpp.insert(11)
hpp.sort()
hpp.display()