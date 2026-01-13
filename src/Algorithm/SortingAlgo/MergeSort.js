export const MergeSort=(array)=>{
    let animations=[];
    let arr=[...array];
    

    const merge=(left,mid,right)=>{
        let i=left;
        let j=mid+1;
        let temp=[];

        while(i<=mid && j<=right){

            if(arr[i]<=arr[j]){
                animations.push({ type: "compare", indices: [i, j]});
                temp.push(arr[i]);
                i++;
            }else{
                temp.push(arr[j]);
                j++;
            }
        }

        while(i<=mid){
            temp.push(arr[i]);
            i++;
        }

        while(j<=right){
            temp.push(arr[j]);
            j++;
        }

        for (let k = 0; k < temp.length; k++) {
            arr[left + k] = temp[k];
            animations.push({ type: "swap", indices: [left + k, temp[k]] });
    }
    }

    const mergeSort=(left,right)=>{
        if(left>=right) return;

        let mid=Math.floor((left+right)/2);

        mergeSort(left,mid);
        mergeSort(mid+1,right);
        merge(left,mid,right);
    }

    mergeSort(0,arr.length-1);

    for (let i = 0; i < arr.length; i++) {
    animations.push({ type: "sorted", indices: [i] });
    }

    return animations;
}
