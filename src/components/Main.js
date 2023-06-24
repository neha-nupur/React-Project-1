import React from "react";

export default function Main() {
  return (
    <main className="main">
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--facts">
        <li>React was created by Facebook engineers Jordan Walke, Peter Hunt, and Tom Occhino in 2011.</li>
        <li>React is used by many well-known companies, including Facebook, Instagram, Netflix, and Airbnb.</li>
        <li>React makes use of a virtual Document Object Model (DOM) which allows developers to make changes to a component's state without directly manipulating the browser DOM.</li>
        <li>React uses a "unidirectional data flow" model, which means that data flows in a single direction between components, making it easier to debug and maintain code.</li>
        <li>React features a number of built-in performance optimization features, like the shouldComponentUpdate lifecycle method, which helps to minimize component re-renders and, as a result, improve app performance.</li>
        <li>React provides a wealth of community-created libraries and tools, including the Redux state management library and the Next.js server-side rendering framework.</li>
        <li>React's popularity has made it a highly marketable skill for developers. According to a 2020 developer survey by Stack Overflow, React was the second most popular web framework/library, behind only jQuery.</li>
      </ul>
    </main>
  );
}
