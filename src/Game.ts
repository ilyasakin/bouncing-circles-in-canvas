import { BouncingCircle } from './BouncingCircle';

export class Game {
  public fps: number = 60;
  private ctx: CanvasRenderingContext2D;
  public circles: BouncingCircle[] = [];

  constructor(private readonly canvas: HTMLCanvasElement) {
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  public start(): void {
    this.initCircles();

    setInterval(() => {
      this.draw();
    }, 1000 / this.fps);
  }

  public draw(): void {
    this.clearCanvas();
    this.circles.forEach((c) => c.draw());
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
