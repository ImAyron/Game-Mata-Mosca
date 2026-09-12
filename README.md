# Game Mata Mosquito

> Jogo web de clicar em mosquitos, feito com HTML, CSS e JavaScript puro.
> A browser game about swatting mosquitoes, built with plain HTML, CSS, and JavaScript.

---

## 🇧🇷 Português

### Sobre

Jogo de navegador em que o jogador precisa clicar nos mosquitos que aparecem na tela antes que o tempo acabe. Desenvolvido com **JavaScript puro**, sem bibliotecas ou frameworks — um exercício de manipulação do DOM, eventos e temporizadores.

Os mosquitos surgem em posições aleatórias e em tamanhos variados; deixar escapar mosquitos demais leva à derrota.

### Como jogar

Abra `game mata mosquito/index.html` no navegador. Escolha a dificuldade e clique nos mosquitos o mais rápido possível.

Para servir localmente:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000/game mata mosquito/`.

### Estrutura

```
game mata mosquito/
├── index.html         Tela inicial e seleção de dificuldade
├── app.html           Tela do jogo
├── vitoria.html       Tela de vitória
├── fim_de_jogo.html   Tela de derrota
├── jogo.js            Lógica do jogo
├── estilo.css         Estilos
└── imagens/           Sprites dos mosquitos e cenário
```

### Tecnologias

HTML5, CSS3 e JavaScript (ES6) — sem dependências externas.

### Licença

Este projeto está sob a licença incluída no arquivo [LICENSE](LICENSE).

---

## 🇺🇸 English

### About

Browser game where the player clicks mosquitoes appearing on screen before time runs out. Built with **vanilla JavaScript**, no libraries or frameworks — an exercise in DOM manipulation, events, and timers.

Mosquitoes spawn at random positions and varying sizes; letting too many escape ends the game.

### How to play

Open `game mata mosquito/index.html` in a browser. Pick a difficulty and click the mosquitoes as fast as you can.

To serve locally:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/game mata mosquito/`.

### Layout

```
game mata mosquito/
├── index.html         Start screen and difficulty selection
├── app.html           Game screen
├── vitoria.html       Win screen
├── fim_de_jogo.html   Game over screen
├── jogo.js            Game logic
├── estilo.css         Styles
└── imagens/           Mosquito sprites and scenery
```

### Built with

HTML5, CSS3, and JavaScript (ES6) — no external dependencies.

### License

This project is covered by the license in [LICENSE](LICENSE).
