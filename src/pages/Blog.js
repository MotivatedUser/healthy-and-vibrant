import React from 'react';
import '../App.css';

const articles = [
  {
    title: 'The Benefits of a Healthy Diet and How to Follow One',
    link: 'https://www.medicalnewstoday.com/articles/153998',
  },
  {
    title: 'The Importance of Exercise for a Healthy Lifestyle',
    link: 'https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389',
  },
  {
    title: 'The Benefits of Mindful Eating for a Healthy Lifestyle',
    link: 'https://www.health.harvard.edu/blog/10-tips-for-mindful-eating-just-in-time-for-the-holidays-201511248698',
  },
  {
    title: '10 Healthy Habits for Better Sleep',
    link: 'https://www.sleepfoundation.org/sleep-hygiene/healthy-sleep-tips',
  },

  {
    title: 'How Plant-Based Diets Benefit Your Health',
    link: 'https://www.healthline.com/nutrition/plant-based-diet-guide',
  },
  
  {
    title: 'The Importance of Staying Hydrated for Overall Health',
    link: 'https://www.webmd.com/diet/features/6-reasons-to-drink-water',
  },
  {
    title: 'The Role of Healthy Fats in a Balanced Diet',
    link: 'https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/fats-and-cholesterol/',
  },
  {
    title: 'The Science of Mindfulness and Its Impact on Well-being',
    link: 'https://www.apa.org/monitor/2012/07-08/ce-corner',
  },
  {
    title: 'The Role of Micronutrients in a Balanced Diet and Their Health Benefits',
    link: 'https://www.healthline.com/nutrition/micronutrients',
  },
  {
    title: 'The Connection Between Nutrition and Immunity: How a Balanced Diet Supports Your Immune System',
    link: 'https://www.healthline.com/health/food-nutrition/foods-that-boost-the-immune-system',
  }
  // Add more articles here
];

const Blog = () => {
  return (
    <div className="blog">
      <h1 className="blog__title">Helpful Articles on Nutrition and Lifestyle</h1>
      <ul className="blog__list">
        {articles.map((article, index) => (
          <li key={index} className="blog__list-item">
            <a href={article.link} target="_blank" rel="noreferrer" className="blog__list-item-link" aria-label={`Read article: ${article.title}`}>
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
