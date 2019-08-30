
console.log('before_operand_list'+operand_list);
	var num1=null;
	var num2=null;
	var operator=null;
	if(operand_list.length>=3)
	{
		var values=[];
		var operators=[];
		var i=operand_list.length;;
		while(i>=0)
		{
			if(!isNaN(operand_list[i]))
			{
				values.push();
			}
			else if(operand_list[i]=='+' || operand_list[i]=='-' ||  operand_list[i]=='*' || operand_list[i]=='/')
			{
				operators.push();
			}
			else if(operand_list[i]==')')
			{
				var j=i-1;
				var value2=[];
				var operator2=[];
			    while(j>0)
				{
					if(operand_list[j]=='+' || operand_list[j]=='-' ||  operand_list[j]=='*' || operand_list[j]=='/')
					{
						operator2.push();
					}
					else if(!isNaN(value2))
					{
						value.push();
					}
					else if(operand_list[j]=='(')
					{
						break;
					}
					j--;
				}
				console.log(value2);
				// console.log(operator2);
				// for(var i=0;i<=value2.length;i++)
				// {


				// }


			}
          i--;
		}

		
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
		else if(operand=='+' || operand=='-' || operand=='/' || operand=='*' ||  operand=='=' || operand=='back' || operand=='ac' || operand=='ans')
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

	}
	else if(operand=='ans')
	{
		operand_list.push('*');
		operand_list.push(0);
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
				// console.log(jQuery.inArray('+',operand_list));
				// if((jQuery.inArray('+',operand_list)==1) || (jQuery.inArray('/',operand_list)==1) || (jQuery.inArray('-',operand_list)==1) || (jQuery.inArray('*',operand_list)==1))
				// {
				// 	operand_list.push(value);

				// }
				// else
				// {
				// 	console.log('b');
				// 	operand_list.push(operand);
				// 	operand_list.push(value);
				// }
		         
				// var display_value=value+operand;
			 //   $('#result').append(display_value);
			 //   $('#operands').val('');
			   // handle_total(operand);

			
				// var value=$('#operands').val();
				// total_value=value+operand;
				// $('#operands').val(total_value);
				// operand_list.push(operand);

			}
	
		console.log(' after_operator'+ operand_list);
		
		
	}
	
}



function handle_total(operand)
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
		}
		// console.log('num1'+num1);
		// console.log('num2'+num2);
		// console.log('operator'+operator);
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
		console.log("super_total"+total);
        operand_list.splice(0,operand_list.length);
        operand_list.push(total);
         operand_list.push(operand);
        	$('#result').empty();
		$('#result').append(total+operand);
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

});