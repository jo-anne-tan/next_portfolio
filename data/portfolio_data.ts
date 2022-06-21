export type PortfolioData = {
  image: string;
  title: string;
  subtitle: string;
  github_link?: string;
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
    subtitle: "Next.js + Typescript + Tailwind CSS + AirTable",
    github_link: "https://github.com/jo-anne-tan/coffee-connoisseur",
    website_link: "https://coffee-connoisseur-nine.vercel.app/",
    description: [
      "This was produced as part of a Next.js Mastery course. The goal is to display several local coffee stores, allow users to view coffee stores near them based on the geolocation api, and view each store's address, name, and upvotes.",
      "Data is stored and updated at Airtable. Each coffee store data is created upon first visit by users. If the coffee store already exists in the database, it will simply retrieve it. Users can also upvote the stores they like.",
      "Through this project, I have learnt about different page rendering methods provided by Next.js and how to implement them, including Static Site Generation, Server Side Rendering, and Incremental Server Regeneration. It is also the first time I've used the browser built-in geolocation api and AirTable.",
    ],
  },
  {
    image: "/images/sharkbate-webstore.png",
    title: "Sharkbate Web Store",
    subtitle: "Next.js + Typescript + Tailwind CSS + Hasura",
    website_link: "https://m.sharkbate.com.my/store/GSF6E0H5",
    description: [
      "This project made for Sharkbate Sdn Bhd is made to supplement the mobile app released on android and ios.",
      "As such, it was initially meant to only have the e-commerce stores - i.e. the mobile apps' store pages have a share button which links to the corresponding store pages on this web app. Eventually it was decided that users should be able to check on the web app the rewards they have collected, and the purchases they have made.",
      "User authentication is done with mobile number and an SMS pin which is generated using an internal api.",
      "User checkout is integrated with BillPlz, a local payment gateway. Users can checkout using Card, FPX, or an e-wallet of their choosing.",
      "One missing feature in this web app is the ability to view all merchants on this platform. However, it was decided that this is the intended result as it is meant to supplement the mobile apps.",
      "",
    ],
  },
];
