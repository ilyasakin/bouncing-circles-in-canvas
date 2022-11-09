import { Game } from './Game';
import './style.css';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;

canvas.width = 700;
canvas.height = 450;

const game = new Game(canvas);

game.start();