
// let ogr1_ad = "Ada";
// let ogr1_soyad = "Bilgi";
// let ogr1_dogumTarihi = "2012";
// let ogr1_mat1 = 70;
// let ogr1_mat2 = 70;
// let ogr1_mat3 = 80;
// let ogr1_ortalama = (ogr1_mat1 + ogr1_mat2 + ogr1_mat3) / 3 ;
// console.log(parseInt(ogr1_ortalama));
// console.log(ogr1_ortalama >= 50);


// let ogr2_ad = "Yiğit";
// let ogr2_soyad = "Bilgi";
// let ogr2_dogumTarihi = "2010";
// let ogr2_mat1 = 40;
// let ogr2_mat2 = 40;
// let ogr2_mat3 = 50;
// let ogr2_ortalama = (ogr2_mat1 + ogr2_mat2 + ogr2_mat3) / 3 ;
// console.log(parseFloat(ogr2_ortalama));
// console.log(ogr2_ortalama >= 50);


// let suankiYil = new Date().getFullYear();

// let ogr1_yas = suankiYil - parseInt(ogr1_dogumTarihi);
// let ogr2_yas = suankiYil - parseInt(ogr1_dogumTarihi);
// console.log(ogr1_yas);


//1
// let sayi = 9;

// if (sayi<50 && sayi>10) {
//     console.log("Sayi 10-50 arasındadır.");
// }
// else {
//     console.log("Sayi 10-50 arasında değildir.");
// }

// if (sayi>=0 && sayi%2 == 1) {
//         console.log("Sayi pozitif tek sayıdır.");
// }
// else {
//     console.log("Sayi pozitif tek sayı değildir.");
// }
// //2
// let x =3;
// let y =4;
// let z =5;

// if(x>y && x>z){
//     console.log("X en büyük sayı.");
// }
// else if (y>x && y>z) {
//     console.log("Y en büyük sayı.");
// }
// else if  (z>x && z>y) {
//     console.log("Z en büyük sayı.");
// } else {
//     console.log("Sayılar eşittir.");

// }
// //3
// let vize1 = 50;
// let vize2 = 60;
// let final = 50;

// let ortalama= (((vize1 + vize2 )/2) * .4 )+ (final * .6) ;

// console.log("Ortalamanız:" + ortalama);
// //a
// if(ortalama >= 50){
//     console.log("Geçtiniz.");
// }
// else{
//     console.log("Kaldınız.");
// }
// //b
// if(ortalama >= 50 && final>= 50){
//     console.log("Geçtiniz.");
// }
// else{
//     console.log("Kaldınız.");
// }
// //c
// if(ortalama >= 50 || final>= 70){
//     console.log("Geçtiniz.");
// }
// else{
//     console.log("Kaldınız.");
// }
// let ad = "beyza";
// let soyad = "ünal";
// let yas = 24;
// let sehir = "Düzce";
// let mesaj ;
// //alt , => backtick
// mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. Emekliliğe ${65- yas} yılım kaldı.`;
// console.log(mesaj);

// let emeklilik = (65 - yas > 0) ? "Emekliliğe " + (65 - yas) + " yıl kaldı." : "Zaten emekli oldunuz.";


// let url = "https://wwww.sadikturan.com/";
// let kursadi = "Komple web geliştirme kursu";
// var sonuc;
// //1
// sonuc= url.length;

// sonuc = kursadi.split(" ").length;

// sonuc = url.startsWith("https");

// sonuc = kursadi.indexOf("Eğitimi");


// kursadi = kursadi.toLowerCase();
// kursadi = kursadi.replaceAll(" ", "-");
// //https://wwww.sadikturan.com//komple-web-geliştirme-kursu
// kursadi = kursadi.replaceAll("ş","s").replaceAll("ı","i");
// //https://wwww.sadikturan.com//komple-web-gelistirme-kursu
// sonuc = `${url}/${kursadi}`;

// console.log(sonuc);

// let sonuc;
// sonuc= parseInt("10a");

// sonuc = isNaN("10a"); //sayısal bir değer değil dimi

// let sayi = 15.123456;
// sonuc = sayi.toPrecision(5);
// // string
// // 15.123
// sonuc = sayi.toFixed(5);
// // string
// // 15.12346
// sonuc = Math.round(2.4);//2'ye yuvarlar en yakın
// sonuc = Math.ceil(2.4);//3'e yuvarlar üste
// sonuc = Math.floor(2.4);//2'e yuvarlar aşağı
// sonuc = Math.sqrt(25); // karekökü
// sonuc = Math.pow(2,3); // 2 üzeri 3
// sonuc = Math.abs(-10); // mutlak değer 10
// sonuc = Math.random() * 10; // 0- 9 arası random sayı
// sonuc = Math.floor(Math.random() * 100) +1; //1-100 arası sayı




// console.log(typeof sonuc);
// console.log(sonuc);

// let simdi = new Date(); //şimdiki Tarih - saat

// // Get Methods
// sonuc = simdi;
// sonuc =simdi.getDate(); // gün (10.gün)
// sonuc = simdi.getDay(); // 0: Pazar 6: cumartesi
// sonuc = simdi.getFullYear(); //yıl
// sonuc = simdi.getHours(); //saat
// sonuc = simdi.getTime(); //millisecond tründen saat bilgisi

// //Set Methods
// simdi.setFullYear(2025);
// simdi.setMonth(7);
// simdi.setDate(15);
// sonuc = simdi;

// let dogumTarihi = new Date(1990, 5, 15);

// sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

// let milisecond =simdi - dogumTarihi;
// let saniye = milisecond /1000; //saniye
// let dakika = saniye / 60; //dakika
// let saat = dakika / 60; //saat
// let gun = saat / 24; //gün
// sonuc = gun;

// console.log(sonuc);
// console.log(typeof sonuc);

// let ogrenciler = ["çınar", "yiğit", "ada"];
// sonuc =ogrenciler.length;

// sonuc = ogrenciler.toString();
// sonuc = ogrenciler.join(" ");

// sonuc = ogrenciler.pop(); //son eleman silinir
// sonuc = ogrenciler.shift();//ilk eleman silinir.

// sonuc = ogrenciler.push("sena"); //dizinin sonuna eleman eklenir.

// sonuc = ogrenciler.unshift("sena");
// let markalar1 = ["mazda", "toyota"];
// let markalar2 = ["opel", "renault"];
// let markalar3 = ["mercedes"];

// // sonuc = markalar1.concat(markalar2, markalar3);
// // sonuc = markalar1.splice(0, 1, "bmw","audi");
// sonuc = markalar1.splice(0, 1);

// console.log(sonuc);
// console.log(markalar1);


// let meyveler = ["Elma", "Armut", "Muz", "Çilek"];

// sonuc = meyveler.length; // 4
// sonuc = meyveler[0] +" " + meyveler[meyveler.length-1]; //elma çilek

// if (meyveler.indexOf("Elma") > -1) {
//     console.log("Elme dizinin bir elemanıdır.");
// }else {
//     console.log("Değildir");
// }
// console.log(meyveler.includes("Elma")); //indexof benzer


// sonuc= meyveler.push("Kiraz");
// sonuc = meyveler.splice(meyveler.length-2, 2); // son iki elemanın siler
// console.log(meyveler);

// let ogr1 = ["Yiğit", "Bilgi", 2010, [70, 60, 80]];
// let ogr2 = ["Ada", "Bilgi", 2012, [80, 80, 90]];
// let ogr3 = ["Ahmet", "Turan", 2009, [60, 60, 80]];

// let simdi = new Date();
// yas1 = simdi.getFullYear() - ogr1[2];
// yas2 = simdi.getFullYear() - ogr2[2];
// yas3 = simdi.getFullYear() - ogr3[2];

// console.log(yas1 + " " + yas2 + " " + yas3);

// let ortalama1 = (ogr1[3][0] + ogr1[3][1] + ogr1[3][2]) / ogr1[3].length;
// let ortalama2 = (ogr2[3][0] + ogr2[3][1] + ogr2[3][2]) / ogr2[3].length;
// let ortalama3 = (ogr3[3][0] + ogr3[3][1] + ogr3[3][2]) / ogr3[3].length;

// console.log(parseInt(ortalama1) + " " + parseInt(ortalama2) + " " + parseInt(ortalama3));



// //json
// let user1 = {
//     "name": "Beyza",
//     "last": "ÜNAL",
//     "age": 24,
//     "adress": {
//         "city": "Bursa",
//         "town": "Nilüfer"
//     },
//     "hobbies": ["Cinema", "Sport"]
// }
// let user2 = {
//     "name": "Yaşar",
//     "last": "ÜNAL",
//     "age": 25,
//     "adress": {
//         "city": "Bursa",
//         "town": "Nilüfer"
//     },
//     "hobbies": ["Cinema", "Sport"]
// }

// let sonuc;

// sonuc = user1.name;
// sonuc = user1.adress.city;
// sonuc = user1.adress.town;
// sonuc = user1.hobbies[0];

// let users = [
//     user1,
//     user2
// ];
// sonuc = users[1].name;

// let urunler = [
//     {
//         "urun_adi": "samsung s22",
//         "urun_fiyat": 13000
//     },
//     {
//         "urun_adi": "samsung s23",
//         "urun_fiyat": 15000
//     }
// ]

// sonuc = urunler[0].urun_adi;

// console.log(sonuc);

// OBJECT

// let siparis_1 = {
//     "siparis_id": 101,
//     "siparis_tarih": "30.12.2022",
//     "odeme_sekli": "Kredi kartı",
//     "kargo_adres": {
//         "mahalle": "Yahya kaptan mah", 
//         "ilce": "İzmit",
//          "sehir":" Kocaeli"
//         },
//     "urunler": [
//         {
//         "urun_id": 5,
//         "urun_basligi": "Iphone 13 Pro",
//         "urun_url": "http://abc.com/iphone-13-pro",
//         "urun_fiyat": 220000
//         },
//         {
//             "urun_id": 6,
//             "urun_basligi": "Iphone 13 Pro Max",
//             "urun_url": "http://abc.com/iphone-13-pro-max",
//             "urun_fiyat": 250000
//          } 
             
//     ],
//     "musteri": {
//         "musteri_id": 12
//     },
//     "satici": {
//         "firma_id": 34,
//         "firma_adi": "Apple Türkiye"
//     }

// };
// let siparis_2 = {
//     "siparis_id": 102,
//     "siparis_tarih": "30.12.2022",
//     "odeme_sekli": "Kredi kartı",
//     "kargo_adres": {
//         "mahalle": "Yahya kaptan mah", 
//         "ilce": "İzmit",
//          "sehir":" Kocaeli"
//         },
//     "urunler": [
       
//         {
//             "urun_id": 6,
//             "urun_basligi": "Iphone 13 Pro Max",
//             "urun_url": "http://abc.com/iphone-13-pro-max",
//             "urun_fiyat": 250000
//          } 
             
//     ],
//     "musteri": {
//         "musteri_id": 12
//     },
//     "satici": {
//         "firma_id": 34,
//         "firma_adi": "Apple Türkiye"
//     }

// };

// let siparisler = [siparis_1, siparis_2];

// let toplam1 = (siparis_1.urunler[0].urun_fiyat + siparis_1.urunler[1].urun_fiyat) * 1.18;
// let toplam2 = siparis_2.urunler[0].urun_fiyat  * 1.18;

// let toplam_siparis = toplam1 + toplam2;

// console.log("Sipariş 1: " +toplam1);
// console.log("Sipariş 2: " +toplam2);
// console.log("Toplam ödenen miktar : " +toplam_siparis);





//option2

// // "urunler": {
// //     "5": {
// //         "urun_adi": "Iphone 13 Pro",
// //         "urun_url": "http://abc.com/iphone-13-pro",
// //         "urun_fiyat": 220000
// //     },
// //     "6":
// //     {
// //         "urun_id": 6,
// //         "urun_basligi": "Iphone 13 Pro Max",
// //         "urun_url": "http://abc.com/iphone-13-pro-max",
// //         "urun_fiyat": 250000
// //      }  
// // }


// let sayilar = [1,5,7,15,3,25];
// let toplam = 0;
// for(let i in sayilar) {
//     console.log(sayilar[i]* sayilar[i]);
// }

// for (let i in sayilar) {
//     if (sayilar[i] % 5 == 0)
//         console.log(sayilar[i]);
// }
// for (let i in sayilar) {
//     if (sayilar[i] % 2 == 0)
//         toplam += sayilar[i];
//         console.log("toplam: " + toplam);
// }


// let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];
// let sayac = 0;

// for (let i in urunler) {
//     console.log(urunler[i].toUpperCase());
// }
// for (let i of urunler) {
//    if(i.includes("samsung"))
//         sayac++;     
// }
// console.log(sayac);


// let ogrenciler = [
//     {"ad":"yiğit", "soyad":"bilgi", "notlar": [60,70,60]},
//     {"ad":"ada", "soyad":"bilgi", "notlar": [80,70,80]},
//     {"ad":"ahmet", "soyad":"turan", "notlar": [70,70,60]}
// ];

// for(let ogrenci of ogrenciler){
//     let not_toplam = 0, ortalama = 0, adet= 0 ;
//     for(let not of ogrenci.notlar) {
//         not_toplam += not;
//         adet++;
//     }
//     ortalama = not_toplam / adet;
//     console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli öğrencinin not ortalaması: ${ortalama}. `);
//     if(ortalama >= 50) {
//         console.log("başarılı.");
//     }else {
//         console.log("başarısız");
//     }
// }

//kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyon
function tekrarla(kelime,tekrar){
    for(let i =0; i<tekrar; i++){
        console.log(kelime);
    }
}

tekrarla("beyza",5);

//dikdörtgenin alan ve çevresini hesaplayan fonksiyon

// function dikdortgen_alan_cevre(uzunkenar,kısakenar){
//     let alan=0; 
//     let cevre=0;
//      alan = uzunkenar * kısakenar;
//      cevre = (uzunkenar+kısakenar)*2;
//      return `alan: ${alan} çevre: ${cevre}`;
// }

// console.log(dikdortgen_alan_cevre(20,10));


// function yazi_tura(){
//     let random = Math.random(); //0-1
//     if(random < 0.5)
//         console.log("yazı");
//     else    
//         console.log("tura");
// }
// yazi_tura();


// function tambolen(sayi){
//     let sayilar = [];

//     for(let i=2; i<sayi; i++){
//         if(sayi %i == 0) {
//             sayilar.push(i);
//         }
//     }

//     return sayilar;
// }

// console.log(tambolen(100));

// function toplam() {
//     let sonuc = 0;

//     for(let i = 0; i < arguments.length; i++){
//         sonuc += arguments[i];
//     }
//     return sonuc;
// }

// console.log(toplam(2,3,4,5));

var isim = "ahmet"; //global scope
const adres = "istanbul";

//adres = "kocaeli" //değiştirilemez const değişkeni
function yazdir(){
    var isim = "ayşe";
    console.log("function scope: ",isim);
}

if(true){
    let cinsiyet = "kadın"; //tanımlanmadı hataso alınır 
    var isim = "zeynep" //var keyword global
    console.log(isim);
}

yazdir();
console.log(isim);

//fonksiyonlar kendi scope alanlarını oluşturur.
//block içerisinde yeni bir scope oluşmaz.(let,const)
