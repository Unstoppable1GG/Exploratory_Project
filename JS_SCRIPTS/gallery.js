let case_1 = document.getElementsByClassName("pic1");
let case_2 = document.getElementsByClassName("pic2");
let case_3 = document.getElementsByClassName("pic3");
let case_4 = document.getElementsByClassName("pic4");

let set1_of_img = ["/pngs/gallery/Original-16836-2-mclaren-w1-rear-3q-high.jpg","/pngs/gallery/Original-16776-7-mclaren-artura-gt4-drivers-took-third-and-third-places-in-the-gt4-class-photo-credit-british-gt.jpg","/pngs/gallery/Original-16583-WECBrazil1.jpg"]
let set2_of_img = ["/pngs/gallery/Original-16779-4-the-mclaren-gt3-evos-of-buncombe-and-caygill-and-clutton-and-tillbrook-head-the-race-at-the-start.jpg","/pngs/gallery/Original-16820-18-mclaren-w1-interior-dash.jpg","/pngs/gallery/Original-16678-McLaren750SVolcanoRedMSOContrastPackinterior.jpg"]
let set3_of_img = ["/pngs/gallery/Original-16783-1-mclaren-artura-gt4-pairing-jack-brown-and-zac-meakin-are-british-gt-champions-photo-credit-british-gt.jpg","/pngs/gallery/Original-16835-3-mclaren-w1-high-front-doors-open.jpg","/pngs/gallery/Original-16712-lando-norris-takes-on-silverstone-circuit-in-a-life-size-lego-technic-mclaren-p1-5.jpg"]
let set4_of_img = ["/pngs/gallery/Original-16739-1-wec-fuji.jpg","/pngs/gallery/Original-16837-1-mclaren-w1-front-3q-high.jpg","/pngs/gallery/Original-16728-mclaren-gts-uae-041.jpg"]



function slider() {
    for (let i = 0; i < case_1.length; i++) {
        case_1.src = set1_of_img[i]
        case_2.src = set2_of_img[i]
        case_3.src = set3_of_img[i]
        case_4.src = set4_of_img[i]
    }
}

setInterval(slider, 1000);