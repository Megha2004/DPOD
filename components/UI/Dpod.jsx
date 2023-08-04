import React, { useRef, useEffect, useState } from "react";
import Collections from "../UI/Collections";
import Apps from "../UI/Apps";

const Dpod = () => {
  const [collections, setCollections] = useState([]);
  const [apps, setApps] = useState([]);
  const renderCollections = () => {
    if (collections.length > 0) {
      return <Collections collections={collections} />;
    }
    return null;
  };

  const renderApps = () => {
    if (apps.length > 0) {
      return <Apps apps={apps} />;
    }
    return null;
  };
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch(
          "https://api.livgood.in/v1/app-builder/29c0eb75-a2ae-421d-be2f-04126992b6ae/api/collection/29c0eb75-a2ae-421d-be2f-04126992b6ae/user/private/cm/v5/megamenuitems"
        );
        const data = await response.json();
        const collectionsData =
          data["eb7750af-a6c5-4658-8e67-b3406bc1d8a4"]; // Replace with the actual key for collections data from your API response
        setCollections(collectionsData);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await fetch(
          "https://api.livgood.in/v1/app-builder/29c0eb75-a2ae-421d-be2f-04126992b6ae/api/collection/29c0eb75-a2ae-421d-be2f-04126992b6ae/user/private/cm/v1/servicess" // Replace this with your API endpoint for fetching apps data
        );
        const data = await response.json();
        const AppsData =
          data["9b3fd2cd-2389-4d3d-8031-95c1fb619b45"]; // Replace with the actual key for collections data from your API response
        setApps(AppsData); // Assuming the API returns an array of apps, set the apps state here
      } catch (error) {
        console.error("Error fetching apps:", error);
      }
    };

    fetchApps();
  }, []);

  return (
    <div>
      {renderApps()}
      {renderCollections()}
    </div>
  );
};

export default Dpod;