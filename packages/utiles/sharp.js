const sharp = require("sharp");

sharp("vigilante.png")
    .resize(80)
    .grayscale()
    .toFile("resized.png");