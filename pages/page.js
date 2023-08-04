import React from "react";
import Header from "../components/Header/Header";

function HomePage({ collections }) {
  return (
    <div>
      <Header collections={collections} />
    </div>
  );
}

export async function getStaticProps() {
  // Fetch the collections data from your API endpoint
  const res = await fetch("https://api.livgood.in/v1/app-builder/29c0eb75-a2ae-421d-be2f-04126992b6ae/api/collection/29c0eb75-a2ae-421d-be2f-04126992b6ae/user/private/cm/v1/feedbacks");
  const data = await res.json();

  // Extract the collections from the data
  const collections = data["c9366638-8ef2-4e3b-96ac-b11c89c9670d"];

  return {
    props: {
      collections,
    },
  };
}

export default HomePage;
