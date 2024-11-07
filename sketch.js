let games = [

  { title: "The Legend of Zelda: Breath of the Wild", genre: "Aventura" },

  { title: "GTA 5", genre: "Ação" },

  { title: "Stardew Valley", genre: "Simulação" },

  { title: "Civilization VI", genre: "Estratégia" },

  { title: "The Witcher 3", genre: "RPG" },

  { title: "Rocket League", genre: "Esportes" },

];

let selectedGenre = "";

let recommendedGame = "";

let displayResult = false;

function setup() {

  createCanvas(400, 600);

  textAlign(CENTER, CENTER);

  noLoop(); // Desativa o loop do draw()

  // Configurações de estilo

  background(30);

  textFont("Arial");

  // Título

  textSize(26);

  fill(255, 204, 0);

  text("Recomendador de Jogos", width / 2, 40);

  // Instruções

  textSize(16);

  fill(255);

  text("Escolha um gênero para receber uma recomendação", width / 2, 90);

  // Botões de Gêneros

  let y = 130;

  for (let game of games) {

    let button = createButton(game.genre);

    button.position(width / 2 - button.width / 2, y);

    button.style('background-color', '#4CAF50');

    button.style('color', '#FFFFFF');

    button.style('font-size', '14px');

    button.style('border', 'none');

    button.style('padding', '10px 20px');

    button.style('border-radius', '20px');

    button.mousePressed(() => recommendGame(game.genre));

    y += 50;

  }

}

function recommendGame(genre) {

  selectedGenre = genre;

  let filteredGames = games.filter(game => game.genre === genre);

  recommendedGame = random(filteredGames).title;

  displayResult = true;

  // Redesenha a tela após uma escolha

  redraw();

}

function draw() {

  // Fundo estático

  background(30);

  // Exibe a recomendação de jogo se houver uma seleção

  if (displayResult) {

    fill(255);

    textSize(16);

    text(`Gênero: ${selectedGenre}`, width / 2, height - 120);

    textSize(20);

    fill(255, 204, 0);

    text(`Jogo Recomendado:`, width / 2, height - 80);

    textSize(22);

    fill(255);

    text(recommendedGame, width / 2, height - 50);

  }

}