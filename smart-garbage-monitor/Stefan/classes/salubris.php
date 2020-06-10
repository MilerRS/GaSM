<!DOCTYPE html>
<html lang="en">

<head>
    <title>Salubris</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="salubrisstyle.css">
    <script src="salubrisScript.js"></script>
</head>
<body >
    <h2 style="text-align:center"> Salubris Account</h2>
    <div class="box1">
        <h3> Introduceti datele:</h3><br>
        <select form="form1" id="Cartier" required >
            <option value="" selected disabled hidden>Alege cartierul</option>
            
        </select>
        
            <input type="number"  id ="Sticla" placeholder="Cantitate Sticla" required><br>
            <input type="number" id="Hartie" placeholder="Cantitate Hartie" required><br>
            <input type="number" id="Menajer" placeholder="Cantitate Gunoi Menajer" required><br>
            <input id="id1" type="number" min="100" max="300" required>
        
        <button type="submit" class="btn"  value="Submit" onclick="trimiteDate()">Trimite</button>
        
    </div>


    <h2>

        Rapoartele cetatenilor
    </h2>
    <h3> A se apasa pe una din casetele urmatoare pentru a evidentia congestionarea gunoiului menaer din cartierul respectiv:</h3>
    <ul id="closable" onclick="functionDelete()">

    </ul>
</body>
<script>
   
    </script>
</html>