(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();function z(e){return!e||e.startsWith("http")||e.startsWith("data:")?e:`/TopTech-Blog/${e.replace(/^\//,"")}`}function Et(e){e.innerHTML=`
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
          
          <!-- Admin write shortcut moved here -->
          <a href="#/admin" class="write-post-btn" title="Cổng quản trị blog">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px;"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            <span class="desktop-only" style="margin-left: 0.3rem;">Viết bài</span>
          </a>

          <ul class="nav-links desktop-only">
            <li><a href="#/" class="nav-home-link active">Trang chủ</a></li>
            <li><a href="#/" class="nav-blog-link">Blog</a></li>
          </ul>
        </div>

        <!-- Center: Logo -->
        <a href="#/" class="logo">
          <img class="logo-img" src="${z("/logo-toptech-color.svg")}" alt="TopTech Logo">
        </a>

        <!-- Right: Desktop Links & Actions -->
        <div class="header-actions">
          <ul class="nav-links desktop-only" style="margin-right: 0.5rem;">
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
  `}function It(e){const i=document.getElementById("theme-toggle"),l=document.getElementById("menu-toggle"),a=document.getElementById("mega-menu"),t=document.getElementById("mega-menu-close"),r=document.getElementById("mega-menu-backdrop"),s=document.getElementById("search-trigger"),o=document.getElementById("search-overlay"),n=document.getElementById("search-close"),y=document.getElementById("search-input"),E=document.querySelectorAll(".nav-chuyen-muc-trigger");function H(){const v=document.querySelector(".sun-icon"),k=document.querySelector(".moon-icon");!v||!k||(document.body.classList.contains("dark")?(v.style.display="block",k.style.display="none"):(v.style.display="none",k.style.display="block"))}(localStorage.getItem("theme")||"light")==="dark"?document.body.classList.add("dark"):document.body.classList.remove("dark"),H(),i&&i.addEventListener("click",()=>{document.body.classList.contains("dark")?(document.body.classList.remove("dark"),localStorage.setItem("theme","light")):(document.body.classList.add("dark"),localStorage.setItem("theme","dark")),H()});const N=()=>a==null?void 0:a.classList.add("active"),x=()=>a==null?void 0:a.classList.remove("active");l==null||l.addEventListener("click",N),E.forEach(v=>v.addEventListener("click",N)),t==null||t.addEventListener("click",x),r==null||r.addEventListener("click",x);const I=a==null?void 0:a.querySelectorAll("a");I==null||I.forEach(v=>v.addEventListener("click",x)),s&&o&&s.addEventListener("click",()=>{o.classList.add("active"),setTimeout(()=>y==null?void 0:y.focus(),100)});const P=()=>{o==null||o.classList.remove("active"),y&&(y.value="")};n==null||n.addEventListener("click",P),o==null||o.addEventListener("click",v=>{v.target===o&&P()}),y==null||y.addEventListener("keydown",v=>{if(v.key==="Enter"&&e){const k=y.value.trim();k&&(P(),e(k))}})}function St(e){const i=document.querySelector(".nav-home-link"),l=document.querySelector(".nav-blog-link"),a=document.querySelector(".write-post-btn"),t=document.querySelector(".nav-chuyen-muc-link"),r=document.querySelector(".nav-tac-gia-link");i==null||i.classList.remove("active"),l==null||l.classList.remove("active"),a==null||a.classList.remove("active"),t==null||t.classList.remove("active"),r==null||r.classList.remove("active"),e==="#/"||e===""||e.startsWith("#/ #")?i==null||i.classList.add("active"):e.startsWith("#/tat-ca-chuyen-muc")||e.startsWith("#/chuyen-muc/")?t==null||t.classList.add("active"):e.startsWith("#/tat-ca-tac-gia")||e.startsWith("#/tac-gia/")?r==null||r.classList.add("active"):e.startsWith("#/blog")||e.includes("bai-viet")?l==null||l.classList.add("active"):e.startsWith("#/admin")&&(a==null||a.classList.add("active"))}function Mt(e){e.innerHTML=`
    <footer>
      <div class="container footer-container">
        <!-- Top part: Logo & Description (Row Layout) -->
        <div class="footer-top-row">
          <a href="#/" class="logo">
            <img class="logo-img-footer" src="${z("/logo-toptech-monochrome.svg")}" alt="TopTech Logo Đơn Sắc">
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
  `}function wt(e,i,l){e.innerHTML=`
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
  `;let a=0;function t(o){const n=i[o%i.length],y=[i[(o+1)%i.length],i[(o+2)%i.length],i[(o+3)%i.length],i[(o+4)%i.length]],E=document.getElementById("hero-left-container");n&&E&&(E.innerHTML=`
        <img src="${z(n.image)}" alt="${n.title}">
        <div class="featured-big-overlay"></div>
        <div class="featured-big-content">
          <a href="#/chuyen-muc/${n.category}" class="featured-big-tag">${n.category}</a>
          <h3 class="featured-big-title"><a href="#/bai-viet/${n.id}">${n.title}</a></h3>
          <div class="post-meta post-detail-meta">
            <div class="post-author">
              <span>${n.author}</span>
            </div>
            <span class="meta-dot">&bull;&nbsp;</span><span>${n.date}</span>
            <span class="meta-dot">&bull;&nbsp;</span><span>${n.readTime||"02 phút để đọc"}</span>
            <span style="margin-left: auto; display: flex; align-items: center; gap: 0.3rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${n.views}
            </span>
            <span style="display: flex; align-items: center; gap: 0.3rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${n.comments}
            </span>
          </div>
        </div>
      `);const H=document.getElementById("hero-side-container");H&&(H.innerHTML=y.filter(Boolean).map(q=>`
        <div class="side-post-card">
          <img class="side-post-img" src="${z(q.image)}" alt="${q.title}">
          <div class="side-post-info">
            <h4 class="side-post-title"><a href="#/bai-viet/${q.id}">${q.title}</a></h4>
            <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem; display: flex; justify-content: space-between; align-items: center; width: 100%;">
              <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
                <span>${q.author}</span>
                <span class="meta-dot">&bull;</span>
                <span>${q.date}</span>
              </div>
              <div class="meta-right" style="display: flex; align-items: center; gap: 0.6rem; margin-left: auto;">
                <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${q.views}</span>
                <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${q.comments}</span>
              </div>
            </div>
          </div>
        </div>
      `).join(""))}t(a);const r=setInterval(()=>{a=(a+1)%i.length;const o=document.getElementById("hero-left-container"),n=document.getElementById("hero-side-container");o&&n&&(o.style.opacity="0.1",n.style.opacity="0.1",setTimeout(()=>{t(a),o.style.opacity="1",n.style.opacity="1"},300))},5e3),s=document.getElementById("hero-small-grid-container");if(s){const o=i.slice(5,9);s.innerHTML=o.map(n=>`
      <div class="small-post-card">
        <div class="small-post-img-wrapper">
          <img src="${z(n.image)}" alt="${n.title}">
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
    `).join("")}At(i),Bt(i),qt(i,l),Ht(i),e.cleanup=()=>{clearInterval(r)}}function At(e){const i=document.getElementById("featured-numbers-container");if(!i)return;const l=e.filter(t=>t.featured)[0]||e.find(t=>t.id===1),a=e.filter(t=>t.id!==(l==null?void 0:l.id)).slice(0,6);i.innerHTML=a.map((t,r)=>`
    <div class="number-post-card">
      <span class="post-number">#${r+1}</span>
      <div class="number-post-img-wrapper">
        <img src="${z(t.image)}" alt="${t.title}">
      </div>
      <div class="number-post-info">
        <h4 class="number-post-title"><a href="#/bai-viet/${t.id}">${t.title}</a></h4>
        <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem; display: flex; justify-content: space-between; align-items: center; width: 100%;">
          <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
            <span>${t.author}</span>
            <span class="meta-dot">&bull;</span>
            <span>${t.date}</span>
          </div>
          <div class="meta-right" style="display: flex; align-items: center; gap: 0.6rem; margin-left: auto;">
            <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${t.views}</span>
            <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${t.comments}</span>
          </div>
        </div>
      </div>
    </div>
  `).join("")}function Bt(e){const i=document.getElementById("new-updates-content"),l=document.getElementById("col-center-ai"),a=document.getElementById("trending-content"),t=document.getElementById("reviews-content");if(i){const r=e[0]||e.find(n=>n.id===3),s=e[1]||e.find(n=>n.id===4),o=e[2]||e.find(n=>n.id===7);i.innerHTML=[r,s,o].filter(Boolean).map(n=>`
      <div class="post-card-mini">
        <img class="post-card-mini-img" src="${z(n.image)}" alt="${n.title}">
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
    `).join("")}if(l){const r=e.filter(y=>y.category==="AI"),s=r[0]||e.find(y=>y.id===5),o=r[1]||e.find(y=>y.id===6),n=r[2]||e.find(y=>y.id===8);l.innerHTML=`
      <!-- Main Center Post -->
      <div class="center-main-post">
        <a href="#/chuyen-muc/${s.category}" class="center-main-tag">${s.category}</a>
        <h4 class="center-main-title"><a href="#/bai-viet/${s.id}">${s.title}</a></h4>
        <div class="post-meta post-detail-meta" style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.2rem;">
          <span>${s.author} <span class="meta-dot">&bull;&nbsp;</span>${s.date}</span>
        </div>
        <div class="center-main-img-wrapper">
          <img src="${z(s.image)}" alt="${s.title}">
        </div>
      </div>

      <!-- Sub grid (2 cards side by side) -->
      <div class="center-sub-row">
        <!-- Sub Left -->
        <div class="center-sub-card">
          <a href="#/chuyen-muc/${o.category}" class="post-card-mini-tag" style="font-size: 0.65rem;">${o.category}</a>
          <h5 class="center-sub-title"><a href="#/bai-viet/${o.id}">${o.title}</a></h5>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${o.author}</span>
        </div>

        <!-- Sub Right -->
        <div class="center-sub-card">
          <a href="#/chuyen-muc/${n.category}" class="post-card-mini-tag" style="font-size: 0.65rem;">${n.category}</a>
          <h5 class="center-sub-title"><a href="#/bai-viet/${n.id}">${n.title}</a></h5>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${n.author}</span>
        </div>
      </div>
    `}if(a){const r=[...e].sort((s,o)=>(o.views||0)-(s.views||0)).slice(0,5);a.innerHTML=r.map(s=>`
      <div class="trending-post-card">
        <h4 class="trending-post-title"><a href="#/bai-viet/${s.id}">${s.title}</a></h4>
        <div class="post-meta" style="font-size: 0.7rem; color: var(--text-muted);">
          <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
            <span>${s.author}</span>
            <span class="meta-dot">&bull;</span>
            <span>${s.date}</span>
          </div>
        </div>
      </div>
    `).join("")}if(t){const r=e.filter(n=>n.category==="Review"),s=e.filter(n=>n.category!=="Review"),o=[...r,...s].slice(0,4);t.innerHTML=o.map(n=>`
      <div class="review-post-card">
        <div class="review-post-img-wrapper">
          <img src="${z(n.image)}" alt="${n.title}">
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
    `).join("")}}function qt(e,i){const l=document.getElementById("category-columns-container");l&&(l.innerHTML=i.map((a,t)=>{const r=e.filter(o=>o.category===a),s=[];for(let o=0;o<4;o++)s.push(r[o%r.length]||e[(t*2+o)%e.length]);return`
      <div class="category-column">
        <div class="category-header-wrapper">
          <a href="#/chuyen-muc/${a}" class="category-title-header">${a}</a>
        </div>
        <div class="split-col" style="gap: 1rem;">
          ${s.map((o,n)=>`
            <div class="cat-post-card ${n===0?"has-image":""}">
              <div class="cat-post-img-wrapper">
                <img src="${z(o.image)}" alt="${o.title}">
              </div>
              <div class="cat-post-text-wrapper">
                <h4 class="cat-post-title"><a href="#/bai-viet/${o.id}">${o.title}</a></h4>
                <span style="font-size: 0.7rem; color: var(--text-muted);">${o.date}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `}).join(""))}function Ht(e){const i=document.getElementById("refresh-new-updates"),l=document.getElementById("new-updates-content");i&&i.addEventListener("click",()=>{i.classList.add("spinning"),setTimeout(()=>{i.classList.remove("spinning");const a=[...e].filter(o=>o.id!==5&&o.id!==6).sort(()=>.5-Math.random()),t=a[0],r=a[1],s=a[2];l&&(l.innerHTML=[t,r,s].map(o=>`
            <div class="post-card-mini">
              <img class="post-card-mini-img" src="${z(o.image||"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=250")}" alt="${o.title}">
              <div class="post-card-mini-info">
                <a href="#/chuyen-muc/${o.category}" class="post-card-mini-tag">${o.category}</a>
                <h4 class="post-card-mini-title"><a href="#/bai-viet/${o.id}">${o.title}</a></h4>
                <div class="post-meta" style="font-size: 0.7rem; color: var(--text-muted);">
                  <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
                    <span>${o.author}</span>
                    <span class="meta-dot">&bull;</span>
                    <span>${o.date}</span>
                  </div>
                </div>
              </div>
            </div>
          `).join(""))},600)})}const Pt={"Tin công nghệ":["Điện thoại","Máy tính","Thiết bị thông minh","Xe điện"],AI:["Machine Learning","Generative AI","ChatGPT & LLMs","Thị giác máy tính"],"Chuyển đổi số":["Doanh nghiệp","Giải pháp đám mây","IoT & Automation","Bảo mật dữ liệu"],Review:["Đánh giá Laptop","Đánh giá Smartphone","Đồ công nghệ khác","Trải nghiệm dịch vụ"],"Phần mềm":["Công cụ lập trình","Phần mềm văn phòng","Hệ điều hành","Ứng dụng di động"],IT:["Lập trình","Quản trị mạng","Cơ sở dữ liệu","DevOps"],"Giải pháp công nghệ":["AI cho doanh nghiệp","Tự động hóa quy trình","Hạ tầng số","ERP & CRM"],Casestudy:["Thành công tiêu biểu","Phân tích thất bại","Khảo sát thực tế"]},xt=localStorage.getItem("toptech_subcategories"),gt=xt?JSON.parse(xt):Pt,mt={};for(const e in gt)gt[e].forEach(i=>{mt[i]=e});function kt(e,i,l,a=!1){const t=decodeURIComponent(i);let r=[],s=mt[t],o=!!s;a?r=l.filter(x=>x.title.toLowerCase().includes(t.toLowerCase())||x.category.toLowerCase().includes(t.toLowerCase())||x.subcategory&&x.subcategory.toLowerCase().includes(t.toLowerCase())||x.description&&x.description.toLowerCase().includes(t.toLowerCase())):o?r=l.filter(x=>x.subcategory&&x.subcategory.toLowerCase()===t.toLowerCase()||x.category.toLowerCase()===t.toLowerCase()):r=l.filter(x=>x.category.toLowerCase()===t.toLowerCase()||x.subcategory&&mt[x.subcategory]&&mt[x.subcategory].toLowerCase()===t.toLowerCase());let n="newest",y=6,E="";if(a)E=`
      <span class="category-eyebrow" style="font-size: 0.95rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--primary-color); display: block; margin-bottom: 0.5rem;">KẾT QUẢ TÌM KIẾM</span>
      <h1 class="category-page-title search-title" style="font-weight: 850; text-transform: uppercase; margin: 0; color: var(--text-primary);">"${t.toUpperCase()}"</h1>
    `;else{const x=o?s:t,I=gt[x]||[];E=`
      <!-- Left: Major category title -->
      <div>
        <h1 class="category-page-title" style="font-weight: 850; text-transform: uppercase; margin: 0; line-height: 1.1; color: var(--text-primary);">
          <a href="#/chuyen-muc/${x}" style="color: inherit; text-decoration: none;">${x.toUpperCase()}</a>
        </h1>
      </div>
      
      <!-- Right: Capsule subcategory tag pills list -->
      <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: center;">
        ${I.map(P=>{const v=t.toLowerCase()===P.toLowerCase();return`
            <a href="#/chuyen-muc/${P}" style="display: inline-block; padding: 0.45rem 1.1rem; font-size: 0.82rem; font-weight: 600; border-radius: 50px; text-decoration: none; border: 1.5px solid ${v?"var(--primary-color)":"var(--border-color)"}; background-color: ${v?"var(--primary-color)":"var(--bg-main)"}; color: ${v?"#fff":"var(--text-secondary)"}; transition: all var(--transition-fast);" class="subcat-pill ${v?"active-pill":""}">
              ${P}
            </a>
          `}).join("")}
      </div>
    `}e.innerHTML=`
    <div class="category-page-header" style="padding: 2.5rem 0; background: var(--bg-surface); border-bottom: 1px solid var(--border-color); transition: background-color var(--transition-normal), border-color var(--transition-normal);">
      <div class="container category-header-content ${a?"search-mode":""}">
        ${E}
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
  `;function H(){const x=document.getElementById("category-grid");if(!x)return;let I=[...r];n==="newest"?I.sort((k,F)=>F.id-k.id):n==="views"?I.sort((k,F)=>F.views-k.views):n==="comments"&&I.sort((k,F)=>F.comments-k.comments);const P=I.slice(0,y);x.innerHTML=P.length===0?`
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px; transition: background-color var(--transition-normal), border-color var(--transition-normal);">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted); margin-bottom: 1rem;"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-primary);">Chưa có bài viết</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 400px; margin: 0 auto;">Chưa có bài viết nào thuộc chuyên mục này. Quản trị viên có thể đăng nhập vào trang Viết bài để cập nhật bài viết mới!</p>
        </div>
      `:P.map(k=>`
      <article class="cat-article-card">
        <div class="cat-card-img-wrapper">
          <img src="${z(k.image)}" alt="${k.title}">
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
    `).join("");const v=document.getElementById("load-more-container");v&&(I.length>y?v.style.display="block":v.style.display="none")}H();const q=document.getElementById("load-more-articles-btn");q&&q.addEventListener("click",()=>{y+=6,H()});const N=document.getElementById("filter-select");N&&N.addEventListener("change",x=>{n=x.target.value,y=6,H()})}typeof window<"u"&&"speechSynthesis"in window&&(window.speechSynthesis.getVoices(),"onvoiceschanged"in window.speechSynthesis&&(window.speechSynthesis.onvoiceschanged=()=>{window.speechSynthesis.getVoices()}));function jt(e){if(!e)return"";if(e.trim().startsWith("<")||e.includes("</p>")||e.includes("</div>")||e.includes("</td>")||e.includes("</figure>"))return e;const i=e.split(`
`);let l=!1,a="",t=[];for(let s=0;s<i.length;s++){let o=i[s].trim();if(o.startsWith("|")&&o.endsWith("|")){l||(l=!0,a='<div class="table-responsive"><table class="post-detail-table">');const n=o.split("|").slice(1,-1).map(E=>E.trim());if(n.every(E=>/^:?-+:?$/.test(E)))continue;a.includes('<table class="post-detail-table">')&&!a.includes("<thead>")&&!a.includes("<tbody>")?a+="<thead><tr>"+n.map(E=>`<th>${E}</th>`).join("")+"</tr></thead><tbody>":a+="<tr>"+n.map(E=>`<td>${E}</td>`).join("")+"</tr>"}else l&&(l=!1,a+="</tbody></table></div>",t.push(a),a=""),t.push(i[s])}l&&(a+="</tbody></table></div>",t.push(a)),e=t.join(`
`);let r=e.replace(/^### (.*$)/gim,'<h3 class="post-subheading-3">$1</h3>').replace(/^## (.*$)/gim,'<h2 class="post-subheading-2">$1</h2>').replace(/^# (.*$)/gim,'<h1 class="post-heading-1">$1</h1>').replace(/\!\[(.*?)\]\((.*?)\)/g,'<figure class="post-inline-figure"><img src="$2" alt="$1"><figcaption class="post-figcaption">$1</figcaption></figure>').replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/^\> (.*$)/gim,'<blockquote class="post-blockquote">$1</blockquote>').replace(/^\- (.*$)/gim,"<li>$1</li>").replace(/\`\`\`([\s\S]*?)\`\`\`/g,'<pre class="post-code-block"><code>$1</code></pre>').replace(/\`(.*?)\`/g,'<code class="post-inline-code">$1</code>').replace(/\n\n/g,"</p><p>");return r=r.replace(/(<li>.*<\/li>)/gim,"<ul>$1</ul>"),`<p>${r}</p>`}function zt(e,i,l){const a=parseInt(i,10),t=l.find(p=>p.id===a)||l[0];t.views+=1,localStorage.setItem("toptech_articles",JSON.stringify(l));const r=l.filter(p=>p.category===t.category&&p.id!==t.id).slice(0,4);t.commentsList||(t.commentsList=[{id:1,author:"Nguyễn Văn Hùng",date:"2 ngày trước",content:"Bài viết rất chi tiết và dễ hiểu! Tôi đang tìm hiểu về vấn đề này và thấy thông tin cực kỳ hữu ích cho công việc thực tế của mình.",avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=80&h=80"},{id:2,author:"Lê Minh Hạnh",date:"1 ngày trước",content:"TopTech chia sẻ kiến thức chuẩn quá, thiết kế giao diện bài viết đọc rất sướng mắt. Mong nhóm tác giả ra thêm nhiều bài viết sâu hơn nữa!",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80&h=80"}]),e.innerHTML=`
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
              <a href="#/chuyen-muc/${t.category}">${t.category}</a>
              ${t.subcategory?`
                <span class="breadcrumb-separator">&gt;</span> 
                <span class="breadcrumb-current">${t.subcategory}</span>
              `:""}
            </div>

            <h1 class="post-detail-title">${t.title}</h1>
            
            <div class="post-meta post-detail-meta" style="font-size: 0.8em; color: var(--text-muted); border-bottom: 1px solid var(--border-color); padding-bottom: 1.5rem; margin-bottom: 2rem; display: flex; align-items: center; flex-wrap: wrap; gap: 0.8rem;">
              <div class="post-author" style="display: flex; align-items: center; gap: 0.3rem;">
                <span>Tác giả: <strong>${t.author}</strong></span>
              </div>
              <span class="meta-dot">&bull;&nbsp;</span><span>${t.date}</span>
              <span class="meta-dot">&bull;&nbsp;</span><span>${t.readTime}</span>
              
              ${sessionStorage.getItem("toptech_admin_logged_in")==="true"?`
                <span class="meta-dot">&bull;&nbsp;</span>
                <button id="quick-edit-post-btn" style="background-color: var(--primary-color); color: #fff; border: 1px solid var(--primary-color); border-radius: 4px; padding: 0.2rem 0.5rem; font-size: 0.75rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 0.2rem;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                  Sửa bài
                </button>
              `:""}

              <span style="margin-left: auto; display: flex; align-items: center; gap: 0.3rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${t.views} lượt xem
              </span>
            </div>
          </div>

          <!-- Feature Image -->
          <div class="post-detail-img-wrapper">
            <img src="${z(t.image)}" alt="${t.title}">
          </div>

          <!-- Rich Text Content Body -->
          <div class="post-detail-body">
            ${t.content?`
              <p class="post-lead">${t.description||""}</p>
              ${jt(t.content)}
            `:`
              <p class="post-lead">${t.description||"Bài viết phân tích chuyên sâu về xu hướng công nghệ mới, hướng dẫn thực hành và đưa ra các giải pháp chuyển đổi số tối ưu hiệu suất cho doanh nghiệp."}</p>
              
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
            <h3 class="comments-title">Bình luận (<span id="comments-count">${t.commentsList.length}</span>)</h3>
            
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
              ${r.length>0?r.map(p=>`
                <div class="related-post-card">
                  <div class="related-img-wrapper">
                    <img src="${z(p.image)}" alt="${p.title}">
                  </div>
                  <div class="related-post-info">
                    <h5 class="related-title"><a href="#/bai-viet/${p.id}">${p.title}</a></h5>
                    <span class="related-meta"><a href="#/chuyen-muc/${p.subcategory||p.category}" style="color: inherit; font-weight: 600;">${p.subcategory||p.category}</a> <span class="meta-dot">&bull;&nbsp;</span>${p.date}</span>
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
  `;function s(){const p=document.getElementById("comments-list");if(!p)return;p.innerHTML=t.commentsList.map(L=>`
      <div class="comment-item">
        <div class="comment-content">
          <div class="comment-header">
            <span class="comment-author">${L.author}</span>
            <span class="comment-date">${L.date}</span>
          </div>
          <p class="comment-text-p">${L.content}</p>
        </div>
      </div>
    `).join("");const b=document.getElementById("comments-count");b&&(b.textContent=t.commentsList.length)}s();const o=document.getElementById("submit-comment-btn");o&&o.addEventListener("click",()=>{const p=document.getElementById("comment-author-name"),b=document.getElementById("comment-text"),L=p==null?void 0:p.value.trim(),A=b==null?void 0:b.value.trim();if(!L||!A){alert("Vui lòng điền đầy đủ Tên và Nội dung bình luận.");return}const _={id:Date.now(),author:L,date:"Vừa xong",content:A,avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80&h=80"};t.commentsList.unshift(_),t.comments=t.commentsList.length,localStorage.setItem("toptech_articles",JSON.stringify(l)),p&&(p.value=""),b&&(b.value=""),s()});const n=()=>{const p=document.getElementById("reading-bar");if(!p)return;const b=window.scrollY||document.documentElement.scrollTop,L=document.documentElement.scrollHeight-document.documentElement.clientHeight;if(L>0){const A=b/L*100;p.style.width=A+"%"}};window.addEventListener("scroll",n),e.cleanup=()=>{window.removeEventListener("scroll",n)};const y=e.querySelectorAll(".post-detail-body h2"),E=document.getElementById("post-toc-container"),H=document.getElementById("toc-list"),q=document.getElementById("mobile-toc-list");if(y.length>0){e.classList.add("has-toc"),y.forEach((D,w)=>{const j=`toc-section-${w}`;D.id=j}),E&&H&&(E.style.display="block",H.innerHTML=Array.from(y).map((D,w)=>{const j=D.textContent.trim();return`<li><a href="javascript:void(0)" data-target="toc-section-${w}" class="toc-link">${j}</a></li>`}).join("")),q&&(q.innerHTML=Array.from(y).map((D,w)=>{const j=D.textContent.trim();return`<li><a href="javascript:void(0)" data-target="toc-section-${w}" class="mobile-toc-link">${j}</a></li>`}).join(""));const p=e.querySelectorAll(".toc-link"),b=e.querySelectorAll(".mobile-toc-link"),L=D=>{D.forEach(w=>{w.addEventListener("click",j=>{var G;j.preventDefault();const Y=w.dataset.target,K=document.getElementById(Y);if(K){const it=K.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:it,behavior:"smooth"}),D.forEach(dt=>dt.classList.remove("active")),w.classList.add("active"),(G=document.getElementById("mobile-toc-panel"))==null||G.classList.remove("active")}})})};L(p),L(b);const A=document.getElementById("mobile-toc-toggle"),_=document.getElementById("mobile-toc-panel"),O=document.getElementById("mobile-toc-close"),lt=()=>{_==null||_.classList.toggle("active")},st=()=>{_==null||_.classList.remove("active")};A==null||A.addEventListener("click",lt),O==null||O.addEventListener("click",st);const et=D=>{_!=null&&_.classList.contains("active")&&!_.contains(D.target)&&!A.contains(D.target)&&st()};document.addEventListener("click",et);const at=()=>{const D=window.scrollY||document.documentElement.scrollTop;let w=-1;y.forEach((Y,K)=>{Y.offsetTop-110<=D&&(w=K)});const j=Y=>{Y.forEach((K,G)=>{G===w?K.classList.add("active"):K.classList.remove("active")})};j(p),j(b)};window.addEventListener("scroll",at);const X=e.cleanup;e.cleanup=()=>{X&&X(),window.removeEventListener("scroll",at),document.removeEventListener("click",et)}}const N=document.getElementById("quick-edit-post-btn");N==null||N.addEventListener("click",()=>{sessionStorage.setItem("toptech_editing_article_id",t.id),window.location.hash="#/admin"});const x=e.querySelector(".post-detail-body");function I(p){const b=document.getElementById("post-toast");if(!b)return;const L=b.querySelector(".toast-message");L&&(L.textContent=p),b.classList.add("show"),b.timeoutId&&clearTimeout(b.timeoutId),b.timeoutId=setTimeout(()=>{b.classList.remove("show")},2500)}let P=!1,v=!1,k=null,F=0;const M=document.getElementById("post-action-audio"),Q=M==null?void 0:M.querySelector(".audio-icon-play"),J=M==null?void 0:M.querySelector(".audio-icon-pause");function Z(){typeof responsiveVoice<"u"?responsiveVoice.cancel():"speechSynthesis"in window&&window.speechSynthesis.cancel(),P=!1,v=!1,M==null||M.classList.remove("active"),Q&&(Q.style.display="block"),J&&(J.style.display="none")}function ct(){if(!x)return;const p=`${t.title}. ${x.innerText.trim()}`;if(p)if(typeof responsiveVoice<"u"?responsiveVoice.cancel():"speechSynthesis"in window&&window.speechSynthesis.cancel(),P=!0,v=!1,M==null||M.classList.add("active"),Q&&(Q.style.display="none"),J&&(J.style.display="block"),typeof responsiveVoice<"u")I("Đang đọc: Giọng trực tuyến (ResponsiveVoice)"),responsiveVoice.speak(p,"Vietnamese Female",{rate:1.1,onend:Z,onerror:b=>{console.error("ResponsiveVoice Error:",b),Z()}});else if("speechSynthesis"in window){const b=window.speechSynthesis.getVoices();if(b.length===0&&F<3){F++,window.speechSynthesis.getVoices(),setTimeout(ct,250);return}F=0,k=new SpeechSynthesisUtterance(p),k.lang="vi-VN",k.rate=1.1;const L=b.find(A=>A.lang.toLowerCase().replace("_","-").includes("vi-vn")||A.lang.toLowerCase()==="vi"||A.name.toLowerCase().includes("viet")||A.name.toLowerCase().includes("việt"));L?(k.voice=L,I(`Đang đọc: Giọng hệ thống ${L.name}`)):I("Dùng giọng hệ thống mặc định (Hãy cài giọng tiếng Việt để đọc chuẩn)."),k.onend=()=>{Z()},k.onerror=A=>{console.error("Native TTS Error:",A),Z()},window.speechSynthesis.speak(k)}else I("Trình duyệt không hỗ trợ nghe đọc bài viết."),Z()}M==null||M.addEventListener("click",()=>{P?v?(typeof responsiveVoice<"u"?responsiveVoice.resume():"speechSynthesis"in window&&window.speechSynthesis.resume(),v=!1,M==null||M.classList.add("active"),Q&&(Q.style.display="none"),J&&(J.style.display="block")):(typeof responsiveVoice<"u"?responsiveVoice.pause():"speechSynthesis"in window&&window.speechSynthesis.pause(),v=!0,M==null||M.classList.remove("active"),Q&&(Q.style.display="block"),J&&(J.style.display="none")):ct()});const c=e.querySelector(".post-main-content");let d=parseInt(localStorage.getItem("toptech_post_font_size"),10)||18;function g(){c&&(c.style.fontSize=`${d}px`,localStorage.setItem("toptech_post_font_size",d))}g();const m=document.getElementById("post-action-font-inc"),f=document.getElementById("post-action-font-dec");m==null||m.addEventListener("click",()=>{d<26?(d+=2,g(),I(`Đã tăng cỡ chữ: ${d}px`)):I("Đã đạt cỡ chữ tối đa.")}),f==null||f.addEventListener("click",()=>{d>14?(d-=2,g(),I(`Đã giảm cỡ chữ: ${d}px`)):I("Đã đạt cỡ chữ tối thiểu.")});const T=document.getElementById("post-action-share");function u(){navigator.clipboard.writeText(window.location.href).then(()=>{I("Đã sao chép liên kết vào bộ nhớ tạm!")}).catch(()=>{const p=document.createElement("textarea");p.value=window.location.href,p.style.position="fixed",document.body.appendChild(p),p.select();try{document.execCommand("copy"),I("Đã sao chép liên kết vào bộ nhớ tạm!")}catch{I("Không thể sao chép liên kết.")}document.body.removeChild(p)})}T==null||T.addEventListener("click",()=>{const p={title:t.title,text:t.description||"",url:window.location.href};navigator.share&&navigator.canShare&&navigator.canShare(p)?navigator.share(p).then(()=>I("Chia sẻ bài viết thành công!")).catch(b=>{b.name!=="AbortError"&&u()}):u()});const C=document.getElementById("post-action-print");C==null||C.addEventListener("click",()=>{window.print()});const R=document.getElementById("post-action-comments");R==null||R.addEventListener("click",()=>{const p=e.querySelector(".post-comments-section");if(p){const A=p.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:A,behavior:"smooth"})}});const V=e.cleanup;e.cleanup=()=>{V&&V(),Z()}}const $t=[{name:"Trí tuệ nhân tạo (AI)",url:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Lập trình / Code",url:"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Đám mây / Dữ liệu",url:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Mạng / Bảo mật",url:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Thiết bị thông minh",url:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Văn phòng tối giản",url:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800&h=450"}];function vt(e,i,l,a){sessionStorage.getItem("toptech_admin_logged_in")==="true"?Dt(e,i,l,a):Nt(e,i,l,a)}function Nt(e,i,l,a){e.innerHTML=`
    <div class="admin-login-wrapper">
      <div class="admin-login-card glass-panel">
        <div class="login-logo-container">
          <img src="${z("/logo-toptech-color.svg")}" alt="TopTech Logo" style="height: 100px; margin: 0 auto;">
        </div>
        <h2 class="login-title">Cổng Quản Trị Blog</h2>
        <p class="login-subtitle">Vui lòng nhập mật khẩu quản trị để đăng nhập hệ thống</p>
        
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
  `;const t=document.getElementById("admin-password"),r=document.getElementById("login-submit-btn"),s=document.getElementById("login-error-msg"),o=()=>{(t==null?void 0:t.value.trim())==="admin123"?(sessionStorage.setItem("toptech_admin_logged_in","true"),vt(e,i,l,a)):(s&&(s.textContent="Mật khẩu không chính xác. Thử lại!",s.style.display="block"),t&&(t.style.borderColor="var(--secondary-color)"))};r==null||r.addEventListener("click",o),t==null||t.addEventListener("keydown",n=>{n.key==="Enter"&&o()})}function Rt(e){if(!e)return"";if(e.trim().startsWith("<")||e.includes("</p>")||e.includes("</div>")||e.includes("</td>")||e.includes("</figure>"))return e;const i=e.split(`
`);let l=!1,a="",t=[];for(let s=0;s<i.length;s++){let o=i[s].trim();if(o.startsWith("|")&&o.endsWith("|")){l||(l=!0,a='<div class="table-responsive"><table class="post-detail-table">');const n=o.split("|").slice(1,-1).map(E=>E.trim());if(n.every(E=>/^:?-+:?$/.test(E)))continue;a.includes('<table class="post-detail-table">')&&!a.includes("<thead>")&&!a.includes("<tbody>")?a+="<thead><tr>"+n.map(E=>`<th>${E}</th>`).join("")+"</tr></thead><tbody>":a+="<tr>"+n.map(E=>`<td>${E}</td>`).join("")+"</tr>"}else l&&(l=!1,a+="</tbody></table></div>",t.push(a),a=""),t.push(i[s])}l&&(a+="</tbody></table></div>",t.push(a)),e=t.join(`
`);let r=e.replace(/^### (.*$)/gim,'<h3 class="post-subheading-3">$1</h3>').replace(/^## (.*$)/gim,'<h2 class="post-subheading-2">$1</h2>').replace(/^# (.*$)/gim,'<h1 class="post-heading-1">$1</h1>').replace(/\!\[(.*?)\]\((.*?)\)/g,'<figure class="post-inline-figure"><img src="$2" alt="$1"><figcaption class="post-figcaption">$1</figcaption></figure>').replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/^\> (.*$)/gim,'<blockquote class="post-blockquote">$1</blockquote>').replace(/^\- (.*$)/gim,"<li>$1</li>").replace(/\`\`\`([\s\S]*?)\`\`\?/g,'<pre class="post-code-block"><code>$1</code></pre>').replace(/\`(.*?)\`/g,'<code class="post-inline-code">$1</code>').replace(/\n\n/g,"</p><p>");return r=r.replace(/(<li>.*<\/li>)/gim,"<ul>$1</ul>"),`<p>${r}</p>`}function Dt(e,i,l,a){let t="articles",r="list",s=null,o=$t[0].url,n=null,y=null;const E=sessionStorage.getItem("toptech_editing_article_id");if(E){const c=parseInt(E,10),d=i.find(g=>g.id===c);d&&(t="articles",r="write",s=c,o=d.image),sessionStorage.removeItem("toptech_editing_article_id")}function H(){const c=localStorage.getItem("toptech_categories");return c?JSON.parse(c):l}function q(c){localStorage.setItem("toptech_categories",JSON.stringify(c))}function N(){const c=localStorage.getItem("toptech_subcategories");return c?JSON.parse(c):{"Tin công nghệ":["Điện thoại","Máy tính","Thiết bị thông minh","Xe điện"],AI:["Machine Learning","Generative AI","ChatGPT & LLMs","Thị giác máy tính"],"Chuyển đổi số":["Doanh nghiệp","Giải pháp đám mây","IoT & Automation","Bảo mật dữ liệu"],Review:["Đánh giá Laptop","Đánh giá Smartphone","Đồ công nghệ khác","Trải nghiệm dịch vụ"],"Phần mềm":["Công cụ lập trình","Phần mềm văn phòng","Hệ điều hành","Ứng dụng di động"],IT:["Lập trình","Quản trị mạng","Cơ sở dữ liệu","DevOps"],"Giải pháp công nghệ":["AI cho doanh nghiệp","Tự động hóa quy trình","Hạ tầng số","ERP & CRM"],Casestudy:["Thành công tiêu biểu","Phân tích thất bại","Khảo sát thực tế"]}}function x(c){localStorage.setItem("toptech_subcategories",JSON.stringify(c))}function I(){const c=localStorage.getItem("toptech_authors");return c?JSON.parse(c):[{name:"Phương Linh",role:"Content Writer",desc:"Ms. Phương Linh là cây bút cốt cán tại TopTech chuyên viết về Trí tuệ nhân tạo (AI)...",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Ngọc Thanh",role:"Content Writer",desc:"Ms. Ngọc Thanh chuyên phân tích và đánh giá chuyên sâu các thiết bị di động...",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Lê Mạnh",role:"CEO & Founder",desc:"Mr. Lê Mạnh là nhà sáng lập kiêm Giám đốc điều hành của TopTech...",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Kim Phượng",role:"Content Writer",desc:"Ms. Kim Phượng đam mê nghiên cứu ứng dụng phần mềm văn phòng...",avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Trà My",role:"Software Developer",desc:"Ms. Trà My là kỹ sư phát triển phần mềm chuyên nghiệp...",avatar:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"}]}function P(c){localStorage.setItem("toptech_authors",JSON.stringify(c))}function v(){var c,d,g,m;e.innerHTML=`
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

        <!-- Tabs selectors -->
        <div class="admin-tabs" style="margin-bottom: 2.5rem;">
          <button class="admin-tab-btn ${t==="articles"?"active":""}" id="tab-articles-btn">
            Quản lý bài viết
          </button>
          <button class="admin-tab-btn ${t==="categories"?"active":""}" id="tab-categories-btn">
            Quản lý chuyên mục
          </button>
          <button class="admin-tab-btn ${t==="authors"?"active":""}" id="tab-authors-btn">
            Quản lý tác giả
          </button>
        </div>

        <!-- Tab content area -->
        <div id="admin-tab-content">
          ${t==="articles"?k():t==="categories"?Q():Z()}
        </div>
      </div>
    `,(c=document.getElementById("admin-logout-btn"))==null||c.addEventListener("click",()=>{sessionStorage.removeItem("toptech_admin_logged_in"),vt(e,i,l,a)}),(d=document.getElementById("tab-articles-btn"))==null||d.addEventListener("click",()=>{t="articles",r="list",v()}),(g=document.getElementById("tab-categories-btn"))==null||g.addEventListener("click",()=>{t="categories",n=null,v()}),(m=document.getElementById("tab-authors-btn"))==null||m.addEventListener("click",()=>{t="authors",y=null,v()}),t==="articles"?r==="list"?F():M():t==="categories"?J():t==="authors"&&ct()}function k(){if(r==="list")return`
        <div style="display: flex; justify-content: flex-end; margin-bottom: 1.5rem;">
          <button class="write-post-btn active" id="btn-goto-write-article" style="padding: 0.6rem 1.5rem;">
            + Viết bài mới
          </button>
        </div>
        
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
                ${i.length===0?`
                  <tr>
                    <td colspan="6" style="text-align: center; padding: 3rem; color: var(--text-muted);">
                      Chưa có bài viết nào trong hệ thống.
                    </td>
                  </tr>
                `:i.map(c=>`
                  <tr id="article-row-${c.id}">
                    <td>
                      <img class="table-post-thumb" src="${c.image.startsWith("http")||c.image.startsWith("data:")?c.image:z(c.image)}" alt="Thumbnail">
                    </td>
                    <td>
                      <div style="font-weight: 600; line-height: 1.4;">
                        <a href="#/bai-viet/${c.id}" target="_blank" class="table-post-title-link">${c.title}</a>
                      </div>
                      ${c.featured?'<span class="badge badge-featured">Nổi bật</span>':""}
                    </td>
                    <td>
                      <span class="badge badge-cat">${c.category}${c.subcategory?` / ${c.subcategory}`:""}</span>
                    </td>
                    <td>
                      <strong>${c.author}</strong>
                    </td>
                    <td>
                      <div style="font-size: 0.85rem;">
                        👀 <strong>${c.views||0}</strong> lượt xem
                      </div>
                      <div style="font-size: 0.85rem;">
                        💬 <strong>${c.comments||0}</strong> bình luận
                      </div>
                    </td>
                    <td style="white-space: nowrap;">
                      <div style="display: flex; gap: 0.4rem; align-items: center; flex-wrap: nowrap;">
                        <button class="edit-post-btn" data-id="${c.id}" style="background-color: var(--primary-color); border: none; color: #fff; padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.75rem; cursor: pointer; display: inline-flex; align-items: center; justify-content: center;">
                          Sửa
                        </button>
                        <button class="delete-post-btn" data-id="${c.id}" style="margin: 0; display: inline-flex; align-items: center; justify-content: center;">
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      `;{const c=s?i.find(m=>m.id===s):null,d=H(),g=I();return`
        <div style="margin-bottom: 1.5rem;">
          <button class="logout-btn" id="btn-back-to-articles" style="padding: 0.5rem 1rem;">
            ← Quay lại danh sách
          </button>
        </div>

        <div class="create-post-layout-grid">
          <div class="publish-form-panel glass-panel">
            <h3 class="panel-subtitle">${c?"Chỉnh sửa bài viết":"Nội dung bài viết mới"}</h3>
            
            <div class="login-form" style="margin-top: 1.5rem;">
              <div class="form-row">
                <label for="post-title">Tiêu đề bài viết <span style="color:var(--secondary-color)">*</span></label>
                <input type="text" id="post-title" value="${c?c.title:""}" placeholder="Nhập tiêu đề..." required>
              </div>

              <div class="form-grid-3">
                <div class="form-row">
                  <label for="post-category">Chuyên mục chính <span style="color:var(--secondary-color)">*</span></label>
                  <select id="post-category" required>
                    ${d.map(m=>`<option value="${m}" ${c&&c.category===m?"selected":""}>${m}</option>`).join("")}
                  </select>
                </div>

                <div class="form-row">
                  <label for="post-subcategory">Chuyên mục con</label>
                  <select id="post-subcategory">
                    <option value="">-- Không có --</option>
                  </select>
                </div>

                <div class="form-row" style="display:flex; align-items:center; gap: 0.5rem; margin-top: 1.8rem; cursor:pointer;">
                  <input type="checkbox" id="post-featured" ${c&&c.featured?"checked":""} style="width: 20px; height: 20px; margin:0;">
                  <label for="post-featured" style="margin:0; font-weight:600; font-size: 0.85rem;">Bài viết nổi bật (Featured)</label>
                </div>
              </div>

              <div class="form-row">
                <label for="post-author-name">Tác giả <span style="color:var(--secondary-color)">*</span></label>
                <select id="post-author-name" required>
                  ${g.map(m=>`<option value="${m.name}" ${c&&c.author===m.name?"selected":""}>${m.name} (${m.role})</option>`).join("")}
                </select>
              </div>

              <!-- Cover Image Selector -->
              <div class="form-row" style="margin-top: 1rem;">
                <label>Ảnh bìa bài viết <span style="color:var(--secondary-color)">*</span></label>
                
                <div class="upload-dropzone" id="upload-dropzone" style="min-height: 120px; display: flex; flex-direction: column; justify-content: center; align-items: center; border: 2px dashed var(--border-color); border-radius: 8px; cursor: pointer; padding: 1.5rem; background-color: var(--bg-main);">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted); margin-bottom: 0.5rem;"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path></svg>
                  <p style="font-weight:600; font-size: 0.9rem; margin-bottom: 0.2rem;">Kéo thả ảnh, click chọn file hoặc dán ảnh (Ctrl+V)</p>
                  <input type="file" id="cover-file-input" accept="image/*" style="display:none;">
                </div>
                
                <div style="margin-top: 0.8rem; display: flex; align-items: center; gap: 0.5rem;">
                  <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); white-space: nowrap;">Hoặc nhập URL ảnh:</span>
                  <input type="url" id="post-cover-url" value="${c&&c.image.startsWith("http")?c.image:""}" placeholder="Dán link ảnh bìa (https://...)" style="margin: 0; padding: 0.5rem 0.8rem; font-size: 0.9rem;">
                </div>
              </div>

              <div class="form-row">
                <label for="post-description">Tóm tắt bài viết (Sapo) <span style="color:var(--secondary-color)">*</span></label>
                <textarea id="post-description" rows="3" placeholder="Viết tóm tắt ngắn..." required>${c?c.description:""}</textarea>
              </div>

              <!-- Content Area -->
              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; margin-bottom: 0.4rem;">
                <label style="margin-bottom:0;">Nội dung bài viết (Hỗ trợ Markdown) <span style="color:var(--secondary-color)">*</span></label>
                <div class="editor-tabs">
                  <button class="editor-tab-btn active" id="editor-write-tab" type="button">Soạn thảo</button>
                  <button class="editor-tab-btn" id="editor-preview-tab" type="button">Xem trước</button>
                </div>
              </div>

              <div id="editor-textarea-wrapper">
                <div class="editor-toolbar" style="display: flex; gap: 0.4rem; background-color: var(--bg-surface-secondary); padding: 0.5rem; border: 1px solid var(--border-color); border-bottom: none; border-radius: 8px 8px 0 0; flex-wrap: wrap; align-items: center;">
                  <button class="toolbar-btn" data-cmd="bold" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 28px; height: 28px; display: inline-flex; justify-content: center; align-items: center;" title="Chữ đậm (B)">B</button>
                  <button class="toolbar-btn" data-cmd="formatBlock" data-val="h2" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 32px; height: 28px; display: inline-flex; justify-content: center; align-items: center; font-size: 0.8rem;" title="Đề mục lớn (H2)">H2</button>
                  <button class="toolbar-btn" data-cmd="formatBlock" data-val="h3" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 32px; height: 28px; display: inline-flex; justify-content: center; align-items: center; font-size: 0.8rem;" title="Đề mục nhỏ (H3)">H3</button>
                  <button class="toolbar-btn" data-cmd="formatBlock" data-val="blockquote" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 28px; height: 28px; display: inline-flex; justify-content: center; align-items: center;" title="Trích dẫn (>)">“</button>
                  <button class="toolbar-btn" data-cmd="insertUnorderedList" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 28px; height: 28px; display: inline-flex; justify-content: center; align-items: center;" title="Dòng liệt kê (-)">•</button>
                  <button class="toolbar-btn" data-cmd="createLink" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 28px; height: 28px; display: inline-flex; justify-content: center; align-items: center;" title="Chèn liên kết">🔗</button>
                  <button class="toolbar-btn" data-cmd="insertHTML-table" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 28px; height: 28px; display: inline-flex; justify-content: center; align-items: center;" title="Chèn bảng">田</button>
                  <button class="toolbar-btn" id="btn-insert-inline-img" type="button" style="border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-main); color: var(--text-primary); cursor: pointer; font-weight: bold; width: 28px; height: 28px; display: inline-flex; justify-content: center; align-items: center;" title="Tải ảnh lên và chèn">📷</button>
                </div>
                <div id="post-content" class="rich-text-editor" contenteditable="true" style="border-top-left-radius: 0; border-top-right-radius: 0; min-height: 380px; border: 1px solid var(--border-color); padding: 1.5rem; outline: none; background-color: var(--bg-main);" placeholder="Soạn thảo tại đây..."></div>
                <input type="file" id="inline-img-file-input" accept="image/*" style="display:none;">
              </div>

              <div id="editor-preview-wrapper" class="markdown-preview-container" style="display:none; border: 1px solid var(--border-color); border-radius: 8px; padding: 1.5rem; background-color: var(--bg-main); min-height: 380px;"></div>

              <div class="editor-status-bar" style="margin-top: 0.5rem; display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted);">
                <span id="word-count-indicator">0 từ</span>
                <span id="reading-time-indicator">0 phút đọc</span>
              </div>

              <button class="submit-comment-btn" id="publish-post-btn" style="margin-top: 1.5rem; width:100%; font-size: 1rem; padding: 0.8rem 1.5rem; background-color: var(--primary-color); color:#fff; border-color: var(--primary-color); border-radius: 30px;">
                ${c?"💾 Cập nhật bài viết":"🚀 Xuất bản bài viết"}
              </button>
            </div>
          </div>

          <!-- Sidebar Preview -->
          <div class="preview-sidebar-panel">
            <h3 class="panel-subtitle" style="margin-bottom: 1.5rem;">Xem trước thẻ tin</h3>
            <div class="cat-article-card" style="box-shadow: var(--shadow-lg); background-color: var(--bg-surface); border: 1px solid var(--border-color); pointer-events: none;">
              <div class="cat-card-img-wrapper">
                <img id="sidebar-preview-img" src="${o}" alt="Cover Preview" style="height: 200px; width: 100%; object-fit: cover;">
                <span id="sidebar-preview-cat" class="cat-card-category">TIN CÔNG NGHỆ</span>
              </div>
              <div class="cat-card-content" style="padding: 1.5rem;">
                <h3 id="sidebar-preview-title" class="cat-card-title" style="font-size: 1.1rem; line-height:1.4;">Chưa nhập tiêu đề...</h3>
                <p id="sidebar-preview-desc" class="cat-card-description" style="margin-bottom: 1.5rem;">Nhập sapo để xem...</p>
                <div class="post-meta post-meta-stack" style="color: var(--text-muted); font-size: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 1rem; width: 100%; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
                  <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
                    <span id="sidebar-preview-author">Tác giả</span>
                    <span class="meta-dot">&bull;</span>
                    <span id="sidebar-preview-time">0 phút đọc</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `}}function F(){var c;(c=document.getElementById("btn-goto-write-article"))==null||c.addEventListener("click",()=>{r="write",s=null,o=$t[0].url,v()}),e.querySelectorAll(".edit-post-btn").forEach(d=>{d.addEventListener("click",()=>{const g=parseInt(d.dataset.id,10),m=i.find(f=>f.id===g);m&&(s=g,o=m.image,r="write",v())})}),e.querySelectorAll(".delete-post-btn").forEach(d=>{d.addEventListener("click",()=>{const g=parseInt(d.dataset.id,10),m=i.find(f=>f.id===g);if(confirm(`Bạn có chắc chắn muốn xóa bài viết "${m==null?void 0:m.title}"?`)){const f=i.filter(u=>u.id!==g);localStorage.setItem("toptech_articles",JSON.stringify(f));const T=document.getElementById(`article-row-${g}`);T&&(T.style.transition="opacity 0.3s ease",T.style.opacity="0",setTimeout(()=>{i.splice(0,i.length,...f),a(),v()},300))}})})}function M(){var dt;(dt=document.getElementById("btn-back-to-articles"))==null||dt.addEventListener("click",()=>{r="list",s=null,v()});const c=document.getElementById("post-title"),d=document.getElementById("post-category"),g=document.getElementById("post-subcategory"),m=document.getElementById("post-featured"),f=document.getElementById("post-author-name"),T=document.getElementById("post-description"),u=document.getElementById("post-content"),C=document.getElementById("publish-post-btn"),R=document.getElementById("sidebar-preview-img"),V=document.getElementById("sidebar-preview-cat"),p=document.getElementById("sidebar-preview-title"),b=document.getElementById("sidebar-preview-desc"),L=document.getElementById("sidebar-preview-author"),A=document.getElementById("sidebar-preview-time"),_=N(),O=s?i.find(h=>h.id===s):null;if(O&&u){u.innerHTML=O.content,o=O.image,R&&(R.src=o),V&&(V.textContent=(O.subcategory||O.category).toUpperCase()),p&&(p.textContent=O.title),b&&(b.textContent=O.description),L&&(L.textContent=O.author);const h=document.getElementById("upload-dropzone");h&&(h.style.borderColor="var(--primary-color)",h.innerHTML=`
          <div style="text-align: center; color: var(--primary-color);">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:0.3rem;"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <p style="font-weight:600; font-size:0.85rem;">Đã chọn ảnh bìa hiện tại!</p>
            <p style="font-size:0.7rem; color:var(--text-muted); margin-top:0.2rem;">(Click hoặc kéo thả để đổi)</p>
          </div>
        `)}const lt=(h,$="")=>{if(!g)return;const B=_[h]||[];g.innerHTML='<option value="">-- Không có --</option>'+B.map(S=>`<option value="${S}" ${$===S?"selected":""}>${S}</option>`).join("")};d&&lt(d.value,O?O.subcategory:"");function st(){const h=(u==null?void 0:u.innerText.trim())||"",$=h?h.split(/\s+/).length:0,B=Math.max(1,Math.ceil($/200)),S=document.getElementById("word-count-indicator"),ot=document.getElementById("reading-time-indicator");return S&&(S.textContent=`${$} từ`),ot&&(ot.textContent=`${B} phút đọc`),A&&(A.innerHTML=`${B} phút để đọc`),`${B<10?"0":""}${B} phút để đọc`}c==null||c.addEventListener("input",h=>{p&&(p.textContent=h.target.value.trim()||"Chưa nhập tiêu đề...")}),d==null||d.addEventListener("change",h=>{lt(h.target.value),V&&(V.textContent=h.target.value.toUpperCase())}),g==null||g.addEventListener("change",h=>{V&&(V.textContent=(h.target.value||(d==null?void 0:d.value)||"").toUpperCase())}),f==null||f.addEventListener("change",h=>{L&&(L.textContent=h.target.value)}),f&&L&&(L.textContent=f.value),T==null||T.addEventListener("input",h=>{b&&(b.textContent=h.target.value.trim()||"Nhập sapo để xem trước...")}),u==null||u.addEventListener("input",()=>{st()});const et=(h,$=null)=>{document.execCommand(h,!1,$),u==null||u.focus(),u==null||u.dispatchEvent(new Event("input"))};e.querySelectorAll(".toolbar-btn[data-cmd]").forEach(h=>{h.addEventListener("click",()=>{const $=h.dataset.cmd,B=h.dataset.val||null;if($==="createLink"){const S=prompt("Nhập đường dẫn:");S&&et($,S)}else $==="insertHTML-table"?et("insertHTML",`
            <table class="post-detail-table" style="width: 100%;">
              <thead><tr><th>Tiêu đề 1</th><th>Tiêu đề 2</th></tr></thead>
              <tbody>
                <tr><td>Nội dung 1</td><td>Nội dung 2</td></tr>
                <tr><td>Nội dung 3</td><td>Nội dung 4</td></tr>
              </tbody>
            </table><p><br></p>
          `):et($,B)})});const at=document.getElementById("btn-insert-inline-img"),X=document.getElementById("inline-img-file-input"),D=h=>{if(!h)return;const $=new FileReader;$.onload=B=>{const S=`
          <figure class="post-inline-figure">
            <img src="${B.target.result}" alt="Ảnh">
            <figcaption class="post-figcaption">Chú thích ảnh</figcaption>
          </figure><p><br></p>
        `;et("insertHTML",S)},$.readAsDataURL(h)};at==null||at.addEventListener("click",()=>X==null?void 0:X.click()),X==null||X.addEventListener("change",h=>D(h.target.files[0])),u==null||u.addEventListener("paste",h=>{var B;const $=(B=h.clipboardData)==null?void 0:B.items;if($){for(let S=0;S<$.length;S++)if($[S].type.indexOf("image")!==-1){h.preventDefault(),D($[S].getAsFile());break}}});const w=document.getElementById("upload-dropzone"),j=document.getElementById("cover-file-input"),Y=document.getElementById("post-cover-url");w==null||w.addEventListener("click",()=>j==null?void 0:j.click());const K=h=>{if(!h)return;const $=new FileReader;$.onload=B=>{o=B.target.result,R&&(R.src=o),w&&(w.style.borderColor="var(--primary-color)",w.innerHTML=`
            <div style="text-align: center; color: var(--primary-color);">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:0.3rem;"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <p style="font-weight:600; font-size:0.85rem;">Đã chọn ảnh bìa thành công!</p>
              <p style="font-size:0.7rem; color:var(--text-muted);">${h.name||"Ảnh tải lên"}</p>
            </div>
          `)},$.readAsDataURL(h)};j==null||j.addEventListener("change",h=>K(h.target.files[0])),w==null||w.addEventListener("dragover",h=>{h.preventDefault(),w&&(w.style.borderColor="var(--primary-color)")}),w==null||w.addEventListener("dragleave",()=>{w&&(w.style.borderColor="var(--border-color)")}),w==null||w.addEventListener("drop",h=>{h.preventDefault(),w&&(w.style.borderColor="var(--border-color)"),K(h.dataTransfer.files[0])}),w&&(w.setAttribute("tabindex","0"),w.addEventListener("paste",h=>{var B;const $=(B=h.clipboardData)==null?void 0:B.items;if($){for(let S=0;S<$.length;S++)if($[S].type.indexOf("image")!==-1){h.preventDefault(),K($[S].getAsFile());break}}})),Y==null||Y.addEventListener("input",h=>{const $=h.target.value.trim();$&&(o=$,R&&(R.src=o))});const G=document.getElementById("editor-write-tab"),tt=document.getElementById("editor-preview-tab"),rt=document.getElementById("editor-textarea-wrapper"),it=document.getElementById("editor-preview-wrapper");G==null||G.addEventListener("click",()=>{G.classList.add("active"),tt==null||tt.classList.remove("active"),rt&&(rt.style.display="block"),it&&(it.style.display="none")}),tt==null||tt.addEventListener("click",()=>{if(tt.classList.add("active"),G==null||G.classList.remove("active"),rt&&(rt.style.display="none"),it){it.style.display="block";const h=(u==null?void 0:u.innerHTML)||"";it.innerHTML=h?Rt(h):'<p style="color:var(--text-muted); font-style:italic;">Chưa soạn thảo nội dung...</p>'}}),C==null||C.addEventListener("click",()=>{const h=c==null?void 0:c.value.trim(),$=d==null?void 0:d.value,B=(g==null?void 0:g.value)||"",S=f==null?void 0:f.value,ot=T==null?void 0:T.value.trim(),pt=u==null?void 0:u.innerHTML.trim(),yt=m==null?void 0:m.checked;if(!h||!$||!S||!ot||!pt){alert("Vui lòng điền đầy đủ thông tin bắt buộc (*).");return}C.disabled=!0,C.textContent="⏳ Đang xuất bản...",setTimeout(()=>{const bt=st();if(s){const U=i.find(ht=>ht.id===s);U&&(U.title=h,U.category=$,U.subcategory=B,U.image=o,U.author=S,U.description=ot,U.content=pt,U.featured=yt,U.readTime=bt),localStorage.setItem("toptech_articles",JSON.stringify(i))}else{const ht=[{id:Date.now(),title:h,category:$,subcategory:B,image:o,author:S,date:"Vừa đăng",readTime:bt,views:0,comments:0,featured:yt,description:ot,content:pt,commentsList:[]},...i];localStorage.setItem("toptech_articles",JSON.stringify(ht)),i.splice(0,i.length,...ht)}a(),C.style.backgroundColor="#10b981",C.style.borderColor="#10b981",C.innerHTML="✓ Lưu bài viết thành công!",setTimeout(()=>{r="list",v()},800)},800)})}function Q(){const c=H(),d=N();return`
      <div class="create-post-layout-grid">
        <!-- Add/Edit Category Form (Left) -->
        <div class="publish-form-panel glass-panel" style="padding: 2rem;">
          <h3 class="panel-subtitle">${n?`Sửa chuyên mục: ${n}`:"Thêm chuyên mục mới"}</h3>
          
          <div class="login-form" style="margin-top: 1rem; gap: 1rem;">
            <div class="form-row">
              <label for="input-cat-name">Tên chuyên mục <span style="color:var(--secondary-color)">*</span></label>
              <input type="text" id="input-cat-name" value="${n||""}" placeholder="Ví dụ: AI, Review, IT..." required>
            </div>
            
            <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
              <button class="login-btn" id="btn-save-category" style="flex: 1; padding: 0.7rem; font-size: 0.9rem; border-radius: 8px;">
                ${n?"Cập nhật":"Thêm chuyên mục"}
              </button>
              ${n?`
                <button class="logout-btn" id="btn-cancel-edit-category" style="padding: 0.7rem; font-size: 0.9rem; border-radius: 8px;">
                  Hủy
                </button>
              `:""}
            </div>
          </div>
        </div>

        <!-- Categories List (Right) -->
        <div class="publish-form-panel glass-panel" style="padding: 2rem;">
          <h3 class="panel-subtitle">Tất cả chuyên mục & chuyên mục con</h3>
          
          <div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 1.5rem;">
            ${c.map(g=>{const m=d[g]||[];return`
                <div class="category-manage-row" style="border-bottom: 1px solid var(--border-color); padding-bottom: 1.2rem;" id="cat-manage-${g}">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
                    <div>
                      <strong style="font-size: 1.15rem; color: var(--text-primary);">${g}</strong>
                      <span style="font-size: 0.8rem; color: var(--text-muted); margin-left: 0.5rem;">(${m.length} chuyên mục con)</span>
                    </div>
                    <div style="display: flex; gap: 0.4rem;">
                      <button class="edit-cat-btn" data-cat="${g}" style="background: var(--bg-surface-secondary); border: 1px solid var(--border-color); border-radius: 4px; padding: 0.2rem 0.5rem; font-size: 0.75rem; font-weight: 600; cursor: pointer; color: var(--text-secondary);">Sửa</button>
                      <button class="delete-cat-btn" data-cat="${g}" style="background: #ef44440d; border: 1px solid rgba(239,68,68,0.2); border-radius: 4px; padding: 0.2rem 0.5rem; font-size: 0.75rem; font-weight: 600; cursor: pointer; color: #ef4444;">Xóa</button>
                    </div>
                  </div>
                  
                  <!-- Subcategories tags list -->
                  <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.8rem;">
                    ${m.map(f=>`
                      <span style="display: inline-flex; align-items: center; gap: 0.3rem; background: var(--bg-surface-secondary); border: 1px solid var(--border-color); border-radius: 20px; padding: 0.2rem 0.6rem; font-size: 0.78rem; font-weight: 500; color: var(--text-secondary);">
                        ${f}
                        <button class="delete-sub-btn" data-cat="${g}" data-sub="${f}" style="background:none; border:none; cursor:pointer; color: var(--text-muted); font-weight:bold; font-size: 0.85rem; padding: 0; display: inline-flex; align-items: center;">&times;</button>
                      </span>
                    `).join("")}
                    ${m.length===0?'<span style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">Chưa có chuyên mục con.</span>':""}
                  </div>

                  <!-- Add inline Subcategory input -->
                  <div style="display: flex; gap: 0.3rem; max-width: 280px;">
                    <input type="text" placeholder="Thêm chuyên mục con..." class="inline-sub-input" data-cat="${g}" style="margin:0; padding: 0.4rem 0.6rem; font-size: 0.8rem; border-radius: 6px; border: 1px solid var(--border-color); width: 100%;">
                    <button class="btn-add-subcategory" data-cat="${g}" style="background: var(--primary-color); border: none; color: #fff; border-radius: 6px; padding: 0.4rem 0.8rem; font-size: 0.8rem; cursor: pointer; font-weight: bold;">+</button>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      </div>
    `}function J(){const c=document.getElementById("input-cat-name"),d=document.getElementById("btn-save-category"),g=document.getElementById("btn-cancel-edit-category");d==null||d.addEventListener("click",()=>{const m=c==null?void 0:c.value.trim();if(!m){alert("Vui lòng nhập tên chuyên mục.");return}let f=H(),T=N();if(n){const u=f.indexOf(n);u!==-1&&(f[u]=m,T[n]&&(T[m]=T[n],delete T[n]),i.forEach(C=>{C.category===n&&(C.category=m)}),localStorage.setItem("toptech_articles",JSON.stringify(i))),n=null}else{if(f.includes(m)){alert("Chuyên mục đã tồn tại!");return}f.push(m),T[m]=[]}q(f),x(T),a(),v()}),g==null||g.addEventListener("click",()=>{n=null,v()}),e.querySelectorAll(".edit-cat-btn").forEach(m=>{m.addEventListener("click",()=>{n=m.dataset.cat,v()})}),e.querySelectorAll(".delete-cat-btn").forEach(m=>{m.addEventListener("click",()=>{const f=m.dataset.cat;if(confirm(`Xóa chuyên mục "${f}" sẽ xóa toàn bộ các chuyên mục con tương ứng. Tiếp tục?`)){let T=H().filter(C=>C!==f),u=N();delete u[f],q(T),x(u),a(),v()}})}),e.querySelectorAll(".btn-add-subcategory").forEach(m=>{m.addEventListener("click",()=>{const f=m.dataset.cat,T=e.querySelector(`.inline-sub-input[data-cat="${f}"]`),u=T==null?void 0:T.value.trim();if(!u){alert("Vui lòng nhập tên chuyên mục con.");return}let C=N();if(C[f]||(C[f]=[]),C[f].includes(u)){alert("Chuyên mục con này đã tồn tại trong chuyên mục chính!");return}C[f].push(u),x(C),v()})}),e.querySelectorAll(".delete-sub-btn").forEach(m=>{m.addEventListener("click",()=>{const f=m.dataset.cat,T=m.dataset.sub;let u=N();u[f]&&(u[f]=u[f].filter(C=>C!==T),x(u),v())})})}function Z(){const c=I(),d=y?c.find(g=>g.name===y):null;return`
      <div class="create-post-layout-grid">
        <!-- Add/Edit Author Form (Left) -->
        <div class="publish-form-panel glass-panel" style="padding: 2rem;">
          <h3 class="panel-subtitle">${d?`Sửa thông tin: ${d.name}`:"Thêm tác giả mới"}</h3>
          
          <div class="login-form" style="margin-top: 1rem; gap: 1rem;">
            <div class="form-row">
              <label for="input-author-name">Họ và tên <span style="color:var(--secondary-color)">*</span></label>
              <input type="text" id="input-author-name" value="${d?d.name:""}" placeholder="Ví dụ: Khánh Nam, Phương Linh..." ${d?"disabled":""} required>
            </div>
            
            <div class="form-row">
              <label for="input-author-role">Chức danh / Vai trò <span style="color:var(--secondary-color)">*</span></label>
              <input type="text" id="input-author-role" value="${d?d.role:""}" placeholder="Ví dụ: Content Writer, Tech Lead..." required>
            </div>

            <div class="form-row">
              <label for="input-author-avatar">Đường dẫn ảnh đại diện <span style="color:var(--secondary-color)">*</span></label>
              <input type="url" id="input-author-avatar" value="${d?d.avatar:""}" placeholder="Dán link ảnh đại diện (https://...)" required>
            </div>

            <div class="form-row">
              <label for="input-author-desc">Mô tả giới thiệu / Tiểu sử <span style="color:var(--secondary-color)">*</span></label>
              <textarea id="input-author-desc" rows="4" placeholder="Nhập tiểu sử tóm tắt giới thiệu tác giả..." required>${d?d.desc:""}</textarea>
            </div>
            
            <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
              <button class="login-btn" id="btn-save-author" style="flex: 1; padding: 0.7rem; font-size: 0.9rem; border-radius: 8px;">
                ${d?"Cập nhật":"Thêm tác giả"}
              </button>
              ${d?`
                <button class="logout-btn" id="btn-cancel-edit-author" style="padding: 0.7rem; font-size: 0.9rem; border-radius: 8px;">
                  Hủy
                </button>
              `:""}
            </div>
          </div>
        </div>

        <!-- Authors Grid (Right) -->
        <div class="publish-form-panel glass-panel" style="padding: 2rem;">
          <h3 class="panel-subtitle">Đội ngũ tác giả TopTech</h3>
          
          <div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 1rem;">
            ${c.map(g=>`
              <div class="author-manage-row" style="display: flex; align-items: center; gap: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;" id="author-manage-${g.name}">
                <img src="${g.avatar}" alt="${g.name}" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover; border: 2px solid var(--primary-color);">
                <div style="flex: 1;">
                  <strong style="color: var(--text-primary); font-size: 1rem;">${g.name}</strong>
                  <div style="font-size: 0.8rem; color: var(--primary-color); font-weight: 600;">${g.role}</div>
                  <div style="font-size: 0.8rem; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; margin-top: 0.1rem;">${g.desc}</div>
                </div>
                <div style="display: flex; gap: 0.3rem;">
                  <button class="edit-author-btn" data-name="${g.name}" style="background: var(--bg-surface-secondary); border: 1px solid var(--border-color); border-radius: 4px; padding: 0.2rem 0.5rem; font-size: 0.75rem; font-weight: 600; cursor: pointer; color: var(--text-secondary);">Sửa</button>
                  <button class="delete-author-btn" data-name="${g.name}" style="background: #ef44440d; border: 1px solid rgba(239,68,68,0.2); border-radius: 4px; padding: 0.2rem 0.5rem; font-size: 0.75rem; font-weight: 600; cursor: pointer; color: #ef4444;">Xóa</button>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `}function ct(){const c=document.getElementById("input-author-name"),d=document.getElementById("input-author-role"),g=document.getElementById("input-author-avatar"),m=document.getElementById("input-author-desc"),f=document.getElementById("btn-save-author"),T=document.getElementById("btn-cancel-edit-author");f==null||f.addEventListener("click",()=>{const u=c==null?void 0:c.value.trim(),C=d==null?void 0:d.value.trim(),R=g==null?void 0:g.value.trim(),V=m==null?void 0:m.value.trim();if(!u||!C||!R||!V){alert("Vui lòng điền đầy đủ các thông tin bắt buộc (*).");return}let p=I();if(y){const b=p.find(L=>L.name===y);b&&(b.role=C,b.avatar=R,b.desc=V),y=null}else{if(p.find(L=>L.name.toLowerCase()===u.toLowerCase())){alert("Tên tác giả đã tồn tại trong danh sách!");return}p.push({name:u,role:C,avatar:R,desc:V})}P(p),a(),v()}),T==null||T.addEventListener("click",()=>{y=null,v()}),e.querySelectorAll(".edit-author-btn").forEach(u=>{u.addEventListener("click",()=>{y=u.dataset.name,v()})}),e.querySelectorAll(".delete-author-btn").forEach(u=>{u.addEventListener("click",()=>{const C=u.dataset.name;if(confirm(`Bạn có chắc chắn muốn xóa tác giả "${C}"?`)){let R=I().filter(V=>V.name!==C);P(R),a(),v()}})})}v()}const Vt={AI:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=600&h=400","Tin công nghệ":"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400","Chuyển đổi số":"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",Review:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600&h=400","Phần mềm":"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=600&h=400",IT:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400","Giải pháp công nghệ":"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400",Casestudy:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=400"};function _t(e,i,l){const a=l.map(t=>{const r=i.filter(o=>o.category===t).length,s=Vt[t]||"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400";return`
      <a href="#/chuyen-muc/${t}" class="category-list-card">
        <div class="category-list-img-wrapper">
          <img src="${s}" alt="${t}">
        </div>
        <div class="category-list-info">
          <h3 class="category-list-name">${t}</h3>
          <span class="category-list-count">${r} bài viết</span>
        </div>
      </a>
    `}).join("");e.innerHTML=`
    <div class="category-page-header" style="padding: 2.5rem 0; background: var(--bg-surface); border-bottom: 1px solid var(--border-color); text-align: center;">
      <div class="container">
        <h1 class="category-page-title" style="font-size: 2.5rem; font-weight: 900; margin: 0; text-transform: uppercase; color: var(--text-primary);">Tất cả chuyên mục</h1>
      </div>
    </div>
    
    <div class="container section-padding">
      <div class="categories-list-grid">
        ${a}
      </div>
    </div>
  `}const Ot=[{name:"Phương Linh",role:"Content Writer",desc:"Ms. Phương Linh là cây bút cốt cán tại TopTech chuyên viết về Trí tuệ nhân tạo (AI), các dòng máy tính xách tay cấu hình cao cho lập trình và tin tức công nghệ nóng hổi nhất thế giới.",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Ngọc Thanh",role:"Content Writer",desc:"Ms. Ngọc Thanh chuyên phân tích và đánh giá chuyên sâu các thiết bị di động, smartphone thông minh, xe điện và các xu hướng phần cứng mới nhất.",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Lê Mạnh",role:"CEO & Founder",desc:"Mr. Lê Mạnh là nhà sáng lập kiêm Giám đốc điều hành của TopTech. Anh chia sẻ những định hướng phát triển chiến lược công nghệ và chuyển đổi số cho doanh nghiệp.",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Kim Phượng",role:"Content Writer",desc:"Ms. Kim Phượng đam mê nghiên cứu ứng dụng phần mềm văn phòng, công cụ năng suất hỗ trợ công việc và các casestudy chuyển đổi số thành công thực tế.",avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Trà My",role:"Software Developer",desc:"Ms. Trà My là kỹ sư phát triển phần mềm chuyên nghiệp. Cô chia sẻ các bài viết kỹ thuật sâu về cơ sở dữ liệu, Docker, quy trình CI/CD và bảo mật hệ thống.",avatar:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Khánh Nam",role:"Tech Lead",desc:"Mr. Khánh Nam có 8 năm kinh nghiệm trong lĩnh vực phát triển Frontend và các mô hình ngôn ngữ lớn (LLM). Anh viết về kinh nghiệm tối ưu hóa mã nguồn và công cụ IDE.",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Quốc Anh",role:"Hardware Expert",desc:"Mr. Quốc Anh là chuyên gia review phần cứng cao cấp và các dòng bàn phím cơ. Anh chia sẻ những cảm nhận chân thực sau thời gian dài sử dụng thiết bị.",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Minh Tâm",role:"Cloud Specialist",desc:"Ms. Minh Tâm là chuyên viên điện toán đám mây. Cô tập trung phân tích bài viết về giải pháp hạ tầng AWS, Azure, và các bước chuyển đổi số tối ưu chi phí cho startup.",avatar:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"},{name:"Hoàng Long",role:"Solutions Architect",desc:"Mr. Hoàng Long chuyên khảo sát thực tế và phân tích casestudy thành công hay thất bại của các tập đoàn công nghệ lớn khi xây dựng hệ thống dữ liệu khổng lồ.",avatar:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150"}],Tt=localStorage.getItem("toptech_authors"),Gt=Tt?JSON.parse(Tt):Ot,ft={};Gt.forEach(e=>{ft[e.name]={avatar:e.avatar,role:e.role,desc:e.desc}});function Wt(e,i){const a=Array.from(new Set(i.map(t=>t.author).filter(Boolean))).map(t=>{const r=ft[t]||{avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80&h=80",role:"Cộng tác viên"},s=i.filter(o=>o.author===t).length;return`
      <a href="#/tac-gia/${encodeURIComponent(t)}" class="author-list-card">
        <div class="author-list-avatar-wrapper">
          <img class="author-list-avatar" src="${r.avatar}" alt="${t}">
        </div>
        <h3 class="author-list-name">${t}</h3>
        <span class="author-list-role">${r.role}</span>
        <span class="author-list-count-badge">${s} bài viết</span>
      </a>
    `}).join("");e.innerHTML=`
    <div class="category-page-header" style="padding: 2.5rem 0; background: var(--bg-surface); border-bottom: 1px solid var(--border-color); text-align: center;">
      <div class="container">
        <h1 class="category-page-title" style="font-size: 2.5rem; font-weight: 900; margin: 0; text-transform: uppercase; color: var(--text-primary);">Đội ngũ tác giả</h1>
      </div>
    </div>
    
    <div class="container section-padding">
      <div class="authors-list-grid">
        ${a}
      </div>
    </div>
  `}function Ft(e,i,l){const a=ft[i]||{avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80&h=80",role:"Cộng tác viên",desc:"Tác giả chia sẻ các bài viết kiến thức hữu ích tại TopTech."},t=l.filter(s=>s.author===i),r=t.length===0?`
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px;">
        <p style="color: var(--text-muted); font-size: 0.95rem;">Tác giả này chưa đăng tải bài viết nào.</p>
      </div>
    `:t.map(s=>`
      <article class="cat-article-card" style="margin-bottom: 2rem;">
        <div class="cat-card-img-wrapper">
          <img src="${z(s.image)}" alt="${s.title}">
          <a href="#/chuyen-muc/${s.subcategory||s.category}" class="cat-card-category">${s.subcategory||s.category}</a>
        </div>
        <div class="cat-card-content">
          <h3 class="cat-card-title"><a href="#/bai-viet/${s.id}">${s.title}</a></h3>
          <p class="cat-card-description">${s.description||"Chưa có mô tả chi tiết cho bài viết này. Nhấp vào để đọc bài viết..."}</p>
          
          <div class="post-meta" style="color: var(--text-muted); font-size: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 1rem; margin-top: auto; width: 100%; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
            <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
              <span class="post-author-name">${s.author}</span>
              <span class="meta-dot">&bull;</span>
              <span>${s.date}</span>
            </div>
            <div class="meta-right" style="display: flex; align-items: center; gap: 0.6rem; margin-left: auto;">
              <span style="display: flex; align-items: center; gap: 0.25rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${s.views}
              </span>
              <span style="display: flex; align-items: center; gap: 0.25rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${s.comments}
              </span>
            </div>
          </div>
        </div>
      </article>
    `).join("");e.innerHTML=`
    <div class="category-page-header" style="padding: 3rem 0; background: var(--bg-surface); border-bottom: 1px solid var(--border-color);">
      <div class="container">
        <div class="author-profile-card">
          <div class="author-profile-avatar-wrapper">
            <img class="author-profile-avatar" src="${a.avatar}" alt="${i}">
          </div>
          <div class="author-profile-info">
            <h1>${i}</h1>
            <div class="author-profile-role">${a.role}</div>
            <p class="author-profile-desc">${a.desc}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="container section-padding">
      <h2 style="font-size: 1.5rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--primary-color); margin-bottom: 2rem;">Bài viết đã đăng (${t.length})</h2>
      <div class="category-articles-grid" id="author-grid">
        ${r}
      </div>
    </div>
  `}const Kt=[{id:1,title:"Top 20 công cụ AI tốt nhất năm 2026",category:"AI",image:"hero_robot.png",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",readTime:"02 phút để đọc",views:1357,comments:26,featured:!0,description:"Khám phá danh sách các công cụ Trí tuệ Nhân tạo đột phá nhất năm 2026, giúp tự động hóa công việc, tăng hiệu suất gấp 5 lần và tối ưu hóa quy trình làm việc của cá nhân cũng như doanh nghiệp."},{id:2,title:"Top 15 laptop cho lập trình viên chuyên nghiệp",category:"Tin công nghệ",image:"coding_laptop.png",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",readTime:"02 phút để đọc",views:1357,comments:26,featured:!0,description:"Đánh giá chi tiết top 15 dòng máy tính xách tay cấu hình cao, pin trâu và bàn phím gõ êm nhất dành riêng cho các kỹ sư phần mềm và lập trình viên chuyên nghiệp năm nay."},{id:3,title:"So sánh ưu điểm ChatGPT vs Claude vs Gemini năm nay",category:"AI",image:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:1357,comments:26,featured:!1},{id:4,title:"Mô hình ngôn ngữ lớn LLM đang thay đổi lập trình thế nào",category:"AI",image:"https://images.unsplash.com/photo-1684369175833-3d026dc6a066?auto=format&fit=crop&q=80&w=400&h=250",author:"Khánh Nam",authorTag:"#CTAD02",date:"1 ngày trước",views:945,comments:14,featured:!1},{id:5,title:"EUROPE IS PUSHING BACK ON WASHINGTON’S CHIP WAR",category:"AI",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=450",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:894,comments:15,description:`At high-stakes meetings with the White House, Anthropic's cofounder—a "weirdo," per one official—has been replaced by cofounder Tom Brown to lead negotiations on silicon sanctions.`},{id:6,title:"I Met With China’s Top AI Experts. They’re Freaking Out, Too",category:"AI",image:"https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:1102,comments:42,description:"The AI arms race between China and the US has researchers on both sides worried about a “Chernobyl moment” for automated systems."},{id:7,title:"Đánh giá chi tiết Keychron Q1 Pro sau 6 tháng sử dụng",category:"Review",image:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=400&h=250",author:"Quốc Anh",authorTag:"#CTAD03",date:"2 ngày trước",views:520,comments:9},{id:8,title:"A24 Knows You’re Mad About the Google AI Collab",category:"AI",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:932,comments:18},{id:9,title:"Meta tạm dừng chương trình theo dõi nhân viên sau sự cố rò rỉ dữ liệu",category:"Tin công nghệ",image:"https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:2405,comments:63},{id:10,title:"Chính phủ Mỹ yêu cầu nhân viên gỡ bỏ ứng dụng lạ trên điện thoại công vụ",category:"Tin công nghệ",image:"https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:3108,comments:72},{id:11,title:"Hành trình chuyển đổi số của doanh nghiệp bán lẻ Việt Nam",category:"Chuyển đổi số",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=250",author:"Minh Tâm",authorTag:"#CTAD04",date:"3 ngày trước",views:1823,comments:29},{id:12,title:"Chiến lược tối ưu hóa hạ tầng đám mây cho startup năm 2026",category:"Chuyển đổi số",image:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=400&h=250",author:"Minh Tâm",authorTag:"#CTAD04",date:"4 ngày trước",views:1245,comments:11},{id:13,title:"Đánh giá chi tiết màn hình Dell UltraSharp U2723QE 4K",category:"Review",image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400&h=250",author:"Quốc Anh",authorTag:"#CTAD03",date:"5 ngày trước",views:890,comments:15},{id:14,title:"VS Code vs WebStorm: IDE nào tốt hơn cho lập trình Frontend",category:"Phần mềm",image:"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=400&h=250",author:"Khánh Nam",authorTag:"#CTAD02",date:"1 tuần trước",views:3105,comments:54},{id:15,title:"Xây dựng hệ thống CI/CD hoàn chỉnh với Docker và GitHub Actions",category:"IT",image:"https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=400&h=250",author:"Trà My",authorTag:"#CTAD05",date:"1 tuần trước",views:2200,comments:31},{id:16,title:"Bảo mật API trong kiến trúc Microservices thế nào cho đúng",category:"IT",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400&h=250",author:"Trà My",authorTag:"#CTAD05",date:"1 tuần trước",views:1780,comments:19},{id:17,title:"Ứng dụng AI tổng hợp để tăng năng suất cho doanh nghiệp",category:"Giải pháp công nghệ",image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&h=250",author:"Hoàng Long",authorTag:"#CTAD06",date:"2 tuần trước",views:1450,comments:22},{id:18,title:"Casestudy: Uber đã di chuyển hạ tầng dữ liệu khổng lồ thế nào",category:"Casestudy",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400&h=250",author:"Hoàng Long",authorTag:"#CTAD06",date:"3 tuần trước",views:2900,comments:48}];let W=[];function ut(){const e=localStorage.getItem("toptech_articles");e?W=JSON.parse(e):(W=Kt,localStorage.setItem("toptech_articles",JSON.stringify(W)))}ut();let nt=[];function Lt(){const e=localStorage.getItem("toptech_categories");e?nt=JSON.parse(e):(nt=["Tin công nghệ","AI","Chuyển đổi số","Review","Phần mềm","IT","Giải pháp công nghệ","Casestudy"],localStorage.setItem("toptech_categories",JSON.stringify(nt)))}Lt();function Ct(){ut(),Lt();const e=document.getElementById("app-content");if(!e)return;e.cleanup&&(e.cleanup(),e.cleanup=null);const i=window.location.hash||"#/",l=document.getElementById("app-header"),a=document.getElementById("app-footer");if(i==="#/admin"||i.startsWith("#/admin")?(l&&(l.style.display="none"),a&&(a.style.display="none")):(l&&(l.style.display="block"),a&&(a.style.display="block")),St(i),i.startsWith("#/ #")){const t=i.split("#")[2];wt(e,W,nt),setTimeout(()=>{const r=document.getElementById(t);r&&r.scrollIntoView({behavior:"smooth"})},100);return}if(i==="#/"||i==="")wt(e,W,nt);else if(i==="#/tat-ca-chuyen-muc")_t(e,W,nt);else if(i==="#/tat-ca-tac-gia")Wt(e,W);else if(i.startsWith("#/tac-gia/")){const t=decodeURIComponent(i.replace("#/tac-gia/",""));Ft(e,t,W)}else if(i.startsWith("#/chuyen-muc/")){const t=i.replace("#/chuyen-muc/","");kt(e,t,W,!1)}else if(i.startsWith("#/tim-kiem/")){const t=i.replace("#/tim-kiem/","");kt(e,t,W,!0)}else if(i.startsWith("#/bai-viet/")){const t=i.replace("#/bai-viet/","");zt(e,t,W)}else i==="#/admin"||i.startsWith("#/admin")?vt(e,W,nt,()=>{ut()}):window.location.hash="#/";i.startsWith("#/ #")||window.scrollTo(0,0)}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("app-header"),i=document.getElementById("app-footer");e&&Et(e),i&&Mt(i),It(l=>{window.location.hash=`#/tim-kiem/${encodeURIComponent(l)}`}),window.addEventListener("hashchange",Ct),Ct()});
