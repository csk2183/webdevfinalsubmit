import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Keeper App CSK2183</p>
    </footer>
  );
}

export default Footer;
