import cevicheIMG from "./images/ceviche.jpg";
import anticuchoIMG from "./images/anticucho.jpg";
import lomoSaltadoIMG from  "./images/lomoSaltado.jpg"; 
import ajiDeGallinaIMG from "./images/ajiDeGallina.jpg";

export default function pageLoad()
{
    const content= document.getElementById("content")

    const dish0= document.createElement("div");
    dish0.classList.add("dish");
    content.appendChild(dish0);

    const title0 = document.createElement("h1");
    title0.textContent = "Ceviche";
    dish0.appendChild(title0);

    const img1 = new Image();
    img1.src = cevicheIMG;
    img1.alt = "Ceviche";
    dish0.appendChild(img1);
    
    const texto = document.createElement("p");
    texto.textContent = "Peru’s daytime icon: ultra-fresh white fish (often corvina or sea bass) cut into bite-size cubes and “cooked” not by heat but by the acid of just-squeezed lime. It sits briefly in leche de tigre—a zippy marinade of lime juice, fish juices, ají limo or rocoto, red onion, cilantro, and a touch of salt—so the surface firms while the center stays silky. Crisp onion slices add bite, cilantro lifts the aroma, and the chiles bring a clean, fruity heat. It’s always balanced with sweet, cool sides: steamed camote (sweet potato), giant-kernel choclo, and crunchy cancha corn. The ideal ceviche is made to order (never marinated for long), bright and bracing, the liquid good enough to sip from the spoon. ";
    dish0.appendChild(texto);
// 
    const dish1= document.createElement("div");
    dish1.classList.add("dish");
    content.appendChild(dish1);

    const title1 = document.createElement("h1");
    title1.textContent = "Chaufa";
    dish1.appendChild(title1);

    const img2 = new Image();
    img2.src = anticuchoIMG;
    img2.alt = "anticucho";
    dish1.appendChild(img2);
    
    const texto1 = document.createElement("p");
    texto1.textContent = "Peru’s daytime icon: ultra-fresh white fish (often corvina or sea bass) cut into bite-size cubes and “cooked” not by heat but by the acid of just-squeezed lime. It sits briefly in leche de tigre—a zippy marinade of lime juice, fish juices, ají limo or rocoto, red onion, cilantro, and a touch of salt—so the surface firms while the center stays silky. Crisp onion slices add bite, cilantro lifts the aroma, and the chiles bring a clean, fruity heat. It’s always balanced with sweet, cool sides: steamed camote (sweet potato), giant-kernel choclo, and crunchy cancha corn. The ideal ceviche is made to order (never marinated for long), bright and bracing, the liquid good enough to sip from the spoon. ";
    dish1.appendChild(texto1);

//  
    const dish2= document.createElement("div");
    dish2.classList.add("dish");
    content.appendChild(dish2);

    const title2 = document.createElement("h1");
    title2.textContent = "Lomo Saltado";
    dish2.appendChild(title2);

    const img3 = new Image();
    img3.src = lomoSaltadoIMG;
    img3.alt = "lomoSaltado";
    dish2.appendChild(img3);
    
    const texto2 = document.createElement("p");
    texto2.textContent = "A beloved chifa (Chinese-Peruvian) stir-fry that captures wok fire and comfort in one plate. Thin strips of beef sear quickly in a screaming-hot wok for smoky wok hei, then tumble with red onion petals, tomato wedges, and a sauce of soy, a splash of vinegar, and sometimes a hint of oyster sauce or pisco. The magic is contrast: charred edges, juicy vegetables, and a glossy, savory gravy that begs to be soaked up. French fries get tossed right in so they absorb the sauce while staying a little crisp. It’s served with white rice on the side (or under), making every bite a mix of beef, fry, tomato, and rice—sweet-savory, tangy, and deeply satisfying. lices add bite, cilantro lifts the aroma, and the chiles bring a clean, fruity heat. It’s always balanced with sweet, cool sides: steamed camote (sweet potato), giant-kernel choclo, and crunchy cancha corn. The ideal ceviche is made to order (never marinated for long), bright and bracing, the liquid good enough to sip from the spoon. ";
    dish2.appendChild(texto2);
//
    const dish3 = document.createElement("div");
    dish3.classList.add("dish");
    content.appendChild(dish3);

    const title3 = document.createElement("h1");
    title3.textContent = "Ají de Gallina";
    dish3.appendChild(title3);

    const img4 = new Image();
    img4.src = ajiDeGallinaIMG;
    img4.alt = "ajiDeGallina";
    dish3.appendChild(img4);

    const texto3 = document.createElement("p");
    texto3.textContent = "Comfort food in a bowl: shredded chicken bathed in a velvety, sunshine-yellow sauce built on ají amarillo chiles (fruity, gently spicy), milk, and cheese, thickened with bread or soda crackers. A soffritto of onion and garlic lays the base; walnuts or pecans sometimes sneak in for richness. The sauce is blended smooth, then the chicken simmers in it until everything tastes like it belongs together. Traditionally plated with white rice and tender potato rounds, then garnished with black olives and slices of hard-boiled egg. It’s mild enough for kids but layered with flavor; the kind of dish that reheats beautifully and tastes even better the next day.";
    dish3.appendChild(texto3);



    
}