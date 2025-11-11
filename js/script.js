  // Random star placement generator
  const starContainer = document.getElementById("stars");
  const numStars = 60;
  const moonArea = { x: 50, y: 50, r: 120 }; // avoid center area

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.className = "star";

    // random position, avoiding moon circle area
    let x, y, distance;
    do {
      x = Math.random() * 100;
      y = Math.random() * 100;
      const dx = x - 50;
      const dy = y - 50;
      distance = Math.sqrt(dx * dx + dy * dy);
    } while (distance < 25); // no stars behind the moon

    star.style.left = x + "%";
    star.style.top = y + "%";
    star.style.width = (Math.random() * 2 + 1) + "px";
    star.style.height = star.style.width;
    star.style.animationDuration = (2 + Math.random() * 3) + "s";
    star.style.opacity = 0.2 + Math.random() * 0.6;

    starContainer.appendChild(star);
  }