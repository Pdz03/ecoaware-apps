class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="appmob">
    <div class="title-bar">
    <a class="logo" href="">
      <img src="https://i.ibb.co/vjncHxM/Logo.png" alt="Logo" />
    </a>
      <h2 class="title">EcoAware Apps</h2>
    </div>
    <div class="menumob">
    <div class="iconmenu" id="menu" aria-label="navigation-menu"><a href="#/" tabindex="0">&#9776;</a></div>
    </div>
    </div>
    <nav id="drawer" class="navmob">
      <ul class="navlistmob">
        <li class="navitemsmob"><a href="./index.html">Home</a></li>
        <li class="navitemsmob">
          <a href="../scripts/views/pages/tentang-kami.html">Our story</a>
        </li>
        <li class="navitemsmob">
          <a href="https://github.com/Pdz03/ecoaware-apps" target="_blank"
            >About Us</a
          >
        </li>
      </ul>
    </nav>
    <nav class="nav">
    <div class="title-bar">
    <a class="logo" href="">
      <img src="https://i.ibb.co/vjncHxM/Logo.png" alt="Logo" />
    </a>
      <h2 class="title">EcoAware Apps</h2>
    </div>
    <ul class="navlist">
      <li class="navitems"><a href="./index.html">Home</a></li>
      <li class="navitems">
        <a href="../scripts/views/pages/tentang-kami.html">Our story</a>
      </li>
      <li class="navitems">
        <a href="https://github.com/Pdz03/ecoaware-apps" target="_blank"
          >About Us</a
        >
      </li>
    </ul>
  </nav>
   `;
  }
}

customElements.define('app-bar', AppBar);
