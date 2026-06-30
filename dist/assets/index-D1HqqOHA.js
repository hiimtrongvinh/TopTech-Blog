(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(e){if(e.ep)return;e.ep=!0;const c=n(e);fetch(e.href,c)}})();function M(t){return!t||t.startsWith("http")||t.startsWith("data:")?t:`/TopTech-Blog/${t.replace(/^\//,"")}`}function dt(t){t.innerHTML=`
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
          <img class="logo-img" src="${M("/logo-toptech-color.svg")}" alt="TopTech Logo">
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
  `}function ht(t){const o=document.getElementById("theme-toggle"),n=document.getElementById("menu-toggle"),i=document.getElementById("mega-menu"),e=document.getElementById("mega-menu-close"),c=document.getElementById("mega-menu-backdrop"),s=document.getElementById("search-trigger"),a=document.getElementById("search-overlay"),r=document.getElementById("search-close"),y=document.getElementById("search-input"),f=document.querySelectorAll(".nav-chuyen-muc-trigger");function E(){const p=document.querySelector(".sun-icon"),x=document.querySelector(".moon-icon");!p||!x||(document.body.classList.contains("dark")?(p.style.display="block",x.style.display="none"):(p.style.display="none",x.style.display="block"))}(localStorage.getItem("theme")||"light")==="dark"?document.body.classList.add("dark"):document.body.classList.remove("dark"),E(),o&&o.addEventListener("click",()=>{document.body.classList.contains("dark")?(document.body.classList.remove("dark"),localStorage.setItem("theme","light")):(document.body.classList.add("dark"),localStorage.setItem("theme","dark")),E()});const d=()=>i==null?void 0:i.classList.add("active"),v=()=>i==null?void 0:i.classList.remove("active");n==null||n.addEventListener("click",d),f.forEach(p=>p.addEventListener("click",d)),e==null||e.addEventListener("click",v),c==null||c.addEventListener("click",v);const g=i==null?void 0:i.querySelectorAll("a");g==null||g.forEach(p=>p.addEventListener("click",v)),s&&a&&s.addEventListener("click",()=>{a.classList.add("active"),setTimeout(()=>y==null?void 0:y.focus(),100)});const C=()=>{a==null||a.classList.remove("active"),y&&(y.value="")};r==null||r.addEventListener("click",C),a==null||a.addEventListener("click",p=>{p.target===a&&C()}),y==null||y.addEventListener("keydown",p=>{if(p.key==="Enter"&&t){const x=y.value.trim();x&&(C(),t(x))}})}function gt(t){const o=document.querySelector(".nav-home-link"),n=document.querySelector(".nav-blog-link"),i=document.querySelector(".write-post-btn");o==null||o.classList.remove("active"),n==null||n.classList.remove("active"),i==null||i.classList.remove("active"),t==="#/"||t===""||t.startsWith("#/ #")?o==null||o.classList.add("active"):t.startsWith("#/blog")||t.includes("bai-viet")?n==null||n.classList.add("active"):t.startsWith("#/admin")&&(i==null||i.classList.add("active"))}function mt(t){t.innerHTML=`
    <footer>
      <div class="container footer-container">
        <!-- Top part: Logo & Description (Row Layout) -->
        <div class="footer-top-row">
          <a href="#/" class="logo">
            <img class="logo-img-footer" src="${M("/logo-toptech-monochrome.svg")}" alt="TopTech Logo Đơn Sắc">
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
  `}function rt(t,o,n){t.innerHTML=`
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
  `,pt(o),ut(o),vt(o),yt(o,n),ft(o)}function pt(t){const o=t.filter(y=>y.featured),n=o[0]||t.find(y=>y.id===1)||t[0];let i=o[1]||t.find(y=>y.id===2)||t[1];i&&n&&i.id===n.id&&(i=t.find(y=>y.id!==n.id)||t[1]);const e=document.getElementById("hero-banner-container");n&&e&&(e.innerHTML=`
      <img src="${M(n.image)}" alt="${n.title}">
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
      <img src="${M(i.image)}" alt="${i.title}">
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
    `);const s=document.getElementById("hero-side-container");let a=[];if(s){const y=[n==null?void 0:n.id,i==null?void 0:i.id].filter(Boolean);a=t.filter(f=>!y.includes(f.id)).slice(0,4),s.innerHTML=a.map(f=>`
      <div class="side-post-card">
        <img class="side-post-img" src="${M(f.image)}" alt="${f.title}">
        <div class="side-post-info">
          <h4 class="side-post-title"><a href="#/bai-viet/${f.id}">${f.title}</a></h4>
          <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem;">
            <span>${f.author} ${f.authorTag||""} &bull; ${f.date}</span>
          </div>
          <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem;">
            <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${f.views}</span>
            <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${f.comments}</span>
          </div>
        </div>
      </div>
    `).join("")}const r=document.getElementById("hero-small-grid-container");if(r){const y=[n==null?void 0:n.id,i==null?void 0:i.id,...a.map(E=>E.id)].filter(Boolean),f=t.filter(E=>!y.includes(E.id)).slice(0,4);r.innerHTML=f.map(E=>`
      <div class="small-post-card">
        <div class="small-post-img-wrapper">
          <img src="${M(E.image)}" alt="${E.title}">
        </div>
        <h4 class="small-post-title"><a href="#/bai-viet/${E.id}">${E.title}</a></h4>
        <div class="post-meta" style="color: var(--text-muted); font-size: 0.7rem; justify-content: space-between;">
          <span>${E.author} &bull; ${E.date}</span>
          <div style="display: gap: 0.5rem; display: flex;">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${E.views}</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${E.comments}</span>
          </div>
        </div>
      </div>
    `).join("")}}function ut(t){const o=document.getElementById("featured-numbers-container");if(!o)return;const n=t.filter(e=>e.featured)[0]||t.find(e=>e.id===1),i=t.filter(e=>e.id!==(n==null?void 0:n.id)).slice(0,6);o.innerHTML=i.map((e,c)=>`
    <div class="number-post-card">
      <span class="post-number">#${c+1}</span>
      <div class="number-post-img-wrapper">
        <img src="${M(e.image)}" alt="${e.title}">
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
  `).join("")}function vt(t){const o=document.getElementById("new-updates-content"),n=document.getElementById("col-center-ai"),i=document.getElementById("trending-content"),e=document.getElementById("reviews-content");if(o){const c=t[0]||t.find(r=>r.id===3),s=t[1]||t.find(r=>r.id===4),a=t[2]||t.find(r=>r.id===7);o.innerHTML=[c,s,a].filter(Boolean).map(r=>`
      <div class="post-card-mini">
        <img class="post-card-mini-img" src="${M(r.image)}" alt="${r.title}">
        <div class="post-card-mini-info">
          <a href="#/chuyen-muc/${r.category}" class="post-card-mini-tag">${r.category}</a>
          <h4 class="post-card-mini-title"><a href="#/bai-viet/${r.id}">${r.title}</a></h4>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${r.author} &bull; ${r.date}</span>
        </div>
      </div>
    `).join("")}if(n){const c=t.filter(y=>y.category==="AI"),s=c[0]||t.find(y=>y.id===5),a=c[1]||t.find(y=>y.id===6),r=c[2]||t.find(y=>y.id===8);n.innerHTML=`
      <!-- Main Center Post -->
      <div class="center-main-post">
        <a href="#/chuyen-muc/${s.category}" class="center-main-tag">${s.category}</a>
        <h4 class="center-main-title"><a href="#/bai-viet/${s.id}">${s.title}</a></h4>
        <div class="post-meta" style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.2rem;">
          <span>${s.author} ${s.authorTag||""} &bull; ${s.date}</span>
        </div>
        <div class="center-main-img-wrapper">
          <img src="${M(s.image)}" alt="${s.title}">
        </div>
      </div>

      <!-- Sub grid (2 cards side by side) -->
      <div class="center-sub-row">
        <!-- Sub Left -->
        <div class="center-sub-card">
          <a href="#/chuyen-muc/${a.category}" class="post-card-mini-tag" style="font-size: 0.65rem;">${a.category}</a>
          <h5 class="center-sub-title"><a href="#/bai-viet/${a.id}">${a.title}</a></h5>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${a.author}</span>
        </div>

        <!-- Sub Right -->
        <div class="center-sub-card">
          <a href="#/chuyen-muc/${r.category}" class="post-card-mini-tag" style="font-size: 0.65rem;">${r.category}</a>
          <h5 class="center-sub-title"><a href="#/bai-viet/${r.id}">${r.title}</a></h5>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${r.author}</span>
        </div>
      </div>
    `}if(i){const c=[...t].sort((s,a)=>(a.views||0)-(s.views||0)).slice(0,5);i.innerHTML=c.map(s=>`
      <div class="trending-post-card">
        <h4 class="trending-post-title"><a href="#/bai-viet/${s.id}">${s.title}</a></h4>
        <span style="font-size: 0.7rem; color: var(--text-muted);">${s.author} ${s.authorTag||""} &bull; ${s.date}</span>
      </div>
    `).join("")}if(e){const c=t.filter(r=>r.category==="Review"),s=t.filter(r=>r.category!=="Review"),a=[...c,...s].slice(0,4);e.innerHTML=a.map(r=>`
      <div class="review-post-card">
        <div class="review-post-img-wrapper">
          <img src="${M(r.image)}" alt="${r.title}">
        </div>
        <a href="#/chuyen-muc/${r.category}" class="post-card-mini-tag" style="font-size: 0.65rem; margin-top: 0.2rem;">${r.category}</a>
        <h4 class="review-post-title"><a href="#/bai-viet/${r.id}">${r.title}</a></h4>
        <span style="font-size: 0.7rem; color: var(--text-muted);">${r.author} &bull; ${r.date}</span>
      </div>
    `).join("")}}function yt(t,o){const n=document.getElementById("category-columns-container");n&&(n.innerHTML=o.map((i,e)=>{const c=t.filter(a=>a.category===i),s=[];for(let a=0;a<4;a++)s.push(c[a%c.length]||t[(e*2+a)%t.length]);return`
      <div class="category-column">
        <div class="category-header-wrapper">
          <a href="#/chuyen-muc/${i}" class="category-title-header">${i}</a>
        </div>
        <div class="split-col" style="gap: 1rem;">
          ${s.map((a,r)=>`
            <div class="cat-post-card ${r===0?"has-image":""}">
              <div class="cat-post-img-wrapper">
                <img src="${M(a.image)}" alt="${a.title}">
              </div>
              <h4 class="cat-post-title"><a href="#/bai-viet/${a.id}">${a.title}</a></h4>
              <span style="font-size: 0.7rem; color: var(--text-muted);">${a.date}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `}).join(""))}function ft(t){const o=document.getElementById("refresh-new-updates"),n=document.getElementById("new-updates-content");o&&o.addEventListener("click",()=>{o.classList.add("spinning"),setTimeout(()=>{o.classList.remove("spinning");const i=[...t].filter(a=>a.id!==5&&a.id!==6).sort(()=>.5-Math.random()),e=i[0],c=i[1],s=i[2];n&&(n.innerHTML=[e,c,s].map(a=>`
            <div class="post-card-mini">
              <img class="post-card-mini-img" src="${M(a.image||"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=250")}" alt="${a.title}">
              <div class="post-card-mini-info">
                <a href="#/chuyen-muc/${a.category}" class="post-card-mini-tag">${a.category}</a>
                <h4 class="post-card-mini-title"><a href="#/bai-viet/${a.id}">${a.title}</a></h4>
                <span style="font-size: 0.7rem; color: var(--text-muted);">${a.author} &bull; ${a.date}</span>
              </div>
            </div>
          `).join(""))},600)})}const et={"Điện thoại":"Tin công nghệ","Máy tính":"Tin công nghệ","Thiết bị thông minh":"Tin công nghệ","Xe điện":"Tin công nghệ","Machine Learning":"AI","Generative AI":"AI","ChatGPT & LLMs":"AI","Thị giác máy tính":"AI","Doanh nghiệp":"Chuyển đổi số","Giải pháp đám mây":"Chuyển đổi số","IoT & Automation":"Chuyển đổi số","Bảo mật dữ liệu":"Chuyển đổi số","Đánh giá Laptop":"Review","Đánh giá Smartphone":"Review","Đồ công nghệ khác":"Review","Trải nghiệm dịch vụ":"Review","Công cụ lập trình":"Phần mềm","Phần mềm văn phòng":"Phần mềm","Hệ điều hành":"Phần mềm","Ứng dụng di động":"Phần mềm","Lập trình":"IT","Quản trị mạng":"IT","Cơ sở dữ liệu":"IT",DevOps:"IT","AI cho doanh nghiệp":"Giải pháp công nghệ","Tự động hóa quy trình":"Giải pháp công nghệ","Hạ tầng số":"Giải pháp công nghệ","ERP & CRM":"Giải pháp công nghệ","Thành công tiêu biểu":"Casestudy","Phân tích thất bại":"Casestudy","Khảo sát thực tế":"Casestudy"},bt={"Tin công nghệ":["Điện thoại","Máy tính","Thiết bị thông minh","Xe điện"],AI:["Machine Learning","Generative AI","ChatGPT & LLMs","Thị giác máy tính"],"Chuyển đổi số":["Doanh nghiệp","Giải pháp đám mây","IoT & Automation","Bảo mật dữ liệu"],Review:["Đánh giá Laptop","Đánh giá Smartphone","Đồ công nghệ khác","Trải nghiệm dịch vụ"],"Phần mềm":["Công cụ lập trình","Phần mềm văn phòng","Hệ điều hành","Ứng dụng di động"],IT:["Lập trình","Quản trị mạng","Cơ sở dữ liệu","DevOps"],"Giải pháp công nghệ":["AI cho doanh nghiệp","Tự động hóa quy trình","Hạ tầng số","ERP & CRM"],Casestudy:["Thành công tiêu biểu","Phân tích thất bại","Khảo sát thực tế"]};function ct(t,o,n,i=!1){const e=decodeURIComponent(o);let c=[],s=et[e],a=!!s;i?c=n.filter(g=>g.title.toLowerCase().includes(e.toLowerCase())||g.category.toLowerCase().includes(e.toLowerCase())||g.subcategory&&g.subcategory.toLowerCase().includes(e.toLowerCase())||g.description&&g.description.toLowerCase().includes(e.toLowerCase())):a?c=n.filter(g=>g.subcategory&&g.subcategory.toLowerCase()===e.toLowerCase()||g.category.toLowerCase()===e.toLowerCase()):c=n.filter(g=>g.category.toLowerCase()===e.toLowerCase()||g.subcategory&&et[g.subcategory]&&et[g.subcategory].toLowerCase()===e.toLowerCase());let r="newest",y=6,f="",E="display: flex; justify-content: space-between; align-items: center; width: 100%; flex-wrap: wrap; gap: 1.5rem;";if(i)E="display: block; text-align: center; width: 100%;",f=`
      <span class="category-eyebrow" style="font-size: 0.95rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--primary-color); display: block; margin-bottom: 0.5rem;">KẾT QUẢ TÌM KIẾM</span>
      <h1 class="category-page-title search-title" style="font-weight: 850; text-transform: uppercase; margin: 0; color: var(--text-primary);">"${e.toUpperCase()}"</h1>
    `;else{const g=a?s:e,C=bt[g]||[];f=`
      <!-- Left: Major category title -->
      <div>
        <h1 class="category-page-title" style="font-weight: 850; text-transform: uppercase; margin: 0; line-height: 1.1; color: var(--text-primary);">
          <a href="#/chuyen-muc/${g}" style="color: inherit; text-decoration: none;">${g.toUpperCase()}</a>
        </h1>
      </div>
      
      <!-- Right: Capsule subcategory tag pills list -->
      <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: center;">
        ${C.map(p=>{const x=e.toLowerCase()===p.toLowerCase();return`
            <a href="#/chuyen-muc/${p}" style="display: inline-block; padding: 0.45rem 1.1rem; font-size: 0.82rem; font-weight: 600; border-radius: 50px; text-decoration: none; border: 1.5px solid ${x?"var(--primary-color)":"var(--border-color)"}; background-color: ${x?"var(--primary-color)":"var(--bg-main)"}; color: ${x?"#fff":"var(--text-secondary)"}; transition: all var(--transition-fast);" class="subcat-pill ${x?"active-pill":""}">
              ${p}
            </a>
          `}).join("")}
      </div>
    `}t.innerHTML=`
    <div class="category-page-header" style="padding: 2.5rem 0; background: var(--bg-surface); border-bottom: 1px solid var(--border-color); transition: background-color var(--transition-normal), border-color var(--transition-normal);">
      <div class="container category-header-content" style="${E}">
        ${f}
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
  `;function z(){const g=document.getElementById("category-grid");if(!g)return;let C=[...c];r==="newest"?C.sort((m,b)=>b.id-m.id):r==="views"?C.sort((m,b)=>b.views-m.views):r==="comments"&&C.sort((m,b)=>b.comments-m.comments);const p=C.slice(0,y);g.innerHTML=p.length===0?`
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px; transition: background-color var(--transition-normal), border-color var(--transition-normal);">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted); margin-bottom: 1rem;"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-primary);">Chưa có bài viết</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 400px; margin: 0 auto;">Chưa có bài viết nào thuộc chuyên mục này. Quản trị viên có thể đăng nhập vào trang Viết bài để cập nhật bài viết mới!</p>
        </div>
      `:p.map(m=>`
      <article class="cat-article-card">
        <div class="cat-card-img-wrapper">
          <img src="${M(m.image)}" alt="${m.title}">
          <a href="#/chuyen-muc/${m.subcategory||m.category}" class="cat-card-category">${m.subcategory||m.category}</a>
        </div>
        <div class="cat-card-content">
          <h3 class="cat-card-title"><a href="#/bai-viet/${m.id}">${m.title}</a></h3>
          <p class="cat-card-description">${m.description||"Chưa có mô tả chi tiết cho bài viết này. Nhấp vào để đọc bài viết..."}</p>
          
          <div class="post-meta" style="color: var(--text-muted); font-size: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 1rem; margin-top: auto; width: 100%;">
            <div class="post-author">
              <span class="post-author-name">${m.author}</span>
            </div>
            <span>&bull;&nbsp; ${m.date}</span>
            <span style="margin-left: auto; display: flex; align-items: center; gap: 0.25rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${m.views}
            </span>
            <span style="display: flex; align-items: center; gap: 0.25rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${m.comments}
            </span>
          </div>
        </div>
      </article>
    `).join("");const x=document.getElementById("load-more-container");x&&(C.length>y?x.style.display="block":x.style.display="none")}z();const d=document.getElementById("load-more-articles-btn");d&&d.addEventListener("click",()=>{y+=6,z()});const v=document.querySelectorAll(".filter-tab-btn");v.forEach(g=>{g.addEventListener("click",C=>{v.forEach(p=>p.classList.remove("active")),C.target.classList.add("active"),r=C.target.dataset.filter,y=6,z()})})}typeof window<"u"&&"speechSynthesis"in window&&(window.speechSynthesis.getVoices(),"onvoiceschanged"in window.speechSynthesis&&(window.speechSynthesis.onvoiceschanged=()=>{window.speechSynthesis.getVoices()}));function wt(t){if(!t)return"";if(t.trim().startsWith("<")||t.includes("</p>")||t.includes("</div>")||t.includes("</td>")||t.includes("</figure>"))return t;const o=t.split(`
`);let n=!1,i="",e=[];for(let s=0;s<o.length;s++){let a=o[s].trim();if(a.startsWith("|")&&a.endsWith("|")){n||(n=!0,i='<div class="table-responsive"><table class="post-detail-table">');const r=a.split("|").slice(1,-1).map(f=>f.trim());if(r.every(f=>/^:?-+:?$/.test(f)))continue;i.includes('<table class="post-detail-table">')&&!i.includes("<thead>")&&!i.includes("<tbody>")?i+="<thead><tr>"+r.map(f=>`<th>${f}</th>`).join("")+"</tr></thead><tbody>":i+="<tr>"+r.map(f=>`<td>${f}</td>`).join("")+"</tr>"}else n&&(n=!1,i+="</tbody></table></div>",e.push(i),i=""),e.push(o[s])}n&&(i+="</tbody></table></div>",e.push(i)),t=e.join(`
`);let c=t.replace(/^### (.*$)/gim,'<h3 class="post-subheading-3">$1</h3>').replace(/^## (.*$)/gim,'<h2 class="post-subheading-2">$1</h2>').replace(/^# (.*$)/gim,'<h1 class="post-heading-1">$1</h1>').replace(/\!\[(.*?)\]\((.*?)\)/g,'<figure class="post-inline-figure"><img src="$2" alt="$1"><figcaption class="post-figcaption">$1</figcaption></figure>').replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/^\> (.*$)/gim,'<blockquote class="post-blockquote">$1</blockquote>').replace(/^\- (.*$)/gim,"<li>$1</li>").replace(/\`\`\`([\s\S]*?)\`\`\`/g,'<pre class="post-code-block"><code>$1</code></pre>').replace(/\`(.*?)\`/g,'<code class="post-inline-code">$1</code>').replace(/\n\n/g,"</p><p>");return c=c.replace(/(<li>.*<\/li>)/gim,"<ul>$1</ul>"),`<p>${c}</p>`}function xt(t,o,n){const i=parseInt(o,10),e=n.find(h=>h.id===i)||n[0];e.views+=1,localStorage.setItem("toptech_articles",JSON.stringify(n));const c=n.filter(h=>h.category===e.category&&h.id!==e.id).slice(0,4);e.commentsList||(e.commentsList=[{id:1,author:"Nguyễn Văn Hùng",date:"2 ngày trước",content:"Bài viết rất chi tiết và dễ hiểu! Tôi đang tìm hiểu về vấn đề này và thấy thông tin cực kỳ hữu ích cho công việc thực tế của mình.",avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=80&h=80"},{id:2,author:"Lê Minh Hạnh",date:"1 ngày trước",content:"TopTech chia sẻ kiến thức chuẩn quá, thiết kế giao diện bài viết đọc rất sướng mắt. Mong nhóm tác giả ra thêm nhiều bài viết sâu hơn nữa!",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80&h=80"}]),t.innerHTML=`
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
            <!-- Breadcrumbs -->
            <div class="post-breadcrumb">
              <a href="#/">Trang chủ</a> 
              <span class="breadcrumb-separator">&gt;</span> 
              <a href="#/chuyen-muc/${e.category}">${e.category}</a>
              ${e.subcategory?`
                <span class="breadcrumb-separator">&gt;</span> 
                <span class="breadcrumb-current">${e.subcategory}</span>
              `:""}
            </div>

            <h1 class="post-detail-title">${e.title}</h1>
            
            <div class="post-meta" style="font-size: 0.8em; color: var(--text-muted); border-bottom: 1px solid var(--border-color); padding-bottom: 1.5rem; margin-bottom: 2rem; display: flex; align-items: center; flex-wrap: wrap; gap: 0.8rem;">
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
            <img src="${M(e.image)}" alt="${e.title}">
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
              ${c.length>0?c.map(h=>`
                <div class="related-post-card">
                  <div class="related-img-wrapper">
                    <img src="${M(h.image)}" alt="${h.title}">
                  </div>
                  <div class="related-post-info">
                    <h5 class="related-title"><a href="#/bai-viet/${h.id}">${h.title}</a></h5>
                    <span class="related-meta"><a href="#/chuyen-muc/${h.subcategory||h.category}" style="color: inherit; font-weight: 600;">${h.subcategory||h.category}</a> &bull; ${h.date}</span>
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

    <!-- Floating actions toolbar -->
    <div class="post-floating-actions">
      <button class="post-action-btn" id="post-action-audio" data-tooltip="Nghe đọc bài viết">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="audio-icon-play">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="audio-icon-pause" style="display: none;">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      </button>
      <button class="post-action-btn" id="post-action-font-inc" data-tooltip="Tăng cỡ chữ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 18L10 4L16 18M6 14H14M18 9h4M20 7v4"></path>
        </svg>
      </button>
      <button class="post-action-btn" id="post-action-font-dec" data-tooltip="Giảm cỡ chữ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 18L10 4L16 18M6 14H14M18 10h4"></path>
        </svg>
      </button>
      <button class="post-action-btn" id="post-action-share" data-tooltip="Chia sẻ bài viết">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      </button>
      <button class="post-action-btn" id="post-action-print" data-tooltip="In / Tải xuống PDF">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 6 2 18 2 18 9"></polyline>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
          <rect x="6" y="14" width="12" height="8"></rect>
        </svg>
      </button>
      <button class="post-action-btn" id="post-action-comments" data-tooltip="Cuộn xuống bình luận">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    </div>

    <!-- Web Toast alerts container -->
    <div class="post-toast" id="post-toast">
      <span class="toast-message">Đã sao chép liên kết!</span>
    </div>
  `;function s(){const h=document.getElementById("comments-list");if(!h)return;h.innerHTML=e.commentsList.map(u=>`
      <div class="comment-item">
        <div class="comment-content">
          <div class="comment-header">
            <span class="comment-author">${u.author}</span>
            <span class="comment-date">${u.date}</span>
          </div>
          <p class="comment-text-p">${u.content}</p>
        </div>
      </div>
    `).join("");const k=document.getElementById("comments-count");k&&(k.textContent=e.commentsList.length)}s();const a=document.getElementById("submit-comment-btn");a&&a.addEventListener("click",()=>{const h=document.getElementById("comment-author-name"),k=document.getElementById("comment-text"),u=h==null?void 0:h.value.trim(),T=k==null?void 0:k.value.trim();if(!u||!T){alert("Vui lòng điền đầy đủ Tên và Nội dung bình luận.");return}const S={id:Date.now(),author:u,date:"Vừa xong",content:T,avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80&h=80"};e.commentsList.unshift(S),e.comments=e.commentsList.length,localStorage.setItem("toptech_articles",JSON.stringify(n)),h&&(h.value=""),k&&(k.value=""),s()});const r=()=>{const h=document.getElementById("reading-bar");if(!h)return;const k=window.scrollY||document.documentElement.scrollTop,u=document.documentElement.scrollHeight-document.documentElement.clientHeight;if(u>0){const T=k/u*100;h.style.width=T+"%"}};window.addEventListener("scroll",r),t.cleanup=()=>{window.removeEventListener("scroll",r)};const y=t.querySelectorAll(".post-detail-body h2"),f=document.getElementById("post-toc-container"),E=document.getElementById("toc-list");if(y.length>0&&f&&E){f.style.display="block",y.forEach((T,S)=>{const A=`toc-section-${S}`;T.id=A}),E.innerHTML=Array.from(y).map((T,S)=>{const A=T.textContent.trim();return`<li><a href="javascript:void(0)" data-target="toc-section-${S}" class="toc-link">${A}</a></li>`}).join("");const h=E.querySelectorAll(".toc-link");h.forEach(T=>{T.addEventListener("click",S=>{S.preventDefault();const A=T.dataset.target,H=document.getElementById(A);if(H){const W=H.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:W,behavior:"smooth"}),h.forEach(l=>l.classList.remove("active")),T.classList.add("active")}})});const k=()=>{const T=window.scrollY||document.documentElement.scrollTop;let S=-1;y.forEach((A,H)=>{A.offsetTop-110<=T&&(S=H)}),h.forEach((A,H)=>{H===S?A.classList.add("active"):A.classList.remove("active")})};window.addEventListener("scroll",k);const u=t.cleanup;t.cleanup=()=>{u&&u(),window.removeEventListener("scroll",k)}}const z=document.getElementById("quick-edit-post-btn");z==null||z.addEventListener("click",()=>{sessionStorage.setItem("toptech_editing_article_id",e.id),window.location.hash="#/admin"});const d=t.querySelector(".post-detail-body");function v(h){const k=document.getElementById("post-toast");if(!k)return;const u=k.querySelector(".toast-message");u&&(u.textContent=h),k.classList.add("show"),k.timeoutId&&clearTimeout(k.timeoutId),k.timeoutId=setTimeout(()=>{k.classList.remove("show")},2500)}let g=!1,C=!1,p=null,x=0;const m=document.getElementById("post-action-audio"),b=m==null?void 0:m.querySelector(".audio-icon-play"),$=m==null?void 0:m.querySelector(".audio-icon-pause");function q(){typeof responsiveVoice<"u"?responsiveVoice.cancel():"speechSynthesis"in window&&window.speechSynthesis.cancel(),g=!1,C=!1,m==null||m.classList.remove("active"),b&&(b.style.display="block"),$&&($.style.display="none")}function D(){if(!d)return;const h=`${e.title}. ${d.innerText.trim()}`;if(h)if(typeof responsiveVoice<"u"?responsiveVoice.cancel():"speechSynthesis"in window&&window.speechSynthesis.cancel(),g=!0,C=!1,m==null||m.classList.add("active"),b&&(b.style.display="none"),$&&($.style.display="block"),typeof responsiveVoice<"u")v("Đang đọc: Giọng trực tuyến (ResponsiveVoice)"),responsiveVoice.speak(h,"Vietnamese Female",{rate:1.1,onend:q,onerror:k=>{console.error("ResponsiveVoice Error:",k),q()}});else if("speechSynthesis"in window){const k=window.speechSynthesis.getVoices();if(k.length===0&&x<3){x++,window.speechSynthesis.getVoices(),setTimeout(D,250);return}x=0,p=new SpeechSynthesisUtterance(h),p.lang="vi-VN",p.rate=1.1;const u=k.find(T=>T.lang.toLowerCase().replace("_","-").includes("vi-vn")||T.lang.toLowerCase()==="vi"||T.name.toLowerCase().includes("viet")||T.name.toLowerCase().includes("việt"));u?(p.voice=u,v(`Đang đọc: Giọng hệ thống ${u.name}`)):v("Dùng giọng hệ thống mặc định (Hãy cài giọng tiếng Việt để đọc chuẩn)."),p.onend=()=>{q()},p.onerror=T=>{console.error("Native TTS Error:",T),q()},window.speechSynthesis.speak(p)}else v("Trình duyệt không hỗ trợ nghe đọc bài viết."),q()}m==null||m.addEventListener("click",()=>{g?C?(typeof responsiveVoice<"u"?responsiveVoice.resume():"speechSynthesis"in window&&window.speechSynthesis.resume(),C=!1,m==null||m.classList.add("active"),b&&(b.style.display="none"),$&&($.style.display="block")):(typeof responsiveVoice<"u"?responsiveVoice.pause():"speechSynthesis"in window&&window.speechSynthesis.pause(),C=!0,m==null||m.classList.remove("active"),b&&(b.style.display="block"),$&&($.style.display="none")):D()});const O=t.querySelector(".post-main-content");let P=parseInt(localStorage.getItem("toptech_post_font_size"),10)||18;function N(){O&&(O.style.fontSize=`${P}px`,localStorage.setItem("toptech_post_font_size",P))}N();const F=document.getElementById("post-action-font-inc"),X=document.getElementById("post-action-font-dec");F==null||F.addEventListener("click",()=>{P<26?(P+=2,N(),v(`Đã tăng cỡ chữ: ${P}px`)):v("Đã đạt cỡ chữ tối đa.")}),X==null||X.addEventListener("click",()=>{P>14?(P-=2,N(),v(`Đã giảm cỡ chữ: ${P}px`)):v("Đã đạt cỡ chữ tối thiểu.")});const B=document.getElementById("post-action-share");function Y(){navigator.clipboard.writeText(window.location.href).then(()=>{v("Đã sao chép liên kết vào bộ nhớ tạm!")}).catch(()=>{const h=document.createElement("textarea");h.value=window.location.href,h.style.position="fixed",document.body.appendChild(h),h.select();try{document.execCommand("copy"),v("Đã sao chép liên kết vào bộ nhớ tạm!")}catch{v("Không thể sao chép liên kết.")}document.body.removeChild(h)})}B==null||B.addEventListener("click",()=>{const h={title:e.title,text:e.description||"",url:window.location.href};navigator.share&&navigator.canShare&&navigator.canShare(h)?navigator.share(h).then(()=>v("Chia sẻ bài viết thành công!")).catch(k=>{k.name!=="AbortError"&&Y()}):Y()});const U=document.getElementById("post-action-print");U==null||U.addEventListener("click",()=>{window.print()});const G=document.getElementById("post-action-comments");G==null||G.addEventListener("click",()=>{const h=t.querySelector(".post-comments-section");if(h){const T=h.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:T,behavior:"smooth"})}});const K=t.cleanup;t.cleanup=()=>{K&&K(),q()}}const kt=[{name:"Trí tuệ nhân tạo (AI)",url:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Lập trình / Code",url:"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Đám mây / Dữ liệu",url:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Mạng / Bảo mật",url:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Thiết bị thông minh",url:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Văn phòng tối giản",url:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800&h=450"}];function ot(t,o,n,i){sessionStorage.getItem("toptech_admin_logged_in")==="true"?$t(t,o,n,i):Ct(t,o,n,i)}function Ct(t,o,n,i){t.innerHTML=`
    <div class="admin-login-wrapper">
      <div class="admin-login-card glass-panel">
        <div class="login-logo-container">
          <img src="${M("/logo-toptech-color.svg")}" alt="TopTech Logo" style="height: 100px; margin: 0 auto;">
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
  `;const e=document.getElementById("admin-password"),c=document.getElementById("login-submit-btn"),s=document.getElementById("login-error-msg"),a=()=>{(e==null?void 0:e.value.trim())==="admin123"?(sessionStorage.setItem("toptech_admin_logged_in","true"),ot(t,o,n,i)):(s&&(s.textContent="Mật khẩu không chính xác. Thử lại!",s.style.display="block"),e.style.borderColor="var(--secondary-color)")};c==null||c.addEventListener("click",a),e==null||e.addEventListener("keydown",r=>{r.key==="Enter"&&a()})}function Tt(t){if(!t)return"";if(t.trim().startsWith("<")||t.includes("</p>")||t.includes("</div>")||t.includes("</td>")||t.includes("</figure>"))return t;const o=t.split(`
`);let n=!1,i="",e=[];for(let s=0;s<o.length;s++){let a=o[s].trim();if(a.startsWith("|")&&a.endsWith("|")){n||(n=!0,i='<div class="table-responsive"><table class="post-detail-table">');const r=a.split("|").slice(1,-1).map(f=>f.trim());if(r.every(f=>/^:?-+:?$/.test(f)))continue;i.includes('<table class="post-detail-table">')&&!i.includes("<thead>")&&!i.includes("<tbody>")?i+="<thead><tr>"+r.map(f=>`<th>${f}</th>`).join("")+"</tr></thead><tbody>":i+="<tr>"+r.map(f=>`<td>${f}</td>`).join("")+"</tr>"}else n&&(n=!1,i+="</tbody></table></div>",e.push(i),i=""),e.push(o[s])}n&&(i+="</tbody></table></div>",e.push(i)),t=e.join(`
`);let c=t.replace(/^### (.*$)/gim,'<h3 class="post-subheading-3">$1</h3>').replace(/^## (.*$)/gim,'<h2 class="post-subheading-2">$1</h2>').replace(/^# (.*$)/gim,'<h1 class="post-heading-1">$1</h1>').replace(/\!\[(.*?)\]\((.*?)\)/g,'<figure class="post-inline-figure"><img src="$2" alt="$1"><figcaption class="post-figcaption">$1</figcaption></figure>').replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/^\> (.*$)/gim,'<blockquote class="post-blockquote">$1</blockquote>').replace(/^\- (.*$)/gim,"<li>$1</li>").replace(/\`\`\`([\s\S]*?)\`\`\`/g,'<pre class="post-code-block"><code>$1</code></pre>').replace(/\`(.*?)\`/g,'<code class="post-inline-code">$1</code>').replace(/\n\n/g,"</p><p>");return c=c.replace(/(<li>.*<\/li>)/gim,"<ul>$1</ul>"),`<p>${c}</p>`}function $t(t,o,n,i){let e="list",c=null,s=kt[0].url;const a=sessionStorage.getItem("toptech_editing_article_id");if(a){const d=parseInt(a,10),v=o.find(g=>g.id===d);v&&(e="create",c=d,s=v.image),sessionStorage.removeItem("toptech_editing_article_id")}function r(){var d,v,g;t.innerHTML=`
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
            Danh sách bài viết (${o.length})
          </button>
          <button class="admin-tab-btn ${e==="create"?"active":""}" id="tab-create-btn">
            + Viết bài mới
          </button>
        </div>

        <!-- Tab content area -->
        <div id="admin-tab-content">
          ${e==="list"?y():E()}
        </div>
      </div>
    `,(d=document.getElementById("admin-logout-btn"))==null||d.addEventListener("click",()=>{sessionStorage.removeItem("toptech_admin_logged_in"),ot(t,o,n,i)}),(v=document.getElementById("tab-list-btn"))==null||v.addEventListener("click",()=>{e="list",r()}),(g=document.getElementById("tab-create-btn"))==null||g.addEventListener("click",()=>{e="create",c=null,r()}),e==="list"?f():z()}function y(){return`
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
              ${o.length===0?`
                <tr>
                  <td colspan="6" style="text-align: center; padding: 3rem; color: var(--text-muted);">
                    Chưa có bài viết nào trong hệ thống. Hãy nhấp vào "Viết bài mới" để tạo bài viết đầu tiên!
                  </td>
                </tr>
              `:o.map(d=>`
                <tr id="article-row-${d.id}">
                  <td>
                    <img class="table-post-thumb" src="${d.image.startsWith("http")||d.image.startsWith("data:")?d.image:M(d.image)}" alt="Thumbnail">
                  </td>
                  <td>
                    <div style="font-weight: 600; line-height: 1.4;">
                      <a href="#/bai-viet/${d.id}" target="_blank" class="table-post-title-link">${d.title}</a>
                    </div>
                    ${d.featured?'<span class="badge badge-featured">Nổi bật</span>':""}
                  </td>
                  <td>
                    <span class="badge badge-cat">${d.category}</span>
                  </td>
                  <td>
                    <strong>${d.author}</strong>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">${d.authorTag||""}</div>
                  </td>
                  <td>
                    <div style="font-size: 0.85rem;">
                      👀 <strong>${d.views||0}</strong> lượt xem
                    </div>
                    <div style="font-size: 0.85rem;">
                      💬 <strong>${d.comments||0}</strong> bình luận
                    </div>
                  </td>
                  <td>
                    <button class="edit-post-btn" data-id="${d.id}" style="margin-right: 0.5rem; background-color: var(--primary-color); border-color: var(--primary-color);">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 2px;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                      Sửa
                    </button>
                    <button class="delete-post-btn" data-id="${d.id}">
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
    `}function f(){t.querySelectorAll(".edit-post-btn").forEach(g=>{g.addEventListener("click",()=>{const C=parseInt(g.dataset.id,10),p=o.find(x=>x.id===C);p&&(c=C,s=p.image,e="create",r())})}),t.querySelectorAll(".delete-post-btn").forEach(g=>{g.addEventListener("click",()=>{const C=parseInt(g.dataset.id,10),p=o.find(x=>x.id===C);if(confirm(`Bạn có chắc chắn muốn xóa bài viết "${p==null?void 0:p.title}" không? Hành động này không thể hoàn tác.`)){const x=o.filter(b=>b.id!==C);localStorage.setItem("toptech_articles",JSON.stringify(x));const m=document.getElementById(`article-row-${C}`);m&&(m.style.transition="opacity 0.4s ease",m.style.opacity="0",setTimeout(()=>{o.splice(0,o.length,...x),i(),r()},400))}})})}function E(){const d=c?o.find(v=>v.id===c):null;return`
      <div class="create-post-layout-grid">
        <!-- Form entry column (Left) -->
        <div class="publish-form-panel glass-panel">
          <h3 class="panel-subtitle">${d?"Chỉnh sửa bài viết":"Nội dung bài viết mới"}</h3>
          
          <div class="login-form" style="margin-top: 1.5rem;">
            <div class="form-row">
              <label for="post-title">Tiêu đề bài viết <span style="color:var(--secondary-color)">*</span></label>
              <input type="text" id="post-title" value="${d?d.title:""}" placeholder="Ví dụ: Lợi ích của AI trong chuyển đổi số 2026..." required>
            </div>

            <div class="form-grid-3">
              <div class="form-row">
                <label for="post-category">Chuyên mục chính <span style="color:var(--secondary-color)">*</span></label>
                <select id="post-category" required>
                  ${n.map(v=>`<option value="${v}" ${d&&d.category===v?"selected":""}>${v}</option>`).join("")}
                </select>
              </div>

              <div class="form-row">
                <label for="post-subcategory">Chuyên mục con</label>
                <select id="post-subcategory">
                  <option value="">-- Không có --</option>
                </select>
              </div>

              <div class="form-row" style="display:flex; align-items:center; gap: 0.5rem; margin-top: 1.8rem; cursor:pointer;">
                <input type="checkbox" id="post-featured" ${d&&d.featured?"checked":""} style="width: 20px; height: 20px; margin:0;">
                <label for="post-featured" style="margin:0; font-weight:600; font-size: 0.85rem;">Bài viết nổi bật (Featured)</label>
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-row">
                <label for="post-author-name">Tên tác giả <span style="color:var(--secondary-color)">*</span></label>
                <input type="text" id="post-author-name" value="${d?d.author:"Ms. Phương Linh"}" placeholder="Nhập tên tác giả..." required>
              </div>
              <div class="form-row">
                <label for="post-author-tag">Mã tác giả / Thẻ</label>
                <input type="text" id="post-author-tag" value="${d?d.authorTag:"#CTAD01"}" placeholder="Ví dụ: #CTAD01...">
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
                <input type="url" id="post-cover-url" value="${d&&d.image.startsWith("http")?d.image:""}" placeholder="Dán link ảnh bìa vào đây (https://...)" style="margin: 0; padding: 0.5rem 0.8rem; font-size: 0.9rem;">
              </div>
            </div>

            <div class="form-row">
              <label for="post-description">Tóm tắt bài viết (Sapo) <span style="color:var(--secondary-color)">*</span></label>
              <textarea id="post-description" rows="3" placeholder="Viết tóm tắt ngắn cho bài viết hiển thị ở trang chủ (1-2 câu)..." required>${d?d.description:""}</textarea>
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
              ${d?"💾 Cập nhật bài viết":"🚀 Xuất bản bài viết"}
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
    `}function z(){const d=document.getElementById("post-title"),v=document.getElementById("post-category"),g=document.getElementById("post-subcategory"),C=document.getElementById("post-featured"),p=document.getElementById("post-author-name"),x=document.getElementById("post-author-tag"),m=document.getElementById("post-description"),b=document.getElementById("post-content"),$=document.getElementById("publish-post-btn"),q=document.getElementById("sidebar-preview-img"),D=document.getElementById("sidebar-preview-cat"),O=document.getElementById("sidebar-preview-title"),P=document.getElementById("sidebar-preview-desc"),N=document.getElementById("sidebar-preview-author"),F=document.getElementById("sidebar-preview-time"),X={"Tin công nghệ":["Điện thoại","Máy tính","Thiết bị thông minh","Xe điện"],AI:["Machine Learning","Generative AI","ChatGPT & LLMs","Thị giác máy tính"],"Chuyển đổi số":["Doanh nghiệp","Giải pháp đám mây","IoT & Automation","Bảo mật dữ liệu"],Review:["Đánh giá Laptop","Đánh giá Smartphone","Đồ công nghệ khác","Trải nghiệm dịch vụ"],"Phần mềm":["Công cụ lập trình","Phần mềm văn phòng","Hệ điều hành","Ứng dụng di động"],IT:["Lập trình","Quản trị mạng","Cơ sở dữ liệu","DevOps"],"Giải pháp công nghệ":["AI cho doanh nghiệp","Tự động hóa quy trình","Hạ tầng số","ERP & CRM"],Casestudy:["Thành công tiêu biểu","Phân tích thất bại","Khảo sát thực tế"]},B=c?o.find(l=>l.id===c):null;if(B&&b){b.innerHTML=B.content,s=B.image,q&&(q.src=s),D&&(D.textContent=(B.subcategory||B.category).toUpperCase()),O&&(O.textContent=B.title),P&&(P.textContent=B.description),N&&(N.textContent=`${B.author} ${B.authorTag}`);const l=document.getElementById("upload-dropzone");l&&(l.style.borderColor="var(--primary-color)",l.innerHTML=`
          <div style="text-align: center; color: var(--primary-color);">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:0.3rem;"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <p style="font-weight:600; font-size:0.85rem;">Đã chọn ảnh bìa hiện tại!</p>
            <p style="font-size:0.7rem; color:var(--text-muted); margin-top:0.2rem;">(Click hoặc kéo thả file khác để thay đổi)</p>
          </div>
        `)}const Y=(l,w="")=>{if(!g)return;const I=X[l]||[];g.innerHTML='<option value="">-- Không có --</option>'+I.map(L=>`<option value="${L}" ${w===L?"selected":""}>${L}</option>`).join("")};v&&Y(v.value,B?B.subcategory:"");function U(){const l=(b==null?void 0:b.innerText.trim())||"",w=l?l.split(/\s+/).length:0,I=Math.max(1,Math.ceil(w/200)),L=document.getElementById("word-count-indicator"),j=document.getElementById("reading-time-indicator");return L&&(L.textContent=`${w} từ`),j&&(j.textContent=`${I} phút đọc`),F&&(F.innerHTML=`&bull;&nbsp; ${I} phút để đọc`),`${I<10?"0":""}${I} phút để đọc`}d==null||d.addEventListener("input",l=>{O&&(O.textContent=l.target.value.trim()||"Chưa nhập tiêu đề...")}),v==null||v.addEventListener("change",l=>{Y(l.target.value),D&&(D.textContent=l.target.value.toUpperCase())}),g==null||g.addEventListener("change",l=>{D&&(D.textContent=(l.target.value||(v==null?void 0:v.value)||"").toUpperCase())}),p==null||p.addEventListener("input",l=>{if(N){const w=(x==null?void 0:x.value.trim())||"";N.textContent=`${l.target.value.trim()} ${w}`}}),x==null||x.addEventListener("input",l=>{if(N){const w=(p==null?void 0:p.value.trim())||"";N.textContent=`${w} ${l.target.value.trim()}`}}),m==null||m.addEventListener("input",l=>{P&&(P.textContent=l.target.value.trim()||"Nhập sapo để xem trước phần tóm tắt của bài viết tại đây.")}),b==null||b.addEventListener("input",()=>{U()});const G=(l,w=null)=>{document.execCommand(l,!1,w),b==null||b.focus(),b==null||b.dispatchEvent(new Event("input"))};t.querySelectorAll(".toolbar-btn[data-cmd]").forEach(l=>{l.addEventListener("click",()=>{const w=l.dataset.cmd,I=l.dataset.val||null;if(w==="createLink"){const L=prompt("Nhập đường dẫn liên kết (ví dụ: https://google.com):");L&&G(w,L)}else w==="insertHTML-table"?G("insertHTML",`
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
          `):G(w,I)})});const K=document.getElementById("btn-insert-inline-img"),h=document.getElementById("inline-img-file-input"),k=l=>{if(!l)return;const w=new FileReader;w.onload=I=>{const j=`
          <figure class="post-inline-figure">
            <img src="${I.target.result}" alt="Ảnh chèn bài">
            <figcaption class="post-figcaption">Chú thích hình ảnh của bạn</figcaption>
          </figure><p><br></p>
        `;G("insertHTML",j)},w.readAsDataURL(l)};K==null||K.addEventListener("click",()=>{h==null||h.click()}),h==null||h.addEventListener("change",l=>{k(l.target.files[0])}),b==null||b.addEventListener("paste",l=>{var I;const w=(I=l.clipboardData)==null?void 0:I.items;if(w){for(let L=0;L<w.length;L++)if(w[L].type.indexOf("image")!==-1){l.preventDefault();const j=w[L].getAsFile();k(j);break}}});const u=document.getElementById("upload-dropzone"),T=document.getElementById("cover-file-input"),S=document.getElementById("post-cover-url");u==null||u.addEventListener("click",()=>{T==null||T.click()});const A=l=>{if(!l)return;const w=new FileReader;w.onload=I=>{s=I.target.result,q&&(q.src=s),u&&(u.style.borderColor="var(--primary-color)",u.innerHTML=`
            <div style="text-align: center; color: var(--primary-color);">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:0.3rem;"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <p style="font-weight:600; font-size:0.85rem;">Đã chọn ảnh bìa thành công!</p>
              <p style="font-size:0.75rem; color:var(--text-muted); text-overflow:ellipsis; overflow:hidden; white-space:nowrap; max-width:250px;">${l.name||"Ảnh dán từ clipboard"}</p>
              <p style="font-size:0.7rem; color:var(--text-muted); margin-top:0.2rem;">(Click hoặc kéo thả file khác để thay đổi)</p>
            </div>
          `)},w.readAsDataURL(l)};T==null||T.addEventListener("change",l=>{A(l.target.files[0])}),u==null||u.addEventListener("dragover",l=>{l.preventDefault(),u&&(u.style.borderColor="var(--primary-color)")}),u==null||u.addEventListener("dragleave",()=>{u&&(u.style.borderColor="var(--border-color)")}),u==null||u.addEventListener("drop",l=>{l.preventDefault(),u&&(u.style.borderColor="var(--border-color)"),A(l.dataTransfer.files[0])}),u&&(u.setAttribute("tabindex","0"),u.addEventListener("paste",l=>{var I;const w=(I=l.clipboardData)==null?void 0:I.items;if(w){for(let L=0;L<w.length;L++)if(w[L].type.indexOf("image")!==-1){l.preventDefault();const j=w[L].getAsFile();A(j);break}}})),S==null||S.addEventListener("input",l=>{const w=l.target.value.trim();w&&(s=w,q&&(q.src=s))});const H=document.getElementById("editor-write-tab"),_=document.getElementById("editor-preview-tab"),J=document.getElementById("editor-textarea-wrapper"),W=document.getElementById("editor-preview-wrapper");H==null||H.addEventListener("click",()=>{H.classList.add("active"),_==null||_.classList.remove("active"),J&&(J.style.display="block"),W&&(W.style.display="none")}),_==null||_.addEventListener("click",()=>{if(_.classList.add("active"),H==null||H.classList.remove("active"),J&&(J.style.display="none"),W){W.style.display="block";const l=(b==null?void 0:b.innerHTML)||"";W.innerHTML=l?Tt(l):'<p style="color:var(--text-muted); font-style:italic;">Chưa viết nội dung bài viết để xem trước...</p>'}}),$==null||$.addEventListener("click",()=>{const l=d==null?void 0:d.value.trim(),w=v==null?void 0:v.value,I=(g==null?void 0:g.value)||"",L=p==null?void 0:p.value.trim(),j=(x==null?void 0:x.value.trim())||"",Z=m==null?void 0:m.value.trim(),tt=b==null?void 0:b.innerHTML.trim(),at=C==null?void 0:C.checked;if(!l||!w||!L||!Z||!tt){alert("Vui lòng nhập đầy đủ các trường thông tin bắt buộc (*).");return}$.disabled=!0,$.textContent="⏳ Đang chuẩn bị xuất bản...",setTimeout(()=>{const st=U();if(c){const R=o.find(Q=>Q.id===c);R&&(R.title=l,R.category=w,R.subcategory=I,R.image=s,R.author=L,R.authorTag=j,R.description=Z,R.content=tt,R.featured=at,R.readTime=st);try{localStorage.setItem("toptech_articles",JSON.stringify(o)),i(),$.style.backgroundColor="#10b981",$.style.borderColor="#10b981",$.innerHTML="✓ Cập nhật bài viết thành công!",c=null,setTimeout(()=>{window.location.hash="#/"},1200)}catch{$.disabled=!1,$.style.backgroundColor="var(--secondary-color)",$.style.borderColor="var(--secondary-color)",$.textContent="💾 Thử lại",alert("Lỗi lưu trữ: Bài viết có dung lượng quá lớn. Vui lòng nén bớt dung lượng ảnh trước khi lưu!")}}else{const R={id:Date.now(),title:l,category:w,subcategory:I,image:s,author:L,authorTag:j,date:"Vừa đăng",readTime:st,views:0,comments:0,featured:at,description:Z,content:tt,commentsList:[]};try{const Q=[R,...o];localStorage.setItem("toptech_articles",JSON.stringify(Q)),o.splice(0,o.length,...Q),i(),$.style.backgroundColor="#10b981",$.style.borderColor="#10b981",$.innerHTML="✓ Bài viết đã xuất bản thành công!",setTimeout(()=>{window.location.hash="#/"},1200)}catch{$.disabled=!1,$.style.backgroundColor="var(--secondary-color)",$.style.borderColor="var(--secondary-color)",$.textContent="🚀 Thử lại",alert("Lỗi lưu trữ: Bài viết có dung lượng quá lớn. Vui lòng nén bớt dung lượng ảnh trước khi chèn!")}}},1e3)})}r()}const Lt=[{id:1,title:"Top 20 công cụ AI tốt nhất năm 2026",category:"AI",image:"hero_robot.png",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",readTime:"02 phút để đọc",views:1357,comments:26,featured:!0,description:"Khám phá danh sách các công cụ Trí tuệ Nhân tạo đột phá nhất năm 2026, giúp tự động hóa công việc, tăng hiệu suất gấp 5 lần và tối ưu hóa quy trình làm việc của cá nhân cũng như doanh nghiệp."},{id:2,title:"Top 15 laptop cho lập trình viên chuyên nghiệp",category:"Tin công nghệ",image:"coding_laptop.png",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",readTime:"02 phút để đọc",views:1357,comments:26,featured:!0,description:"Đánh giá chi tiết top 15 dòng máy tính xách tay cấu hình cao, pin trâu và bàn phím gõ êm nhất dành riêng cho các kỹ sư phần mềm và lập trình viên chuyên nghiệp năm nay."},{id:3,title:"So sánh ưu điểm ChatGPT vs Claude vs Gemini năm nay",category:"AI",image:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:1357,comments:26,featured:!1},{id:4,title:"Mô hình ngôn ngữ lớn LLM đang thay đổi lập trình thế nào",category:"AI",image:"https://images.unsplash.com/photo-1684369175833-3d026dc6a066?auto=format&fit=crop&q=80&w=400&h=250",author:"Khánh Nam",authorTag:"#CTAD02",date:"1 ngày trước",views:945,comments:14,featured:!1},{id:5,title:"EUROPE IS PUSHING BACK ON WASHINGTON’S CHIP WAR",category:"AI",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=450",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:894,comments:15,description:`At high-stakes meetings with the White House, Anthropic's cofounder—a "weirdo," per one official—has been replaced by cofounder Tom Brown to lead negotiations on silicon sanctions.`},{id:6,title:"I Met With China’s Top AI Experts. They’re Freaking Out, Too",category:"AI",image:"https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:1102,comments:42,description:"The AI arms race between China and the US has researchers on both sides worried about a “Chernobyl moment” for automated systems."},{id:7,title:"Đánh giá chi tiết Keychron Q1 Pro sau 6 tháng sử dụng",category:"Review",image:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=400&h=250",author:"Quốc Anh",authorTag:"#CTAD03",date:"2 ngày trước",views:520,comments:9},{id:8,title:"A24 Knows You’re Mad About the Google AI Collab",category:"AI",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:932,comments:18},{id:9,title:"Meta tạm dừng chương trình theo dõi nhân viên sau sự cố rò rỉ dữ liệu",category:"Tin công nghệ",image:"https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:2405,comments:63},{id:10,title:"Chính phủ Mỹ yêu cầu nhân viên gỡ bỏ ứng dụng lạ trên điện thoại công vụ",category:"Tin công nghệ",image:"https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:3108,comments:72},{id:11,title:"Hành trình chuyển đổi số của doanh nghiệp bán lẻ Việt Nam",category:"Chuyển đổi số",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=250",author:"Minh Tâm",authorTag:"#CTAD04",date:"3 ngày trước",views:1823,comments:29},{id:12,title:"Chiến lược tối ưu hóa hạ tầng đám mây cho startup năm 2026",category:"Chuyển đổi số",image:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=400&h=250",author:"Minh Tâm",authorTag:"#CTAD04",date:"4 ngày trước",views:1245,comments:11},{id:13,title:"Đánh giá chi tiết màn hình Dell UltraSharp U2723QE 4K",category:"Review",image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400&h=250",author:"Quốc Anh",authorTag:"#CTAD03",date:"5 ngày trước",views:890,comments:15},{id:14,title:"VS Code vs WebStorm: IDE nào tốt hơn cho lập trình Frontend",category:"Phần mềm",image:"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=400&h=250",author:"Khánh Nam",authorTag:"#CTAD02",date:"1 tuần trước",views:3105,comments:54},{id:15,title:"Xây dựng hệ thống CI/CD hoàn chỉnh với Docker và GitHub Actions",category:"IT",image:"https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=400&h=250",author:"Trà My",authorTag:"#CTAD05",date:"1 tuần trước",views:2200,comments:31},{id:16,title:"Bảo mật API trong kiến trúc Microservices thế nào cho đúng",category:"IT",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400&h=250",author:"Trà My",authorTag:"#CTAD05",date:"1 tuần trước",views:1780,comments:19},{id:17,title:"Ứng dụng AI tổng hợp để tăng năng suất cho doanh nghiệp",category:"Giải pháp công nghệ",image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&h=250",author:"Hoàng Long",authorTag:"#CTAD06",date:"2 tuần trước",views:1450,comments:22},{id:18,title:"Casestudy: Uber đã di chuyển hạ tầng dữ liệu khổng lồ thế nào",category:"Casestudy",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400&h=250",author:"Hoàng Long",authorTag:"#CTAD06",date:"3 tuần trước",views:2900,comments:48}];let V=[];function nt(){const t=localStorage.getItem("toptech_articles");t?V=JSON.parse(t):(V=Lt,localStorage.setItem("toptech_articles",JSON.stringify(V)))}nt();const it=["Tin công nghệ","AI","Chuyển đổi số","Review","Phần mềm","IT","Giải pháp công nghệ","Casestudy"];function lt(){nt();const t=document.getElementById("app-content");if(!t)return;t.cleanup&&(t.cleanup(),t.cleanup=null);const o=window.location.hash||"#/";if(gt(o),o.startsWith("#/ #")){const n=o.split("#")[2];rt(t,V,it),setTimeout(()=>{const i=document.getElementById(n);i&&i.scrollIntoView({behavior:"smooth"})},100);return}if(o==="#/"||o==="")rt(t,V,it);else if(o.startsWith("#/chuyen-muc/")){const n=o.replace("#/chuyen-muc/","");ct(t,n,V,!1)}else if(o.startsWith("#/tim-kiem/")){const n=o.replace("#/tim-kiem/","");ct(t,n,V,!0)}else if(o.startsWith("#/bai-viet/")){const n=o.replace("#/bai-viet/","");xt(t,n,V)}else o==="#/admin"||o.startsWith("#/admin")?ot(t,V,it,()=>{nt()}):window.location.hash="#/";o.startsWith("#/ #")||window.scrollTo(0,0)}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("app-header"),o=document.getElementById("app-footer");t&&dt(t),o&&mt(o),ht(n=>{window.location.hash=`#/tim-kiem/${encodeURIComponent(n)}`}),window.addEventListener("hashchange",lt),lt()});
