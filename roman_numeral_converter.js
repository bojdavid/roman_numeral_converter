        
        // this function adds zero's according to the position of the numbers e.g ['3','4','5','1'] = ['3000','400','50','1']
        function unit_arr(num){

            //this function splits the numbers into their respective units e.g 3451 = ['3','4','5','1']
            function split_numbers(n){
                num_str = n.toString()
                num_arr = num_str.split('')
                return num_arr
            }
                num_arr = split_numbers(num)
                let a = []
                for(let i = 0; i< num_arr.length; i++){
                    let b = num_arr[(num_arr.length -1)-i] * 10**i
                    if(b != 0){
                        a.unshift(b)
                    }
                }
                
                return a
            }
            
            // we have to convert one number to a roman numeral first then add them all together
            //this function converts one number to a roman numeral
            function convert_one_number(num){
                //roman_figs =['I','V','X','L','C','D','M']
                //roman_fig_cor_nums = [1,5,10,50,100,500,1000] // numbers corresponding to the roman figures above
                let a = num.toString()    
                let num_arr = a.split('')
                let main_num = num_arr[0]
                let converted_num
                
                function repeat_fig(l, no_of_times){
                    let a = []
                    for(let i=0; i< no_of_times; i++){
                    a.push(l)
                    }
                    return (a.join(""))
                }
    
                if(num_arr.length == 4){
                    if(main_num >0 && main_num < 4){
                        converted_num =repeat_fig('M', main_num) 
                    }
                    else if(main_num > 5 && main_num < 9){
                        let n = main_num -5
                        converted_num = 'V' + repeat_fig('M',n)
                    }        
                    else if(main_num == 6){
                        converted_num = 'MV'
                    }
                    else if (main_num == 4){
                        converted_num = 'VM'
                    }
                    else if(main_num == 9){
                        converted_num = 'nine_for_now'
                    }
                    else{
                        converted_num = 'V'
                    }
                }    
                else if(num_arr.length == 3){
                    if(main_num >0 && main_num < 4){
                        converted_num =repeat_fig('C', main_num) 
                    }
                    else if(main_num > 5 && main_num < 9){
                        let n = main_num -5
                        converted_num = 'D' + repeat_fig('D',n)
                    }        
                    else if(main_num == 6){
                        converted_num = 'DC'
                    }
                    else if (main_num == 4){
                        converted_num = 'CD'
                    }
                    else if(main_num == 9){
                        converted_num = 'CM'
                    }
                    else{
                        converted_num = 'D'
                    }
                }
    
                else if(num_arr.length == 2){
                    if(main_num >0 && main_num < 4){
                        converted_num =repeat_fig('X', main_num) 
                    }
                    else if(main_num > 5 && main_num < 9){
                        let n = main_num -5
                        converted_num = 'L' + repeat_fig('X',n)
                    }        
                    else if(main_num == 6){
                        converted_num = 'LX'
                    }
                    else if (main_num == 4){
                        converted_num = 'XL'
                    }
                    else if(main_num == 9){
                        converted_num = 'XC'
                    }
                    else{
                        converted_num = 'L'
                    }
                }
                else if(num_arr.length == 1){
                    if(main_num >0 && main_num < 4){
                        converted_num =repeat_fig('I', main_num) 
                    }
                    else if(main_num > 5 && main_num < 9){
                        let n = main_num -5
                        converted_num = 'V' + repeat_fig('I',n)
                    }        
                    else if(main_num == 6){
                        converted_num = 'VI'
                    }
                    else if (main_num == 4){
                        converted_num = 'IV'
                    }
                    else if(main_num == 9){
                        converted_num = 'IX'
                    }
                    else{
                        converted_num = 'V'
                    }
                }
                return converted_num
            }
            
            
            
            function roman_converter(num){
    
                let num_arr =unit_arr(num)
                let a = []
                for(let i = 0; i<num_arr.length; i++){
                    a.push(convert_one_number(num_arr[i]))
                    console.log(num_arr[[i]])
                }
                return a.join('')
            }
    
        var number  = document.getElementById('number')
    
        function convert_to_numerals(){
            
            document.getElementById('converted_number').innerHTML = roman_converter(number.value)
            document.getElementById('output').style.display ='block'
        } 

        document.getElementById('number').addEventListener('click', function(){
            document.getElementById('output').style.display = 'none'
        })
