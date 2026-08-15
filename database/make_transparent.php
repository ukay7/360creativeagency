<?php

$src = __DIR__ . '/../public/assets/imgs/logo.png';
if (!file_exists($src)) {
    die("File not found\n");
}

$im = imagecreatefrompng($src);
$width = imagesx($im);
$height = imagesy($im);

$newImg = imagecreatetruecolor($width, $height);
imagealphablending($newImg, false);
imagesavealpha($newImg, true);

$transparent = imagecolorallocatealpha($newImg, 0, 0, 0, 127);
imagefill($newImg, 0, 0, $transparent);

for ($x = 0; $x < $width; $x++) {
    for ($y = 0; $y < $height; $y++) {
        $rgb = imagecolorat($im, $x, $y);
        $r = ($rgb >> 16) & 0xFF;
        $g = ($rgb >> 8) & 0xFF;
        $b = $rgb & 0xFF;
        $alpha = ($rgb >> 24) & 0x7F;

        // If the pixel is near-white (background of original image), make it fully transparent
        if ($r > 230 && $g > 230 && $b > 230) {
            imagesetpixel($newImg, $x, $y, $transparent);
        } else {
            $color = imagecolorallocatealpha($newImg, $r, $g, $b, $alpha);
            imagesetpixel($newImg, $x, $y, $color);
        }
    }
}

imagepng($newImg, $src);
imagepng($newImg, __DIR__ . '/../public/assets/imgs/template/logo/favicon.svg');
imagedestroy($im);
imagedestroy($newImg);

echo "Transparent logo generated successfully!\n";
