export default function about(){
    const content = document.getElementById("content");
    const newContent = document.createElement("div");
    content.appendChild(newContent);
    newContent.id = "about";
    
    const header1 = document.createElement("h1");
    header1.textContent = "About";
    newContent.appendChild(header1);

    const text = document.createElement("p");
    text.textContent = `Welcome to our restaurant, where every plate tells the story of Peru.
    From the fresh ceviche of the coast to the hearty stews of the Andes,
    our mission is to bring the vibrant flavors of Peruvian cuisine to your table.
    We believe food is more than a meal—it’s culture, tradition, and connection.    Using only the freshest ingredients and authentic recipes, 
    we blend tradition with modern dining to create a unique culinary experience. 
    Whether it’s your first taste of Peru or a comforting reminder of home, 
    we’re here to share the warmth, passion, and joy of our culture with you.`;
    ;
    newContent.appendChild(text);
    





}