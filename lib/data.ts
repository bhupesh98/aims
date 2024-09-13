////////////// WEBSITE METADATA & NAVIGATION ///////////////////

export const siteData = {
  title: "IIIT Allahabad",
  description:
    "The Indian Institute of Information Technology, Allahabad (IIIT-Allahabad), is a public university located in Jhalwa, Prayagraj district, in Uttar Pradesh.",
  keywords: "IIIT Allahabad, IIIT, Indian Institute of Information Technology",
  logo: "https://it.iiita.ac.in/images/IIIT_logo_transparent.gif",
  navigation: [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Publications", path: "/publications" },
    { name: "Team", path: "/team" },
  ],
  footer: {
    "Important Links": [
      {
        name: "Vision",
        url: "https://www.iiita.ac.in"
      },
      {
        name: "Research",
        url: "https://www.iiita.ac.in"
      },
      {
        name: "People",
        url: "https://www.iiita.ac.in"
      },
      {
        name: "Contact",
        url: "https://www.iiita.ac.in"
      }
    ],
    "Information": [
      {
        name: "Alumni",
        url: "https://www.iiita.ac.in"
      },
      {
        name: "Administrative staff",
        url: "https://www.iiita.ac.in"
      },
      {
        name: "Research staff",
        url: "https://www.iiita.ac.in"
      },
      {
        name: "Courses",
        url: "https://www.iiita.ac.in"
      }
    ]
  },
  contact: {
    address:
      "IIIT Rd, Indian Institute of Information Technology, Jhalwa, Prayagraj, Saha Urf Pipalgaon, Uttar Pradesh 211012",
    phone: "+91 76792 95725",
    email: "rsi2021001@iiita.ac.in"
  },
};

////////////// HOME ///////////////////////
export const home = {
  photo: {
    url: "https://www.iiita.ac.in/uploads/carousel/31264_o907.jpg",
    alt: "IIITA Campus Photo"
  }
};


////////////// PROJECTS ///////////////////

export const projects = [
  {
    id: 1,
    title: "Consensun Model",
    description: `This project focuses on consensus and obstacle avoidance in swarm robotics using various models, including the voter model, HK model, and majority rule model. The objective is to simulate and analyze how different decision-making strategies can be applied to swarms to achieve efficient navigation and obstacle avoidance.`,
    image: "/carousel-behavior.jpg",
  },
  {
    id: 2,
    title: "Snake AI",
    description: `SNAKE_AI is an AI-driven implementation of the classic Snake game. The project utilizes the Deep Q-Network (DQN) algorithm, a reinforcement learning technique, to train an intelligent agent capable of mastering the game. The agent learns to navigate the game grid, collect food, grow in length, and avoid collisions with itself and obstacles, demonstrating strategic gameplay and achieving high scores.`,
    image: "/carousel-behavior.jpg",
  },
  {
    id: 3,
    title: "Project Gamma",
    description: `Exploring the frontiers of quantum computing.`,
    image: "/carousel-behavior.jpg",
  },
];

////////////// PUBLICATIONS ///////////////////

export const publications = [
  {
    id: 1,
    title: "Advancements in Machine Learning",
    authors: "John Doe, Jane Smith",
    journal: "Journal of AI Research",
    year: 2023,
    links: {
      website: "https://iiita.ac.in",
      pdf: "https://iiita.ac.in",
      github: "https://github.com"
    }
  },
  {
    id: 2,
    title: "Sustainable Energy: A New Approach",
    authors: "Alice Johnson, Bob Williams",
    journal: "Renewable Energy Quarterly",
    year: 2022,
    links: {
      website: "https://iiita.ac.in",
      pdf: "https://iiita.ac.in",
      github: "https://github.com"
    }
  },
  {
    id: 3,
    title: "Quantum Computing: The Next Frontier",
    authors: "Charlie Brown, Diana Prince",
    journal: "Quantum Science Review",
    year: 2023,
    links: {
      website: "https://iiita.ac.in",
      pdf: "https://iiita.ac.in",
      github: "https://github.com"
    }
  },
  {
    id: 5,
    title: "Quantum Computing: The Next Frontier",
    authors: "Charlie Brown, Diana Prince",
    journal: "Quantum Science Review",
    year: 2023,
    links: {
      website: "https://iiita.ac.in",
      pdf: "https://iiita.ac.in",
      github: "https://github.com"
    }
  },
  {
    id: 4,
    title: "Naturally Supervised 3D Visual Grounding with Language-Regularized Concept Learners",
    authors: "Yue Yang*, Fan-Yun Sun*, Luca Weihs*, Eli VanderBilt, Alvaro Herrasti, Winson Han, Jiajun Wu, Nick Haber, Ranjay Krishna, Lingjie Liu, Chris Callison-Burch, Mark Yatskar, Aniruddha Kembhavi, Christopher Clark",
    journal: "CVPR",
    year: 2021,
    links: {
      website: "https://arxiv.org/abs/2103.11543",
      pdf: "https://arxiv.org/pdf/2103.11543.pdf",
      github: "https://github.com"
    }
  }
];

////////////// TEAM ///////////////////

export const team = [
  {
    id: 1,
    name: "Dr. John Doe",
    role: "Lead Researcher",
    image: "/image.jpg",
  },
  {
    id: 2,
    name: "Prof. Jane Smith",
    role: "Senior Scientist",
    image: "/image.jpg",
  },
  {
    id: 3,
    name: "Dr. Alice Johnson",
    role: "Research Associate",
    image: "/image.jpg",
  },
  {
    id: 4,
    name: "Prof. Jane Smith",
    role: "Senior Scientist",
    image: "/image.jpg",
  },
  {
    id: 5,
    name: "Dr. Alice Johnson",
    role: "Research Associate",
    image: "/image.jpg",
  },
];
