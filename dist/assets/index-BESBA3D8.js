(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const h of e)if(h.type==="childList")for(const g of h.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function a(e){const h={};return e.integrity&&(h.integrity=e.integrity),e.referrerPolicy&&(h.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?h.credentials="include":e.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(e){if(e.ep)return;e.ep=!0;const h=a(e);fetch(e.href,h)}})();function _(t){return!t||t.startsWith("http")||t.startsWith("data:")?t:`/TopTech-Blog/${t.replace(/^\//,"")}`}function Wt(t){t.innerHTML=`
    <header>
      <div class="container nav-container">
        <!-- Left: Hamburger, Trang chủ, Blog, Viết bài -->
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

          <a href="#/admin" class="write-post-btn" title="Cổng quản trị blog">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            <span class="write-post-label">Viết bài</span>
          </a>
        </div>

        <!-- Center: Logo -->
        <a href="#/" class="logo">
          <img class="logo-img" src="${_("/logo-toptech-color.svg")}" alt="TopTech Logo">
        </a>

        <!-- Right: Chuyên mục, Tác giả, Theme, Search -->
        <div class="header-actions">
          <ul class="nav-links desktop-only">
            <li><a href="#/tat-ca-chuyen-muc" class="nav-chuyen-muc-link">Chuyên mục</a></li>
            <li><a href="#/tat-ca-tac-gia" class="nav-tac-gia-link">Tác giả</a></li>
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
        <div style="position: relative;">
          <input type="text" class="search-input" id="search-input" placeholder="Tìm kiếm bài viết..." aria-label="Search posts">
          <div style="position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none; display: flex; align-items: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
          </div>
        </div>
      </div>
    </div>
  `}function Ft(t){const i=document.getElementById("theme-toggle"),a=document.getElementById("menu-toggle"),c=document.getElementById("mega-menu"),e=document.getElementById("mega-menu-close"),h=document.getElementById("mega-menu-backdrop"),g=document.getElementById("search-trigger"),r=document.getElementById("search-overlay"),n=document.getElementById("search-close"),f=document.getElementById("search-input"),b=document.querySelectorAll(".nav-chuyen-muc-trigger");function I(){const A=document.querySelector(".sun-icon"),k=document.querySelector(".moon-icon");!A||!k||(document.body.classList.contains("dark")?(A.style.display="block",k.style.display="none"):(A.style.display="none",k.style.display="block"))}(localStorage.getItem("theme")||"light")==="dark"?document.body.classList.add("dark"):document.body.classList.remove("dark"),I(),i&&i.addEventListener("click",()=>{document.body.classList.contains("dark")?(document.body.classList.remove("dark"),localStorage.setItem("theme","light")):(document.body.classList.add("dark"),localStorage.setItem("theme","dark")),I()});const H=()=>c==null?void 0:c.classList.add("active"),y=()=>c==null?void 0:c.classList.remove("active");a==null||a.addEventListener("click",H),b.forEach(A=>A.addEventListener("click",H)),e==null||e.addEventListener("click",y),h==null||h.addEventListener("click",y);const E=c==null?void 0:c.querySelectorAll("a");E==null||E.forEach(A=>A.addEventListener("click",y)),g&&r&&g.addEventListener("click",()=>{r.classList.add("active"),setTimeout(()=>f==null?void 0:f.focus(),100)});const S=()=>{r==null||r.classList.remove("active"),f&&(f.value="")};n==null||n.addEventListener("click",S),r==null||r.addEventListener("click",A=>{A.target===r&&S()}),f==null||f.addEventListener("keydown",A=>{if(A.key==="Enter"&&t){const k=f.value.trim();k&&(S(),t(k))}})}function Gt(t){const i=document.querySelector(".nav-home-link"),a=document.querySelector(".nav-blog-link"),c=document.querySelector(".write-post-btn"),e=document.querySelector(".nav-chuyen-muc-link"),h=document.querySelector(".nav-tac-gia-link");i==null||i.classList.remove("active"),a==null||a.classList.remove("active"),c==null||c.classList.remove("active"),e==null||e.classList.remove("active"),h==null||h.classList.remove("active"),t==="#/"||t===""||t.startsWith("#/ #")?i==null||i.classList.add("active"):t.startsWith("#/tat-ca-chuyen-muc")||t.startsWith("#/chuyen-muc/")?e==null||e.classList.add("active"):t.startsWith("#/tat-ca-tac-gia")||t.startsWith("#/tac-gia/")?h==null||h.classList.add("active"):t.startsWith("#/blog")||t.includes("bai-viet")?a==null||a.classList.add("active"):t.startsWith("#/admin")&&(c==null||c.classList.add("active"))}function Kt(t){t.innerHTML=`
    <footer>
      <div class="container footer-container">
        <!-- Top part: Logo & Description (Row Layout) -->
        <div class="footer-top-row">
          <a href="#/" class="logo">
            <img class="logo-img-footer" src="${_("/logo-toptech-monochrome.svg")}" alt="TopTech Logo Đơn Sắc">
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
  `}function qt(t,i,a){t.innerHTML=`
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
        <a href="#/tat-ca-chuyen-muc" class="view-more-btn">
          Tất cả chuyên mục
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
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
          <a href="#/tat-ca-tac-gia" class="view-more-btn">
            Tất cả tác giả
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
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
          <a href="#/tat-ca-tac-gia" class="view-more-btn" style="display: inline-flex;">Tìm hiểu thêm</a>
        </div>
      </div>
    </section>
    </main>
  `;let c=0;function e(r){const n=i[r%i.length],f=[i[(r+1)%i.length],i[(r+2)%i.length],i[(r+3)%i.length],i[(r+4)%i.length]],b=document.getElementById("hero-left-container");n&&b&&(b.innerHTML=`
        <img src="${_(n.image)}" alt="${n.title}">
        <div class="featured-big-overlay"></div>
        <div class="featured-big-content">
          <a href="#/chuyen-muc/${n.category}" class="featured-big-tag">${n.category}</a>
          <h3 class="featured-big-title"><a href="#/bai-viet/${n.id}">${n.title}</a></h3>
          <div class="post-meta post-detail-meta" style="display: flex; justify-content: space-between; align-items: center; width: 100%; flex-wrap: wrap; gap: 0.5rem;">
            <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; flex: none;">
              <span>${n.author}</span>
              <span class="meta-dot">&bull;&nbsp;</span><span>${n.date}</span>
              <span class="meta-dot">&bull;&nbsp;</span><span>${n.readTime||"02 phút để đọc"}</span>
            </div>
            <div class="meta-right" style="display: flex; align-items: center; gap: 0.6rem; margin-left: auto;">
              <span style="display: inline-flex; align-items: center; gap: 0.2rem; white-space: nowrap;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${n.views}
              </span>
              <span style="display: inline-flex; align-items: center; gap: 0.2rem; white-space: nowrap;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${n.comments}
              </span>
            </div>
          </div>
        </div>
      `);const I=document.getElementById("hero-side-container");I&&(I.innerHTML=f.filter(Boolean).map($=>`
        <div class="side-post-card">
          <img class="side-post-img" src="${_($.image)}" alt="${$.title}">
          <div class="side-post-info">
            <h4 class="side-post-title"><a href="#/bai-viet/${$.id}">${$.title}</a></h4>
            <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem; display: flex; justify-content: space-between; align-items: center; width: 100%;">
              <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
                <span>${$.author}</span>
                <span class="meta-dot">&bull;</span>
                <span>${$.date}</span>
              </div>
              <div class="meta-right" style="display: flex; align-items: center; gap: 0.6rem; margin-left: auto;">
                <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${$.views}</span>
                <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${$.comments}</span>
              </div>
            </div>
          </div>
        </div>
      `).join(""))}e(c);const h=setInterval(()=>{c=(c+1)%i.length;const r=document.getElementById("hero-left-container"),n=document.getElementById("hero-side-container");r&&n&&(r.style.opacity="0.1",n.style.opacity="0.1",setTimeout(()=>{e(c),r.style.opacity="1",n.style.opacity="1"},300))},5e3),g=document.getElementById("hero-small-grid-container");if(g){const r=i.slice(5,9);g.innerHTML=r.map(n=>`
      <div class="small-post-card">
        <div class="small-post-img-wrapper">
          <img src="${_(n.image)}" alt="${n.title}">
        </div>
        <h4 class="small-post-title"><a href="#/bai-viet/${n.id}">${n.title}</a></h4>
        <div class="post-meta post-meta-stack" style="color: var(--text-muted); font-size: 0.7rem; display: flex; justify-content: space-between; align-items: center; width: 100%;">
          <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
            <span>${n.author}</span>
            <span class="meta-dot">&bull;</span>
            <span>${n.date}</span>
          </div>
          <div class="meta-right" style="display: flex; align-items: center; gap: 0.5rem; margin-left: auto;">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${n.views}</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${n.comments}</span>
          </div>
        </div>
      </div>
    `).join("")}Xt(i),Ut(i),Qt(i,a),Jt(i),t.cleanup=()=>{clearInterval(h)}}function Xt(t){const i=document.getElementById("featured-numbers-container");if(!i)return;const a=t.filter(e=>e.featured)[0]||t.find(e=>e.id===1),c=t.filter(e=>e.id!==(a==null?void 0:a.id)).slice(0,6);i.innerHTML=c.map((e,h)=>`
    <div class="number-post-card">
      <span class="post-number">#${h+1}</span>
      <div class="number-post-img-wrapper">
        <img src="${_(e.image)}" alt="${e.title}">
      </div>
      <div class="number-post-info">
        <h4 class="number-post-title"><a href="#/bai-viet/${e.id}">${e.title}</a></h4>
        <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem; display: flex; justify-content: space-between; align-items: center; width: 100%;">
          <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
            <span>${e.author}</span>
            <span class="meta-dot">&bull;</span>
            <span>${e.date}</span>
          </div>
          <div class="meta-right" style="display: flex; align-items: center; gap: 0.6rem; margin-left: auto;">
            <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${e.views}</span>
            <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${e.comments}</span>
          </div>
        </div>
      </div>
    </div>
  `).join("")}function Ut(t){const i=document.getElementById("new-updates-content"),a=document.getElementById("col-center-ai"),c=document.getElementById("trending-content"),e=document.getElementById("reviews-content");if(i){const h=t[0]||t.find(n=>n.id===3),g=t[1]||t.find(n=>n.id===4),r=t[2]||t.find(n=>n.id===7);i.innerHTML=[h,g,r].filter(Boolean).map(n=>`
      <div class="post-card-mini">
        <img class="post-card-mini-img" src="${_(n.image)}" alt="${n.title}">
        <div class="post-card-mini-info">
          <a href="#/chuyen-muc/${n.category}" class="post-card-mini-tag">${n.category}</a>
          <h4 class="post-card-mini-title"><a href="#/bai-viet/${n.id}">${n.title}</a></h4>
          <div class="post-meta" style="font-size: 0.7rem; color: var(--text-muted);">
            <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
              <span>${n.author}</span>
              <span class="meta-dot">&bull;</span>
              <span>${n.date}</span>
            </div>
          </div>
        </div>
      </div>
    `).join("")}if(a){const h=t.filter(f=>f.category==="AI"),g=h[0]||t.find(f=>f.id===5),r=h[1]||t.find(f=>f.id===6),n=h[2]||t.find(f=>f.id===8);a.innerHTML=`
      <!-- Main Center Post -->
      <div class="center-main-post">
        <a href="#/chuyen-muc/${g.category}" class="center-main-tag">${g.category}</a>
        <h4 class="center-main-title"><a href="#/bai-viet/${g.id}">${g.title}</a></h4>
        <div class="post-meta post-detail-meta" style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.2rem;">
          <span>${g.author} <span class="meta-dot">&bull;&nbsp;</span>${g.date}</span>
        </div>
        <div class="center-main-img-wrapper">
          <img src="${_(g.image)}" alt="${g.title}">
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
          <a href="#/chuyen-muc/${n.category}" class="post-card-mini-tag" style="font-size: 0.65rem;">${n.category}</a>
          <h5 class="center-sub-title"><a href="#/bai-viet/${n.id}">${n.title}</a></h5>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${n.author}</span>
        </div>
      </div>
    `}if(c){const h=[...t].sort((g,r)=>(r.views||0)-(g.views||0)).slice(0,5);c.innerHTML=h.map(g=>`
      <div class="trending-post-card">
        <h4 class="trending-post-title"><a href="#/bai-viet/${g.id}">${g.title}</a></h4>
        <div class="post-meta" style="font-size: 0.7rem; color: var(--text-muted);">
          <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
            <span>${g.author}</span>
            <span class="meta-dot">&bull;</span>
            <span>${g.date}</span>
          </div>
        </div>
      </div>
    `).join("")}if(e){const h=t.filter(n=>n.category==="Review"),g=t.filter(n=>n.category!=="Review"),r=[...h,...g].slice(0,4);e.innerHTML=r.map(n=>`
      <div class="review-post-card">
        <div class="review-post-img-wrapper">
          <img src="${_(n.image)}" alt="${n.title}">
        </div>
        <a href="#/chuyen-muc/${n.category}" class="post-card-mini-tag" style="font-size: 0.65rem; margin-top: 0.2rem;">${n.category}</a>
        <h4 class="review-post-title"><a href="#/bai-viet/${n.id}">${n.title}</a></h4>
        <div class="post-meta post-meta-stack" style="font-size: 0.7rem; color: var(--text-muted);">
          <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
            <span>${n.author}</span>
            <span class="meta-dot">&bull;</span>
            <span>${n.date}</span>
          </div>
        </div>
      </div>
    `).join("")}}function Qt(t,i){const a=document.getElementById("category-columns-container");a&&(a.innerHTML=i.map((c,e)=>{const h=t.filter(r=>r.category===c),g=[];for(let r=0;r<4;r++)g.push(h[r%h.length]||t[(e*2+r)%t.length]);return`
      <div class="category-column">
        <div class="category-header-wrapper">
          <a href="#/chuyen-muc/${c}" class="category-title-header">${c}</a>
        </div>
        <div class="split-col" style="gap: 1rem;">
          ${g.map((r,n)=>`
            <div class="cat-post-card ${n===0?"has-image":""}">
              <div class="cat-post-img-wrapper">
                <img src="${_(r.image)}" alt="${r.title}">
              </div>
              <div class="cat-post-text-wrapper">
                <h4 class="cat-post-title"><a href="#/bai-viet/${r.id}">${r.title}</a></h4>
                <span style="font-size: 0.7rem; color: var(--text-muted);">${r.date}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `}).join(""))}function Jt(t){const i=document.getElementById("refresh-new-updates"),a=document.getElementById("new-updates-content");i&&i.addEventListener("click",()=>{i.classList.add("spinning"),setTimeout(()=>{i.classList.remove("spinning");const c=[...t].filter(r=>r.id!==5&&r.id!==6).sort(()=>.5-Math.random()),e=c[0],h=c[1],g=c[2];a&&(a.innerHTML=[e,h,g].map(r=>`
            <div class="post-card-mini">
              <img class="post-card-mini-img" src="${_(r.image||"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=250")}" alt="${r.title}">
              <div class="post-card-mini-info">
                <a href="#/chuyen-muc/${r.category}" class="post-card-mini-tag">${r.category}</a>
                <h4 class="post-card-mini-title"><a href="#/bai-viet/${r.id}">${r.title}</a></h4>
                <div class="post-meta" style="font-size: 0.7rem; color: var(--text-muted);">
                  <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
                    <span>${r.author}</span>
                    <span class="meta-dot">&bull;</span>
                    <span>${r.date}</span>
                  </div>
                </div>
              </div>
            </div>
          `).join(""))},600)})}const Yt={"Tin công nghệ":["Điện thoại","Máy tính","Thiết bị thông minh","Xe điện"],AI:["Machine Learning","Generative AI","ChatGPT & LLMs","Thị giác máy tính"],"Chuyển đổi số":["Doanh nghiệp","Giải pháp đám mây","IoT & Automation","Bảo mật dữ liệu"],Review:["Đánh giá Laptop","Đánh giá Smartphone","Đồ công nghệ khác","Trải nghiệm dịch vụ"],"Phần mềm":["Công cụ lập trình","Phần mềm văn phòng","Hệ điều hành","Ứng dụng di động"],IT:["Lập trình","Quản trị mạng","Cơ sở dữ liệu","DevOps"],"Giải pháp công nghệ":["AI cho doanh nghiệp","Tự động hóa quy trình","Hạ tầng số","ERP & CRM"],Casestudy:["Thành công tiêu biểu","Phân tích thất bại","Khảo sát thực tế"]},Bt=localStorage.getItem("toptech_subcategories"),Et=Bt?JSON.parse(Bt):Yt,kt={};for(const t in Et)Et[t].forEach(i=>{kt[i]=t});function zt(t,i,a,c=!1){const e=decodeURIComponent(i);let h=[],g=kt[e],r=!!g;c?h=a.filter(y=>y.title.toLowerCase().includes(e.toLowerCase())||y.category.toLowerCase().includes(e.toLowerCase())||y.subcategory&&y.subcategory.toLowerCase().includes(e.toLowerCase())||y.description&&y.description.toLowerCase().includes(e.toLowerCase())):r?h=a.filter(y=>y.subcategory&&y.subcategory.toLowerCase()===e.toLowerCase()||y.category.toLowerCase()===e.toLowerCase()):h=a.filter(y=>y.category.toLowerCase()===e.toLowerCase()||y.subcategory&&kt[y.subcategory]&&kt[y.subcategory].toLowerCase()===e.toLowerCase());let n="newest",f=6,b="";if(c)b=`
      <span class="category-eyebrow" style="font-size: 0.95rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--primary-color); display: block; margin-bottom: 0.5rem;">KẾT QUẢ TÌM KIẾM</span>
      <h1 class="category-page-title search-title" style="font-weight: 850; text-transform: uppercase; margin: 0; color: var(--text-primary);">"${e.toUpperCase()}"</h1>
    `;else{const y=r?g:e,E=Et[y]||[];b=`
      <!-- Left: Major category title -->
      <div>
        <h1 class="category-page-title" style="font-weight: 850; text-transform: uppercase; margin: 0; line-height: 1.1; color: var(--text-primary);">
          <a href="#/chuyen-muc/${y}" style="color: inherit; text-decoration: none;">${y.toUpperCase()}</a>
        </h1>
      </div>
      
      <!-- Right: Capsule subcategory tag pills list -->
      <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: center;">
        ${E.map(S=>{const A=e.toLowerCase()===S.toLowerCase();return`
            <a href="#/chuyen-muc/${A?y:S}" style="display: inline-block; padding: 0.45rem 1.1rem; font-size: 0.82rem; font-weight: 600; border-radius: 50px; text-decoration: none; border: 1.5px solid ${A?"var(--primary-color)":"var(--border-color)"}; background-color: ${A?"var(--primary-color)":"var(--bg-main)"}; color: ${A?"#fff":"var(--text-secondary)"}; transition: all var(--transition-fast);" class="subcat-pill ${A?"active-pill":""}" ${A?'title="Bấm lại để quay về chuyên mục lớn"':""}>
              ${S}
            </a>
          `}).join("")}
      </div>
    `}t.innerHTML=`
    <div class="category-page-header" style="padding: 2.5rem 0; background: var(--bg-surface); border-bottom: 1px solid var(--border-color); transition: background-color var(--transition-normal), border-color var(--transition-normal);">
      <div class="container category-header-content ${c?"search-mode":""}">
        ${b}
      </div>
    </div>

    <div class="container section-padding">
      <!-- Filter controls -->
      <div class="category-filters-bar">
        <span class="filters-label">Sắp xếp theo:</span>
        <div class="filters-select-wrapper">
          <select class="filter-select" id="filter-select">
            <option value="newest" ${n==="newest"?"selected":""}>Mới nhất</option>
            <option value="views" ${n==="views"?"selected":""}>Xem nhiều nhất</option>
            <option value="comments" ${n==="comments"?"selected":""}>Bình luận nhiều nhất</option>
          </select>
          <div class="select-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
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
  `;function I(){const y=document.getElementById("category-grid");if(!y)return;let E=[...h];n==="newest"?E.sort((k,j)=>j.id-k.id):n==="views"?E.sort((k,j)=>j.views-k.views):n==="comments"&&E.sort((k,j)=>j.comments-k.comments);const S=E.slice(0,f);y.innerHTML=S.length===0?`
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px; transition: background-color var(--transition-normal), border-color var(--transition-normal);">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted); margin-bottom: 1rem;"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-primary);">Chưa có bài viết</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 400px; margin: 0 auto;">Chưa có bài viết nào thuộc chuyên mục này. Quản trị viên có thể đăng nhập vào trang Viết bài để cập nhật bài viết mới!</p>
        </div>
      `:S.map(k=>`
      <article class="cat-article-card">
        <div class="cat-card-img-wrapper">
          <img src="${_(k.image)}" alt="${k.title}">
          <a href="#/chuyen-muc/${k.subcategory||k.category}" class="cat-card-category">${k.subcategory||k.category}</a>
        </div>
        <div class="cat-card-content">
          <h3 class="cat-card-title"><a href="#/bai-viet/${k.id}">${k.title}</a></h3>
          <p class="cat-card-description">${k.description||"Chưa có mô tả chi tiết cho bài viết này. Nhấp vào để đọc bài viết..."}</p>
          
          <div class="post-meta post-meta-stack" style="color: var(--text-muted); font-size: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 1rem; margin-top: auto; width: 100%; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
            <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
              <span class="post-author-name">${k.author}</span>
              <span class="meta-dot">&bull;</span>
              <span>${k.date}</span>
            </div>
            <div class="meta-right" style="display: flex; align-items: center; gap: 0.6rem; margin-left: auto;">
              <span style="display: flex; align-items: center; gap: 0.25rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${k.views}
              </span>
              <span style="display: flex; align-items: center; gap: 0.25rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${k.comments}
              </span>
            </div>
          </div>
        </div>
      </article>
    `).join("");const A=document.getElementById("load-more-container");A&&(E.length>f?A.style.display="block":A.style.display="none")}I();const $=document.getElementById("load-more-articles-btn");$&&$.addEventListener("click",()=>{f+=6,I()});const H=document.getElementById("filter-select");H&&H.addEventListener("change",y=>{n=y.target.value,f=6,I()})}const $t="Nhập chú thích ảnh...";function Zt(){return`
    <div class="post-figure-toolbar">
      <button type="button" class="post-figure-delete" title="Xóa ảnh">×</button>
    </div>
  `}function ct(t,i="",{inRow:a=!1}={}){const c=i==="Chú thích ảnh"?"":i;return`
    <figure class="post-inline-figure" contenteditable="false">
      <div class="post-figure-media">
        <img src="${t}" alt="${c||"Ảnh"}" draggable="false">
      </div>
      <div class="post-figcaption-zone" contenteditable="true" data-placeholder="${$t}">${c}</div>
    </figure>
  `}function te(){return`
    <div class="post-image-row post-image-row-empty is-selected" contenteditable="false">
      <div class="post-image-row-toolbar">
        <button type="button" class="post-image-row-delete-btn" title="Xóa nhóm ảnh">Xóa nhóm</button>
      </div>
      <div class="post-image-row-items"></div>
      <p class="post-image-row-hint">Nhóm ảnh trống — bấm chọn nhóm này, sau đó dán ảnh (Ctrl+V) hoặc nhấn + Thêm ảnh</p>
      <button type="button" class="post-image-row-add-btn" title="Thêm ảnh vào hàng">+ Thêm ảnh</button>
    </div>
  `}function Ht(t){return`
    <div class="post-image-row" contenteditable="false">
      <div class="post-image-row-toolbar">
        <button type="button" class="post-image-row-delete-btn" title="Xóa nhóm ảnh">Xóa nhóm</button>
      </div>
      <div class="post-image-row-items">${t.map(a=>ct(a,"",{inRow:!0}).trim()).join("")}</div>
      <button type="button" class="post-image-row-add-btn" title="Thêm ảnh vào hàng">+ Thêm ảnh</button>
    </div>
  `}function Pt(t){const i=[];if(!(t!=null&&t.items))return i;for(let a=0;a<t.items.length;a++)if(t.items[a].type.indexOf("image")!==-1){const c=t.items[a].getAsFile();c&&i.push(c)}return i}function ee(t=3,i=3){const a=Array.from({length:i},(e,h)=>`<th>Tiêu đề ${h+1}</th>`).join(""),c=Array.from({length:t},(e,h)=>`<tr>${Array.from({length:i},(g,r)=>`<td>Nội dung ${h*i+r+1}</td>`).join("")}</tr>`).join("");return`
    <div class="post-table-block" contenteditable="false">
      <div class="post-table-block-toolbar">
        <button type="button" class="post-table-delete-btn" title="Xóa bảng">Xóa bảng</button>
      </div>
      <div class="table-responsive">
        <table class="post-detail-table" contenteditable="true">
          <thead><tr>${a}</tr></thead>
          <tbody>${c}</tbody>
        </table>
      </div>
    </div>
  `}function ne(t=""){return`<blockquote class="post-blockquote">${t||"Nội dung trích dẫn..."}</blockquote>`}function Z(t,i){if(!t)return;t.focus(),document.execCommand("insertHTML",!1,i+"<p><br></p>"),t.dispatchEvent(new Event("input"))}function ie(t){const i=document.createElement("div");return i.innerHTML=t,i.querySelectorAll("*").forEach(a=>{a.style&&(a.style.removeProperty("font-size"),a.style.removeProperty("font-family"),a.style.removeProperty("line-height")),a.getAttribute("style")===""&&a.removeAttribute("style")}),i.querySelectorAll("img").forEach(a=>{const c=a.getAttribute("src");if(!c){a.remove();return}const e=a.getAttribute("alt")||"",h=document.createElement("div");h.innerHTML=ct(c,e),a.replaceWith(h.firstElementChild)}),i.querySelectorAll("blockquote").forEach(a=>a.classList.add("post-blockquote")),i.querySelectorAll("table").forEach(a=>{if(a.closest(".post-table-block"))return;a.classList.add("post-detail-table");const c=document.createElement("div");c.className="post-table-block",c.contentEditable="false";const e=document.createElement("div");e.className="table-responsive",a.parentNode.insertBefore(c,a),e.appendChild(a),c.appendChild(e)}),i.innerHTML}function tt(t,{isEditor:i=!1}={}){t&&(t.querySelectorAll("figure.post-inline-figure").forEach(a=>{var g;i?a.contentEditable="false":a.removeAttribute("contenteditable");const c=a.querySelector("img");if(c&&!a.querySelector(".post-figure-media")){const r=document.createElement("div");r.className="post-figure-media",c.parentNode.insertBefore(r,c),r.appendChild(c)}const e=a.querySelector("figcaption.post-figcaption");if(e&&!a.querySelector(".post-figcaption-zone")){let r=e.textContent.trim();r==="Chú thích ảnh"&&(r="");const n=document.createElement("div");n.className="post-figcaption-zone",i&&(n.contentEditable="true"),n.dataset.placeholder=$t,n.textContent=r,e.replaceWith(n)}const h=a.querySelector(".post-figcaption-zone");if(h)if(i)h.contentEditable="true";else{h.removeAttribute("contenteditable");const r=h.textContent.trim();if(!r||r==="Chú thích ảnh"){h.remove();const n=a.querySelector(".post-figure-media");n&&(n.style.borderRadius="12px",n.style.borderBottom="1px solid var(--border-color)")}}else if(i){const r=document.createElement("div");r.className="post-figcaption-zone",r.contentEditable="true",r.dataset.placeholder=$t,a.appendChild(r)}if(i&&(a.setAttribute("draggable",(g=a.parentNode)!=null&&g.classList.contains("post-image-row-items")?"true":"false"),!a.querySelector(".post-figure-toolbar"))){const r=document.createElement("div");r.innerHTML=Zt(),a.insertBefore(r.firstElementChild,a.firstChild)}}),t.querySelectorAll("table.post-detail-table").forEach(a=>{if(!a.closest(".post-table-block")){const c=document.createElement("div");c.className="post-table-block",i&&(c.contentEditable="false");const e=document.createElement("div");e.className="table-responsive",a.parentNode.insertBefore(c,a),e.appendChild(a),c.appendChild(e)}i||a.removeAttribute("contenteditable")}),t.querySelectorAll("blockquote").forEach(a=>a.classList.add("post-blockquote")),i?(t.querySelectorAll(".post-image-row").forEach(a=>{if(!a.querySelector(".post-image-row-toolbar")){const c=document.createElement("div");c.className="post-image-row-toolbar",c.innerHTML='<button type="button" class="post-image-row-delete-btn" title="Xóa nhóm ảnh">Xóa nhóm</button>',a.insertBefore(c,a.firstChild)}}),t.querySelectorAll(".post-table-block").forEach(a=>{if(!a.querySelector(".post-table-block-toolbar")){const c=document.createElement("div");c.className="post-table-block-toolbar",c.innerHTML='<button type="button" class="post-table-delete-btn" title="Xóa bảng">Xóa bảng</button>',a.insertBefore(c,a.firstChild)}})):(t.querySelectorAll(".post-image-row-add-btn, .post-figure-toolbar, .post-image-row-hint, .post-image-row-toolbar, .post-table-block-toolbar").forEach(a=>a.remove()),t.querySelectorAll(".post-image-row, .post-table-block").forEach(a=>{a.removeAttribute("contenteditable"),a.classList.remove("is-selected","post-image-row-empty")})))}function oe(t,i={}){if(!t||t.dataset.blocksBound==="true")return;t.dataset.blocksBound="true";const{onImageRowAdd:a,onImageRowSelect:c,onChange:e}=i;function h(n){t.querySelectorAll(".post-image-row.is-selected").forEach(f=>f.classList.remove("is-selected")),n&&n.classList.add("is-selected"),c==null||c(n||null)}function g(n){if(!n)return;n.querySelectorAll(".post-inline-figure").length===0?n.classList.add("post-image-row-empty"):n.classList.remove("post-image-row-empty")}t.addEventListener("click",n=>{const f=n.target.closest(".post-figcaption-zone");if(f){n.stopPropagation(),f.focus();return}const b=n.target.closest(".post-figure-delete");if(b){n.preventDefault(),n.stopPropagation();const E=b.closest(".post-inline-figure"),S=E==null?void 0:E.closest(".post-image-row");E==null||E.remove(),g(S),e==null||e();return}const I=n.target.closest(".post-image-row-delete-btn");if(I){if(n.preventDefault(),n.stopPropagation(),confirm("Bạn có chắc chắn muốn xóa toàn bộ nhóm ảnh này?")){const E=I.closest(".post-image-row");E==null||E.remove(),e==null||e()}return}const $=n.target.closest(".post-table-delete-btn");if($){if(n.preventDefault(),n.stopPropagation(),confirm("Bạn có chắc chắn muốn xóa bảng này?")){const E=$.closest(".post-table-block");E==null||E.remove(),e==null||e()}return}const H=n.target.closest(".post-image-row-add-btn");if(H){n.preventDefault(),n.stopPropagation();const E=H.closest(".post-image-row");h(E),a==null||a(E);return}const y=n.target.closest(".post-image-row");if(y){n.stopPropagation(),h(y);return}h(null)}),t.addEventListener("focusout",n=>{var I,$,H;const f=($=(I=n.target).closest)==null?void 0:$.call(I,".post-figcaption-zone");if(!f)return;const b=(H=f.closest("figure"))==null?void 0:H.querySelector("img");b&&(b.alt=f.textContent.trim()||"Ảnh")}),t.addEventListener("keydown",n=>{if(n.key!=="Enter")return;const f=n.target.closest(".post-figcaption-zone");if(f){n.preventDefault(),f.blur();const b=f.closest(".post-inline-figure, .post-image-row, .post-table-block");let I=b==null?void 0:b.nextElementSibling;if(!I||!I.matches("p")){const y=document.createElement("p");y.innerHTML="<br>",b==null||b.parentNode.insertBefore(y,b.nextSibling),I=y}const $=document.createRange();$.selectNodeContents(I),$.collapse(!0);const H=window.getSelection();H.removeAllRanges(),H.addRange($)}});let r=null;t.addEventListener("dragstart",n=>{const f=n.target.closest(".post-image-row-items .post-inline-figure");f&&(r=f,f.classList.add("is-dragging"),n.dataTransfer.setData("text/plain",""))}),t.addEventListener("dragover",n=>{if(!r)return;const f=n.target.closest(".post-image-row-items .post-inline-figure");if(f&&f!==r&&f.parentNode===r.parentNode){n.preventDefault();const b=f.getBoundingClientRect(),I=b.left+b.width/2;n.clientX<I?(f.classList.add("drag-over-left"),f.classList.remove("drag-over-right")):(f.classList.add("drag-over-right"),f.classList.remove("drag-over-left"))}}),t.addEventListener("dragleave",n=>{const f=n.target.closest(".post-image-row-items .post-inline-figure");f&&f.classList.remove("drag-over-left","drag-over-right")}),t.addEventListener("drop",n=>{if(!r)return;const f=n.target.closest(".post-image-row-items .post-inline-figure");if(f&&f!==r&&f.parentNode===r.parentNode){n.preventDefault();const b=f.getBoundingClientRect(),I=b.left+b.width/2;n.clientX<I?f.parentNode.insertBefore(r,f):f.parentNode.insertBefore(r,f.nextElementSibling),e==null||e()}t.querySelectorAll(".post-inline-figure").forEach(b=>{b.classList.remove("drag-over-left","drag-over-right","is-dragging")}),r=null}),t.addEventListener("dragend",()=>{t.querySelectorAll(".post-inline-figure").forEach(n=>{n.classList.remove("drag-over-left","drag-over-right","is-dragging")}),r=null})}function Dt(t){if(!t)return"";if(t.trim().startsWith("<")||t.includes("</p>")||t.includes("</div>")||t.includes("</td>")||t.includes("</figure>")||t.includes("post-image-row")||t.includes("post-table-block"))return t;const i=t.split(`
`);let a=!1,c="",e=[];for(let g=0;g<i.length;g++){const r=i[g].trim();if(r.startsWith("|")&&r.endsWith("|")){a||(a=!0,c='<div class="post-table-block"><div class="table-responsive"><table class="post-detail-table">');const n=r.split("|").slice(1,-1).map(b=>b.trim());if(n.every(b=>/^:?-+:?$/.test(b)))continue;c.includes('<table class="post-detail-table">')&&!c.includes("<thead>")&&!c.includes("<tbody>")?c+="<thead><tr>"+n.map(b=>`<th>${b}</th>`).join("")+"</tr></thead><tbody>":c+="<tr>"+n.map(b=>`<td>${b}</td>`).join("")+"</tr>"}else a&&(a=!1,c+="</tbody></table></div></div>",e.push(c),c=""),e.push(i[g])}a&&(c+="</tbody></table></div></div>",e.push(c)),t=e.join(`
`);let h=t.replace(/^### (.*$)/gim,'<h3 class="post-subheading-3">$1</h3>').replace(/^## (.*$)/gim,'<h2 class="post-subheading-2">$1</h2>').replace(/^# (.*$)/gim,'<h1 class="post-heading-1">$1</h1>').replace(/\!\[(.*?)\]\((.*?)\)/g,(g,r,n)=>ct(n,r).trim()).replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/^\> (.*$)/gim,'<blockquote class="post-blockquote">$1</blockquote>').replace(/^\- (.*$)/gim,"<li>$1</li>").replace(/\`\`\`([\s\S]*?)\`\`\`/g,'<pre class="post-code-block"><code>$1</code></pre>').replace(/\`(.*?)\`/g,'<code class="post-inline-code">$1</code>').replace(/\n\n/g,"</p><p>");return h=h.replace(/(<li>.*<\/li>)/gim,"<ul>$1</ul>"),`<p>${h}</p>`}typeof window<"u"&&"speechSynthesis"in window&&(window.speechSynthesis.getVoices(),"onvoiceschanged"in window.speechSynthesis&&(window.speechSynthesis.onvoiceschanged=()=>{window.speechSynthesis.getVoices()}));function ae(t,i,a){const c=parseInt(i,10),e=a.find(o=>o.id===c)||a[0];e.views+=1,localStorage.setItem("toptech_articles",JSON.stringify(a));const h=a.filter(o=>o.category===e.category&&o.id!==e.id).slice(0,4);e.commentsList||(e.commentsList=[{id:1,author:"Nguyễn Văn Hùng",date:"2 ngày trước",content:"Bài viết rất chi tiết và dễ hiểu! Tôi đang tìm hiểu về vấn đề này và thấy thông tin cực kỳ hữu ích cho công việc thực tế của mình.",avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=80&h=80"},{id:2,author:"Lê Minh Hạnh",date:"1 ngày trước",content:"TopTech chia sẻ kiến thức chuẩn quá, thiết kế giao diện bài viết đọc rất sướng mắt. Mong nhóm tác giả ra thêm nhiều bài viết sâu hơn nữa!",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80&h=80"}]),t.innerHTML=`
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
            
            <div class="post-meta post-detail-meta" style="font-size: 0.8em; color: var(--text-muted); border-bottom: 1px solid var(--border-color); padding-bottom: 1.5rem; margin-bottom: 2rem; display: flex; align-items: center; flex-wrap: wrap; gap: 0.8rem;">
              <div class="post-author" style="display: flex; align-items: center; gap: 0.3rem;">
                <span>Tác giả: <strong>${e.author}</strong></span>
              </div>
              <span class="meta-dot">&bull;&nbsp;</span><span>${e.date}</span>
              <span class="meta-dot">&bull;&nbsp;</span><span>${e.readTime}</span>
              
              ${sessionStorage.getItem("toptech_admin_logged_in")==="true"?`
                <span class="meta-dot">&bull;&nbsp;</span>
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
            <img src="${_(e.image)}" alt="${e.title}">
          </div>

          <!-- Rich Text Content Body -->
          <div class="post-detail-body">
            ${e.content?`
              <p class="post-lead">${e.description||""}</p>
              ${Dt(e.content)}
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
              ${h.length>0?h.map(o=>`
                <div class="related-post-card">
                  <div class="related-img-wrapper">
                    <img src="${_(o.image)}" alt="${o.title}">
                  </div>
                  <div class="related-post-info">
                    <h5 class="related-title"><a href="#/bai-viet/${o.id}">${o.title}</a></h5>
                    <span class="related-meta"><a href="#/chuyen-muc/${o.subcategory||o.category}" style="color: inherit; font-weight: 600;">${o.subcategory||o.category}</a> <span class="meta-dot">&bull;&nbsp;</span>${o.date}</span>
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

    <!-- Mobile TOC Elements -->
    <button class="mobile-toc-toggle-btn" id="mobile-toc-toggle" aria-label="Mở mục lục">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
    </button>
    
    <div class="mobile-toc-panel" id="mobile-toc-panel">
      <div class="mobile-toc-header">
        <h5>Mục lục bài viết</h5>
        <button class="mobile-toc-close" id="mobile-toc-close" aria-label="Đóng">&times;</button>
      </div>
      <ul class="mobile-toc-list" id="mobile-toc-list"></ul>
    </div>
  `;function g(){const o=document.getElementById("comments-list");if(!o)return;o.innerHTML=e.commentsList.map(p=>`
      <div class="comment-item">
        <div class="comment-content">
          <div class="comment-header">
            <span class="comment-author">${p.author}</span>
            <span class="comment-date">${p.date}</span>
          </div>
          <p class="comment-text-p">${p.content}</p>
        </div>
      </div>
    `).join("");const s=document.getElementById("comments-count");s&&(s.textContent=e.commentsList.length)}g();const r=document.getElementById("submit-comment-btn");r&&r.addEventListener("click",()=>{const o=document.getElementById("comment-author-name"),s=document.getElementById("comment-text"),p=o==null?void 0:o.value.trim(),m=s==null?void 0:s.value.trim();if(!p||!m){alert("Vui lòng điền đầy đủ Tên và Nội dung bình luận.");return}const v={id:Date.now(),author:p,date:"Vừa xong",content:m,avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80&h=80"};e.commentsList.unshift(v),e.comments=e.commentsList.length,localStorage.setItem("toptech_articles",JSON.stringify(a)),o&&(o.value=""),s&&(s.value=""),g()});const n=()=>{const o=document.getElementById("reading-bar");if(!o)return;const s=window.scrollY||document.documentElement.scrollTop,p=document.documentElement.scrollHeight-document.documentElement.clientHeight;if(p>0){const m=s/p*100;o.style.width=m+"%"}};window.addEventListener("scroll",n),t.cleanup=()=>{window.removeEventListener("scroll",n)};const f=t.querySelectorAll(".post-detail-body h2"),b=document.getElementById("post-toc-container"),I=document.getElementById("toc-list"),$=document.getElementById("mobile-toc-list");if(f.length>0){t.classList.add("has-toc"),f.forEach((w,x)=>{const T=`toc-section-${x}`;w.id=T}),b&&I&&(b.style.display="block",I.innerHTML=Array.from(f).map((w,x)=>{const T=w.textContent.trim();return`<li><a href="javascript:void(0)" data-target="toc-section-${x}" class="toc-link">${T}</a></li>`}).join("")),$&&($.innerHTML=Array.from(f).map((w,x)=>{const T=w.textContent.trim();return`<li><a href="javascript:void(0)" data-target="toc-section-${x}" class="mobile-toc-link">${T}</a></li>`}).join(""));const o=t.querySelectorAll(".toc-link"),s=t.querySelectorAll(".mobile-toc-link"),p=w=>{w.forEach(x=>{x.addEventListener("click",T=>{var F;T.preventDefault();const D=x.dataset.target,R=document.getElementById(D);if(R){const wt=R.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:wt,behavior:"smooth"}),w.forEach(Tt=>Tt.classList.remove("active")),x.classList.add("active"),(F=document.getElementById("mobile-toc-panel"))==null||F.classList.remove("active")}})})};p(o),p(s);const m=document.getElementById("mobile-toc-toggle"),v=document.getElementById("mobile-toc-panel"),d=document.getElementById("mobile-toc-close"),L=()=>{v==null||v.classList.toggle("active")},M=()=>{v==null||v.classList.remove("active")};m==null||m.addEventListener("click",L),d==null||d.addEventListener("click",M);const q=w=>{v!=null&&v.classList.contains("active")&&!v.contains(w.target)&&!m.contains(w.target)&&M()};document.addEventListener("click",q);const P=()=>{const w=window.scrollY||document.documentElement.scrollTop;let x=-1;f.forEach((D,R)=>{D.offsetTop-110<=w&&(x=R)});const T=D=>{D.forEach((R,F)=>{F===x?R.classList.add("active"):R.classList.remove("active")})};T(o),T(s)};window.addEventListener("scroll",P);const V=t.cleanup;t.cleanup=()=>{V&&V(),window.removeEventListener("scroll",P),document.removeEventListener("click",q)}}const H=document.getElementById("quick-edit-post-btn");H==null||H.addEventListener("click",()=>{sessionStorage.setItem("toptech_editing_article_id",e.id),window.location.hash="#/admin"});const y=t.querySelector(".post-detail-body");tt(y,{isEditor:!1}),y==null||y.querySelectorAll("img").forEach(o=>{o.style.cursor="zoom-in",o.addEventListener("click",()=>{E(o)})});function E(o){const s=Array.from(y.querySelectorAll("img"));let p=s.indexOf(o);if(p===-1)return;let m=document.getElementById("post-lightbox");m||(m=document.createElement("div"),m.id="post-lightbox",m.style.cssText=`
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 99999;
        opacity: 0;
        transition: opacity 0.2s ease;
      `,m.innerHTML=`
        <!-- Close Button -->
        <button class="lightbox-close-btn" style="position: absolute; top: 1.5rem; right: 1.5rem; background: none; border: none; color: #fff; font-size: 3.5rem; cursor: pointer; font-weight: bold; line-height: 1; z-index: 100002;">&times;</button>
        
        <!-- Navigation Buttons -->
        <button class="lightbox-prev-btn" style="position: absolute; left: 1.5rem; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.25); color: #fff; font-size: 2.5rem; width: 60px; height: 60px; border-radius: 50%; cursor: pointer; display: flex; justify-content: center; align-items: center; z-index: 100001; transition: background 0.2s; outline: none;">&lsaquo;</button>
        <button class="lightbox-next-btn" style="position: absolute; right: 1.5rem; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.25); color: #fff; font-size: 2.5rem; width: 60px; height: 60px; border-radius: 50%; cursor: pointer; display: flex; justify-content: center; align-items: center; z-index: 100001; transition: background 0.2s; outline: none;">&rsaquo;</button>
        
        <!-- Image and Caption container -->
        <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem; width: 85%; max-height: 85vh; justify-content: center; position: relative;">
          <img class="lightbox-img" src="" style="max-width: 100%; max-height: 75vh; object-fit: contain; border-radius: 6px; box-shadow: 0 12px 40px rgba(0,0,0,0.6); transition: transform 0.2s ease; transform: scale(0.95);">
          <div class="lightbox-caption" style="color: rgba(255, 255, 255, 0.9); font-size: 0.95rem; font-style: italic; text-align: center; max-width: 600px; line-height: 1.45; padding: 0.6rem 1.2rem; background: rgba(0,0,0,0.6); border-radius: 6px; border: 1px solid rgba(255,255,255,0.15);"></div>
        </div>
      `,m.addEventListener("click",w=>{(w.target===m||w.target.classList.contains("lightbox-close-btn"))&&P()}),document.body.appendChild(m));const v=m.querySelector(".lightbox-img"),d=m.querySelector(".lightbox-caption"),L=m.querySelector(".lightbox-prev-btn"),M=m.querySelector(".lightbox-next-btn"),q=()=>{const w=s[p];if(!w)return;v.src=w.src;const x=w.closest("figure");let T="";if(x){const D=x.querySelector(".post-figcaption-zone, figcaption");D&&(T=D.textContent.trim())}!T&&w.alt&&(T=w.alt.trim()),T&&T!=="Chú thích ảnh"?(d.textContent=T,d.style.display="block"):d.style.display="none",s.length<=1?(L.style.display="none",M.style.display="none"):(L.style.display="flex",M.style.display="flex")},P=()=>{m.style.opacity="0",v.style.transform="scale(0.95)",document.removeEventListener("keydown",V),setTimeout(()=>{m.style.display="none"},200)},V=w=>{w.key==="Escape"?P():w.key==="ArrowLeft"&&s.length>1?(p=(p-1+s.length)%s.length,q()):w.key==="ArrowRight"&&s.length>1&&(p=(p+1)%s.length,q())};L.onclick=w=>{w.stopPropagation(),p=(p-1+s.length)%s.length,q()},M.onclick=w=>{w.stopPropagation(),p=(p+1)%s.length,q()},document.addEventListener("keydown",V),q(),m.style.display="flex",setTimeout(()=>{m.style.opacity="1",v.style.transform="scale(1)"},10)}function S(o){const s=document.getElementById("post-toast");if(!s)return;const p=s.querySelector(".toast-message");p&&(p.textContent=o),s.classList.add("show"),s.timeoutId&&clearTimeout(s.timeoutId),s.timeoutId=setTimeout(()=>{s.classList.remove("show")},2500)}let A=!1,k=!1,j=null,et=0;const z=document.getElementById("post-action-audio"),X=z==null?void 0:z.querySelector(".audio-icon-play"),U=z==null?void 0:z.querySelector(".audio-icon-pause");function Q(){typeof responsiveVoice<"u"?responsiveVoice.cancel():"speechSynthesis"in window&&window.speechSynthesis.cancel(),A=!1,k=!1,z==null||z.classList.remove("active"),X&&(X.style.display="block"),U&&(U.style.display="none")}function W(){if(!y)return;const o=`${e.title}. ${y.innerText.trim()}`;if(o)if(typeof responsiveVoice<"u"?responsiveVoice.cancel():"speechSynthesis"in window&&window.speechSynthesis.cancel(),A=!0,k=!1,z==null||z.classList.add("active"),X&&(X.style.display="none"),U&&(U.style.display="block"),typeof responsiveVoice<"u")S("Đang đọc: Giọng trực tuyến (ResponsiveVoice)"),responsiveVoice.speak(o,"Vietnamese Female",{rate:1.1,onend:Q,onerror:s=>{console.error("ResponsiveVoice Error:",s),Q()}});else if("speechSynthesis"in window){const s=window.speechSynthesis.getVoices();if(s.length===0&&et<3){et++,window.speechSynthesis.getVoices(),setTimeout(W,250);return}et=0,j=new SpeechSynthesisUtterance(o),j.lang="vi-VN",j.rate=1.1;const p=s.find(m=>m.lang.toLowerCase().replace("_","-").includes("vi-vn")||m.lang.toLowerCase()==="vi"||m.name.toLowerCase().includes("viet")||m.name.toLowerCase().includes("việt"));p?(j.voice=p,S(`Đang đọc: Giọng hệ thống ${p.name}`)):S("Dùng giọng hệ thống mặc định (Hãy cài giọng tiếng Việt để đọc chuẩn)."),j.onend=()=>{Q()},j.onerror=m=>{console.error("Native TTS Error:",m),Q()},window.speechSynthesis.speak(j)}else S("Trình duyệt không hỗ trợ nghe đọc bài viết."),Q()}z==null||z.addEventListener("click",()=>{A?k?(typeof responsiveVoice<"u"?responsiveVoice.resume():"speechSynthesis"in window&&window.speechSynthesis.resume(),k=!1,z==null||z.classList.add("active"),X&&(X.style.display="none"),U&&(U.style.display="block")):(typeof responsiveVoice<"u"?responsiveVoice.pause():"speechSynthesis"in window&&window.speechSynthesis.pause(),k=!0,z==null||z.classList.remove("active"),X&&(X.style.display="block"),U&&(U.style.display="none")):W()});const yt=t.querySelector(".post-main-content");let J=parseInt(localStorage.getItem("toptech_post_font_size"),10)||18;function lt(){yt&&(yt.style.fontSize=`${J}px`,localStorage.setItem("toptech_post_font_size",J))}lt();const dt=document.getElementById("post-action-font-inc"),ht=document.getElementById("post-action-font-dec");dt==null||dt.addEventListener("click",()=>{J<26?(J+=2,lt(),S(`Đã tăng cỡ chữ: ${J}px`)):S("Đã đạt cỡ chữ tối đa.")}),ht==null||ht.addEventListener("click",()=>{J>14?(J-=2,lt(),S(`Đã giảm cỡ chữ: ${J}px`)):S("Đã đạt cỡ chữ tối thiểu.")});const mt=document.getElementById("post-action-share");function pt(){navigator.clipboard.writeText(window.location.href).then(()=>{S("Đã sao chép liên kết vào bộ nhớ tạm!")}).catch(()=>{const o=document.createElement("textarea");o.value=window.location.href,o.style.position="fixed",document.body.appendChild(o),o.select();try{document.execCommand("copy"),S("Đã sao chép liên kết vào bộ nhớ tạm!")}catch{S("Không thể sao chép liên kết.")}document.body.removeChild(o)})}mt==null||mt.addEventListener("click",()=>{if(window.innerWidth>=1024){pt();return}const s={title:e.title,text:e.description||"",url:window.location.href};navigator.share&&navigator.canShare&&navigator.canShare(s)?navigator.share(s).then(()=>S("Chia sẻ bài viết thành công!")).catch(p=>{p.name!=="AbortError"&&pt()}):pt()});const gt=document.getElementById("post-action-print");gt==null||gt.addEventListener("click",()=>{window.print()});const ut=document.getElementById("post-action-comments");ut==null||ut.addEventListener("click",()=>{const o=t.querySelector(".post-comments-section");if(o){const m=o.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:m,behavior:"smooth"})}});const l=t.cleanup;t.cleanup=()=>{l&&l(),Q()}}const Nt=[{name:"Trí tuệ nhân tạo (AI)",url:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Lập trình / Code",url:"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Đám mây / Dữ liệu",url:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Mạng / Bảo mật",url:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Thiết bị thông minh",url:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Văn phòng tối giản",url:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800&h=450"}];function It(t,i,a,c){sessionStorage.getItem("toptech_admin_logged_in")==="true"?se(t,i,a,c):re(t,i,a,c)}function re(t,i,a,c){t.innerHTML=`
    <div class="admin-login-wrapper">
      <div class="admin-login-card glass-panel">
        <div class="login-logo-container">
          <img src="${_("/logo-toptech-color.svg")}" alt="TopTech Logo" style="height: 100px; margin: 0 auto;">
        </div>
        <h2 class="login-title">Cổng Quản Trị Blog</h2>
        <p class="login-subtitle">Vui lòng nhập mật khẩu quản trị để đăng nhập hệ thống</p>
        
        <div class="login-form">
          <div class="form-row">
            <label for="admin-password">Mật khẩu</label>
            <input type="password" id="admin-password" placeholder="Nhập mật khẩu (mặc định: admin123)..." required>
            <span class="error-msg" id="login-error-msg"></span>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 0.8rem; margin-top: 1rem;">
            <button class="login-btn" id="login-submit-btn" style="width: 100%;">
              Đăng nhập
            </button>
            <a href="#/" class="logout-btn" style="text-align: center; text-decoration: none; display: block; width: 100%; padding: 0.6rem 0; font-size: 0.9rem; font-weight: 600; border-radius: 30px; margin: 0; background: var(--bg-surface-secondary); color: var(--text-primary); border: 1px solid var(--border-color); cursor: pointer; transition: all var(--transition-fast);">
              ← Quay lại trang chủ
            </a>
          </div>
        </div>
      </div>
    </div>
  `;const e=document.getElementById("admin-password"),h=document.getElementById("login-submit-btn"),g=document.getElementById("login-error-msg"),r=()=>{(e==null?void 0:e.value.trim())==="admin123"?(sessionStorage.setItem("toptech_admin_logged_in","true"),It(t,i,a,c)):(g&&(g.textContent="Mật khẩu không chính xác. Thử lại!",g.style.display="block"),e&&(e.style.borderColor="var(--secondary-color)"))};h==null||h.addEventListener("click",r),e==null||e.addEventListener("keydown",n=>{n.key==="Enter"&&r()})}function se(t,i,a,c){let e="articles",h=null,g=Nt[0].url,r=null,n=null;const f=sessionStorage.getItem("toptech_editing_article_id");if(f){const l=parseInt(f,10),o=i.find(s=>s.id===l);o&&(e="articles",h=l,g=o.image),sessionStorage.removeItem("toptech_editing_article_id")}function b(){const l=localStorage.getItem("toptech_categories");return l?JSON.parse(l):a}function I(l){localStorage.setItem("toptech_categories",JSON.stringify(l))}function $(){const l=localStorage.getItem("toptech_subcategories"),o={"Tin công nghệ":["Điện thoại","Máy tính","Thiết bị thông minh","Xe điện"],AI:["Machine Learning","Generative AI","ChatGPT & LLMs","Thị giác máy tính"],"Chuyển đổi số":["Doanh nghiệp","Giải pháp đám mây","IoT & Automation","Bảo mật dữ liệu"],Review:["Đánh giá Laptop","Đánh giá Smartphone","Đồ công nghệ khác","Trải nghiệm dịch vụ"],"Phần mềm":["Công cụ lập trình","Phần mềm văn phòng","Hệ điều hành","Ứng dụng di động"],IT:["Lập trình","Quản trị mạng","Cơ sở dữ liệu","DevOps"],"Giải pháp công nghệ":["AI cho doanh nghiệp","Tự động hóa quy trình","Hạ tầng số","ERP & CRM"],Casestudy:["Thành công tiêu biểu","Phân tích thất bại","Khảo sát thực tế"]};if(!l)return o;const s=JSON.parse(l);return(!s.AI||s.AI.length===0)&&(s.AI=o.AI,localStorage.setItem("toptech_subcategories",JSON.stringify(s))),s}function H(l){localStorage.setItem("toptech_subcategories",JSON.stringify(l))}function y(){const l=localStorage.getItem("toptech_category_thumbnails");return l?JSON.parse(l):{AI:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=600&h=400","Tin công nghệ":"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400","Chuyển đổi số":"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",Review:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600&h=400","Phần mềm":"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800&h=450",IT:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400","Giải pháp công nghệ":"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400",Casestudy:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=400"}}function E(l){localStorage.setItem("toptech_category_thumbnails",JSON.stringify(l))}function S(){const l=localStorage.getItem("toptech_authors");return l?JSON.parse(l):[{name:"Phương Linh",role:"Content Writer",desc:"Ms. Phương Linh là cây bút cốt cán tại TopTech chuyên viết về Trí tuệ nhân tạo (AI)...",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Ngọc Thanh",role:"Content Writer",desc:"Ms. Ngọc Thanh chuyên phân tích và đánh giá chuyên sâu các thiết bị di động...",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Lê Mạnh",role:"CEO & Founder",desc:"Mr. Lê Mạnh là nhà sáng lập kiêm Giám đốc điều hành của TopTech...",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Kim Phượng",role:"Content Writer",desc:"Ms. Kim Phượng đam mê nghiên cứu ứng dụng phần mềm văn phòng...",avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Trà My",role:"Software Developer",desc:"Ms. Trà My là kỹ sư phát triển phần mềm chuyên nghiệp...",avatar:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"}]}function A(l){localStorage.setItem("toptech_authors",JSON.stringify(l))}function k(l,o="600px"){const s=document.getElementById("admin-modal"),p=document.getElementById("admin-modal-content"),m=document.getElementById("admin-modal-body");s&&p&&m&&(m.innerHTML=l,p.style.maxWidth=o,s.classList.add("is-active"),p.focus(),document.getElementById("publish-post-btn")?lt():document.getElementById("btn-save-category")?mt():document.getElementById("btn-save-author")&&ut())}function j(){const l=document.getElementById("admin-modal");l&&(l.classList.remove("is-active"),t.cleanup&&(t.cleanup(),t.cleanup=null),r=null,n=null,h=null,W())}function et(l,o=""){const s=l==="post-cover",p=l==="cat-thumbnail",m=s?360:200,v=s?220:125,d=180,L=112,M=p?d:m,q=p?L:v,P=s?`${m}px 1fr`:`${m}px 1fr`;return`
      <div class="media-upload-control" id="${l}-media-control" style="display: grid; grid-template-columns: ${P}; gap: 1.2rem; padding: 1.2rem; border: 1px solid var(--border-color); border-radius: 12px; background: var(--bg-surface-secondary); margin-top: 0.5rem; align-items: start;">
        <!-- Left Side: Preview & Dropzone -->
        <div class="media-upload-dropzone" style="position: relative; width: ${M}px; height: ${q}px; border: 2px dashed var(--border-color); border-radius: 12px; display: flex; flex-direction: column; justify-content: center; align-items: center; overflow: hidden; background: var(--bg-main); cursor: pointer; transition: border-color var(--transition-fast);">
          
          <div class="dropzone-placeholder" style="text-align: center; padding: 0.5rem; pointer-events: none; display: ${o?"none":"block"};">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted); margin-bottom: 0.2rem;"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            <div style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600; line-height:1.25;">Kéo thả ảnh hoặc click để chọn</div>
          </div>
          
          <img class="media-preview-img" src="${o||""}" style="display: ${o?"block":"none"}; width: 100%; height: 100%; object-fit: cover; pointer-events: none;">
          
          <div class="dropzone-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); display: none; justify-content: center; align-items: center; color: #fff; font-size: 0.72rem; font-weight: 700; pointer-events: none;">
            Thả ảnh tại đây...
          </div>
        </div>

        <!-- Right Side: Action Inputs -->
        <div style="display: flex; flex-direction: column; gap: 0.6rem; min-width: 0; height: ${q}px; justify-content: space-between;">
          <div class="form-row" style="margin:0;">
            <label style="font-weight:600; font-size:0.8rem; margin-bottom: 0.2rem; display: block; color: var(--text-secondary);">Nhập hoặc dán link ảnh (URL):</label>
            <input type="url" class="media-url-input" value="${o.startsWith("data:")?"":o}" placeholder="https://..." style="margin:0; padding: 0.4rem 0.6rem; font-size: 0.8rem; width: 100%;">
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
            <button type="button" class="btn-media-upload-file" style="padding: 0.4rem 0.8rem; font-size: 0.75rem; font-weight: 700; border-radius: 6px; background: var(--primary-color); color: #fff; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 0.2rem;">
              📁 Tải lên từ máy
            </button>
            <button type="button" class="btn-media-paste-clipboard" style="padding: 0.4rem 0.8rem; font-size: 0.75rem; font-weight: 700; border-radius: 6px; background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-primary); cursor: pointer; display: inline-flex; align-items: center; gap: 0.2rem;">
              📋 Dán ảnh (Clip)
            </button>
            <span class="media-upload-status" style="font-size: 0.72rem; color: var(--text-muted); font-style: italic; font-weight: 600;">
              ${o?"✓ Đã chọn ảnh":"Chưa có ảnh"}
            </span>
          </div>
          <input type="file" class="media-file-input" accept="image/*" style="display:none;">
        </div>
      </div>
    `}function z(l,o){if(!l)return;const s=l.querySelector(".media-url-input"),p=l.querySelector(".btn-media-upload-file"),m=l.querySelector(".btn-media-paste-clipboard"),v=l.querySelector(".media-upload-dropzone"),d=l.querySelector(".media-file-input"),L=l.querySelector(".media-upload-status"),M=l.querySelector(".media-preview-img"),q=l.querySelector(".dropzone-placeholder"),P=l.querySelector(".dropzone-overlay"),V=x=>{x&&(M&&(M.src=x,M.style.display="block"),q&&(q.style.display="none"))},w=x=>{if(!x)return;const T=new FileReader;T.onload=D=>{const R=D.target.result;s&&(s.value=""),L&&(L.textContent="✓ Đã dán/tải ảnh!",L.style.color="var(--primary-color)"),V(R),o(R)},T.readAsDataURL(x)};s==null||s.addEventListener("input",x=>{const T=x.target.value.trim();T&&(L&&(L.textContent="✓ Đã dùng Link",L.style.color="var(--primary-color)"),V(T),o(T))}),p==null||p.addEventListener("click",x=>{x.stopPropagation(),d==null||d.click()}),v==null||v.addEventListener("click",()=>d==null?void 0:d.click()),d==null||d.addEventListener("change",x=>w(x.target.files[0])),m==null||m.addEventListener("click",async x=>{x.stopPropagation();try{const T=await navigator.clipboard.read();for(const D of T)for(const R of D.types)if(R.startsWith("image/")){const F=await D.getType(R),Y=new File([F],"clipboard-image.png",{type:R});w(Y);return}alert("Không tìm thấy ảnh trong Clipboard. Vui lòng Sao chép (Copy) ảnh trước.")}catch(T){console.error("Lỗi khi đọc clipboard:",T),alert("Vui lòng sao chép ảnh và bấm phím Ctrl + V trực tiếp trên form này.")}}),v==null||v.addEventListener("dragover",x=>{x.preventDefault(),v.style.borderColor="var(--primary-color)",P&&(P.style.display="flex")}),v==null||v.addEventListener("dragleave",()=>{v.style.borderColor="var(--border-color)",P&&(P.style.display="none")}),v==null||v.addEventListener("drop",x=>{x.preventDefault(),v.style.borderColor="var(--border-color)",P&&(P.style.display="none"),w(x.dataTransfer.files[0])}),l.addEventListener("paste",x=>{const T=Pt(x.clipboardData);T.length>0&&(x.preventDefault(),w(T[0]))})}function X(){const l=y(),o=r&&l[r]||"";return`
      <h3 class="panel-subtitle" style="margin-bottom: 1.5rem; font-size: 1.35rem; font-weight: 800; color: var(--text-primary); border-bottom: 1px solid var(--border-color); padding-bottom: 0.8rem;">
        ${r?`Sửa chuyên mục: ${r}`:"Thêm chuyên mục mới"}
      </h3>
      <div class="login-form" style="gap: 1.2rem; display: flex; flex-direction: column;">
        <div class="form-row">
          <label for="input-cat-name" style="font-weight:600; font-size:0.85rem;">Tên chuyên mục <span style="color:var(--secondary-color)">*</span></label>
          <input type="text" id="input-cat-name" value="${r||""}" placeholder="Ví dụ: AI, Review, IT..." required>
        </div>

        <div class="form-row">
          <label style="font-weight:600; font-size:0.85rem;">Ảnh đại diện chuyên mục (Thumbnail)</label>
          ${et("cat-thumbnail",o)}
        </div>
        
        <div style="display: flex; gap: 0.5rem; margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
          <button class="login-btn" id="btn-save-category" style="flex: 1; padding: 0.75rem; font-size: 0.9rem; border-radius: 8px; font-weight: 700;">
            ${r?"Cập nhật":"Thêm chuyên mục"}
          </button>
          <button class="logout-btn" id="btn-cancel-category-modal" style="padding: 0.75rem; font-size: 0.9rem; border-radius: 8px; font-weight: 700; margin: 0;">
            Hủy
          </button>
        </div>
      </div>
    `}function U(){const l=S(),o=n?l.find(s=>s.name===n):null;return`
      <h3 class="panel-subtitle" style="margin-bottom: 1.5rem; font-size: 1.35rem; font-weight: 800; color: var(--text-primary); border-bottom: 1px solid var(--border-color); padding-bottom: 0.8rem;">
        ${o?`Sửa thông tin: ${o.name}`:"Thêm tác giả mới"}
      </h3>
      <div class="login-form" style="gap: 1.2rem; display: flex; flex-direction: column;">
        <div class="form-row">
          <label for="input-author-name" style="font-weight:600; font-size:0.85rem;">Họ và tên <span style="color:var(--secondary-color)">*</span></label>
          <input type="text" id="input-author-name" value="${o?o.name:""}" placeholder="Ví dụ: Khánh Nam, Phương Linh..." ${o?"disabled":""} required>
        </div>
        
        <div class="form-row">
          <label for="input-author-role" style="font-weight:600; font-size:0.85rem;">Chức danh / Vai trò <span style="color:var(--secondary-color)">*</span></label>
          <input type="text" id="input-author-role" value="${o?o.role:""}" placeholder="Ví dụ: Content Writer, Tech Lead..." required>
        </div>

        <div class="form-row">
          <label style="font-weight:600; font-size:0.85rem;">Ảnh đại diện tác giả <span style="color:var(--secondary-color)">*</span></label>
          ${et("author-avatar",o?o.avatar:"")}
        </div>

        <div class="form-row">
          <label for="input-author-desc" style="font-weight:600; font-size:0.85rem;">Mô tả giới thiệu / Tiểu sử <span style="color:var(--secondary-color)">*</span></label>
          <textarea id="input-author-desc" rows="3" placeholder="Nhập tiểu sử tóm tắt giới thiệu tác giả..." required>${o?o.desc:""}</textarea>
        </div>
        
        <div style="display: flex; gap: 0.5rem; margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
          <button class="login-btn" id="btn-save-author" style="flex: 1; padding: 0.75rem; font-size: 0.9rem; border-radius: 8px; font-weight: 700;">
            ${o?"Cập nhật":"Thêm tác giả"}
          </button>
          <button class="logout-btn" id="btn-cancel-author-modal" style="padding: 0.75rem; font-size: 0.9rem; border-radius: 8px; font-weight: 700; margin: 0;">
            Hủy
          </button>
        </div>
      </div>
    `}function Q(){const l=h?i.find(p=>p.id===h):null,o=b(),s=S();return`
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.8rem; margin-bottom: 1.5rem;">
        <h3 class="panel-subtitle" style="margin: 0; font-size: 1.35rem; font-weight: 800; color: var(--text-primary);">${l?"Chỉnh sửa bài viết":"Nội dung bài viết mới"}</h3>
      </div>

      <div class="login-form" style="gap: 1.2rem; display: flex; flex-direction: column; width: 100%;">
        <!-- Title -->
        <div class="form-row">
          <label for="post-title" style="font-weight:600; font-size:0.85rem;">Tiêu đề bài viết <span style="color:var(--secondary-color)">*</span></label>
          <input type="text" id="post-title" value="${l?l.title:""}" placeholder="Nhập tiêu đề hấp dẫn..." required>
        </div>

        <!-- Categories + Featured -->
        <div class="create-post-categories-row" style="display: grid; grid-template-columns: 1fr 1fr auto; gap: 1rem; align-items: end;">
          <div class="form-row">
            <label for="post-category" style="font-weight:600; font-size:0.85rem;">Chuyên mục chính <span style="color:var(--secondary-color)">*</span></label>
            <select id="post-category" required>
              ${o.map(p=>`<option value="${p}" ${l&&l.category===p?"selected":""}>${p}</option>`).join("")}
            </select>
          </div>

          <div class="form-row">
            <label for="post-subcategory" style="font-weight:600; font-size:0.85rem;">Chuyên mục con</label>
            <select id="post-subcategory">
              <!-- Dynamic render -->
            </select>
          </div>

          <div class="form-row" style="display:flex; align-items:center; gap: 0.5rem; margin: 0; cursor:pointer; padding-bottom: 0.25rem;">
            <input type="checkbox" id="post-featured" ${l&&l.featured?"checked":""} style="width: 18px; height: 18px; margin:0;">
            <label for="post-featured" style="margin:0; font-weight:700; font-size: 0.85rem; white-space: nowrap;">Nổi bật</label>
          </div>
        </div>

        <div class="form-row">
          <label for="post-author-name" style="font-weight:600; font-size:0.85rem;">Tác giả <span style="color:var(--secondary-color)">*</span></label>
          <select id="post-author-name" required>
            ${s.map(p=>`<option value="${p.name}" ${l&&l.author===p.name?"selected":""}>${p.name} (${p.role})</option>`).join("")}
          </select>
        </div>

        <!-- Cover Image Selector -->
        <div class="form-row">
          <label style="font-weight:600; font-size:0.85rem;">Ảnh bìa bài viết <span style="color:var(--secondary-color)">*</span></label>
          ${et("post-cover",l?l.image:g)}
        </div>

        <div class="form-row">
          <label for="post-description" style="font-weight:600; font-size:0.85rem;">Tóm tắt bài viết (Sapo) <span style="color:var(--secondary-color)">*</span></label>
          <textarea id="post-description" rows="2" placeholder="Viết tóm tắt ngắn..." required>${l?l.description:""}</textarea>
        </div>

        <!-- WYSIWYG Editor Block -->
        <div class="form-row" style="margin-top: 0.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
            <label style="font-weight:600; font-size:0.85rem; margin: 0;">Nội dung bài viết <span style="color:var(--secondary-color)">*</span></label>
            <div class="editor-tabs" style="display: flex; gap: 0.2rem; background: var(--bg-surface-secondary); padding: 0.2rem; border-radius: 6px; border: 1px solid var(--border-color);">
              <button class="editor-tab-btn active" id="editor-write-tab" type="button" style="padding: 0.25rem 0.6rem; font-size: 0.78rem; border-radius: 4px; border: none; font-weight: 600; cursor: pointer;">Soạn thảo</button>
              <button class="editor-tab-btn" id="editor-preview-tab" type="button" style="padding: 0.25rem 0.6rem; font-size: 0.78rem; border-radius: 4px; border: none; font-weight: 600; cursor: pointer;">Xem trước</button>
            </div>
          </div>

          <div id="editor-textarea-wrapper">
            <div class="editor-toolbar" style="display: flex; gap: 0.4rem; background-color: var(--bg-surface-secondary); padding: 0.5rem; border: 1px solid var(--border-color); border-bottom: none; border-radius: 8px 8px 0 0; flex-wrap: wrap; align-items: center;">
              <button class="toolbar-btn" data-cmd="bold" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 28px; height: 28px; display: inline-flex; justify-content: center; align-items: center;" title="Chữ đậm (B)">B</button>
              <button class="toolbar-btn" data-cmd="formatBlock" data-val="h2" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 32px; height: 28px; display: inline-flex; justify-content: center; align-items: center; font-size: 0.8rem;" title="Đề mục lớn (H2)">H2</button>
              <button class="toolbar-btn" data-cmd="formatBlock" data-val="h3" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 32px; height: 28px; display: inline-flex; justify-content: center; align-items: center; font-size: 0.8rem;" title="Đề mục nhỏ (H3)">H3</button>
              <button class="toolbar-btn" data-cmd="insertBlockquote" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 28px; height: 28px; display: inline-flex; justify-content: center; align-items: center;" title="Trích dẫn (Quote)">Q</button>
              <button class="toolbar-btn" data-cmd="insertUnorderedList" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 28px; height: 28px; display: inline-flex; justify-content: center; align-items: center;" title="Dòng liệt kê (-)">•</button>
              <button class="toolbar-btn" data-cmd="createLink" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 28px; height: 28px; display: inline-flex; justify-content: center; align-items: center;" title="Chèn liên kết">🔗</button>
              <button class="toolbar-btn" data-cmd="insertHTML-table" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 28px; height: 28px; display: inline-flex; justify-content: center; align-items: center;" title="Chèn bảng">田</button>
              <button class="toolbar-btn" id="btn-insert-inline-img" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; padding: 0 0.5rem; height: 28px; display: inline-flex; justify-content: center; align-items: center; font-size: 0.8rem; gap: 0.2rem;" title="Chèn ảnh đơn">📷 Ảnh đơn</button>
              <button class="toolbar-btn" id="btn-insert-image-row" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; padding: 0 0.5rem; height: 28px; display: inline-flex; justify-content: center; align-items: center; font-size: 0.8rem; gap: 0.2rem;" title="Chèn nhóm ảnh">⊞ Nhóm ảnh</button>
              <button class="toolbar-btn" id="btn-clear-format" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; padding: 0 0.5rem; height: 28px; display: inline-flex; justify-content: center; align-items: center; font-size: 0.8rem; gap: 0.2rem;" title="Hủy định dạng (Heading, List, Blockquote, Bold...)">🧹 Hủy định dạng</button>
            </div>
            <div id="post-content" class="rich-text-editor post-detail-body" contenteditable="true" style="border-top-left-radius: 0; border-top-right-radius: 0; min-height: 320px; border: 1px solid var(--border-color); padding: 1.2rem; outline: none; background-color: var(--bg-main);" placeholder="Soạn thảo tại đây..."></div>
            <input type="file" id="inline-img-file-input" accept="image/*" style="display:none;">
            <input type="file" id="image-row-file-input" accept="image/*" multiple style="display:none;">
          </div>

          <div id="editor-preview-wrapper" class="markdown-preview-container post-detail-body" style="display:none; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.2rem; background-color: var(--bg-main); min-height: 320px; overflow-y: auto;"></div>
        </div>

        <div class="editor-status-bar" style="margin-top: 0.4rem; display: flex; justify-content: space-between; font-size: 0.78rem; color: var(--text-muted);">
          <span id="word-count-indicator">0 từ</span>
          <span id="reading-time-indicator">0 phút đọc</span>
        </div>

        <button class="submit-comment-btn" id="publish-post-btn" style="margin-top: 1.2rem; width:100%; font-size: 0.95rem; font-weight:700; padding: 0.75rem 1.5rem; background-color: var(--primary-color); color:#fff; border-color: var(--primary-color); border-radius: 30px;">
          ${l?"💾 Cập nhật bài viết":"🚀 Xuất bản bài viết"}
        </button>
      </div>
    `}function W(){var o,s,p,m,v;t.innerHTML=`
      <div class="admin-dashboard-container container section-padding">
        <!-- Top bar with Welcome and Logout -->
        <div class="admin-header-bar">
          <div>
            <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
              <h1 class="admin-dashboard-title" style="margin: 0;">Bảng Điều Khiển Quản Trị</h1>
              <a href="#/" style="font-size: 0.85rem; font-weight: 700; color: var(--primary-color); text-decoration: none; border: 1.5px solid var(--primary-color); padding: 0.35rem 0.8rem; border-radius: 20px; transition: all var(--transition-fast);" onmouseover="this.style.backgroundColor='var(--primary-color)'; this.style.color='#fff';" onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--primary-color)';">← Quay lại Trang chủ</a>
            </div>
            <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 0.3rem;">Quản lý bài viết, chuyên mục và thông tin đội ngũ tác giả.</p>
          </div>
          <button class="logout-btn" id="admin-logout-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            Đăng xuất
          </button>
        </div>

        <!-- Tab header row -->
        <div class="admin-tabs-row">
          <div class="admin-tabs">
            <button class="admin-tab-btn ${e==="articles"?"active":""}" id="tab-articles-btn">
              Quản lý bài viết
            </button>
            <button class="admin-tab-btn ${e==="categories"?"active":""}" id="tab-categories-btn">
              Quản lý chuyên mục
            </button>
            <button class="admin-tab-btn ${e==="authors"?"active":""}" id="tab-authors-btn">
              Quản lý tác giả
            </button>
          </div>
          
          <div class="admin-tab-action">
            ${e==="articles"?`
              <button class="write-post-btn active" id="btn-goto-write-article" style="padding: 0.6rem 1.4rem; font-size: 0.9rem; font-weight: 700; border-radius: 8px;">
                + Viết bài mới
              </button>
            `:e==="categories"?`
              <button class="write-post-btn active" id="btn-add-category-modal" style="padding: 0.6rem 1.4rem; font-size: 0.9rem; font-weight: 700; border-radius: 8px;">
                + Thêm chuyên mục lớn
              </button>
            `:`
              <button class="write-post-btn active" id="btn-add-author-modal" style="padding: 0.6rem 1.4rem; font-size: 0.9rem; font-weight: 700; border-radius: 8px;">
                + Thêm tác giả
              </button>
            `}
          </div>
        </div>

        <!-- Tab content area -->
        <div id="admin-tab-content">
          ${e==="articles"?yt():e==="categories"?dt():pt()}
        </div>
      </div>

      <!-- Popup Modal Container -->
      <div class="admin-modal" id="admin-modal" tabindex="-1">
        <div class="admin-modal-content" id="admin-modal-content" tabindex="0">
          <button type="button" class="admin-modal-close-btn" id="admin-modal-close-btn" style="position: absolute; top: 1.2rem; right: 1.2rem; background: none; border: none; font-size: 1.8rem; cursor: pointer; color: var(--text-secondary); font-weight: bold; line-height: 1;">&times;</button>
          <div id="admin-modal-body"></div>
        </div>
      </div>
    `;const l=document.getElementById("admin-modal");l==null||l.addEventListener("click",d=>{d.target===l&&j()}),(o=document.getElementById("admin-modal-close-btn"))==null||o.addEventListener("click",j),(s=document.getElementById("admin-logout-btn"))==null||s.addEventListener("click",()=>{sessionStorage.removeItem("toptech_admin_logged_in"),It(t,i,a,c)}),(p=document.getElementById("tab-articles-btn"))==null||p.addEventListener("click",()=>{e="articles",W()}),(m=document.getElementById("tab-categories-btn"))==null||m.addEventListener("click",()=>{e="categories",r=null,W()}),(v=document.getElementById("tab-authors-btn"))==null||v.addEventListener("click",()=>{e="authors",n=null,W()}),e==="articles"?J():e==="categories"?ht():e==="authors"&&gt(),f&&k(Q(),"1100px")}function yt(){return`
      <!-- Articles Grid (Mobile & Desktop Card Layout) -->
      <div class="admin-articles-grid" style="margin-bottom: 2rem;">
        ${i.length===0?`
          <div style="text-align: center; padding: 3rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px; color: var(--text-muted); grid-column: 1 / -1;">
            Chưa có bài viết nào trong hệ thống.
          </div>
        `:i.map(l=>`
          <div class="admin-post-card" id="article-card-${l.id}">
            <div style="display: flex; gap: 1.2rem; align-items: flex-start;">
              <img src="${l.image&&(l.image.startsWith("http")||l.image.startsWith("data:"))?l.image:_(l.image||"")}" alt="Thumbnail" style="width: 140px; aspect-ratio: 16/10; object-fit: cover; border-radius: 8px; flex-shrink: 0; border: 1px solid var(--border-color);">
              <div style="flex: 1; min-width: 0;">
                <h4 style="font-size: 1.15rem; font-weight: 800; line-height: 1.35; margin: 0 0 0.5rem 0; word-break: break-word;"><a href="#/bai-viet/${l.id}" target="_blank" style="color: var(--text-primary); transition: color var(--transition-fast);">${l.title}</a></h4>
                <div class="admin-post-badges" style="display: flex; flex-wrap: wrap; gap: 0.35rem; align-items: center;">
                  <span class="badge badge-cat" style="font-size: 0.65rem; padding: 0.15rem 0.4rem; white-space: nowrap;">${l.category}${l.subcategory?` / ${l.subcategory}`:""}</span>
                  ${l.featured?'<span class="badge badge-featured" style="font-size: 0.65rem; padding: 0.15rem 0.4rem; white-space: nowrap;">Nổi bật</span>':""}
                </div>
              </div>
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed var(--border-color); padding-top: 0.6rem; margin-top: 0.8rem; font-size: 0.8rem; color: var(--text-muted);">
              <div>Tác giả: <strong>${l.author}</strong></div>
              <div style="display: flex; gap: 0.8rem;">
                <span>👀 ${l.views||0}</span>
                <span>💬 ${l.comments||0}</span>
              </div>
            </div>
            
            <div style="display: flex; gap: 0.5rem; margin-top: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 0.8rem;">
              <button class="edit-post-btn" data-id="${l.id}" style="flex: 1; background-color: var(--primary-color); border: none; color: #fff; padding: 0.5rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 0.2rem;">
                📝 Sửa
              </button>
              <button class="delete-post-btn" data-id="${l.id}" style="flex: 1; margin: 0; padding: 0.5rem; display: inline-flex; align-items: center; justify-content: center; gap: 0.2rem; font-size: 0.8rem; font-weight: 600;">
                ❌ Xóa
              </button>
            </div>
          </div>
        `).join("")}
      </div>
    `}function J(){var l;(l=document.getElementById("btn-goto-write-article"))==null||l.addEventListener("click",()=>{h=null,g=Nt[0].url,k(Q(),"1100px")}),t.querySelectorAll(".edit-post-btn").forEach(o=>{o.addEventListener("click",()=>{const s=parseInt(o.dataset.id,10),p=i.find(m=>m.id===s);p&&(h=s,g=p.image,k(Q(),"1100px"))})}),t.querySelectorAll(".delete-post-btn").forEach(o=>{o.addEventListener("click",()=>{const s=parseInt(o.dataset.id,10),p=i.find(m=>m.id===s);if(confirm(`Bạn có chắc chắn muốn xóa bài viết "${p==null?void 0:p.title}"?`)){const m=i.filter(d=>d.id!==s);localStorage.setItem("toptech_articles",JSON.stringify(m));const v=document.getElementById(`article-card-${s}`);v&&(v.style.transition="opacity 0.3s ease",v.style.opacity="0"),setTimeout(()=>{i.splice(0,i.length,...m),c(),W()},300)}})})}function lt(){const l=document.getElementById("post-title"),o=document.getElementById("post-category"),s=document.getElementById("post-subcategory"),p=document.getElementById("post-featured"),m=document.getElementById("post-author-name"),v=document.getElementById("post-description"),d=document.getElementById("post-content"),L=document.getElementById("publish-post-btn"),M=$(),q=h?i.find(u=>u.id===h):null;q&&d&&(d.innerHTML=q.content,tt(d,{isEditor:!0}),g=q.image);const P=document.getElementById("post-cover-media-control");z(P,u=>{g=u});const V=(u,C="")=>{if(!s)return;const N=M[u]||[];s.innerHTML='<option value="">-- Không có --</option>'+N.map(B=>`<option value="${B}" ${C===B?"selected":""}>${B}</option>`).join("")};o&&V(o.value,q?q.subcategory:"");function w(){const u=((d==null?void 0:d.innerText)||(d==null?void 0:d.textContent)||"").trim(),C=u?u.split(/\s+/).length:0,N=Math.max(1,Math.ceil(C/200)),B=document.getElementById("word-count-indicator"),G=document.getElementById("reading-time-indicator");return B&&(B.textContent=`${C} từ`),G&&(G.textContent=`${N} phút đọc`),`${N<10?"0":""}${N} phút để đọc`}o==null||o.addEventListener("change",u=>{V(u.target.value)}),d==null||d.addEventListener("input",()=>{w()});const x=(u,C=null)=>{document.execCommand(u,!1,C),d==null||d.focus(),d==null||d.dispatchEvent(new Event("input"))};t.querySelectorAll(".toolbar-btn[data-cmd]").forEach(u=>{u.addEventListener("click",()=>{const C=u.dataset.cmd,N=u.dataset.val||null;if(C==="createLink"){const B=prompt("Nhập đường dẫn:");B&&x(C,B)}else if(C==="insertBlockquote")Z(d,ne());else if(C==="insertHTML-table"){const B=parseInt(prompt("Số hàng (bao gồm tiêu đề):","3"),10)||3,G=parseInt(prompt("Số cột:","3"),10)||3;Z(d,ee(B,G))}else x(C,N)})});let T=null;const D=document.getElementById("btn-insert-inline-img"),R=document.getElementById("btn-insert-image-row"),F=document.getElementById("inline-img-file-input"),Y=document.getElementById("image-row-file-input"),bt=u=>Promise.all(Array.from(u).map(C=>new Promise(N=>{const B=new FileReader;B.onload=G=>N(G.target.result),B.readAsDataURL(C)}))),wt=(u,C)=>{const N=u==null?void 0:u.querySelector(".post-image-row-items");if(!N)return;const B=document.createElement("div");B.innerHTML=ct(C,"",{inRow:!0}),N.appendChild(B.firstElementChild),u==null||u.classList.remove("post-image-row-empty"),d==null||d.dispatchEvent(new Event("input"))},Tt=async(u,C)=>{if(!u||!(C!=null&&C.length))return;(await bt(C)).forEach(B=>wt(u,B))},Mt=u=>{if(!u)return;const C=new FileReader;C.onload=N=>{T?wt(T,N.target.result):Z(d,ct(N.target.result))},C.readAsDataURL(u)},Vt=async u=>{if(u!=null&&u.length){if(T){await Tt(T,u);return}if(u.length===1)Mt(u[0]);else{const C=await bt(u);Z(d,Ht(C)),tt(d,{isEditor:!0})}}},Ot=async u=>{if(!(u!=null&&u.length))return;const C=await bt(u);C.length===1?Z(d,ct(C[0])):Z(d,Ht(C))};D==null||D.addEventListener("click",()=>{T=null,d==null||d.querySelectorAll(".post-image-row.is-selected").forEach(u=>u.classList.remove("is-selected")),F==null||F.click()}),R==null||R.addEventListener("click",()=>{Z(d,te());const u=d==null?void 0:d.querySelectorAll(".post-image-row");T=(u==null?void 0:u[u.length-1])||null,tt(d,{isEditor:!0})}),F==null||F.addEventListener("change",u=>{Mt(u.target.files[0]),u.target.value=""}),Y==null||Y.addEventListener("change",u=>{Ot(u.target.files),u.target.value=""});const Lt=document.getElementById("btn-clear-format");Lt==null||Lt.addEventListener("click",()=>{document.execCommand("removeFormat",!1,null),document.execCommand("formatBlock",!1,"p"),d==null||d.focus(),d==null||d.dispatchEvent(new Event("input"))}),oe(d,{onImageRowAdd:u=>{T=u,Y==null||Y.click()},onImageRowSelect:u=>{T=u},onChange:()=>d==null?void 0:d.dispatchEvent(new Event("input"))}),d&&!q&&tt(d,{isEditor:!0}),w(),d==null||d.addEventListener("paste",u=>{var st,vt,ft,O,ot;if((vt=(st=u.target).closest)==null?void 0:vt.call(st,".post-figcaption-zone")){u.preventDefault();const Ct=((ft=u.clipboardData)==null?void 0:ft.getData("text/plain"))||"";document.execCommand("insertText",!1,Ct);return}const N=Pt(u.clipboardData);if(N.length>0){u.preventDefault(),Vt(N);return}const B=(O=u.clipboardData)==null?void 0:O.getData("text/html");if(B){u.preventDefault();const Ct=ie(B);Z(d,Ct),tt(d,{isEditor:!0});return}const G=(ot=u.clipboardData)==null?void 0:ot.getData("text/plain");G&&(u.preventDefault(),document.execCommand("insertText",!1,G),d==null||d.dispatchEvent(new Event("input")))});const nt=document.getElementById("editor-write-tab"),it=document.getElementById("editor-preview-tab"),xt=document.getElementById("editor-textarea-wrapper"),rt=document.getElementById("editor-preview-wrapper");nt==null||nt.addEventListener("click",()=>{nt.classList.add("active"),it==null||it.classList.remove("active"),xt&&(xt.style.display="block"),rt&&(rt.style.display="none")}),it==null||it.addEventListener("click",()=>{if(it.classList.add("active"),nt==null||nt.classList.remove("active"),xt&&(xt.style.display="none"),rt){rt.style.display="block";const u=(d==null?void 0:d.innerHTML)||"";rt.innerHTML=u?Dt(u):'<p style="color:var(--text-muted); font-style:italic;">Chưa soạn thảo nội dung...</p>',tt(rt,{isEditor:!1})}}),L==null||L.addEventListener("click",()=>{const u=l==null?void 0:l.value.trim(),C=o==null?void 0:o.value,N=(s==null?void 0:s.value)||"",B=m==null?void 0:m.value,G=v==null?void 0:v.value.trim();d==null||d.innerHTML.trim(),tt(d,{isEditor:!0});const st=d==null?void 0:d.innerHTML.trim(),vt=p==null?void 0:p.checked;if(!u||!C||!B||!G||!st){alert("Vui lòng điền đầy đủ thông tin bắt buộc (*).");return}L.disabled=!0,L.textContent="⏳ Đang xuất bản...",setTimeout(()=>{const ft=w();if(h){const O=i.find(ot=>ot.id===h);O&&(O.title=u,O.category=C,O.subcategory=N,O.image=g,O.author=B,O.description=G,O.content=st,O.featured=vt,O.readTime=ft),localStorage.setItem("toptech_articles",JSON.stringify(i))}else{const ot=[{id:Date.now(),title:u,category:C,subcategory:N,image:g,author:B,date:"Vừa đăng",readTime:ft,views:0,comments:0,featured:vt,description:G,content:st,commentsList:[]},...i];localStorage.setItem("toptech_articles",JSON.stringify(ot)),i.splice(0,i.length,...ot)}c(),L.style.backgroundColor="#10b981",L.style.borderColor="#10b981",L.innerHTML="✓ Lưu bài viết thành công!",setTimeout(()=>{j()},800)},800)})}function dt(){const l=b(),o=$(),s=y(),p=l.map(m=>{const v=o[m]||[],d=s[m]||"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400";return`
        <div class="category-manage-row" id="cat-manage-${m}">
          <!-- Top details -->
          <div style="display: flex; gap: 0.7rem; align-items: center; margin-bottom: 0.1rem;">
            <img src="${d}" alt="${m}" style="width: 72px; height: 52px; object-fit: cover; border-radius: 10px; border: 1px solid var(--border-color); flex-shrink: 0;">
            <div style="min-width: 0; flex: 1;">
              <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--text-primary); margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${m}">${m}</h4>
              <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600;">(${v.length} chuyên mục con)</span>
            </div>
          </div>

          <!-- Edit / Delete actions -->
          <div style="display: flex; gap: 0.4rem; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.65rem; margin-bottom: 0.65rem; margin-top: 0.35rem;">
            <button class="edit-cat-btn" data-cat="${m}" style="flex: 1; justify-content: center; background: var(--bg-surface-secondary); border: 1px solid var(--border-color); border-radius: 6px; padding: 0.35rem; font-size: 0.75rem; font-weight: 700; cursor: pointer; color: var(--text-secondary); display: inline-flex; align-items: center; gap: 0.2rem;">📝 Sửa</button>
            <button class="delete-cat-btn" data-cat="${m}" style="flex: 1; justify-content: center; background: #ef44440d; border: 1px solid rgba(239,68,68,0.2); border-radius: 6px; padding: 0.35rem; font-size: 0.75rem; font-weight: 700; cursor: pointer; color: #ef4444; display: inline-flex; align-items: center; gap: 0.2rem;">❌ Xóa</button>
          </div>
          
          <!-- Subcategories tags list (scrollable) -->
          <div style="flex: 1; display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 0.75rem; justify-content: flex-start; overflow: hidden;">
            <div style="display: flex; flex-wrap: wrap; gap: 0.3rem; align-content: flex-start; max-height: 86px; overflow-y: auto; padding-right: 0.15rem;">
              ${v.map(L=>`
                <span style="display: inline-flex; align-items: center; gap: 0.25rem; background: var(--bg-surface-secondary); border: 1px solid var(--border-color); border-radius: 20px; padding: 0.15rem 0.55rem; font-size: 0.71rem; font-weight: 600; color: var(--text-secondary);">
                  ${L}
                  <button class="delete-sub-btn" data-cat="${m}" data-sub="${L}" style="background:none; border:none; cursor:pointer; color: var(--text-muted); font-weight:bold; font-size: 0.85rem; padding: 0; display: inline-flex; align-items: center;">&times;</button>
                </span>
              `).join("")}
              ${v.length===0?'<span style="font-size: 0.73rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">Chưa có chuyên mục con</span>':""}
            </div>
          </div>

          <!-- Add inline Subcategory input -->
          <div style="display: flex; gap: 0.5rem; width: 100%; margin-top: 0.1rem;">
            <input type="text" placeholder="Thêm chuyên mục con..." class="inline-sub-input" data-cat="${m}" style="margin:0; padding: 0.45rem 0.75rem; font-size: 0.83rem; border-radius: 10px; border: 1px solid var(--border-color); width: 100%;">
            <button class="btn-add-subcategory" data-cat="${m}" style="background: var(--primary-color); border: none; color: #fff; border-radius: 10px; padding: 0.45rem 0.9rem; font-size: 1rem; cursor: pointer; font-weight: 800; flex-shrink: 0; min-width: 44px;">+</button>
          </div>
        </div>
      `}).join("");return`
      <div class="admin-categories-grid" style="margin-bottom: 2rem;">
        ${l.length===0?`
          <div style="text-align: center; padding: 3rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px; color: var(--text-muted); grid-column: 1 / -1;">
            Chưa có chuyên mục nào trong hệ thống.
          </div>
        `:p}
      </div>
    `}function ht(){var l;(l=document.getElementById("btn-add-category-modal"))==null||l.addEventListener("click",()=>{r=null,k(X(),"600px")}),t.querySelectorAll(".edit-cat-btn").forEach(o=>{o.addEventListener("click",()=>{r=o.dataset.cat,k(X(),"600px")})}),t.querySelectorAll(".delete-cat-btn").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.cat;if(confirm(`Xóa chuyên mục "${s}" sẽ xóa toàn bộ các chuyên mục con tương ứng. Tiếp tục?`)){let p=b().filter(d=>d!==s),m=$();delete m[s];let v=y();delete v[s],E(v),I(p),H(m),c(),W()}})}),t.querySelectorAll(".btn-add-subcategory").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.cat,p=t.querySelector(`.inline-sub-input[data-cat="${s}"]`),m=p==null?void 0:p.value.trim();if(!m){alert("Vui lòng nhập tên chuyên mục con.");return}let v=$();if(v[s]||(v[s]=[]),v[s].includes(m)){alert("Chuyên mục con này đã tồn tại trong chuyên mục chính!");return}v[s].push(m),H(v),W()})}),t.querySelectorAll(".delete-sub-btn").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.cat,p=o.dataset.sub;let m=$();m[s]&&(m[s]=m[s].filter(v=>v!==p),H(m),W())})})}function mt(){const l=document.getElementById("input-cat-name"),o=document.getElementById("btn-save-category"),s=document.getElementById("btn-cancel-category-modal");let p=r&&y()[r]||"";const m=document.getElementById("cat-thumbnail-media-control");z(m,v=>{p=v}),o==null||o.addEventListener("click",()=>{const v=l==null?void 0:l.value.trim();if(!v){alert("Vui lòng nhập tên chuyên mục.");return}let d=b(),L=$(),M=y();if(r){const q=d.indexOf(r);q!==-1&&(d[q]=v,L[r]&&(L[v]=L[r],delete L[r]),p?M[v]=p:delete M[v],r!==v&&delete M[r],i.forEach(P=>{P.category===r&&(P.category=v)}),localStorage.setItem("toptech_articles",JSON.stringify(i))),r=null}else{if(d.includes(v)){alert("Chuyên mục đã tồn tại!");return}d.push(v),L[v]=[],p&&(M[v]=p)}I(d),H(L),E(M),c(),j()}),s==null||s.addEventListener("click",()=>{j()})}function pt(){const l=S(),o=l.map(s=>`
      <div class="author-manage-row" style="display: flex; align-items: center; gap: 1.2rem; border: 1px solid var(--border-color); padding: 1.2rem; border-radius: 12px; background: var(--bg-surface);" id="author-manage-${s.name}">
        <img src="${s.avatar}" alt="${s.name}" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover; border: 2.5px solid var(--primary-color); flex-shrink: 0;">
        <div style="flex: 1; min-width: 0;">
          <strong style="color: var(--text-primary); font-size: 1.1rem;">${s.name}</strong>
          <div style="font-size: 0.85rem; color: var(--primary-color); font-weight: 600; margin-top: 0.1rem;">${s.role}</div>
          <div style="font-size: 0.85rem; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-top: 0.3rem; line-height: 1.4;">${s.desc}</div>
        </div>
        <div style="display: flex; gap: 0.4rem; flex-shrink: 0;">
          <button class="edit-author-btn" data-name="${s.name}" style="background: var(--bg-surface-secondary); border: 1px solid var(--border-color); border-radius: 6px; padding: 0.4rem 0.8rem; font-size: 0.8rem; font-weight: 600; cursor: pointer; color: var(--text-secondary); display: inline-flex; align-items: center; gap: 0.2rem;">📝 Sửa</button>
          <button class="delete-author-btn" data-name="${s.name}" style="background: #ef44440d; border: 1px solid rgba(239,68,68,0.2); border-radius: 6px; padding: 0.4rem 0.8rem; font-size: 0.8rem; font-weight: 600; cursor: pointer; color: #ef4444; display: inline-flex; align-items: center; gap: 0.2rem;">❌ Xóa</button>
        </div>
      </div>
    `).join("");return`
      <div class="admin-authors-grid" style="margin-bottom: 2rem;">
        ${l.length===0?`
          <div style="text-align: center; padding: 3rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px; color: var(--text-muted); grid-column: 1 / -1;">
            Chưa có tác giả nào trong hệ thống.
          </div>
        `:o}
      </div>
    `}function gt(){var l;(l=document.getElementById("btn-add-author-modal"))==null||l.addEventListener("click",()=>{n=null,k(U(),"600px")}),t.querySelectorAll(".edit-author-btn").forEach(o=>{o.addEventListener("click",()=>{n=o.dataset.name,k(U(),"600px")})}),t.querySelectorAll(".delete-author-btn").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.name;if(confirm(`Bạn có chắc chắn muốn xóa tác giả "${s}"?`)){let p=S().filter(m=>m.name!==s);A(p),c(),W()}})})}function ut(){const l=document.getElementById("input-author-name"),o=document.getElementById("input-author-role"),s=document.getElementById("input-author-desc"),p=document.getElementById("btn-save-author"),m=document.getElementById("btn-cancel-author-modal"),v=n?S().find(M=>M.name===n):null;let d=v?v.avatar:"";const L=document.getElementById("author-avatar-media-control");z(L,M=>{d=M}),p==null||p.addEventListener("click",()=>{const M=l==null?void 0:l.value.trim(),q=o==null?void 0:o.value.trim(),P=s==null?void 0:s.value.trim();if(!M||!q||!d||!P){alert("Vui lòng điền đầy đủ các thông tin bắt buộc (*).");return}let V=S();if(n){const w=V.find(x=>x.name===n);w&&(w.role=q,w.avatar=d,w.desc=P),n=null}else{if(V.find(x=>x.name.toLowerCase()===M.toLowerCase())){alert("Tên tác giả đã tồn tại trong danh sách!");return}V.push({name:M,role:q,avatar:d,desc:P})}A(V),c(),j()}),m==null||m.addEventListener("click",()=>{j()})}W()}const ce={AI:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=600&h=400","Tin công nghệ":"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400","Chuyển đổi số":"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",Review:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600&h=400","Phần mềm":"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=600&h=400",IT:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400","Giải pháp công nghệ":"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400",Casestudy:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=400"};function le(t,i,a){const c=localStorage.getItem("toptech_category_thumbnails"),e=c?JSON.parse(c):ce,h=a.map(g=>{const r=i.filter(f=>f.category===g).length,n=e[g]||"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400";return`
      <a href="#/chuyen-muc/${g}" class="category-list-card">
        <div class="category-list-img-wrapper">
          <img src="${n}" alt="${g}">
        </div>
        <div class="category-list-info">
          <h3 class="category-list-name">${g}</h3>
          <span class="category-list-count">${r} bài viết</span>
        </div>
      </a>
    `}).join("");t.innerHTML=`
    <div class="category-page-header" style="padding: 2.5rem 0; background: var(--bg-surface); border-bottom: 1px solid var(--border-color); text-align: center;">
      <div class="container">
        <h1 class="category-page-title" style="font-size: 2.5rem; font-weight: 900; margin: 0; text-transform: uppercase; color: var(--text-primary);">Tất cả chuyên mục</h1>
      </div>
    </div>
    
    <div class="container section-padding">
      <div class="categories-list-grid">
        ${h}
      </div>
    </div>
  `}const de=[{name:"Phương Linh",role:"Content Writer",desc:"Ms. Phương Linh là cây bút cốt cán tại TopTech chuyên viết về Trí tuệ nhân tạo (AI), các dòng máy tính xách tay cấu hình cao cho lập trình và tin tức công nghệ nóng hổi nhất thế giới.",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Ngọc Thanh",role:"Content Writer",desc:"Ms. Ngọc Thanh chuyên phân tích và đánh giá chuyên sâu các thiết bị di động, smartphone thông minh, xe điện và các xu hướng phần cứng mới nhất.",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Lê Mạnh",role:"CEO & Founder",desc:"Mr. Lê Mạnh là nhà sáng lập kiêm Giám đốc điều hành của TopTech. Anh chia sẻ những định hướng phát triển chiến lược công nghệ và chuyển đổi số cho doanh nghiệp.",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Kim Phượng",role:"Content Writer",desc:"Ms. Kim Phượng đam mê nghiên cứu ứng dụng phần mềm văn phòng, công cụ năng suất hỗ trợ công việc và các casestudy chuyển đổi số thành công thực tế.",avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Trà My",role:"Software Developer",desc:"Ms. Trà My là kỹ sư phát triển phần mềm chuyên nghiệp. Cô chia sẻ các bài viết kỹ thuật sâu về cơ sở dữ liệu, Docker, quy trình CI/CD và bảo mật hệ thống.",avatar:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Khánh Nam",role:"Tech Lead",desc:"Mr. Khánh Nam có 8 năm kinh nghiệm trong lĩnh vực phát triển Frontend và các mô hình ngôn ngữ lớn (LLM). Anh viết về kinh nghiệm tối ưu hóa mã nguồn và công cụ IDE.",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Quốc Anh",role:"Hardware Expert",desc:"Mr. Quốc Anh là chuyên gia review phần cứng cao cấp và các dòng bàn phím cơ. Anh chia sẻ những cảm nhận chân thực sau thời gian dài sử dụng thiết bị.",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Minh Tâm",role:"Cloud Specialist",desc:"Ms. Minh Tâm là chuyên viên điện toán đám mây. Cô tập trung phân tích bài viết về giải pháp hạ tầng AWS, Azure, và các bước chuyển đổi số tối ưu chi phí cho startup.",avatar:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Hoàng Long",role:"Solutions Architect",desc:"Mr. Hoàng Long chuyên khảo sát thực tế và phân tích casestudy thành công hay thất bại của các tập đoàn công nghệ lớn khi xây dựng hệ thống dữ liệu khổng lồ.",avatar:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150"}],jt=localStorage.getItem("toptech_authors"),he=jt?JSON.parse(jt):de,At={};he.forEach(t=>{At[t.name]={avatar:t.avatar,role:t.role,desc:t.desc}});function me(t,i){const c=Array.from(new Set(i.map(e=>e.author).filter(Boolean))).map(e=>{const h=At[e]||{avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80&h=80",role:"Cộng tác viên"},g=i.filter(r=>r.author===e).length;return`
      <a href="#/tac-gia/${encodeURIComponent(e)}" class="author-list-card">
        <div class="author-list-avatar-wrapper">
          <img class="author-list-avatar" src="${h.avatar}" alt="${e}">
        </div>
        <h3 class="author-list-name">${e}</h3>
        <span class="author-list-role">${h.role}</span>
        <span class="author-list-count-badge">${g} bài viết</span>
      </a>
    `}).join("");t.innerHTML=`
    <div class="category-page-header" style="padding: 2.5rem 0; background: var(--bg-surface); border-bottom: 1px solid var(--border-color); text-align: center;">
      <div class="container">
        <h1 class="category-page-title" style="font-size: 2.5rem; font-weight: 900; margin: 0; text-transform: uppercase; color: var(--text-primary);">Đội ngũ tác giả</h1>
      </div>
    </div>
    
    <div class="container section-padding">
      <div class="authors-list-grid">
        ${c}
      </div>
    </div>
  `}function pe(t,i,a){const c=At[i]||{avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80&h=80",role:"Cộng tác viên",desc:"Tác giả chia sẻ các bài viết kiến thức hữu ích tại TopTech."},e=a.filter(g=>g.author===i),h=e.length===0?`
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px;">
        <p style="color: var(--text-muted); font-size: 0.95rem;">Tác giả này chưa đăng tải bài viết nào.</p>
      </div>
    `:e.map(g=>`
      <article class="cat-article-card" style="margin-bottom: 2rem;">
        <div class="cat-card-img-wrapper">
          <img src="${_(g.image)}" alt="${g.title}">
          <a href="#/chuyen-muc/${g.subcategory||g.category}" class="cat-card-category">${g.subcategory||g.category}</a>
        </div>
        <div class="cat-card-content">
          <h3 class="cat-card-title"><a href="#/bai-viet/${g.id}">${g.title}</a></h3>
          <p class="cat-card-description">${g.description||"Chưa có mô tả chi tiết cho bài viết này. Nhấp vào để đọc bài viết..."}</p>
          
          <div class="post-meta" style="color: var(--text-muted); font-size: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 1rem; margin-top: auto; width: 100%; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
            <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
              <span class="post-author-name">${g.author}</span>
              <span class="meta-dot">&bull;</span>
              <span>${g.date}</span>
            </div>
            <div class="meta-right" style="display: flex; align-items: center; gap: 0.6rem; margin-left: auto;">
              <span style="display: flex; align-items: center; gap: 0.25rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${g.views}
              </span>
              <span style="display: flex; align-items: center; gap: 0.25rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${g.comments}
              </span>
            </div>
          </div>
        </div>
      </article>
    `).join("");t.innerHTML=`
    <div class="category-page-header" style="padding: 3rem 0; background: var(--bg-surface); border-bottom: 1px solid var(--border-color);">
      <div class="container">
        <div class="author-profile-card">
          <div class="author-profile-avatar-wrapper">
            <img class="author-profile-avatar" src="${c.avatar}" alt="${i}">
          </div>
          <div class="author-profile-info">
            <h1>${i}</h1>
            <div class="author-profile-role">${c.role}</div>
            <p class="author-profile-desc">${c.desc}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="container section-padding">
      <h2 style="font-size: 1.5rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--primary-color); margin-bottom: 2rem;">Bài viết đã đăng (${e.length})</h2>
      <div class="category-articles-grid" id="author-grid">
        ${h}
      </div>
    </div>
  `}const ge=[{id:1,title:"Top 20 công cụ AI tốt nhất năm 2026",category:"AI",image:"hero_robot.png",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",readTime:"02 phút để đọc",views:1357,comments:26,featured:!0,description:"Khám phá danh sách các công cụ Trí tuệ Nhân tạo đột phá nhất năm 2026, giúp tự động hóa công việc, tăng hiệu suất gấp 5 lần và tối ưu hóa quy trình làm việc của cá nhân cũng như doanh nghiệp."},{id:2,title:"Top 15 laptop cho lập trình viên chuyên nghiệp",category:"Tin công nghệ",image:"coding_laptop.png",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",readTime:"02 phút để đọc",views:1357,comments:26,featured:!0,description:"Đánh giá chi tiết top 15 dòng máy tính xách tay cấu hình cao, pin trâu và bàn phím gõ êm nhất dành riêng cho các kỹ sư phần mềm và lập trình viên chuyên nghiệp năm nay."},{id:3,title:"So sánh ưu điểm ChatGPT vs Claude vs Gemini năm nay",category:"AI",image:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:1357,comments:26,featured:!1},{id:4,title:"Mô hình ngôn ngữ lớn LLM đang thay đổi lập trình thế nào",category:"AI",image:"https://images.unsplash.com/photo-1684369175833-3d026dc6a066?auto=format&fit=crop&q=80&w=400&h=250",author:"Khánh Nam",authorTag:"#CTAD02",date:"1 ngày trước",views:945,comments:14,featured:!1},{id:5,title:"EUROPE IS PUSHING BACK ON WASHINGTON’S CHIP WAR",category:"AI",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=450",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:894,comments:15,description:`At high-stakes meetings with the White House, Anthropic's cofounder—a "weirdo," per one official—has been replaced by cofounder Tom Brown to lead negotiations on silicon sanctions.`},{id:6,title:"I Met With China’s Top AI Experts. They’re Freaking Out, Too",category:"AI",image:"https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:1102,comments:42,description:"The AI arms race between China and the US has researchers on both sides worried about a “Chernobyl moment” for automated systems."},{id:7,title:"Đánh giá chi tiết Keychron Q1 Pro sau 6 tháng sử dụng",category:"Review",image:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=400&h=250",author:"Quốc Anh",authorTag:"#CTAD03",date:"2 ngày trước",views:520,comments:9},{id:8,title:"A24 Knows You’re Mad About the Google AI Collab",category:"AI",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:932,comments:18},{id:9,title:"Meta tạm dừng chương trình theo dõi nhân viên sau sự cố rò rỉ dữ liệu",category:"Tin công nghệ",image:"https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:2405,comments:63},{id:10,title:"Chính phủ Mỹ yêu cầu nhân viên gỡ bỏ ứng dụng lạ trên điện thoại công vụ",category:"Tin công nghệ",image:"https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:3108,comments:72},{id:11,title:"Hành trình chuyển đổi số của doanh nghiệp bán lẻ Việt Nam",category:"Chuyển đổi số",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=250",author:"Minh Tâm",authorTag:"#CTAD04",date:"3 ngày trước",views:1823,comments:29},{id:12,title:"Chiến lược tối ưu hóa hạ tầng đám mây cho startup năm 2026",category:"Chuyển đổi số",image:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=400&h=250",author:"Minh Tâm",authorTag:"#CTAD04",date:"4 ngày trước",views:1245,comments:11},{id:13,title:"Đánh giá chi tiết màn hình Dell UltraSharp U2723QE 4K",category:"Review",image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400&h=250",author:"Quốc Anh",authorTag:"#CTAD03",date:"5 ngày trước",views:890,comments:15},{id:14,title:"VS Code vs WebStorm: IDE nào tốt hơn cho lập trình Frontend",category:"Phần mềm",image:"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=400&h=250",author:"Khánh Nam",authorTag:"#CTAD02",date:"1 tuần trước",views:3105,comments:54},{id:15,title:"Xây dựng hệ thống CI/CD hoàn chỉnh với Docker và GitHub Actions",category:"IT",image:"https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=400&h=250",author:"Trà My",authorTag:"#CTAD05",date:"1 tuần trước",views:2200,comments:31},{id:16,title:"Bảo mật API trong kiến trúc Microservices thế nào cho đúng",category:"IT",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400&h=250",author:"Trà My",authorTag:"#CTAD05",date:"1 tuần trước",views:1780,comments:19},{id:17,title:"Ứng dụng AI tổng hợp để tăng năng suất cho doanh nghiệp",category:"Giải pháp công nghệ",image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&h=250",author:"Hoàng Long",authorTag:"#CTAD06",date:"2 tuần trước",views:1450,comments:22},{id:18,title:"Casestudy: Uber đã di chuyển hạ tầng dữ liệu khổng lồ thế nào",category:"Casestudy",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400&h=250",author:"Hoàng Long",authorTag:"#CTAD06",date:"3 tuần trước",views:2900,comments:48}];let K=[];function St(){const t=localStorage.getItem("toptech_articles");t?K=JSON.parse(t):(K=ge,localStorage.setItem("toptech_articles",JSON.stringify(K)))}St();let at=[];function _t(){const t=localStorage.getItem("toptech_categories");t?at=JSON.parse(t):(at=["Tin công nghệ","AI","Chuyển đổi số","Review","Phần mềm","IT","Giải pháp công nghệ","Casestudy"],localStorage.setItem("toptech_categories",JSON.stringify(at)))}_t();function Rt(){St(),_t();const t=document.getElementById("app-content");if(!t)return;t.cleanup&&(t.cleanup(),t.cleanup=null);const i=window.location.hash||"#/",a=document.getElementById("app-header"),c=document.getElementById("app-footer");if(i==="#/admin"||i.startsWith("#/admin")?(a&&(a.style.display="none"),c&&(c.style.display="none")):(a&&(a.style.display="block"),c&&(c.style.display="block")),Gt(i),i.startsWith("#/ #")){const e=i.split("#")[2];qt(t,K,at),setTimeout(()=>{const h=document.getElementById(e);h&&h.scrollIntoView({behavior:"smooth"})},100);return}if(i==="#/"||i==="")qt(t,K,at);else if(i==="#/tat-ca-chuyen-muc")le(t,K,at);else if(i==="#/tat-ca-tac-gia")me(t,K);else if(i.startsWith("#/tac-gia/")){const e=decodeURIComponent(i.replace("#/tac-gia/",""));pe(t,e,K)}else if(i.startsWith("#/chuyen-muc/")){const e=i.replace("#/chuyen-muc/","");zt(t,e,K,!1)}else if(i.startsWith("#/tim-kiem/")){const e=i.replace("#/tim-kiem/","");zt(t,e,K,!0)}else if(i.startsWith("#/bai-viet/")){const e=i.replace("#/bai-viet/","");ae(t,e,K)}else i==="#/admin"||i.startsWith("#/admin")?It(t,K,at,()=>{St()}):window.location.hash="#/";i.startsWith("#/ #")||window.scrollTo(0,0)}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("app-header"),i=document.getElementById("app-footer");t&&Wt(t),i&&Kt(i),Ft(a=>{window.location.hash=`#/tim-kiem/${encodeURIComponent(a)}`}),window.addEventListener("hashchange",Rt),Rt()});
