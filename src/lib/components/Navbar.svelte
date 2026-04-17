<script lang="ts">
  import { page } from '$app/state';

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Over Mirjam', path: '/about' },
    { name: 'Coaching', path: '/coaching' },
    { name: 'Training', path: '/training' },
    { name: 'Systeemspel', path: '/systeemspel' },
  ];

  let menuOpen = $state(false);

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }
</script>

<nav>
  <div class="nav-inner">
    <a href="/" class="logo-link" onclick={closeMenu}>
      <img src="/assets/images/logo.webp" alt="Mirjam Kroon logo" class="logo" />
    </a>

    <div class="desktop-menu">
      {#each menuItems as item}
        <a
          href={item.path}
          class="nav-link"
          class:active={page.url.pathname === item.path || (page.url.pathname === '/' && item.path === '/')}
        >
          {item.name}
        </a>
      {/each}
      <a href="/contact" class="btn">Contact</a>
    </div>

    <button class="burger" onclick={toggleMenu} aria-label="Menu openen">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>

  {#if menuOpen}
    <div class="mobile-menu">
      {#each menuItems as item}
        <a
          href={item.path}
          class="nav-link"
          class:active={page.url.pathname === item.path}
          onclick={closeMenu}
        >
          {item.name}
        </a>
      {/each}
      <a href="/contact" class="btn" onclick={closeMenu}>Contact</a>
    </div>
  {/if}
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: var(--color-bg);
  }

  .nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--navbar-height);
    padding: 0 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo-link {
    display: flex;
    align-items: center;
  }

  .logo {
    height: 70px;
    width: auto;
  }

  .desktop-menu {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .nav-link {
    color: var(--color-blue);
    text-decoration: none;
    font-family: var(--font-family);
  }

  .nav-link.active {
    text-decoration: underline;
  }

  .nav-link:hover {
    text-decoration: underline;
  }

  .burger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }

  .burger span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: black;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: var(--color-bg);
    border-top: 1px solid rgba(0,0,0,0.1);
  }

  @media (max-width: 768px) {
    .desktop-menu {
      display: none;
    }
    .burger {
      display: flex;
    }
  }

  @media (min-width: 769px) {
    .mobile-menu {
      display: none;
    }
  }
</style>
