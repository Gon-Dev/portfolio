import birthdappDesktop from '../../assets/screenshots/birthdapp-desktop.png';
import birthdappMobile from '../../assets/screenshots/birthdapp-mobile.png';
import npCrafterDesktop from '../../assets/screenshots/npcrafter-desktop.png';
import vgVaultDesktop from '../../assets/screenshots/vg-vault-desktop.png';
import vgVaultMobile from '../../assets/screenshots/vg-vault-mobile.png';

const projectsData = [
  {
    title: "Birthdapp",
    description: "Birthdapp is a birthday tracker. Just load the birthday of those you love to get (and keep stored in the browser local storage) the remaining days to his/her next birthday.",
    technologies: "CSS | Javascript | React | dates-fns",
    previewUrl: "https://birthdapp.vercel.app/",
    repoUrl: "https://github.com/gon-dev/birthdApp",
    screens: [birthdappDesktop,birthdappMobile],
    key: "Birthdapp"
  },
  {
    title: "Videogame Vault",
    description: "Videogame finder, with options to save (in browser local storage) in four categories: library, wishlist, playing and beaten.",
    technologies: "CSS | Javascript | React",
    previewUrl: "https://vg-vault.vercel.app/",
    repoUrl: "https://github.com/gon-dev/videogame-vault",
    screens: [vgVaultDesktop,vgVaultMobile],
    key: "Videogame Vault"
  },
  {
    title: "NPCrafter",
    description: "NPC (non-playable character) Crafter is a character generator. Thought for roleplayers and narrators, seek for an image from the endless gallery, load the character data and keep them for you next D&D session.",
    technologies: "HTML | CSS | Javascript",
    previewUrl: "https://gon-dev.github.io/npcrafter/",
    repoUrl: "https://github.com/gon-dev/npcrafter",
    screens: [npCrafterDesktop,null],
    key: "NPCrafter"
  },
];

export default projectsData;