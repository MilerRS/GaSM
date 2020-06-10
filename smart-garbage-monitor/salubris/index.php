
<?php
if (!session_id()) {
    session_start();
}
if (!isset($_SESSION['loggedIn'])) {
    header('Location:https://smart-garbage-monitor.herokuapp.com/login/');
    session_unset();
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Salubris</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="../css/salubris/salubrisstyle.css">
    <script src="../js/salubris/salubrisScript.js"></script>
</head>

<body>

    <h2 style="text-align:center"> Salubris Account</h2>
    <div class="box1">
        <h3> Introduceti datele:</h3><br>
        <select id="Cartier" required>
            <option value="" selected disabled hidden >Alege cartierul</option>

        </select>

        <input type="number" id="Sticla" placeholder="Cantitate Sticla" required><br>
        <input type="number" id="Hartie" placeholder="Cantitate Hartie" required><br>
        <input type="number" id="Menajer" placeholder="Cantitate Gunoi Menajer" required><br>


        <button type="submit" class="btn" value="Submit" onclick="trimiteDate()">Trimite</button>

    </div>
    <script asynd defer src="https://maps.googleapis.com/maps/api/js?callback=initMap">
    </script>
    <div id="map"></div>
    <h2>

        Rapoartele cetatenilor
    </h2>
    <h3> A se apasa pe una din casetele urmatoare pentru a evidentia congestionarea gunoiului menajer din cartierul respectiv:</h3>
    <!-- <ul id="closable" onclick="functionDelete()">

    </ul>-->
    <table id="probleme" class="dateProbleme" onclick="functionDelete()">

    </table>
    <button type="button" id="cartiere" >
    Deschide sectiunea de comentarii
    </button>
    <div id="cartiere1">

    
    </div>
    <script src="../js/salubris/adminStat.js"></script>
    <script>

    var coloane=document.getElementById("cartiere")
    coloane.addEventListener("click",function(){
        this.classList.toggle("active");
        var content=this.nextElementSibling;
        if(content.style.display==="block")
        {
            content.style.display = "none";
        }
        else
       content.style.display="block";
    
    });
    </script>
</body>

</html>