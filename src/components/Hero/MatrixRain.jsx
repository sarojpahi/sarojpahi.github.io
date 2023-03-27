import React, { useRef, useEffect } from "react";

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(0.2, "yellow");
    gradient.addColorStop(0.4, "green");
    gradient.addColorStop(0.6, "cyan");
    gradient.addColorStop(0.8, "blue");
    gradient.addColorStop(1, "magenta");

    class Symbol {
      constructor(x, y, fontSize, canvasHeight) {
        this.char = `01`;
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = "";
        this.canvasHeight = canvasHeight;
      }
      draw(context) {
        this.text = this.char.charAt(
          Math.floor(Math.random() * this.char.length)
        );

        context.fillText(
          this.text,
          this.x * this.fontSize,
          this.y * this.fontSize
        );
        if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98)
          this.y = 0;
        else this.y += 1;
      }
      update() {}
    }
    class Effect {
      constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 15;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.#initiatize();
      }
      #initiatize() {
        for (let i = 0; i < this.columns; i++) {
          this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
        }
      }
      resize(width, height) {
        this.canvasHeight = height;
        this.canvasWidth = width;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.#initiatize();
      }
    }
    const effect = new Effect(canvas.width, canvas.height);
    let lastTime = 0;
    let fps = 30;
    const nextFrame = 1000 / fps;
    let timer = 0;
    function animate(timeStamp) {
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;
      if (timer > nextFrame) {
        ctx.fillStyle = `rgba(0, 0, 0, 0.05)`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // ctx.fillStyle = gradient;
        ctx.fillStyle = "#00ff41";
        ctx.font = effect.fontSize + "px monospace";
        effect.symbols.forEach((symbol) => symbol.draw(ctx));
        timer = 0;
      } else timer += deltaTime;
      requestAnimationFrame(animate);
    }
    animate(0);
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      effect.resize(canvas.width, canvas.height);
    });
  }, []);

  return <canvas ref={canvasRef} className="canvas" />;
};

export default MatrixRain;
