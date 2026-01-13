export const SelectionSort=(array)=>{
    let animations=[];
    let arr=[...array];

    for(let i=0;i<arr.length -1;i++){
        let minIndx=i;
        for(let j=i+1;j<arr.length;j++){
            animations.push({type:"compare",indices:[j,minIndx]})
            if(arr[j]<arr[minIndx]){
                minIndx=j;
            }
        }
        if(minIndx!==i){
            animations.push({type:"swap",indices:[i,minIndx]});
            [arr[i],arr[minIndx]]=[arr[minIndx],arr[i]];
        }
        animations.push({ type: "sorted", indices: [i] });
    }
    return animations;
}
