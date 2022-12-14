import random from 'lodash.random';
import sample from 'lodash.sample';
import { Game } from './Game';

export class BouncingCircle {
  private ctx: CanvasRenderingContext2D;
  public x: number;
  public y: number;
  public lastX: number;
  public lastY: number;
  public directionX: number = sample([-1, 1]) as number;
  public directionY: number = sample([-1, 1]) as number;
  public radius: number = 10;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    private readonly game: Game
  ) {
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.x = random(0, this.canvas.width);
    this.y = random(0, this.canvas.height);
    this.lastX = this.x;
    this.lastY = this.y;
  }

  public draw(): void {
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'white';
    this.ctx.arc(this.lastX, this.lastY, this.radius, 0, 2 * Math.PI);
    this.ctx.stroke();
    this.ctx.closePath();

    this.lastX = this.lastX + this.directionX;
    this.lastY = this.lastY + this.directionY;

    if (this.directionX === 1 && this.lastX > this.canvas.width - this.radius) {
      this.directionX = -1;
    }

    if (this.directionX === -1 && this.lastX < this.radius) {
      this.directionX = 1;
    }

    if (
      this.directionY === 1 &&
      this.lastY > this.canvas.height - this.radius
    ) {
      this.directionY = -1;
    }

    if (this.directionY === -1 && this.lastY < this.radius) {
      this.directionY = 1;
    }

    this.checkCollision();
    this.drawLineToEveryOtherCircle();
  }

  // Copilot wrote this lol
  public checkCollision(): void {
    this.game.circles.forEach((c) => {
      if (c === this) {
        return;
      }

      const distance: number = Math.sqrt(
        Math.pow(this.lastX - c.lastX, 2) + Math.pow(this.lastY - c.lastY, 2)
      );

      if (distance < this.radius + c.radius) {
        this.directionX = -this.directionX;
        this.directionY = -this.directionY;
      }
    });
  }

  public drawLineToEveryOtherCircle(): void {
    this.game.circles.forEach((c) => {
      if (c === this) {
        return;
      }

      this.ctx.beginPath();
      this.ctx.moveTo(this.lastX, this.lastY);
      this.ctx.lineTo(c.lastX, c.lastY);
      this.ctx.stroke();
      this.ctx.closePath();
    });
  }
}
