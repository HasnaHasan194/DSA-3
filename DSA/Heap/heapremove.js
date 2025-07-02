
class Heap{
    constructor(){
        this.heap=[90,24,15,10,4,5,6,2,0]
    }
    getLeftChild(index){
        return (index*2)+1
    }
    getRightChild(index){
        return (index*2)+2
    }
    remove(){
      this.heap[0]=this.heap.pop()
      this.heapifyDown(0)
    }
    heapifyDown(index){
        let highest=index
        let left=this.getLeftChild(index)
        let right=this.getRightChild(index)
        if(left<this.heap.length && this.heap[left]>this.heap[highest]){
            highest=left
        }
        if(right<this.heap.length && this.heap[right]>this.heap[highest]){
          highest=right
        }
        if(highest!==index){
            [this.heap[index],this.heap[highest]]=[this.heap[highest],this.heap[index]]
            this.heapifyDown(highest)
        }
        
    }
    display(){
        console.log(this.heap)
    }
}
const hpp=new Heap()
hpp.remove()
hpp.display()