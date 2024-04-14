import replay_i from './assets/Images/replay_spire.jpg'
import packmaster_i from './assets/Images/packmaster.jpg'
import bm from './assets/Images/basemod.jpg'
import lib from './assets/Images/stslib.jpg'
import mts from './assets/Images/mts.jpg'
import downfall from './assets/Images/downfall.jpg'


const modsData = [
    {
      id: 1,
      name: "Replay The Spire",
      requirements: ["Default Requirements"],
      conflicts: [],
      traits: ["Vanilla+", "Expansion", "Relics", "Enemies", "Bosses"],
      size: "Medium",
      image: replay_i
    },
    {
      id: 2,
      name: "Packmaster",
      requirements: ["Default Requirements"],
      conflicts: [],
      traits: ["New Character"],
      size: "Medium",
      image: packmaster_i
    },

    

    {
      id: 3,
      name: "Mod The Spire",
      requirements: [],
      conflicts: [],
      traits: ["Default Requirements"],
      size: "Trivial",
      image: mts
    },
    {
      id: 4,
      name: "Downfall Expansion",
      requirements: ["Default Requirements"],
      conflicts: [],
      traits: ["New Character","Total Conversion", "Bosses"],
      size: "Large",
      image: downfall
    },
    {
      id: 5,
      name: "BaseMod",
      requirements: [],
      conflicts: [],
      traits: ["Default Requirements"],
      size: "Trivial",
      image: bm
    },
    {
      id: 6,
      name: "Sts-Lib",
      requirements: [],
      conflicts: [],
      traits: ["Default Requirements"],
      size: "Trivial",
      image: lib
    },


    {id: 7,
      name: "Packmaster Expansion",
      requirements: ["Default Requirements", "Packmaster"],
      conflicts: [],
      traits: ["New Character"],
      size: "Small",
      image: packmaster_i
    },

    // Add more mod objects as needed
  ];
  
  export default modsData;