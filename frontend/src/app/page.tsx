"use client";
import { useEffect } from "react";
import "./App.css";
import Blog from "./Components/Blog";
import { init } from "@socialgouv/matomo-next";

const MATOMO_URL = 'https://analytics.barnyak.com';
const MATOMO_SITE_ID = "3";
const CLARITY_PROJECT_ID = 'qygop8twft';

export default function Home() {
  useEffect(() => {
    try {
      //@ts-ignore
      if (window.has_loaded === true) return;
      //@ts-ignore
      window.has_loaded = true;
      init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
    }
    catch (e) {
      console.log(e);
    }

    try {
      //Clarity.init(CLARITY_PROJECT_ID);
    }
    catch (e) {
      console.log(e);
    }
  }, [])

  return (
    <Blog />
  );
}

export async function generateStaticParams() {
  return [];
}
