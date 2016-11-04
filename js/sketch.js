

function setup() {
  createCanvas( 600, 600 );
  frameRate(1);
}

function draw() {
  background( "#FFFFFF" );
  background( "#EDEDED" );

    var x1 = random( 100, 500 );
    var y1 = random( 100, 500 );
    createEllipse( x1, y1 );

    var x2 = random( 100, 500 );
    var y2 = random( 100, 500 );
    createEllipse( x2, y2 );

    var x3 = random( 100, 500 );
    var y3 = random( 100, 500 );
    createEllipse( x3, y3 );

    var x4 = random( 100, 500 );
    var y4 = random( 100, 500 );
    createEllipse( x4, y4 );


    blendMode( BLEND );
    createQuad( x1, y1, x2, y2, x3, y3, x4, y4 );

}

function createEllipse( posX, posY ) {
  blendMode( MULTIPLY );

  fill( 200, 20, 80 );
  noStroke();
  ellipse( posX, posY, 200, 200 );
}

function createQuad( x1, y1, x2, y2, x3, y3, x4, y4 ) {
  noFill();
  stroke( 255 );
  // strokeWeight( 2 );
  quad( x1, y1, x2, y2, x3, y3, x4, y4 );
  quad( x1, y1, x3, y3, x4, y4, x2, y2 );
}

function CreerXYavecUneBoucle(){
  var pos = [] // je créé un array vide
  pos.push( [ random( 100, 500 ), random( 100, 500 ) ] ); // je push un array dans pos

  for (var i = 0; i < 4; i++) { // la boucle ajoute 4x le tableau contenant 2 valeur random
    pos.push( [ random( 100, 500 ), random( 100, 500 ) ] );
  }

  // là on a bien 4 pos x et y différents dans pos[]

  for (var i = 0; i < 4; i++) { // la boucle crée 4 ellipses avec des x et y différents ! yes !
    createEllipse( pos[ i ] [ 0 ], pos[ i ] [ i ] );
  }

}

function AnimerLesCercles(){
  // lerp(100,200,0.5) // lerp prend la valeur 150 car à 50% entre 100 et 200

  for (var i = 0; i < 4; i++) { // lerp fait une interpolation entre les valeurs de pos et les valeurs de target (qu'il faudrait definir en même temps que pos) selon la postion de la souris
    var x = pos[ i ] [ 0 ], target[ i ] [ 0 ], mouseX / width );
    var y = pos[ i ] [ 0 ], target[ i ] [ 0 ], mouseY / width );
  }

var testx = 100;
testx.lerp(testx,200,0.1); // ça fait un mouvement "continu"

}
