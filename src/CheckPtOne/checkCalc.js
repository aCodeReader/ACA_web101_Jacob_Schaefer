function calculate()
		{
			document.calc.output.value = eval(document.calc.output.value);
		}

		function clearValue()
		{
			document.calc.output.value = "";	
			
		}

		function getInput(num)
		{
			document.calc.output.value += num;
		}