import p1_img from "./product1.jpg";
import p2_img from "./product2.jpg";
import p3_img from "./product3.jpg";
import p4_img from "./product4.jpg";
import p5_img from "./product5.jpg";
import p6_img from "./product6.jpg";
import p7_img from "./product7.jpg";
import p8_img from "./product8.jpg";
import p9_img from "./product9.jpg";
import p10_img from "./product10.jpg";
import p11_img from "./product11.jpg";
import p12_img from "./product12.jpg";
import p13_img from "./product13.jpg";
import p14_img from "./product14.jpg";
import p15_img from "./product15.jpg";
import p16_img from "./product16.jpg";
import p17_img from "./product17.jpg";
import p18_img from "./product18.jpg";
import p19_img from "./product19.jpg";
import p20_img from "./product20.jpg";
import p21_img from "./product21.jpg";
import p22_img from "./product22.jpg";
import p23_img from "./product23.jpg";
import p24_img from "./product24.jpg";
import p25_img from "./product25.jpg";
import p26_img from "./product26.jpg";
import p27_img from "./product27.jpg";
let all_product = [
    {
        id: 1,
        name: "ALANIA : ALANIA PURETE+ VITAMINE C SERUM DUO JOUR ET NUIT",
        category: "SoinVisage",
        image : p1_img,
        new_price: 70.991,
        old_price: 88.739
    },
    {
        id: 2,
        name: "ALANIA : ALANIA CREME HYDRATANTE SPF 30 50ML",
        category: "SoinVisage",
        image: p2_img,
        new_price: 51.653,
        old_price:57.392
    },
    {
        id: 3,
        name: "ALANIA : ALANIA PACK HYDRA PROTECT",
        category: "SoinVisage",
        image: p3_img,
        new_price: 98.818,
        old_price:116.256
    },
    {
        id: 4,
        name: "A-DERMA : A-DERMA CREME UNIVERSELLE HYDRATANTE 50ML",
        category: "SoinVisage",
        image: p4_img,
        new_price: 33.777,
        old_price:37.392
    },
    {
        id: 5,
        name: "URIAGE : URIAGE HYSEAC GEL NETTOYANT 150ML",
        category: "SoinVisage",
        image: p5_img,
        new_price: 26.400,
        old_price:33.000
    },
    {
        id: 6,
        name: "ASEPTA : VITA CITRAL TR BAUME A LEVRES 15ML",
        category: "SoinVisage",
        image: p6_img,
        new_price: 17.707,
        old_price:19.392
    },
    {
    id: 7,
    name: "ISDIN : ISDIN PHOTOPROTECTION ECRAN FUSION WATER MAGIC...",
    category: "SoinVisage",
    image: p7_img,
    new_price: 55.835 ,
    old_price: 69.794 
},
{
    id: 8,
    name: "SVR : SVR SUN SECURE ECRAN MINERAL TEINTE PEAUX...",
    category: "SoinVisage",
    image: p8_img,
    new_price: 51.535,
    old_price:68.713
},
{
    id: 10,
    name: "FRANCK OLIVIER, Nature,Déodorant",
    category: "parfum",
    image: p10_img,
    new_price: 18,
    old_price:23
},
{
    id: 11,
    name: "CLARINS : Roll-On Anti-Transpirant,Déodorant",
    category: "parfum",
    image: p11_img,
    new_price: 76,
    old_price:85
},
{
    id: 12,
    name: "FRANCK OLIVIER : White Touch,Déodorant",
    category: "parfum",
    image: p12_img,
    new_price: 18,
    old_price:23
},
{
    id: 13,
    name: "CARVEN : Dans Ma Bulle Eau De Toilette,Déodorant",
    category: "parfum",
    image: p13_img,
    new_price: 40.800,
    old_price:102
},
{
    id: 14,
    name: "WOMEN'SECRET : Eau My Secret, Eau de toilette",
    category: "parfum",
    image: p14_img,
    new_price: 101,
    old_price: 150
},
{
    id: 15,
    name: "WOMEN'SECRET : Eau My Delice ,Eau de toilette",
    category: "parfum",
    image: p15_img,
    new_price: 101,
    old_price:150
},
{
    id: 16,
    name: "CARVEN : Carven C'est Paris ! ,Déodorant",
    category: "parfum",
    image: p16_img,
    new_price: 39.600,
    old_price: 99
},
{
    id: 17,
    name: "WOMEN'SECRET :  Gold Seduction ,Eau de parfum",
    category: "parfum",
    image: p17_img,
    new_price: 120,
    old_price:150
},
{
    id: 19,
    name: "Azal : AZAL ROUGE A LEVRES 'THE LIP STICK'",
    category: "maquillage",
    image: p19_img,
    new_price: 9.900,
    old_price:15
},
{
    id: 20,
    name: "TOPFACE : TOPFACE INSTYLE CREAMY LIPSTICK",
    category: "maquillage",
    image: p20_img,
    new_price: 17.171,
    old_price:24.530
},
{
    id: 21,
    name: "Azal : AZAL FOND DE TEINT 'HEALTHY MOOD' 30ML",
    category: "maquillage",
    image: p21_img,
    new_price: 18.900,
    old_price:25
},
{
    id: 22,
    name: "EYE CARE : EYE CARE PINCEAU ANTI-CERNES",
    category: "maquillage",
    image: p22_img,
    new_price: 52.528,
    old_price:60
},
{
    id: 23,
    name: "EYE CARE : EYE CARE EYELINER LIQUIDE 5G",
    category: "maquillage",
    image: p23_img,
    new_price: 46.200,
    old_price:55
},
{
    id: 24,
    name: "GOLDEN ROSE : GOLDEN ROSE LONG STAY LIQUID MATTE LIPSTICK...",
    category: "maquillage",
    image: p24_img,
    new_price: 26.788,
    old_price:29.764
},
{
    id: 25,
    name: "EYE CARE : EYE CARE MASCARA HAUTE TOLERANCE 9G",
    category: "maquillage",
    image: p25_img,
    new_price: 48.160,
    old_price:60
},
{
    id: 26,
    name: "EYE CARE : EYE CARE FOND DE TEINT CREME SPF 25",
    category: "maquillage",
    image: p26_img,
    new_price: 60.404 ,
    old_price:70,
},

]
export default all_product 

