class Heap{
    constructor(Array=[]){
        this.heap=Array
        this.builtheap()
    }
    getleftchild(index){
        return (index*2)+1
    }
    getrightChild(index){
        return (index*2)+2
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    builtheap(){
         for(let i=this.getParentIndex(this.heap.length-1);i>=0;i--){
             this.heapifyDown(i)
         }
    }
    heapifyDown(index){
      let smallest=index
      let left=this.getleftchild(index)
      let right=this.getrightChild(index)
      if(left<this.heap.length  && this.heap[left]<this.heap[smallest]){
          smallest=left
      }
      if(right<this.heap.length && this.heap[right]<this.heap[smallest]){
         smallest=right
      }
      if(smallest!==index){
         [this.heap[index],this.heap[smallest]]  =[this.heap[smallest],this.heap[index]]
         this.heapifyDown(smallest)
      }
    }
    display(){
        console.log(this.heap)
    }
}
const heep=new Heap([3,1,5,4,9])
heep.display()