(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const d of e)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function a(e){const d={};return e.integrity&&(d.integrity=e.integrity),e.referrerPolicy&&(d.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?d.credentials="include":e.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(e){if(e.ep)return;e.ep=!0;const d=a(e);fetch(e.href,d)}})();function D(t){return!t||t.startsWith("http")||t.startsWith("data:")?t:`/TopTech-Blog/${t.replace(/^\//,"")}`}function Jt(t){t.innerHTML=`
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
          <img class="logo-img" src="${D("/logo-toptech-color.svg")}" alt="TopTech Logo">
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
  `}function Yt(t){const o=document.getElementById("theme-toggle"),a=document.getElementById("menu-toggle"),s=document.getElementById("mega-menu"),e=document.getElementById("mega-menu-close"),d=document.getElementById("mega-menu-backdrop"),h=document.getElementById("search-trigger"),r=document.getElementById("search-overlay"),i=document.getElementById("search-close"),g=document.getElementById("search-input"),y=document.querySelectorAll(".nav-chuyen-muc-trigger");function E(){const C=document.querySelector(".sun-icon"),x=document.querySelector(".moon-icon");!C||!x||(document.body.classList.contains("dark")?(C.style.display="block",x.style.display="none"):(C.style.display="none",x.style.display="block"))}(localStorage.getItem("theme")||"light")==="dark"?document.body.classList.add("dark"):document.body.classList.remove("dark"),E(),o&&o.addEventListener("click",()=>{document.body.classList.contains("dark")?(document.body.classList.remove("dark"),localStorage.setItem("theme","light")):(document.body.classList.add("dark"),localStorage.setItem("theme","dark")),E()});const H=()=>s==null?void 0:s.classList.add("active"),b=()=>s==null?void 0:s.classList.remove("active");a==null||a.addEventListener("click",H),y.forEach(C=>C.addEventListener("click",H)),e==null||e.addEventListener("click",b),d==null||d.addEventListener("click",b);const w=s==null?void 0:s.querySelectorAll("a");w==null||w.forEach(C=>C.addEventListener("click",b)),h&&r&&h.addEventListener("click",()=>{r.classList.add("active"),setTimeout(()=>g==null?void 0:g.focus(),100)});const z=()=>{r==null||r.classList.remove("active"),g&&(g.value="")};i==null||i.addEventListener("click",z),r==null||r.addEventListener("click",C=>{C.target===r&&z()}),g==null||g.addEventListener("keydown",C=>{if(C.key==="Enter"&&t){const x=g.value.trim();x&&(z(),t(x))}})}function Zt(t){const o=document.querySelector(".nav-home-link"),a=document.querySelector(".nav-blog-link"),s=document.querySelector(".write-post-btn"),e=document.querySelector(".nav-chuyen-muc-link"),d=document.querySelector(".nav-tac-gia-link");o==null||o.classList.remove("active"),a==null||a.classList.remove("active"),s==null||s.classList.remove("active"),e==null||e.classList.remove("active"),d==null||d.classList.remove("active"),t==="#/"||t===""||t.startsWith("#/ #")?o==null||o.classList.add("active"):t.startsWith("#/tat-ca-chuyen-muc")||t.startsWith("#/chuyen-muc/")?e==null||e.classList.add("active"):t.startsWith("#/tat-ca-tac-gia")||t.startsWith("#/tac-gia/")?d==null||d.classList.add("active"):t.startsWith("#/blog")||t.includes("bai-viet")?a==null||a.classList.add("active"):t.startsWith("#/admin")&&(s==null||s.classList.add("active"))}function te(t){t.innerHTML=`
    <footer>
      <div class="container footer-container">
        <!-- Top part: Logo & Description (Row Layout) -->
        <div class="footer-top-row">
          <a href="#/" class="logo">
            <img class="logo-img-footer" src="${D("/logo-toptech-monochrome.svg")}" alt="TopTech Logo Đơn Sắc">
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
  `}function jt(t,o,a){t.innerHTML=`
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
  `;let s=0;function e(r){const i=o[r%o.length],g=[o[(r+1)%o.length],o[(r+2)%o.length],o[(r+3)%o.length],o[(r+4)%o.length]],y=document.getElementById("hero-left-container");i&&y&&(y.innerHTML=`
        <img src="${D(i.image)}" alt="${i.title}">
        <div class="featured-big-overlay"></div>
        <div class="featured-big-content">
          <a href="#/chuyen-muc/${i.category}" class="featured-big-tag">${i.category}</a>
          <h3 class="featured-big-title"><a href="#/bai-viet/${i.id}">${i.title}</a></h3>
          <div class="post-meta post-detail-meta">
            <div class="post-author">
              <span>${i.author}</span>
            </div>
            <span class="meta-dot">&bull;&nbsp;</span><span>${i.date}</span>
            <span class="meta-dot">&bull;&nbsp;</span><span>${i.readTime||"02 phút để đọc"}</span>
            <span style="margin-left: auto; display: flex; align-items: center; gap: 0.3rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${i.views}
            </span>
            <span style="display: flex; align-items: center; gap: 0.3rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${i.comments}
            </span>
          </div>
        </div>
      `);const E=document.getElementById("hero-side-container");E&&(E.innerHTML=g.filter(Boolean).map(L=>`
        <div class="side-post-card">
          <img class="side-post-img" src="${D(L.image)}" alt="${L.title}">
          <div class="side-post-info">
            <h4 class="side-post-title"><a href="#/bai-viet/${L.id}">${L.title}</a></h4>
            <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem; display: flex; justify-content: space-between; align-items: center; width: 100%;">
              <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
                <span>${L.author}</span>
                <span class="meta-dot">&bull;</span>
                <span>${L.date}</span>
              </div>
              <div class="meta-right" style="display: flex; align-items: center; gap: 0.6rem; margin-left: auto;">
                <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${L.views}</span>
                <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${L.comments}</span>
              </div>
            </div>
          </div>
        </div>
      `).join(""))}e(s);const d=setInterval(()=>{s=(s+1)%o.length;const r=document.getElementById("hero-left-container"),i=document.getElementById("hero-side-container");r&&i&&(r.style.opacity="0.1",i.style.opacity="0.1",setTimeout(()=>{e(s),r.style.opacity="1",i.style.opacity="1"},300))},5e3),h=document.getElementById("hero-small-grid-container");if(h){const r=o.slice(5,9);h.innerHTML=r.map(i=>`
      <div class="small-post-card">
        <div class="small-post-img-wrapper">
          <img src="${D(i.image)}" alt="${i.title}">
        </div>
        <h4 class="small-post-title"><a href="#/bai-viet/${i.id}">${i.title}</a></h4>
        <div class="post-meta post-meta-stack" style="color: var(--text-muted); font-size: 0.7rem; display: flex; justify-content: space-between; align-items: center; width: 100%;">
          <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
            <span>${i.author}</span>
            <span class="meta-dot">&bull;</span>
            <span>${i.date}</span>
          </div>
          <div class="meta-right" style="display: flex; align-items: center; gap: 0.5rem; margin-left: auto;">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${i.views}</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${i.comments}</span>
          </div>
        </div>
      </div>
    `).join("")}ee(o),ne(o),ie(o,a),oe(o),t.cleanup=()=>{clearInterval(d)}}function ee(t){const o=document.getElementById("featured-numbers-container");if(!o)return;const a=t.filter(e=>e.featured)[0]||t.find(e=>e.id===1),s=t.filter(e=>e.id!==(a==null?void 0:a.id)).slice(0,6);o.innerHTML=s.map((e,d)=>`
    <div class="number-post-card">
      <span class="post-number">#${d+1}</span>
      <div class="number-post-img-wrapper">
        <img src="${D(e.image)}" alt="${e.title}">
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
  `).join("")}function ne(t){const o=document.getElementById("new-updates-content"),a=document.getElementById("col-center-ai"),s=document.getElementById("trending-content"),e=document.getElementById("reviews-content");if(o){const d=t[0]||t.find(i=>i.id===3),h=t[1]||t.find(i=>i.id===4),r=t[2]||t.find(i=>i.id===7);o.innerHTML=[d,h,r].filter(Boolean).map(i=>`
      <div class="post-card-mini">
        <img class="post-card-mini-img" src="${D(i.image)}" alt="${i.title}">
        <div class="post-card-mini-info">
          <a href="#/chuyen-muc/${i.category}" class="post-card-mini-tag">${i.category}</a>
          <h4 class="post-card-mini-title"><a href="#/bai-viet/${i.id}">${i.title}</a></h4>
          <div class="post-meta" style="font-size: 0.7rem; color: var(--text-muted);">
            <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
              <span>${i.author}</span>
              <span class="meta-dot">&bull;</span>
              <span>${i.date}</span>
            </div>
          </div>
        </div>
      </div>
    `).join("")}if(a){const d=t.filter(g=>g.category==="AI"),h=d[0]||t.find(g=>g.id===5),r=d[1]||t.find(g=>g.id===6),i=d[2]||t.find(g=>g.id===8);a.innerHTML=`
      <!-- Main Center Post -->
      <div class="center-main-post">
        <a href="#/chuyen-muc/${h.category}" class="center-main-tag">${h.category}</a>
        <h4 class="center-main-title"><a href="#/bai-viet/${h.id}">${h.title}</a></h4>
        <div class="post-meta post-detail-meta" style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.2rem;">
          <span>${h.author} <span class="meta-dot">&bull;&nbsp;</span>${h.date}</span>
        </div>
        <div class="center-main-img-wrapper">
          <img src="${D(h.image)}" alt="${h.title}">
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
          <a href="#/chuyen-muc/${i.category}" class="post-card-mini-tag" style="font-size: 0.65rem;">${i.category}</a>
          <h5 class="center-sub-title"><a href="#/bai-viet/${i.id}">${i.title}</a></h5>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${i.author}</span>
        </div>
      </div>
    `}if(s){const d=[...t].sort((h,r)=>(r.views||0)-(h.views||0)).slice(0,5);s.innerHTML=d.map(h=>`
      <div class="trending-post-card">
        <h4 class="trending-post-title"><a href="#/bai-viet/${h.id}">${h.title}</a></h4>
        <div class="post-meta" style="font-size: 0.7rem; color: var(--text-muted);">
          <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
            <span>${h.author}</span>
            <span class="meta-dot">&bull;</span>
            <span>${h.date}</span>
          </div>
        </div>
      </div>
    `).join("")}if(e){const d=t.filter(i=>i.category==="Review"),h=t.filter(i=>i.category!=="Review"),r=[...d,...h].slice(0,4);e.innerHTML=r.map(i=>`
      <div class="review-post-card">
        <div class="review-post-img-wrapper">
          <img src="${D(i.image)}" alt="${i.title}">
        </div>
        <a href="#/chuyen-muc/${i.category}" class="post-card-mini-tag" style="font-size: 0.65rem; margin-top: 0.2rem;">${i.category}</a>
        <h4 class="review-post-title"><a href="#/bai-viet/${i.id}">${i.title}</a></h4>
        <div class="post-meta post-meta-stack" style="font-size: 0.7rem; color: var(--text-muted);">
          <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
            <span>${i.author}</span>
            <span class="meta-dot">&bull;</span>
            <span>${i.date}</span>
          </div>
        </div>
      </div>
    `).join("")}}function ie(t,o){const a=document.getElementById("category-columns-container");a&&(a.innerHTML=o.map((s,e)=>{const d=t.filter(r=>r.category===s),h=[];for(let r=0;r<4;r++)h.push(d[r%d.length]||t[(e*2+r)%t.length]);return`
      <div class="category-column">
        <div class="category-header-wrapper">
          <a href="#/chuyen-muc/${s}" class="category-title-header">${s}</a>
        </div>
        <div class="split-col" style="gap: 1rem;">
          ${h.map((r,i)=>`
            <div class="cat-post-card ${i===0?"has-image":""}">
              <div class="cat-post-img-wrapper">
                <img src="${D(r.image)}" alt="${r.title}">
              </div>
              <div class="cat-post-text-wrapper">
                <h4 class="cat-post-title"><a href="#/bai-viet/${r.id}">${r.title}</a></h4>
                <span style="font-size: 0.7rem; color: var(--text-muted);">${r.date}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `}).join(""))}function oe(t){const o=document.getElementById("refresh-new-updates"),a=document.getElementById("new-updates-content");o&&o.addEventListener("click",()=>{o.classList.add("spinning"),setTimeout(()=>{o.classList.remove("spinning");const s=[...t].filter(r=>r.id!==5&&r.id!==6).sort(()=>.5-Math.random()),e=s[0],d=s[1],h=s[2];a&&(a.innerHTML=[e,d,h].map(r=>`
            <div class="post-card-mini">
              <img class="post-card-mini-img" src="${D(r.image||"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=250")}" alt="${r.title}">
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
          `).join(""))},600)})}const ae={"Tin công nghệ":["Điện thoại","Máy tính","Thiết bị thông minh","Xe điện"],AI:["Machine Learning","Generative AI","ChatGPT & LLMs","Thị giác máy tính"],"Chuyển đổi số":["Doanh nghiệp","Giải pháp đám mây","IoT & Automation","Bảo mật dữ liệu"],Review:["Đánh giá Laptop","Đánh giá Smartphone","Đồ công nghệ khác","Trải nghiệm dịch vụ"],"Phần mềm":["Công cụ lập trình","Phần mềm văn phòng","Hệ điều hành","Ứng dụng di động"],IT:["Lập trình","Quản trị mạng","Cơ sở dữ liệu","DevOps"],"Giải pháp công nghệ":["AI cho doanh nghiệp","Tự động hóa quy trình","Hạ tầng số","ERP & CRM"],Casestudy:["Thành công tiêu biểu","Phân tích thất bại","Khảo sát thực tế"]},Rt=localStorage.getItem("toptech_subcategories"),Mt=Rt?JSON.parse(Rt):ae,Tt={};for(const t in Mt)Mt[t].forEach(o=>{Tt[o]=t});function Dt(t,o,a,s=!1){const e=decodeURIComponent(o);let d=[],h=Tt[e],r=!!h;s?d=a.filter(b=>b.title.toLowerCase().includes(e.toLowerCase())||b.category.toLowerCase().includes(e.toLowerCase())||b.subcategory&&b.subcategory.toLowerCase().includes(e.toLowerCase())||b.description&&b.description.toLowerCase().includes(e.toLowerCase())):r?d=a.filter(b=>b.subcategory&&b.subcategory.toLowerCase()===e.toLowerCase()||b.category.toLowerCase()===e.toLowerCase()):d=a.filter(b=>b.category.toLowerCase()===e.toLowerCase()||b.subcategory&&Tt[b.subcategory]&&Tt[b.subcategory].toLowerCase()===e.toLowerCase());let i="newest",g=6,y="";if(s)y=`
      <span class="category-eyebrow" style="font-size: 0.95rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--primary-color); display: block; margin-bottom: 0.5rem;">KẾT QUẢ TÌM KIẾM</span>
      <h1 class="category-page-title search-title" style="font-weight: 850; text-transform: uppercase; margin: 0; color: var(--text-primary);">"${e.toUpperCase()}"</h1>
    `;else{const b=r?h:e,w=Mt[b]||[];y=`
      <!-- Left: Major category title -->
      <div>
        <h1 class="category-page-title" style="font-weight: 850; text-transform: uppercase; margin: 0; line-height: 1.1; color: var(--text-primary);">
          <a href="#/chuyen-muc/${b}" style="color: inherit; text-decoration: none;">${b.toUpperCase()}</a>
        </h1>
      </div>
      
      <!-- Right: Capsule subcategory tag pills list -->
      <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: center;">
        ${w.map(z=>{const C=e.toLowerCase()===z.toLowerCase();return`
            <a href="#/chuyen-muc/${C?b:z}" style="display: inline-block; padding: 0.45rem 1.1rem; font-size: 0.82rem; font-weight: 600; border-radius: 50px; text-decoration: none; border: 1.5px solid ${C?"var(--primary-color)":"var(--border-color)"}; background-color: ${C?"var(--primary-color)":"var(--bg-main)"}; color: ${C?"#fff":"var(--text-secondary)"}; transition: all var(--transition-fast);" class="subcat-pill ${C?"active-pill":""}" ${C?'title="Bấm lại để quay về chuyên mục lớn"':""}>
              ${z}
            </a>
          `}).join("")}
      </div>
    `}t.innerHTML=`
    <div class="category-page-header" style="padding: 2.5rem 0; background: var(--bg-surface); border-bottom: 1px solid var(--border-color); transition: background-color var(--transition-normal), border-color var(--transition-normal);">
      <div class="container category-header-content ${s?"search-mode":""}">
        ${y}
      </div>
    </div>

    <div class="container section-padding">
      <!-- Filter controls -->
      <div class="category-filters-bar">
        <span class="filters-label">Sắp xếp theo:</span>
        <div class="filters-select-wrapper">
          <select class="filter-select" id="filter-select">
            <option value="newest" ${i==="newest"?"selected":""}>Mới nhất</option>
            <option value="views" ${i==="views"?"selected":""}>Xem nhiều nhất</option>
            <option value="comments" ${i==="comments"?"selected":""}>Bình luận nhiều nhất</option>
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
  `;function E(){const b=document.getElementById("category-grid");if(!b)return;let w=[...d];i==="newest"?w.sort((x,R)=>R.id-x.id):i==="views"?w.sort((x,R)=>R.views-x.views):i==="comments"&&w.sort((x,R)=>R.comments-x.comments);const z=w.slice(0,g);b.innerHTML=z.length===0?`
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px; transition: background-color var(--transition-normal), border-color var(--transition-normal);">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted); margin-bottom: 1rem;"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-primary);">Chưa có bài viết</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 400px; margin: 0 auto;">Chưa có bài viết nào thuộc chuyên mục này. Quản trị viên có thể đăng nhập vào trang Viết bài để cập nhật bài viết mới!</p>
        </div>
      `:z.map(x=>`
      <article class="cat-article-card">
        <div class="cat-card-img-wrapper">
          <img src="${D(x.image)}" alt="${x.title}">
          <a href="#/chuyen-muc/${x.subcategory||x.category}" class="cat-card-category">${x.subcategory||x.category}</a>
        </div>
        <div class="cat-card-content">
          <h3 class="cat-card-title"><a href="#/bai-viet/${x.id}">${x.title}</a></h3>
          <p class="cat-card-description">${x.description||"Chưa có mô tả chi tiết cho bài viết này. Nhấp vào để đọc bài viết..."}</p>
          
          <div class="post-meta post-meta-stack" style="color: var(--text-muted); font-size: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 1rem; margin-top: auto; width: 100%; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
            <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
              <span class="post-author-name">${x.author}</span>
              <span class="meta-dot">&bull;</span>
              <span>${x.date}</span>
            </div>
            <div class="meta-right" style="display: flex; align-items: center; gap: 0.6rem; margin-left: auto;">
              <span style="display: flex; align-items: center; gap: 0.25rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${x.views}
              </span>
              <span style="display: flex; align-items: center; gap: 0.25rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${x.comments}
              </span>
            </div>
          </div>
        </div>
      </article>
    `).join("");const C=document.getElementById("load-more-container");C&&(w.length>g?C.style.display="block":C.style.display="none")}E();const L=document.getElementById("load-more-articles-btn");L&&L.addEventListener("click",()=>{g+=6,E()});const H=document.getElementById("filter-select");H&&H.addEventListener("change",b=>{i=b.target.value,g=6,E()})}const At="Nhập chú thích ảnh...";function re(){return`
    <div class="post-figure-toolbar">
      <button type="button" class="post-figure-delete" title="Xóa ảnh">×</button>
    </div>
  `}function lt(t,o="",{inRow:a=!1}={}){const s=o==="Chú thích ảnh"?"":o;return`
    <figure class="post-inline-figure" contenteditable="false">
      <div class="post-figure-media">
        <img src="${t}" alt="${s||"Ảnh"}" draggable="false">
      </div>
      <div class="post-figcaption-zone" contenteditable="true" data-placeholder="${At}">${s}</div>
    </figure>
  `}function se(){return`
    <div class="post-image-row post-image-row-empty is-selected" contenteditable="false">
      <div class="post-image-row-toolbar">
        <button type="button" class="post-image-row-delete-btn" title="Xóa nhóm ảnh">Xóa nhóm</button>
      </div>
      <div class="post-image-row-items"></div>
      <p class="post-image-row-hint">Nhóm ảnh trống — bấm chọn nhóm này, sau đó dán ảnh (Ctrl+V) hoặc nhấn + Thêm ảnh</p>
      <button type="button" class="post-image-row-add-btn" title="Thêm ảnh vào hàng">+ Thêm ảnh</button>
    </div>
  `}function _t(t){return`
    <div class="post-image-row" contenteditable="false">
      <div class="post-image-row-toolbar">
        <button type="button" class="post-image-row-delete-btn" title="Xóa nhóm ảnh">Xóa nhóm</button>
      </div>
      <div class="post-image-row-items">${t.map(a=>lt(a,"",{inRow:!0}).trim()).join("")}</div>
      <button type="button" class="post-image-row-add-btn" title="Thêm ảnh vào hàng">+ Thêm ảnh</button>
    </div>
  `}function Vt(t){const o=[];if(!(t!=null&&t.items))return o;for(let a=0;a<t.items.length;a++)if(t.items[a].type.indexOf("image")!==-1){const s=t.items[a].getAsFile();s&&o.push(s)}return o}function ce(t=3,o=3){const a=Array.from({length:o},(e,d)=>`<th>Tiêu đề ${d+1}</th>`).join(""),s=Array.from({length:t},(e,d)=>`<tr>${Array.from({length:o},(h,r)=>`<td>Nội dung ${d*o+r+1}</td>`).join("")}</tr>`).join("");return`
    <div class="post-table-block" contenteditable="false">
      <div class="post-table-block-toolbar">
        <button type="button" class="post-table-delete-btn" title="Xóa bảng">Xóa bảng</button>
      </div>
      <div class="table-responsive">
        <table class="post-detail-table" contenteditable="true">
          <thead><tr>${a}</tr></thead>
          <tbody>${s}</tbody>
        </table>
      </div>
    </div>
  `}function le(t=""){return`<blockquote class="post-blockquote">${t||"Nội dung trích dẫn..."}</blockquote>`}function Q(t,o){if(!t)return;t.focus(),document.execCommand("insertHTML",!1,o+"<p><br></p>"),t.dispatchEvent(new Event("input"))}function de(t){const o=document.createElement("div");return o.innerHTML=t,o.querySelectorAll("*").forEach(a=>{a.style&&(a.style.removeProperty("font-size"),a.style.removeProperty("font-family"),a.style.removeProperty("line-height")),a.getAttribute("style")===""&&a.removeAttribute("style")}),o.querySelectorAll("img").forEach(a=>{const s=a.getAttribute("src");if(!s){a.remove();return}const e=a.getAttribute("alt")||"",d=document.createElement("div");d.innerHTML=lt(s,e),a.replaceWith(d.firstElementChild)}),o.querySelectorAll("blockquote").forEach(a=>a.classList.add("post-blockquote")),o.querySelectorAll("table").forEach(a=>{if(a.closest(".post-table-block"))return;a.classList.add("post-detail-table");const s=document.createElement("div");s.className="post-table-block",s.contentEditable="false";const e=document.createElement("div");e.className="table-responsive",a.parentNode.insertBefore(s,a),e.appendChild(a),s.appendChild(e)}),o.innerHTML}function J(t,{isEditor:o=!1}={}){t&&(t.querySelectorAll("figure.post-inline-figure").forEach(a=>{var h;o?a.contentEditable="false":a.removeAttribute("contenteditable");const s=a.querySelector("img");if(s&&!a.querySelector(".post-figure-media")){const r=document.createElement("div");r.className="post-figure-media",s.parentNode.insertBefore(r,s),r.appendChild(s)}const e=a.querySelector("figcaption.post-figcaption");if(e&&!a.querySelector(".post-figcaption-zone")){let r=e.textContent.trim();r==="Chú thích ảnh"&&(r="");const i=document.createElement("div");i.className="post-figcaption-zone",o&&(i.contentEditable="true"),i.dataset.placeholder=At,i.textContent=r,e.replaceWith(i)}const d=a.querySelector(".post-figcaption-zone");if(d)o?d.contentEditable="true":d.removeAttribute("contenteditable");else if(o){const r=document.createElement("div");r.className="post-figcaption-zone",r.contentEditable="true",r.dataset.placeholder=At,a.appendChild(r)}if(o&&(a.setAttribute("draggable",(h=a.parentNode)!=null&&h.classList.contains("post-image-row-items")?"true":"false"),!a.querySelector(".post-figure-toolbar"))){const r=document.createElement("div");r.innerHTML=re(),a.insertBefore(r.firstElementChild,a.firstChild)}}),t.querySelectorAll("table.post-detail-table").forEach(a=>{if(!a.closest(".post-table-block")){const s=document.createElement("div");s.className="post-table-block",o&&(s.contentEditable="false");const e=document.createElement("div");e.className="table-responsive",a.parentNode.insertBefore(s,a),e.appendChild(a),s.appendChild(e)}o||a.removeAttribute("contenteditable")}),t.querySelectorAll("blockquote").forEach(a=>a.classList.add("post-blockquote")),o?(t.querySelectorAll(".post-image-row").forEach(a=>{if(!a.querySelector(".post-image-row-toolbar")){const s=document.createElement("div");s.className="post-image-row-toolbar",s.innerHTML='<button type="button" class="post-image-row-delete-btn" title="Xóa nhóm ảnh">Xóa nhóm</button>',a.insertBefore(s,a.firstChild)}}),t.querySelectorAll(".post-table-block").forEach(a=>{if(!a.querySelector(".post-table-block-toolbar")){const s=document.createElement("div");s.className="post-table-block-toolbar",s.innerHTML='<button type="button" class="post-table-delete-btn" title="Xóa bảng">Xóa bảng</button>',a.insertBefore(s,a.firstChild)}})):(t.querySelectorAll(".post-image-row-add-btn, .post-figure-toolbar, .post-image-row-hint, .post-image-row-toolbar, .post-table-block-toolbar").forEach(a=>a.remove()),t.querySelectorAll(".post-image-row, .post-table-block").forEach(a=>{a.removeAttribute("contenteditable"),a.classList.remove("is-selected","post-image-row-empty")})))}function he(t,o={}){if(!t||t.dataset.blocksBound==="true")return;t.dataset.blocksBound="true";const{onImageRowAdd:a,onImageRowSelect:s,onChange:e}=o;function d(i){t.querySelectorAll(".post-image-row.is-selected").forEach(g=>g.classList.remove("is-selected")),i&&i.classList.add("is-selected"),s==null||s(i||null)}function h(i){if(!i)return;i.querySelectorAll(".post-inline-figure").length===0?i.classList.add("post-image-row-empty"):i.classList.remove("post-image-row-empty")}t.addEventListener("click",i=>{const g=i.target.closest(".post-figcaption-zone");if(g){i.stopPropagation(),g.focus();return}const y=i.target.closest(".post-figure-delete");if(y){i.preventDefault(),i.stopPropagation();const w=y.closest(".post-inline-figure"),z=w==null?void 0:w.closest(".post-image-row");w==null||w.remove(),h(z),e==null||e();return}const E=i.target.closest(".post-image-row-delete-btn");if(E){if(i.preventDefault(),i.stopPropagation(),confirm("Bạn có chắc chắn muốn xóa toàn bộ nhóm ảnh này?")){const w=E.closest(".post-image-row");w==null||w.remove(),e==null||e()}return}const L=i.target.closest(".post-table-delete-btn");if(L){if(i.preventDefault(),i.stopPropagation(),confirm("Bạn có chắc chắn muốn xóa bảng này?")){const w=L.closest(".post-table-block");w==null||w.remove(),e==null||e()}return}const H=i.target.closest(".post-image-row-add-btn");if(H){i.preventDefault(),i.stopPropagation();const w=H.closest(".post-image-row");d(w),a==null||a(w);return}const b=i.target.closest(".post-image-row");if(b){i.stopPropagation(),d(b);return}d(null)}),t.addEventListener("focusout",i=>{var E,L,H;const g=(L=(E=i.target).closest)==null?void 0:L.call(E,".post-figcaption-zone");if(!g)return;const y=(H=g.closest("figure"))==null?void 0:H.querySelector("img");y&&(y.alt=g.textContent.trim()||"Ảnh")}),t.addEventListener("keydown",i=>{if(i.key!=="Enter")return;const g=i.target.closest(".post-figcaption-zone");if(g){i.preventDefault(),g.blur();const y=g.closest(".post-inline-figure, .post-image-row, .post-table-block");let E=y==null?void 0:y.nextElementSibling;if(!E||!E.matches("p")){const b=document.createElement("p");b.innerHTML="<br>",y==null||y.parentNode.insertBefore(b,y.nextSibling),E=b}const L=document.createRange();L.selectNodeContents(E),L.collapse(!0);const H=window.getSelection();H.removeAllRanges(),H.addRange(L)}});let r=null;t.addEventListener("dragstart",i=>{const g=i.target.closest(".post-image-row-items .post-inline-figure");g&&(r=g,g.classList.add("is-dragging"),i.dataTransfer.setData("text/plain",""))}),t.addEventListener("dragover",i=>{if(!r)return;const g=i.target.closest(".post-image-row-items .post-inline-figure");if(g&&g!==r&&g.parentNode===r.parentNode){i.preventDefault();const y=g.getBoundingClientRect(),E=y.left+y.width/2;i.clientX<E?(g.classList.add("drag-over-left"),g.classList.remove("drag-over-right")):(g.classList.add("drag-over-right"),g.classList.remove("drag-over-left"))}}),t.addEventListener("dragleave",i=>{const g=i.target.closest(".post-image-row-items .post-inline-figure");g&&g.classList.remove("drag-over-left","drag-over-right")}),t.addEventListener("drop",i=>{if(!r)return;const g=i.target.closest(".post-image-row-items .post-inline-figure");if(g&&g!==r&&g.parentNode===r.parentNode){i.preventDefault();const y=g.getBoundingClientRect(),E=y.left+y.width/2;i.clientX<E?g.parentNode.insertBefore(r,g):g.parentNode.insertBefore(r,g.nextElementSibling),e==null||e()}t.querySelectorAll(".post-inline-figure").forEach(y=>{y.classList.remove("drag-over-left","drag-over-right","is-dragging")}),r=null}),t.addEventListener("dragend",()=>{t.querySelectorAll(".post-inline-figure").forEach(i=>{i.classList.remove("drag-over-left","drag-over-right","is-dragging")}),r=null})}function Gt(t){if(!t)return"";if(t.trim().startsWith("<")||t.includes("</p>")||t.includes("</div>")||t.includes("</td>")||t.includes("</figure>")||t.includes("post-image-row")||t.includes("post-table-block"))return t;const o=t.split(`
`);let a=!1,s="",e=[];for(let h=0;h<o.length;h++){const r=o[h].trim();if(r.startsWith("|")&&r.endsWith("|")){a||(a=!0,s='<div class="post-table-block"><div class="table-responsive"><table class="post-detail-table">');const i=r.split("|").slice(1,-1).map(y=>y.trim());if(i.every(y=>/^:?-+:?$/.test(y)))continue;s.includes('<table class="post-detail-table">')&&!s.includes("<thead>")&&!s.includes("<tbody>")?s+="<thead><tr>"+i.map(y=>`<th>${y}</th>`).join("")+"</tr></thead><tbody>":s+="<tr>"+i.map(y=>`<td>${y}</td>`).join("")+"</tr>"}else a&&(a=!1,s+="</tbody></table></div></div>",e.push(s),s=""),e.push(o[h])}a&&(s+="</tbody></table></div></div>",e.push(s)),t=e.join(`
`);let d=t.replace(/^### (.*$)/gim,'<h3 class="post-subheading-3">$1</h3>').replace(/^## (.*$)/gim,'<h2 class="post-subheading-2">$1</h2>').replace(/^# (.*$)/gim,'<h1 class="post-heading-1">$1</h1>').replace(/\!\[(.*?)\]\((.*?)\)/g,(h,r,i)=>lt(i,r).trim()).replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/^\> (.*$)/gim,'<blockquote class="post-blockquote">$1</blockquote>').replace(/^\- (.*$)/gim,"<li>$1</li>").replace(/\`\`\`([\s\S]*?)\`\`\`/g,'<pre class="post-code-block"><code>$1</code></pre>').replace(/\`(.*?)\`/g,'<code class="post-inline-code">$1</code>').replace(/\n\n/g,"</p><p>");return d=d.replace(/(<li>.*<\/li>)/gim,"<ul>$1</ul>"),`<p>${d}</p>`}typeof window<"u"&&"speechSynthesis"in window&&(window.speechSynthesis.getVoices(),"onvoiceschanged"in window.speechSynthesis&&(window.speechSynthesis.onvoiceschanged=()=>{window.speechSynthesis.getVoices()}));function me(t,o,a){const s=parseInt(o,10),e=a.find(n=>n.id===s)||a[0];e.views+=1,localStorage.setItem("toptech_articles",JSON.stringify(a));const d=a.filter(n=>n.category===e.category&&n.id!==e.id).slice(0,4);e.commentsList||(e.commentsList=[{id:1,author:"Nguyễn Văn Hùng",date:"2 ngày trước",content:"Bài viết rất chi tiết và dễ hiểu! Tôi đang tìm hiểu về vấn đề này và thấy thông tin cực kỳ hữu ích cho công việc thực tế của mình.",avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=80&h=80"},{id:2,author:"Lê Minh Hạnh",date:"1 ngày trước",content:"TopTech chia sẻ kiến thức chuẩn quá, thiết kế giao diện bài viết đọc rất sướng mắt. Mong nhóm tác giả ra thêm nhiều bài viết sâu hơn nữa!",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80&h=80"}]),t.innerHTML=`
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
            <img src="${D(e.image)}" alt="${e.title}">
          </div>

          <!-- Rich Text Content Body -->
          <div class="post-detail-body">
            ${e.content?`
              <p class="post-lead">${e.description||""}</p>
              ${Gt(e.content)}
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
              ${d.length>0?d.map(n=>`
                <div class="related-post-card">
                  <div class="related-img-wrapper">
                    <img src="${D(n.image)}" alt="${n.title}">
                  </div>
                  <div class="related-post-info">
                    <h5 class="related-title"><a href="#/bai-viet/${n.id}">${n.title}</a></h5>
                    <span class="related-meta"><a href="#/chuyen-muc/${n.subcategory||n.category}" style="color: inherit; font-weight: 600;">${n.subcategory||n.category}</a> <span class="meta-dot">&bull;&nbsp;</span>${n.date}</span>
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
  `;function h(){const n=document.getElementById("comments-list");if(!n)return;n.innerHTML=e.commentsList.map(m=>`
      <div class="comment-item">
        <div class="comment-content">
          <div class="comment-header">
            <span class="comment-author">${m.author}</span>
            <span class="comment-date">${m.date}</span>
          </div>
          <p class="comment-text-p">${m.content}</p>
        </div>
      </div>
    `).join("");const c=document.getElementById("comments-count");c&&(c.textContent=e.commentsList.length)}h();const r=document.getElementById("submit-comment-btn");r&&r.addEventListener("click",()=>{const n=document.getElementById("comment-author-name"),c=document.getElementById("comment-text"),m=n==null?void 0:n.value.trim(),u=c==null?void 0:c.value.trim();if(!m||!u){alert("Vui lòng điền đầy đủ Tên và Nội dung bình luận.");return}const v={id:Date.now(),author:m,date:"Vừa xong",content:u,avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80&h=80"};e.commentsList.unshift(v),e.comments=e.commentsList.length,localStorage.setItem("toptech_articles",JSON.stringify(a)),n&&(n.value=""),c&&(c.value=""),h()});const i=()=>{const n=document.getElementById("reading-bar");if(!n)return;const c=window.scrollY||document.documentElement.scrollTop,m=document.documentElement.scrollHeight-document.documentElement.clientHeight;if(m>0){const u=c/m*100;n.style.width=u+"%"}};window.addEventListener("scroll",i),t.cleanup=()=>{window.removeEventListener("scroll",i)};const g=t.querySelectorAll(".post-detail-body h2"),y=document.getElementById("post-toc-container"),E=document.getElementById("toc-list"),L=document.getElementById("mobile-toc-list");if(g.length>0){t.classList.add("has-toc"),g.forEach((I,S)=>{const N=`toc-section-${S}`;I.id=N}),y&&E&&(y.style.display="block",E.innerHTML=Array.from(g).map((I,S)=>{const N=I.textContent.trim();return`<li><a href="javascript:void(0)" data-target="toc-section-${S}" class="toc-link">${N}</a></li>`}).join("")),L&&(L.innerHTML=Array.from(g).map((I,S)=>{const N=I.textContent.trim();return`<li><a href="javascript:void(0)" data-target="toc-section-${S}" class="mobile-toc-link">${N}</a></li>`}).join(""));const n=t.querySelectorAll(".toc-link"),c=t.querySelectorAll(".mobile-toc-link"),m=I=>{I.forEach(S=>{S.addEventListener("click",N=>{var ot;N.preventDefault();const Y=S.dataset.target,j=document.getElementById(Y);if(j){const xt=j.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:xt,behavior:"smooth"}),I.forEach(X=>X.classList.remove("active")),S.classList.add("active"),(ot=document.getElementById("mobile-toc-panel"))==null||ot.classList.remove("active")}})})};m(n),m(c);const u=document.getElementById("mobile-toc-toggle"),v=document.getElementById("mobile-toc-panel"),f=document.getElementById("mobile-toc-close"),l=()=>{v==null||v.classList.toggle("active")},$=()=>{v==null||v.classList.remove("active")};u==null||u.addEventListener("click",l),f==null||f.addEventListener("click",$);const M=I=>{v!=null&&v.classList.contains("active")&&!v.contains(I.target)&&!u.contains(I.target)&&$()};document.addEventListener("click",M);const k=()=>{const I=window.scrollY||document.documentElement.scrollTop;let S=-1;g.forEach((Y,j)=>{Y.offsetTop-110<=I&&(S=j)});const N=Y=>{Y.forEach((j,ot)=>{ot===S?j.classList.add("active"):j.classList.remove("active")})};N(n),N(c)};window.addEventListener("scroll",k);const A=t.cleanup;t.cleanup=()=>{A&&A(),window.removeEventListener("scroll",k),document.removeEventListener("click",M)}}const H=document.getElementById("quick-edit-post-btn");H==null||H.addEventListener("click",()=>{sessionStorage.setItem("toptech_editing_article_id",e.id),window.location.hash="#/admin"});const b=t.querySelector(".post-detail-body");J(b,{isEditor:!1});function w(n){const c=document.getElementById("post-toast");if(!c)return;const m=c.querySelector(".toast-message");m&&(m.textContent=n),c.classList.add("show"),c.timeoutId&&clearTimeout(c.timeoutId),c.timeoutId=setTimeout(()=>{c.classList.remove("show")},2500)}let z=!1,C=!1,x=null,R=0;const q=document.getElementById("post-action-audio"),W=q==null?void 0:q.querySelector(".audio-icon-play"),G=q==null?void 0:q.querySelector(".audio-icon-pause");function K(){typeof responsiveVoice<"u"?responsiveVoice.cancel():"speechSynthesis"in window&&window.speechSynthesis.cancel(),z=!1,C=!1,q==null||q.classList.remove("active"),W&&(W.style.display="block"),G&&(G.style.display="none")}function it(){if(!b)return;const n=`${e.title}. ${b.innerText.trim()}`;if(n)if(typeof responsiveVoice<"u"?responsiveVoice.cancel():"speechSynthesis"in window&&window.speechSynthesis.cancel(),z=!0,C=!1,q==null||q.classList.add("active"),W&&(W.style.display="none"),G&&(G.style.display="block"),typeof responsiveVoice<"u")w("Đang đọc: Giọng trực tuyến (ResponsiveVoice)"),responsiveVoice.speak(n,"Vietnamese Female",{rate:1.1,onend:K,onerror:c=>{console.error("ResponsiveVoice Error:",c),K()}});else if("speechSynthesis"in window){const c=window.speechSynthesis.getVoices();if(c.length===0&&R<3){R++,window.speechSynthesis.getVoices(),setTimeout(it,250);return}R=0,x=new SpeechSynthesisUtterance(n),x.lang="vi-VN",x.rate=1.1;const m=c.find(u=>u.lang.toLowerCase().replace("_","-").includes("vi-vn")||u.lang.toLowerCase()==="vi"||u.name.toLowerCase().includes("viet")||u.name.toLowerCase().includes("việt"));m?(x.voice=m,w(`Đang đọc: Giọng hệ thống ${m.name}`)):w("Dùng giọng hệ thống mặc định (Hãy cài giọng tiếng Việt để đọc chuẩn)."),x.onend=()=>{K()},x.onerror=u=>{console.error("Native TTS Error:",u),K()},window.speechSynthesis.speak(x)}else w("Trình duyệt không hỗ trợ nghe đọc bài viết."),K()}q==null||q.addEventListener("click",()=>{z?C?(typeof responsiveVoice<"u"?responsiveVoice.resume():"speechSynthesis"in window&&window.speechSynthesis.resume(),C=!1,q==null||q.classList.add("active"),W&&(W.style.display="none"),G&&(G.style.display="block")):(typeof responsiveVoice<"u"?responsiveVoice.pause():"speechSynthesis"in window&&window.speechSynthesis.pause(),C=!0,q==null||q.classList.remove("active"),W&&(W.style.display="block"),G&&(G.style.display="none")):it()});const V=t.querySelector(".post-main-content");let U=parseInt(localStorage.getItem("toptech_post_font_size"),10)||18;function dt(){V&&(V.style.fontSize=`${U}px`,localStorage.setItem("toptech_post_font_size",U))}dt();const ht=document.getElementById("post-action-font-inc"),mt=document.getElementById("post-action-font-dec");ht==null||ht.addEventListener("click",()=>{U<26?(U+=2,dt(),w(`Đã tăng cỡ chữ: ${U}px`)):w("Đã đạt cỡ chữ tối đa.")}),mt==null||mt.addEventListener("click",()=>{U>14?(U-=2,dt(),w(`Đã giảm cỡ chữ: ${U}px`)):w("Đã đạt cỡ chữ tối thiểu.")});const pt=document.getElementById("post-action-share");function yt(){navigator.clipboard.writeText(window.location.href).then(()=>{w("Đã sao chép liên kết vào bộ nhớ tạm!")}).catch(()=>{const n=document.createElement("textarea");n.value=window.location.href,n.style.position="fixed",document.body.appendChild(n),n.select();try{document.execCommand("copy"),w("Đã sao chép liên kết vào bộ nhớ tạm!")}catch{w("Không thể sao chép liên kết.")}document.body.removeChild(n)})}pt==null||pt.addEventListener("click",()=>{const n={title:e.title,text:e.description||"",url:window.location.href};navigator.share&&navigator.canShare&&navigator.canShare(n)?navigator.share(n).then(()=>w("Chia sẻ bài viết thành công!")).catch(c=>{c.name!=="AbortError"&&yt()}):yt()});const gt=document.getElementById("post-action-print");gt==null||gt.addEventListener("click",()=>{window.print()});const ut=document.getElementById("post-action-comments");ut==null||ut.addEventListener("click",()=>{const n=t.querySelector(".post-comments-section");if(n){const u=n.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:u,behavior:"smooth"})}});const bt=t.cleanup;t.cleanup=()=>{bt&&bt(),K()}}const Ot=[{name:"Trí tuệ nhân tạo (AI)",url:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Lập trình / Code",url:"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Đám mây / Dữ liệu",url:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Mạng / Bảo mật",url:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Thiết bị thông minh",url:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Văn phòng tối giản",url:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800&h=450"}];function qt(t,o,a,s){sessionStorage.getItem("toptech_admin_logged_in")==="true"?ge(t,o,a,s):pe(t,o,a,s)}function pe(t,o,a,s){t.innerHTML=`
    <div class="admin-login-wrapper">
      <div class="admin-login-card glass-panel">
        <div class="login-logo-container">
          <img src="${D("/logo-toptech-color.svg")}" alt="TopTech Logo" style="height: 100px; margin: 0 auto;">
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
  `;const e=document.getElementById("admin-password"),d=document.getElementById("login-submit-btn"),h=document.getElementById("login-error-msg"),r=()=>{(e==null?void 0:e.value.trim())==="admin123"?(sessionStorage.setItem("toptech_admin_logged_in","true"),qt(t,o,a,s)):(h&&(h.textContent="Mật khẩu không chính xác. Thử lại!",h.style.display="block"),e&&(e.style.borderColor="var(--secondary-color)"))};d==null||d.addEventListener("click",r),e==null||e.addEventListener("keydown",i=>{i.key==="Enter"&&r()})}function ge(t,o,a,s){let e="articles",d=null,h=Ot[0].url,r=null,i=null;const g=sessionStorage.getItem("toptech_editing_article_id");if(g){const n=parseInt(g,10),c=o.find(m=>m.id===n);c&&(e="articles",d=n,h=c.image),sessionStorage.removeItem("toptech_editing_article_id")}function y(){const n=localStorage.getItem("toptech_categories");return n?JSON.parse(n):a}function E(n){localStorage.setItem("toptech_categories",JSON.stringify(n))}function L(){const n=localStorage.getItem("toptech_subcategories");return n?JSON.parse(n):{"Tin công nghệ":["Điện thoại","Máy tính","Thiết bị thông minh","Xe điện"],AI:["Machine Learning","Generative AI","ChatGPT & LLMs","Thị giác máy tính"],"Chuyển đổi số":["Doanh nghiệp","Giải pháp đám mây","IoT & Automation","Bảo mật dữ liệu"],Review:["Đánh giá Laptop","Đánh giá Smartphone","Đồ công nghệ khác","Trải nghiệm dịch vụ"],"Phần mềm":["Công cụ lập trình","Phần mềm văn phòng","Hệ điều hành","Ứng dụng di động"],IT:["Lập trình","Quản trị mạng","Cơ sở dữ liệu","DevOps"],"Giải pháp công nghệ":["AI cho doanh nghiệp","Tự động hóa quy trình","Hạ tầng số","ERP & CRM"],Casestudy:["Thành công tiêu biểu","Phân tích thất bại","Khảo sát thực tế"]}}function H(n){localStorage.setItem("toptech_subcategories",JSON.stringify(n))}function b(){const n=localStorage.getItem("toptech_category_thumbnails");return n?JSON.parse(n):{AI:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=600&h=400","Tin công nghệ":"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400","Chuyển đổi số":"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",Review:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600&h=400","Phần mềm":"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800&h=450",IT:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400","Giải pháp công nghệ":"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400",Casestudy:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=400"}}function w(n){localStorage.setItem("toptech_category_thumbnails",JSON.stringify(n))}function z(){const n=localStorage.getItem("toptech_authors");return n?JSON.parse(n):[{name:"Phương Linh",role:"Content Writer",desc:"Ms. Phương Linh là cây bút cốt cán tại TopTech chuyên viết về Trí tuệ nhân tạo (AI)...",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Ngọc Thanh",role:"Content Writer",desc:"Ms. Ngọc Thanh chuyên phân tích và đánh giá chuyên sâu các thiết bị di động...",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Lê Mạnh",role:"CEO & Founder",desc:"Mr. Lê Mạnh là nhà sáng lập kiêm Giám đốc điều hành của TopTech...",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Kim Phượng",role:"Content Writer",desc:"Ms. Kim Phượng đam mê nghiên cứu ứng dụng phần mềm văn phòng...",avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Trà My",role:"Software Developer",desc:"Ms. Trà My là kỹ sư phát triển phần mềm chuyên nghiệp...",avatar:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"}]}function C(n){localStorage.setItem("toptech_authors",JSON.stringify(n))}function x(n,c="600px"){const m=document.getElementById("admin-modal"),u=document.getElementById("admin-modal-content"),v=document.getElementById("admin-modal-body");m&&u&&v&&(v.innerHTML=n,u.style.maxWidth=c,m.classList.add("is-active"),u.focus(),document.getElementById("publish-post-btn")?ht():document.getElementById("btn-save-category")?yt():document.getElementById("btn-save-author")&&bt())}function R(){const n=document.getElementById("admin-modal");n&&(n.classList.remove("is-active"),t.cleanup&&(t.cleanup(),t.cleanup=null),r=null,i=null,d=null,V())}function q(n,c=""){return`
      <div class="media-upload-control" id="${n}-media-control" style="display: flex; flex-direction: column; gap: 0.8rem; padding: 1.2rem; border: 1px solid var(--border-color); border-radius: 12px; background: var(--bg-surface-secondary); margin-top: 0.5rem;">
        <div class="form-row" style="margin:0;">
          <label style="font-weight:600; font-size:0.85rem; margin-bottom: 0.3rem;">Link địa chỉ ảnh (URL):</label>
          <input type="url" class="media-url-input" value="${c.startsWith("data:")?"":c}" placeholder="Nhập hoặc dán link ảnh (https://...)" style="margin:0; padding: 0.5rem 0.8rem; font-size: 0.85rem;">
        </div>
        <div style="display: flex; gap: 0.6rem; align-items: center; flex-wrap: wrap;">
          <button type="button" class="btn-media-upload-file" style="padding: 0.5rem 1.2rem; font-size: 0.8rem; font-weight: 700; border-radius: 8px; background: var(--primary-color); color: #fff; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 0.3rem;">
            📁 Tải lên từ máy
          </button>
          <button type="button" class="btn-media-paste-clipboard" style="padding: 0.5rem 1.2rem; font-size: 0.8rem; font-weight: 700; border-radius: 8px; background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-primary); cursor: pointer; display: inline-flex; align-items: center; gap: 0.3rem;">
            📋 Dán ảnh từ Clipboard
          </button>
          <span class="media-upload-status" style="font-size: 0.8rem; color: var(--text-muted); font-style: italic; font-weight: 600;">
            ${c?"✓ Đã chọn ảnh":"Chưa có ảnh"}
          </span>
        </div>
        <div class="media-upload-dropzone" style="border: 2px dashed var(--border-color); border-radius: 8px; padding: 0.8rem; text-align: center; font-size: 0.8rem; color: var(--text-muted); cursor: pointer; font-weight: 500;">
          Hoặc kéo thả ảnh vào khu vực này
        </div>
        <input type="file" class="media-file-input" accept="image/*" style="display:none;">
      </div>
    `}function W(n,c){if(!n)return;const m=n.querySelector(".media-url-input"),u=n.querySelector(".btn-media-upload-file"),v=n.querySelector(".btn-media-paste-clipboard"),f=n.querySelector(".media-upload-dropzone"),l=n.querySelector(".media-file-input"),$=n.querySelector(".media-upload-status"),M=k=>{if(!k)return;const A=new FileReader;A.onload=I=>{const S=I.target.result;m&&(m.value=""),$&&($.textContent="✓ Đã dán/tải ảnh!",$.style.color="var(--primary-color)"),f&&(f.style.borderColor="var(--primary-color)",f.innerHTML='<span style="color:var(--primary-color); font-weight:700;">✓ Đã tải ảnh thành công!</span>'),c(S)},A.readAsDataURL(k)};m==null||m.addEventListener("input",k=>{const A=k.target.value.trim();A&&($&&($.textContent="✓ Đã dùng Link",$.style.color="var(--primary-color)"),c(A))}),u==null||u.addEventListener("click",()=>l==null?void 0:l.click()),l==null||l.addEventListener("change",k=>M(k.target.files[0])),v==null||v.addEventListener("click",async()=>{try{const k=await navigator.clipboard.read();for(const A of k)for(const I of A.types)if(I.startsWith("image/")){const S=await A.getType(I),N=new File([S],"clipboard-image.png",{type:I});M(N);return}alert("Không tìm thấy ảnh trong Clipboard. Vui lòng Sao chép (Copy) ảnh trước.")}catch(k){console.error("Lỗi khi đọc clipboard:",k),alert("Vui lòng sao chép ảnh và bấm phím Ctrl + V trực tiếp trên form này.")}}),f==null||f.addEventListener("dragover",k=>{k.preventDefault(),f.style.borderColor="var(--primary-color)"}),f==null||f.addEventListener("dragleave",()=>{f.style.borderColor="var(--border-color)"}),f==null||f.addEventListener("drop",k=>{k.preventDefault(),f.style.borderColor="var(--border-color)",M(k.dataTransfer.files[0])}),n.addEventListener("paste",k=>{const A=Vt(k.clipboardData);A.length>0&&(k.preventDefault(),M(A[0]))})}function G(){const n=b(),c=r&&n[r]||"";return`
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
          ${q("cat-thumbnail",c)}
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
    `}function K(){const n=z(),c=i?n.find(m=>m.name===i):null;return`
      <h3 class="panel-subtitle" style="margin-bottom: 1.5rem; font-size: 1.35rem; font-weight: 800; color: var(--text-primary); border-bottom: 1px solid var(--border-color); padding-bottom: 0.8rem;">
        ${c?`Sửa thông tin: ${c.name}`:"Thêm tác giả mới"}
      </h3>
      <div class="login-form" style="gap: 1.2rem; display: flex; flex-direction: column;">
        <div class="form-row">
          <label for="input-author-name" style="font-weight:600; font-size:0.85rem;">Họ và tên <span style="color:var(--secondary-color)">*</span></label>
          <input type="text" id="input-author-name" value="${c?c.name:""}" placeholder="Ví dụ: Khánh Nam, Phương Linh..." ${c?"disabled":""} required>
        </div>
        
        <div class="form-row">
          <label for="input-author-role" style="font-weight:600; font-size:0.85rem;">Chức danh / Vai trò <span style="color:var(--secondary-color)">*</span></label>
          <input type="text" id="input-author-role" value="${c?c.role:""}" placeholder="Ví dụ: Content Writer, Tech Lead..." required>
        </div>

        <div class="form-row">
          <label style="font-weight:600; font-size:0.85rem;">Ảnh đại diện tác giả <span style="color:var(--secondary-color)">*</span></label>
          ${q("author-avatar",c?c.avatar:"")}
        </div>

        <div class="form-row">
          <label for="input-author-desc" style="font-weight:600; font-size:0.85rem;">Mô tả giới thiệu / Tiểu sử <span style="color:var(--secondary-color)">*</span></label>
          <textarea id="input-author-desc" rows="3" placeholder="Nhập tiểu sử tóm tắt giới thiệu tác giả..." required>${c?c.desc:""}</textarea>
        </div>
        
        <div style="display: flex; gap: 0.5rem; margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
          <button class="login-btn" id="btn-save-author" style="flex: 1; padding: 0.75rem; font-size: 0.9rem; border-radius: 8px; font-weight: 700;">
            ${c?"Cập nhật":"Thêm tác giả"}
          </button>
          <button class="logout-btn" id="btn-cancel-author-modal" style="padding: 0.75rem; font-size: 0.9rem; border-radius: 8px; font-weight: 700; margin: 0;">
            Hủy
          </button>
        </div>
      </div>
    `}function it(){const n=d?o.find(u=>u.id===d):null,c=y(),m=z();return`
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.8rem; margin-bottom: 1.5rem;">
        <h3 class="panel-subtitle" style="margin: 0; font-size: 1.35rem; font-weight: 800; color: var(--text-primary);">${n?"Chỉnh sửa bài viết":"Nội dung bài viết mới"}</h3>
        <button class="logout-btn" id="btn-cancel-post-modal" style="padding: 0.5rem 1rem; font-weight: 700; border-radius: 8px; margin: 0;">
          Đóng
        </button>
      </div>

      <div class="create-post-layout-grid">
        <div class="publish-form-panel">
          <div class="login-form" style="gap: 1.2rem; display: flex; flex-direction: column;">
            <!-- Title -->
            <div class="form-row">
              <label for="post-title" style="font-weight:600; font-size:0.85rem;">Tiêu đề bài viết <span style="color:var(--secondary-color)">*</span></label>
              <input type="text" id="post-title" value="${n?n.title:""}" placeholder="Nhập tiêu đề hấp dẫn..." required>
            </div>

            <!-- Categories -->
            <div class="create-post-categories-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-row">
                <label for="post-category" style="font-weight:600; font-size:0.85rem;">Chuyên mục chính <span style="color:var(--secondary-color)">*</span></label>
                <select id="post-category" required>
                  ${c.map(u=>`<option value="${u}" ${n&&n.category===u?"selected":""}>${u}</option>`).join("")}
                </select>
              </div>

              <div class="form-row">
                <label for="post-subcategory" style="font-weight:600; font-size:0.85rem;">Chuyên mục con</label>
                <select id="post-subcategory">
                  <!-- Dynamic render -->
                </select>
              </div>
            </div>

            <div class="form-row" style="display:flex; align-items:center; gap: 0.5rem; margin-top: 0.5rem; cursor:pointer;">
              <input type="checkbox" id="post-featured" ${n&&n.featured?"checked":""} style="width: 18px; height: 18px; margin:0;">
              <label for="post-featured" style="margin:0; font-weight:600; font-size: 0.85rem;">Bài viết nổi bật (Featured)</label>
            </div>

            <div class="form-row">
              <label for="post-author-name" style="font-weight:600; font-size:0.85rem;">Tác giả <span style="color:var(--secondary-color)">*</span></label>
              <select id="post-author-name" required>
                ${m.map(u=>`<option value="${u.name}" ${n&&n.author===u.name?"selected":""}>${u.name} (${u.role})</option>`).join("")}
              </select>
            </div>

            <!-- Cover Image Selector -->
            <div class="form-row">
              <label style="font-weight:600; font-size:0.85rem;">Ảnh bìa bài viết <span style="color:var(--secondary-color)">*</span></label>
              ${q("post-cover",n?n.image:h)}
            </div>

            <div class="form-row">
              <label for="post-description" style="font-weight:600; font-size:0.85rem;">Tóm tắt bài viết (Sapo) <span style="color:var(--secondary-color)">*</span></label>
              <textarea id="post-description" rows="2" placeholder="Viết tóm tắt ngắn..." required>${n?n.description:""}</textarea>
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
              ${n?"💾 Cập nhật bài viết":"🚀 Xuất bản bài viết"}
            </button>
          </div>
        </div>

        <!-- Sidebar Preview -->
        <div class="preview-sidebar-panel" style="flex: 0 0 320px;">
          <h3 class="panel-subtitle" style="margin-bottom: 1.2rem; font-size:1.1rem;">Xem trước thẻ tin</h3>
          <div class="cat-article-card" style="box-shadow: var(--shadow-lg); background-color: var(--bg-surface); border: 1px solid var(--border-color); pointer-events: none; border-radius:12px; overflow:hidden;">
            <div class="cat-card-img-wrapper" style="position:relative;">
              <img id="sidebar-preview-img" src="${n?n.image:h}" alt="Cover Preview" style="height: 180px; width: 100%; object-fit: cover;">
              <span id="sidebar-preview-cat" class="cat-card-category" style="position:absolute; top:0.8rem; left:0.8rem;">TIN CÔNG NGHỆ</span>
            </div>
            <div class="cat-card-content" style="padding: 1.2rem;">
              <h3 id="sidebar-preview-title" class="cat-card-title" style="font-size: 1.05rem; line-height:1.4; font-weight:750; margin-bottom:0.5rem;">Chưa nhập tiêu đề...</h3>
              <p id="sidebar-preview-desc" class="cat-card-description" style="margin-bottom: 1.2rem; font-size:0.85rem; line-height:1.4;">Nhập sapo để xem...</p>
              <div class="post-meta post-meta-stack" style="color: var(--text-muted); font-size: 0.78rem; border-top: 1px solid var(--border-color); padding-top: 0.8rem; width: 100%; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
                <div class="meta-left" style="display: flex; align-items: center; gap: 0.3rem; flex-wrap: wrap;">
                  <span id="sidebar-preview-author">Tác giả</span>
                  <span class="meta-dot">&bull;</span>
                  <span id="sidebar-preview-time">0 phút đọc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}function V(){var c,m,u,v,f;t.innerHTML=`
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
          ${e==="articles"?U():e==="categories"?mt():gt()}
        </div>
      </div>

      <!-- Popup Modal Container -->
      <div class="admin-modal" id="admin-modal" tabindex="-1">
        <div class="admin-modal-content" id="admin-modal-content" tabindex="0">
          <button type="button" class="admin-modal-close-btn" id="admin-modal-close-btn" style="position: absolute; top: 1.2rem; right: 1.2rem; background: none; border: none; font-size: 1.8rem; cursor: pointer; color: var(--text-secondary); font-weight: bold; line-height: 1;">&times;</button>
          <div id="admin-modal-body"></div>
        </div>
      </div>
    `;const n=document.getElementById("admin-modal");n==null||n.addEventListener("click",l=>{l.target===n&&R()}),(c=document.getElementById("admin-modal-close-btn"))==null||c.addEventListener("click",R),(m=document.getElementById("admin-logout-btn"))==null||m.addEventListener("click",()=>{sessionStorage.removeItem("toptech_admin_logged_in"),qt(t,o,a,s)}),(u=document.getElementById("tab-articles-btn"))==null||u.addEventListener("click",()=>{e="articles",V()}),(v=document.getElementById("tab-categories-btn"))==null||v.addEventListener("click",()=>{e="categories",r=null,V()}),(f=document.getElementById("tab-authors-btn"))==null||f.addEventListener("click",()=>{e="authors",i=null,V()}),e==="articles"?dt():e==="categories"?pt():e==="authors"&&ut(),g&&x(it(),"1100px")}function U(){return`
      <!-- Articles Grid (Mobile & Desktop Card Layout) -->
      <div class="admin-articles-grid" style="margin-bottom: 2rem;">
        ${o.length===0?`
          <div style="text-align: center; padding: 3rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px; color: var(--text-muted); grid-column: 1 / -1;">
            Chưa có bài viết nào trong hệ thống.
          </div>
        `:o.map(n=>`
          <div class="admin-post-card" id="article-card-${n.id}">
            <div style="display: flex; gap: 0.8rem; align-items: flex-start;">
              <img src="${n.image&&(n.image.startsWith("http")||n.image.startsWith("data:"))?n.image:D(n.image||"")}" alt="Thumbnail" style="width: 80px; aspect-ratio: 16/10; object-fit: cover; border-radius: 6px; flex-shrink: 0; border: 1px solid var(--border-color);">
              <div style="flex: 1; min-width: 0;">
                <h4 style="font-size: 0.95rem; font-weight: 700; line-height: 1.4; margin: 0 0 0.3rem 0; word-break: break-word;"><a href="#/bai-viet/${n.id}" target="_blank" style="color: var(--text-primary); transition: color var(--transition-fast);">${n.title}</a></h4>
                <span class="badge badge-cat" style="font-size: 0.65rem; padding: 0.15rem 0.4rem;">${n.category}${n.subcategory?` / ${n.subcategory}`:""}</span>
                ${n.featured?'<span class="badge badge-featured" style="font-size: 0.65rem; padding: 0.15rem 0.4rem; margin-left: 0.3rem;">Nổi bật</span>':""}
              </div>
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed var(--border-color); padding-top: 0.6rem; margin-top: 0.8rem; font-size: 0.8rem; color: var(--text-muted);">
              <div>Tác giả: <strong>${n.author}</strong></div>
              <div style="display: flex; gap: 0.8rem;">
                <span>👀 ${n.views||0}</span>
                <span>💬 ${n.comments||0}</span>
              </div>
            </div>
            
            <div style="display: flex; gap: 0.5rem; margin-top: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 0.8rem;">
              <button class="edit-post-btn" data-id="${n.id}" style="flex: 1; background-color: var(--primary-color); border: none; color: #fff; padding: 0.5rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 0.2rem;">
                📝 Sửa
              </button>
              <button class="delete-post-btn" data-id="${n.id}" style="flex: 1; margin: 0; padding: 0.5rem; display: inline-flex; align-items: center; justify-content: center; gap: 0.2rem; font-size: 0.8rem; font-weight: 600;">
                ❌ Xóa
              </button>
            </div>
          </div>
        `).join("")}
      </div>
    `}function dt(){var n;(n=document.getElementById("btn-goto-write-article"))==null||n.addEventListener("click",()=>{d=null,h=Ot[0].url,x(it(),"1100px")}),t.querySelectorAll(".edit-post-btn").forEach(c=>{c.addEventListener("click",()=>{const m=parseInt(c.dataset.id,10),u=o.find(v=>v.id===m);u&&(d=m,h=u.image,x(it(),"1100px"))})}),t.querySelectorAll(".delete-post-btn").forEach(c=>{c.addEventListener("click",()=>{const m=parseInt(c.dataset.id,10),u=o.find(v=>v.id===m);if(confirm(`Bạn có chắc chắn muốn xóa bài viết "${u==null?void 0:u.title}"?`)){const v=o.filter(l=>l.id!==m);localStorage.setItem("toptech_articles",JSON.stringify(v));const f=document.getElementById(`article-card-${m}`);f&&(f.style.transition="opacity 0.3s ease",f.style.opacity="0"),setTimeout(()=>{o.splice(0,o.length,...v),s(),V()},300)}})})}function ht(){var Nt;const n=document.getElementById("post-title"),c=document.getElementById("post-category"),m=document.getElementById("post-subcategory"),u=document.getElementById("post-featured"),v=document.getElementById("post-author-name"),f=document.getElementById("post-description"),l=document.getElementById("post-content"),$=document.getElementById("publish-post-btn"),M=document.getElementById("sidebar-preview-img"),k=document.getElementById("sidebar-preview-cat"),A=document.getElementById("sidebar-preview-title"),I=document.getElementById("sidebar-preview-desc"),S=document.getElementById("sidebar-preview-author"),N=document.getElementById("sidebar-preview-time"),Y=L(),j=d?o.find(p=>p.id===d):null;j&&l&&(l.innerHTML=j.content,J(l,{isEditor:!0}),h=j.image,M&&(M.src=h),k&&(k.textContent=(j.subcategory||j.category).toUpperCase()),A&&(A.textContent=j.title),I&&(I.textContent=j.description),S&&(S.textContent=j.author));const ot=document.getElementById("post-cover-media-control");W(ot,p=>{h=p,M&&(M.src=p)});const Lt=(p,T="")=>{if(!m)return;const P=Y[p]||[];m.innerHTML='<option value="">-- Không có --</option>'+P.map(B=>`<option value="${B}" ${T===B?"selected":""}>${B}</option>`).join("")};c&&Lt(c.value,j?j.subcategory:"");function wt(){const p=((l==null?void 0:l.innerText)||(l==null?void 0:l.textContent)||"").trim(),T=p?p.split(/\s+/).length:0,P=Math.max(1,Math.ceil(T/200)),B=document.getElementById("word-count-indicator"),O=document.getElementById("reading-time-indicator");return B&&(B.textContent=`${T} từ`),O&&(O.textContent=`${P} phút đọc`),N&&(N.innerHTML=`${P} phút để đọc`),`${P<10?"0":""}${P} phút để đọc`}n==null||n.addEventListener("input",p=>{A&&(A.textContent=p.target.value.trim()||"Chưa nhập tiêu đề...")}),c==null||c.addEventListener("change",p=>{Lt(p.target.value),k&&(k.textContent=p.target.value.toUpperCase())}),m==null||m.addEventListener("change",p=>{k&&(k.textContent=(p.target.value||(c==null?void 0:c.value)||"").toUpperCase())}),v==null||v.addEventListener("change",p=>{S&&(S.textContent=p.target.value)}),v&&S&&(S.textContent=v.value),f==null||f.addEventListener("input",p=>{I&&(I.textContent=p.target.value.trim()||"Nhập sapo để xem trước...")}),l==null||l.addEventListener("input",()=>{wt()});const xt=(p,T=null)=>{document.execCommand(p,!1,T),l==null||l.focus(),l==null||l.dispatchEvent(new Event("input"))};t.querySelectorAll(".toolbar-btn[data-cmd]").forEach(p=>{p.addEventListener("click",()=>{const T=p.dataset.cmd,P=p.dataset.val||null;if(T==="createLink"){const B=prompt("Nhập đường dẫn:");B&&xt(T,B)}else if(T==="insertBlockquote")Q(l,le());else if(T==="insertHTML-table"){const B=parseInt(prompt("Số hàng (bao gồm tiêu đề):","3"),10)||3,O=parseInt(prompt("Số cột:","3"),10)||3;Q(l,ce(B,O))}else xt(T,P)})});let X=null;const Ct=document.getElementById("btn-insert-inline-img"),Et=document.getElementById("btn-insert-image-row"),at=document.getElementById("inline-img-file-input"),rt=document.getElementById("image-row-file-input"),$t=p=>Promise.all(Array.from(p).map(T=>new Promise(P=>{const B=new FileReader;B.onload=O=>P(O.target.result),B.readAsDataURL(T)}))),zt=(p,T)=>{const P=p==null?void 0:p.querySelector(".post-image-row-items");if(!P)return;const B=document.createElement("div");B.innerHTML=lt(T,"",{inRow:!0}),P.appendChild(B.firstElementChild),p==null||p.classList.remove("post-image-row-empty"),l==null||l.dispatchEvent(new Event("input"))},Xt=async(p,T)=>{if(!p||!(T!=null&&T.length))return;(await $t(T)).forEach(B=>zt(p,B))},Pt=p=>{if(!p)return;const T=new FileReader;T.onload=P=>{X?zt(X,P.target.result):Q(l,lt(P.target.result))},T.readAsDataURL(p)},Kt=async p=>{if(p!=null&&p.length){if(X){await Xt(X,p);return}if(p.length===1)Pt(p[0]);else{const T=await $t(p);Q(l,_t(T)),J(l,{isEditor:!0})}}},Qt=async p=>{if(!(p!=null&&p.length))return;const T=await $t(p);T.length===1?Q(l,lt(T[0])):Q(l,_t(T))};Ct==null||Ct.addEventListener("click",()=>{X=null,l==null||l.querySelectorAll(".post-image-row.is-selected").forEach(p=>p.classList.remove("is-selected")),at==null||at.click()}),Et==null||Et.addEventListener("click",()=>{Q(l,se());const p=l==null?void 0:l.querySelectorAll(".post-image-row");X=(p==null?void 0:p[p.length-1])||null,J(l,{isEditor:!0})}),at==null||at.addEventListener("change",p=>{Pt(p.target.files[0]),p.target.value=""}),rt==null||rt.addEventListener("change",p=>{Qt(p.target.files),p.target.value=""});const It=document.getElementById("btn-clear-format");It==null||It.addEventListener("click",()=>{document.execCommand("removeFormat",!1,null),document.execCommand("formatBlock",!1,"p"),l==null||l.focus(),l==null||l.dispatchEvent(new Event("input"))}),he(l,{onImageRowAdd:p=>{X=p,rt==null||rt.click()},onImageRowSelect:p=>{X=p},onChange:()=>l==null?void 0:l.dispatchEvent(new Event("input"))}),l&&!j&&J(l,{isEditor:!0}),wt(),l==null||l.addEventListener("paste",p=>{var ct,vt,ft,_,et;if((vt=(ct=p.target).closest)==null?void 0:vt.call(ct,".post-figcaption-zone")){p.preventDefault();const St=((ft=p.clipboardData)==null?void 0:ft.getData("text/plain"))||"";document.execCommand("insertText",!1,St);return}const P=Vt(p.clipboardData);if(P.length>0){p.preventDefault(),Kt(P);return}const B=(_=p.clipboardData)==null?void 0:_.getData("text/html");if(B){p.preventDefault();const St=de(B);Q(l,St),J(l,{isEditor:!0});return}const O=(et=p.clipboardData)==null?void 0:et.getData("text/plain");O&&(p.preventDefault(),document.execCommand("insertText",!1,O),l==null||l.dispatchEvent(new Event("input")))});const Z=document.getElementById("editor-write-tab"),tt=document.getElementById("editor-preview-tab"),kt=document.getElementById("editor-textarea-wrapper"),st=document.getElementById("editor-preview-wrapper");Z==null||Z.addEventListener("click",()=>{Z.classList.add("active"),tt==null||tt.classList.remove("active"),kt&&(kt.style.display="block"),st&&(st.style.display="none")}),tt==null||tt.addEventListener("click",()=>{if(tt.classList.add("active"),Z==null||Z.classList.remove("active"),kt&&(kt.style.display="none"),st){st.style.display="block";const p=(l==null?void 0:l.innerHTML)||"";st.innerHTML=p?Gt(p):'<p style="color:var(--text-muted); font-style:italic;">Chưa soạn thảo nội dung...</p>',J(st,{isEditor:!1})}}),(Nt=document.getElementById("btn-cancel-post-modal"))==null||Nt.addEventListener("click",()=>{R()}),$==null||$.addEventListener("click",()=>{const p=n==null?void 0:n.value.trim(),T=c==null?void 0:c.value,P=(m==null?void 0:m.value)||"",B=v==null?void 0:v.value,O=f==null?void 0:f.value.trim();l==null||l.innerHTML.trim(),J(l,{isEditor:!0});const ct=l==null?void 0:l.innerHTML.trim(),vt=u==null?void 0:u.checked;if(!p||!T||!B||!O||!ct){alert("Vui lòng điền đầy đủ thông tin bắt buộc (*).");return}$.disabled=!0,$.textContent="⏳ Đang xuất bản...",setTimeout(()=>{const ft=wt();if(d){const _=o.find(et=>et.id===d);_&&(_.title=p,_.category=T,_.subcategory=P,_.image=h,_.author=B,_.description=O,_.content=ct,_.featured=vt,_.readTime=ft),localStorage.setItem("toptech_articles",JSON.stringify(o))}else{const et=[{id:Date.now(),title:p,category:T,subcategory:P,image:h,author:B,date:"Vừa đăng",readTime:ft,views:0,comments:0,featured:vt,description:O,content:ct,commentsList:[]},...o];localStorage.setItem("toptech_articles",JSON.stringify(et)),o.splice(0,o.length,...et)}s(),$.style.backgroundColor="#10b981",$.style.borderColor="#10b981",$.innerHTML="✓ Lưu bài viết thành công!",setTimeout(()=>{R()},800)},800)})}function mt(){const n=y(),c=L(),m=b(),u=n.map(v=>{const f=c[v]||[],l=m[v]||"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400";return`
        <div class="category-manage-row" style="border: 1px solid var(--border-color); padding: 1.2rem; border-radius: 12px; background: var(--bg-surface); display: flex; flex-direction: column; gap: 1rem;" id="cat-manage-${v}">
          <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
            <img src="${l}" alt="${v}" style="width: 80px; height: 55px; object-fit: cover; border-radius: 8px; border: 1px solid var(--border-color);">
            <div style="flex: 1; min-width: 0;">
              <strong style="font-size: 1.15rem; color: var(--text-primary);">${v}</strong>
              <span style="font-size: 0.8rem; color: var(--text-muted); margin-left: 0.5rem;">(${f.length} chuyên mục con)</span>
            </div>
            <div style="display: flex; gap: 0.4rem;">
              <button class="edit-cat-btn" data-cat="${v}" style="background: var(--bg-surface-secondary); border: 1px solid var(--border-color); border-radius: 6px; padding: 0.4rem 0.8rem; font-size: 0.8rem; font-weight: 600; cursor: pointer; color: var(--text-secondary); display: inline-flex; align-items: center; gap: 0.2rem;">📝 Sửa</button>
              <button class="delete-cat-btn" data-cat="${v}" style="background: #ef44440d; border: 1px solid rgba(239,68,68,0.2); border-radius: 6px; padding: 0.4rem 0.8rem; font-size: 0.8rem; font-weight: 600; cursor: pointer; color: #ef4444; display: inline-flex; align-items: center; gap: 0.2rem;">❌ Xóa</button>
            </div>
          </div>
          
          <!-- Subcategories tags list -->
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
            ${f.map($=>`
              <span style="display: inline-flex; align-items: center; gap: 0.3rem; background: var(--bg-surface-secondary); border: 1px solid var(--border-color); border-radius: 20px; padding: 0.25rem 0.75rem; font-size: 0.8rem; font-weight: 500; color: var(--text-secondary);">
                ${$}
                <button class="delete-sub-btn" data-cat="${v}" data-sub="${$}" style="background:none; border:none; cursor:pointer; color: var(--text-muted); font-weight:bold; font-size: 0.9rem; padding: 0; display: inline-flex; align-items: center;">&times;</button>
              </span>
            `).join("")}
            ${f.length===0?'<span style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">Chưa có chuyên mục con.</span>':""}
          </div>

          <!-- Add inline Subcategory input -->
          <div style="display: flex; gap: 0.5rem; max-width: 320px; margin-top: 0.2rem;">
            <input type="text" placeholder="Thêm chuyên mục con..." class="inline-sub-input" data-cat="${v}" style="margin:0; padding: 0.5rem 0.8rem; font-size: 0.85rem; border-radius: 8px; border: 1px solid var(--border-color); width: 100%;">
            <button class="btn-add-subcategory" data-cat="${v}" style="background: var(--primary-color); border: none; color: #fff; border-radius: 8px; padding: 0.5rem 1rem; font-size: 1rem; cursor: pointer; font-weight: bold;">+</button>
          </div>
        </div>
      `}).join("");return`
      <div class="admin-categories-grid" style="margin-bottom: 2rem;">
        ${n.length===0?`
          <div style="text-align: center; padding: 3rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px; color: var(--text-muted); grid-column: 1 / -1;">
            Chưa có chuyên mục nào trong hệ thống.
          </div>
        `:u}
      </div>
    `}function pt(){var n;(n=document.getElementById("btn-add-category-modal"))==null||n.addEventListener("click",()=>{r=null,x(G(),"600px")}),t.querySelectorAll(".edit-cat-btn").forEach(c=>{c.addEventListener("click",()=>{r=c.dataset.cat,x(G(),"600px")})}),t.querySelectorAll(".delete-cat-btn").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.cat;if(confirm(`Xóa chuyên mục "${m}" sẽ xóa toàn bộ các chuyên mục con tương ứng. Tiếp tục?`)){let u=y().filter(l=>l!==m),v=L();delete v[m];let f=b();delete f[m],w(f),E(u),H(v),s(),V()}})}),t.querySelectorAll(".btn-add-subcategory").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.cat,u=t.querySelector(`.inline-sub-input[data-cat="${m}"]`),v=u==null?void 0:u.value.trim();if(!v){alert("Vui lòng nhập tên chuyên mục con.");return}let f=L();if(f[m]||(f[m]=[]),f[m].includes(v)){alert("Chuyên mục con này đã tồn tại trong chuyên mục chính!");return}f[m].push(v),H(f),V()})}),t.querySelectorAll(".delete-sub-btn").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.cat,u=c.dataset.sub;let v=L();v[m]&&(v[m]=v[m].filter(f=>f!==u),H(v),V())})})}function yt(){const n=document.getElementById("input-cat-name"),c=document.getElementById("btn-save-category"),m=document.getElementById("btn-cancel-category-modal");let u=r&&b()[r]||"";const v=document.getElementById("cat-thumbnail-media-control");W(v,f=>{u=f}),c==null||c.addEventListener("click",()=>{const f=n==null?void 0:n.value.trim();if(!f){alert("Vui lòng nhập tên chuyên mục.");return}let l=y(),$=L(),M=b();if(r){const k=l.indexOf(r);k!==-1&&(l[k]=f,$[r]&&($[f]=$[r],delete $[r]),u?M[f]=u:delete M[f],r!==f&&delete M[r],o.forEach(A=>{A.category===r&&(A.category=f)}),localStorage.setItem("toptech_articles",JSON.stringify(o))),r=null}else{if(l.includes(f)){alert("Chuyên mục đã tồn tại!");return}l.push(f),$[f]=[],u&&(M[f]=u)}E(l),H($),w(M),s(),R()}),m==null||m.addEventListener("click",()=>{R()})}function gt(){const n=z(),c=n.map(m=>`
      <div class="author-manage-row" style="display: flex; align-items: center; gap: 1.2rem; border: 1px solid var(--border-color); padding: 1.2rem; border-radius: 12px; background: var(--bg-surface);" id="author-manage-${m.name}">
        <img src="${m.avatar}" alt="${m.name}" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover; border: 2.5px solid var(--primary-color); flex-shrink: 0;">
        <div style="flex: 1; min-width: 0;">
          <strong style="color: var(--text-primary); font-size: 1.1rem;">${m.name}</strong>
          <div style="font-size: 0.85rem; color: var(--primary-color); font-weight: 600; margin-top: 0.1rem;">${m.role}</div>
          <div style="font-size: 0.85rem; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-top: 0.3rem; line-height: 1.4;">${m.desc}</div>
        </div>
        <div style="display: flex; gap: 0.4rem; flex-shrink: 0;">
          <button class="edit-author-btn" data-name="${m.name}" style="background: var(--bg-surface-secondary); border: 1px solid var(--border-color); border-radius: 6px; padding: 0.4rem 0.8rem; font-size: 0.8rem; font-weight: 600; cursor: pointer; color: var(--text-secondary); display: inline-flex; align-items: center; gap: 0.2rem;">📝 Sửa</button>
          <button class="delete-author-btn" data-name="${m.name}" style="background: #ef44440d; border: 1px solid rgba(239,68,68,0.2); border-radius: 6px; padding: 0.4rem 0.8rem; font-size: 0.8rem; font-weight: 600; cursor: pointer; color: #ef4444; display: inline-flex; align-items: center; gap: 0.2rem;">❌ Xóa</button>
        </div>
      </div>
    `).join("");return`
      <div class="admin-authors-grid" style="margin-bottom: 2rem;">
        ${n.length===0?`
          <div style="text-align: center; padding: 3rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px; color: var(--text-muted); grid-column: 1 / -1;">
            Chưa có tác giả nào trong hệ thống.
          </div>
        `:c}
      </div>
    `}function ut(){var n;(n=document.getElementById("btn-add-author-modal"))==null||n.addEventListener("click",()=>{i=null,x(K(),"600px")}),t.querySelectorAll(".edit-author-btn").forEach(c=>{c.addEventListener("click",()=>{i=c.dataset.name,x(K(),"600px")})}),t.querySelectorAll(".delete-author-btn").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.name;if(confirm(`Bạn có chắc chắn muốn xóa tác giả "${m}"?`)){let u=z().filter(v=>v.name!==m);C(u),s(),V()}})})}function bt(){const n=document.getElementById("input-author-name"),c=document.getElementById("input-author-role"),m=document.getElementById("input-author-desc"),u=document.getElementById("btn-save-author"),v=document.getElementById("btn-cancel-author-modal"),f=i?z().find(M=>M.name===i):null;let l=f?f.avatar:"";const $=document.getElementById("author-avatar-media-control");W($,M=>{l=M}),u==null||u.addEventListener("click",()=>{const M=n==null?void 0:n.value.trim(),k=c==null?void 0:c.value.trim(),A=m==null?void 0:m.value.trim();if(!M||!k||!l||!A){alert("Vui lòng điền đầy đủ các thông tin bắt buộc (*).");return}let I=z();if(i){const S=I.find(N=>N.name===i);S&&(S.role=k,S.avatar=l,S.desc=A),i=null}else{if(I.find(N=>N.name.toLowerCase()===M.toLowerCase())){alert("Tên tác giả đã tồn tại trong danh sách!");return}I.push({name:M,role:k,avatar:l,desc:A})}C(I),s(),R()}),v==null||v.addEventListener("click",()=>{R()})}V()}const ue={AI:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=600&h=400","Tin công nghệ":"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400","Chuyển đổi số":"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",Review:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600&h=400","Phần mềm":"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=600&h=400",IT:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400","Giải pháp công nghệ":"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400",Casestudy:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=400"};function ve(t,o,a){const s=localStorage.getItem("toptech_category_thumbnails"),e=s?JSON.parse(s):ue,d=a.map(h=>{const r=o.filter(g=>g.category===h).length,i=e[h]||"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400";return`
      <a href="#/chuyen-muc/${h}" class="category-list-card">
        <div class="category-list-img-wrapper">
          <img src="${i}" alt="${h}">
        </div>
        <div class="category-list-info">
          <h3 class="category-list-name">${h}</h3>
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
        ${d}
      </div>
    </div>
  `}const fe=[{name:"Phương Linh",role:"Content Writer",desc:"Ms. Phương Linh là cây bút cốt cán tại TopTech chuyên viết về Trí tuệ nhân tạo (AI), các dòng máy tính xách tay cấu hình cao cho lập trình và tin tức công nghệ nóng hổi nhất thế giới.",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Ngọc Thanh",role:"Content Writer",desc:"Ms. Ngọc Thanh chuyên phân tích và đánh giá chuyên sâu các thiết bị di động, smartphone thông minh, xe điện và các xu hướng phần cứng mới nhất.",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Lê Mạnh",role:"CEO & Founder",desc:"Mr. Lê Mạnh là nhà sáng lập kiêm Giám đốc điều hành của TopTech. Anh chia sẻ những định hướng phát triển chiến lược công nghệ và chuyển đổi số cho doanh nghiệp.",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Kim Phượng",role:"Content Writer",desc:"Ms. Kim Phượng đam mê nghiên cứu ứng dụng phần mềm văn phòng, công cụ năng suất hỗ trợ công việc và các casestudy chuyển đổi số thành công thực tế.",avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Trà My",role:"Software Developer",desc:"Ms. Trà My là kỹ sư phát triển phần mềm chuyên nghiệp. Cô chia sẻ các bài viết kỹ thuật sâu về cơ sở dữ liệu, Docker, quy trình CI/CD và bảo mật hệ thống.",avatar:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Khánh Nam",role:"Tech Lead",desc:"Mr. Khánh Nam có 8 năm kinh nghiệm trong lĩnh vực phát triển Frontend và các mô hình ngôn ngữ lớn (LLM). Anh viết về kinh nghiệm tối ưu hóa mã nguồn và công cụ IDE.",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Quốc Anh",role:"Hardware Expert",desc:"Mr. Quốc Anh là chuyên gia review phần cứng cao cấp và các dòng bàn phím cơ. Anh chia sẻ những cảm nhận chân thực sau thời gian dài sử dụng thiết bị.",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Minh Tâm",role:"Cloud Specialist",desc:"Ms. Minh Tâm là chuyên viên điện toán đám mây. Cô tập trung phân tích bài viết về giải pháp hạ tầng AWS, Azure, và các bước chuyển đổi số tối ưu chi phí cho startup.",avatar:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Hoàng Long",role:"Solutions Architect",desc:"Mr. Hoàng Long chuyên khảo sát thực tế và phân tích casestudy thành công hay thất bại của các tập đoàn công nghệ lớn khi xây dựng hệ thống dữ liệu khổng lồ.",avatar:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150"}],Wt=localStorage.getItem("toptech_authors"),ye=Wt?JSON.parse(Wt):fe,Ht={};ye.forEach(t=>{Ht[t.name]={avatar:t.avatar,role:t.role,desc:t.desc}});function be(t,o){const s=Array.from(new Set(o.map(e=>e.author).filter(Boolean))).map(e=>{const d=Ht[e]||{avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80&h=80",role:"Cộng tác viên"},h=o.filter(r=>r.author===e).length;return`
      <a href="#/tac-gia/${encodeURIComponent(e)}" class="author-list-card">
        <div class="author-list-avatar-wrapper">
          <img class="author-list-avatar" src="${d.avatar}" alt="${e}">
        </div>
        <h3 class="author-list-name">${e}</h3>
        <span class="author-list-role">${d.role}</span>
        <span class="author-list-count-badge">${h} bài viết</span>
      </a>
    `}).join("");t.innerHTML=`
    <div class="category-page-header" style="padding: 2.5rem 0; background: var(--bg-surface); border-bottom: 1px solid var(--border-color); text-align: center;">
      <div class="container">
        <h1 class="category-page-title" style="font-size: 2.5rem; font-weight: 900; margin: 0; text-transform: uppercase; color: var(--text-primary);">Đội ngũ tác giả</h1>
      </div>
    </div>
    
    <div class="container section-padding">
      <div class="authors-list-grid">
        ${s}
      </div>
    </div>
  `}function we(t,o,a){const s=Ht[o]||{avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80&h=80",role:"Cộng tác viên",desc:"Tác giả chia sẻ các bài viết kiến thức hữu ích tại TopTech."},e=a.filter(h=>h.author===o),d=e.length===0?`
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px;">
        <p style="color: var(--text-muted); font-size: 0.95rem;">Tác giả này chưa đăng tải bài viết nào.</p>
      </div>
    `:e.map(h=>`
      <article class="cat-article-card" style="margin-bottom: 2rem;">
        <div class="cat-card-img-wrapper">
          <img src="${D(h.image)}" alt="${h.title}">
          <a href="#/chuyen-muc/${h.subcategory||h.category}" class="cat-card-category">${h.subcategory||h.category}</a>
        </div>
        <div class="cat-card-content">
          <h3 class="cat-card-title"><a href="#/bai-viet/${h.id}">${h.title}</a></h3>
          <p class="cat-card-description">${h.description||"Chưa có mô tả chi tiết cho bài viết này. Nhấp vào để đọc bài viết..."}</p>
          
          <div class="post-meta" style="color: var(--text-muted); font-size: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 1rem; margin-top: auto; width: 100%; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
            <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
              <span class="post-author-name">${h.author}</span>
              <span class="meta-dot">&bull;</span>
              <span>${h.date}</span>
            </div>
            <div class="meta-right" style="display: flex; align-items: center; gap: 0.6rem; margin-left: auto;">
              <span style="display: flex; align-items: center; gap: 0.25rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${h.views}
              </span>
              <span style="display: flex; align-items: center; gap: 0.25rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${h.comments}
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
            <img class="author-profile-avatar" src="${s.avatar}" alt="${o}">
          </div>
          <div class="author-profile-info">
            <h1>${o}</h1>
            <div class="author-profile-role">${s.role}</div>
            <p class="author-profile-desc">${s.desc}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="container section-padding">
      <h2 style="font-size: 1.5rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--primary-color); margin-bottom: 2rem;">Bài viết đã đăng (${e.length})</h2>
      <div class="category-articles-grid" id="author-grid">
        ${d}
      </div>
    </div>
  `}const xe=[{id:1,title:"Top 20 công cụ AI tốt nhất năm 2026",category:"AI",image:"hero_robot.png",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",readTime:"02 phút để đọc",views:1357,comments:26,featured:!0,description:"Khám phá danh sách các công cụ Trí tuệ Nhân tạo đột phá nhất năm 2026, giúp tự động hóa công việc, tăng hiệu suất gấp 5 lần và tối ưu hóa quy trình làm việc của cá nhân cũng như doanh nghiệp."},{id:2,title:"Top 15 laptop cho lập trình viên chuyên nghiệp",category:"Tin công nghệ",image:"coding_laptop.png",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",readTime:"02 phút để đọc",views:1357,comments:26,featured:!0,description:"Đánh giá chi tiết top 15 dòng máy tính xách tay cấu hình cao, pin trâu và bàn phím gõ êm nhất dành riêng cho các kỹ sư phần mềm và lập trình viên chuyên nghiệp năm nay."},{id:3,title:"So sánh ưu điểm ChatGPT vs Claude vs Gemini năm nay",category:"AI",image:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:1357,comments:26,featured:!1},{id:4,title:"Mô hình ngôn ngữ lớn LLM đang thay đổi lập trình thế nào",category:"AI",image:"https://images.unsplash.com/photo-1684369175833-3d026dc6a066?auto=format&fit=crop&q=80&w=400&h=250",author:"Khánh Nam",authorTag:"#CTAD02",date:"1 ngày trước",views:945,comments:14,featured:!1},{id:5,title:"EUROPE IS PUSHING BACK ON WASHINGTON’S CHIP WAR",category:"AI",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=450",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:894,comments:15,description:`At high-stakes meetings with the White House, Anthropic's cofounder—a "weirdo," per one official—has been replaced by cofounder Tom Brown to lead negotiations on silicon sanctions.`},{id:6,title:"I Met With China’s Top AI Experts. They’re Freaking Out, Too",category:"AI",image:"https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:1102,comments:42,description:"The AI arms race between China and the US has researchers on both sides worried about a “Chernobyl moment” for automated systems."},{id:7,title:"Đánh giá chi tiết Keychron Q1 Pro sau 6 tháng sử dụng",category:"Review",image:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=400&h=250",author:"Quốc Anh",authorTag:"#CTAD03",date:"2 ngày trước",views:520,comments:9},{id:8,title:"A24 Knows You’re Mad About the Google AI Collab",category:"AI",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:932,comments:18},{id:9,title:"Meta tạm dừng chương trình theo dõi nhân viên sau sự cố rò rỉ dữ liệu",category:"Tin công nghệ",image:"https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:2405,comments:63},{id:10,title:"Chính phủ Mỹ yêu cầu nhân viên gỡ bỏ ứng dụng lạ trên điện thoại công vụ",category:"Tin công nghệ",image:"https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:3108,comments:72},{id:11,title:"Hành trình chuyển đổi số của doanh nghiệp bán lẻ Việt Nam",category:"Chuyển đổi số",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=250",author:"Minh Tâm",authorTag:"#CTAD04",date:"3 ngày trước",views:1823,comments:29},{id:12,title:"Chiến lược tối ưu hóa hạ tầng đám mây cho startup năm 2026",category:"Chuyển đổi số",image:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=400&h=250",author:"Minh Tâm",authorTag:"#CTAD04",date:"4 ngày trước",views:1245,comments:11},{id:13,title:"Đánh giá chi tiết màn hình Dell UltraSharp U2723QE 4K",category:"Review",image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400&h=250",author:"Quốc Anh",authorTag:"#CTAD03",date:"5 ngày trước",views:890,comments:15},{id:14,title:"VS Code vs WebStorm: IDE nào tốt hơn cho lập trình Frontend",category:"Phần mềm",image:"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=400&h=250",author:"Khánh Nam",authorTag:"#CTAD02",date:"1 tuần trước",views:3105,comments:54},{id:15,title:"Xây dựng hệ thống CI/CD hoàn chỉnh với Docker và GitHub Actions",category:"IT",image:"https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=400&h=250",author:"Trà My",authorTag:"#CTAD05",date:"1 tuần trước",views:2200,comments:31},{id:16,title:"Bảo mật API trong kiến trúc Microservices thế nào cho đúng",category:"IT",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400&h=250",author:"Trà My",authorTag:"#CTAD05",date:"1 tuần trước",views:1780,comments:19},{id:17,title:"Ứng dụng AI tổng hợp để tăng năng suất cho doanh nghiệp",category:"Giải pháp công nghệ",image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&h=250",author:"Hoàng Long",authorTag:"#CTAD06",date:"2 tuần trước",views:1450,comments:22},{id:18,title:"Casestudy: Uber đã di chuyển hạ tầng dữ liệu khổng lồ thế nào",category:"Casestudy",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400&h=250",author:"Hoàng Long",authorTag:"#CTAD06",date:"3 tuần trước",views:2900,comments:48}];let F=[];function Bt(){const t=localStorage.getItem("toptech_articles");t?F=JSON.parse(t):(F=xe,localStorage.setItem("toptech_articles",JSON.stringify(F)))}Bt();let nt=[];function Ut(){const t=localStorage.getItem("toptech_categories");t?nt=JSON.parse(t):(nt=["Tin công nghệ","AI","Chuyển đổi số","Review","Phần mềm","IT","Giải pháp công nghệ","Casestudy"],localStorage.setItem("toptech_categories",JSON.stringify(nt)))}Ut();function Ft(){Bt(),Ut();const t=document.getElementById("app-content");if(!t)return;t.cleanup&&(t.cleanup(),t.cleanup=null);const o=window.location.hash||"#/",a=document.getElementById("app-header"),s=document.getElementById("app-footer");if(o==="#/admin"||o.startsWith("#/admin")?(a&&(a.style.display="none"),s&&(s.style.display="none")):(a&&(a.style.display="block"),s&&(s.style.display="block")),Zt(o),o.startsWith("#/ #")){const e=o.split("#")[2];jt(t,F,nt),setTimeout(()=>{const d=document.getElementById(e);d&&d.scrollIntoView({behavior:"smooth"})},100);return}if(o==="#/"||o==="")jt(t,F,nt);else if(o==="#/tat-ca-chuyen-muc")ve(t,F,nt);else if(o==="#/tat-ca-tac-gia")be(t,F);else if(o.startsWith("#/tac-gia/")){const e=decodeURIComponent(o.replace("#/tac-gia/",""));we(t,e,F)}else if(o.startsWith("#/chuyen-muc/")){const e=o.replace("#/chuyen-muc/","");Dt(t,e,F,!1)}else if(o.startsWith("#/tim-kiem/")){const e=o.replace("#/tim-kiem/","");Dt(t,e,F,!0)}else if(o.startsWith("#/bai-viet/")){const e=o.replace("#/bai-viet/","");me(t,e,F)}else o==="#/admin"||o.startsWith("#/admin")?qt(t,F,nt,()=>{Bt()}):window.location.hash="#/";o.startsWith("#/ #")||window.scrollTo(0,0)}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("app-header"),o=document.getElementById("app-footer");t&&Jt(t),o&&te(o),Yt(a=>{window.location.hash=`#/tim-kiem/${encodeURIComponent(a)}`}),window.addEventListener("hashchange",Ft),Ft()});
