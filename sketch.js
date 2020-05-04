let capture
let tracker
let balls = []
let smalls = []
let halls = []

function setup() {

     createCanvas(800,600).parent('p5')

    capture = createCapture(VIDEO)
    capture.size(800,600)
    capture.hide()

    tracker = new clm.tracker()
    tracker.init()
    tracker.start(capture.elt)

}


function draw() {


  background(0)
  // showFlippedCapture()
  // stroke(255)
  // fill(166, 218, 255)
  // square(25,25,50,50)
  // square(25,100,50)
  let features = tracker.getCurrentPosition()

  if (features.length == 0) {
    return
  }

  strokeWeight(5)
  stroke(0)
  fill(0)
  square(125,0,550,600)

  // for (let feature of features) {
  //   stroke(255)
  //   strokeWeight(1)
  //   fill(255)
  //   circle(feature.x, feature.y,4)
  //   text(feature.label, feature.x, feature.y)
  // }

  let mouth_top = features[60]
  let mouth_bottom = features[57]
  let distance = dist(mouth_top.x, mouth_top.y, mouth_bottom.x, mouth_bottom.y)

  let nose_tip = features[62]
  let nose_left = features[39]
  let nose_right = features[35]

  let left_nose_distance = dist(nose_tip.x, nose_tip.y, nose_left.x, nose_left.y)
  let right_nose_distance = dist(nose_tip.x, nose_tip.y, nose_right.x, nose_right.y)
  let nose_pointing = left_nose_distance - right_nose_distance

  for (let ball of balls) {

      noFill()
      stroke(ball.c)
      strokeWeight(1)
      circle(ball.x - random(1-15), ball.y + random(1-15), 5)
      circle(ball.x+ random(1-15), ball.y - random(1-15), 10)
      circle(ball.x - random(1-15), ball.y+ random(1-15), 15)
      circle(ball.x+ random(1-15), ball.y - random(1-15), 20)
      circle(ball.x - random(1-15),ball.y,25)
      circle(ball.x+ random(1-15),ball.y - random(1-15),30)
      circle(ball.x - random(1-15),ball.y+ random(1-15),35)
      circle(ball.x+ random(1-15),ball.y - random(1-15),40)
      ball.x += ball.vx
      ball.y += ball.vy

      ball.vy += .5
      if (ball.x < 0 || ball.x > width || ball.y < 0 || ball.y > height) {
        balls.splice(balls.indexOf(ball), 1)
      }
  }

  for (let ball of smalls) {
    fill(ball.c)
    stroke(ball.c)
    square(ball.x,ball.y,5)
    square(ball.x-2,ball.y+2,10)
    ball.x += ball.vx
    ball.y += ball.vy

    ball.vy += 1
  }

  for (let ball of halls) {
    fill(ball.c)
    stroke(ball.c)
    circle(ball.x,ball.y,1)
    circle(ball.x, ball.y,14)
    ball.x += ball.vx
    ball.y += ball.vy

    ball.vy += 1
  }
  strokeWeight(12.5)
  stroke(166, 218, 255,50)
  line(300,0,features[13].x,features[13].y)
  line(305,0,features[13].x,features[13].y)
  line(310,0,features[14].x,features[14].y)
  line(315,0,features[14].x,features[14].y)
  line(320,0,features[14].x,features[14].y)
  line(325,0,features[15].x,features[15].y)
  line(330,0,features[15].x,features[15].y)
  line(335,0,features[15].x,features[15].y)
  line(340,0,features[16].x,features[16].y)
  line(345,0,features[16].x,features[16].y)
  line(350,0,features[16].x,features[16].y)
  line(355,0,features[17].x,features[17].y)
  line(360,0,features[17].x,features[17].y)
  line(365,0,features[17].x,features[17].y)
  line(370,0,features[18].x,features[18].y)
  line(375,0,features[18].x,features[18].y)
  line(380,0,features[18].x,features[18].y)
  line(385,0,features[33].x,features[33].y)
  line(390,0,features[33].x,features[33].y)
  line(395,0,features[33].x,features[33].y)
  line(400,0,features[33].x,features[33].y)
  line(405,0,features[33].x,features[33].y)
  line(410,0,features[33].x,features[33].y)
  line(415,0,features[33].x,features[33].y)
  line(420,0,features[22].x,features[22].y)
  line(425,0,features[22].x,features[22].y)
  line(430,0,features[22].x,features[22].y)
  line(435,0,features[21].x,features[21].y)
  line(440,0,features[21].x,features[21].y)
  line(445,0,features[21].x,features[21].y)
  line(450,0,features[20].x,features[20].y)
  line(455,0,features[20].x,features[20].y)
  line(460,0,features[20].x,features[20].y)
  line(465,0,features[19].x,features[19].y)
  line(470,0,features[19].x,features[19].y)
  line(475,0,features[19].x,features[19].y)
  line(480,0,features[0].x,features[0].y)
  line(485,0,features[0].x,features[0].y)
  line(490,0,features[0].x,features[0].y)
  line(495,0,features[1].x,features[1].y)
  line(500,0,features[1].x,features[1].y)
  line(295,0,features[33].x,features[33].y)
  line(290,0,features[33].x,features[33].y)
  line(285,0,features[18].x,features[18].y)
  line(280,0,features[18].x,features[18].y)
  line(275,0,features[18].x,features[18].y)
  line(270,0,features[18].x,features[18].y)
  line(265,0,features[17].x,features[17].y)
  line(260,0,features[17].x,features[17].y)
  line(255,0,features[17].x,features[17].y)
  line(250,0,features[17].x,features[17].y)
  line(245,0,features[16].x,features[16].y)
  line(240,0,features[16].x,features[16].y)
  line(235,0,features[16].x,features[16].y)
  line(230,0,features[16].x,features[16].y)
  line(225,0,features[15].x,features[15].y)
  line(220,0,features[15].x,features[15].y)
  line(215,0,features[15].x,features[15].y)
  line(210,0,features[15].x,features[15].y)
  line(205,0,features[15].x,features[15].y)
  line(200,0,features[15].x,features[15].y)
  line(195,0,features[15].x,features[15].y)
  line(190,0,features[14].x,features[14].y)
  line(185,0,features[14].x,features[14].y)
  line(180,0,features[14].x,features[14].y)
  line(175,0,features[14].x,features[14].y)
  line(170,0,features[13].x,features[13].y)
  line(165,0,features[13].x,features[13].y)
  line(160,0,features[13].x,features[13].y)
  line(155,0,features[13].x,features[13].y)
  line(150,0,features[12].x,features[12].y)
  line(145,0,features[12].x,features[12].y)
  line(140,0,features[12].x,features[12].y)
  line(135,0,features[12].x,features[12].y)
  line(130,0,features[11].x,features[11].y)
  line(125,0,features[11].x,features[11].y)
  line(125,5,features[18].x,features[18].y)
  line(125,10,features[18].x,features[18].y)
  line(125,15,features[18].x,features[18].y)
  line(125,20,features[18].x,features[18].y)
  line(125,25,features[18].x,features[18].y)
  line(125,30,features[17].x,features[17].y)
  line(125,35,features[17].x,features[17].y)
  line(125,40,features[17].x,features[17].y)
  line(125,45,features[17].x,features[17].y)
  line(125,50,features[17].x,features[17].y)
  line(125,55,features[17].x,features[17].y)
  line(125,60,features[16].x,features[16].y)
  line(125,65,features[16].x,features[16].y)
  line(125,70,features[16].x,features[16].y)
  line(125,75,features[16].x,features[16].y)
  line(125,80,features[16].x,features[16].y)
  line(125,85,features[16].x,features[16].y)
  line(125,90,features[15].x,features[15].y)
  line(125,95,features[15].x,features[15].y)
  line(125,100,features[15].x,features[15].y)
  line(125,105,features[15].x,features[15].y)
  line(125,110,features[15].x,features[15].y)
  line(125,115,features[15].x,features[15].y)
  line(125,120,features[14].x,features[14].y)
  line(125,125,features[14].x,features[14].y)
  line(125,130,features[14].x,features[14].y)
  line(125,135,features[14].x,features[14].y)
  line(125,140,features[14].x,features[14].y)
  line(125,145,features[14].x,features[14].y)
  line(125,150,features[13].x,features[13].y)
  line(125,155,features[13].x,features[13].y)
  line(125,160,features[13].x,features[13].y)
  line(125,165,features[13].x,features[13].y)
  line(125,170,features[13].x,features[13].y)
  line(125,175,features[16].x,features[16].y)
  line(125,180,features[16].x,features[16].y)
  line(125,185,features[16].x,features[16].y)
  line(125,190,features[16].x,features[16].y)
  line(125,195,features[16].x,features[16].y)
  line(125,200,features[15].x,features[15].y)
  line(125,205,features[15].x,features[15].y)
  line(125,210,features[15].x,features[15].y)
  line(125,215,features[15].x,features[15].y)
  line(125,220,features[15].x,features[15].y)
  line(125,225,features[14].x,features[14].y)
  line(125,230,features[14].x,features[14].y)
  line(125,235,features[14].x,features[14].y)
  line(125,240,features[14].x,features[14].y)
  line(125,245,features[14].x,features[14].y)
  line(125,250,features[13].x,features[13].y)
  line(125,255,features[13].x,features[13].y)
  line(125,260,features[13].x,features[13].y)
  line(125,265,features[13].x,features[13].y)
  line(125,270,features[13].x,features[13].y)
  line(125,275,features[12].x,features[12].y)
  line(125,280,features[12].x,features[12].y)
  line(125,285,features[12].x,features[12].y)
  line(125,290,features[12].x,features[12].y)
  line(125,295,features[12].x,features[12].y)
  line(125,300,features[12].x,features[12].y)
  line(125,305,features[12].x,features[12].y)
  line(125,310,features[12].x,features[12].y)
  line(125,315,features[12].x,features[12].y)
  line(125,320,features[12].x,features[12].y)
  line(125,325,features[12].x,features[12].y)
  line(125,330,features[11].x,features[11].y)
  line(125,335,features[11].x,features[11].y)
  line(125,340,features[11].x,features[11].y)
  line(125,345,features[11].x,features[11].y)
  line(125,350,features[11].x,features[11].y)
  line(125,355,features[10].x,features[10].y)
  line(125,360,features[10].x,features[10].y)
  line(125,365,features[10].x,features[10].y)
  line(125,370,features[10].x,features[10].y)
  line(125,375,features[10].x,features[10].y)
  line(125,380,features[9].x,features[9].y)
  line(125,385,features[9].x,features[9].y)
  line(125,390,features[9].x,features[9].y)
  line(125,395,features[9].x,features[9].y)
  line(125,400,features[9].x,features[9].y)
  line(125,405,features[8].x,features[8].y)
  line(125,410,features[8].x,features[8].y)
  line(125,415,features[8].x,features[8].y)
  line(125,420,features[8].x,features[8].y)
  line(125,425,features[8].x,features[8].y)
  line(125,430,features[12].x,features[12].y)
  line(125,435,features[12].x,features[12].y)
  line(125,440,features[12].x,features[12].y)
  line(125,445,features[12].x,features[12].y)
  line(125,450,features[12].x,features[12].y)
  line(125,455,features[12].x,features[12].y)
  line(125,460,features[11].x,features[11].y)
  line(125,465,features[11].x,features[11].y)
  line(125,470,features[11].x,features[11].y)
  line(125,475,features[11].x,features[11].y)
  line(125,480,features[11].x,features[11].y)
  line(125,485,features[11].x,features[11].y)
  line(125,490,features[10].x,features[10].y)
  line(125,495,features[10].x,features[10].y)
  line(125,500,features[10].x,features[10].y)
  line(125,505,features[10].x,features[10].y)
  line(125,510,features[10].x,features[10].y)
  line(125,515,features[10].x,features[10].y)
  line(125,520,features[9].x,features[9].y)
  line(125,525,features[9].x,features[9].y)
  line(125,530,features[9].x,features[9].y)
  line(125,535,features[9].x,features[9].y)
  line(125,540,features[9].x,features[9].y)
  line(125,545,features[9].x,features[9].y)
  line(125,550,features[8].x,features[8].y)
  line(125,555,features[8].x,features[8].y)
  line(125,560,features[8].x,features[8].y)
  line(125,565,features[8].x,features[8].y)
  line(125,570,features[8].x,features[8].y)
  line(125,575,features[8].x,features[8].y)
  line(125,580,features[7].x,features[7].y)
  line(125,585,features[7].x,features[7].y)
  line(125,590,features[7].x,features[7].y)
  line(125,595,features[7].x,features[7].y)
  line(125,600,features[7].x,features[7].y)


  line(130,600,features[14].x,features[14].y)
  line(135,600,features[14].x,features[14].y)
  line(140,600,features[14].x,features[14].y)
  line(145,600,features[13].x,features[13].y)
  line(150,600,features[13].x,features[13].y)
  line(155,600,features[13].x,features[13].y)
  line(160,600,features[13].x,features[13].y)
  line(165,600,features[12].x,features[12].y)
  line(170,600,features[12].x,features[12].y)
  line(175,600,features[12].x,features[12].y)
  line(180,600,features[12].x,features[12].y)
  line(185,600,features[11].x,features[11].y)
  line(190,600,features[11].x,features[11].y)
  line(195,600,features[11].x,features[11].y)
  line(200,600,features[11].x,features[11].y)
  line(205,600,features[10].x,features[10].y)
  line(210,600,features[10].x,features[10].y)
  line(215,600,features[10].x,features[10].y)
  line(220,600,features[10].x,features[10].y)
  line(225,600,features[10].x,features[10].y)
  line(230,600,features[9].x,features[9].y)
  line(235,600,features[9].x,features[9].y)
  line(240,600,features[9].x,features[9].y)
  line(245,600,features[9].x,features[9].y)
  line(250,600,features[8].x,features[8].y)
  line(255,600,features[8].x,features[8].y)
  line(260,600,features[8].x,features[8].y)
  line(265,600,features[8].x,features[8].y)
  line(270,600,features[7].x,features[7].y)
  line(275,600,features[7].x,features[7].y)
  line(280,600,features[7].x,features[7].y)
  line(285,600,features[7].x,features[7].y)
  line(290,600,features[6].x,features[6].y)
  line(295,600,features[6].x,features[6].y)
  line(300,600,features[6].x,features[6].y)

  line(300,600,features[11].x,features[11].y)
  line(305,600,features[11].x,features[11].y)
  line(310,600,features[10].x,features[10].y)
  line(315,600,features[10].x,features[10].y)
  line(320,600,features[10].x,features[10].y)
  line(325,600,features[10].x,features[10].y)
  line(330,600,features[10].x,features[10].y)
  line(335,600,features[9].x,features[9].y)
  line(340,600,features[9].x,features[9].y)
  line(345,600,features[9].x,features[9].y)
  line(350,600,features[9].x,features[9].y)
  line(355,600,features[9].x,features[9].y)
  line(360,600,features[8].x,features[8].y)
  line(365,600,features[8].x,features[8].y)
  line(370,600,features[8].x,features[8].y)
  line(375,600,features[8].x,features[8].y)
  line(380,600,features[8].x,features[8].y)
  line(385,600,features[7].x,features[7].y)
  line(390,600,features[7].x,features[7].y)
  line(395,600,features[7].x,features[7].y)
  line(400,600,features[7].x,features[7].y)
  line(405,600,features[7].x,features[7].y)
  line(410,600,features[7].x,features[7].y)
  line(415,600,features[7].x,features[7].y)
  line(420,600,features[6].x,features[6].y)
  line(425,600,features[6].x,features[6].y)
  line(430,600,features[6].x,features[6].y)
  line(435,600,features[6].x,features[6].y)
  line(440,600,features[6].x,features[6].y)
  line(445,600,features[5].x,features[5].y)
  line(450,600,features[5].x,features[5].y)
  line(455,600,features[5].x,features[5].y)
  line(460,600,features[5].x,features[5].y)
  line(465,600,features[5].x,features[5].y)
  line(470,600,features[4].x,features[4].y)
  line(475,600,features[4].x,features[4].y)
  line(480,600,features[4].x,features[4].y)
  line(485,600,features[4].x,features[4].y)
  line(490,600,features[4].x,features[4].y)
  line(495,600,features[3].x,features[3].y)
  line(500,600,features[3].x,features[3].y)

  line(505,600,features[8].x,features[8].y)
  line(510,600,features[8].x,features[8].y)
  line(515,600,features[8].x,features[8].y)
  line(520,600,features[7].x,features[7].y)
  line(525,600,features[7].x,features[7].y)
  line(530,600,features[7].x,features[7].y)
  line(535,600,features[7].x,features[7].y)
  line(540,600,features[6].x,features[6].y)
  line(545,600,features[6].x,features[6].y)
  line(550,600,features[6].x,features[6].y)
  line(555,600,features[6].x,features[6].y)
  line(560,600,features[5].x,features[5].y)
  line(565,600,features[5].x,features[5].y)
  line(570,600,features[5].x,features[5].y)
  line(575,600,features[5].x,features[5].y)
  line(580,600,features[4].x,features[4].y)
  line(585,600,features[4].x,features[4].y)
  line(590,600,features[4].x,features[4].y)
  line(595,600,features[4].x,features[4].y)
  line(600,600,features[4].x,features[4].y)
  line(605,600,features[3].x,features[3].y)
  line(610,600,features[3].x,features[3].y)
  line(615,600,features[3].x,features[3].y)
  line(620,600,features[3].x,features[3].y)
  line(625,600,features[2].x,features[2].y)
  line(630,600,features[2].x,features[2].y)
  line(635,600,features[2].x,features[2].y)
  line(640,600,features[2].x,features[2].y)
  line(645,600,features[1].x,features[1].y)
  line(650,600,features[1].x,features[1].y)
  line(655,600,features[1].x,features[1].y)
  line(660,600,features[1].x,features[1].y)
  line(665,600,features[0].x,features[0].y)
  line(670,600,features[0].x,features[0].y)
  line(675,600,features[0].x,features[0].y)

  line(675,600,features[2].x,features[2].y)
  line(675,595,features[2].x,features[2].y)
  line(675,590,features[2].x,features[2].y)
  line(675,585,features[2].x,features[2].y)
  line(675,580,features[2].x,features[2].y)
  line(675,575,features[2].x,features[2].y)
  line(675,570,features[3].x,features[3].y)
  line(675,565,features[3].x,features[3].y)
  line(675,560,features[3].x,features[3].y)
  line(675,555,features[3].x,features[3].y)
  line(675,550,features[3].x,features[3].y)
  line(675,545,features[3].x,features[3].y)
  line(675,540,features[4].x,features[4].y)
  line(675,535,features[4].x,features[4].y)
  line(675,530,features[4].x,features[4].y)
  line(675,525,features[4].x,features[4].y)
  line(675,520,features[4].x,features[4].y)
  line(675,515,features[4].x,features[4].y)
  line(675,510,features[5].x,features[5].y)
  line(675,505,features[5].x,features[5].y)
  line(675,500,features[5].x,features[5].y)
  line(675,495,features[5].x,features[5].y)
  line(675,490,features[5].x,features[5].y)
  line(675,485,features[5].x,features[5].y)
  line(675,480,features[6].x,features[6].y)
  line(675,475,features[6].x,features[6].y)
  line(675,470,features[6].x,features[6].y)
  line(675,465,features[6].x,features[6].y)
  line(675,460,features[6].x,features[6].y)
  line(675,455,features[6].x,features[6].y)
  line(675,450,features[7].x,features[7].y)
  line(675,445,features[7].x,features[7].y)
  line(675,440,features[7].x,features[7].y)
  line(675,435,features[7].x,features[7].y)
  line(675,430,features[7].x,features[7].y)
  line(675,425,features[6].x,features[6].y)
  line(675,420,features[6].x,features[6].y)
  line(675,415,features[6].x,features[6].y)
  line(675,410,features[6].x,features[6].y)
  line(675,405,features[6].x,features[6].y)
  line(675,400,features[5].x,features[5].y)
  line(675,395,features[5].x,features[5].y)
  line(675,390,features[5].x,features[5].y)
  line(675,385,features[5].x,features[5].y)
  line(675,380,features[5].x,features[5].y)
  line(675,375,features[4].x,features[4].y)
  line(675,370,features[4].x,features[4].y)
  line(675,365,features[4].x,features[4].y)
  line(675,360,features[4].x,features[4].y)
  line(675,355,features[4].x,features[4].y)
  line(675,350,features[3].x,features[3].y)
  line(675,345,features[3].x,features[3].y)
  line(675,340,features[3].x,features[3].y)
  line(675,335,features[3].x,features[3].y)
  line(675,330,features[3].x,features[3].y)
  line(675,325,features[2].x,features[2].y)
  line(675,320,features[2].x,features[2].y)
  line(675,315,features[2].x,features[2].y)
  line(675,310,features[2].x,features[2].y)
  line(675,305,features[2].x,features[2].y)
  line(675,300,features[2].x,features[2].y)
  line(675,295,features[2].x,features[2].y)
  line(675,290,features[2].x,features[2].y)
  line(675,285,features[2].x,features[2].y)
  line(675,280,features[2].x,features[2].y)
  line(675,275,features[2].x,features[2].y)
  line(675,270,features[1].x,features[1].y)
  line(675,265,features[1].x,features[1].y)
  line(675,260,features[1].x,features[1].y)
  line(675,255,features[1].x,features[1].y)
  line(675,250,features[1].x,features[1].y)
  line(675,245,features[0].x,features[0].y)
  line(675,240,features[0].x,features[0].y)
  line(675,235,features[0].x,features[0].y)
  line(675,230,features[0].x,features[0].y)
  line(675,225,features[0].x,features[0].y)
  line(675,220,features[19].x,features[19].y)
  line(675,215,features[19].x,features[19].y)
  line(675,210,features[19].x,features[19].y)
  line(675,205,features[19].x,features[19].y)
  line(675,200,features[19].x,features[19].y)
  line(675,195,features[20].x,features[20].y)
  line(675,190,features[20].x,features[20].y)
  line(675,185,features[20].x,features[20].y)
  line(675,180,features[20].x,features[20].y)
  line(675,175,features[20].x,features[20].y)
  line(675,170,features[1].x,features[1].y)
  line(675,165,features[1].x,features[1].y)
  line(675,160,features[1].x,features[1].y)
  line(675,155,features[1].x,features[1].y)
  line(675,150,features[1].x,features[1].y)
  line(675,145,features[1].x,features[1].y)
  line(675,140,features[0].x,features[0].y)
  line(675,135,features[0].x,features[0].y)
  line(675,130,features[0].x,features[0].y)
  line(675,125,features[0].x,features[0].y)
  line(675,120,features[0].x,features[0].y)
  line(675,115,features[0].x,features[0].y)
  line(675,110,features[19].x,features[19].y)
  line(675,105,features[19].x,features[19].y)
  line(675,100,features[19].x,features[19].y)
  line(675,95,features[19].x,features[19].y)
  line(675,90,features[19].x,features[19].y)
  line(675,85,features[19].x,features[19].y)
  line(675,80,features[20].x,features[20].y)
  line(675,75,features[20].x,features[20].y)
  line(675,70,features[20].x,features[20].y)
  line(675,65,features[20].x,features[20].y)
  line(675,60,features[20].x,features[20].y)
  line(675,55,features[20].x,features[20].y)
  line(675,50,features[21].x,features[21].y)
  line(675,45,features[21].x,features[21].y)
  line(675,40,features[21].x,features[21].y)
  line(675,35,features[21].x,features[21].y)
  line(675,30,features[21].x,features[21].y)
  line(675,25,features[21].x,features[21].y)
  line(675,20,features[22].x,features[22].y)
  line(675,15,features[22].x,features[22].y)
  line(675,10,features[22].x,features[22].y)
  line(675,5,features[22].x,features[22].y)
  line(675,0,features[22].x,features[22].y)
  line(675,0,features[3].x,features[3].y)
  line(670,0,features[3].x,features[3].y)
  line(665,0,features[2].x,features[2].y)
  line(660,0,features[2].x,features[2].y)
  line(655,0,features[2].x,features[2].y)
  line(650,0,features[2].x,features[2].y)
  line(645,0,features[1].x,features[1].y)
  line(640,0,features[1].x,features[1].y)
  line(635,0,features[1].x,features[1].y)
  line(630,0,features[1].x,features[1].y)
  line(625,0,features[0].x,features[0].y)
  line(620,0,features[0].x,features[0].y)
  line(615,0,features[0].x,features[0].y)
  line(610,0,features[0].x,features[0].y)
  line(605,0,features[19].x,features[19].y)
  line(600,0,features[19].x,features[19].y)
  line(595,0,features[19].x,features[19].y)
  line(590,0,features[19].x,features[19].y)
  line(585,0,features[19].x,features[19].y)
  line(580,0,features[19].x,features[19].y)
  line(575,0,features[19].x,features[19].y)
  line(570,0,features[20].x,features[20].y)
  line(565,0,features[20].x,features[20].y)
  line(560,0,features[20].x,features[20].y)
  line(555,0,features[20].x,features[20].y)
  line(550,0,features[21].x,features[21].y)
  line(545,0,features[21].x,features[21].y)
  line(540,0,features[21].x,features[21].y)
  line(535,0,features[21].x,features[21].y)
  line(530,0,features[22].x,features[22].y)
  line(525,0,features[22].x,features[22].y)
  line(520,0,features[22].x,features[22].y)
  line(515,0,features[22].x,features[22].y)
  line(510,0,features[33].x,features[33].y)
  line(505,0,features[33].x,features[33].y)
  line(500,0,features[33].x,features[33].y)

  strokeWeight(1)
  stroke(235, 210, 120)
  line(features[33].x,features[33].y,features[0].x,features[0].y)
  line(features[33].x,features[33].y,features[1].x,features[1].y)
  line(features[33].x,features[33].y,features[2].x,features[2].y)
  line(features[33].x,features[33].y,features[3].x,features[3].y)
  line(features[33].x,features[33].y,features[4].x,features[4].y)
  line(features[33].x,features[33].y,features[5].x,features[5].y)
  line(features[33].x,features[33].y,features[6].x,features[6].y)
  line(features[33].x,features[33].y,features[7].x,features[7].y)
  line(features[33].x,features[33].y,features[8].x,features[8].y)
  line(features[33].x,features[33].y,features[9].x,features[9].y)
  line(features[33].x,features[33].y,features[10].x,features[10].y)
  line(features[33].x,features[33].y,features[11].x,features[11].y)
  line(features[33].x,features[33].y,features[12].x,features[12].y)
  line(features[33].x,features[33].y,features[13].x,features[13].y)
  line(features[33].x,features[33].y,features[14].x,features[14].y)
  line(features[33].x,features[33].y,features[15].x,features[15].y)
  line(features[33].x,features[33].y,features[16].x,features[16].y)
  line(features[33].x,features[33].y,features[17].x,features[17].y)
  line(features[33].x,features[33].y,features[18].x,features[18].y)
  line(features[33].x,features[33].y,features[19].x,features[19].y)
  line(features[33].x,features[33].y,features[20].x,features[20].y)
  line(features[33].x,features[33].y,features[21].x,features[21].y)
  line(features[33].x,features[33].y,features[22].x,features[22].y)
  line(features[33].x,features[33].y,features[41].x,features[41].y)
  line(features[33].x,features[33].y,features[40].x,features[40].y)
  line(features[33].x,features[33].y,features[34].x,features[34].y)
  line(features[33].x,features[33].y,features[62].x,features[62].y)
  line(features[33].x,features[33].y,features[43].x,features[43].y)
  line(features[33].x,features[33].y,features[42].x,features[42].y)
  line(features[33].x,features[33].y,features[35].x,features[35].y)
  line(features[33].x,features[33].y,features[36].x,features[36].y)
  line(features[33].x,features[33].y,features[37].x,features[37].y)
  line(features[33].x,features[33].y,features[38].x,features[38].y)
  line(features[33].x,features[33].y,features[39].x,features[39].y)
  line(features[22].x,features[22].y,features[21].x,features[21].y)
  line(features[22].x,features[22].y,features[20].x,features[20].y)
  line(features[22].x,features[22].y,features[19].x,features[19].y)
  line(features[22].x,features[22].y,features[0].x,features[0].y)
  line(features[22].x,features[22].y,features[1].x,features[1].y)
  line(features[22].x,features[22].y,features[3].x,features[3].y)
  line(features[22].x,features[22].y,features[2].x,features[2].y)
  line(features[22].x,features[22].y,features[4].x,features[4].y)
  line(features[22].x,features[22].y,features[5].x,features[5].y)
  line(features[22].x,features[22].y,features[6].x,features[6].y)
  line(features[22].x,features[22].y,features[7].x,features[7].y)
  line(features[22].x,features[22].y,features[8].x,features[8].y)
  line(features[22].x,features[22].y,features[9].x,features[9].y)
  line(features[22].x,features[22].y,features[10].x,features[10].y)
  line(features[22].x,features[22].y,features[11].x,features[11].y)
  line(features[22].x,features[22].y,features[12].x,features[12].y)
  line(features[22].x,features[22].y,features[13].x,features[13].y)
  line(features[18].x,features[18].y,features[15].x,features[15].y)
  line(features[18].x,features[18].y,features[14].x,features[14].y)
  line(features[18].x,features[18].y,features[17].x,features[17].y)
  line(features[18].x,features[18].y,features[16].x,features[16].y)
  line(features[18].x,features[18].y,features[12].x,features[12].y)
  line(features[18].x,features[18].y,features[13].x,features[13].y)
  line(features[18].x,features[18].y,features[11].x,features[11].y)
  line(features[18].x,features[18].y,features[10].x,features[10].y)
  line(features[18].x,features[18].y,features[9].x,features[9].y)
  line(features[18].x,features[18].y,features[8].x,features[8].y)
  line(features[18].x,features[18].y,features[7].x,features[7].y)
  line(features[18].x,features[18].y,features[6].x,features[6].y)
  line(features[18].x,features[18].y,features[5].x,features[5].y)
  line(features[18].x,features[18].y,features[4].x,features[4].y)
  line(features[18].x,features[18].y,features[3].x,features[3].y)
  line(features[18].x,features[18].y,features[2].x,features[2].y)
  line(features[18].x,features[18].y,features[1].x,features[1].y)
  line(features[17].x,features[17].y,features[7].x,features[7].y)
  line(features[17].x,features[17].y,features[8].x,features[8].y)
  line(features[17].x,features[17].y,features[9].x,features[9].y)
  line(features[17].x,features[17].y,features[10].x,features[10].y)
  line(features[17].x,features[17].y,features[11].x,features[11].y)
  line(features[17].x,features[17].y,features[12].x,features[12].y)
  line(features[17].x,features[17].y,features[6].x,features[6].y)
  line(features[17].x,features[17].y,features[5].x,features[5].y)
  line(features[17].x,features[17].y,features[4].x,features[4].y)
  line(features[17].x,features[17].y,features[3].x,features[3].y)
  line(features[17].x,features[17].y,features[2].x,features[2].y)
  line(features[17].x,features[17].y,features[1].x,features[1].y)
  line(features[21].x,features[21].y,features[2].x,features[2].y)
  line(features[21].x,features[21].y,features[3].x,features[3].y)
  line(features[21].x,features[21].y,features[4].x,features[4].y)
  line(features[21].x,features[21].y,features[5].x,features[5].y)
  line(features[21].x,features[21].y,features[6].x,features[6].y)
  line(features[21].x,features[21].y,features[7].x,features[7].y)
  line(features[21].x,features[21].y,features[8].x,features[8].y)
  line(features[21].x,features[21].y,features[9].x,features[9].y)
  line(features[21].x,features[21].y,features[10].x,features[10].y)
  line(features[21].x,features[21].y,features[11].x,features[11].y)
  line(features[21].x,features[21].y,features[12].x,features[12].y)
  line(features[16].x,features[16].y,features[2].x,features[2].y)
  line(features[20].x,features[20].y,features[12].x,features[12].y)
  line(features[16].x,features[16].y,features[3].x,features[3].y)
  line(features[20].x,features[20].y,features[11].x,features[11].y)
  line(features[16].x,features[16].y,features[4].x,features[4].y)
  line(features[20].x,features[20].y,features[10].x,features[10].y)
  line(features[16].x,features[16].y,features[5].x,features[5].y)
  line(features[20].x,features[20].y,features[9].x,features[9].y)
  line(features[16].x,features[16].y,features[6].x,features[6].y)
  line(features[20].x,features[20].y,features[8].x,features[8].y)
  line(features[16].x,features[16].y,features[7].x,features[7].y)
  line(features[20].x,features[20].y,features[7].x,features[7].y)
  line(features[16].x,features[16].y,features[8].x,features[8].y)
  line(features[20].x,features[20].y,features[6].x,features[6].y)
  line(features[16].x,features[16].y,features[9].x,features[9].y)
  line(features[20].x,features[20].y,features[5].x,features[5].y)
  line(features[16].x,features[16].y,features[10].x,features[10].y)
  line(features[20].x,features[20].y,features[4].x,features[4].y)
  line(features[16].x,features[16].y,features[11].x,features[11].y)
  line(features[20].x,features[20].y,features[3].x,features[3].y)
  line(features[16].x,features[16].y,features[12].x,features[12].y)
  line(features[20].x,features[20].y,features[2].x,features[2].y)
  line(features[15].x,features[15].y,features[3].x,features[3].y)
  line(features[19].x,features[19].y,features[11].x,features[11].y)
  line(features[15].x,features[15].y,features[4].x,features[4].y)
  line(features[19].x,features[19].y,features[10].x,features[10].y)
  line(features[15].x,features[15].y,features[5].x,features[5].y)
  line(features[19].x,features[19].y,features[9].x,features[9].y)
  line(features[15].x,features[15].y,features[6].x,features[6].y)
  line(features[19].x,features[19].y,features[8].x,features[8].y)
  line(features[15].x,features[15].y,features[7].x,features[7].y)
  line(features[19].x,features[19].y,features[7].x,features[7].y)
  line(features[15].x,features[15].y,features[8].x,features[8].y)
  line(features[19].x,features[19].y,features[6].x,features[6].y)
  line(features[15].x,features[15].y,features[9].x,features[9].y)
  line(features[19].x,features[19].y,features[5].x,features[5].y)
  line(features[15].x,features[15].y,features[10].x,features[10].y)
  line(features[19].x,features[19].y,features[4].x,features[4].y)
  line(features[15].x,features[15].y,features[11].x,features[11].y)
  line(features[19].x,features[19].y,features[3].x,features[3].y)
  line(features[14].x,features[14].y,features[4].x,features[4].y)
  line(features[0].x,features[0].y,features[10].x,features[10].y)
  line(features[14].x,features[14].y,features[5].x,features[5].y)
  line(features[0].x,features[0].y,features[9].x,features[9].y)
  line(features[14].x,features[14].y,features[6].x,features[6].y)
  line(features[0].x,features[0].y,features[8].x,features[8].y)
  line(features[14].x,features[14].y,features[7].x,features[7].y)
  line(features[0].x,features[0].y,features[7].x,features[7].y)
  line(features[14].x,features[14].y,features[8].x,features[8].y)
  line(features[0].x,features[0].y,features[6].x,features[6].y)
  line(features[14].x,features[14].y,features[9].x,features[9].y)
  line(features[0].x,features[0].y,features[5].x,features[5].y)
  line(features[14].x,features[14].y,features[10].x,features[10].y)
  line(features[0].x,features[0].y,features[4].x,features[4].y)

  strokeWeight(10)
  stroke(255)
  line(features[11].x,features[11].y,features[40].x,features[40].y)
  line(features[13].x,features[13].y,features[40].x,features[40].y)
  line(features[40].x,features[40].y,features[41].x,features[41].y)
  line(features[41].x,features[41].y,features[34].x,features[34].y)
  line(features[34].x,features[34].y,features[1].x,features[1].y)
  line(features[3].x,features[3].y,features[34].x,features[34].y)

  stroke(252, 104, 104)
  strokeWeight(1.5)
  line(features[28].x,features[28].y,features[67].x,features[67].y)
  line(features[28].x,features[28].y,features[30].x,features[30].y)
  line(features[29].x,features[29].y,features[31].x,features[31].y)
  line(features[29].x,features[29].y,features[69].x,features[69].y)
  line(features[29].x,features[29].y,features[28].x,features[28].y)
  line(features[29].x,features[29].y,features[70].x,features[70].y)
  line(features[29].x,features[29].y,features[68].x,features[68].y)
  line(features[31].x,features[31].y,features[30].x,features[30].y)
  line(features[31].x,features[31].y,features[28].x,features[28].y)
  line(features[31].x,features[31].y,features[68].x,features[68].y)
  line(features[31].x,features[31].y,features[67].x,features[67].y)
  line(features[31].x,features[31].y,features[69].x,features[69].y)
  line(features[68].x,features[68].y,features[30].x,features[30].y)
  line(features[68].x,features[68].y,features[70].x,features[70].y)
  line(features[68].x,features[68].y,features[28].x,features[28].y)
  line(features[68].x,features[68].y,features[68].x,features[69].y)
  line(features[69].x,features[69].y,features[30].x,features[30].y)
  line(features[69].x,features[69].y,features[67].x,features[67].y)
  line(features[69].x,features[69].y,features[28].x,features[28].y)
  line(features[30].x,features[30].y,features[70].x,features[70].y)
  line(features[67].x,features[67].y,features[29].x,features[29].y)
  line(features[67].x,features[67].y,features[30].x,features[30].y)
  line(features[67].x,features[67].y,features[68].x,features[68].y)
  line(features[67].x,features[67].y,features[70].x,features[70].y)
  line(features[70].x,features[70].y,features[28].x,features[28].y)
  line(features[70].x,features[70].y,features[31].x,features[31].y)
  line(features[70].x,features[70].y,features[69].x,features[69].y)

  line(features[24].x,features[24].y,features[25].x,features[25].y)
  line(features[24].x,features[24].y,features[65].x,features[65].y)
  line(features[24].x,features[24].y,features[26].x,features[26].y)
  line(features[24].x,features[24].y,features[66].x,features[66].y)
  line(features[24].x,features[24].y,features[23].x,features[23].y)
  line(features[26].x,features[26].y,features[25].x,features[25].y)
  line(features[26].x,features[26].y,features[64].x,features[64].y)
  line(features[26].x,features[26].y,features[63].x,features[63].y)
  line(features[26].x,features[26].y,features[23].x,features[23].y)
  line(features[64].x,features[64].y,features[25].x,features[25].y)
  line(features[64].x,features[64].y,features[24].x,features[24].y)
  line(features[64].x,features[64].y,features[63].x,features[63].y)
  line(features[64].x,features[64].y,features[23].x,features[23].y)
  line(features[64].x,features[64].y,features[66].x,features[66].y)
  line(features[65].x,features[65].y,features[25].x,features[25].y)
  line(features[65].x,features[65].y,features[26].x,features[26].y)
  line(features[65].x,features[65].y,features[66].x,features[66].y)
  line(features[65].x,features[65].y,features[23].x,features[23].y)
  line(features[65].x,features[65].y,features[63].x,features[63].y)
  line(features[63].x,features[63].y,features[24].x,features[24].y)
  line(features[63].x,features[63].y,features[23].x,features[23].y)
  line(features[63].x,features[63].y,features[25].x,features[25].y)
  line(features[66].x,features[66].y,features[26].x,features[26].y)
  line(features[66].x,features[66].y,features[23].x,features[23].y)
  line(features[66].x,features[66].y,features[25].x,features[25].y)
  line(features[63].x,features[63].y,features[66].x,features[66].y)
  line(features[65].x,features[65].y,features[64].x,features[64].y)
  // line(features[].x,features[].y,features[].x,features[].y)
  // line(features[].x,features[].y,features[].x,features[].y)

  strokeWeight(5)
  stroke(166, 218, 255)
  // (171, 255, 249)
  let mask = (
  line(features[40].x,features[40].y,features[13].x,features[13].y),
  line(features[40].x,features[40].y,features[12].x,features[12].y),
  line(features[34].x,features[34].y,features[12].x,features[12].y),
  line(features[41].x,features[41].y,features[11].x,features[11].y),
  line(features[40].x,features[40].y,features[11].x,features[11].y),
  line(features[34].x,features[34].y,features[11].x,features[11].y),
  line(features[41].x,features[41].y,features[10].x,features[10].y),
  line(features[40].x,features[40].y,features[10].x,features[10].y),
  line(features[34].x,features[34].y,features[10].x,features[10].y),
  line(features[41].x,features[41].y,features[9].x,features[9].y),
  line(features[40].x,features[40].y,features[9].x,features[9].y),
  line(features[34].x,features[34].y,features[9].x,features[9].y),
  line(features[41].x,features[41].y,features[8].x,features[8].y),
  line(features[40].x,features[40].y,features[8].x,features[8].y),
  line(features[34].x,features[34].y,features[8].x,features[8].y),
  line(features[41].x,features[41].y,features[7].x,features[7].y),
  line(features[40].x,features[40].y,features[7].x,features[7].y),
  line(features[34].x,features[34].y,features[7].x,features[7].y),
  line(features[41].x,features[41].y,features[6].x,features[6].y),
  line(features[40].x,features[40].y,features[6].x,features[6].y),
  line(features[34].x,features[34].y,features[6].x,features[6].y),
  line(features[41].x,features[41].y,features[5].x,features[5].y),
  line(features[40].x,features[40].y,features[5].x,features[5].y),
  line(features[34].x,features[34].y,features[5].x,features[5].y),
  line(features[41].x,features[41].y,features[4].x,features[4].y),
  line(features[40].x,features[40].y,features[4].x,features[4].y),
  line(features[34].x,features[34].y,features[4].x,features[4].y),
  line(features[41].x,features[41].y,features[3].x,features[3].y),
  line(features[40].x,features[40].y,features[3].x,features[3].y),
  line(features[34].x,features[34].y,features[3].x,features[3].y),
  line(features[40].x,features[40].y,features[2].x,features[2].y),
  line(features[34].x,features[34].y,features[2].x,features[2].y),
  line(features[34].x,features[34].y,features[1].x,features[1].y),
  line(features[1].x,features[1].y,features[2].x,features[2].y),
  line(features[13].x,features[13].y,features[12].x,features[12].y),
  line(features[1].x,features[1].y,features[3].x,features[3].y),
  line(features[13].x,features[13].y,features[11].x,features[11].y),
  line(features[1].x,features[1].y,features[4].x,features[4].y),
  line(features[13].x,features[13].y,features[10].x,features[10].y),
  line(features[1].x,features[1].y,features[5].x,features[5].y),
  line(features[13].x,features[13].y,features[9].x,features[9].y),
  line(features[1].x,features[1].y,features[6].x,features[6].y),
  line(features[13].x,features[13].y,features[8].x,features[8].y),
  line(features[1].x,features[1].y,features[7].x,features[7].y),
  line(features[13].x,features[13].y,features[7].x,features[7].y),
  line(features[1].x,features[1].y,features[8].x,features[8].y),
  line(features[13].x,features[13].y,features[6].x,features[6].y),
  line(features[1].x,features[1].y,features[9].x,features[9].y),
  line(features[13].x,features[13].y,features[5].x,features[5].y),
  line(features[1].x,features[1].y,features[10].x,features[10].y),
  line(features[13].x,features[13].y,features[4].x,features[4].y),
  line(features[1].x,features[1].y,features[11].x,features[11].y),
  line(features[13].x,features[13].y,features[3].x,features[3].y)
)

if (distance > 45) {

    let mouth_center = { x: mouth_top.x,
                         y: (mouth_top.y + mouth_bottom.y) / 2
                     }

    let random_ball3 = { x: random(mouth_center.x - 20, mouth_center.x + 20),
                        y: random(mouth_center.y - 5, mouth_center.y + 5),
                        vx: random(nose_pointing, nose_pointing),
                        vy: random(0, 2),
                        c: [0, random(255), random(150), random(150,180)]
                    }
    halls.push(random_ball3)
}

if (distance > 30) {

    let mouth_center = { x: mouth_top.x,
                         y: (mouth_top.y + mouth_bottom.y) / 2
                     }

    let random_ball = { x: random(mouth_center.x - 20, mouth_center.x + 20),
                        y: random(mouth_center.y - 5, mouth_center.y + 5),
                        vx: random(nose_pointing / 4, nose_pointing / 4),
                        vy: random(0, 2),
                        c: [0, random(255), 0, random(150,180)]
                    }
    balls.push(random_ball)
}

if (distance > 15) {

  let mouth_center = { x: mouth_top.x,
                       y: (mouth_top.y + mouth_bottom.y) / 2
                   }
  let random_ball2 = { x: random(mouth_center.x - 20, mouth_center.x + 20),
                      y: random(mouth_center.y - 5, mouth_center.y + 5),
                      vx: random(nose_pointing/2, nose_pointing/2),
                      vy: random(0, 20),
                      c: [random(150), random(255), 0, random(150,180)]
                  }
  smalls.push(random_ball2)
}

}


function mouseClicked() {

    fullscreen(true)

}

function windowResized() {

    resizeCanvas(windowWidth, windowHeight)

}

// function mouseClicked() {
//
//     print(int(mouseX), int(mouseY))
//
//     if (mouseX > 25 && mouseX < 75 && mouseY > 25 && mouseY < 75) {
//       print("mask off")
//
//     } else if (mouseX > 25 && mouseX < 75 && mouseY > 100 && mouseY < 150) {
//       print("mask on")
//     } else {
//     }
// }


function mousePressed() {
  capture.loop()
}

function showFlippedVideo() {
  push()
  translate(thevideo.width, 0)
  scale(-1,1)
  image(thevideo,0,0,thevideo.width,thevideo.height)
  pop()
}
