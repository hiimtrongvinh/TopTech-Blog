import { getAssetUrl } from '../utils.js';

export function renderHeader(container) {
  container.innerHTML = `
    <header>
      <div class="container nav-container">
        <!-- Left: Hamburger Menu & Links -->
        <div class="nav-left">
          <button class="menu-toggle-btn" id="menu-toggle" aria-label="Mở danh mục">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </button>
          <ul class="nav-links desktop-only">
            <li><a href="#/" class="nav-home-link active">Trang chủ</a></li>
            <li><a href="#/" class="nav-blog-link">Blog</a></li>
          </ul>
        </div>

        <!-- Center: Logo -->
        <a href="#/" class="logo">
          <img class="logo-img" src="${getAssetUrl('/logo-toptech-color.svg')}" alt="TopTech Logo">
        </a>

        <!-- Right: Desktop Links & Actions -->
        <div class="header-actions">
          <ul class="nav-links desktop-only" style="margin-right: 0.5rem;">
            <li><a href="javascript:void(0)" class="nav-chuyen-muc-trigger">Chuyên mục</a></li>
            <li><a href="#/ #tac-gia">Tác giả</a></li>
          </ul>

          <!-- Dark Mode Toggle -->
          <button class="theme-toggle-btn" id="theme-toggle" aria-label="Chuyển chế độ tối/sáng">
            <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              style="display: none;">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
            <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          </button>

          <!-- Search Trigger -->
          <button class="search-btn" id="search-trigger" aria-label="Tìm kiếm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Mega Menu Drawer (Slide down full screen) -->
    <div class="mega-menu" id="mega-menu">
      <div class="mega-menu-backdrop" id="mega-menu-backdrop"></div>
      <div class="mega-menu-content">
        <div class="container">
          <div class="mega-menu-header">
            <h3 class="mega-menu-title">Tất cả chuyên mục</h3>
            <button class="mega-menu-close" id="mega-menu-close" aria-label="Đóng menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div class="mega-menu-grid">
            <!-- Col 1: Tin công nghệ -->
            <div class="mega-col">
              <h4>Tin công nghệ</h4>
              <ul>
                <li><a href="#/chuyen-muc/Tin công nghệ">Điện thoại</a></li>
                <li><a href="#/chuyen-muc/Tin công nghệ">Máy tính</a></li>
                <li><a href="#/chuyen-muc/Tin công nghệ">Thiết bị thông minh</a></li>
                <li><a href="#/chuyen-muc/Tin công nghệ">Xe điện</a></li>
              </ul>
            </div>

            <!-- Col 2: AI -->
            <div class="mega-col">
              <h4>AI</h4>
              <ul>
                <li><a href="#/chuyen-muc/AI">Machine Learning</a></li>
                <li><a href="#/chuyen-muc/AI">Generative AI</a></li>
                <li><a href="#/chuyen-muc/AI">ChatGPT & LLMs</a></li>
                <li><a href="#/chuyen-muc/AI">Thị giác máy tính</a></li>
              </ul>
            </div>

            <!-- Col 3: Chuyển đổi số -->
            <div class="mega-col">
              <h4>Chuyển đổi số</h4>
              <ul>
                <li><a href="#/chuyen-muc/Chuyển đổi số">Doanh nghiệp</a></li>
                <li><a href="#/chuyen-muc/Chuyển đổi số">Giải pháp đám mây</a></li>
                <li><a href="#/chuyen-muc/Chuyển đổi số">IoT & Automation</a></li>
                <li><a href="#/chuyen-muc/Chuyển đổi số">Bảo mật dữ liệu</a></li>
              </ul>
            </div>

            <!-- Col 4: Review -->
            <div class="mega-col">
              <h4>Review</h4>
              <ul>
                <li><a href="#/chuyen-muc/Review">Đánh giá Laptop</a></li>
                <li><a href="#/chuyen-muc/Review">Đánh giá Smartphone</a></li>
                <li><a href="#/chuyen-muc/Review">Đồ công nghệ khác</a></li>
                <li><a href="#/chuyen-muc/Review">Trải nghiệm dịch vụ</a></li>
              </ul>
            </div>

            <!-- Col 5: Phần mềm -->
            <div class="mega-col">
              <h4>Phần mềm</h4>
              <ul>
                <li><a href="#/chuyen-muc/Phần mềm">Công cụ lập trình</a></li>
                <li><a href="#/chuyen-muc/Phần mềm">Phần mềm văn phòng</a></li>
                <li><a href="#/chuyen-muc/Phần mềm">Hệ điều hành</a></li>
                <li><a href="#/chuyen-muc/Phần mềm">Ứng dụng di động</a></li>
              </ul>
            </div>

            <!-- Col 6: IT -->
            <div class="mega-col">
              <h4>IT</h4>
              <ul>
                <li><a href="#/chuyen-muc/IT">Lập trình</a></li>
                <li><a href="#/chuyen-muc/IT">Quản trị mạng</a></li>
                <li><a href="#/chuyen-muc/IT">Cơ sở dữ liệu</a></li>
                <li><a href="#/chuyen-muc/IT">DevOps</a></li>
              </ul>
            </div>

            <!-- Col 7: Giải pháp công nghệ -->
            <div class="mega-col">
              <h4>Giải pháp công nghệ</h4>
              <ul>
                <li><a href="#/chuyen-muc/Giải pháp công nghệ">AI cho doanh nghiệp</a></li>
                <li><a href="#/chuyen-muc/Giải pháp công nghệ">Tự động hóa quy trình</a></li>
                <li><a href="#/chuyen-muc/Giải pháp công nghệ">Hạ tầng số</a></li>
                <li><a href="#/chuyen-muc/Giải pháp công nghệ">ERP & CRM</a></li>
              </ul>
            </div>

            <!-- Col 8: Casestudy -->
            <div class="mega-col">
              <h4>Casestudy</h4>
              <ul>
                <li><a href="#/chuyen-muc/Casestudy">Thành công tiêu biểu</a></li>
                <li><a href="#/chuyen-muc/Casestudy">Phân tích thất bại</a></li>
                <li><a href="#/chuyen-muc/Casestudy">Khảo sát thực tế</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Search Modal Overlay -->
    <div class="search-overlay" id="search-overlay">
      <div class="search-container">
        <input type="text" class="search-input" id="search-input" placeholder="Tìm kiếm bài viết..."
          aria-label="Search posts">
        <button class="search-close-btn" id="search-close" aria-label="Close search">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  `;
}

export function initHeaderEvents(onSearch) {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const menuToggleBtn = document.getElementById("menu-toggle");
  const megaMenu = document.getElementById("mega-menu");
  const megaMenuCloseBtn = document.getElementById("mega-menu-close");
  const megaMenuBackdrop = document.getElementById("mega-menu-backdrop");
  const searchTrigger = document.getElementById("search-trigger");
  const searchOverlay = document.getElementById("search-overlay");
  const searchCloseBtn = document.getElementById("search-close");
  const searchInput = document.getElementById("search-input");
  const chuyenMucTriggers = document.querySelectorAll(".nav-chuyen-muc-trigger");

  // Helper for Theme Icons
  function updateThemeIcons() {
    const sunIcon = document.querySelector(".sun-icon");
    const moonIcon = document.querySelector(".moon-icon");
    if (!sunIcon || !moonIcon) return;
    if (document.body.classList.contains("dark")) {
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
    } else {
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
    }
  }

  // Init Theme on load
  const currentTheme = localStorage.getItem("theme") || "light";
  if (currentTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  updateThemeIcons();

  // Theme toggle click
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
      updateThemeIcons();
    });
  }

  // Mega Menu handlers
  const openMegaMenu = () => megaMenu?.classList.add("active");
  const closeMegaMenu = () => megaMenu?.classList.remove("active");

  menuToggleBtn?.addEventListener("click", openMegaMenu);
  chuyenMucTriggers.forEach(trig => trig.addEventListener("click", openMegaMenu));
  megaMenuCloseBtn?.addEventListener("click", closeMegaMenu);
  megaMenuBackdrop?.addEventListener("click", closeMegaMenu);

  const megaLinks = megaMenu?.querySelectorAll("a");
  megaLinks?.forEach(link => link.addEventListener("click", closeMegaMenu));

  // Search overlay handlers
  if (searchTrigger && searchOverlay) {
    searchTrigger.addEventListener("click", () => {
      searchOverlay.classList.add("active");
      setTimeout(() => searchInput?.focus(), 100);
    });
  }

  const closeSearch = () => {
    searchOverlay?.classList.remove("active");
    if (searchInput) searchInput.value = "";
  };

  searchCloseBtn?.addEventListener("click", closeSearch);
  searchOverlay?.addEventListener("click", (e) => {
    if (e.target === searchOverlay) closeSearch();
  });

  // Search input change/enter
  searchInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && onSearch) {
      const query = searchInput.value.trim();
      if (query) {
        closeSearch();
        onSearch(query);
      }
    }
  });
}

// Function to update the navbar active link highlight
export function updateActiveNavLink(hash) {
  const homeLink = document.querySelector(".nav-home-link");
  const blogLink = document.querySelector(".nav-blog-link");
  
  homeLink?.classList.remove("active");
  blogLink?.classList.remove("active");

  if (hash === "#/" || hash === "" || hash.startsWith("#/ #")) {
    homeLink?.classList.add("active");
  } else if (hash.startsWith("#/blog") || hash.includes("bai-viet")) {
    blogLink?.classList.add("active");
  }
}
