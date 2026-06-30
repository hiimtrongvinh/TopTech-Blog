(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(e){if(e.ep)return;e.ep=!0;const c=n(e);fetch(e.href,c)}})();function L(t){return!t||t.startsWith("http")||t.startsWith("data:")?t:`/TopTech-Blog/${t.replace(/^\//,"")}`}function dt(t){t.innerHTML=`
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
          <img class="logo-img" src="${L("/logo-toptech-color.svg")}" alt="TopTech Logo">
        </a>

        <!-- Right: Desktop Links & Actions -->
        <div class="header-actions">
          <ul class="nav-links desktop-only" style="margin-right: 0.5rem;">
            <li><a href="javascript:void(0)" class="nav-chuyen-muc-trigger">Chuyên mục</a></li>
            <li><a href="#/ #tac-gia">Tác giả</a></li>
          </ul>

          <!-- Admin write shortcut -->
          <a href="#/admin" class="write-post-btn" title="Cổng quản trị blog">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            <span class="desktop-only" style="margin-left: 0.3rem;">Viết bài</span>
          </a>

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
              <h4><a href="#/chuyen-muc/Tin công nghệ">Tin công nghệ</a></h4>
              <ul>
                <li><a href="#/chuyen-muc/Điện thoại">Điện thoại</a></li>
                <li><a href="#/chuyen-muc/Máy tính">Máy tính</a></li>
                <li><a href="#/chuyen-muc/Thiết bị thông minh">Thiết bị thông minh</a></li>
                <li><a href="#/chuyen-muc/Xe điện">Xe điện</a></li>
              </ul>
            </div>

            <!-- Col 2: AI -->
            <div class="mega-col">
              <h4><a href="#/chuyen-muc/AI">AI</a></h4>
              <ul>
                <li><a href="#/chuyen-muc/Machine Learning">Machine Learning</a></li>
                <li><a href="#/chuyen-muc/Generative AI">Generative AI</a></li>
                <li><a href="#/chuyen-muc/ChatGPT & LLMs">ChatGPT & LLMs</a></li>
                <li><a href="#/chuyen-muc/Thị giác máy tính">Thị giác máy tính</a></li>
              </ul>
            </div>

            <!-- Col 3: Chuyển đổi số -->
            <div class="mega-col">
              <h4><a href="#/chuyen-muc/Chuyển đổi số">Chuyển đổi số</a></h4>
              <ul>
                <li><a href="#/chuyen-muc/Doanh nghiệp">Doanh nghiệp</a></li>
                <li><a href="#/chuyen-muc/Giải pháp đám mây">Giải pháp đám mây</a></li>
                <li><a href="#/chuyen-muc/IoT & Automation">IoT & Automation</a></li>
                <li><a href="#/chuyen-muc/Bảo mật dữ liệu">Bảo mật dữ liệu</a></li>
              </ul>
            </div>

            <!-- Col 4: Review -->
            <div class="mega-col">
              <h4><a href="#/chuyen-muc/Review">Review</a></h4>
              <ul>
                <li><a href="#/chuyen-muc/Đánh giá Laptop">Đánh giá Laptop</a></li>
                <li><a href="#/chuyen-muc/Đánh giá Smartphone">Đánh giá Smartphone</a></li>
                <li><a href="#/chuyen-muc/Đồ công nghệ khác">Đồ công nghệ khác</a></li>
                <li><a href="#/chuyen-muc/Trải nghiệm dịch vụ">Trải nghiệm dịch vụ</a></li>
              </ul>
            </div>

            <!-- Col 5: Phần mềm -->
            <div class="mega-col">
              <h4><a href="#/chuyen-muc/Phần mềm">Phần mềm</a></h4>
              <ul>
                <li><a href="#/chuyen-muc/Công cụ lập trình">Công cụ lập trình</a></li>
                <li><a href="#/chuyen-muc/Phần mềm văn phòng">Phần mềm văn phòng</a></li>
                <li><a href="#/chuyen-muc/Hệ điều hành">Hệ điều hành</a></li>
                <li><a href="#/chuyen-muc/Ứng dụng di động">Ứng dụng di động</a></li>
              </ul>
            </div>

            <!-- Col 6: IT -->
            <div class="mega-col">
              <h4><a href="#/chuyen-muc/IT">IT</a></h4>
              <ul>
                <li><a href="#/chuyen-muc/Lập trình">Lập trình</a></li>
                <li><a href="#/chuyen-muc/Quản trị mạng">Quản trị mạng</a></li>
                <li><a href="#/chuyen-muc/Cơ sở dữ liệu">Cơ sở dữ liệu</a></li>
                <li><a href="#/chuyen-muc/DevOps">DevOps</a></li>
              </ul>
            </div>

            <!-- Col 7: Giải pháp công nghệ -->
            <div class="mega-col">
              <h4><a href="#/chuyen-muc/Giải pháp công nghệ">Giải pháp công nghệ</a></h4>
              <ul>
                <li><a href="#/chuyen-muc/AI cho doanh nghiệp">AI cho doanh nghiệp</a></li>
                <li><a href="#/chuyen-muc/Tự động hóa quy trình">Tự động hóa quy trình</a></li>
                <li><a href="#/chuyen-muc/Hạ tầng số">Hạ tầng số</a></li>
                <li><a href="#/chuyen-muc/ERP & CRM">ERP & CRM</a></li>
              </ul>
            </div>

            <!-- Col 8: Casestudy -->
            <div class="mega-col">
              <h4><a href="#/chuyen-muc/Casestudy">Casestudy</a></h4>
              <ul>
                <li><a href="#/chuyen-muc/Thành công tiêu biểu">Thành công tiêu biểu</a></li>
                <li><a href="#/chuyen-muc/Phân tích thất bại">Phân tích thất bại</a></li>
                <li><a href="#/chuyen-muc/Khảo sát thực tế">Khảo sát thực tế</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Search Modal Overlay -->
    <div class="search-overlay" id="search-overlay">
      <div class="search-container">
        <div class="search-modal-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem;">
          <h3 style="font-size: 1.1rem; font-weight: 700; margin: 0; color: var(--text-primary); text-transform: uppercase; letter-spacing: 0.05em; font-family: var(--font-heading);">Tìm kiếm bài viết</h3>
          <button class="search-close-btn" id="search-close" aria-label="Close search" style="background: transparent; border: none; color: var(--text-muted); cursor: pointer; padding: 0.2rem; display: flex; align-items: center; justify-content: center; border-radius: 50%; width: 28px; height: 28px; transition: background-color var(--transition-fast);">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div style="position: relative;">
          <input type="text" class="search-input" id="search-input" placeholder="Nhập từ khóa cần tìm..." aria-label="Search posts">
          <div style="position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none; display: flex; align-items: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
          </div>
        </div>
      </div>
    </div>
  `}function ht(t){const a=document.getElementById("theme-toggle"),n=document.getElementById("menu-toggle"),i=document.getElementById("mega-menu"),e=document.getElementById("mega-menu-close"),c=document.getElementById("mega-menu-backdrop"),s=document.getElementById("search-trigger"),r=document.getElementById("search-overlay"),l=document.getElementById("search-close"),u=document.getElementById("search-input"),v=document.querySelectorAll(".nav-chuyen-muc-trigger");function k(){const g=document.querySelector(".sun-icon"),p=document.querySelector(".moon-icon");!g||!p||(document.body.classList.contains("dark")?(g.style.display="block",p.style.display="none"):(g.style.display="none",p.style.display="block"))}(localStorage.getItem("theme")||"light")==="dark"?document.body.classList.add("dark"):document.body.classList.remove("dark"),k(),a&&a.addEventListener("click",()=>{document.body.classList.contains("dark")?(document.body.classList.remove("dark"),localStorage.setItem("theme","light")):(document.body.classList.add("dark"),localStorage.setItem("theme","dark")),k()});const o=()=>i==null?void 0:i.classList.add("active"),m=()=>i==null?void 0:i.classList.remove("active");n==null||n.addEventListener("click",o),v.forEach(g=>g.addEventListener("click",o)),e==null||e.addEventListener("click",m),c==null||c.addEventListener("click",m);const d=i==null?void 0:i.querySelectorAll("a");d==null||d.forEach(g=>g.addEventListener("click",m)),s&&r&&s.addEventListener("click",()=>{r.classList.add("active"),setTimeout(()=>u==null?void 0:u.focus(),100)});const f=()=>{r==null||r.classList.remove("active"),u&&(u.value="")};l==null||l.addEventListener("click",f),r==null||r.addEventListener("click",g=>{g.target===r&&f()}),u==null||u.addEventListener("keydown",g=>{if(g.key==="Enter"&&t){const p=u.value.trim();p&&(f(),t(p))}})}function gt(t){const a=document.querySelector(".nav-home-link"),n=document.querySelector(".nav-blog-link"),i=document.querySelector(".write-post-btn");a==null||a.classList.remove("active"),n==null||n.classList.remove("active"),i==null||i.classList.remove("active"),t==="#/"||t===""||t.startsWith("#/ #")?a==null||a.classList.add("active"):t.startsWith("#/blog")||t.includes("bai-viet")?n==null||n.classList.add("active"):t.startsWith("#/admin")&&(i==null||i.classList.add("active"))}function mt(t){t.innerHTML=`
    <footer>
      <div class="container footer-container">
        <!-- Top part: Logo & Description (Row Layout) -->
        <div class="footer-top-row">
          <a href="#/" class="logo">
            <img class="logo-img-footer" src="${L("/logo-toptech-monochrome.svg")}" alt="TopTech Logo Đơn Sắc">
          </a>
          <p class="footer-desc">Với tầm nhìn trở thành một trong những website chia sẻ kiến thức công nghệ và giải pháp
            số uy tín tại Việt Nam, đồng hành cùng doanh nghiệp trên hành trình chuyển đổi số, TopTech mang trong mình sứ
            mệnh cao cả - mang công nghệ đến gần hơn với doanh nghiệp và cộng đồng thông qua những nội dung dễ hiểu, chính
            xác và có giá trị ứng dụng cao.</p>
        </div>

        <!-- Middle part: Columns Grid -->
        <div class="footer-links-grid">
          <!-- Col 1 -->
          <div>
            <h4 class="footer-col-title">Chuyên mục</h4>
            <ul class="footer-links">
              <li><a href="#/chuyen-muc/Tin công nghệ">Tin công nghệ</a></li>
              <li><a href="#/chuyen-muc/AI">AI</a></li>
              <li><a href="#/chuyen-muc/Chuyển đổi số">Chuyển đổi số</a></li>
              <li><a href="#/chuyen-muc/Review">Review</a></li>
            </ul>
          </div>

          <!-- Col 2 -->
          <div>
            <h4 class="footer-col-title">Phân loại</h4>
            <ul class="footer-links">
              <li><a href="#/chuyen-muc/Phần mềm">Phần mềm</a></li>
              <li><a href="#/chuyen-muc/IT">IT</a></li>
              <li><a href="#/chuyen-muc/Giải pháp công nghệ">Giải pháp công nghệ</a></li>
              <li><a href="#/chuyen-muc/Casestudy">Casestudy</a></li>
            </ul>
          </div>

          <!-- Col 3 -->
          <div>
            <h4 class="footer-col-title">Liên kết nhanh</h4>
            <ul class="footer-links">
              <li><a href="#/">Trang chủ</a></li>
              <li><a href="#/ #tac-gia">Tác giả</a></li>
              <li><a href="#/">Tin tức mới</a></li>
              <li><a href="#/">Về chúng tôi</a></li>
            </ul>
          </div>

          <!-- Col 4 -->
          <div>
            <h4 class="footer-col-title">Hỗ trợ</h4>
            <ul class="footer-links">
              <li><a href="#">Điều khoản sử dụng</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Liên hệ quảng cáo</a></li>
              <li><a href="#">Sơ đồ trang</a></li>
            </ul>
          </div>
        </div>

        <!-- Bottom part: Socials & Copyright -->
        <div class="footer-bottom">
          <div class="social-links">
            <a href="#" class="social-icon-btn" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" class="social-icon-btn" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
              </svg>
            </a>
            <a href="#" class="social-icon-btn" aria-label="Pinterest">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </a>
            <a href="#" class="social-icon-btn" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.54a29 29 0 0 0 .46 5.12 2.78 2.78 0 0 0 1.95 1.96c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.12 29 29 0 0 0-.46-5.12z">
                </path>
                <polygon points="9.75 15.02 15.5 11.54 9.75 8.06 9.75 15.02"></polygon>
              </svg>
            </a>
            <a href="#" class="social-icon-btn" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" class="social-icon-btn" aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </a>
          </div>
          <div class="copyright">&copy; 2026 toptech.com. All rights reserved.</div>
        </div>
      </div>
    </footer>
  `}function rt(t,a,n){t.innerHTML=`
    <main class="container">
    <!-- Hero Quote Banner -->
    <div class="hero-quote-block">
      <div class="quote-icon">“</div>
      <p class="hero-quote-text">Công nghệ không chỉ là xu hướng mà còn là động lực giúp nâng cao năng suất, tối ưu vận
        hành và tạo ra lợi thế cạnh tranh bền vững.</p>
      <p class="hero-sub-quote"><strong>TOPTECH</strong> - nền tảng blog chia sẻ kiến thức về công nghệ, trí tuệ nhân
        tạo (AI), chuyển đổi số, phần mềm doanh nghiệp và các xu hướng công nghệ mới nhất, mang đến những bài viết
        chuyên sâu, hướng dẫn thực tiễn và giải pháp giúp cá nhân, doanh nghiệp ứng dụng công nghệ hiệu quả vào công
        việc và kinh doanh.</p>
    </div>

    <!-- 1. Full-width Main Hero Banner (Robot post) -->
    <section class="hero-banner-full" id="hero-banner-container">
      <!-- Rendered dynamically -->
    </section>

    <!-- 2. Hero Grid: 1 Big Laptop Featured & Side List -->
    <section class="hero-grid" id="blog">
      <!-- Left: Laptop Post -->
      <div class="featured-big" id="hero-left-container">
        <!-- Rendered dynamically -->
      </div>

      <!-- Right: Vertically stacked posts -->
      <div class="featured-side-list" id="hero-side-container">
        <!-- Rendered dynamically -->
      </div>
    </section>

    <!-- Bottom of Hero: Horizontal Grid of 4 Small Cards -->
    <section class="small-post-grid" id="hero-small-grid-container">
      <!-- Rendered dynamically -->
    </section>

    <!-- Section: Bài viết nổi bật -->
    <section class="section-padding" id="noi-bat">
      <div class="section-title-wrapper">
        <h2 class="section-title">Bài viết nổi bật</h2>
        <a href="#/chuyen-muc/AI" class="view-more-btn">
          Đọc thêm
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>

      <!-- Numbered List 1-6 -->
      <div class="featured-numbers-grid" id="featured-numbers-container">
        <!-- Rendered dynamically -->
      </div>
    </section>

    <!-- Section: Mới cập nhật, AI (Giữa), Xu hướng (Phải) -->
    <section class="section-padding" style="border-top: 1px solid var(--border-color); padding-top: 3rem;">
      <div class="split-sections-grid">
        <!-- Column 1: Mới cập nhật (Trái) -->
        <div class="split-col" id="col-new-updates">
          <div class="sub-section-title-wrapper">
            <h3 class="sub-section-title">Mới cập nhật</h3>
          </div>
          <div class="split-col" id="new-updates-content" style="gap: 1.2rem;">
            <!-- Rendered dynamically -->
          </div>
          <button class="refresh-btn" id="refresh-new-updates" aria-label="Refresh updates">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
              <path d="M3 3v5h5"></path>
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
              <path d="M16 16h5v5"></path>
            </svg>
            Cập nhật
          </button>
        </div>

        <!-- Column 2: AI Featured (Giữa) -->
        <div class="split-col-center" id="col-center-ai">
          <!-- Rendered dynamically -->
        </div>

        <!-- Column 3: Xu hướng (Phải) -->
        <div class="split-col" id="col-trending">
          <div class="sub-section-title-wrapper">
            <h3 class="sub-section-title">Xu hướng</h3>
          </div>
          <div class="split-col" id="trending-content" style="gap: 1.2rem;">
            <!-- Rendered dynamically -->
          </div>
        </div>
      </div>
    </section>

    <!-- Section: Review (Full-width dưới cụm tin) -->
    <section class="section-padding" style="border-top: 1px solid var(--border-color); padding-top: 3rem;">
      <div class="sub-section-title-wrapper">
        <h3 class="sub-section-title">Review</h3>
      </div>
      <div class="review-grid-four" id="reviews-content">
        <!-- Rendered dynamically -->
      </div>
    </section>

    <!-- Section: Bảng tin chuyên mục -->
    <section class="section-padding" id="chuyen-muc">
      <div class="section-title-wrapper">
        <h2 class="section-title">Bảng tin chuyên mục</h2>
      </div>

      <!-- Categories Columns (8 categories in grid) -->
      <div class="categories-tabs-grid" id="category-columns-container">
        <!-- Rendered dynamically -->
      </div>
    </section>

    <!-- Section: Đội ngũ tác giả -->
    <section class="section-padding authors-section-bg" id="tac-gia">
      <div class="container">
        <div class="section-title-wrapper">
          <h2 class="section-title">Đội ngũ tác giả</h2>
        </div>
        <div class="authors-grid">
          <div class="author-card">
            <div class="author-avatar-wrapper">
              <img class="author-avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" alt="Ms. Phương Linh">
            </div>
            <h4 class="author-name">Ms. Phương Linh</h4>
            <span class="author-role">Content writer</span>
          </div>
          <div class="author-card">
            <div class="author-avatar-wrapper">
              <img class="author-avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150" alt="Ms. Ngọc Thanh">
            </div>
            <h4 class="author-name">Ms. Ngọc Thanh</h4>
            <span class="author-role">Content writer</span>
          </div>
          <div class="author-card">
            <div class="author-avatar-wrapper">
              <img class="author-avatar" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150" alt="Mr. Lê Mạnh">
            </div>
            <h4 class="author-name">Mr. Lê Mạnh</h4>
            <span class="author-role">CEO</span>
          </div>
          <div class="author-card">
            <div class="author-avatar-wrapper">
              <img class="author-avatar" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150" alt="Ms. Kim Phượng">
            </div>
            <h4 class="author-name">Ms. Kim Phượng</h4>
            <span class="author-role">Content writer</span>
          </div>
          <div class="author-card">
            <div class="author-avatar-wrapper">
              <img class="author-avatar" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150" alt="Ms. Trà My">
            </div>
            <h4 class="author-name">Ms. Trà My</h4>
            <span class="author-role">Developer</span>
          </div>
        </div>
        <div style="text-align: center; margin-top: 3rem;">
          <a href="#/chuyen-muc/AI" class="view-more-btn" style="display: inline-flex;">Tìm hiểu thêm</a>
        </div>
      </div>
    </section>
    </main>
  `,ut(a),pt(a),vt(a),ft(a,n),yt(a)}function ut(t){const a=t.filter(u=>u.featured),n=a[0]||t.find(u=>u.id===1)||t[0];let i=a[1]||t.find(u=>u.id===2)||t[1];i&&n&&i.id===n.id&&(i=t.find(u=>u.id!==n.id)||t[1]);const e=document.getElementById("hero-banner-container");n&&e&&(e.innerHTML=`
      <img src="${L(n.image)}" alt="${n.title}">
      <div class="hero-banner-full-overlay"></div>
      <div class="hero-banner-full-content">
        <a href="#/chuyen-muc/${n.category}" class="hero-banner-full-tag">${n.category}</a>
        <h3 class="hero-banner-full-title"><a href="#/bai-viet/${n.id}">${n.title}</a></h3>
        <div class="post-meta">
          <div class="post-author">
            <span>${n.author} ${n.authorTag||""}</span>
          </div>
          <span>&bull;&nbsp; ${n.date}</span>
          <span>&bull;&nbsp; ${n.readTime}</span>
          <span style="margin-left: auto; display: flex; align-items: center; gap: 0.3rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${n.views}
          </span>
          <span style="display: flex; align-items: center; gap: 0.3rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${n.comments}
          </span>
        </div>
      </div>
    `);const c=document.getElementById("hero-left-container");i&&c&&(c.innerHTML=`
      <img src="${L(i.image)}" alt="${i.title}">
      <div class="featured-big-overlay"></div>
      <div class="featured-big-content">
        <a href="#/chuyen-muc/${i.category}" class="featured-big-tag">${i.category}</a>
        <h3 class="featured-big-title"><a href="#/bai-viet/${i.id}">${i.title}</a></h3>
        <div class="post-meta">
          <div class="post-author">
            <span>${i.author} ${i.authorTag||""}</span>
          </div>
          <span>&bull;&nbsp; ${i.date}</span>
          <span>&bull;&nbsp; ${i.readTime}</span>
          <span style="margin-left: auto; display: flex; align-items: center; gap: 0.3rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${i.views}
          </span>
          <span style="display: flex; align-items: center; gap: 0.3rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${i.comments}
          </span>
        </div>
      </div>
    `);const s=document.getElementById("hero-side-container");let r=[];if(s){const u=[n==null?void 0:n.id,i==null?void 0:i.id].filter(Boolean);r=t.filter(v=>!u.includes(v.id)).slice(0,4),s.innerHTML=r.map(v=>`
      <div class="side-post-card">
        <img class="side-post-img" src="${L(v.image)}" alt="${v.title}">
        <div class="side-post-info">
          <h4 class="side-post-title"><a href="#/bai-viet/${v.id}">${v.title}</a></h4>
          <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem;">
            <span>${v.author} ${v.authorTag||""} &bull; ${v.date}</span>
          </div>
          <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem;">
            <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${v.views}</span>
            <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${v.comments}</span>
          </div>
        </div>
      </div>
    `).join("")}const l=document.getElementById("hero-small-grid-container");if(l){const u=[n==null?void 0:n.id,i==null?void 0:i.id,...r.map(k=>k.id)].filter(Boolean),v=t.filter(k=>!u.includes(k.id)).slice(0,4);l.innerHTML=v.map(k=>`
      <div class="small-post-card">
        <div class="small-post-img-wrapper">
          <img src="${L(k.image)}" alt="${k.title}">
        </div>
        <h4 class="small-post-title"><a href="#/bai-viet/${k.id}">${k.title}</a></h4>
        <div class="post-meta" style="color: var(--text-muted); font-size: 0.7rem; justify-content: space-between;">
          <span>${k.author} &bull; ${k.date}</span>
          <div style="display: gap: 0.5rem; display: flex;">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${k.views}</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${k.comments}</span>
          </div>
        </div>
      </div>
    `).join("")}}function pt(t){const a=document.getElementById("featured-numbers-container");if(!a)return;const n=t.filter(e=>e.featured)[0]||t.find(e=>e.id===1),i=t.filter(e=>e.id!==(n==null?void 0:n.id)).slice(0,6);a.innerHTML=i.map((e,c)=>`
    <div class="number-post-card">
      <span class="post-number">#${c+1}</span>
      <div class="number-post-img-wrapper">
        <img src="${L(e.image)}" alt="${e.title}">
      </div>
      <div class="number-post-info">
        <h4 class="number-post-title"><a href="#/bai-viet/${e.id}">${e.title}</a></h4>
        <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem;">
          <span>${e.author} ${e.authorTag||""} &bull; ${e.date}</span>
        </div>
        <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem;">
          <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${e.views}</span>
          <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${e.comments}</span>
        </div>
      </div>
    </div>
  `).join("")}function vt(t){const a=document.getElementById("new-updates-content"),n=document.getElementById("col-center-ai"),i=document.getElementById("trending-content"),e=document.getElementById("reviews-content");if(a){const c=t[0]||t.find(l=>l.id===3),s=t[1]||t.find(l=>l.id===4),r=t[2]||t.find(l=>l.id===7);a.innerHTML=[c,s,r].filter(Boolean).map(l=>`
      <div class="post-card-mini">
        <img class="post-card-mini-img" src="${L(l.image)}" alt="${l.title}">
        <div class="post-card-mini-info">
          <a href="#/chuyen-muc/${l.category}" class="post-card-mini-tag">${l.category}</a>
          <h4 class="post-card-mini-title"><a href="#/bai-viet/${l.id}">${l.title}</a></h4>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${l.author} &bull; ${l.date}</span>
        </div>
      </div>
    `).join("")}if(n){const c=t.filter(u=>u.category==="AI"),s=c[0]||t.find(u=>u.id===5),r=c[1]||t.find(u=>u.id===6),l=c[2]||t.find(u=>u.id===8);n.innerHTML=`
      <!-- Main Center Post -->
      <div class="center-main-post">
        <a href="#/chuyen-muc/${s.category}" class="center-main-tag">${s.category}</a>
        <h4 class="center-main-title"><a href="#/bai-viet/${s.id}">${s.title}</a></h4>
        <div class="post-meta" style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.2rem;">
          <span>${s.author} ${s.authorTag||""} &bull; ${s.date}</span>
        </div>
        <div class="center-main-img-wrapper">
          <img src="${L(s.image)}" alt="${s.title}">
        </div>
      </div>

      <!-- Sub grid (2 cards side by side) -->
      <div class="center-sub-row">
        <!-- Sub Left -->
        <div class="center-sub-card">
          <a href="#/chuyen-muc/${r.category}" class="post-card-mini-tag" style="font-size: 0.65rem;">${r.category}</a>
          <h5 class="center-sub-title"><a href="#/bai-viet/${r.id}">${r.title}</a></h5>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${r.author}</span>
        </div>

        <!-- Sub Right -->
        <div class="center-sub-card">
          <a href="#/chuyen-muc/${l.category}" class="post-card-mini-tag" style="font-size: 0.65rem;">${l.category}</a>
          <h5 class="center-sub-title"><a href="#/bai-viet/${l.id}">${l.title}</a></h5>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${l.author}</span>
        </div>
      </div>
    `}if(i){const c=[...t].sort((s,r)=>(r.views||0)-(s.views||0)).slice(0,5);i.innerHTML=c.map(s=>`
      <div class="trending-post-card">
        <h4 class="trending-post-title"><a href="#/bai-viet/${s.id}">${s.title}</a></h4>
        <span style="font-size: 0.7rem; color: var(--text-muted);">${s.author} ${s.authorTag||""} &bull; ${s.date}</span>
      </div>
    `).join("")}if(e){const c=t.filter(l=>l.category==="Review"),s=t.filter(l=>l.category!=="Review"),r=[...c,...s].slice(0,4);e.innerHTML=r.map(l=>`
      <div class="review-post-card">
        <div class="review-post-img-wrapper">
          <img src="${L(l.image)}" alt="${l.title}">
        </div>
        <a href="#/chuyen-muc/${l.category}" class="post-card-mini-tag" style="font-size: 0.65rem; margin-top: 0.2rem;">${l.category}</a>
        <h4 class="review-post-title"><a href="#/bai-viet/${l.id}">${l.title}</a></h4>
        <span style="font-size: 0.7rem; color: var(--text-muted);">${l.author} &bull; ${l.date}</span>
      </div>
    `).join("")}}function ft(t,a){const n=document.getElementById("category-columns-container");n&&(n.innerHTML=a.map((i,e)=>{const c=t.filter(r=>r.category===i),s=[];for(let r=0;r<4;r++)s.push(c[r%c.length]||t[(e*2+r)%t.length]);return`
      <div class="category-column">
        <div class="category-header-wrapper">
          <a href="#/chuyen-muc/${i}" class="category-title-header">${i}</a>
        </div>
        <div class="split-col" style="gap: 1rem;">
          ${s.map((r,l)=>`
            <div class="cat-post-card ${l===0?"has-image":""}">
              <div class="cat-post-img-wrapper">
                <img src="${L(r.image)}" alt="${r.title}">
              </div>
              <h4 class="cat-post-title"><a href="#/bai-viet/${r.id}">${r.title}</a></h4>
              <span style="font-size: 0.7rem; color: var(--text-muted);">${r.date}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `}).join(""))}function yt(t){const a=document.getElementById("refresh-new-updates"),n=document.getElementById("new-updates-content");a&&a.addEventListener("click",()=>{a.classList.add("spinning"),setTimeout(()=>{a.classList.remove("spinning");const i=[...t].filter(r=>r.id!==5&&r.id!==6).sort(()=>.5-Math.random()),e=i[0],c=i[1],s=i[2];n&&(n.innerHTML=[e,c,s].map(r=>`
            <div class="post-card-mini">
              <img class="post-card-mini-img" src="${L(r.image||"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=250")}" alt="${r.title}">
              <div class="post-card-mini-info">
                <a href="#/chuyen-muc/${r.category}" class="post-card-mini-tag">${r.category}</a>
                <h4 class="post-card-mini-title"><a href="#/bai-viet/${r.id}">${r.title}</a></h4>
                <span style="font-size: 0.7rem; color: var(--text-muted);">${r.author} &bull; ${r.date}</span>
              </div>
            </div>
          `).join(""))},600)})}const X={"Điện thoại":"Tin công nghệ","Máy tính":"Tin công nghệ","Thiết bị thông minh":"Tin công nghệ","Xe điện":"Tin công nghệ","Machine Learning":"AI","Generative AI":"AI","ChatGPT & LLMs":"AI","Thị giác máy tính":"AI","Doanh nghiệp":"Chuyển đổi số","Giải pháp đám mây":"Chuyển đổi số","IoT & Automation":"Chuyển đổi số","Bảo mật dữ liệu":"Chuyển đổi số","Đánh giá Laptop":"Review","Đánh giá Smartphone":"Review","Đồ công nghệ khác":"Review","Trải nghiệm dịch vụ":"Review","Công cụ lập trình":"Phần mềm","Phần mềm văn phòng":"Phần mềm","Hệ điều hành":"Phần mềm","Ứng dụng di động":"Phần mềm","Lập trình":"IT","Quản trị mạng":"IT","Cơ sở dữ liệu":"IT",DevOps:"IT","AI cho doanh nghiệp":"Giải pháp công nghệ","Tự động hóa quy trình":"Giải pháp công nghệ","Hạ tầng số":"Giải pháp công nghệ","ERP & CRM":"Giải pháp công nghệ","Thành công tiêu biểu":"Casestudy","Phân tích thất bại":"Casestudy","Khảo sát thực tế":"Casestudy"},bt={"Tin công nghệ":["Điện thoại","Máy tính","Thiết bị thông minh","Xe điện"],AI:["Machine Learning","Generative AI","ChatGPT & LLMs","Thị giác máy tính"],"Chuyển đổi số":["Doanh nghiệp","Giải pháp đám mây","IoT & Automation","Bảo mật dữ liệu"],Review:["Đánh giá Laptop","Đánh giá Smartphone","Đồ công nghệ khác","Trải nghiệm dịch vụ"],"Phần mềm":["Công cụ lập trình","Phần mềm văn phòng","Hệ điều hành","Ứng dụng di động"],IT:["Lập trình","Quản trị mạng","Cơ sở dữ liệu","DevOps"],"Giải pháp công nghệ":["AI cho doanh nghiệp","Tự động hóa quy trình","Hạ tầng số","ERP & CRM"],Casestudy:["Thành công tiêu biểu","Phân tích thất bại","Khảo sát thực tế"]};function st(t,a,n,i=!1){const e=decodeURIComponent(a);let c=[],s=X[e],r=!!s;i?c=n.filter(d=>d.title.toLowerCase().includes(e.toLowerCase())||d.category.toLowerCase().includes(e.toLowerCase())||d.subcategory&&d.subcategory.toLowerCase().includes(e.toLowerCase())||d.description&&d.description.toLowerCase().includes(e.toLowerCase())):r?c=n.filter(d=>d.subcategory&&d.subcategory.toLowerCase()===e.toLowerCase()||d.category.toLowerCase()===e.toLowerCase()):c=n.filter(d=>d.category.toLowerCase()===e.toLowerCase()||d.subcategory&&X[d.subcategory]&&X[d.subcategory].toLowerCase()===e.toLowerCase());let l="newest",u=6,v="",k="display: flex; justify-content: space-between; align-items: center; width: 100%; flex-wrap: wrap; gap: 1.5rem;";if(i)k="display: block; text-align: center; width: 100%;",v=`
      <span class="category-eyebrow" style="font-size: 0.95rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--primary-color); display: block; margin-bottom: 0.5rem;">KẾT QUẢ TÌM KIẾM</span>
      <h1 class="category-page-title" style="font-size: 2.2rem; font-weight: 850; text-transform: uppercase; margin: 0; color: var(--text-primary);">"${e.toUpperCase()}"</h1>
    `;else{const d=r?s:e,f=bt[d]||[];v=`
      <!-- Left: Major category title -->
      <div>
        <h1 class="category-page-title" style="font-size: 2.5rem; font-weight: 850; text-transform: uppercase; margin: 0; line-height: 1.1; color: var(--text-primary);">
          <a href="#/chuyen-muc/${d}" style="color: inherit; text-decoration: none;">${d.toUpperCase()}</a>
        </h1>
      </div>
      
      <!-- Right: Capsule subcategory tag pills list -->
      <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: center;">
        ${f.map(g=>{const p=e.toLowerCase()===g.toLowerCase();return`
            <a href="#/chuyen-muc/${g}" style="display: inline-block; padding: 0.45rem 1.1rem; font-size: 0.82rem; font-weight: 600; border-radius: 50px; text-decoration: none; border: 1.5px solid ${p?"var(--primary-color)":"var(--border-color)"}; background-color: ${p?"var(--primary-color)":"var(--bg-main)"}; color: ${p?"#fff":"var(--text-secondary)"}; transition: all var(--transition-fast);" class="subcat-pill ${p?"active-pill":""}">
              ${g}
            </a>
          `}).join("")}
      </div>
    `}t.innerHTML=`
    <div class="category-page-header" style="padding: 2.5rem 0; background: var(--bg-surface); border-bottom: 1px solid var(--border-color); transition: background-color var(--transition-normal), border-color var(--transition-normal);">
      <div class="container category-header-content" style="${k}">
        ${v}
      </div>
    </div>

    <div class="container section-padding">
      <!-- Filter controls -->
      <div class="category-filters-bar">
        <span class="filters-label">Sắp xếp theo:</span>
        <div class="filters-group">
          <button class="filter-tab-btn active" data-filter="newest">Mới nhất</button>
          <button class="filter-tab-btn" data-filter="views">Xem nhiều nhất</button>
          <button class="filter-tab-btn" data-filter="comments">Bình luận nhiều nhất</button>
        </div>
      </div>

      <!-- Articles Grid -->
      <div class="category-articles-grid" id="category-grid">
        <!-- populated dynamically -->
      </div>

      <!-- Load More -->
      <div class="load-more-wrapper" id="load-more-container" style="display: none;">
        <button class="load-more-btn" id="load-more-articles-btn">
          Xem thêm bài viết
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
      </div>
    </div>
  `;function B(){const d=document.getElementById("category-grid");if(!d)return;let f=[...c];l==="newest"?f.sort((b,w)=>w.id-b.id):l==="views"?f.sort((b,w)=>w.views-b.views):l==="comments"&&f.sort((b,w)=>w.comments-b.comments);const g=f.slice(0,u);d.innerHTML=g.length===0?`
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px; transition: background-color var(--transition-normal), border-color var(--transition-normal);">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted); margin-bottom: 1rem;"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-primary);">Chưa có bài viết</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 400px; margin: 0 auto;">Chưa có bài viết nào thuộc chuyên mục này. Quản trị viên có thể đăng nhập vào trang Viết bài để cập nhật bài viết mới!</p>
        </div>
      `:g.map(b=>`
      <article class="cat-article-card">
        <div class="cat-card-img-wrapper">
          <img src="${L(b.image)}" alt="${b.title}">
          <a href="#/chuyen-muc/${b.subcategory||b.category}" class="cat-card-category">${b.subcategory||b.category}</a>
        </div>
        <div class="cat-card-content">
          <h3 class="cat-card-title"><a href="#/bai-viet/${b.id}">${b.title}</a></h3>
          <p class="cat-card-description">${b.description||"Chưa có mô tả chi tiết cho bài viết này. Nhấp vào để đọc bài viết..."}</p>
          
          <div class="post-meta" style="color: var(--text-muted); font-size: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 1rem; margin-top: auto; width: 100%;">
            <div class="post-author">
              <span class="post-author-name">${b.author}</span>
            </div>
            <span>&bull;&nbsp; ${b.date}</span>
            <span style="margin-left: auto; display: flex; align-items: center; gap: 0.25rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${b.views}
            </span>
            <span style="display: flex; align-items: center; gap: 0.25rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${b.comments}
            </span>
          </div>
        </div>
      </article>
    `).join("");const p=document.getElementById("load-more-container");p&&(f.length>u?p.style.display="block":p.style.display="none")}B();const o=document.getElementById("load-more-articles-btn");o&&o.addEventListener("click",()=>{u+=6,B()});const m=document.querySelectorAll(".filter-tab-btn");m.forEach(d=>{d.addEventListener("click",f=>{m.forEach(g=>g.classList.remove("active")),f.target.classList.add("active"),l=f.target.dataset.filter,u=6,B()})})}function wt(t){if(!t)return"";if(t.trim().startsWith("<")||t.includes("</p>")||t.includes("</div>")||t.includes("</td>")||t.includes("</figure>"))return t;const a=t.split(`
`);let n=!1,i="",e=[];for(let s=0;s<a.length;s++){let r=a[s].trim();if(r.startsWith("|")&&r.endsWith("|")){n||(n=!0,i='<div class="table-responsive"><table class="post-detail-table">');const l=r.split("|").slice(1,-1).map(v=>v.trim());if(l.every(v=>/^:?-+:?$/.test(v)))continue;i.includes('<table class="post-detail-table">')&&!i.includes("<thead>")&&!i.includes("<tbody>")?i+="<thead><tr>"+l.map(v=>`<th>${v}</th>`).join("")+"</tr></thead><tbody>":i+="<tr>"+l.map(v=>`<td>${v}</td>`).join("")+"</tr>"}else n&&(n=!1,i+="</tbody></table></div>",e.push(i),i=""),e.push(a[s])}n&&(i+="</tbody></table></div>",e.push(i)),t=e.join(`
`);let c=t.replace(/^### (.*$)/gim,'<h3 class="post-subheading-3">$1</h3>').replace(/^## (.*$)/gim,'<h2 class="post-subheading-2">$1</h2>').replace(/^# (.*$)/gim,'<h1 class="post-heading-1">$1</h1>').replace(/\!\[(.*?)\]\((.*?)\)/g,'<figure class="post-inline-figure"><img src="$2" alt="$1"><figcaption class="post-figcaption">$1</figcaption></figure>').replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/^\> (.*$)/gim,'<blockquote class="post-blockquote">$1</blockquote>').replace(/^\- (.*$)/gim,"<li>$1</li>").replace(/\`\`\`([\s\S]*?)\`\`\`/g,'<pre class="post-code-block"><code>$1</code></pre>').replace(/\`(.*?)\`/g,'<code class="post-inline-code">$1</code>').replace(/\n\n/g,"</p><p>");return c=c.replace(/(<li>.*<\/li>)/gim,"<ul>$1</ul>"),`<p>${c}</p>`}function xt(t,a,n){const i=parseInt(a,10),e=n.find(o=>o.id===i)||n[0];e.views+=1,localStorage.setItem("toptech_articles",JSON.stringify(n));const c=n.filter(o=>o.category===e.category&&o.id!==e.id).slice(0,4);e.commentsList||(e.commentsList=[{id:1,author:"Nguyễn Văn Hùng",date:"2 ngày trước",content:"Bài viết rất chi tiết và dễ hiểu! Tôi đang tìm hiểu về vấn đề này và thấy thông tin cực kỳ hữu ích cho công việc thực tế của mình.",avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=80&h=80"},{id:2,author:"Lê Minh Hạnh",date:"1 ngày trước",content:"TopTech chia sẻ kiến thức chuẩn quá, thiết kế giao diện bài viết đọc rất sướng mắt. Mong nhóm tác giả ra thêm nhiều bài viết sâu hơn nữa!",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80&h=80"}]),t.innerHTML=`
    <!-- Reading Progress Bar -->
    <div class="reading-progress-container">
      <div class="reading-progress-bar" id="reading-bar"></div>
    </div>

    <div class="container post-page-container section-padding">
      <div class="post-layout-grid">
        <!-- Main Column (75%) -->
        <main class="post-main-content">
          <!-- Category & Metadata -->
          <div class="post-detail-header">
            <a href="#/chuyen-muc/${e.category}" class="post-detail-category">${e.category}</a>
            <h1 class="post-detail-title">${e.title}</h1>
            
            <div class="post-meta" style="font-size: 0.9rem; color: var(--text-muted); border-bottom: 1px solid var(--border-color); padding-bottom: 1.5rem; margin-bottom: 2rem; display: flex; align-items: center; flex-wrap: wrap; gap: 0.8rem;">
              <div class="post-author" style="display: flex; align-items: center; gap: 0.3rem;">
                <span>Tác giả: <strong>${e.author}</strong> ${e.authorTag||""}</span>
              </div>
              <span>&bull;&nbsp; ${e.date}</span>
              <span>&bull;&nbsp; ${e.readTime}</span>
              
              ${sessionStorage.getItem("toptech_admin_logged_in")==="true"?`
                <span>&bull;</span>
                <button id="quick-edit-post-btn" style="background-color: var(--primary-color); color: #fff; border: 1px solid var(--primary-color); border-radius: 4px; padding: 0.2rem 0.5rem; font-size: 0.75rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 0.2rem;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                  Sửa bài
                </button>
              `:""}

              <span style="margin-left: auto; display: flex; align-items: center; gap: 0.3rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${e.views} lượt xem
              </span>
            </div>
          </div>

          <!-- Feature Image -->
          <div class="post-detail-img-wrapper">
            <img src="${L(e.image)}" alt="${e.title}">
          </div>

          <!-- Rich Text Content Body -->
          <div class="post-detail-body">
            ${e.content?`
              <p class="post-lead">${e.description||""}</p>
              ${wt(e.content)}
            `:`
              <p class="post-lead">${e.description||"Bài viết phân tích chuyên sâu về xu hướng công nghệ mới, hướng dẫn thực hành và đưa ra các giải pháp chuyển đổi số tối ưu hiệu suất cho doanh nghiệp."}</p>
              
              <h2>1. Bối cảnh và Thách thức hiện tại</h2>
              <p>Trong kỷ nguyên số hóa bùng nổ, việc áp dụng công nghệ không còn là sự lựa chọn mà đã trở thành yếu tố sống còn đối với mọi cá nhân và doanh nghiệp. Sự ra đời của các nền tảng trí tuệ nhân tạo (AI) thế hệ mới, giải pháp điện toán đám mây và hệ thống dữ liệu lớn (Big Data) đòi hỏi chúng ta phải có một tư duy thích ứng nhanh chóng và liên tục cập nhật kiến thức.</p>
              
              <blockquote class="post-blockquote">
                "Công nghệ không làm thay đổi thế giới một cách trực tiếp, nó thay đổi cách chúng ta tư duy và hành động để cùng nhau kiến tạo nên tương lai bền vững."
              </blockquote>

              <p>Nhiều tổ chức vẫn đang gặp khó khăn trong việc chuyển đổi từ quy trình làm việc thủ công sang tự động hóa do thiếu hụt nhân sự có trình độ chuyên môn hoặc không có một lộ trình tiếp cận khoa học. Điều này tạo ra khoảng cách lớn về năng lực cạnh tranh trên thị trường toàn cầu.</p>

              <h2>2. Giải pháp thực tiễn ứng dụng hiệu quả</h2>
              <p>Để giải quyết các thách thức trên, TopTech đề xuất một số giải pháp cốt lõi có thể triển khai ngay lập tức:</p>
              <ul>
                <li><strong>Tích hợp các công cụ AI hỗ trợ:</strong> Sử dụng chatbot thông minh và trợ lý ảo để tự động hóa quy trình chăm sóc khách hàng và tổng hợp thông tin sơ bộ.</li>
                <li><strong>Chuẩn hóa quy trình làm việc bằng phần mềm quản trị:</strong> Áp dụng các giải pháp ERP, CRM, và quản lý công cụ mã nguồn mở giúp kiểm soát tiến độ thời gian thực.</li>
                <li><strong>Đào tạo và nâng cao kỹ năng số cho nhân viên:</strong> Tổ chức các buổi workshop thực hành trực tiếp và tạo văn hóa học hỏi liên tục trong nội bộ.</li>
              </ul>

              <h2>3. Tầm nhìn và Xu hướng phát triển 2026</h2>
              <p>Nhìn về tương lai, các xu hướng công nghệ sẽ hướng tới sự cá nhân hóa cao hơn, bảo mật dữ liệu tuyệt đối nhờ công nghệ mã hóa tiên tiến và tăng cường tính bền vững, giảm thiểu năng lượng tiêu hao trong các trung tâm dữ liệu lớn.</p>
              <p>Chúng ta hãy cùng đồng hành cùng TopTech để đón đầu những làn sóng đổi mới sáng tạo, làm chủ các giải pháp công nghệ và gia tăng đột phá hiệu suất làm việc mỗi ngày.</p>
            `}
          </div>

          <!-- Comments Section -->
          <section class="post-comments-section">
            <h3 class="comments-title">Bình luận (<span id="comments-count">${e.commentsList.length}</span>)</h3>
            
            <!-- Add Comment Form -->
            <div class="add-comment-form">
              <div class="form-row">
                <input type="text" id="comment-author-name" placeholder="Tên của bạn..." required>
              </div>
              <div class="form-row">
                <textarea id="comment-text" rows="4" placeholder="Viết bình luận của bạn tại đây..." required></textarea>
              </div>
              <button class="submit-comment-btn" id="submit-comment-btn">Gửi bình luận</button>
            </div>

            <!-- Comments List -->
            <div class="comments-list" id="comments-list">
              <!-- populated dynamically -->
            </div>
          </section>
        </main>

        <!-- Sidebar Column (25%) -->
        <aside class="post-sidebar-content">
          <!-- Table of Contents (Mục lục) -->
          <div class="sidebar-widget toc-widget" id="post-toc-container" style="display: none;">
            <h4 class="widget-title" style="text-align: left; margin-bottom: 1rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.1rem;">Mục lục bài viết</h4>
            <ul class="toc-list" id="toc-list"></ul>
          </div>

          <div class="sidebar-widget">
            <h4 class="widget-title">Bài viết liên quan</h4>
            <div class="related-posts-list">
              ${c.length>0?c.map(o=>`
                <div class="related-post-card">
                  <div class="related-img-wrapper">
                    <img src="${L(o.image)}" alt="${o.title}">
                  </div>
                  <div class="related-post-info">
                    <h5 class="related-title"><a href="#/bai-viet/${o.id}">${o.title}</a></h5>
                    <span class="related-meta"><a href="#/chuyen-muc/${o.subcategory||o.category}" style="color: inherit; font-weight: 600;">${o.subcategory||o.category}</a> &bull; ${o.date}</span>
                  </div>
                </div>
              `).join(""):'<p style="color: var(--text-muted); font-size: 0.85rem;">Không có bài viết liên quan nào khác cùng chuyên mục.</p>'}
            </div>
          </div>

          <div class="sidebar-widget newsletter-widget">
            <h4 class="widget-title">Nhận tin công nghệ</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.5;">Đăng ký nhận bản tin công nghệ và các giải pháp số hữu ích nhất từ TopTech hàng tuần.</p>
            <input type="email" placeholder="Email của bạn..." class="widget-input" style="width:100%; box-sizing:border-box; margin-bottom: 0.8rem; padding: 0.6rem; border: 1px solid var(--border-color); border-radius: 6px;">
            <button class="view-more-btn" style="width: 100%; justify-content: center; background-color: var(--primary-color); color: #fff; border-color: var(--primary-color);">Đăng ký</button>
          </div>
        </aside>
      </div>
    </div>
  `;function s(){const o=document.getElementById("comments-list");if(!o)return;o.innerHTML=e.commentsList.map(d=>`
      <div class="comment-item">
        <img class="comment-avatar" src="${d.avatar}" alt="${d.author}">
        <div class="comment-content">
          <div class="comment-header">
            <span class="comment-author">${d.author}</span>
            <span class="comment-date">${d.date}</span>
          </div>
          <p class="comment-text-p">${d.content}</p>
        </div>
      </div>
    `).join("");const m=document.getElementById("comments-count");m&&(m.textContent=e.commentsList.length)}s();const r=document.getElementById("submit-comment-btn");r&&r.addEventListener("click",()=>{const o=document.getElementById("comment-author-name"),m=document.getElementById("comment-text"),d=o==null?void 0:o.value.trim(),f=m==null?void 0:m.value.trim();if(!d||!f){alert("Vui lòng điền đầy đủ Tên và Nội dung bình luận.");return}const g={id:Date.now(),author:d,date:"Vừa xong",content:f,avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80&h=80"};e.commentsList.unshift(g),e.comments=e.commentsList.length,localStorage.setItem("toptech_articles",JSON.stringify(n)),o&&(o.value=""),m&&(m.value=""),s()});const l=()=>{const o=document.getElementById("reading-bar");if(!o)return;const m=window.scrollY||document.documentElement.scrollTop,d=document.documentElement.scrollHeight-document.documentElement.clientHeight;if(d>0){const f=m/d*100;o.style.width=f+"%"}};window.addEventListener("scroll",l),t.cleanup=()=>{window.removeEventListener("scroll",l)};const u=t.querySelectorAll(".post-detail-body h2"),v=document.getElementById("post-toc-container"),k=document.getElementById("toc-list");if(u.length>0&&v&&k){v.style.display="block",u.forEach((f,g)=>{const p=`toc-section-${g}`;f.id=p}),k.innerHTML=Array.from(u).map((f,g)=>{const p=f.textContent.trim();return`<li><a href="javascript:void(0)" data-target="toc-section-${g}" class="toc-link">${p}</a></li>`}).join("");const o=k.querySelectorAll(".toc-link");o.forEach(f=>{f.addEventListener("click",g=>{g.preventDefault();const p=f.dataset.target,b=document.getElementById(p);if(b){const S=b.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:S,behavior:"smooth"}),o.forEach(H=>H.classList.remove("active")),f.classList.add("active")}})});const m=()=>{const f=window.scrollY||document.documentElement.scrollTop;let g=-1;u.forEach((p,b)=>{p.offsetTop-110<=f&&(g=b)}),o.forEach((p,b)=>{b===g?p.classList.add("active"):p.classList.remove("active")})};window.addEventListener("scroll",m);const d=t.cleanup;t.cleanup=()=>{d&&d(),window.removeEventListener("scroll",m)}}const B=document.getElementById("quick-edit-post-btn");B==null||B.addEventListener("click",()=>{sessionStorage.setItem("toptech_editing_article_id",e.id),window.location.hash="#/admin"})}const kt=[{name:"Trí tuệ nhân tạo (AI)",url:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Lập trình / Code",url:"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Đám mây / Dữ liệu",url:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Mạng / Bảo mật",url:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Thiết bị thông minh",url:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Văn phòng tối giản",url:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800&h=450"}];function Z(t,a,n,i){sessionStorage.getItem("toptech_admin_logged_in")==="true"?$t(t,a,n,i):Ct(t,a,n,i)}function Ct(t,a,n,i){t.innerHTML=`
    <div class="admin-login-wrapper">
      <div class="admin-login-card glass-panel">
        <div class="login-logo-container">
          <img src="${L("/logo-toptech-color.svg")}" alt="TopTech Logo" style="height: 100px; margin: 0 auto;">
        </div>
        <h2 class="login-title">Cổng Quản Trị Blog</h2>
        <p class="login-subtitle">Vui lòng nhập mật khẩu quản trị để đăng bài viết mới</p>
        
        <div class="login-form">
          <div class="form-row">
            <label for="admin-password">Mật khẩu</label>
            <input type="password" id="admin-password" placeholder="Nhập mật khẩu (mặc định: admin123)..." required>
            <span class="error-msg" id="login-error-msg"></span>
          </div>
          
          <button class="login-btn" id="login-submit-btn">
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  `;const e=document.getElementById("admin-password"),c=document.getElementById("login-submit-btn"),s=document.getElementById("login-error-msg"),r=()=>{(e==null?void 0:e.value.trim())==="admin123"?(sessionStorage.setItem("toptech_admin_logged_in","true"),Z(t,a,n,i)):(s&&(s.textContent="Mật khẩu không chính xác. Thử lại!",s.style.display="block"),e.style.borderColor="var(--secondary-color)")};c==null||c.addEventListener("click",r),e==null||e.addEventListener("keydown",l=>{l.key==="Enter"&&r()})}function Tt(t){if(!t)return"";if(t.trim().startsWith("<")||t.includes("</p>")||t.includes("</div>")||t.includes("</td>")||t.includes("</figure>"))return t;const a=t.split(`
`);let n=!1,i="",e=[];for(let s=0;s<a.length;s++){let r=a[s].trim();if(r.startsWith("|")&&r.endsWith("|")){n||(n=!0,i='<div class="table-responsive"><table class="post-detail-table">');const l=r.split("|").slice(1,-1).map(v=>v.trim());if(l.every(v=>/^:?-+:?$/.test(v)))continue;i.includes('<table class="post-detail-table">')&&!i.includes("<thead>")&&!i.includes("<tbody>")?i+="<thead><tr>"+l.map(v=>`<th>${v}</th>`).join("")+"</tr></thead><tbody>":i+="<tr>"+l.map(v=>`<td>${v}</td>`).join("")+"</tr>"}else n&&(n=!1,i+="</tbody></table></div>",e.push(i),i=""),e.push(a[s])}n&&(i+="</tbody></table></div>",e.push(i)),t=e.join(`
`);let c=t.replace(/^### (.*$)/gim,'<h3 class="post-subheading-3">$1</h3>').replace(/^## (.*$)/gim,'<h2 class="post-subheading-2">$1</h2>').replace(/^# (.*$)/gim,'<h1 class="post-heading-1">$1</h1>').replace(/\!\[(.*?)\]\((.*?)\)/g,'<figure class="post-inline-figure"><img src="$2" alt="$1"><figcaption class="post-figcaption">$1</figcaption></figure>').replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/^\> (.*$)/gim,'<blockquote class="post-blockquote">$1</blockquote>').replace(/^\- (.*$)/gim,"<li>$1</li>").replace(/\`\`\`([\s\S]*?)\`\`\`/g,'<pre class="post-code-block"><code>$1</code></pre>').replace(/\`(.*?)\`/g,'<code class="post-inline-code">$1</code>').replace(/\n\n/g,"</p><p>");return c=c.replace(/(<li>.*<\/li>)/gim,"<ul>$1</ul>"),`<p>${c}</p>`}function $t(t,a,n,i){let e="list",c=null,s=kt[0].url;const r=sessionStorage.getItem("toptech_editing_article_id");if(r){const o=parseInt(r,10),m=a.find(d=>d.id===o);m&&(e="create",c=o,s=m.image),sessionStorage.removeItem("toptech_editing_article_id")}function l(){var o,m,d;t.innerHTML=`
      <div class="admin-dashboard-container container section-padding">
        <!-- Top bar with Welcome and Logout -->
        <div class="admin-header-bar">
          <div>
            <h1 class="admin-dashboard-title">Bảng Điều Khiển Quản Trị</h1>
            <p style="color: var(--text-muted); font-size: 0.95rem;">Quản lý và xuất bản các nội dung công nghệ chất lượng cao.</p>
          </div>
          <button class="logout-btn" id="admin-logout-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            Đăng xuất
          </button>
        </div>

        <!-- Tabs selectors -->
        <div class="admin-tabs">
          <button class="admin-tab-btn ${e==="list"?"active":""}" id="tab-list-btn">
            Danh sách bài viết (${a.length})
          </button>
          <button class="admin-tab-btn ${e==="create"?"active":""}" id="tab-create-btn">
            + Viết bài mới
          </button>
        </div>

        <!-- Tab content area -->
        <div id="admin-tab-content">
          ${e==="list"?u():k()}
        </div>
      </div>
    `,(o=document.getElementById("admin-logout-btn"))==null||o.addEventListener("click",()=>{sessionStorage.removeItem("toptech_admin_logged_in"),Z(t,a,n,i)}),(m=document.getElementById("tab-list-btn"))==null||m.addEventListener("click",()=>{e="list",l()}),(d=document.getElementById("tab-create-btn"))==null||d.addEventListener("click",()=>{e="create",c=null,l()}),e==="list"?v():B()}function u(){return`
      <div class="admin-list-panel glass-panel">
        <div class="table-responsive">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Ảnh bìa</th>
                <th>Tiêu đề bài viết</th>
                <th>Chuyên mục</th>
                <th>Tác giả</th>
                <th>Lượt xem / Bình luận</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              ${a.length===0?`
                <tr>
                  <td colspan="6" style="text-align: center; padding: 3rem; color: var(--text-muted);">
                    Chưa có bài viết nào trong hệ thống. Hãy nhấp vào "Viết bài mới" để tạo bài viết đầu tiên!
                  </td>
                </tr>
              `:a.map(o=>`
                <tr id="article-row-${o.id}">
                  <td>
                    <img class="table-post-thumb" src="${o.image.startsWith("http")||o.image.startsWith("data:")?o.image:L(o.image)}" alt="Thumbnail">
                  </td>
                  <td>
                    <div style="font-weight: 600; line-height: 1.4;">
                      <a href="#/bai-viet/${o.id}" target="_blank" class="table-post-title-link">${o.title}</a>
                    </div>
                    ${o.featured?'<span class="badge badge-featured">Nổi bật</span>':""}
                  </td>
                  <td>
                    <span class="badge badge-cat">${o.category}</span>
                  </td>
                  <td>
                    <strong>${o.author}</strong>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">${o.authorTag||""}</div>
                  </td>
                  <td>
                    <div style="font-size: 0.85rem;">
                      👀 <strong>${o.views||0}</strong> lượt xem
                    </div>
                    <div style="font-size: 0.85rem;">
                      💬 <strong>${o.comments||0}</strong> bình luận
                    </div>
                  </td>
                  <td>
                    <button class="edit-post-btn" data-id="${o.id}" style="margin-right: 0.5rem; background-color: var(--primary-color); border-color: var(--primary-color);">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 2px;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                      Sửa
                    </button>
                    <button class="delete-post-btn" data-id="${o.id}">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 2px;"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                      Xóa
                    </button>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}function v(){t.querySelectorAll(".edit-post-btn").forEach(d=>{d.addEventListener("click",()=>{const f=parseInt(d.dataset.id,10),g=a.find(p=>p.id===f);g&&(c=f,s=g.image,e="create",l())})}),t.querySelectorAll(".delete-post-btn").forEach(d=>{d.addEventListener("click",()=>{const f=parseInt(d.dataset.id,10),g=a.find(p=>p.id===f);if(confirm(`Bạn có chắc chắn muốn xóa bài viết "${g==null?void 0:g.title}" không? Hành động này không thể hoàn tác.`)){const p=a.filter(w=>w.id!==f);localStorage.setItem("toptech_articles",JSON.stringify(p));const b=document.getElementById(`article-row-${f}`);b&&(b.style.transition="opacity 0.4s ease",b.style.opacity="0",setTimeout(()=>{a.splice(0,a.length,...p),i(),l()},400))}})})}function k(){const o=c?a.find(m=>m.id===c):null;return`
      <div class="create-post-layout-grid">
        <!-- Form entry column (Left) -->
        <div class="publish-form-panel glass-panel">
          <h3 class="panel-subtitle">${o?"Chỉnh sửa bài viết":"Nội dung bài viết mới"}</h3>
          
          <div class="login-form" style="margin-top: 1.5rem;">
            <div class="form-row">
              <label for="post-title">Tiêu đề bài viết <span style="color:var(--secondary-color)">*</span></label>
              <input type="text" id="post-title" value="${o?o.title:""}" placeholder="Ví dụ: Lợi ích của AI trong chuyển đổi số 2026..." required>
            </div>

            <div class="form-grid-3">
              <div class="form-row">
                <label for="post-category">Chuyên mục chính <span style="color:var(--secondary-color)">*</span></label>
                <select id="post-category" required>
                  ${n.map(m=>`<option value="${m}" ${o&&o.category===m?"selected":""}>${m}</option>`).join("")}
                </select>
              </div>

              <div class="form-row">
                <label for="post-subcategory">Chuyên mục con</label>
                <select id="post-subcategory">
                  <option value="">-- Không có --</option>
                </select>
              </div>

              <div class="form-row" style="display:flex; align-items:center; gap: 0.5rem; margin-top: 1.8rem; cursor:pointer;">
                <input type="checkbox" id="post-featured" ${o&&o.featured?"checked":""} style="width: 20px; height: 20px; margin:0;">
                <label for="post-featured" style="margin:0; font-weight:600; font-size: 0.85rem;">Bài viết nổi bật (Featured)</label>
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-row">
                <label for="post-author-name">Tên tác giả <span style="color:var(--secondary-color)">*</span></label>
                <input type="text" id="post-author-name" value="${o?o.author:"Ms. Phương Linh"}" placeholder="Nhập tên tác giả..." required>
              </div>
              <div class="form-row">
                <label for="post-author-tag">Mã tác giả / Thẻ</label>
                <input type="text" id="post-author-tag" value="${o?o.authorTag:"#CTAD01"}" placeholder="Ví dụ: #CTAD01...">
              </div>
            </div>

            <!-- Image Cover Selector -->
            <div class="form-row" style="margin-top: 1rem;">
              <label>Ảnh bìa bài viết (Tải lên file, dán ảnh clipboard hoặc nhập URL) <span style="color:var(--secondary-color)">*</span></label>
              
              <div class="upload-dropzone" id="upload-dropzone" style="min-height: 120px; display: flex; flex-direction: column; justify-content: center; align-items: center; border: 2px dashed var(--border-color); border-radius: 8px; cursor: pointer; padding: 1.5rem; background-color: var(--bg-main); transition: border-color var(--transition-fast); outline: none;">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted); margin-bottom: 0.5rem;"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path></svg>
                <p style="font-weight:600; font-size: 0.9rem; margin-bottom: 0.2rem;">Kéo thả ảnh, click chọn file hoặc click vào đây rồi ấn <strong>Ctrl+V</strong> để dán ảnh</p>
                <p style="font-size: 0.75rem; color: var(--text-muted);">Định dạng JPG, PNG (Tối đa 1.5MB)</p>
                <input type="file" id="cover-file-input" accept="image/*" style="display:none;">
              </div>
              
              <div style="margin-top: 0.8rem; display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); white-space: nowrap;">Hoặc nhập URL ảnh:</span>
                <input type="url" id="post-cover-url" value="${o&&o.image.startsWith("http")?o.image:""}" placeholder="Dán link ảnh bìa vào đây (https://...)" style="margin: 0; padding: 0.5rem 0.8rem; font-size: 0.9rem;">
              </div>
            </div>

            <div class="form-row">
              <label for="post-description">Tóm tắt bài viết (Sapo) <span style="color:var(--secondary-color)">*</span></label>
              <textarea id="post-description" rows="3" placeholder="Viết tóm tắt ngắn cho bài viết hiển thị ở trang chủ (1-2 câu)..." required>${o?o.description:""}</textarea>
            </div>

            <!-- Content Area Header -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; margin-bottom: 0.4rem;">
              <label style="margin-bottom:0;">Nội dung bài viết (Hỗ trợ Markdown) <span style="color:var(--secondary-color)">*</span></label>
              <div class="editor-tabs">
                <button class="editor-tab-btn active" id="editor-write-tab" type="button">Soạn thảo</button>
                <button class="editor-tab-btn" id="editor-preview-tab" type="button">Xem trước</button>
              </div>
            </div>

            <!-- Text Editor Container -->
            <div id="editor-textarea-wrapper">
              <!-- Formatting Toolbar -->
              <div class="editor-toolbar" style="display: flex; gap: 0.4rem; background-color: var(--bg-surface-secondary); padding: 0.5rem; border: 1px solid var(--border-color); border-bottom: none; border-radius: 8px 8px 0 0; flex-wrap: wrap; align-items: center;">
                <button class="toolbar-btn" data-cmd="bold" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 28px; height: 28px; display: inline-flex; justify-content: center; align-items: center; font-family: sans-serif;" title="Chữ đậm (B)">B</button>
                <button class="toolbar-btn" data-cmd="formatBlock" data-val="h2" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 32px; height: 28px; display: inline-flex; justify-content: center; align-items: center; font-size: 0.8rem; font-family: sans-serif;" title="Đề mục lớn (H2)">H2</button>
                <button class="toolbar-btn" data-cmd="formatBlock" data-val="h3" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 32px; height: 28px; display: inline-flex; justify-content: center; align-items: center; font-size: 0.8rem; font-family: sans-serif;" title="Đề mục nhỏ (H3)">H3</button>
                <button class="toolbar-btn" data-cmd="formatBlock" data-val="blockquote" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 28px; height: 28px; display: inline-flex; justify-content: center; align-items: center; font-size: 1.1rem; line-height: 1; font-family: sans-serif;" title="Trích dẫn (>)">“</button>
                <button class="toolbar-btn" data-cmd="insertUnorderedList" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 28px; height: 28px; display: inline-flex; justify-content: center; align-items: center; font-size: 1.1rem; line-height: 1; font-family: sans-serif;" title="Dòng liệt kê (-)">•</button>
                <button class="toolbar-btn" data-cmd="createLink" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 28px; height: 28px; display: inline-flex; justify-content: center; align-items: center; font-family: sans-serif;" title="Chèn liên kết">🔗</button>
                <button class="toolbar-btn" data-cmd="insertHTML-table" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 28px; height: 28px; display: inline-flex; justify-content: center; align-items: center; font-family: sans-serif;" title="Chèn bảng">田</button>
                <button class="toolbar-btn" id="btn-insert-inline-img" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 28px; height: 28px; display: inline-flex; justify-content: center; align-items: center; font-family: sans-serif;" title="Tải ảnh lên và chèn">📷</button>
                
                <span class="desktop-only" style="font-size: 0.72rem; color: var(--text-muted); margin-left: auto; align-self: center;">
                  💡 <strong>Ctrl+V</strong> trong ô soạn thảo để dán trực tiếp ảnh từ clipboard
                </span>
              </div>
              <div id="post-content" class="rich-text-editor" contenteditable="true" style="border-top-left-radius: 0; border-top-right-radius: 0;" placeholder="Bắt đầu viết nội dung bài viết trực quan tại đây...&#10;Hỗ trợ định dạng in đậm, đề mục, bảng biểu và dán hình ảnh trực tiếp."></div>
              <input type="file" id="inline-img-file-input" accept="image/*" style="display:none;">
            </div>

            <!-- Preview Container -->
            <div id="editor-preview-wrapper" class="markdown-preview-container" style="display:none;">
              <!-- Dynamic markdown previews render here -->
            </div>

            <!-- Auto calculated reading time and Word Count indicators -->
            <div class="editor-status-bar" style="margin-top: 0.5rem; display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted);">
              <span id="word-count-indicator">0 từ</span>
              <span id="reading-time-indicator">0 phút đọc</span>
            </div>

            <button class="submit-comment-btn" id="publish-post-btn" style="margin-top: 1.5rem; width:100%; font-size: 1rem; padding: 0.8rem 1.5rem; background-color: var(--primary-color); color:#fff; border-color: var(--primary-color);">
              ${o?"💾 Cập nhật bài viết":"🚀 Xuất bản bài viết"}
            </button>
          </div>
        </div>

        <!-- Sidebar preview column (Right) -->
        <div class="preview-sidebar-panel">
          <h3 class="panel-subtitle" style="margin-bottom: 1.5rem;">Xem trước ảnh bìa & thông tin</h3>
          <div class="cat-article-card" style="box-shadow: var(--shadow-lg); background-color: var(--bg-surface); border: 1px solid var(--border-color); pointer-events: none;">
            <div class="cat-card-img-wrapper">
              <img id="sidebar-preview-img" src="${s}" alt="Cover Preview" style="height: 200px; width: 100%; object-fit: cover;">
              <span id="sidebar-preview-cat" class="cat-card-category">TIN CÔNG NGHỆ</span>
            </div>
            <div class="cat-card-content" style="padding: 1.5rem;">
              <h3 id="sidebar-preview-title" class="cat-card-title" style="font-size: 1.1rem; line-height:1.4;">Chưa nhập tiêu đề...</h3>
              <p id="sidebar-preview-desc" class="cat-card-description" style="margin-bottom: 1.5rem;">Nhập sapo để xem trước phần tóm tắt của bài viết tại đây.</p>
              
              <div class="post-meta" style="color: var(--text-muted); font-size: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 1rem; width: 100%;">
                <div class="post-author">
                  <span id="sidebar-preview-author">Ms. Phương Linh</span>
                </div>
                <span id="sidebar-preview-time">&bull;&nbsp; 0 phút để đọc</span>
              </div>
            </div>
          </div>
          
          <div class="tips-card glass-panel" style="margin-top: 2rem; padding: 1.5rem; font-size: 0.85rem; line-height: 1.5;">
            <h4 style="color: var(--primary-color); margin-bottom: 0.5rem; font-weight:600;">💡 Mẹo soạn thảo Markdown</h4>
            <p style="margin-bottom: 0.5rem;">Gõ <strong>## Đề mục</strong> để tạo tiêu đề chính của mục.</p>
            <p style="margin-bottom: 0.5rem;">Gõ <strong>- Mục lục</strong> để tạo các gạch đầu dòng liệt kê thông tin.</p>
            <p style="margin-bottom: 0.5rem;">Gõ <strong>**Chữ in đậm**</strong> để bôi đậm từ hoặc câu quan trọng.</p>
            <p>Gõ <strong>&gt; Trích dẫn</strong> để làm nổi bật một câu trích phát biểu.</p>
          </div>
        </div>
      </div>
    `}function B(){const o=document.getElementById("post-title"),m=document.getElementById("post-category"),d=document.getElementById("post-subcategory"),f=document.getElementById("post-featured"),g=document.getElementById("post-author-name"),p=document.getElementById("post-author-tag"),b=document.getElementById("post-description"),w=document.getElementById("post-content"),$=document.getElementById("publish-post-btn"),S=document.getElementById("sidebar-preview-img"),H=document.getElementById("sidebar-preview-cat"),G=document.getElementById("sidebar-preview-title"),V=document.getElementById("sidebar-preview-desc"),R=document.getElementById("sidebar-preview-author"),tt=document.getElementById("sidebar-preview-time"),ct={"Tin công nghệ":["Điện thoại","Máy tính","Thiết bị thông minh","Xe điện"],AI:["Machine Learning","Generative AI","ChatGPT & LLMs","Thị giác máy tính"],"Chuyển đổi số":["Doanh nghiệp","Giải pháp đám mây","IoT & Automation","Bảo mật dữ liệu"],Review:["Đánh giá Laptop","Đánh giá Smartphone","Đồ công nghệ khác","Trải nghiệm dịch vụ"],"Phần mềm":["Công cụ lập trình","Phần mềm văn phòng","Hệ điều hành","Ứng dụng di động"],IT:["Lập trình","Quản trị mạng","Cơ sở dữ liệu","DevOps"],"Giải pháp công nghệ":["AI cho doanh nghiệp","Tự động hóa quy trình","Hạ tầng số","ERP & CRM"],Casestudy:["Thành công tiêu biểu","Phân tích thất bại","Khảo sát thực tế"]},I=c?a.find(h=>h.id===c):null;if(I&&w){w.innerHTML=I.content,s=I.image,S&&(S.src=s),H&&(H.textContent=(I.subcategory||I.category).toUpperCase()),G&&(G.textContent=I.title),V&&(V.textContent=I.description),R&&(R.textContent=`${I.author} ${I.authorTag}`);const h=document.getElementById("upload-dropzone");h&&(h.style.borderColor="var(--primary-color)",h.innerHTML=`
          <div style="text-align: center; color: var(--primary-color);">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:0.3rem;"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <p style="font-weight:600; font-size:0.85rem;">Đã chọn ảnh bìa hiện tại!</p>
            <p style="font-size:0.7rem; color:var(--text-muted); margin-top:0.2rem;">(Click hoặc kéo thả file khác để thay đổi)</p>
          </div>
        `)}const et=(h,y="")=>{if(!d)return;const T=ct[h]||[];d.innerHTML='<option value="">-- Không có --</option>'+T.map(x=>`<option value="${x}" ${y===x?"selected":""}>${x}</option>`).join("")};m&&et(m.value,I?I.subcategory:"");function it(){const h=(w==null?void 0:w.innerText.trim())||"",y=h?h.split(/\s+/).length:0,T=Math.max(1,Math.ceil(y/200)),x=document.getElementById("word-count-indicator"),M=document.getElementById("reading-time-indicator");return x&&(x.textContent=`${y} từ`),M&&(M.textContent=`${T} phút đọc`),tt&&(tt.innerHTML=`&bull;&nbsp; ${T} phút để đọc`),`${T<10?"0":""}${T} phút để đọc`}o==null||o.addEventListener("input",h=>{G&&(G.textContent=h.target.value.trim()||"Chưa nhập tiêu đề...")}),m==null||m.addEventListener("change",h=>{et(h.target.value),H&&(H.textContent=h.target.value.toUpperCase())}),d==null||d.addEventListener("change",h=>{H&&(H.textContent=(h.target.value||(m==null?void 0:m.value)||"").toUpperCase())}),g==null||g.addEventListener("input",h=>{if(R){const y=(p==null?void 0:p.value.trim())||"";R.textContent=`${h.target.value.trim()} ${y}`}}),p==null||p.addEventListener("input",h=>{if(R){const y=(g==null?void 0:g.value.trim())||"";R.textContent=`${y} ${h.target.value.trim()}`}}),b==null||b.addEventListener("input",h=>{V&&(V.textContent=h.target.value.trim()||"Nhập sapo để xem trước phần tóm tắt của bài viết tại đây.")}),w==null||w.addEventListener("input",()=>{it()});const _=(h,y=null)=>{document.execCommand(h,!1,y),w==null||w.focus(),w==null||w.dispatchEvent(new Event("input"))};t.querySelectorAll(".toolbar-btn[data-cmd]").forEach(h=>{h.addEventListener("click",()=>{const y=h.dataset.cmd,T=h.dataset.val||null;if(y==="createLink"){const x=prompt("Nhập đường dẫn liên kết (ví dụ: https://google.com):");x&&_(y,x)}else y==="insertHTML-table"?_("insertHTML",`
            <table class="post-detail-table" style="width: 100%;">
              <thead>
                <tr>
                  <th>Cột tiêu đề 1</th>
                  <th>Cột tiêu đề 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nội dung ô 1</td>
                  <td>Nội dung ô 2</td>
                </tr>
                <tr>
                  <td>Nội dung ô 3</td>
                  <td>Nội dung ô 4</td>
                </tr>
              </tbody>
            </table><p><br></p>
          `):_(y,T)})});const W=document.getElementById("btn-insert-inline-img"),j=document.getElementById("inline-img-file-input"),nt=h=>{if(!h)return;const y=new FileReader;y.onload=T=>{const M=`
          <figure class="post-inline-figure">
            <img src="${T.target.result}" alt="Ảnh chèn bài">
            <figcaption class="post-figcaption">Chú thích hình ảnh của bạn</figcaption>
          </figure><p><br></p>
        `;_("insertHTML",M)},y.readAsDataURL(h)};W==null||W.addEventListener("click",()=>{j==null||j.click()}),j==null||j.addEventListener("change",h=>{nt(h.target.files[0])}),w==null||w.addEventListener("paste",h=>{var T;const y=(T=h.clipboardData)==null?void 0:T.items;if(y){for(let x=0;x<y.length;x++)if(y[x].type.indexOf("image")!==-1){h.preventDefault();const M=y[x].getAsFile();nt(M);break}}});const C=document.getElementById("upload-dropzone"),z=document.getElementById("cover-file-input"),F=document.getElementById("post-cover-url");C==null||C.addEventListener("click",()=>{z==null||z.click()});const K=h=>{if(!h)return;const y=new FileReader;y.onload=T=>{s=T.target.result,S&&(S.src=s),C&&(C.style.borderColor="var(--primary-color)",C.innerHTML=`
            <div style="text-align: center; color: var(--primary-color);">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:0.3rem;"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <p style="font-weight:600; font-size:0.85rem;">Đã chọn ảnh bìa thành công!</p>
              <p style="font-size:0.75rem; color:var(--text-muted); text-overflow:ellipsis; overflow:hidden; white-space:nowrap; max-width:250px;">${h.name||"Ảnh dán từ clipboard"}</p>
              <p style="font-size:0.7rem; color:var(--text-muted); margin-top:0.2rem;">(Click hoặc kéo thả file khác để thay đổi)</p>
            </div>
          `)},y.readAsDataURL(h)};z==null||z.addEventListener("change",h=>{K(h.target.files[0])}),C==null||C.addEventListener("dragover",h=>{h.preventDefault(),C&&(C.style.borderColor="var(--primary-color)")}),C==null||C.addEventListener("dragleave",()=>{C&&(C.style.borderColor="var(--border-color)")}),C==null||C.addEventListener("drop",h=>{h.preventDefault(),C&&(C.style.borderColor="var(--border-color)"),K(h.dataTransfer.files[0])}),C&&(C.setAttribute("tabindex","0"),C.addEventListener("paste",h=>{var T;const y=(T=h.clipboardData)==null?void 0:T.items;if(y){for(let x=0;x<y.length;x++)if(y[x].type.indexOf("image")!==-1){h.preventDefault();const M=y[x].getAsFile();K(M);break}}})),F==null||F.addEventListener("input",h=>{const y=h.target.value.trim();y&&(s=y,S&&(S.src=s))});const q=document.getElementById("editor-write-tab"),P=document.getElementById("editor-preview-tab"),O=document.getElementById("editor-textarea-wrapper"),D=document.getElementById("editor-preview-wrapper");q==null||q.addEventListener("click",()=>{q.classList.add("active"),P==null||P.classList.remove("active"),O&&(O.style.display="block"),D&&(D.style.display="none")}),P==null||P.addEventListener("click",()=>{if(P.classList.add("active"),q==null||q.classList.remove("active"),O&&(O.style.display="none"),D){D.style.display="block";const h=(w==null?void 0:w.innerHTML)||"";D.innerHTML=h?Tt(h):'<p style="color:var(--text-muted); font-style:italic;">Chưa viết nội dung bài viết để xem trước...</p>'}}),$==null||$.addEventListener("click",()=>{const h=o==null?void 0:o.value.trim(),y=m==null?void 0:m.value,T=(d==null?void 0:d.value)||"",x=g==null?void 0:g.value.trim(),M=(p==null?void 0:p.value.trim())||"",U=b==null?void 0:b.value.trim(),Q=w==null?void 0:w.innerHTML.trim(),at=f==null?void 0:f.checked;if(!h||!y||!x||!U||!Q){alert("Vui lòng nhập đầy đủ các trường thông tin bắt buộc (*).");return}$.disabled=!0,$.textContent="⏳ Đang chuẩn bị xuất bản...",setTimeout(()=>{const ot=it();if(c){const E=a.find(N=>N.id===c);E&&(E.title=h,E.category=y,E.subcategory=T,E.image=s,E.author=x,E.authorTag=M,E.description=U,E.content=Q,E.featured=at,E.readTime=ot);try{localStorage.setItem("toptech_articles",JSON.stringify(a)),i(),$.style.backgroundColor="#10b981",$.style.borderColor="#10b981",$.innerHTML="✓ Cập nhật bài viết thành công!",c=null,setTimeout(()=>{window.location.hash="#/"},1200)}catch{$.disabled=!1,$.style.backgroundColor="var(--secondary-color)",$.style.borderColor="var(--secondary-color)",$.textContent="💾 Thử lại",alert("Lỗi lưu trữ: Bài viết có dung lượng quá lớn. Vui lòng nén bớt dung lượng ảnh trước khi lưu!")}}else{const E={id:Date.now(),title:h,category:y,subcategory:T,image:s,author:x,authorTag:M,date:"Vừa đăng",readTime:ot,views:0,comments:0,featured:at,description:U,content:Q,commentsList:[]};try{const N=[E,...a];localStorage.setItem("toptech_articles",JSON.stringify(N)),a.splice(0,a.length,...N),i(),$.style.backgroundColor="#10b981",$.style.borderColor="#10b981",$.innerHTML="✓ Bài viết đã xuất bản thành công!",setTimeout(()=>{window.location.hash="#/"},1200)}catch{$.disabled=!1,$.style.backgroundColor="var(--secondary-color)",$.style.borderColor="var(--secondary-color)",$.textContent="🚀 Thử lại",alert("Lỗi lưu trữ: Bài viết có dung lượng quá lớn. Vui lòng nén bớt dung lượng ảnh trước khi chèn!")}}},1e3)})}l()}const Lt=[{id:1,title:"Top 20 công cụ AI tốt nhất năm 2026",category:"AI",image:"hero_robot.png",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",readTime:"02 phút để đọc",views:1357,comments:26,featured:!0,description:"Khám phá danh sách các công cụ Trí tuệ Nhân tạo đột phá nhất năm 2026, giúp tự động hóa công việc, tăng hiệu suất gấp 5 lần và tối ưu hóa quy trình làm việc của cá nhân cũng như doanh nghiệp."},{id:2,title:"Top 15 laptop cho lập trình viên chuyên nghiệp",category:"Tin công nghệ",image:"coding_laptop.png",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",readTime:"02 phút để đọc",views:1357,comments:26,featured:!0,description:"Đánh giá chi tiết top 15 dòng máy tính xách tay cấu hình cao, pin trâu và bàn phím gõ êm nhất dành riêng cho các kỹ sư phần mềm và lập trình viên chuyên nghiệp năm nay."},{id:3,title:"So sánh ưu điểm ChatGPT vs Claude vs Gemini năm nay",category:"AI",image:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:1357,comments:26,featured:!1},{id:4,title:"Mô hình ngôn ngữ lớn LLM đang thay đổi lập trình thế nào",category:"AI",image:"https://images.unsplash.com/photo-1684369175833-3d026dc6a066?auto=format&fit=crop&q=80&w=400&h=250",author:"Khánh Nam",authorTag:"#CTAD02",date:"1 ngày trước",views:945,comments:14,featured:!1},{id:5,title:"EUROPE IS PUSHING BACK ON WASHINGTON’S CHIP WAR",category:"AI",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=450",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:894,comments:15,description:`At high-stakes meetings with the White House, Anthropic's cofounder—a "weirdo," per one official—has been replaced by cofounder Tom Brown to lead negotiations on silicon sanctions.`},{id:6,title:"I Met With China’s Top AI Experts. They’re Freaking Out, Too",category:"AI",image:"https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:1102,comments:42,description:"The AI arms race between China and the US has researchers on both sides worried about a “Chernobyl moment” for automated systems."},{id:7,title:"Đánh giá chi tiết Keychron Q1 Pro sau 6 tháng sử dụng",category:"Review",image:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=400&h=250",author:"Quốc Anh",authorTag:"#CTAD03",date:"2 ngày trước",views:520,comments:9},{id:8,title:"A24 Knows You’re Mad About the Google AI Collab",category:"AI",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:932,comments:18},{id:9,title:"Meta tạm dừng chương trình theo dõi nhân viên sau sự cố rò rỉ dữ liệu",category:"Tin công nghệ",image:"https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:2405,comments:63},{id:10,title:"Chính phủ Mỹ yêu cầu nhân viên gỡ bỏ ứng dụng lạ trên điện thoại công vụ",category:"Tin công nghệ",image:"https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:3108,comments:72},{id:11,title:"Hành trình chuyển đổi số của doanh nghiệp bán lẻ Việt Nam",category:"Chuyển đổi số",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=250",author:"Minh Tâm",authorTag:"#CTAD04",date:"3 ngày trước",views:1823,comments:29},{id:12,title:"Chiến lược tối ưu hóa hạ tầng đám mây cho startup năm 2026",category:"Chuyển đổi số",image:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=400&h=250",author:"Minh Tâm",authorTag:"#CTAD04",date:"4 ngày trước",views:1245,comments:11},{id:13,title:"Đánh giá chi tiết màn hình Dell UltraSharp U2723QE 4K",category:"Review",image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400&h=250",author:"Quốc Anh",authorTag:"#CTAD03",date:"5 ngày trước",views:890,comments:15},{id:14,title:"VS Code vs WebStorm: IDE nào tốt hơn cho lập trình Frontend",category:"Phần mềm",image:"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=400&h=250",author:"Khánh Nam",authorTag:"#CTAD02",date:"1 tuần trước",views:3105,comments:54},{id:15,title:"Xây dựng hệ thống CI/CD hoàn chỉnh với Docker và GitHub Actions",category:"IT",image:"https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=400&h=250",author:"Trà My",authorTag:"#CTAD05",date:"1 tuần trước",views:2200,comments:31},{id:16,title:"Bảo mật API trong kiến trúc Microservices thế nào cho đúng",category:"IT",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400&h=250",author:"Trà My",authorTag:"#CTAD05",date:"1 tuần trước",views:1780,comments:19},{id:17,title:"Ứng dụng AI tổng hợp để tăng năng suất cho doanh nghiệp",category:"Giải pháp công nghệ",image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&h=250",author:"Hoàng Long",authorTag:"#CTAD06",date:"2 tuần trước",views:1450,comments:22},{id:18,title:"Casestudy: Uber đã di chuyển hạ tầng dữ liệu khổng lồ thế nào",category:"Casestudy",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400&h=250",author:"Hoàng Long",authorTag:"#CTAD06",date:"3 tuần trước",views:2900,comments:48}];let A=[];function Y(){const t=localStorage.getItem("toptech_articles");t?A=JSON.parse(t):(A=Lt,localStorage.setItem("toptech_articles",JSON.stringify(A)))}Y();const J=["Tin công nghệ","AI","Chuyển đổi số","Review","Phần mềm","IT","Giải pháp công nghệ","Casestudy"];function lt(){Y();const t=document.getElementById("app-content");if(!t)return;t.cleanup&&(t.cleanup(),t.cleanup=null);const a=window.location.hash||"#/";if(gt(a),a.startsWith("#/ #")){const n=a.split("#")[2];rt(t,A,J),setTimeout(()=>{const i=document.getElementById(n);i&&i.scrollIntoView({behavior:"smooth"})},100);return}if(a==="#/"||a==="")rt(t,A,J);else if(a.startsWith("#/chuyen-muc/")){const n=a.replace("#/chuyen-muc/","");st(t,n,A,!1)}else if(a.startsWith("#/tim-kiem/")){const n=a.replace("#/tim-kiem/","");st(t,n,A,!0)}else if(a.startsWith("#/bai-viet/")){const n=a.replace("#/bai-viet/","");xt(t,n,A)}else a==="#/admin"||a.startsWith("#/admin")?Z(t,A,J,()=>{Y()}):window.location.hash="#/";a.startsWith("#/ #")||window.scrollTo(0,0)}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("app-header"),a=document.getElementById("app-footer");t&&dt(t),a&&mt(a),ht(n=>{window.location.hash=`#/tim-kiem/${encodeURIComponent(n)}`}),window.addEventListener("hashchange",lt),lt()});
