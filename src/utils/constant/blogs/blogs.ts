import mentalHealthCover from "./assets/mental.jpg";
import climateChangeCover from "./assets/mental.jpg";
import profile from "@/assets/images/jose-removebg-preview.png";
import { images } from "@/utils/constant/images";

export const blogs = [
  {
    title: "Mental Health Resources in Rwanda: Where to Find Help",
    description: "Mental health support is growing in Rwanda. Find out where to access resources, counseling, and support groups that can help..",
    cover: images.mentalhealth,
    createdAt: "September 5, 2024",
    author: {
      image: images.Joie,
      name: "Joie Sophie"
    }
  },
  {
    title: "Ecomama is Pleased to launch a new program called women warriors",
    description: "Eco-mama is proud to introduce our WOMEN WARRIORS Program aims to help local youth and young women become advocates for mental health resilience in their communities and ambassadors, teaches skills of community resilience planning",
    cover: images.consultation,
    createdAt: "August 10, 2024",
    author: {
      image: images.Jospine,
      name: "Sonia Jospine"
    }
  },
  {
    title: "Breaking the Silence: Talking About Mental Health in Our Community",
    description: "Mental health conversations are still difficult for many. Learn how opening up and talking about mental health can create a supportive, understanding community for everyone",
    cover: images.listen,
    createdAt: "July 28, 2024",
    author: {
      image: images.jovise,
      name: "Jovise"
    }
  }
];

export const allBlogs = [
  ...blogs,
  {
    title: "Managing Stress: Practical Tips for Busy People",
    description: "Life can get hectic, and stress often follows. These practical, quick tips will help you manage stress and stay calm even on the busiest days",
    cover: images.africanWoman,
    createdAt: "June 15, 2024",
    author: {
      image: images.Joie,
      name: "Joie Sophie"
    }
  },
  {
    title: "Mental Health Self-Care: Small Habits for Big Changes",
    description:"The effects of climate change add to daily stress and anxiety. Explore simple self-care practices to keep your mind healthy in a rapidly changing world",
    cover: images.stormy,
    createdAt: "May 22, 2024",
    author: {
      image: images.Jospine,
      name: "Sonia Jospine"
    }
  },
  {
    title: "The Climate Change Connection: How Climate change affects mental health",
    description: "Support the environment by planting trees, reducing plastics, conserving water, using local products, and creating wildlife habitats. These actions promote a healthier planet!",
    cover: images.ecohub,
    createdAt: "April 18, 2024",
    author: {
      image: images.jovise,
      name: "Jovise Solive"
    }
  }
];
