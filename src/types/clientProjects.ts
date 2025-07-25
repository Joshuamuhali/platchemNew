export type ClientProject = {
  id: string; // unique identifier for routing (slug)
  name: string;
  logo: string; // URL or local path to logo
  location: string; // e.g., "Lusaka, Zambia"
  date: string; // e.g., "Q2 2023"
  briefInfo: string; // Shown on overview page
  detailedInfo: string; // Full project scope for detail page
  challenges?: string[]; // Optional: project challenges and solutions
  outcomes?: string[]; // Optional: key outcomes/deliverables
  images: string[]; // Array of image paths for gallery
  services: string[]; // Services provided (e.g., ["Construction", "Electrical"])
};

// Client projects data
export const clientProjects: ClientProject[] = [
  {
    id: "chilanga-cement",
    name: "Chilanga Cement",
    logo: "/logos/chilanga-cement.png",
    location: "Chilanga, Zambia",
    date: "Ongoing",
    briefInfo: "Comprehensive maintenance and construction services for Chilanga Cement.",
    detailedInfo: "Provided various services including bucket elevator belt splicing, removal and replacement; Chilanga Head Office rehabilitation; Chilanga Control Room rehabilitation; Packing plant shed extension; Burner pipe extension and repair; Resident Maintenance Contractor – Ndola plant; Resident Production and Maintenance Contractor – Chilanga plant.",
    challenges: [
      "Ensuring minimal disruption to production during maintenance",
      "Working with heavy industrial equipment",
      "Meeting strict safety and quality standards"
    ],
    outcomes: [
      "Improved operational efficiency",
      "Extended equipment lifespan",
      "Enhanced safety standards"
    ],
    images: [
      "/lovable-uploads/chilanga1.jpeg",
      "/lovable-uploads/chilanga2.jpeg",
      "/lovable-uploads/chilanga3.jpeg",
      "/lovable-uploads/chilanga4.jpeg"
    ],
    services: ["Construction", "Maintenance", "Engineering"]
  },
  {
    id: "mopani-copper-mines",
    name: "Mopani Copper Mines",
    logo: "/logos/mopani.png",
    location: "Mufulira, Zambia",
    date: "2022",
    briefInfo: "Mufulira Smelter - Electrostatic Precipitator (ESP) shutdown maintenance.",
    detailedInfo: "Conducted comprehensive maintenance on the Electrostatic Precipitator (ESP) at Mufulira Smelter, including inspection, cleaning, and replacement of critical components to ensure optimal performance and environmental compliance.",
    challenges: [
      "Working within tight shutdown windows",
      "Handling specialized equipment",
      "Ensuring environmental compliance"
    ],
    outcomes: [
      "Successfully completed maintenance within deadline",
      "Improved ESP efficiency",
      "Zero environmental incidents"
    ],
    images: [
      "/lovable-uploads/mopani1.jpeg",
      "/lovable-uploads/mopani2.jpeg",
      "/lovable-uploads/mopani3.jpeg",
      "/lovable-uploads/mopani4.jpeg",
      "/lovable-uploads/mopani5.jpeg",
      "/lovable-uploads/mopani6.jpeg"
    ],
    services: ["Mining", "Maintenance", "Engineering"]
  },
  {
    id: "copper-mine-dewatering",
    name: "Northwest Copper Ltd.",
    logo: "/logos/northwest-copper.png",
    location: "North-Western Province, Zambia",
    date: "Q4 2022",
    briefInfo: "Underground dewatering system for copper mine.",
    detailedInfo: "Design and installation of a comprehensive underground dewatering system for a large-scale copper mining operation. The system included high-capacity pumps, piping networks, and water treatment components to manage water inflow in deep mining operations.",
    challenges: [
      "Working in confined underground spaces",
      "Harsh environmental conditions",
      "Strict safety and environmental regulations"
    ],
    outcomes: [
      "30% improvement in water management efficiency",
      "Reduced downtime due to flooding by 45%",
      "Compliant with all environmental regulations"
    ],
    images: [
      "/projects/copper-mine/dewatering-1.jpg",
      "/projects/copper-mine/dewatering-2.jpg"
    ],
    services: ["Mining", "Water Management", "Engineering"]
  },
  {
    id: "meat-processing-automation",
    name: "Zambia Meat Corporation",
    logo: "/lovable-uploads/zmc.png",
    location: "Lusaka, Zambia",
    date: "Q1 2023",
    briefInfo: "Automation solutions for meat processing facility.",
    detailedInfo: "Implementation of a complete automation solution for a meat processing plant, including SCADA system integration, motor control centers, and process automation to improve efficiency and food safety standards.",
    challenges: [
      "Strict food safety and hygiene requirements",
      "Need for minimal disruption to production",
      "Integration with existing legacy systems"
    ],
    outcomes: [
      "25% increase in production efficiency",
      "Reduced manual labor requirements by 40%",
      "Improved product consistency and quality control"
    ],
    images: [
      "/projects/zmc/processing-1.jpg",
      "/projects/zmc/processing-2.jpg"
    ],
    services: ["Automation", "Process Engineering", "SCADA"]
  },
  {
    id: "munali-nickel-mine",
    name: "Munali Nickel Mine",
    logo: "/lovable-uploads/Munali Nickel Mine logo.jpg",
    location: "Mazabuka, Zambia",
    date: "2021 - 2023",
    briefInfo: "Underground ventilation and ore handling system maintenance.",
    detailedInfo: "Comprehensive maintenance and upgrade of underground ventilation systems including installation of new fans, ductwork, and control systems. Also involved in ore handling system maintenance and optimization to improve throughput and safety.",
    challenges: [
      "Working in deep underground environments",
      "Ensuring continuous ventilation during maintenance",
      "Coordinating with mining operations to minimize disruption"
    ],
    outcomes: [
      "Improved air quality in underground workings",
      "Reduced equipment downtime by 30%",
      "Enhanced safety for underground personnel"
    ],
    images: [
      "/projects/munali/ventilation-1.jpg",
      "/projects/munali/ore-handling-1.jpg"
    ],
    services: ["Mining", "Ventilation", "Maintenance"]
  },
  {
    id: "itezhi-tezhi-power",
    name: "Itezhi Tezhi Power Corporation",
    logo: "/lovable-uploads/Itezhi Tezhi Power logo.jpg",
    location: "Itezhi-Tezhi, Zambia",
    date: "2022",
    briefInfo: "Hydroelectric power plant maintenance and upgrades.",
    detailedInfo: "Comprehensive maintenance program for the 120MW Itezhi-Tezhi Hydro Power Station, including turbine overhauls, generator maintenance, and control system upgrades. The project also included civil works to address water seepage and structural integrity of the dam.",
    challenges: [
      "Working within strict environmental regulations",
      "Minimizing power generation downtime",
      "Handling specialized hydroelectric equipment"
    ],
    outcomes: [
      "Increased power generation efficiency by 15%",
      "Extended equipment lifespan by 10+ years",
      "Improved grid stability in the region"
    ],
    images: [
      "/lovable-uploads/its1.jpeg",
      "/lovable-uploads/its2.jpeg",
      "/lovable-uploads/its3.jpeg",
      "/lovable-uploads/its4.jpeg"
    ],
    services: ["Power Generation", "Hydroelectric", "Maintenance"]
  },
  {
    id: "zambian-breweries",
    name: "Zambian Breweries Plc",
    logo: "/lovable-uploads/zb logo.png",
    location: "Lusaka, Zambia",
    date: "2023",
    briefInfo: "Brewery process optimization and equipment installation.",
    detailedInfo: "Installation of new brewing vessels, piping systems, and process automation at the Zambian Breweries Lusaka plant. The project included the integration of new equipment with existing systems while maintaining production schedules and quality standards.",
    challenges: [
      "Working in a live production environment",
      "Meeting strict food safety standards",
      "Coordinating with multiple contractors"
    ],
    outcomes: [
      "20% increase in production capacity",
      "Reduced water and energy consumption",
      "Improved product consistency"
    ],
    images: [
      "/projects/zambrew/brewery-1.jpg",
      "/projects/zambrew/installation-1.jpg"
    ],
    services: ["Process Engineering", "Installation", "Automation"]
  }
];
