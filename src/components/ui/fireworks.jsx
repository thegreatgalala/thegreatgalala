import React, { useEffect, useRef } from "react";

// Firework animation settings
const PARTICLES_PER_FIREWORK = 270;
const FIREWORK_CHANCE = 0.002;
const BASE_PARTICLE_SPEED = 0.6;
const FIREWORK_LIFESPAN = 300;
const PARTICLE_INITIAL_SPEED = 1.8;
const GRAVITY = 9.8;

const Fireworks = () => {
  const canvasRef = useRef(null);
  let particles = [];
  let disableAutoFireworks = false;
  let resetDisable = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    const loop = () => {
      if (!disableAutoFireworks && Math.random() < FIREWORK_CHANCE) {
        createFirework();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.animate();
        particle.render();
        if (
          particle.y > canvas.height ||
          particle.x < 0 ||
          particle.x > canvas.width ||
          particle.alpha <= 0
        ) {
          particles.splice(i, 1);
        }
      });

      requestAnimationFrame(loop);
    };

    class Particle {
      constructor(x, y, red, green, blue, speed, isFixedSpeed) {
        this.x = x;
        this.y = y;
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = 0.05;
        this.radius = 1 + Math.random();
        this.angle = Math.random() * 360;
        this.speed = Math.random() * speed + 0.1;
        this.velocityX = Math.cos(this.angle) * this.speed;
        this.velocityY = Math.sin(this.angle) * this.speed;
        this.startTime = new Date().getTime();
        this.duration = Math.random() * 300 + FIREWORK_LIFESPAN;
        this.currentDuration = 0;
        this.dampening = 30;

        if (isFixedSpeed) {
          this.speed = speed;
          this.velocityY = Math.sin(this.angle) * this.speed;
          this.velocityX = Math.cos(this.angle) * this.speed;
        }

        this.initialVelocityX = this.velocityX;
        this.initialVelocityY = this.velocityY;
      }

      animate() {
        this.currentDuration = new Date().getTime() - this.startTime;

        if (this.currentDuration <= 200) {
          this.x += this.initialVelocityX * PARTICLE_INITIAL_SPEED;
          this.y += this.initialVelocityY * PARTICLE_INITIAL_SPEED;
          this.alpha += 0.01;
        } else {
          this.x += this.velocityX;
          this.y += this.velocityY;
        }

        this.velocityY += GRAVITY / 1000;

        if (this.currentDuration >= this.duration) {
          this.velocityX -= this.velocityX / this.dampening;
          this.velocityY -= this.velocityY / this.dampening;
        }

        if (this.currentDuration >= this.duration + this.duration / 1.1) {
          this.alpha -= 0.02;
        } else {
          if (this.alpha < 1) {
            this.alpha += 0.03;
          }
        }
      }

      render() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fillStyle = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${this.red + 150}, ${this.green + 150}, ${
          this.blue + 150
        }, 1)`;
        ctx.fill();
      }
    }

    const createFirework = (
      x = Math.random() * canvas.width,
      y = Math.random() * canvas.height
    ) => {
      let speed = Math.random() * 2 + BASE_PARTICLE_SPEED;
      let maxSpeed = speed;

      let red = ~~(Math.random() * 255);
      let green = ~~(Math.random() * 255);
      let blue = ~~(Math.random() * 255);

      red = red < 150 ? red + 150 : red;
      green = green < 150 ? green + 150 : green;
      blue = blue < 150 ? blue + 150 : blue;

      for (let i = 0; i < PARTICLES_PER_FIREWORK; i++) {
        let particle = new Particle(x, y, red, green, blue, speed);
        particles.push(particle);
        maxSpeed = speed > maxSpeed ? speed : maxSpeed;
      }

      for (let i = 0; i < 40; i++) {
        let particle = new Particle(x, y, red, green, blue, maxSpeed, true);
        particles.push(particle);
      }
    };

    const handleCanvasClick = (e) => {
      createFirework(e.clientX, e.clientY);
      disableAutoFireworks = true;
      clearTimeout(resetDisable);
      resetDisable = setTimeout(() => {
        disableAutoFireworks = false;
      }, 5000);
    };

    canvas.addEventListener("click", handleCanvasClick);
    loop();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      canvas.removeEventListener("click", handleCanvasClick);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full    " />
  );
};

export default Fireworks;
