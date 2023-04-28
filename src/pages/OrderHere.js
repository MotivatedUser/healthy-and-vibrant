import React from "react";
import "../App.css";
import farm from "../images/farm.webp";

const OrderHere = () => {
  return (
    <div className="order-here">
      <div className="order-here__content">
        <p>
          Standard Process is a family-operated business with three generations
          of experience, partnering with healthcare professionals to promote
          holistic wellness for every family member. Our mission is to transform
          lives through whole food-based nutritional supplements that address
          dietary deficiencies and support the body's interconnected systems.
          Some of the areas we can assist in:
        </p>
      </div>
      <div className="order-here__image-list-container">
        <img className="order-here__image" src={farm} alt="Farm" />
        <ul>
          <li>Glucose Regulation & Metabolism</li>
          <li>Skeletal, Joint, & Muscular Health</li>
          <li>Cognitive Function & Mental Acuity</li>
          <li>Kids' Wellbeing (for ages 4 and up)</li>
          <li>Liver Cleansing & Detoxification</li>
          <li>Gastrointestinal Health</li>
          <li>Fish Oil & Omega Fatty Acids</li>
          <li>Physical Fitness</li>
          <li>General Wellbeing</li>
          <li>Healthy Aging & Longevity</li>
          <li>Cardiovascular System & Circulation</li>
          <li>Immunity Support</li>
          <li>Male Wellness</li>
          <li>Sleep Quality, Stress Management, & Emotional Health</li>
          <li>Essential Vitamins & Minerals</li>
          <li>Female Health & Wellness</li>
        </ul>
      </div>

      <a
        className="order-here__button"
        href="https://healthyandvibrant.standardprocess.com/products"
        target="_blank"
        rel="noreferrer"
      >
        Order Product Now
      </a>
      <p className="order-here__content"> ** Customers are encouraged to seek the advice of a licensed healthcare practitioner prior to purchasing any products through this online store. Please contact Healthy and Vibrant at 509-951-4707 or healingrox@gmail.com</p>
    </div>
  );
};

export default OrderHere;
