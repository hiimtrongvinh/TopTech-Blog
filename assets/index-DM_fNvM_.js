(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=c(i);fetch(i.href,o)}})();function p(e){return!e||e.startsWith("http")||e.startsWith("data:")?e:`/TopTech-Blog/${e.replace(/^\//,"")}`}function L(e){e.innerHTML=`
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
          <img class="logo-img" src="${p("/logo-toptech-color.svg")}" alt="TopTech Logo">
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
              <h4><a href="#/chuyen-muc/Tin công nghệ">Tin công nghệ</a></h4>
              <ul>
                <li><a href="#/chuyen-muc/Tin công nghệ">Điện thoại</a></li>
                <li><a href="#/chuyen-muc/Tin công nghệ">Máy tính</a></li>
                <li><a href="#/chuyen-muc/Tin công nghệ">Thiết bị thông minh</a></li>
                <li><a href="#/chuyen-muc/Tin công nghệ">Xe điện</a></li>
              </ul>
            </div>

            <!-- Col 2: AI -->
            <div class="mega-col">
              <h4><a href="#/chuyen-muc/AI">AI</a></h4>
              <ul>
                <li><a href="#/chuyen-muc/AI">Machine Learning</a></li>
                <li><a href="#/chuyen-muc/AI">Generative AI</a></li>
                <li><a href="#/chuyen-muc/AI">ChatGPT & LLMs</a></li>
                <li><a href="#/chuyen-muc/AI">Thị giác máy tính</a></li>
              </ul>
            </div>

            <!-- Col 3: Chuyển đổi số -->
            <div class="mega-col">
              <h4><a href="#/chuyen-muc/Chuyển đổi số">Chuyển đổi số</a></h4>
              <ul>
                <li><a href="#/chuyen-muc/Chuyển đổi số">Doanh nghiệp</a></li>
                <li><a href="#/chuyen-muc/Chuyển đổi số">Giải pháp đám mây</a></li>
                <li><a href="#/chuyen-muc/Chuyển đổi số">IoT & Automation</a></li>
                <li><a href="#/chuyen-muc/Chuyển đổi số">Bảo mật dữ liệu</a></li>
              </ul>
            </div>

            <!-- Col 4: Review -->
            <div class="mega-col">
              <h4><a href="#/chuyen-muc/Review">Review</a></h4>
              <ul>
                <li><a href="#/chuyen-muc/Review">Đánh giá Laptop</a></li>
                <li><a href="#/chuyen-muc/Review">Đánh giá Smartphone</a></li>
                <li><a href="#/chuyen-muc/Review">Đồ công nghệ khác</a></li>
                <li><a href="#/chuyen-muc/Review">Trải nghiệm dịch vụ</a></li>
              </ul>
            </div>

            <!-- Col 5: Phần mềm -->
            <div class="mega-col">
              <h4><a href="#/chuyen-muc/Phần mềm">Phần mềm</a></h4>
              <ul>
                <li><a href="#/chuyen-muc/Phần mềm">Công cụ lập trình</a></li>
                <li><a href="#/chuyen-muc/Phần mềm">Phần mềm văn phòng</a></li>
                <li><a href="#/chuyen-muc/Phần mềm">Hệ điều hành</a></li>
                <li><a href="#/chuyen-muc/Phần mềm">Ứng dụng di động</a></li>
              </ul>
            </div>

            <!-- Col 6: IT -->
            <div class="mega-col">
              <h4><a href="#/chuyen-muc/IT">IT</a></h4>
              <ul>
                <li><a href="#/chuyen-muc/IT">Lập trình</a></li>
                <li><a href="#/chuyen-muc/IT">Quản trị mạng</a></li>
                <li><a href="#/chuyen-muc/IT">Cơ sở dữ liệu</a></li>
                <li><a href="#/chuyen-muc/IT">DevOps</a></li>
              </ul>
            </div>

            <!-- Col 7: Giải pháp công nghệ -->
            <div class="mega-col">
              <h4><a href="#/chuyen-muc/Giải pháp công nghệ">Giải pháp công nghệ</a></h4>
              <ul>
                <li><a href="#/chuyen-muc/Giải pháp công nghệ">AI cho doanh nghiệp</a></li>
                <li><a href="#/chuyen-muc/Giải pháp công nghệ">Tự động hóa quy trình</a></li>
                <li><a href="#/chuyen-muc/Giải pháp công nghệ">Hạ tầng số</a></li>
                <li><a href="#/chuyen-muc/Giải pháp công nghệ">ERP & CRM</a></li>
              </ul>
            </div>

            <!-- Col 8: Casestudy -->
            <div class="mega-col">
              <h4><a href="#/chuyen-muc/Casestudy">Casestudy</a></h4>
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
  `}function I(e){const n=document.getElementById("theme-toggle"),c=document.getElementById("menu-toggle"),s=document.getElementById("mega-menu"),i=document.getElementById("mega-menu-close"),o=document.getElementById("mega-menu-backdrop"),r=document.getElementById("search-trigger"),a=document.getElementById("search-overlay"),t=document.getElementById("search-close"),l=document.getElementById("search-input"),g=document.querySelectorAll(".nav-chuyen-muc-trigger");function d(){const u=document.querySelector(".sun-icon"),h=document.querySelector(".moon-icon");!u||!h||(document.body.classList.contains("dark")?(u.style.display="block",h.style.display="none"):(u.style.display="none",h.style.display="block"))}(localStorage.getItem("theme")||"light")==="dark"?document.body.classList.add("dark"):document.body.classList.remove("dark"),d(),n&&n.addEventListener("click",()=>{document.body.classList.contains("dark")?(document.body.classList.remove("dark"),localStorage.setItem("theme","light")):(document.body.classList.add("dark"),localStorage.setItem("theme","dark")),d()});const y=()=>s==null?void 0:s.classList.add("active"),m=()=>s==null?void 0:s.classList.remove("active");c==null||c.addEventListener("click",y),g.forEach(u=>u.addEventListener("click",y)),i==null||i.addEventListener("click",m),o==null||o.addEventListener("click",m);const v=s==null?void 0:s.querySelectorAll("a");v==null||v.forEach(u=>u.addEventListener("click",m)),r&&a&&r.addEventListener("click",()=>{a.classList.add("active"),setTimeout(()=>l==null?void 0:l.focus(),100)});const w=()=>{a==null||a.classList.remove("active"),l&&(l.value="")};t==null||t.addEventListener("click",w),a==null||a.addEventListener("click",u=>{u.target===a&&w()}),l==null||l.addEventListener("keydown",u=>{if(u.key==="Enter"&&e){const h=l.value.trim();h&&(w(),e(h))}})}function M(e){const n=document.querySelector(".nav-home-link"),c=document.querySelector(".nav-blog-link");n==null||n.classList.remove("active"),c==null||c.classList.remove("active"),e==="#/"||e===""||e.startsWith("#/ #")?n==null||n.classList.add("active"):(e.startsWith("#/blog")||e.includes("bai-viet"))&&(c==null||c.classList.add("active"))}function B(e){e.innerHTML=`
    <footer>
      <div class="container footer-container">
        <!-- Top part: Logo & Description (Row Layout) -->
        <div class="footer-top-row">
          <a href="#/" class="logo">
            <img class="logo-img-footer" src="${p("/logo-toptech-monochrome.svg")}" alt="TopTech Logo Đơn Sắc">
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
  `}function k(e,n,c){e.innerHTML=`
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
  `,A(n),E(n),q(n),P(n,c),H(n)}function A(e){const n=e.find(a=>a.id===1),c=document.getElementById("hero-banner-container");n&&c&&(c.innerHTML=`
      <img src="${p(n.image)}" alt="${n.title}">
      <div class="hero-banner-full-overlay"></div>
      <div class="hero-banner-full-content">
        <a href="#/chuyen-muc/${n.category}" class="hero-banner-full-tag">${n.category}</a>
        <h3 class="hero-banner-full-title"><a href="#/bai-viet/${n.id}">${n.title}</a></h3>
        <div class="post-meta">
          <div class="post-author">
            <span>${n.author} ${n.authorTag}</span>
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
    `);const s=e.find(a=>a.id===2),i=document.getElementById("hero-left-container");s&&i&&(i.innerHTML=`
      <img src="${p(s.image)}" alt="${s.title}">
      <div class="featured-big-overlay"></div>
      <div class="featured-big-content">
        <a href="#/chuyen-muc/${s.category}" class="featured-big-tag">${s.category}</a>
        <h3 class="featured-big-title"><a href="#/bai-viet/${s.id}">${s.title}</a></h3>
        <div class="post-meta">
          <div class="post-author">
            <span>${s.author} ${s.authorTag}</span>
          </div>
          <span>&bull;&nbsp; ${s.date}</span>
          <span>&bull;&nbsp; ${s.readTime}</span>
          <span style="margin-left: auto; display: flex; align-items: center; gap: 0.3rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${s.views}
          </span>
          <span style="display: flex; align-items: center; gap: 0.3rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${s.comments}
          </span>
        </div>
      </div>
    `);const o=document.getElementById("hero-side-container");if(o){const a=[e.find(t=>t.id===3),e.find(t=>t.id===6),e.find(t=>t.id===15),e.find(t=>t.id===16)].filter(Boolean);o.innerHTML=a.map(t=>`
      <div class="side-post-card">
        <img class="side-post-img" src="${p(t.image)}" alt="${t.title}">
        <div class="side-post-info">
          <h4 class="side-post-title"><a href="#/bai-viet/${t.id}">${t.title}</a></h4>
          <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem;">
            <span>${t.author} ${t.authorTag} &bull; ${t.date}</span>
          </div>
          <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem;">
            <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${t.views}</span>
            <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${t.comments}</span>
          </div>
        </div>
      </div>
    `).join("")}const r=document.getElementById("hero-small-grid-container");if(r){const a=[e.find(t=>t.id===4),e.find(t=>t.id===11),e.find(t=>t.id===12),e.find(t=>t.id===17)].filter(Boolean);r.innerHTML=a.map(t=>`
      <div class="small-post-card">
        <div class="small-post-img-wrapper">
          <img src="${p(t.image)}" alt="${t.title}">
        </div>
        <h4 class="small-post-title"><a href="#/bai-viet/${t.id}">${t.title}</a></h4>
        <div class="post-meta" style="color: var(--text-muted); font-size: 0.7rem; justify-content: space-between;">
          <span>${t.author} &bull; ${t.date}</span>
          <div style="display: gap: 0.5rem; display: flex;">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${t.views}</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${t.comments}</span>
          </div>
        </div>
      </div>
    `).join("")}}function E(e){const n=document.getElementById("featured-numbers-container");if(!n)return;const c=e.slice(2,8);n.innerHTML=c.map((s,i)=>`
    <div class="number-post-card">
      <span class="post-number">#${i+1}</span>
      <div class="number-post-img-wrapper">
        <img src="${p(s.image)}" alt="${s.title}">
      </div>
      <div class="number-post-info">
        <h4 class="number-post-title"><a href="#/bai-viet/${s.id}">${s.title}</a></h4>
        <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem;">
          <span>${s.author} ${s.authorTag} &bull; ${s.date}</span>
        </div>
        <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem;">
          <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${s.views}</span>
          <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${s.comments}</span>
        </div>
      </div>
    </div>
  `).join("")}function q(e){const n=document.getElementById("new-updates-content"),c=document.getElementById("col-center-ai"),s=document.getElementById("trending-content"),i=document.getElementById("reviews-content");if(n){const o=e.find(t=>t.id===3),r=e.find(t=>t.id===4),a=e.find(t=>t.id===7);n.innerHTML=[o,r,a].map(t=>`
      <div class="post-card-mini">
        <img class="post-card-mini-img" src="${p(t.image)}" alt="${t.title}">
        <div class="post-card-mini-info">
          <a href="#/chuyen-muc/${t.category}" class="post-card-mini-tag">${t.category}</a>
          <h4 class="post-card-mini-title"><a href="#/bai-viet/${t.id}">${t.title}</a></h4>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${t.author} &bull; ${t.date}</span>
        </div>
      </div>
    `).join("")}if(c){const o=e.find(t=>t.id===5),r=e.find(t=>t.id===6),a=e.find(t=>t.id===8);c.innerHTML=`
      <!-- Main Center Post -->
      <div class="center-main-post">
        <a href="#/chuyen-muc/${o.category}" class="center-main-tag">${o.category}</a>
        <h4 class="center-main-title"><a href="#/bai-viet/${o.id}">${o.title}</a></h4>
        <div class="post-meta" style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.2rem;">
          <span>${o.author} ${o.authorTag} &bull; ${o.date}</span>
        </div>
        <div class="center-main-img-wrapper">
          <img src="${p(o.image)}" alt="${o.title}">
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
          <a href="#/chuyen-muc/${a.category}" class="post-card-mini-tag" style="font-size: 0.65rem;">${a.category}</a>
          <h5 class="center-sub-title"><a href="#/bai-viet/${a.id}">${a.title}</a></h5>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${a.author}</span>
        </div>
      </div>
    `}if(s){const o=[e.find(r=>r.id===9),e.find(r=>r.id===10),e.find(r=>r.id===11),e.find(r=>r.id===12),e.find(r=>r.id===14)].filter(Boolean);s.innerHTML=o.map(r=>`
      <div class="trending-post-card">
        <h4 class="trending-post-title"><a href="#/bai-viet/${r.id}">${r.title}</a></h4>
        <span style="font-size: 0.7rem; color: var(--text-muted);">${r.author} ${r.authorTag} &bull; ${r.date}</span>
      </div>
    `).join("")}if(i){const o=e.filter(t=>t.category==="Review"),r=e.filter(t=>t.category!=="Review"),a=[...o,...r].slice(0,4);i.innerHTML=a.map(t=>`
      <div class="review-post-card">
        <div class="review-post-img-wrapper">
          <img src="${p(t.image)}" alt="${t.title}">
        </div>
        <a href="#/chuyen-muc/${t.category}" class="post-card-mini-tag" style="font-size: 0.65rem; margin-top: 0.2rem;">${t.category}</a>
        <h4 class="review-post-title"><a href="#/bai-viet/${t.id}">${t.title}</a></h4>
        <span style="font-size: 0.7rem; color: var(--text-muted);">${t.author} &bull; ${t.date}</span>
      </div>
    `).join("")}}function P(e,n){const c=document.getElementById("category-columns-container");c&&(c.innerHTML=n.map((s,i)=>{const o=e.filter(a=>a.category===s),r=[];for(let a=0;a<4;a++)r.push(o[a%o.length]||e[(i*2+a)%e.length]);return`
      <div class="category-column">
        <div class="category-header-wrapper">
          <a href="#/chuyen-muc/${s}" class="category-title-header">${s}</a>
        </div>
        <div class="split-col" style="gap: 1rem;">
          ${r.map((a,t)=>`
            <div class="cat-post-card ${t===0?"has-image":""}">
              <div class="cat-post-img-wrapper">
                <img src="${p(a.image)}" alt="${a.title}">
              </div>
              <h4 class="cat-post-title"><a href="#/bai-viet/${a.id}">${a.title}</a></h4>
              <span style="font-size: 0.7rem; color: var(--text-muted);">${a.date}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `}).join(""))}function H(e){const n=document.getElementById("refresh-new-updates"),c=document.getElementById("new-updates-content");n&&n.addEventListener("click",()=>{n.classList.add("spinning"),setTimeout(()=>{n.classList.remove("spinning");const s=[...e].filter(a=>a.id!==5&&a.id!==6).sort(()=>.5-Math.random()),i=s[0],o=s[1],r=s[2];c&&(c.innerHTML=[i,o,r].map(a=>`
            <div class="post-card-mini">
              <img class="post-card-mini-img" src="${p(a.image||"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=250")}" alt="${a.title}">
              <div class="post-card-mini-info">
                <a href="#/chuyen-muc/${a.category}" class="post-card-mini-tag">${a.category}</a>
                <h4 class="post-card-mini-title"><a href="#/bai-viet/${a.id}">${a.title}</a></h4>
                <span style="font-size: 0.7rem; color: var(--text-muted);">${a.author} &bull; ${a.date}</span>
              </div>
            </div>
          `).join(""))},600)})}function C(e,n,c,s=!1){const i=decodeURIComponent(n);let o=[],r=i,a="Chuyên mục",t=`Khám phá các bài viết, tin tức công nghệ mới nhất và những chia sẻ chuyên sâu về chuyên mục ${i} từ đội ngũ chuyên gia TopTech.`;s?(o=c.filter(m=>m.title.toLowerCase().includes(i.toLowerCase())||m.category.toLowerCase().includes(i.toLowerCase())||m.description&&m.description.toLowerCase().includes(i.toLowerCase())),r=`Tìm kiếm: "${i}"`,a="Kết quả",t=`Tìm thấy ${o.length} bài viết liên quan đến từ khóa của bạn.`):(o=c.filter(m=>m.category.toLowerCase()===i.toLowerCase()),o.length===0&&(o=c));let l="newest",g=6;e.innerHTML=`
    <div class="category-page-header">
      <div class="category-banner-overlay"></div>
      <div class="container category-header-content">
        <span class="category-eyebrow">${a}</span>
        <h1 class="category-page-title">${r}</h1>
        <p class="category-page-desc">${t}</p>
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
  `;function d(){const m=document.getElementById("category-grid");if(!m)return;let v=[...o];l==="newest"?v.sort((h,b)=>b.id-h.id):l==="views"?v.sort((h,b)=>b.views-h.views):l==="comments"&&v.sort((h,b)=>b.comments-h.comments);const w=v.slice(0,g);m.innerHTML=w.map(h=>`
      <article class="cat-article-card">
        <div class="cat-card-img-wrapper">
          <img src="${p(h.image)}" alt="${h.title}">
          <a href="#/chuyen-muc/${h.category}" class="cat-card-category">${h.category}</a>
        </div>
        <div class="cat-card-content">
          <h3 class="cat-card-title"><a href="#/bai-viet/${h.id}">${h.title}</a></h3>
          <p class="cat-card-description">${h.description||"Chưa có mô tả chi tiết cho bài viết này. Nhấp vào để đọc bài viết..."}</p>
          
          <div class="post-meta" style="color: var(--text-muted); font-size: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 1rem; margin-top: auto; width: 100%;">
            <div class="post-author">
              <span class="post-author-name">${h.author}</span>
            </div>
            <span>&bull;&nbsp; ${h.date}</span>
            <span style="margin-left: auto; display: flex; align-items: center; gap: 0.25rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${h.views}
            </span>
            <span style="display: flex; align-items: center; gap: 0.25rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${h.comments}
            </span>
          </div>
        </div>
      </article>
    `).join("");const u=document.getElementById("load-more-container");u&&(v.length>g?u.style.display="block":u.style.display="none")}d();const f=document.getElementById("load-more-articles-btn");f&&f.addEventListener("click",()=>{g+=6,d()});const y=document.querySelectorAll(".filter-tab-btn");y.forEach(m=>{m.addEventListener("click",v=>{y.forEach(w=>w.classList.remove("active")),v.target.classList.add("active"),l=v.target.dataset.filter,g=6,d()})})}function S(e,n,c){const s=parseInt(n,10),i=c.find(l=>l.id===s)||c[0];i.views+=1;const o=c.filter(l=>l.category===i.category&&l.id!==i.id).slice(0,4);i.commentsList||(i.commentsList=[{id:1,author:"Nguyễn Văn Hùng",date:"2 ngày trước",content:"Bài viết rất chi tiết và dễ hiểu! Tôi đang tìm hiểu về vấn đề này và thấy thông tin cực kỳ hữu ích cho công việc thực tế của mình.",avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=80&h=80"},{id:2,author:"Lê Minh Hạnh",date:"1 ngày trước",content:"TopTech chia sẻ kiến thức chuẩn quá, thiết kế giao diện bài viết đọc rất sướng mắt. Mong nhóm tác giả ra thêm nhiều bài viết sâu hơn nữa!",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80&h=80"}]),e.innerHTML=`
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
            <a href="#/chuyen-muc/${i.category}" class="post-detail-category">${i.category}</a>
            <h1 class="post-detail-title">${i.title}</h1>
            
            <div class="post-meta" style="font-size: 0.9rem; color: var(--text-muted); border-bottom: 1px solid var(--border-color); padding-bottom: 1.5rem; margin-bottom: 2rem;">
              <div class="post-author">
                <span>Tác giả: <strong>${i.author}</strong> ${i.authorTag||""}</span>
              </div>
              <span>&bull;&nbsp; ${i.date}</span>
              <span>&bull;&nbsp; ${i.readTime}</span>
              <span style="margin-left: auto; display: flex; align-items: center; gap: 0.3rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${i.views} lượt xem
              </span>
            </div>
          </div>

          <!-- Feature Image -->
          <div class="post-detail-img-wrapper">
            <img src="${p(i.image)}" alt="${i.title}">
          </div>

          <!-- Rich Text Content Body -->
          <div class="post-detail-body">
            <p class="post-lead">${i.description||"Bài viết phân tích chuyên sâu về xu hướng công nghệ mới, hướng dẫn thực hành và đưa ra các giải pháp chuyển đổi số tối ưu hiệu suất cho doanh nghiệp."}</p>
            
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
          </div>

          <!-- Comments Section -->
          <section class="post-comments-section">
            <h3 class="comments-title">Bình luận (<span id="comments-count">${i.commentsList.length}</span>)</h3>
            
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
          <div class="sidebar-widget">
            <h4 class="widget-title">Bài viết liên quan</h4>
            <div class="related-posts-list">
              ${o.length>0?o.map(l=>`
                <div class="related-post-card">
                  <div class="related-img-wrapper">
                    <img src="${p(l.image)}" alt="${l.title}">
                  </div>
                  <div class="related-post-info">
                    <h5 class="related-title"><a href="#/bai-viet/${l.id}">${l.title}</a></h5>
                    <span class="related-meta"><a href="#/chuyen-muc/${l.category}" style="color: inherit; font-weight: 600;">${l.category}</a> &bull; ${l.date}</span>
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
  `;function r(){const l=document.getElementById("comments-list");if(!l)return;l.innerHTML=i.commentsList.map(d=>`
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
    `).join("");const g=document.getElementById("comments-count");g&&(g.textContent=i.commentsList.length)}r();const a=document.getElementById("submit-comment-btn");a&&a.addEventListener("click",()=>{const l=document.getElementById("comment-author-name"),g=document.getElementById("comment-text"),d=l==null?void 0:l.value.trim(),f=g==null?void 0:g.value.trim();if(!d||!f){alert("Vui lòng điền đầy đủ Tên và Nội dung bình luận.");return}const y={id:Date.now(),author:d,date:"Vừa xong",content:f,avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80&h=80"};i.commentsList.unshift(y),i.comments=i.commentsList.length,l&&(l.value=""),g&&(g.value=""),r()});const t=()=>{const l=document.getElementById("reading-bar");if(!l)return;const g=window.scrollY||document.documentElement.scrollTop,d=document.documentElement.scrollHeight-document.documentElement.clientHeight;if(d>0){const f=g/d*100;l.style.width=f+"%"}};window.addEventListener("scroll",t),e.cleanup=()=>{window.removeEventListener("scroll",t)}}const T=[{id:1,title:"Top 20 công cụ AI tốt nhất năm 2026",category:"AI",image:"hero_robot.png",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",readTime:"02 phút để đọc",views:1357,comments:26,featured:!0,description:"Khám phá danh sách các công cụ Trí tuệ Nhân tạo đột phá nhất năm 2026, giúp tự động hóa công việc, tăng hiệu suất gấp 5 lần và tối ưu hóa quy trình làm việc của cá nhân cũng như doanh nghiệp."},{id:2,title:"Top 15 laptop cho lập trình viên chuyên nghiệp",category:"Tin công nghệ",image:"coding_laptop.png",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",readTime:"02 phút để đọc",views:1357,comments:26,featured:!0,description:"Đánh giá chi tiết top 15 dòng máy tính xách tay cấu hình cao, pin trâu và bàn phím gõ êm nhất dành riêng cho các kỹ sư phần mềm và lập trình viên chuyên nghiệp năm nay."},{id:3,title:"So sánh ưu điểm ChatGPT vs Claude vs Gemini năm nay",category:"AI",image:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:1357,comments:26,featured:!1},{id:4,title:"Mô hình ngôn ngữ lớn LLM đang thay đổi lập trình thế nào",category:"AI",image:"https://images.unsplash.com/photo-1684369175833-3d026dc6a066?auto=format&fit=crop&q=80&w=400&h=250",author:"Khánh Nam",authorTag:"#CTAD02",date:"1 ngày trước",views:945,comments:14,featured:!1},{id:5,title:"EUROPE IS PUSHING BACK ON WASHINGTON’S CHIP WAR",category:"AI",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=450",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:894,comments:15,description:`At high-stakes meetings with the White House, Anthropic's cofounder—a "weirdo," per one official—has been replaced by cofounder Tom Brown to lead negotiations on silicon sanctions.`},{id:6,title:"I Met With China’s Top AI Experts. They’re Freaking Out, Too",category:"AI",image:"https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:1102,comments:42,description:"The AI arms race between China and the US has researchers on both sides worried about a “Chernobyl moment” for automated systems."},{id:7,title:"Đánh giá chi tiết Keychron Q1 Pro sau 6 tháng sử dụng",category:"Review",image:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=400&h=250",author:"Quốc Anh",authorTag:"#CTAD03",date:"2 ngày trước",views:520,comments:9},{id:8,title:"A24 Knows You’re Mad About the Google AI Collab",category:"AI",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:932,comments:18},{id:9,title:"Meta tạm dừng chương trình theo dõi nhân viên sau sự cố rò rỉ dữ liệu",category:"Tin công nghệ",image:"https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:2405,comments:63},{id:10,title:"Chính phủ Mỹ yêu cầu nhân viên gỡ bỏ ứng dụng lạ trên điện thoại công vụ",category:"Tin công nghệ",image:"https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:3108,comments:72},{id:11,title:"Hành trình chuyển đổi số của doanh nghiệp bán lẻ Việt Nam",category:"Chuyển đổi số",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=250",author:"Minh Tâm",authorTag:"#CTAD04",date:"3 ngày trước",views:1823,comments:29},{id:12,title:"Chiến lược tối ưu hóa hạ tầng đám mây cho startup năm 2026",category:"Chuyển đổi số",image:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=400&h=250",author:"Minh Tâm",authorTag:"#CTAD04",date:"4 ngày trước",views:1245,comments:11},{id:13,title:"Đánh giá chi tiết màn hình Dell UltraSharp U2723QE 4K",category:"Review",image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400&h=250",author:"Quốc Anh",authorTag:"#CTAD03",date:"5 ngày trước",views:890,comments:15},{id:14,title:"VS Code vs WebStorm: IDE nào tốt hơn cho lập trình Frontend",category:"Phần mềm",image:"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=400&h=250",author:"Khánh Nam",authorTag:"#CTAD02",date:"1 tuần trước",views:3105,comments:54},{id:15,title:"Xây dựng hệ thống CI/CD hoàn chỉnh với Docker và GitHub Actions",category:"IT",image:"https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=400&h=250",author:"Trà My",authorTag:"#CTAD05",date:"1 tuần trước",views:2200,comments:31},{id:16,title:"Bảo mật API trong kiến trúc Microservices thế nào cho đúng",category:"IT",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400&h=250",author:"Trà My",authorTag:"#CTAD05",date:"1 tuần trước",views:1780,comments:19},{id:17,title:"Ứng dụng AI tổng hợp để tăng năng suất cho doanh nghiệp",category:"Giải pháp công nghệ",image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&h=250",author:"Hoàng Long",authorTag:"#CTAD06",date:"2 tuần trước",views:1450,comments:22},{id:18,title:"Casestudy: Uber đã di chuyển hạ tầng dữ liệu khổng lồ thế nào",category:"Casestudy",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400&h=250",author:"Hoàng Long",authorTag:"#CTAD06",date:"3 tuần trước",views:2900,comments:48}],$=["Tin công nghệ","AI","Chuyển đổi số","Review","Phần mềm","IT","Giải pháp công nghệ","Casestudy"];function x(){const e=document.getElementById("app-content");if(!e)return;e.cleanup&&(e.cleanup(),e.cleanup=null);const n=window.location.hash||"#/";if(M(n),n.startsWith("#/ #")){const c=n.split("#")[2];k(e,T,$),setTimeout(()=>{const s=document.getElementById(c);s&&s.scrollIntoView({behavior:"smooth"})},100);return}if(n==="#/"||n==="")k(e,T,$);else if(n.startsWith("#/chuyen-muc/")){const c=n.replace("#/chuyen-muc/","");C(e,c,T,!1)}else if(n.startsWith("#/tim-kiem/")){const c=n.replace("#/tim-kiem/","");C(e,c,T,!0)}else if(n.startsWith("#/bai-viet/")){const c=n.replace("#/bai-viet/","");S(e,c,T)}else window.location.hash="#/";n.startsWith("#/ #")||window.scrollTo(0,0)}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("app-header"),n=document.getElementById("app-footer");e&&L(e),n&&B(n),I(c=>{window.location.hash=`#/tim-kiem/${encodeURIComponent(c)}`}),window.addEventListener("hashchange",x),x()});
