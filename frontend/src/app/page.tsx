"use client";
import { useEffect } from "react";
import "./App.css";
import Blog from "./Components/Blog";

export default function Home() {
  useEffect(() => {
    //@ts-ignore
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    //@ts-ignore
    g.async=true; g.src='https://analytics.barnyak.com'; s.parentNode.insertBefore(g,s);
}, [])

  return (
    <Blog />
  );
}

export async function generateStaticParams() {
  return [];
}
