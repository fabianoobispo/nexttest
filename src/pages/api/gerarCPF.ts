import {NowRequest, NowResponse} from '@vercel/node'

export default (request: NowRequest, response: NowResponse) => {
    const { estado } = request.body;
    console.log(estado);
    var cpf = [];
    cpf[0] = Math.floor(Math.random() * 10); 
    cpf[1] = Math.floor(Math.random() * 10); 
    cpf[2] = Math.floor(Math.random() * 10); 
    cpf[3] = Math.floor(Math.random() * 10); 
    cpf[4] = Math.floor(Math.random() * 10); 
    cpf[5] = Math.floor(Math.random() * 10); 
    cpf[6] = Math.floor(Math.random() * 10); 
    cpf[7] = Math.floor(Math.random() * 10);
    if(estado == 'RS'){
        cpf[8] = 0;
    }else if(estado == 'TO' || estado == 'MS' || estado == 'MT' || estado == 'GO' || estado == 'DF'){
        cpf[8] = 1;
    }else if(estado == 'AM' || estado == 'PA' || estado == 'RR' || estado == 'RO' || estado == 'AP' ||estado == 'AC'){
        cpf[8] = 2;
    }else if(estado == 'CE' || estado == 'MA' || estado == 'PI'){
        cpf[8] = 3;
    }else if(estado == 'PB' || estado == 'PE' || estado == 'AL'|| estado == 'RN'){
        cpf[8] = 4;
    }else if(estado == 'BA' || estado == 'SE'){
        cpf[8] = 5;
    }else if(estado == 'MG'){
        cpf[8] = 6;
    }else if(estado == 'RJ' || estado == 'ES'){
        cpf[8] = 7;
    }else if(estado == 'SP'){
        cpf[8] = 8;
    }else if(estado == 'PR' || estado == 'SC'){
        cpf[8] = 9;
    }else{
        cpf[8] = Math.floor(Math.random() * 10); 
    }   


        var total = 0 ;
        var pesso = 10;
        cpf.forEach( numero =>{      
            var result = numero * pesso ;
            pesso= pesso -1;
            total = total + result;
        });

        if(total % 11 < 2){
            cpf.push(0);
        }else{   
            cpf.push(11-(total % 11));    
        }

        var total = 0 ;
        var pesso = 11;
        cpf.forEach( numero =>{      
            var result = numero * pesso ;
            pesso= pesso -1;
            total = total + result;
        });
        if(total % 11 < 2){
        cpf.push(0);
        }else{   
        cpf.push(11-(total % 11));    
        }

        var cpfsttring = cpf.join('').toString();   
    
       
       
    return response.json({cpf: cpfsttring});
}