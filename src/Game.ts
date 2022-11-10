import { BouncingCircle } from './BouncingCircle';

export class Game {
  private ctx: CanvasRenderingContext2D;
  public circles: BouncingCircle[] = [];

  constructor(private readonly canvas: HTMLCanvasElement) {
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  public start(): void {
    this.initCircles();
    this.draw();
  }

  public draw(): void {
    this.clearCanvas();
    this.circles.forEach((c) => c.draw());
    window.requestAnimationFrame(() => this.draw());
  }

  public clearCanvas(): void {
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  public initCircles(): void {
    this.circles = [
      new BouncingCircle(this.canvas, this),
      new BouncingCircle(this.canvas, this),
      new BouncingCircle(this.canvas, this),
      new BouncingCircle(this.canvas, this),
      new BouncingCircle(this.canvas, this),
      new BouncingCircle(this.canvas, this),
      new BouncingCircle(this.canvas, this),
      new BouncingCircle(this.canvas, this),
      new BouncingCircle(this.canvas, this),
      new BouncingCircle(this.canvas, this),
      new BouncingCircle(this.canvas, this),
      new BouncingCircle(this.canvas, this),
    ];
  }
}
