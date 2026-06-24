class MaxHeap{
    constructor(array=[]){
        this.heap=array
        this.buildHeap()
    }
getParentIndex(index){
    return Math.floor((index-1)/2)
}
getLeftchild(index){
    return (index*2)+1
}
getRightchild(index){
    return (index*2)+2
}
buildHeap(){
    for(let i=this.getParentIndex(this.heap.length-1);i>=0;i--){
        this.heapifyUp(i)
    }
}
heapifyUp(index){
    let high=index
    let left=this.getLeftchild(index)
    let right=this.getRightchild(index)
if(left<this.heap.length && this.heap[left]>this.heap[high]){
    high=left
}
if(right<this.heap.length && this.heap[right]>this.heap[high]){
    high=right
}
if(high!==index){
    [this.heap[index],this.heap[high]]=[this.heap[high],this.heap[index]]
    this.heapifyUp(high)
}
}
display(){
    console.log(this.heap)
}
}
const hpp=new  MaxHeap([1,5,3,4,2,6])

hpp.display()