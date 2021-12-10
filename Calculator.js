<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script>
        var nilai = "";
        function print(AC){
            console.log(nilai)
        }

    </script>
</head>
<body>
    <form name="calc">
        <table >
           <tr>
              <td colspan="7" class="layar"><input type="text" name="input" size="65px"  class="utama" readonly></td> 
           </tr>
           <br>
           <tr>            
               <td><input type="button" name="AC" value="AC" onclick=print(AC) id="button" class="biru"></td>               
               <Td colspan="3"></Td>
               <td><input type="button" name="AC" value="MII/RC" onclick="calc.input.value += ''"  id="button" class="hitam"></td>                
               <td><input type="button" name="AC" value="MII-" onclick="calc.input.value += ''"  id="button" class="hitam"></td>                
               <td><input type="button" name="AC" value="MII+" onclick="calc.input.value += ''"  id="button" class="hitam"></td>     
           </tr>
          <tr>
               <td><input type="button" name="OFF" value="OFF" onclick="calc.input.value = ''"  id="button" class="biru"></td>
               <td><input type="button" name="Seven" value="7" onclick="calc.input.value += '7'"  id="button" class="black"></td>
               <td><input type="button" name="eight" value="8" onclick="calc.input.value +='8'"  id="button" class="black"></td>
               <td><input type="button" name="nine" value="9" onclick="calc.input.value +='9'"  id="button" class="black"></td>       
               <td><input type="button" name="DELETE" value=">" onclick="calc.input.value = calc.input.value.substr(0,calc.input.value.length-1)"   id="button"></td>       
               <td><input type="button" name="MU" value="MU" onclick="calc.input.value +=''"  id="button"></td>                          
               <td><input type="button" name="MC" value="MC" onclick="calc.input.value +=''"  id="button"></td>              
        </tr>
        <tr>
            <td><input type="button" name="Persen" value="%" onclick="calc.input.value +='%'"  id="button"></td>
            <td><input type="button" name="four" value="4" onclick="calc.input.value +='4'"  id="button" class="black"></td>
            <td><input type="button" name="five" value="5" onclick="calc.input.value +='5'"  id="button" class="black"></td>
            <td><input type="button" name="six" value="6" onclick="calc.input.value +='6'"  id="button" class="black"></td>
            <td><input type="button" name="Min" value="-" onclick="calc.input.value +='-'" id="button"></td>
            <td><input type="button" name="div" value="./." onclick="calc.input.value +='/'" id="button"></td>
            <td><input type="button" name="MR" value="MR" onclick="calc.input.value +=''" id="button"></td>
            </tr>       
            <tr>
                <td><input type="button" name="plus or min" value="+/-" onclick="calc.input.value +='+/-'" id="button"></td>
                <td><input type="button" name="One" value="1" onclick="calc.input.value +='1'" id="button" class="black"></td>
                <td><input type="button" name="two" value="2" onclick="calc.input.value +='2'" id="button" class="black"></td>
                <td><input type="button" name="tree" value="3" onclick="calc.input.value +='3'" id="button" class="black"></td>
                <td rowspan="2"><input type="button" name="plus"  value="+" onclick="calc.input.value +='+'" id="button1" ></td>
                <td><input type="button" name="KAli" value="x" onclick="calc.input.value +='*'" id="button"></td>
                <td><input type="button" name="M-" value="m-" onclick="calc.input.value +=''" id="button"></td>
           </tr>
        
            <tr>
                <td><input type="button" name="on/c" value="ON/C" onclick="calc.input.value +=''" id="button" class="biru"></td>
                <td><input type="button" name="zero" value="0" onclick="calc.input.value +='0'" id="button" class="black"></td>
                <td><input type="button" name="zero" value="00" onclick="calc.input.value +='00'" id="button" class="black"></td>
                <td><input type="button" name="dot" value="." onclick="calc.input.value +='.'" id="button" class="black"></td>
                
                <td><input type="button" name="dolt" value="=" onclick="calc.input.value = eval(calc.input.value)" id="button"></td>
                <td><input type="button" name="M+" value="M+" onclick="calc.input.value +=''"id="button"></td>
            </tr>       
        </table>
    </form>
</body>
</html>
