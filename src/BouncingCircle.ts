import random from 'lodash.random';
import sample from 'lodash.sample';

export class BouncingCircle {
  private ctx: CanvasRenderingContext2D;
  public x: number;
  public y: number;
  public lastX: number;
  public lastY: number;
  public directionX: number = sample([-1, 1]) as number;
  public directionY: number = sample([-1, 1]) as number;
  public radius: number = 10;

  constructor(private readonly canvas: HTMLCanvasElement) {
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
  }
}
