import { getAssetUrl } from '../utils.js';

export function renderFooter(container) {
  container.innerHTML = `
    <footer>
      <div class="container footer-container">
        <!-- Top part: Logo & Description (Row Layout) -->
        <div class="footer-top-row">
          <a href="#/" class="logo">
            <img class="logo-img-footer" src="${getAssetUrl('/logo-toptech-monochrome.svg')}" alt="TopTech Logo Đơn Sắc">
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
  `;
}
