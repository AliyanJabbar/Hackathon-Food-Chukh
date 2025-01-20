// type of data
export interface ChefData {
  id: number;
  name: string;
  role: string;
  experience: number;
  speciality: string;
  image:
    | string
    | {
        _type: "image";
        asset: {
          _ref: string;
          _type: "reference";
        };
      };
}

// for generating id
let id = 0;
function idGenerator() {
  return id++;
}
const chefs: ChefData[] = [
  {
    id: idGenerator(),
    name: "Tahmina Rumi",
    role: "Head Chef",
    experience: 12,
    speciality: "Italian Cuisine",
    image: "/assets/chefs/chef1-Tahmina-Rumi.png",
  },
  {
    id: idGenerator(),
    name: "Jorina Begum",
    role: "Sous Chef",
    experience: 8,
    speciality: "Pastry and Desserts",
    image: "/assets/chefs/chef2-Jorina-Begum.png",
  },
  {
    id: idGenerator(),
    name: "M. Mohammad",
    role: "Grill Master",
    experience: 10,
    speciality: "Grilled Dishes",
    image: "/assets/chefs/chef3-M.Mohammad.png",
  },
  {
    id: idGenerator(),
    name: "Munna Kathy",
    role: "Culinary Instructor",
    experience: 15,
    speciality: "Asian Fusion",
    image: "/assets/chefs/chef4-Munna-Kathy.png",
  },
  {
    id: idGenerator(),
    name: "William Rumi",
    role: "Chef de Cuisine",
    experience: 18,
    speciality: "Seafood Specialties",
    image: "/assets/chefs/chef5-William-Rumi.png",
  },
  {
    id: idGenerator(),
    name: "Bisnu Devgon",
    role: "Executive Chef",
    experience: 20,
    speciality: "Global Cuisine",
    image: "/assets/chefs/chef6-Bisnu-devgon.png",
  },
  {
    id: idGenerator(),
    name: "Motin Molladsf",
    role: "Pastry Chef",
    experience: 10,
    speciality: "Cakes and Pastries",
    image: "/assets/chefs/chef7-Motin-Molladsf.png",
  },
  {
    id: idGenerator(),
    name: "Kets william roy",
    role: "Grill Master",
    experience: 12,
    speciality: "BBQ and Grilled Meats",
    image: "/assets/chefs/chef8-Kets-william-roy.png",
  },
  {
    id: idGenerator(),
    name: "Mahmud kholil",
    role: "Sous Chef",
    experience: 8,
    speciality: "Mediterranean Cuisine",
    image: "/assets/chefs/chef9-Mahmud-kholil.png",
  },
  {
    id: idGenerator(),
    name: "Ataur Rahman",
    role: "Executive Chef",
    experience: 15,
    speciality: "Global Cuisine",
    image: "/assets/chefs/chef10-Ataur-Rahman.png",
  },
];

export default chefs;
