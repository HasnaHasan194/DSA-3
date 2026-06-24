
class Heap{
    constructor(){
      this.heap=[]
        
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    insert(value){
        this.heap.push(value)
        this.heapify(this.heap.length-1)
        
    }
    heapify(index){
        if(index===0) return
        let parentIndex=this.getParentIndex(index)
        if(this.heap[index]>this.heap[parentIndex]){
            [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
            this.heapify(parentIndex)
        }
    }
    display(){
        console.log(this.heap)
    }
}
const hpp=new Heap()
hpp.insert(9)
hpp.insert(6)
hpp.insert(4)
hpp.display()