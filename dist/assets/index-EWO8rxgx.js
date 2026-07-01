(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();function B(e){return!e||e.startsWith("http")||e.startsWith("data:")?e:`/TopTech-Blog/${e.replace(/^\//,"")}`}function gt(e){e.innerHTML=`
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
          <img class="logo-img" src="${B("/logo-toptech-color.svg")}" alt="TopTech Logo">
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
  `}function pt(e){const i=document.getElementById("theme-toggle"),c=document.getElementById("menu-toggle"),a=document.getElementById("mega-menu"),t=document.getElementById("mega-menu-close"),r=document.getElementById("mega-menu-backdrop"),o=document.getElementById("search-trigger"),s=document.getElementById("search-overlay"),n=document.getElementById("search-close"),x=document.getElementById("search-input"),k=document.querySelectorAll(".nav-chuyen-muc-trigger");function H(){const f=document.querySelector(".sun-icon"),m=document.querySelector(".moon-icon");!f||!m||(document.body.classList.contains("dark")?(f.style.display="block",m.style.display="none"):(f.style.display="none",m.style.display="block"))}(localStorage.getItem("theme")||"light")==="dark"?document.body.classList.add("dark"):document.body.classList.remove("dark"),H(),i&&i.addEventListener("click",()=>{document.body.classList.contains("dark")?(document.body.classList.remove("dark"),localStorage.setItem("theme","light")):(document.body.classList.add("dark"),localStorage.setItem("theme","dark")),H()});const d=()=>a==null?void 0:a.classList.add("active"),h=()=>a==null?void 0:a.classList.remove("active");c==null||c.addEventListener("click",d),k.forEach(f=>f.addEventListener("click",d)),t==null||t.addEventListener("click",h),r==null||r.addEventListener("click",h);const v=a==null?void 0:a.querySelectorAll("a");v==null||v.forEach(f=>f.addEventListener("click",h)),o&&s&&o.addEventListener("click",()=>{s.classList.add("active"),setTimeout(()=>x==null?void 0:x.focus(),100)});const L=()=>{s==null||s.classList.remove("active"),x&&(x.value="")};n==null||n.addEventListener("click",L),s==null||s.addEventListener("click",f=>{f.target===s&&L()}),x==null||x.addEventListener("keydown",f=>{if(f.key==="Enter"&&e){const m=x.value.trim();m&&(L(),e(m))}})}function mt(e){const i=document.querySelector(".nav-home-link"),c=document.querySelector(".nav-blog-link"),a=document.querySelector(".write-post-btn"),t=document.querySelector(".nav-chuyen-muc-link"),r=document.querySelector(".nav-tac-gia-link");i==null||i.classList.remove("active"),c==null||c.classList.remove("active"),a==null||a.classList.remove("active"),t==null||t.classList.remove("active"),r==null||r.classList.remove("active"),e==="#/"||e===""||e.startsWith("#/ #")?i==null||i.classList.add("active"):e.startsWith("#/tat-ca-chuyen-muc")||e.startsWith("#/chuyen-muc/")?t==null||t.classList.add("active"):e.startsWith("#/tat-ca-tac-gia")||e.startsWith("#/tac-gia/")?r==null||r.classList.add("active"):e.startsWith("#/blog")||e.includes("bai-viet")?c==null||c.classList.add("active"):e.startsWith("#/admin")&&(a==null||a.classList.add("active"))}function ut(e){e.innerHTML=`
    <footer>
      <div class="container footer-container">
        <!-- Top part: Logo & Description (Row Layout) -->
        <div class="footer-top-row">
          <a href="#/" class="logo">
            <img class="logo-img-footer" src="${B("/logo-toptech-monochrome.svg")}" alt="TopTech Logo Đơn Sắc">
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
  `}function rt(e,i,c){e.innerHTML=`
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
  `;let a=0;function t(s){const n=i[s%i.length],x=[i[(s+1)%i.length],i[(s+2)%i.length],i[(s+3)%i.length],i[(s+4)%i.length]],k=document.getElementById("hero-left-container");n&&k&&(k.innerHTML=`
        <img src="${B(n.image)}" alt="${n.title}">
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
      `);const H=document.getElementById("hero-side-container");H&&(H.innerHTML=x.filter(Boolean).map(M=>`
        <div class="side-post-card">
          <img class="side-post-img" src="${B(M.image)}" alt="${M.title}">
          <div class="side-post-info">
            <h4 class="side-post-title"><a href="#/bai-viet/${M.id}">${M.title}</a></h4>
            <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem; display: flex; justify-content: space-between; align-items: center; width: 100%;">
              <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
                <span>${M.author}</span>
                <span class="meta-dot">&bull;</span>
                <span>${M.date}</span>
              </div>
              <div class="meta-right" style="display: flex; align-items: center; gap: 0.6rem; margin-left: auto;">
                <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${M.views}</span>
                <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${M.comments}</span>
              </div>
            </div>
          </div>
        </div>
      `).join(""))}t(a);const r=setInterval(()=>{a=(a+1)%i.length;const s=document.getElementById("hero-left-container"),n=document.getElementById("hero-side-container");s&&n&&(s.style.opacity="0.1",n.style.opacity="0.1",setTimeout(()=>{t(a),s.style.opacity="1",n.style.opacity="1"},300))},5e3),o=document.getElementById("hero-small-grid-container");if(o){const s=i.slice(5,9);o.innerHTML=s.map(n=>`
      <div class="small-post-card">
        <div class="small-post-img-wrapper">
          <img src="${B(n.image)}" alt="${n.title}">
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
    `).join("")}vt(i),ft(i),yt(i,c),bt(i),e.cleanup=()=>{clearInterval(r)}}function vt(e){const i=document.getElementById("featured-numbers-container");if(!i)return;const c=e.filter(t=>t.featured)[0]||e.find(t=>t.id===1),a=e.filter(t=>t.id!==(c==null?void 0:c.id)).slice(0,6);i.innerHTML=a.map((t,r)=>`
    <div class="number-post-card">
      <span class="post-number">#${r+1}</span>
      <div class="number-post-img-wrapper">
        <img src="${B(t.image)}" alt="${t.title}">
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
  `).join("")}function ft(e){const i=document.getElementById("new-updates-content"),c=document.getElementById("col-center-ai"),a=document.getElementById("trending-content"),t=document.getElementById("reviews-content");if(i){const r=e[0]||e.find(n=>n.id===3),o=e[1]||e.find(n=>n.id===4),s=e[2]||e.find(n=>n.id===7);i.innerHTML=[r,o,s].filter(Boolean).map(n=>`
      <div class="post-card-mini">
        <img class="post-card-mini-img" src="${B(n.image)}" alt="${n.title}">
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
    `).join("")}if(c){const r=e.filter(x=>x.category==="AI"),o=r[0]||e.find(x=>x.id===5),s=r[1]||e.find(x=>x.id===6),n=r[2]||e.find(x=>x.id===8);c.innerHTML=`
      <!-- Main Center Post -->
      <div class="center-main-post">
        <a href="#/chuyen-muc/${o.category}" class="center-main-tag">${o.category}</a>
        <h4 class="center-main-title"><a href="#/bai-viet/${o.id}">${o.title}</a></h4>
        <div class="post-meta post-detail-meta" style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.2rem;">
          <span>${o.author} <span class="meta-dot">&bull;&nbsp;</span>${o.date}</span>
        </div>
        <div class="center-main-img-wrapper">
          <img src="${B(o.image)}" alt="${o.title}">
        </div>
      </div>

      <!-- Sub grid (2 cards side by side) -->
      <div class="center-sub-row">
        <!-- Sub Left -->
        <div class="center-sub-card">
          <a href="#/chuyen-muc/${s.category}" class="post-card-mini-tag" style="font-size: 0.65rem;">${s.category}</a>
          <h5 class="center-sub-title"><a href="#/bai-viet/${s.id}">${s.title}</a></h5>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${s.author}</span>
        </div>

        <!-- Sub Right -->
        <div class="center-sub-card">
          <a href="#/chuyen-muc/${n.category}" class="post-card-mini-tag" style="font-size: 0.65rem;">${n.category}</a>
          <h5 class="center-sub-title"><a href="#/bai-viet/${n.id}">${n.title}</a></h5>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${n.author}</span>
        </div>
      </div>
    `}if(a){const r=[...e].sort((o,s)=>(s.views||0)-(o.views||0)).slice(0,5);a.innerHTML=r.map(o=>`
      <div class="trending-post-card">
        <h4 class="trending-post-title"><a href="#/bai-viet/${o.id}">${o.title}</a></h4>
        <div class="post-meta" style="font-size: 0.7rem; color: var(--text-muted);">
          <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
            <span>${o.author}</span>
            <span class="meta-dot">&bull;</span>
            <span>${o.date}</span>
          </div>
        </div>
      </div>
    `).join("")}if(t){const r=e.filter(n=>n.category==="Review"),o=e.filter(n=>n.category!=="Review"),s=[...r,...o].slice(0,4);t.innerHTML=s.map(n=>`
      <div class="review-post-card">
        <div class="review-post-img-wrapper">
          <img src="${B(n.image)}" alt="${n.title}">
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
    `).join("")}}function yt(e,i){const c=document.getElementById("category-columns-container");c&&(c.innerHTML=i.map((a,t)=>{const r=e.filter(s=>s.category===a),o=[];for(let s=0;s<4;s++)o.push(r[s%r.length]||e[(t*2+s)%e.length]);return`
      <div class="category-column">
        <div class="category-header-wrapper">
          <a href="#/chuyen-muc/${a}" class="category-title-header">${a}</a>
        </div>
        <div class="split-col" style="gap: 1rem;">
          ${o.map((s,n)=>`
            <div class="cat-post-card ${n===0?"has-image":""}">
              <div class="cat-post-img-wrapper">
                <img src="${B(s.image)}" alt="${s.title}">
              </div>
              <div class="cat-post-text-wrapper">
                <h4 class="cat-post-title"><a href="#/bai-viet/${s.id}">${s.title}</a></h4>
                <span style="font-size: 0.7rem; color: var(--text-muted);">${s.date}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `}).join(""))}function bt(e){const i=document.getElementById("refresh-new-updates"),c=document.getElementById("new-updates-content");i&&i.addEventListener("click",()=>{i.classList.add("spinning"),setTimeout(()=>{i.classList.remove("spinning");const a=[...e].filter(s=>s.id!==5&&s.id!==6).sort(()=>.5-Math.random()),t=a[0],r=a[1],o=a[2];c&&(c.innerHTML=[t,r,o].map(s=>`
            <div class="post-card-mini">
              <img class="post-card-mini-img" src="${B(s.image||"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=250")}" alt="${s.title}">
              <div class="post-card-mini-info">
                <a href="#/chuyen-muc/${s.category}" class="post-card-mini-tag">${s.category}</a>
                <h4 class="post-card-mini-title"><a href="#/bai-viet/${s.id}">${s.title}</a></h4>
                <div class="post-meta" style="font-size: 0.7rem; color: var(--text-muted);">
                  <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
                    <span>${s.author}</span>
                    <span class="meta-dot">&bull;</span>
                    <span>${s.date}</span>
                  </div>
                </div>
              </div>
            </div>
          `).join(""))},600)})}const at={"Điện thoại":"Tin công nghệ","Máy tính":"Tin công nghệ","Thiết bị thông minh":"Tin công nghệ","Xe điện":"Tin công nghệ","Machine Learning":"AI","Generative AI":"AI","ChatGPT & LLMs":"AI","Thị giác máy tính":"AI","Doanh nghiệp":"Chuyển đổi số","Giải pháp đám mây":"Chuyển đổi số","IoT & Automation":"Chuyển đổi số","Bảo mật dữ liệu":"Chuyển đổi số","Đánh giá Laptop":"Review","Đánh giá Smartphone":"Review","Đồ công nghệ khác":"Review","Trải nghiệm dịch vụ":"Review","Công cụ lập trình":"Phần mềm","Phần mềm văn phòng":"Phần mềm","Hệ điều hành":"Phần mềm","Ứng dụng di động":"Phần mềm","Lập trình":"IT","Quản trị mạng":"IT","Cơ sở dữ liệu":"IT",DevOps:"IT","AI cho doanh nghiệp":"Giải pháp công nghệ","Tự động hóa quy trình":"Giải pháp công nghệ","Hạ tầng số":"Giải pháp công nghệ","ERP & CRM":"Giải pháp công nghệ","Thành công tiêu biểu":"Casestudy","Phân tích thất bại":"Casestudy","Khảo sát thực tế":"Casestudy"},wt={"Tin công nghệ":["Điện thoại","Máy tính","Thiết bị thông minh","Xe điện"],AI:["Machine Learning","Generative AI","ChatGPT & LLMs","Thị giác máy tính"],"Chuyển đổi số":["Doanh nghiệp","Giải pháp đám mây","IoT & Automation","Bảo mật dữ liệu"],Review:["Đánh giá Laptop","Đánh giá Smartphone","Đồ công nghệ khác","Trải nghiệm dịch vụ"],"Phần mềm":["Công cụ lập trình","Phần mềm văn phòng","Hệ điều hành","Ứng dụng di động"],IT:["Lập trình","Quản trị mạng","Cơ sở dữ liệu","DevOps"],"Giải pháp công nghệ":["AI cho doanh nghiệp","Tự động hóa quy trình","Hạ tầng số","ERP & CRM"],Casestudy:["Thành công tiêu biểu","Phân tích thất bại","Khảo sát thực tế"]};function ct(e,i,c,a=!1){const t=decodeURIComponent(i);let r=[],o=at[t],s=!!o;a?r=c.filter(h=>h.title.toLowerCase().includes(t.toLowerCase())||h.category.toLowerCase().includes(t.toLowerCase())||h.subcategory&&h.subcategory.toLowerCase().includes(t.toLowerCase())||h.description&&h.description.toLowerCase().includes(t.toLowerCase())):s?r=c.filter(h=>h.subcategory&&h.subcategory.toLowerCase()===t.toLowerCase()||h.category.toLowerCase()===t.toLowerCase()):r=c.filter(h=>h.category.toLowerCase()===t.toLowerCase()||h.subcategory&&at[h.subcategory]&&at[h.subcategory].toLowerCase()===t.toLowerCase());let n="newest",x=6,k="";if(a)k=`
      <span class="category-eyebrow" style="font-size: 0.95rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--primary-color); display: block; margin-bottom: 0.5rem;">KẾT QUẢ TÌM KIẾM</span>
      <h1 class="category-page-title search-title" style="font-weight: 850; text-transform: uppercase; margin: 0; color: var(--text-primary);">"${t.toUpperCase()}"</h1>
    `;else{const h=s?o:t,v=wt[h]||[];k=`
      <!-- Left: Major category title -->
      <div>
        <h1 class="category-page-title" style="font-weight: 850; text-transform: uppercase; margin: 0; line-height: 1.1; color: var(--text-primary);">
          <a href="#/chuyen-muc/${h}" style="color: inherit; text-decoration: none;">${h.toUpperCase()}</a>
        </h1>
      </div>
      
      <!-- Right: Capsule subcategory tag pills list -->
      <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: center;">
        ${v.map(L=>{const f=t.toLowerCase()===L.toLowerCase();return`
            <a href="#/chuyen-muc/${L}" style="display: inline-block; padding: 0.45rem 1.1rem; font-size: 0.82rem; font-weight: 600; border-radius: 50px; text-decoration: none; border: 1.5px solid ${f?"var(--primary-color)":"var(--border-color)"}; background-color: ${f?"var(--primary-color)":"var(--bg-main)"}; color: ${f?"#fff":"var(--text-secondary)"}; transition: all var(--transition-fast);" class="subcat-pill ${f?"active-pill":""}">
              ${L}
            </a>
          `}).join("")}
      </div>
    `}e.innerHTML=`
    <div class="category-page-header" style="padding: 2.5rem 0; background: var(--bg-surface); border-bottom: 1px solid var(--border-color); transition: background-color var(--transition-normal), border-color var(--transition-normal);">
      <div class="container category-header-content ${a?"search-mode":""}">
        ${k}
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
  `;function H(){const h=document.getElementById("category-grid");if(!h)return;let v=[...r];n==="newest"?v.sort((m,I)=>I.id-m.id):n==="views"?v.sort((m,I)=>I.views-m.views):n==="comments"&&v.sort((m,I)=>I.comments-m.comments);const L=v.slice(0,x);h.innerHTML=L.length===0?`
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px; transition: background-color var(--transition-normal), border-color var(--transition-normal);">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted); margin-bottom: 1rem;"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-primary);">Chưa có bài viết</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 400px; margin: 0 auto;">Chưa có bài viết nào thuộc chuyên mục này. Quản trị viên có thể đăng nhập vào trang Viết bài để cập nhật bài viết mới!</p>
        </div>
      `:L.map(m=>`
      <article class="cat-article-card">
        <div class="cat-card-img-wrapper">
          <img src="${B(m.image)}" alt="${m.title}">
          <a href="#/chuyen-muc/${m.subcategory||m.category}" class="cat-card-category">${m.subcategory||m.category}</a>
        </div>
        <div class="cat-card-content">
          <h3 class="cat-card-title"><a href="#/bai-viet/${m.id}">${m.title}</a></h3>
          <p class="cat-card-description">${m.description||"Chưa có mô tả chi tiết cho bài viết này. Nhấp vào để đọc bài viết..."}</p>
          
          <div class="post-meta post-meta-stack" style="color: var(--text-muted); font-size: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 1rem; margin-top: auto; width: 100%; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
            <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
              <span class="post-author-name">${m.author}</span>
              <span class="meta-dot">&bull;</span>
              <span>${m.date}</span>
            </div>
            <div class="meta-right" style="display: flex; align-items: center; gap: 0.6rem; margin-left: auto;">
              <span style="display: flex; align-items: center; gap: 0.25rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${m.views}
              </span>
              <span style="display: flex; align-items: center; gap: 0.25rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${m.comments}
              </span>
            </div>
          </div>
        </div>
      </article>
    `).join("");const f=document.getElementById("load-more-container");f&&(v.length>x?f.style.display="block":f.style.display="none")}H();const M=document.getElementById("load-more-articles-btn");M&&M.addEventListener("click",()=>{x+=6,H()});const d=document.getElementById("filter-select");d&&d.addEventListener("change",h=>{n=h.target.value,x=6,H()})}typeof window<"u"&&"speechSynthesis"in window&&(window.speechSynthesis.getVoices(),"onvoiceschanged"in window.speechSynthesis&&(window.speechSynthesis.onvoiceschanged=()=>{window.speechSynthesis.getVoices()}));function xt(e){if(!e)return"";if(e.trim().startsWith("<")||e.includes("</p>")||e.includes("</div>")||e.includes("</td>")||e.includes("</figure>"))return e;const i=e.split(`
`);let c=!1,a="",t=[];for(let o=0;o<i.length;o++){let s=i[o].trim();if(s.startsWith("|")&&s.endsWith("|")){c||(c=!0,a='<div class="table-responsive"><table class="post-detail-table">');const n=s.split("|").slice(1,-1).map(k=>k.trim());if(n.every(k=>/^:?-+:?$/.test(k)))continue;a.includes('<table class="post-detail-table">')&&!a.includes("<thead>")&&!a.includes("<tbody>")?a+="<thead><tr>"+n.map(k=>`<th>${k}</th>`).join("")+"</tr></thead><tbody>":a+="<tr>"+n.map(k=>`<td>${k}</td>`).join("")+"</tr>"}else c&&(c=!1,a+="</tbody></table></div>",t.push(a),a=""),t.push(i[o])}c&&(a+="</tbody></table></div>",t.push(a)),e=t.join(`
`);let r=e.replace(/^### (.*$)/gim,'<h3 class="post-subheading-3">$1</h3>').replace(/^## (.*$)/gim,'<h2 class="post-subheading-2">$1</h2>').replace(/^# (.*$)/gim,'<h1 class="post-heading-1">$1</h1>').replace(/\!\[(.*?)\]\((.*?)\)/g,'<figure class="post-inline-figure"><img src="$2" alt="$1"><figcaption class="post-figcaption">$1</figcaption></figure>').replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/^\> (.*$)/gim,'<blockquote class="post-blockquote">$1</blockquote>').replace(/^\- (.*$)/gim,"<li>$1</li>").replace(/\`\`\`([\s\S]*?)\`\`\`/g,'<pre class="post-code-block"><code>$1</code></pre>').replace(/\`(.*?)\`/g,'<code class="post-inline-code">$1</code>').replace(/\n\n/g,"</p><p>");return r=r.replace(/(<li>.*<\/li>)/gim,"<ul>$1</ul>"),`<p>${r}</p>`}function kt(e,i,c){const a=parseInt(i,10),t=c.find(p=>p.id===a)||c[0];t.views+=1,localStorage.setItem("toptech_articles",JSON.stringify(c));const r=c.filter(p=>p.category===t.category&&p.id!==t.id).slice(0,4);t.commentsList||(t.commentsList=[{id:1,author:"Nguyễn Văn Hùng",date:"2 ngày trước",content:"Bài viết rất chi tiết và dễ hiểu! Tôi đang tìm hiểu về vấn đề này và thấy thông tin cực kỳ hữu ích cho công việc thực tế của mình.",avatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=80&h=80"},{id:2,author:"Lê Minh Hạnh",date:"1 ngày trước",content:"TopTech chia sẻ kiến thức chuẩn quá, thiết kế giao diện bài viết đọc rất sướng mắt. Mong nhóm tác giả ra thêm nhiều bài viết sâu hơn nữa!",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80&h=80"}]),e.innerHTML=`
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
            <img src="${B(t.image)}" alt="${t.title}">
          </div>

          <!-- Rich Text Content Body -->
          <div class="post-detail-body">
            ${t.content?`
              <p class="post-lead">${t.description||""}</p>
              ${xt(t.content)}
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
                    <img src="${B(p.image)}" alt="${p.title}">
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
  `;function o(){const p=document.getElementById("comments-list");if(!p)return;p.innerHTML=t.commentsList.map(T=>`
      <div class="comment-item">
        <div class="comment-content">
          <div class="comment-header">
            <span class="comment-author">${T.author}</span>
            <span class="comment-date">${T.date}</span>
          </div>
          <p class="comment-text-p">${T.content}</p>
        </div>
      </div>
    `).join("");const g=document.getElementById("comments-count");g&&(g.textContent=t.commentsList.length)}o();const s=document.getElementById("submit-comment-btn");s&&s.addEventListener("click",()=>{const p=document.getElementById("comment-author-name"),g=document.getElementById("comment-text"),T=p==null?void 0:p.value.trim(),$=g==null?void 0:g.value.trim();if(!T||!$){alert("Vui lòng điền đầy đủ Tên và Nội dung bình luận.");return}const S={id:Date.now(),author:T,date:"Vừa xong",content:$,avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80&h=80"};t.commentsList.unshift(S),t.comments=t.commentsList.length,localStorage.setItem("toptech_articles",JSON.stringify(c)),p&&(p.value=""),g&&(g.value=""),o()});const n=()=>{const p=document.getElementById("reading-bar");if(!p)return;const g=window.scrollY||document.documentElement.scrollTop,T=document.documentElement.scrollHeight-document.documentElement.clientHeight;if(T>0){const $=g/T*100;p.style.width=$+"%"}};window.addEventListener("scroll",n),e.cleanup=()=>{window.removeEventListener("scroll",n)};const x=e.querySelectorAll(".post-detail-body h2"),k=document.getElementById("post-toc-container"),H=document.getElementById("toc-list"),M=document.getElementById("mobile-toc-list");if(x.length>0){e.classList.add("has-toc"),x.forEach((w,b)=>{const E=`toc-section-${b}`;w.id=E}),k&&H&&(k.style.display="block",H.innerHTML=Array.from(x).map((w,b)=>{const E=w.textContent.trim();return`<li><a href="javascript:void(0)" data-target="toc-section-${b}" class="toc-link">${E}</a></li>`}).join("")),M&&(M.innerHTML=Array.from(x).map((w,b)=>{const E=w.textContent.trim();return`<li><a href="javascript:void(0)" data-target="toc-section-${b}" class="mobile-toc-link">${E}</a></li>`}).join(""));const p=e.querySelectorAll(".toc-link"),g=e.querySelectorAll(".mobile-toc-link"),T=w=>{w.forEach(b=>{b.addEventListener("click",E=>{var Y;E.preventDefault();const _=b.dataset.target,N=document.getElementById(_);if(N){const F=N.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:F,behavior:"smooth"}),w.forEach(ht=>ht.classList.remove("active")),b.classList.add("active"),(Y=document.getElementById("mobile-toc-panel"))==null||Y.classList.remove("active")}})})};T(p),T(g);const $=document.getElementById("mobile-toc-toggle"),S=document.getElementById("mobile-toc-panel"),D=document.getElementById("mobile-toc-close"),G=()=>{S==null||S.classList.toggle("active")},X=()=>{S==null||S.classList.remove("active")};$==null||$.addEventListener("click",G),D==null||D.addEventListener("click",X);const W=w=>{S!=null&&S.classList.contains("active")&&!S.contains(w.target)&&!$.contains(w.target)&&X()};document.addEventListener("click",W);const l=()=>{const w=window.scrollY||document.documentElement.scrollTop;let b=-1;x.forEach((_,N)=>{_.offsetTop-110<=w&&(b=N)});const E=_=>{_.forEach((N,Y)=>{Y===b?N.classList.add("active"):N.classList.remove("active")})};E(p),E(g)};window.addEventListener("scroll",l);const y=e.cleanup;e.cleanup=()=>{y&&y(),window.removeEventListener("scroll",l),document.removeEventListener("click",W)}}const d=document.getElementById("quick-edit-post-btn");d==null||d.addEventListener("click",()=>{sessionStorage.setItem("toptech_editing_article_id",t.id),window.location.hash="#/admin"});const h=e.querySelector(".post-detail-body");function v(p){const g=document.getElementById("post-toast");if(!g)return;const T=g.querySelector(".toast-message");T&&(T.textContent=p),g.classList.add("show"),g.timeoutId&&clearTimeout(g.timeoutId),g.timeoutId=setTimeout(()=>{g.classList.remove("show")},2500)}let L=!1,f=!1,m=null,I=0;const u=document.getElementById("post-action-audio"),C=u==null?void 0:u.querySelector(".audio-icon-play"),A=u==null?void 0:u.querySelector(".audio-icon-pause");function R(){typeof responsiveVoice<"u"?responsiveVoice.cancel():"speechSynthesis"in window&&window.speechSynthesis.cancel(),L=!1,f=!1,u==null||u.classList.remove("active"),C&&(C.style.display="block"),A&&(A.style.display="none")}function U(){if(!h)return;const p=`${t.title}. ${h.innerText.trim()}`;if(p)if(typeof responsiveVoice<"u"?responsiveVoice.cancel():"speechSynthesis"in window&&window.speechSynthesis.cancel(),L=!0,f=!1,u==null||u.classList.add("active"),C&&(C.style.display="none"),A&&(A.style.display="block"),typeof responsiveVoice<"u")v("Đang đọc: Giọng trực tuyến (ResponsiveVoice)"),responsiveVoice.speak(p,"Vietnamese Female",{rate:1.1,onend:R,onerror:g=>{console.error("ResponsiveVoice Error:",g),R()}});else if("speechSynthesis"in window){const g=window.speechSynthesis.getVoices();if(g.length===0&&I<3){I++,window.speechSynthesis.getVoices(),setTimeout(U,250);return}I=0,m=new SpeechSynthesisUtterance(p),m.lang="vi-VN",m.rate=1.1;const T=g.find($=>$.lang.toLowerCase().replace("_","-").includes("vi-vn")||$.lang.toLowerCase()==="vi"||$.name.toLowerCase().includes("viet")||$.name.toLowerCase().includes("việt"));T?(m.voice=T,v(`Đang đọc: Giọng hệ thống ${T.name}`)):v("Dùng giọng hệ thống mặc định (Hãy cài giọng tiếng Việt để đọc chuẩn)."),m.onend=()=>{R()},m.onerror=$=>{console.error("Native TTS Error:",$),R()},window.speechSynthesis.speak(m)}else v("Trình duyệt không hỗ trợ nghe đọc bài viết."),R()}u==null||u.addEventListener("click",()=>{L?f?(typeof responsiveVoice<"u"?responsiveVoice.resume():"speechSynthesis"in window&&window.speechSynthesis.resume(),f=!1,u==null||u.classList.add("active"),C&&(C.style.display="none"),A&&(A.style.display="block")):(typeof responsiveVoice<"u"?responsiveVoice.pause():"speechSynthesis"in window&&window.speechSynthesis.pause(),f=!0,u==null||u.classList.remove("active"),C&&(C.style.display="block"),A&&(A.style.display="none")):U()});const K=e.querySelector(".post-main-content");let q=parseInt(localStorage.getItem("toptech_post_font_size"),10)||18;function J(){K&&(K.style.fontSize=`${q}px`,localStorage.setItem("toptech_post_font_size",q))}J();const tt=document.getElementById("post-action-font-inc"),P=document.getElementById("post-action-font-dec");tt==null||tt.addEventListener("click",()=>{q<26?(q+=2,J(),v(`Đã tăng cỡ chữ: ${q}px`)):v("Đã đạt cỡ chữ tối đa.")}),P==null||P.addEventListener("click",()=>{q>14?(q-=2,J(),v(`Đã giảm cỡ chữ: ${q}px`)):v("Đã đạt cỡ chữ tối thiểu.")});const Z=document.getElementById("post-action-share");function et(){navigator.clipboard.writeText(window.location.href).then(()=>{v("Đã sao chép liên kết vào bộ nhớ tạm!")}).catch(()=>{const p=document.createElement("textarea");p.value=window.location.href,p.style.position="fixed",document.body.appendChild(p),p.select();try{document.execCommand("copy"),v("Đã sao chép liên kết vào bộ nhớ tạm!")}catch{v("Không thể sao chép liên kết.")}document.body.removeChild(p)})}Z==null||Z.addEventListener("click",()=>{const p={title:t.title,text:t.description||"",url:window.location.href};navigator.share&&navigator.canShare&&navigator.canShare(p)?navigator.share(p).then(()=>v("Chia sẻ bài viết thành công!")).catch(g=>{g.name!=="AbortError"&&et()}):et()});const O=document.getElementById("post-action-print");O==null||O.addEventListener("click",()=>{window.print()});const Q=document.getElementById("post-action-comments");Q==null||Q.addEventListener("click",()=>{const p=e.querySelector(".post-comments-section");if(p){const $=p.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:$,behavior:"smooth"})}});const V=e.cleanup;e.cleanup=()=>{V&&V(),R()}}const Ct=[{name:"Trí tuệ nhân tạo (AI)",url:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Lập trình / Code",url:"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Đám mây / Dữ liệu",url:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Mạng / Bảo mật",url:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Thiết bị thông minh",url:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800&h=450"},{name:"Văn phòng tối giản",url:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800&h=450"}];function st(e,i,c,a){sessionStorage.getItem("toptech_admin_logged_in")==="true"?$t(e,i,c,a):Tt(e,i,c,a)}function Tt(e,i,c,a){e.innerHTML=`
    <div class="admin-login-wrapper">
      <div class="admin-login-card glass-panel">
        <div class="login-logo-container">
          <img src="${B("/logo-toptech-color.svg")}" alt="TopTech Logo" style="height: 100px; margin: 0 auto;">
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
  `;const t=document.getElementById("admin-password"),r=document.getElementById("login-submit-btn"),o=document.getElementById("login-error-msg"),s=()=>{(t==null?void 0:t.value.trim())==="admin123"?(sessionStorage.setItem("toptech_admin_logged_in","true"),st(e,i,c,a)):(o&&(o.textContent="Mật khẩu không chính xác. Thử lại!",o.style.display="block"),t.style.borderColor="var(--secondary-color)")};r==null||r.addEventListener("click",s),t==null||t.addEventListener("keydown",n=>{n.key==="Enter"&&s()})}function Lt(e){if(!e)return"";if(e.trim().startsWith("<")||e.includes("</p>")||e.includes("</div>")||e.includes("</td>")||e.includes("</figure>"))return e;const i=e.split(`
`);let c=!1,a="",t=[];for(let o=0;o<i.length;o++){let s=i[o].trim();if(s.startsWith("|")&&s.endsWith("|")){c||(c=!0,a='<div class="table-responsive"><table class="post-detail-table">');const n=s.split("|").slice(1,-1).map(k=>k.trim());if(n.every(k=>/^:?-+:?$/.test(k)))continue;a.includes('<table class="post-detail-table">')&&!a.includes("<thead>")&&!a.includes("<tbody>")?a+="<thead><tr>"+n.map(k=>`<th>${k}</th>`).join("")+"</tr></thead><tbody>":a+="<tr>"+n.map(k=>`<td>${k}</td>`).join("")+"</tr>"}else c&&(c=!1,a+="</tbody></table></div>",t.push(a),a=""),t.push(i[o])}c&&(a+="</tbody></table></div>",t.push(a)),e=t.join(`
`);let r=e.replace(/^### (.*$)/gim,'<h3 class="post-subheading-3">$1</h3>').replace(/^## (.*$)/gim,'<h2 class="post-subheading-2">$1</h2>').replace(/^# (.*$)/gim,'<h1 class="post-heading-1">$1</h1>').replace(/\!\[(.*?)\]\((.*?)\)/g,'<figure class="post-inline-figure"><img src="$2" alt="$1"><figcaption class="post-figcaption">$1</figcaption></figure>').replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/^\> (.*$)/gim,'<blockquote class="post-blockquote">$1</blockquote>').replace(/^\- (.*$)/gim,"<li>$1</li>").replace(/\`\`\`([\s\S]*?)\`\`\`/g,'<pre class="post-code-block"><code>$1</code></pre>').replace(/\`(.*?)\`/g,'<code class="post-inline-code">$1</code>').replace(/\n\n/g,"</p><p>");return r=r.replace(/(<li>.*<\/li>)/gim,"<ul>$1</ul>"),`<p>${r}</p>`}function $t(e,i,c,a){let t="list",r=null,o=Ct[0].url;const s=sessionStorage.getItem("toptech_editing_article_id");if(s){const d=parseInt(s,10),h=i.find(v=>v.id===d);h&&(t="create",r=d,o=h.image),sessionStorage.removeItem("toptech_editing_article_id")}function n(){var d,h,v;e.innerHTML=`
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
          <button class="admin-tab-btn ${t==="list"?"active":""}" id="tab-list-btn">
            Danh sách bài viết (${i.length})
          </button>
          <button class="admin-tab-btn ${t==="create"?"active":""}" id="tab-create-btn">
            + Viết bài mới
          </button>
        </div>

        <!-- Tab content area -->
        <div id="admin-tab-content">
          ${t==="list"?x():H()}
        </div>
      </div>
    `,(d=document.getElementById("admin-logout-btn"))==null||d.addEventListener("click",()=>{sessionStorage.removeItem("toptech_admin_logged_in"),st(e,i,c,a)}),(h=document.getElementById("tab-list-btn"))==null||h.addEventListener("click",()=>{t="list",n()}),(v=document.getElementById("tab-create-btn"))==null||v.addEventListener("click",()=>{t="create",r=null,n()}),t==="list"?k():M()}function x(){return`
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
                    Chưa có bài viết nào trong hệ thống. Hãy nhấp vào "Viết bài mới" để tạo bài viết đầu tiên!
                  </td>
                </tr>
              `:i.map(d=>`
                <tr id="article-row-${d.id}">
                  <td>
                    <img class="table-post-thumb" src="${d.image.startsWith("http")||d.image.startsWith("data:")?d.image:B(d.image)}" alt="Thumbnail">
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
    `}function k(){e.querySelectorAll(".edit-post-btn").forEach(v=>{v.addEventListener("click",()=>{const L=parseInt(v.dataset.id,10),f=i.find(m=>m.id===L);f&&(r=L,o=f.image,t="create",n())})}),e.querySelectorAll(".delete-post-btn").forEach(v=>{v.addEventListener("click",()=>{const L=parseInt(v.dataset.id,10),f=i.find(m=>m.id===L);if(confirm(`Bạn có chắc chắn muốn xóa bài viết "${f==null?void 0:f.title}" không? Hành động này không thể hoàn tác.`)){const m=i.filter(u=>u.id!==L);localStorage.setItem("toptech_articles",JSON.stringify(m));const I=document.getElementById(`article-row-${L}`);I&&(I.style.transition="opacity 0.4s ease",I.style.opacity="0",setTimeout(()=>{i.splice(0,i.length,...m),a(),n()},400))}})})}function H(){const d=r?i.find(h=>h.id===r):null;return`
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
                  ${c.map(h=>`<option value="${h}" ${d&&d.category===h?"selected":""}>${h}</option>`).join("")}
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
              <div class="form-row" style="display: none;">
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
              <img id="sidebar-preview-img" src="${o}" alt="Cover Preview" style="height: 200px; width: 100%; object-fit: cover;">
              <span id="sidebar-preview-cat" class="cat-card-category">TIN CÔNG NGHỆ</span>
            </div>
            <div class="cat-card-content" style="padding: 1.5rem;">
              <h3 id="sidebar-preview-title" class="cat-card-title" style="font-size: 1.1rem; line-height:1.4;">Chưa nhập tiêu đề...</h3>
              <p id="sidebar-preview-desc" class="cat-card-description" style="margin-bottom: 1.5rem;">Nhập sapo để xem trước phần tóm tắt của bài viết tại đây.</p>
              
              <div class="post-meta post-meta-stack" style="color: var(--text-muted); font-size: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 1rem; width: 100%; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
                <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
                  <span id="sidebar-preview-author">Ms. Phương Linh</span>
                  <span class="meta-dot">&bull;</span>
                  <span id="sidebar-preview-time">0 phút để đọc</span>
                </div>
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
    `}function M(){const d=document.getElementById("post-title"),h=document.getElementById("post-category"),v=document.getElementById("post-subcategory"),L=document.getElementById("post-featured"),f=document.getElementById("post-author-name"),m=document.getElementById("post-author-tag"),I=document.getElementById("post-description"),u=document.getElementById("post-content"),C=document.getElementById("publish-post-btn"),A=document.getElementById("sidebar-preview-img"),R=document.getElementById("sidebar-preview-cat"),U=document.getElementById("sidebar-preview-title"),K=document.getElementById("sidebar-preview-desc"),q=document.getElementById("sidebar-preview-author"),J=document.getElementById("sidebar-preview-time"),tt={"Tin công nghệ":["Điện thoại","Máy tính","Thiết bị thông minh","Xe điện"],AI:["Machine Learning","Generative AI","ChatGPT & LLMs","Thị giác máy tính"],"Chuyển đổi số":["Doanh nghiệp","Giải pháp đám mây","IoT & Automation","Bảo mật dữ liệu"],Review:["Đánh giá Laptop","Đánh giá Smartphone","Đồ công nghệ khác","Trải nghiệm dịch vụ"],"Phần mềm":["Công cụ lập trình","Phần mềm văn phòng","Hệ điều hành","Ứng dụng di động"],IT:["Lập trình","Quản trị mạng","Cơ sở dữ liệu","DevOps"],"Giải pháp công nghệ":["AI cho doanh nghiệp","Tự động hóa quy trình","Hạ tầng số","ERP & CRM"],Casestudy:["Thành công tiêu biểu","Phân tích thất bại","Khảo sát thực tế"]},P=r?i.find(l=>l.id===r):null;if(P&&u){u.innerHTML=P.content,o=P.image,A&&(A.src=o),R&&(R.textContent=(P.subcategory||P.category).toUpperCase()),U&&(U.textContent=P.title),K&&(K.textContent=P.description),q&&(q.textContent=`${P.author}`);const l=document.getElementById("upload-dropzone");l&&(l.style.borderColor="var(--primary-color)",l.innerHTML=`
          <div style="text-align: center; color: var(--primary-color);">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:0.3rem;"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <p style="font-weight:600; font-size:0.85rem;">Đã chọn ảnh bìa hiện tại!</p>
            <p style="font-size:0.7rem; color:var(--text-muted); margin-top:0.2rem;">(Click hoặc kéo thả file khác để thay đổi)</p>
          </div>
        `)}const Z=(l,y="")=>{if(!v)return;const w=tt[l]||[];v.innerHTML='<option value="">-- Không có --</option>'+w.map(b=>`<option value="${b}" ${y===b?"selected":""}>${b}</option>`).join("")};h&&Z(h.value,P?P.subcategory:"");function et(){const l=(u==null?void 0:u.innerText.trim())||"",y=l?l.split(/\s+/).length:0,w=Math.max(1,Math.ceil(y/200)),b=document.getElementById("word-count-indicator"),E=document.getElementById("reading-time-indicator");return b&&(b.textContent=`${y} từ`),E&&(E.textContent=`${w} phút đọc`),J&&(J.innerHTML=`${w} phút để đọc`),`${w<10?"0":""}${w} phút để đọc`}d==null||d.addEventListener("input",l=>{U&&(U.textContent=l.target.value.trim()||"Chưa nhập tiêu đề...")}),h==null||h.addEventListener("change",l=>{Z(l.target.value),R&&(R.textContent=l.target.value.toUpperCase())}),v==null||v.addEventListener("change",l=>{R&&(R.textContent=(l.target.value||(h==null?void 0:h.value)||"").toUpperCase())}),f==null||f.addEventListener("input",l=>{q&&(q.textContent=`${l.target.value.trim()}`)}),m==null||m.addEventListener("input",l=>{if(q){const y=(f==null?void 0:f.value.trim())||"";q.textContent=`${y}`}}),I==null||I.addEventListener("input",l=>{K&&(K.textContent=l.target.value.trim()||"Nhập sapo để xem trước phần tóm tắt của bài viết tại đây.")}),u==null||u.addEventListener("input",()=>{et()});const O=(l,y=null)=>{document.execCommand(l,!1,y),u==null||u.focus(),u==null||u.dispatchEvent(new Event("input"))};e.querySelectorAll(".toolbar-btn[data-cmd]").forEach(l=>{l.addEventListener("click",()=>{const y=l.dataset.cmd,w=l.dataset.val||null;if(y==="createLink"){const b=prompt("Nhập đường dẫn liên kết (ví dụ: https://google.com):");b&&O(y,b)}else y==="insertHTML-table"?O("insertHTML",`
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
          `):O(y,w)})});const Q=document.getElementById("btn-insert-inline-img"),V=document.getElementById("inline-img-file-input"),p=l=>{if(!l)return;const y=new FileReader;y.onload=w=>{const E=`
          <figure class="post-inline-figure">
            <img src="${w.target.result}" alt="Ảnh chèn bài">
            <figcaption class="post-figcaption">Chú thích hình ảnh của bạn</figcaption>
          </figure><p><br></p>
        `;O("insertHTML",E)},y.readAsDataURL(l)};Q==null||Q.addEventListener("click",()=>{V==null||V.click()}),V==null||V.addEventListener("change",l=>{p(l.target.files[0])}),u==null||u.addEventListener("paste",l=>{var w;const y=(w=l.clipboardData)==null?void 0:w.items;if(y){for(let b=0;b<y.length;b++)if(y[b].type.indexOf("image")!==-1){l.preventDefault();const E=y[b].getAsFile();p(E);break}}});const g=document.getElementById("upload-dropzone"),T=document.getElementById("cover-file-input"),$=document.getElementById("post-cover-url");g==null||g.addEventListener("click",()=>{T==null||T.click()});const S=l=>{if(!l)return;const y=new FileReader;y.onload=w=>{o=w.target.result,A&&(A.src=o),g&&(g.style.borderColor="var(--primary-color)",g.innerHTML=`
            <div style="text-align: center; color: var(--primary-color);">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:0.3rem;"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <p style="font-weight:600; font-size:0.85rem;">Đã chọn ảnh bìa thành công!</p>
              <p style="font-size:0.75rem; color:var(--text-muted); text-overflow:ellipsis; overflow:hidden; white-space:nowrap; max-width:250px;">${l.name||"Ảnh dán từ clipboard"}</p>
              <p style="font-size:0.7rem; color:var(--text-muted); margin-top:0.2rem;">(Click hoặc kéo thả file khác để thay đổi)</p>
            </div>
          `)},y.readAsDataURL(l)};T==null||T.addEventListener("change",l=>{S(l.target.files[0])}),g==null||g.addEventListener("dragover",l=>{l.preventDefault(),g&&(g.style.borderColor="var(--primary-color)")}),g==null||g.addEventListener("dragleave",()=>{g&&(g.style.borderColor="var(--border-color)")}),g==null||g.addEventListener("drop",l=>{l.preventDefault(),g&&(g.style.borderColor="var(--border-color)"),S(l.dataTransfer.files[0])}),g&&(g.setAttribute("tabindex","0"),g.addEventListener("paste",l=>{var w;const y=(w=l.clipboardData)==null?void 0:w.items;if(y){for(let b=0;b<y.length;b++)if(y[b].type.indexOf("image")!==-1){l.preventDefault();const E=y[b].getAsFile();S(E);break}}})),$==null||$.addEventListener("input",l=>{const y=l.target.value.trim();y&&(o=y,A&&(A.src=o))});const D=document.getElementById("editor-write-tab"),G=document.getElementById("editor-preview-tab"),X=document.getElementById("editor-textarea-wrapper"),W=document.getElementById("editor-preview-wrapper");D==null||D.addEventListener("click",()=>{D.classList.add("active"),G==null||G.classList.remove("active"),X&&(X.style.display="block"),W&&(W.style.display="none")}),G==null||G.addEventListener("click",()=>{if(G.classList.add("active"),D==null||D.classList.remove("active"),X&&(X.style.display="none"),W){W.style.display="block";const l=(u==null?void 0:u.innerHTML)||"";W.innerHTML=l?Lt(l):'<p style="color:var(--text-muted); font-style:italic;">Chưa viết nội dung bài viết để xem trước...</p>'}}),C==null||C.addEventListener("click",()=>{const l=d==null?void 0:d.value.trim(),y=h==null?void 0:h.value,w=(v==null?void 0:v.value)||"",b=f==null?void 0:f.value.trim(),E=(m==null?void 0:m.value.trim())||"",_=I==null?void 0:I.value.trim(),N=u==null?void 0:u.innerHTML.trim(),Y=L==null?void 0:L.checked;if(!l||!y||!b||!_||!N){alert("Vui lòng nhập đầy đủ các trường thông tin bắt buộc (*).");return}C.disabled=!0,C.textContent="⏳ Đang chuẩn bị xuất bản...",setTimeout(()=>{const nt=et();if(r){const j=i.find(F=>F.id===r);j&&(j.title=l,j.category=y,j.subcategory=w,j.image=o,j.author=b,j.authorTag=E,j.description=_,j.content=N,j.featured=Y,j.readTime=nt);try{localStorage.setItem("toptech_articles",JSON.stringify(i)),a(),C.style.backgroundColor="#10b981",C.style.borderColor="#10b981",C.innerHTML="✓ Cập nhật bài viết thành công!",r=null,setTimeout(()=>{window.location.hash="#/"},1200)}catch{C.disabled=!1,C.style.backgroundColor="var(--secondary-color)",C.style.borderColor="var(--secondary-color)",C.textContent="💾 Thử lại",alert("Lỗi lưu trữ: Bài viết có dung lượng quá lớn. Vui lòng nén bớt dung lượng ảnh trước khi lưu!")}}else{const j={id:Date.now(),title:l,category:y,subcategory:w,image:o,author:b,authorTag:E,date:"Vừa đăng",readTime:nt,views:0,comments:0,featured:Y,description:_,content:N,commentsList:[]};try{const F=[j,...i];localStorage.setItem("toptech_articles",JSON.stringify(F)),i.splice(0,i.length,...F),a(),C.style.backgroundColor="#10b981",C.style.borderColor="#10b981",C.innerHTML="✓ Bài viết đã xuất bản thành công!",setTimeout(()=>{window.location.hash="#/"},1200)}catch{C.disabled=!1,C.style.backgroundColor="var(--secondary-color)",C.style.borderColor="var(--secondary-color)",C.textContent="🚀 Thử lại",alert("Lỗi lưu trữ: Bài viết có dung lượng quá lớn. Vui lòng nén bớt dung lượng ảnh trước khi chèn!")}}},1e3)})}n()}const Et={AI:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=600&h=400","Tin công nghệ":"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400","Chuyển đổi số":"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",Review:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600&h=400","Phần mềm":"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=600&h=400",IT:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400","Giải pháp công nghệ":"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400",Casestudy:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=400"};function It(e,i,c){const a=c.map(t=>{const r=i.filter(s=>s.category===t).length,o=Et[t]||"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400";return`
      <a href="#/chuyen-muc/${t}" class="category-list-card">
        <div class="category-list-img-wrapper">
          <img src="${o}" alt="${t}">
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
  `}const dt={"Phương Linh":{avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",role:"Content Writer",desc:"Ms. Phương Linh là cây bút cốt cán tại TopTech chuyên viết về Trí tuệ nhân tạo (AI), các dòng máy tính xách tay cấu hình cao cho lập trình và tin tức công nghệ nóng hổi nhất thế giới."},"Ngọc Thanh":{avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",role:"Content Writer",desc:"Ms. Ngọc Thanh chuyên phân tích và đánh giá chuyên sâu các thiết bị di động, smartphone thông minh, xe điện và các xu hướng phần cứng mới nhất."},"Lê Mạnh":{avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",role:"CEO & Founder",desc:"Mr. Lê Mạnh là nhà sáng lập kiêm Giám đốc điều hành của TopTech. Anh chia sẻ những định hướng phát triển chiến lược công nghệ và chuyển đổi số cho doanh nghiệp."},"Kim Phượng":{avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",role:"Content Writer",desc:"Ms. Kim Phượng đam mê nghiên cứu ứng dụng phần mềm văn phòng, công cụ năng suất hỗ trợ công việc và các casestudy chuyển đổi số thành công thực tế."},"Trà My":{avatar:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",role:"Software Developer",desc:"Ms. Trà My là kỹ sư phát triển phần mềm chuyên nghiệp. Cô chia sẻ các bài viết kỹ thuật sâu về cơ sở dữ liệu, Docker, quy trình CI/CD và bảo mật hệ thống."},"Khánh Nam":{avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",role:"Tech Lead",desc:"Mr. Khánh Nam có 8 năm kinh nghiệm trong lĩnh vực phát triển Frontend và các mô hình ngôn ngữ lớn (LLM). Anh viết về kinh nghiệm tối ưu hóa mã nguồn và công cụ IDE."},"Quốc Anh":{avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",role:"Hardware Expert",desc:"Mr. Quốc Anh là chuyên gia review phần cứng cao cấp và các dòng bàn phím cơ. Anh chia sẻ những cảm nhận chân thực sau thời gian dài sử dụng thiết bị."},"Minh Tâm":{avatar:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",role:"Cloud Specialist",desc:"Ms. Minh Tâm là chuyên viên điện toán đám mây. Cô tập trung phân tích bài viết về giải pháp hạ tầng AWS, Azure, và các bước chuyển đổi số tối ưu chi phí cho startup."},"Hoàng Long":{avatar:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150",role:"Solutions Architect",desc:"Mr. Hoàng Long chuyên khảo sát thực tế và phân tích casestudy thành công hay thất bại của các tập đoàn công nghệ lớn khi xây dựng hệ thống dữ liệu khổng lồ."}};function Mt(e,i){const a=Array.from(new Set(i.map(t=>t.author).filter(Boolean))).map(t=>{const r=dt[t]||{avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80&h=80",role:"Cộng tác viên"},o=i.filter(s=>s.author===t).length;return`
      <a href="#/tac-gia/${encodeURIComponent(t)}" class="author-list-card">
        <div class="author-list-avatar-wrapper">
          <img class="author-list-avatar" src="${r.avatar}" alt="${t}">
        </div>
        <h3 class="author-list-name">${t}</h3>
        <span class="author-list-role">${r.role}</span>
        <span class="author-list-count-badge">${o} bài viết</span>
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
  `}function Bt(e,i,c){const a=dt[i]||{avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80&h=80",role:"Cộng tác viên",desc:"Tác giả chia sẻ các bài viết kiến thức hữu ích tại TopTech."},t=c.filter(o=>o.author===i),r=t.length===0?`
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px;">
        <p style="color: var(--text-muted); font-size: 0.95rem;">Tác giả này chưa đăng tải bài viết nào.</p>
      </div>
    `:t.map(o=>`
      <article class="cat-article-card" style="margin-bottom: 2rem;">
        <div class="cat-card-img-wrapper">
          <img src="${B(o.image)}" alt="${o.title}">
          <a href="#/chuyen-muc/${o.subcategory||o.category}" class="cat-card-category">${o.subcategory||o.category}</a>
        </div>
        <div class="cat-card-content">
          <h3 class="cat-card-title"><a href="#/bai-viet/${o.id}">${o.title}</a></h3>
          <p class="cat-card-description">${o.description||"Chưa có mô tả chi tiết cho bài viết này. Nhấp vào để đọc bài viết..."}</p>
          
          <div class="post-meta" style="color: var(--text-muted); font-size: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 1rem; margin-top: auto; width: 100%; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
            <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
              <span class="post-author-name">${o.author}</span>
              <span class="meta-dot">&bull;</span>
              <span>${o.date}</span>
            </div>
            <div class="meta-right" style="display: flex; align-items: center; gap: 0.6rem; margin-left: auto;">
              <span style="display: flex; align-items: center; gap: 0.25rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${o.views}
              </span>
              <span style="display: flex; align-items: center; gap: 0.25rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${o.comments}
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
  `}const St=[{id:1,title:"Top 20 công cụ AI tốt nhất năm 2026",category:"AI",image:"hero_robot.png",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",readTime:"02 phút để đọc",views:1357,comments:26,featured:!0,description:"Khám phá danh sách các công cụ Trí tuệ Nhân tạo đột phá nhất năm 2026, giúp tự động hóa công việc, tăng hiệu suất gấp 5 lần và tối ưu hóa quy trình làm việc của cá nhân cũng như doanh nghiệp."},{id:2,title:"Top 15 laptop cho lập trình viên chuyên nghiệp",category:"Tin công nghệ",image:"coding_laptop.png",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",readTime:"02 phút để đọc",views:1357,comments:26,featured:!0,description:"Đánh giá chi tiết top 15 dòng máy tính xách tay cấu hình cao, pin trâu và bàn phím gõ êm nhất dành riêng cho các kỹ sư phần mềm và lập trình viên chuyên nghiệp năm nay."},{id:3,title:"So sánh ưu điểm ChatGPT vs Claude vs Gemini năm nay",category:"AI",image:"https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:1357,comments:26,featured:!1},{id:4,title:"Mô hình ngôn ngữ lớn LLM đang thay đổi lập trình thế nào",category:"AI",image:"https://images.unsplash.com/photo-1684369175833-3d026dc6a066?auto=format&fit=crop&q=80&w=400&h=250",author:"Khánh Nam",authorTag:"#CTAD02",date:"1 ngày trước",views:945,comments:14,featured:!1},{id:5,title:"EUROPE IS PUSHING BACK ON WASHINGTON’S CHIP WAR",category:"AI",image:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=450",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:894,comments:15,description:`At high-stakes meetings with the White House, Anthropic's cofounder—a "weirdo," per one official—has been replaced by cofounder Tom Brown to lead negotiations on silicon sanctions.`},{id:6,title:"I Met With China’s Top AI Experts. They’re Freaking Out, Too",category:"AI",image:"https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:1102,comments:42,description:"The AI arms race between China and the US has researchers on both sides worried about a “Chernobyl moment” for automated systems."},{id:7,title:"Đánh giá chi tiết Keychron Q1 Pro sau 6 tháng sử dụng",category:"Review",image:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=400&h=250",author:"Quốc Anh",authorTag:"#CTAD03",date:"2 ngày trước",views:520,comments:9},{id:8,title:"A24 Knows You’re Mad About the Google AI Collab",category:"AI",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:932,comments:18},{id:9,title:"Meta tạm dừng chương trình theo dõi nhân viên sau sự cố rò rỉ dữ liệu",category:"Tin công nghệ",image:"https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:2405,comments:63},{id:10,title:"Chính phủ Mỹ yêu cầu nhân viên gỡ bỏ ứng dụng lạ trên điện thoại công vụ",category:"Tin công nghệ",image:"https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=400&h=250",author:"Phương Linh",authorTag:"#CTAD01",date:"12 giờ trước",views:3108,comments:72},{id:11,title:"Hành trình chuyển đổi số của doanh nghiệp bán lẻ Việt Nam",category:"Chuyển đổi số",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=250",author:"Minh Tâm",authorTag:"#CTAD04",date:"3 ngày trước",views:1823,comments:29},{id:12,title:"Chiến lược tối ưu hóa hạ tầng đám mây cho startup năm 2026",category:"Chuyển đổi số",image:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=400&h=250",author:"Minh Tâm",authorTag:"#CTAD04",date:"4 ngày trước",views:1245,comments:11},{id:13,title:"Đánh giá chi tiết màn hình Dell UltraSharp U2723QE 4K",category:"Review",image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400&h=250",author:"Quốc Anh",authorTag:"#CTAD03",date:"5 ngày trước",views:890,comments:15},{id:14,title:"VS Code vs WebStorm: IDE nào tốt hơn cho lập trình Frontend",category:"Phần mềm",image:"https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=400&h=250",author:"Khánh Nam",authorTag:"#CTAD02",date:"1 tuần trước",views:3105,comments:54},{id:15,title:"Xây dựng hệ thống CI/CD hoàn chỉnh với Docker và GitHub Actions",category:"IT",image:"https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=400&h=250",author:"Trà My",authorTag:"#CTAD05",date:"1 tuần trước",views:2200,comments:31},{id:16,title:"Bảo mật API trong kiến trúc Microservices thế nào cho đúng",category:"IT",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400&h=250",author:"Trà My",authorTag:"#CTAD05",date:"1 tuần trước",views:1780,comments:19},{id:17,title:"Ứng dụng AI tổng hợp để tăng năng suất cho doanh nghiệp",category:"Giải pháp công nghệ",image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&h=250",author:"Hoàng Long",authorTag:"#CTAD06",date:"2 tuần trước",views:1450,comments:22},{id:18,title:"Casestudy: Uber đã di chuyển hạ tầng dữ liệu khổng lồ thế nào",category:"Casestudy",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400&h=250",author:"Hoàng Long",authorTag:"#CTAD06",date:"3 tuần trước",views:2900,comments:48}];let z=[];function ot(){const e=localStorage.getItem("toptech_articles");e?z=JSON.parse(e):(z=St,localStorage.setItem("toptech_articles",JSON.stringify(z)))}ot();const it=["Tin công nghệ","AI","Chuyển đổi số","Review","Phần mềm","IT","Giải pháp công nghệ","Casestudy"];function lt(){ot();const e=document.getElementById("app-content");if(!e)return;e.cleanup&&(e.cleanup(),e.cleanup=null);const i=window.location.hash||"#/";if(mt(i),i.startsWith("#/ #")){const c=i.split("#")[2];rt(e,z,it),setTimeout(()=>{const a=document.getElementById(c);a&&a.scrollIntoView({behavior:"smooth"})},100);return}if(i==="#/"||i==="")rt(e,z,it);else if(i==="#/tat-ca-chuyen-muc")It(e,z,it);else if(i==="#/tat-ca-tac-gia")Mt(e,z);else if(i.startsWith("#/tac-gia/")){const c=decodeURIComponent(i.replace("#/tac-gia/",""));Bt(e,c,z)}else if(i.startsWith("#/chuyen-muc/")){const c=i.replace("#/chuyen-muc/","");ct(e,c,z,!1)}else if(i.startsWith("#/tim-kiem/")){const c=i.replace("#/tim-kiem/","");ct(e,c,z,!0)}else if(i.startsWith("#/bai-viet/")){const c=i.replace("#/bai-viet/","");kt(e,c,z)}else i==="#/admin"||i.startsWith("#/admin")?st(e,z,it,()=>{ot()}):window.location.hash="#/";i.startsWith("#/ #")||window.scrollTo(0,0)}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("app-header"),i=document.getElementById("app-footer");e&&gt(e),i&&ut(i),pt(c=>{window.location.hash=`#/tim-kiem/${encodeURIComponent(c)}`}),window.addEventListener("hashchange",lt),lt()});
