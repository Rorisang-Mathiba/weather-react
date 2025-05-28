import React from "react";

export default function Form() {
  return (
    <div className="form">
      <header>
        <form id="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-input"
            id="search-input"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>
    </div>
  );
}
