<?php
//Para evitar errores y warnings 
error_reporting(0);

// declaración de array
$viajes = array();
$viajes['nombre']= "Finding Dreams";
$viajes['fundacion']=2024;
$viajes['telefono']=914571444;
$viajes['email']="findingdreams@viajes.com";
$viajes['pais']="España";
$viajes['especialista']=array("Destinos locales","Aventuras","Culturales");

//para poder convertir el el array PHP en JSON
$convertirJSON = json_encode($viajes);
// Para imprimir en JSON, si no no será visible
echo $convertirJSON;
