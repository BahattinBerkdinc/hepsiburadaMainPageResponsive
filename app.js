function resimDegistir(resimSrc) {
    document.getElementById("mainProdeImage").src = resimSrc;

    switch (resimSrc) {
        case 'images/prodLarge/annelerGunu.jpeg':
            title.innerText = 'Milyonlarca hediye';
            Subtitle.innerText = 'hergun yenilenen indirimlerle';
            break;
        case 'images/prodLarge/acar.jpeg':
            title.innerText = 'Acar sofra ve sunum ürünlerinde';
            Subtitle.innerText = 'sepette %15 indirim';
            break;
        case 'images/prodLarge/koton.jpeg':
            title.innerText = 'Koton ürünlerinde';
            Subtitle.innerText = "sepette %70'e varan indirim";
            break;
        case 'images/prodLarge/parfume.jpeg':
            title.innerText = 'Çok beğenilen parfümlerde';
            Subtitle.innerHTML = "inanılmaz <br> fırsatlar";
            break;
        case 'images/prodLarge/karaca.jpeg':
            title.innerText = 'Karaca mutfak ürünlerinde';
            Subtitle.innerHTML = "aradığın <br> fırsatlar";
            break;
        case 'images/prodLarge/ipekyol.jpeg':
            title.innerText = 'İpekyol ve Twist ürünlerinde';
            Subtitle.innerText = "2.500 TL'ye 500 TL indirim";
            break;
        case 'images/prodLarge/xiomi.jpeg':
            title.innerText = 'Robot süpürgelerde';
            Subtitle.innerHTML = "beklenen <br> fırsatlar";
            break;
        case 'images/prodLarge/tv.jpeg':
            title.innerText = 'Teknolojik annelere özel tabletlerde';
            Subtitle.innerHTML = "büyük <br> fırsatlar";
            break;
        case 'images/prodLarge/maxifry.jpeg':
            title.innerText = 'Popüler airfryer’larda';
            Subtitle.innerHTML = "inanılmaz <br> fiyatlar";
            break;
        case 'images/prodLarge/maru.jpeg':
            title.innerText = 'Maruderm cilt bakım ürünlerinde';
            Subtitle.innerText = "sepette %30 indirim";
            break;
        case 'images/prodLarge/tost.jpeg':
            title.innerText = 'Süper tost makinelerinde';
            Subtitle.innerHTML = "büyük <br> fırsatlar";
            break;
        case 'images/prodLarge/columbia.jpeg':
            title.innerText = 'Columbia ürünlerinde';
            Subtitle.innerHTML = "özel <br> fırsatlar";
            break;
        default:
            title.innerText = 'Ürün bulunamadı';
            Subtitle.innerText = '';
    }
}


const title = document.getElementById('fbodyTitle')
console.log(title);
const Subtitle = document.getElementById('fbodySubtitle')
console.log(Subtitle);

const secilenImg = document.getElementById('mainProdeImage')
console.log(secilenImg);



// footer description

var moreBtn = document.getElementById("more");
var lessBtn = document.getElementById("less");
var hiddenParagraphs = document.querySelectorAll("#footerdesc p:not(:first-of-type)");

moreBtn.addEventListener("click", function () {
    for (var i = 0; i < hiddenParagraphs.length; i++) {
        hiddenParagraphs[i].style.display = "block";
    }
    moreBtn.style.display = "none";
});

lessBtn.addEventListener("click", function () {
    for (var i = 0; i < hiddenParagraphs.length; i++) {
        hiddenParagraphs[i].style.display = "none";
    }
    moreBtn.style.display = "block";
});
