var arrValue = [];		
	function checkOn(id)
		{				
			if(arrValue.length == 0)
			{
				arrValue[0] = document.getElementById(id).value;
			}
			else
			{
				countElements  = arrValue.length;
				for (var i = 0; i < countElements; i++)
					{						
						if (arrValue[i] == document.getElementById(id).value)
						{
							if(document.getElementById(id).checked == false)							
							arrValue.splice(i,1);
							var flag = 1;
							break;
						}						
						flag = 0;
					}
				if(flag == 0)
				{					
					arrValue[arrValue.length] = document.getElementById(id).value;						
				}				
			}						
			alert(arrValue);
			}