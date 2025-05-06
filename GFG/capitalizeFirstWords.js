function capitalizeFirstWord(arr){
   const words = arr.split(' ');
    for(let i=0;i<arr.length;i++)
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
};
console.log(capitalizeFirstWord(["india is my country"]));