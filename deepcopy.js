//deepcopy

function deepcopy(obj){
    let obj2 ={};
    for(let i in obj){
        if(typeof obj[i] !== 'object'){
            obj2[i]= obj[i];
        }
        else{
            if(obj[i] instanceof Array){
                let ar = obj[i],ar1=[];
                ar.forEach((e,i)=>{
                    if(typeof e !== "object"){
                        ar1[i] = e;
                    }else{
                        ar1[i] = deepcopy(e);
                    }
                })
                obj2[i] =  ar1;

            }else{
                obj2[i] = deepcopy(obj[i]);
            }
            
        }
    }
    return obj2;
}
