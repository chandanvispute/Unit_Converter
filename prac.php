<!DOCTYPE html>
<html>
<head>
  <title>Unit Converter</title>
  <link rel="stylesheet" href="praccss.css">
</head>
<body>
  <div class=vl></div>
  <h1>Unit Converter</h1>
  <button onclick="length()" id="len-btn" type="submit">Length</button>
  <button onclick="mass()" id="mas-btn" type="submit">Mass</button>
  <button onclick="area()" id="are-btn" type="submit">Area</button>
  <button onclick="temperature()" id="tem-btn" type="submit">Temperature</button>
  <button onclick="currency()" id="cur-btn" type="submit">Currency</button>
  <button onclick="bits()" id="byt-btn" type="submit">Bits/Bytes</button>
  <label id="lbl" style="visibility : visible">Enter value:</label>
  <input type="number" id="temp-input" placeholder="Enter Value">
  <label>Select original unit:</label>
  <select id="original-unit">
    <option class="defalut" style="display: none" value="select" selected>Select</option>
    <option class="temperature" value="celsius" style="display: none">Celsius</option>
    <option class="temperature" value="fahrenheit" style="display: none">Fahrenheit</option>
    <option class="temperature" value="kelvin" style="display: none">Kelvin</option>
    <option class="length" value="meter" style="display: none">Meter</option>
    <option class="length" value="foot" style="display: none">Foot</option>
    <option class="length" value="inch" style="display: none">Inch</option>
    <option class="length" value="yard" style="display: none">Yard</option>
    <option class="length" value="mile" style="display: none">Mile</option>
    <option class="length" value="kilometer" style="display: none">Kilometer</option>
    <option class="length" value="centimeter" style="display: none">Centimeter</option>
    <option class="length" value="milimeter" style="display: none">milimeter</option>
    <option class="length" value="micrometer" style="display: none">Micrometer</option>
    <option class="length" value="nanometer" style="display: none">Nanometer</option>
    <option class="mass" value="gram" style="display: none">Gram</option>
    <option class="mass" value="kilogram" style="display: none">Kilogram</option>
    <option class="mass" value="miligram" style="display: none">Miligram</option>
    <option class="mass" value="ounce" style="display: none">Ounce</option>
    <option class="mass" value="pound" style="display: none">Pound</option>
    <option class="mass" value="stone" style="display: none">Stone</option>
    <option class="area" value="hectare" style="display: none">Hectare</option>
    <option class="area" value="acre" style="display: none">Acre</option>
    <option class="bits" value="bits" style="display: none">Bit</option>
    <option class="bits" value="bits" style="display: none">Nibble</option>
    <option class="bits" value="bits" style="display: none">Byte</option>
    <option class="bits" value="bits" style="display: none">Word</option>
    <option class="bits" value="bits" style="display: none">Double Word</option>
    <option class="bits" value="bits" style="display: none">Kilobyte</option>
    <option class="bits" value="bits" style="display: none">Megabyte</option>
    <option class="bits" value="bits" style="display: none">Gigabyte</option>
    <option class="bits" value="bits" style="display: none">Terabyte</option>
    <option class="bits" value="bits" style="display: none">Petabyte</option>
    <option class="bits" value="bits" style="display: none">Exebyte</option>
    <option class="bits" value="bits" style="display: none">Zettabyte</option>
    <option class="bits" value="bits" style="display: none">Yottabyte</option>
    <option class="bits" value="bits" style="display: none">Ronnabyte</option>
    <option class="bits" value="bits" style="display: none">Quettabyte</option>
    <option class="currency" value="inr" style="display: none">INR</option>
    <option class="currency" value="dollar" style="display: none">Dollar</option>
    <option class="currency" value="euro" style="display: none">Euro</option>
    <option class="currency" value="dinar" style="display: none">Dinar</option>
    <option class="currency" value="yen" style="display: none">Yen</option>
  </select>
  <label>Select target unit:</label>
  <select id="target-unit">
    <option style="display: none" value="select" selected>Select</option>
    <option class="temperature" value="celsius" style="display: none">Celsius</option>
    <option class="temperature" value="fahrenheit" style="display: none">Fahrenheit</option>
    <option class="temperature" value="kelvin" style="display: none">Kelvin</option>
    <option class="length" value="meter" style="display: none">Meter</option>
    <option class="length" value="foot" style="display: none">Foot</option>
    <option class="length" value="inch" style="display: none">Inch</option>
    <option class="length" value="yard" style="display: none">Yard</option>
    <option class="length" value="mile" style="display: none">Mile</option>
    <option class="length" value="kilometer" style="display: none">Kilometer</option>
    <option class="length" value="centimeter" style="display: none">Centimeter</option>
    <option class="length" value="milimeter" style="display: none">milimeter</option>
    <option class="length" value="micrometer" style="display: none">Micrometer</option>
    <option class="length" value="nanometer" style="display: none">Nanometer</option>
    <option class="mass" value="gram" style="display: none">Gram</option>
    <option class="mass" value="kilogram" style="display: none">Kilogram</option>
    <option class="mass" value="miligram" style="display: none">Miligram</option>
    <option class="mass" value="ounce" style="display: none">Ounce</option>
    <option class="mass" value="pound" style="display: none">Pound</option>
    <option class="mass" value="stone" style="display: none">Stone</option>
    <option class="area" value="hectare" style="display: none">Hectare</option>
    <option class="area" value="acre" style="display: none">Acre</option>
    <option class="bits" value="bits" style="display: none">Bit</option>
    <option class="bits" value="nibble" style="display: none">Nibble</option>
    <option class="bits" value="byte" style="display: none">Byte</option>
    <option class="bits" value="word" style="display: none">Word</option>
    <option class="bits" value="double_word" style="display: none">Double Word</option>
    <option class="bits" value="kilobyte" style="display: none">Kilobyte</option>
    <option class="bits" value="megabyte" style="display: none">Megabyte</option>
    <option class="bits" value="gigabyte" style="display: none">Gigabyte</option>
    <option class="bits" value="terabyte" style="display: none">Terabyte</option>
    <option class="bits" value="petabyte" style="display: none">Petabyte</option>
    <option class="bits" value="exebyte" style="display: none">Exebyte</option>
    <option class="bits" value="zettabyte" style="display: none">Zettabyte</option>
    <option class="bits" value="yottabyte" style="display: none">Yottabyte</option>
    <option class="bits" value="ronnabyte" style="display: none">Ronnabyte</option>
    <option class="bits" value="quettabyte" style="display: none">Quettabyte</option>
    <option class="currency" value="inr" style="display: none">INR</option>
    <option class="currency" value="dollar" style="display: none">Dollar</option>
    <option class="currency" value="euro" style="display: none">Euro</option>
    <option class="currency" value="dinar" style="display: none">Dinar</option>
    <option class="currency" value="yen" style="display: none">Yen</option>
</select>
  <button id="convert-btn">Convert</button>
  <div id="result"></div>
  <script src="pracjs.js"></script>
  <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Add Response</button>

  <div id="id01" class="modal">
  
  <form class="modal-content animate" action="/php/test.php" method="post">
    <div class="imgcontainer">
      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
      <img src="img_avatar2.png" alt="Avatar" class="avatar">
    </div>

    <div class="container">

      <label for="name"><b>Enter Name</b></label>
      <input type="name" name="name" required>

      <label for="response"><b>Your Response</b></label>
      <textarea id="freeform" style="width:1156px" name="response" rows="4" cols="50" type="response"></textarea><br>
        
      <button type="submit" name="submit">Submit</button><br>
    </div>

    <div class="container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
    </div>
  </form>
 </div>
<button onclick="document.getElementById('id02').style.display='block'" style="width:auto;">Responses</button>
<div id="id02" class="modal">
  
  <form class="modal-content animate" action="/php/display.php" method="post">
    <div class="imgcontainer">
      <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
      <img src="img_avatar2.png" alt="Avatar" class="avatar">
    </div>

    <div class="container">  
    <div class="container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('id02').style.display='none'" class="cancelbtn">Cancel</button>
    </div>
      <table class="table table-bordered">
       <thead><tr><th>S.N</th>
         <th>Name</th>
         <th>Response</th>
    </thead>
    <tbody>
  <?php
	include("display.php");
      if(is_array($fetchData)){      
      $sn=1;
      foreach($fetchData as $data){
    ?>
      <tr>
      <td><?php echo $sn; ?></td>
      <td><?php echo $data['name']??''; ?></td>
      <td><?php echo $data['response']??''; ?></td>
     </tr>
     <?php
      $sn++;}}else{ ?>
      <tr>
        <td colspan="8">
    <?php echo $fetchData; ?>
  </td>
    <tr>
    <?php
    }?>
    </tbody>
     </table>
  </form>
 </div>
</body>
</html>