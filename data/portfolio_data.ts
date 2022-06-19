type PortfolioData = {
  image: string;
  title: string;
  subtitle: string;
  github_link: string;
  website_link: string;
  description: string[];
};
export const portfolio_data: PortfolioData[] = [
  // {
  //   image: "",
  //   title: "",
  //   subtitle: "",
  //   github_link: "",
  //   website_link: "",
  //   description: [""],
  // },
  {
    image: "/images/coffee-connoisseur.png",
    title: "Coffee Connoisseur",
    subtitle: "Next.js + AirTable",
    github_link: "https://github.com/jo-anne-tan/coffee-connoisseur",
    website_link: "https://coffee-connoisseur-nine.vercel.app/",
    description: [
      "This was produced as part of a Next.js Mastery course. The goal is to display several local coffee stores, allow users to view coffee stores near them based on the geolocation api, and view each store's address, name, and upvotes.",
      "Data is stored and updated at Airtable. Each coffee store data is created upon first visit by users. If the coffee store already exists in the database, it will simply retrieve it. Users can also upvote the stores they like.",
      "Through this project, I have learnt about different page rendering methods provided by Next.js and how to implement them, including Static Site Generation, Server Side Rendering, and Incremental Server Regeneration. It is also the first time I've used the browser built-in geolocation api and AirTable.",
    ],
  },
];
