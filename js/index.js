$(document).ready(function()
{
	var result=0;
	var operand_list=[];
	$('.btn').click(function()
	{
		var operand=$(this).attr('id');
		if((operand>='0' && operand<='9') || operand=='.')
		{
			handle_number(operand);
		}
		else if(operand=='+' || operand=='-' || operand=='/' || operand=='*' ||  operand=='=' || operand=='back' || operand=='ac' || operand=='ans' || operand=='(' || operand==')' || operand=='sin_inv' || operand=='cos_inv'|| operand=='sin'|| operand=='cos' || operand=='tan' || operand=='exp' ||operand=='log' || operand=='ln' )
		{
			handle_operator(operand);
		}

	});
	
function handle_number(operand)
{
	console.log('befor_operand'+operand_list);
	var value=$('#operands').val();
	if(value=="0")
	{
		$('#operands').val(operand);
			operand_list.push(operand);
	} 
	else
	{
		if(operand_list.length>=0)
		{
			var value0=operand_list[operand_list.length-1];
			if(!isNaN(value0))
			{
				var total_value1=value0+operand;
	            operand_list[operand_list.length-1]=total_value1;

	            display_number();	
			}
			else
			{
					operand_list.push(operand);
					 display_number();	

			}

		}
		else
		{
			display_number();	
		}
		
		
	}
	console.log('after_operand'+operand_list);
}

function display_number()
{
	console.log('display'+operand_list);
   var display="";
	for(var i=0;i<operand_list.length;i++)
	{
		display=display+operand_list[i];
	}	
    $('#operands').val(display);
}

function handle_operator(operand)
{
	
	console.log(' before_operator'+ operand_list);
	if(operand=='ac')
	{
        operand_list.splice(0,operand_list.length);
        $('#result').empty();
		$('#result').append(0);
		$('#operands').val('');
	}
	else if(operand=='back')
	{

          if(operand_list.length>0)
          {	   
          	operand_list.splice(operand_list.length-1,1);
		    display_number();

          }
	}
	else if(operand=='ans')
	{
		operand_list.push('*');
		operand_list.push(0);
	    display_number();
				
	}
	else if(operand==')')
	{
		operand_list.push(')');
	
	    display_number();
				
	}
	else if(operand=='(')
	{
		operand_list.push(')');
	
	    display_number();
				
	}
	else if(operand=='sin')
	{
		operand_list.push('sin');
	
	    display_number();
				
	}
	else if(operand=='cos')
	{
		operand_list.push('cos');
	
	    display_number();
				
	}
	else if(operand=='tan')
	{
		operand_list.push('tan');
	
	    display_number();
				
	}
	else if(operand=='sin_inv')
	{
		operand_list.push('sin-1');
	
	    display_number();
				
	}
	else if(operand=='cos_inv')
	{
		operand_list.push('cos-1');
	    display_number();
				
	}
	else if(operand=='log')
	{
		operand_list.push('cos-1');
	    display_number();
				
	}
	else if(operand=='exp')
	{
		operand_list.push('exp');
	    display_number();
				
	}
	else if(operand=='ln')
	{
		operand_list.push('cos-1');
	    display_number();
				
	}

	else if(operand=="=")
	{
		handle_total();
	}
	else
	{

		
			if(operand=="0")
			{
				$('#result').append('Error');
			} 
			else
			{
				if(operand_list.length>0)
				{
					var value0=operand_list[operand_list.length-1];

					if(value0==="+" || value0==="-" || value0==="*" || value0==="/" || value0==="%")
					{
						$('#result').append('Error');
					}
					else
					{
						operand_list.push(operand);
					 display_number();
					}


				}
				else
				{
					operand_list.push(operand);
					display_number();

				}
			}
	
		console.log(' after_operator'+ operand_list);
		
		
	}
	
}


function handle_total()
{
		
	console.log('before_operand_list'+operand_list);
	var num1=null;
	var num2=null;
	var operator=null;
	if(operand_list.length>=3)
	{
		for(var i=0;i<operand_list.length;i++)
		{
			console.log(operand_list[i]);

			if(!isNaN(operand_list[i]) || operand_list[i]=='.')
			{ console.log('num1'+num1);
				if(num1==null)
				{
				   num1=operand_list[i];
				   console.log('num1'+num1);	

				}
				else  
				{
					num2=operand_list[i];	
					console.log('num2'+num2);
				}
			}
			else if(operand_list[i]=="+" || operand_list[i]=="-"  || operand_list[i]=="*"  || operand_list[i]=="/" )
			{
				operator=operand_list[i];
			}
			if(num1!=null && num2!=null && operator!=null)
			{
				if(operator=='+')
				{
					
					var total=addition(num1,num2);
				}
				else if(operator=='-')
				{
			
					var total=subtraction(num1,num2);
				}
				else if(operator=='*')
				{

					var total=multiplication(num1,num2);
				}
				else if(operator=='/')
				{
				
		           var total=division(num1,num2);
				}

				num1=total;
				num2=null;
				operator=null;
			}
		}
		
		console.log("super_total"+num1);
        operand_list.splice(0,operand_list.length);
        $('#result').empty();
		$('#result').append(num1);
		console.log('after_operand_list'+operand_list);
		

	}
	else 
	{
		for(var i=0;i<operand_list.length;i++)
		{
			console.log(operand_list[i]);
			if(operand_list[i]=="sin" || operand_list[i]=="tan" || operand_list[i]=="cos" || operand_list[i]=="sin-inv" || operand_list[i]=="cos_inv" || operand_list[i]=="ln" || operand_list[i]=="log" || operand_list[i]=="exp")
			{ 
				operator=operand_list[i];
			}
			else{
				num1=operand_list[i];
			}
			
			if(num1!=null  && operator!=null)
			{
				if(operator=='sin')
				{
					
					var total=sin(num1);
				}
				else if(operator=='cos')
				{
			
					var total=cos(num1);
				}
				else if(operator=='tan')
				{

					var total=tan(num1);
				}
				else if(operator=='exp')
				{

					var total=exp(num1);
				}
				else if(operator=='sin_inv')
				{
				
		           var total=sin_inv(num1);
				}
				else if(operator=='cos_inv')
				{
				
		           var total=cos_inv(num1,num2);
				}
				else if(operator=='ln')
				{
				
		           var total=ln(num1);
				}
				else if(operator=='log')
				{
				
		           var total=log(num1);
				}

				num1=total;
				operator=null;
			}
		}
		console.log("super_total"+num1);
        operand_list.splice(0,operand_list.length);
        $('#result').empty();
		$('#result').append(num1);
		console.log('after_operand_list'+operand_list);
	}
}

	





function addition(num1,num2)
{
	var total=parseFloat(num1)+parseFloat(num2);
	console.log(total);
	return total;

}
function subtraction(num1,num2)
{
	var total=parseFloat(num1)-parseFloat(num2);
	console.log(total);
	return total;

}
function multiplication(num1,num2)
{
	var total=parseFloat(num1)*parseFloat(num2);
	console.log(total);
	return total;


}
function division(num1,num2)
{
	var total=parseFloat(num1)/parseFloat(num2);
	console.log(total);
	return total;

}
function sin(num1)
{
	var total=Math.sin(num1);
	
	return total;

}
function cos(num1)
{
	var total=Math.cos(num1);
	return total;

}
function tan(num1)
{
	var total=Math.tan(num1);
	return total;

}
function sin_inv(num1)
{
var total=Math.sinh(num1);
	console.log(total);
	return total;

}
function cos_inv(num1)
{
	var total=Math.cosh(num1);
	console.log(total);
	return total;

}
function ln(num1)
{
	var total=Math.LN2;
	console.log(total);
	return total;

}
function log(num1)
{
	var total=Math.log(num1);
	console.log(total);
	return total;

}
function exp(num1)
{
	var total=Math.exp(num1);
	console.log(total);
	return total;

}

});