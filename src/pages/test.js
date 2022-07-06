import { Link } from "gatsby";
import * as React from "react";

// stylings

const spaceDiv = {
  height: "2000px",
};

// markup
const TestPage = () => {
  return (
    <>
      <h1>Page Title</h1>
      <br />
      <h4>Table of Content</h4>
      <Link to={"#sectionOne"}>
        Link to Section One (but it actually redirects outside of this page 🥺)
      </Link>
      <div style={spaceDiv}>
        Some space... Scroll on for <strong>Section One</strong>
      </div>

      <h4 id="sectionOne">Begin Section One</h4>
      <div>blah blah blah</div>
    </>
  );
};

export default TestPage;
