function convertTemperature() {
  const tempInput = document.getElementById('temp-input');
  const originalUnit = document.getElementById('original-unit').value;
  const targetUnit = document.getElementById('target-unit').value;
  const resultDiv = document.getElementById('result');
  var lblLabel = document.getElementById('lbl');
  let result;
  switch (originalUnit) {
    case 'celsius':
      switch (targetUnit) {
        case 'celsius':
          result = tempInput.value;
          break;
        case 'fahrenheit':
          result = ((tempInput.value) * 9/5) + 32;
          break;
        case 'kelvin':
          result = (tempInput.value) + 273.15;
          break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'fahrenheit':
      switch (targetUnit) {
        case 'celsius':
          result = ((tempInput.value) - 32) * 5/9;
          break;
        case 'fahrenheit':
          result = tempInput.value;
          break;
        case 'kelvin':
          result = ((tempInput.value) + 459.67) * 5/9;
          break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'kelvin':
      switch (targetUnit) {
        case 'celsius':9
          result = (tempInput.value) - 273.15;
          break;
        case 'fahrenheit':
          result = ((tempInput.value) * 9/5) - 459.67;
          break;
        case 'kelvin':
          result = tempInput.value;
          break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'meter':
      switch (targetUnit) {
        case 'meter':
          result = tempInput.value;
          break;
        case 'foot':
          result = (tempInput.value)/0.3048;
          break;
        case 'inch':
          result = ((tempInput.value) / 0.0254);
          break;
        case 'yard':
          result = ((tempInput.value)/0.9144);
          break;
        case 'mile':
          result = ((tempInput.value)/1609.344);
          break;
	  case 'kilometer':
		result = ((tempInput.value)/1000);
		break;
	  case 'centimeter':
		result = ((tempInput.value)*100);
		break;
	  case 'milimeter':
		result = ((tempInput.value)*1000)
		break;
	  case 'micrometer':
		result = ((tempInput.value)*1000000);
		break;
	  case 'nanometer':
		result = ((tempInput.value)*1000000000);
		break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'foot':
      switch (targetUnit) {
        case 'meter':
          result = ((tempInput.value)*0.3048);
          break;
        case 'foot':
          result = tempInput.value;
          break;
        case 'inch':
          result = ((tempInput.value)*12);
          break;
        case 'yard':
          result = ((tempInput.value)/3);
          break;
        case 'mile':
          result = ((tempInput.value)/5280);
          break;
	  case 'kilometer':
		result = ((tempInput.value)*0.0003048);
		break;
	  case 'centimeter':
		result = ((tempInput.value)*30.48);
		break;
	  case 'milimeter':
		result = ((tempInput.value)*304.8)
		break;
	  case 'micrometer':
		result = ((tempInput.value)*304800);
		break;
	  case 'nanometer':
		result = ((tempInput.value)*304800000);
		break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
    case 'inch':
      switch (targetUnit) {
        case 'meter':
          result = ((tempInput.value)*0.0254);
          break;
        case 'foot':
          result = ((tempInput.value)/12);
          break;
        case 'inch':
          result = tempInput.value;
          break;
        case 'yard':
          result = ((tempInput.value)/36);
          break;
        case 'mile':
          result = ((tempInput.value)/63360);
          break;
	  case 'kilometer':
		result = ((tempInput.value)*0.0000254);
		break;
	  case 'centimeter':
		result = ((tempInput.value)*2.54);
		break;
	  case 'milimeter':
		result = ((tempInput.value)*25.4)
		break;
	  case 'micrometer':
		result = ((tempInput.value)*25400);
		break;
	  case 'nanometer':
		result = ((tempInput.value)*25400000);
		break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'yard':
      switch (targetUnit) {
        case 'meter':
          result = ((tempInput.value)*0.9144);
          break;
        case 'foot':
          result = ((tempInput.value)*3);
          break;
        case 'inch':
          result = ((tempInput.value)*36);
          break;
        case 'yard':
          result = tempInput.value;
          break;
        case 'mile':
          result = ((tempInput.value)/1760);
          break;
	  case 'kilometer':
		result = ((tempInput.value)*0.0009144);
		break;
	  case 'centimeter':
		result = ((tempInput.value)*91.44);
		break;
	  case 'milimeter':
		result = ((tempInput.value)*914.4)
		break;
	  case 'micrometer':
		result = ((tempInput.value)*914400);
		break;
	  case 'nanometer':
		result = ((tempInput.value)*914400000);
		break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'mile':
      switch (targetUnit) {
        case 'meter':
          result = ((tempInput.value)*1609.344);
          break;
        case 'foot':
          result = ((tempInput.value)/5280);
          break;
        case 'inch':
          result = ((tempInput.value)*63360);
          break;
        case 'yard':
          result = ((tempInput.value)/1760);
          break;
        case 'mile':
          result = tempInput.value;
          break;
	  case 'kilometer':
		result = ((tempInput.value)*1.609344);
		break;
	  case 'centimeter':
		result = ((tempInput.value)*160934.4);
		break;
	  case 'milimeter':
		result = ((tempInput.value)*1609344)
		break;
	  case 'micrometer':
		result = ((tempInput.value)*1609344000);
		break;
	  case 'nanometer':
		result = ((tempInput.value)*1609344000000);
		break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'kilometer':
      switch (targetUnit) {
        case 'meter':
          result = (tempInput.value)*1000;
          break;
        case 'foot':
          result = (tempInput.value)/304.8;
          break;
        case 'inch':
          result = ((tempInput.value) / 25.4);
          break;
        case 'yard':
          result = ((tempInput.value)/914.4);
          break;
        case 'mile':
          result = ((tempInput.value)/1609344);
          break;
	  case 'kilometer':
		result = ((tempInput.value));
		break;
	  case 'centimeter':
		result = ((tempInput.value)*100000);
		break;
	  case 'milimeter':
		result = ((tempInput.value)*1000000)
		break;
	  case 'micrometer':
		result = ((tempInput.value)*1000000000);
		break;
	  case 'nanometer':
		result = ((tempInput.value)*1000000000000);
		break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'milimeter':
      switch (targetUnit) {
        case 'meter':
          result = (tempInput.value)/1000;
          break;
        case 'foot':
          result = (tempInput.value)/0.0003048;
          break;
        case 'inch':
          result = ((tempInput.value) / 0.0000254);
          break;
        case 'yard':
          result = ((tempInput.value)/0.0009144);
          break;
        case 'mile':
          result = ((tempInput.value)/1.609344);
          break;
	  case 'kilometer':
		result = ((tempInput.value)/1000000);
		break;
	  case 'centimeter':
		result = ((tempInput.value)/10);
		break;
	  case 'milimeter':
		result = ((tempInput.value))
		break;
	  case 'micrometer':
		result = ((tempInput.value)*1000);
		break;
	  case 'nanometer':
		result = ((tempInput.value)*1000000);
		break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'micrometer':
      switch (targetUnit) {
        case 'meter':
          result = (tempInput.value)/1000000;
          break;
        case 'foot':
          result = (tempInput.value)/304800;
          break;
        case 'inch':
          result = ((tempInput.value) / 25400);
          break;
        case 'yard':
          result = ((tempInput.value)/914400);
          break;
        case 'mile':
          result = ((tempInput.value)/1609344000);
          break;
	  case 'kilometer':
		result = ((tempInput.value)/1000000000);
		break;
	  case 'centimeter':
		result = ((tempInput.value)/10000);
		break;
	  case 'milimeter':
		result = ((tempInput.value)/1000)
		break;
	  case 'micrometer':
		result = ((tempInput.value));
		break;
	  case 'nanometer':
		result = ((tempInput.value)*1000);
		break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'nanometer':
      switch (targetUnit) {
        case 'meter':
          result = (tempInput.value)/1000000000;
          break;
        case 'foot':
          result = (tempInput.value)/304800000;
          break;
        case 'inch':
          result = ((tempInput.value) / 25400000);
          break;
        case 'yard':
          result = ((tempInput.value)/914400000);
          break;
        case 'mile':
          result = ((tempInput.value)/1609344000000);
          break;
	  case 'kilometer':
		result = ((tempInput.value)/1000000000000);
		break;
	  case 'centimeter':
		result = ((tempInput.value)/10000000);
		break;
	  case 'milimeter':
		result = ((tempInput.value)/1000000)
		break;
	  case 'micrometer':
		result = ((tempInput.value)/1000);
		break;
	  case 'nanometer':
		result = ((tempInput.value));
		break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'gram':
      switch (targetUnit) {
        case 'gram':
          result = tempInput.value;
          break;
        case 'ounce':
          result = ((tempInput.value)*0.03527396);
          break;
        case 'pound':
          result = ((tempInput.value)*0.00220462);
          break;
        case 'stone':
          result = ((tempInput.value)*0.00015747);
          break;
	  case 'kilogram':
		result = ((tempInput.value)/1000);
		break;
	  case 'miligram':
		result = ((tempInput.value)*1000);
		break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'ounce':
      switch (targetUnit) {
        case 'gram':
          result = ((tempInput.value)/0.03527396);
          break;
        case 'ounce':
          result = tempInput.value;
          break;
        case 'pound':
          result = ((tempInput.value)*0.0625);	
          break;
        case 'stone':
          result = ((tempInput.value)*0.00446429);
          break;
	  case 'kilogram':
		result = ((tempInput.value)/0.00003527396);
		break;
	  case 'miligram':
		result = ((tempInput.value)*35.27396);
		break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'pound':
      switch (targetUnit) {
        case 'gram':
          result = ((tempInput.value)*453.59237);
          break;
        case 'ounce':
          result = ((tempInput.value)*16);
          break;
        case 'pound':
          result = tempInput.value;
          break;
        case 'stone':
          result = ((tempInput.value)*0.07142857);
          break;
	  case 'kilogram':
		result = ((tempInput.value)/0.45359237);
		break;
	  case 'miligram':
		result = ((tempInput.value)*453592.37);
		break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'stone':
      switch (targetUnit) {
        case 'gram':
          result = ((tempInput.value)*6350.29317);
          break;
        case 'ounce':
          result = ((tempInput.value)*224);
          break;
        case 'pound':
          result = ((tempInput.value)*14);
          break;
        case 'stone':
          result = tempInput.value;
          break;
	  case 'kilogram':
		result = ((tempInput.value)/6.35029319);
		break;
	  case 'miligram':
		result = ((tempInput.value)*6350293.17);
		break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'kilogram':
      switch (targetUnit) {
        case 'gram':
          result = (tempInput.value)*1000;
          break;
        case 'ounce':
          result = ((tempInput.value)*35.27396);
          break;
        case 'pound':
          result = ((tempInput.value)*2.20462);
          break;
        case 'stone':
          result = ((tempInput.value)*0.15747);
          break;
	  case 'kilogram':
		result = ((tempInput.value));
		break;
	  case 'miligram':
		result = ((tempInput.value)*1000000);
		break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'miligram':
      switch (targetUnit) {
        case 'gram':
          result = (tempInput.value)/1000;
          break;
        case 'ounce':
          result = ((tempInput.value)*0.00003527396);
          break;
        case 'pound':
          result = ((tempInput.value)*0.00000220462);
          break;
        case 'stone':
          result = ((tempInput.value)*0.00000015747);
          break;
	  case 'kilogram':
		result = ((tempInput.value)/1000000);
		break;
	  case 'miligram':
		result = ((tempInput.value));
		break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'hectare':
      switch (targetUnit) {
        case 'hectare':
          result = (tempInput.value);
          break;
        case 'acre':
          result = ((tempInput.value)*2.47105381);
          break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'acre':
      switch (targetUnit) {
        case 'hectare':
          result = (tempInput.value)/2.47105381;
          break;
        case 'acre':
          result = ((tempInput.value));
          break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'inr':
      switch (targetUnit) {
        case 'inr':
          result = (tempInput.value);
          break;
        case 'dollar':
          result = ((tempInput.value)*0.012);
          break;
        case 'euro':
          result = ((tempInput.value)*0.011);
          break;
        case 'dinar':
          result = ((tempInput.value)*0.0037);
          break;
        case 'yen':
          result = ((tempInput.value)*1.68);
          break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'dollar':
      switch (targetUnit) {
        case 'inr':
          result = (tempInput.value)/0.012;
          break;
        case 'dollar':
          result = ((tempInput.value));
          break;
        case 'euro':
          result = ((tempInput.value)*0.91);
          break;
        case 'dinar':
          result = ((tempInput.value)*0.31);
          break;
        case 'yen':
          result = ((tempInput.value)*137.40);
          break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'euro':
      switch (targetUnit) {
        case 'inr':
          result = (tempInput.value)*89.91;
          break;
        case 'dollar':
          result = ((tempInput.value)*1.10);
          break;
        case 'euro':
          result = ((tempInput.value));
          break;
        case 'dinar':
          result = ((tempInput.value)*0.34);
          break;
        case 'yen':
          result = ((tempInput.value)*150.87);
          break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'dinar':
      switch (targetUnit) {
        case 'inr':
          result = (tempInput.value)*266.94;
          break;
        case 'dollar':
          result = ((tempInput.value)*3.26);
          break;
        case 'euro':
          result = ((tempInput.value)*2.97);
          break;
        case 'dinar':
          result = ((tempInput.value));
          break;
        case 'yen':
          result = ((tempInput.value)*447.87);
          break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'yen':
      switch (targetUnit) {
        case 'inr':
          result = (tempInput.value)*81.87;
          break;
        case 'dollar':
          result = ((tempInput.value)*0.012);
          break;
        case 'euro':
          result = ((tempInput.value)*0.011);
          break;
        case 'dinar':
          result = ((tempInput.value)*0.0037);
          break;
        case 'yen':
          result = ((tempInput.value));
          break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
    case 'bits':
      switch (targetUnit) {
        case 'nits':
          result = (tempInput.value)*81.87;
          break;
        case 'nibble':
          result = ((tempInput.value)*0.012);
          break;
        case 'byte':
          result = ((tempInput.value)*0.011);
          break;
        case 'word':
          result = ((tempInput.value)*0.0037);
          break;
        case 'yen':
          result = ((tempInput.value));
          break;
	   default:
	     resultDiv.innerHTML = "Invalid Conversion";
	     return "Invalid conversion";
      }
      break;
  }
  resultDiv.innerHTML = `${tempInput.value} ${originalUnit} = ${result.toFixed(10)} ${targetUnit}`;
}
function length()
{
	document.getElementById("len-btn").style = "background-color:grey";
	document.getElementById("mas-btn").style = "background-color:#04AA6D";
	document.getElementById("are-btn").style = "background-color:#04AA6D";
	document.getElementById("tem-btn").style = "background-color:#04AA6D";
	document.getElementById("cur-btn").style = "background-color:#04AA6D";
	document.getElementById("byt-btn").style = "background-color:#04AA6D";
	const mass = document.getElementsByClassName('mass');
	const area = document.getElementsByClassName('area');
	const temperature = document.getElementsByClassName('temperature');
	const currency = document.getElementsByClassName('currency');
	const len = document.getElementsByClassName('length');
	const bit = document.getElementsByClassName('bits');
	for (let i=0;i<len.length;i++)
	{
		len[i].style.display = "block";
	}
	for (let i=0;i<mass.length;i++)
	{
		mass[i].style.display = "none";
	}
	for (let i=0;i<area.length;i++)
	{
		area[i].style.display = "none";
	}
	for (let i=0;i<temperature.length;i++)
	{
		temperature[i].style.display = "none";
	}
	for (let i=0;i<currency.length;i++)
	{
		currency[i].style.display = "none";
	}
	for (let i=0;i<bit.length;i++)
	{
		bit[i].style.display = "none";
	}
}
function mass()
{
	document.getElementById("len-btn").style = "background-color:#04AA6D";
	document.getElementById("mas-btn").style = "background-color:grey";
	document.getElementById("are-btn").style = "background-color:#04AA6D";
	document.getElementById("tem-btn").style = "background-color:#04AA6D";
	document.getElementById("cur-btn").style = "background-color:#04AA6D";
	document.getElementById("byt-btn").style = "background-color:#04AA6D";
	const mass = document.getElementsByClassName('mass');
	const area = document.getElementsByClassName('area');
	const temperature = document.getElementsByClassName('temperature');
	const currency = document.getElementsByClassName('currency');
	const len = document.getElementsByClassName('length');
	const bit = document.getElementsByClassName('bits');
	for (let i=0;i<len.length;i++)
	{
		len[i].style.display = "none";
	}
	for (let i=0;i<mass.length;i++)
	{
		mass[i].style.display = "block";
	}
	for (let i=0;i<area.length;i++)
	{
		area[i].style.display = "none";
	}
	for (let i=0;i<temperature.length;i++)
	{
		temperature[i].style.display = "none";
	}
	for (let i=0;i<currency.length;i++)
	{
		currency[i].style.display = "none";
	}
	for (let i=0;i<bit.length;i++)
	{
		bit[i].style.display = "none";
	}
}
function area()
{
	document.getElementById("len-btn").style = "background-color:#04AA6D";
	document.getElementById("mas-btn").style = "background-color:#04AA6D";
	document.getElementById("are-btn").style = "background-color:grey";
	document.getElementById("tem-btn").style = "background-color:#04AA6D";
	document.getElementById("cur-btn").style = "background-color:#04AA6D";
	document.getElementById("byt-btn").style = "background-color:#04AA6D";
	const mass = document.getElementsByClassName('mass');
	const area = document.getElementsByClassName('area');
	const temperature = document.getElementsByClassName('temperature');
	const currency = document.getElementsByClassName('currency');
	const len = document.getElementsByClassName('length');
	const bit = document.getElementsByClassName('bits');
	for (let i=0;i<len.length;i++)
	{
		len[i].style.display = "none";
	}
	for (let i=0;i<mass.length;i++)
	{
		mass[i].style.display = "none";
	}
	for (let i=0;i<area.length;i++)
	{
		area[i].style.display = "block";
	}
	for (let i=0;i<temperature.length;i++)
	{
		temperature[i].style.display = "none";
	}
	for (let i=0;i<currency.length;i++)
	{
		currency[i].style.display = "none";
	}
	for (let i=0;i<bit.length;i++)
	{
		bit[i].style.display = "none";
	}
}
function temperature()
{
	document.getElementById("len-btn").style = "background-color:#04AA6D";
	document.getElementById("mas-btn").style = "background-color:#04AA6D";
	document.getElementById("are-btn").style = "background-color:#04AA6D";
	document.getElementById("tem-btn").style = "background-color:grey";
	document.getElementById("cur-btn").style = "background-color:#04AA6D";
	document.getElementById("byt-btn").style = "background-color:#04AA6D";
	const mass = document.getElementsByClassName('mass');
	const area = document.getElementsByClassName('area');
	const temperature = document.getElementsByClassName('temperature');
	const currency = document.getElementsByClassName('currency');
	const len = document.getElementsByClassName('length');
	const bit = document.getElementsByClassName('bits');
	for (let i=0;i<len.length;i++)
	{
		len[i].style.display = "none";
	}
	for (let i=0;i<mass.length;i++)
	{
		mass[i].style.display = "none";
	}
	for (let i=0;i<area.length;i++)
	{
		area[i].style.display = "none";
	}
	for (let i=0;i<temperature.length ;i++)
	{
		temperature[i].style.display = "block";
	}
	for (let i=0;i<currency.length;i++)
	{
		currency[i].style.display = "none";
	}
	for (let i=0;i<bit.length;i++)
	{
		bit[i].style.display = "none";
	}
}
function currency()
{
	document.getElementById("len-btn").style = "background-color:#04AA6D";
	document.getElementById("mas-btn").style = "background-color:#04AA6D";
	document.getElementById("are-btn").style = "background-color:#04AA6D";
	document.getElementById("tem-btn").style = "background-color:#04AA6D";
	document.getElementById("cur-btn").style = "background-color:grey";
	document.getElementById("byt-btn").style = "background-color:#04AA6D";
	const mass = document.getElementsByClassName('mass');
	const area = document.getElementsByClassName('area');
	const temperature = document.getElementsByClassName('temperature');
	const currency = document.getElementsByClassName('currency');
	const len = document.getElementsByClassName('length');
	const bit = document.getElementsByClassName('bits');
	for (let i=0;i<len.length;i++)
	{
		len[i].style.display = "none";
	}
	for (let i=0;i<mass.length;i++)
	{
		mass[i].style.display = "none";
	}
	for (let i=0;i<area.length;i++)
	{
		area[i].style.display = "none";
	}
	for (let i=0;i<temperature.length;i++)
	{
		temperature[i].style.display = "none";
	}
	for (let i=0;i<currency.length;i++)
	{
		currency[i].style.display = "block";
	}
	for (let i=0;i<bit.length;i++)
	{
		bit[i].style.display = "none";
	}
}
function bits()
{
	document.getElementById("len-btn").style = "background-color:#04AA6D";
	document.getElementById("mas-btn").style = "background-color:#04AA6D";
	document.getElementById("are-btn").style = "background-color:#04AA6D";
	document.getElementById("tem-btn").style = "background-color:#04AA6D";
	document.getElementById("cur-btn").style = "background-color:#04AA6D";
	document.getElementById("byt-btn").style = "background-color:grey";
	const mass = document.getElementsByClassName('mass');
	const area = document.getElementsByClassName('area');
	const temperature = document.getElementsByClassName('temperature');
	const currency = document.getElementsByClassName('currency');
	const len = document.getElementsByClassName('length');
	const bit = document.getElementsByClassName('bits');
	for (let i=0;i<len.length;i++)
	{
		len[i].style.display = "none";
	}
	for (let i=0;i<mass.length;i++)
	{
		mass[i].style.display = "none";
	}
	for (let i=0;i<area.length;i++)
	{
		area[i].style.display = "none";
	}
	for (let i=0;i<temperature.length;i++)
	{
		temperature[i].style.display = "none";
	}
	for (let i=0;i<currency.length;i++)
	{
		currency[i].style.display = "none";
	}
	for (let i=0;i<bit.length;i++)
	{
		bit[i].style.display = "block";
	}	
}
const convertBtn = document.getElementById('convert-btn');
convertBtn.addEventListener('click', convertTemperature);
