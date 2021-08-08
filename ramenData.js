const data = [
    {
        id: 1,
        rating: '3.75/5',
        title: "New Touch - T's Restaurant Tantamen",
        content: "This is a cup style ramen from Japan" 
    },
    {
        id: 2,
        rating: '1/5', 
        title: "Just Way - Spicy Hot Sesame", 
        content: "This is a pack style ramen from Taiwan"
    },
    {
        id: 3,
        rating: '2.25/5',
        title: "Nissin - Chicken Vegetable",
        content: "This is a cup tyle ramen from USA"
    },
    {
        id: 4,
        rating: '3.75/5',
        title: "Wei Lih - GGE Ramen Snack Tomato Flavor",
        content: "This is a pack style ramen from Taiwan"
    },
    {
        id: 5,
        rating: '4.25/5',
        title: "Ching's Secret - Singapore Curry",
        content: "This is a pack style ramen from India"
    },
    {
        id: 6,
        rating: '4.75/5',
        title: "Samyang Foods - Kimchi Song Song Ramen",
        content: "This is a pack style ramen from South Korea"
    } 

];

const list = () => {
    return [...data] 
  }; 
  
  const find = (id) => {
    const noodle = data.find(noodle => noodle.id === +id);
    return {...noodle}; 
  }
  
  module.exports = { list: list, find: find };