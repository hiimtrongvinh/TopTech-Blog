import { getAssetUrl } from '../utils.js';

// Pre-defined high quality technology image options for users to select quickly
const PRESET_IMAGES = [
  { name: 'Trí tuệ nhân tạo (AI)', url: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800&h=450' },
  { name: 'Lập trình / Code', url: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800&h=450' },
  { name: 'Đám mây / Dữ liệu', url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800&h=450' },
  { name: 'Mạng / Bảo mật', url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=450' },
  { name: 'Thiết bị thông minh', url: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800&h=450' },
  { name: 'Văn phòng tối giản', url: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800&h=450' }
];

export function renderPublishPage(container, articles, categories, onUpdate) {
  // Check Login Status from sessionStorage
  const isLoggedIn = sessionStorage.getItem("toptech_admin_logged_in") === "true";

  if (!isLoggedIn) {
    renderLoginScreen(container, articles, categories, onUpdate);
  } else {
    renderAdminDashboard(container, articles, categories, onUpdate);
  }
}

// 1. Sleek login screen for admin authentication
function renderLoginScreen(container, articles, categories, onUpdate) {
  container.innerHTML = `
    <div class="admin-login-wrapper">
      <div class="admin-login-card glass-panel">
        <div class="login-logo-container">
          <img src="${getAssetUrl('/logo-toptech-color.svg')}" alt="TopTech Logo" style="height: 100px; margin: 0 auto;">
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
  `;

  const passwordInput = document.getElementById("admin-password");
  const submitBtn = document.getElementById("login-submit-btn");
  const errorMsg = document.getElementById("login-error-msg");

  const handleLogin = () => {
    const password = passwordInput?.value.trim();
    if (password === "admin123") {
      sessionStorage.setItem("toptech_admin_logged_in", "true");
      renderPublishPage(container, articles, categories, onUpdate);
    } else {
      if (errorMsg) {
        errorMsg.textContent = "Mật khẩu không chính xác. Thử lại!";
        errorMsg.style.display = "block";
      }
      if (passwordInput) passwordInput.style.borderColor = "var(--secondary-color)";
    }
  };

  submitBtn?.addEventListener("click", handleLogin);
  passwordInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleLogin();
  });
}

// Simple markdown compiler helper
function compileMarkdown(markdown) {
  if (!markdown) return "";
  if (markdown.trim().startsWith('<') || markdown.includes('</p>') || markdown.includes('</div>') || markdown.includes('</td>') || markdown.includes('</figure>')) {
    return markdown;
  }
  
  const lines = markdown.split('\n');
  let inTable = false;
  let tableHtml = "";
  let newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (line.startsWith('|') && line.endsWith('|')) {
      if (!inTable) {
        inTable = true;
        tableHtml = '<div class="table-responsive"><table class="post-detail-table">';
      }
      
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      const isSeparator = cells.every(c => /^:?-+:?$/.test(c));
      if (isSeparator) continue;
      
      if (tableHtml.includes('<table class="post-detail-table">') && !tableHtml.includes('<thead>') && !tableHtml.includes('<tbody>')) {
        tableHtml += '<thead><tr>' + cells.map(c => `<th>${c}</th>`).join('') + '</tr></thead><tbody>';
      } else {
        tableHtml += '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
      }
    } else {
      if (inTable) {
        inTable = false;
        tableHtml += '</tbody></table></div>';
        newLines.push(tableHtml);
        tableHtml = "";
      }
      newLines.push(lines[i]);
    }
  }
  if (inTable) {
    tableHtml += '</tbody></table></div>';
    newLines.push(tableHtml);
  }
  markdown = newLines.join('\n');

  let html = markdown
    .replace(/^### (.*$)/gim, '<h3 class="post-subheading-3">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="post-subheading-2">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="post-heading-1">$1</h1>')
    .replace(/\!\[(.*?)\]\((.*?)\)/g, '<figure class="post-inline-figure"><img src="$2" alt="$1"><figcaption class="post-figcaption">$1</figcaption></figure>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^\> (.*$)/gim, '<blockquote class="post-blockquote">$1</blockquote>')
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/\`\`\`([\s\S]*?)\`\`\?/g, '<pre class="post-code-block"><code>$1</code></pre>')
    .replace(/\`(.*?)\`/g, '<code class="post-inline-code">$1</code>')
    .replace(/\n\n/g, '</p><p>');

  html = html.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>');
  return `<p>${html}</p>`;
}

// 2. Main Admin Dashboard View
function renderAdminDashboard(container, articles, categories, onUpdate) {
  let activeTab = 'articles'; // 'articles' | 'categories' | 'authors'
  let articleMode = 'list'; // 'list' | 'write'
  let editingArticleId = null;
  let selectedCoverUrl = PRESET_IMAGES[0].url;

  // Form edit states
  let editingCategoryName = null; // String name or null
  let editingAuthorName = null; // String name or null

  // Check redirects from quick edit
  const redirectEditId = sessionStorage.getItem("toptech_editing_article_id");
  if (redirectEditId) {
    const editId = parseInt(redirectEditId, 10);
    const postExists = articles.find(a => a.id === editId);
    if (postExists) {
      activeTab = 'articles';
      articleMode = 'write';
      editingArticleId = editId;
      selectedCoverUrl = postExists.image;
    }
    sessionStorage.removeItem("toptech_editing_article_id");
  }

  function getCategoriesDb() {
    const stored = localStorage.getItem("toptech_categories");
    return stored ? JSON.parse(stored) : categories;
  }

  function saveCategoriesDb(cats) {
    localStorage.setItem("toptech_categories", JSON.stringify(cats));
  }

  function getSubcategoriesDb() {
    const stored = localStorage.getItem("toptech_subcategories");
    const defaultSubs = {
      "Tin công nghệ": ["Điện thoại", "Máy tính", "Thiết bị thông minh", "Xe điện"],
      "AI": ["Machine Learning", "Generative AI", "ChatGPT & LLMs", "Thị giác máy tính"],
      "Chuyển đổi số": ["Doanh nghiệp", "Giải pháp đám mây", "IoT & Automation", "Bảo mật dữ liệu"],
      "Review": ["Đánh giá Laptop", "Đánh giá Smartphone", "Đồ công nghệ khác", "Trải nghiệm dịch vụ"],
      "Phần mềm": ["Công cụ lập trình", "Phần mềm văn phòng", "Hệ điều hành", "Ứng dụng di động"],
      "IT": ["Lập trình", "Quản trị mạng", "Cơ sở dữ liệu", "DevOps"],
      "Giải pháp công nghệ": ["AI cho doanh nghiệp", "Tự động hóa quy trình", "Hạ tầng số", "ERP & CRM"],
      "Casestudy": ["Thành công tiêu biểu", "Phân tích thất bại", "Khảo sát thực tế"]
    };
    return stored ? JSON.parse(stored) : defaultSubs;
  }

  function saveSubcategoriesDb(subs) {
    localStorage.setItem("toptech_subcategories", JSON.stringify(subs));
  }

  function getAuthorsDb() {
    const stored = localStorage.getItem("toptech_authors");
    const defaultAuthors = [
      { name: "Phương Linh", role: "Content Writer", desc: "Ms. Phương Linh là cây bút cốt cán tại TopTech chuyên viết về Trí tuệ nhân tạo (AI)...", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" },
      { name: "Ngọc Thanh", role: "Content Writer", desc: "Ms. Ngọc Thanh chuyên phân tích và đánh giá chuyên sâu các thiết bị di động...", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150" },
      { name: "Lê Mạnh", role: "CEO & Founder", desc: "Mr. Lê Mạnh là nhà sáng lập kiêm Giám đốc điều hành của TopTech...", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150" },
      { name: "Kim Phượng", role: "Content Writer", desc: "Ms. Kim Phượng đam mê nghiên cứu ứng dụng phần mềm văn phòng...", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150" },
      { name: "Trà My", role: "Software Developer", desc: "Ms. Trà My là kỹ sư phát triển phần mềm chuyên nghiệp...", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150" }
    ];
    return stored ? JSON.parse(stored) : defaultAuthors;
  }

  function saveAuthorsDb(authors) {
    localStorage.setItem("toptech_authors", JSON.stringify(authors));
  }

  function renderView() {
    container.innerHTML = `
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
          <button class="admin-tab-btn ${activeTab === 'articles' ? 'active' : ''}" id="tab-articles-btn">
            Quản lý bài viết
          </button>
          <button class="admin-tab-btn ${activeTab === 'categories' ? 'active' : ''}" id="tab-categories-btn">
            Quản lý chuyên mục
          </button>
          <button class="admin-tab-btn ${activeTab === 'authors' ? 'active' : ''}" id="tab-authors-btn">
            Quản lý tác giả
          </button>
        </div>

        <!-- Tab content area -->
        <div id="admin-tab-content">
          ${activeTab === 'articles' ? renderArticlesTab() : activeTab === 'categories' ? renderCategoriesTab() : renderAuthorsTab()}
        </div>
      </div>
    `;

    // Bind tab clicks
    document.getElementById("admin-logout-btn")?.addEventListener("click", () => {
      sessionStorage.removeItem("toptech_admin_logged_in");
      renderPublishPage(container, articles, categories, onUpdate);
    });

    document.getElementById("tab-articles-btn")?.addEventListener("click", () => {
      activeTab = 'articles';
      articleMode = 'list';
      renderView();
    });

    document.getElementById("tab-categories-btn")?.addEventListener("click", () => {
      activeTab = 'categories';
      editingCategoryName = null;
      renderView();
    });

    document.getElementById("tab-authors-btn")?.addEventListener("click", () => {
      activeTab = 'authors';
      editingAuthorName = null;
      renderView();
    });

    // Bind events based on active tab
    if (activeTab === 'articles') {
      if (articleMode === 'list') {
        bindArticlesListEvents();
      } else {
        bindArticlesWriteEvents();
      }
    } else if (activeTab === 'categories') {
      bindCategoriesEvents();
    } else if (activeTab === 'authors') {
      bindAuthorsEvents();
    }
  }

  // --------------------------------------------------------------------------
  // TAB: ARTICLES
  // --------------------------------------------------------------------------
  function renderArticlesTab() {
    if (articleMode === 'list') {
      return `
        <div style="display: flex; justify-content: flex-end; margin-bottom: 1.5rem;">
          <button class="write-post-btn active" id="btn-goto-write-article" style="padding: 0.6rem 1.5rem;">
            + Viết bài mới
          </button>
        </div>
        
        <!-- Mobile Card List View -->
        <div class="mobile-only" style="margin-bottom: 2rem;">
          ${articles.length === 0 ? `
            <div style="text-align: center; padding: 2rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px; color: var(--text-muted);">
              Chưa có bài viết nào trong hệ thống.
            </div>
          ` : articles.map(post => `
            <div class="admin-post-card" id="article-card-${post.id}">
              <div style="display: flex; gap: 0.8rem; align-items: flex-start;">
                <img src="${post.image.startsWith('http') || post.image.startsWith('data:') ? post.image : getAssetUrl(post.image)}" alt="Thumbnail" style="width: 70px; aspect-ratio: 16/10; object-fit: cover; border-radius: 6px; flex-shrink: 0; border: 1px solid var(--border-color);">
                <div style="flex: 1; min-width: 0;">
                  <h4 style="font-size: 0.9rem; font-weight: 700; line-height: 1.3; margin: 0 0 0.2rem 0; word-break: break-word;"><a href="#/bai-viet/${post.id}" target="_blank" style="color: var(--text-primary);">${post.title}</a></h4>
                  <span class="badge badge-cat" style="font-size: 0.65rem; padding: 0.15rem 0.4rem;">${post.category}${post.subcategory ? ` / ${post.subcategory}` : ''}</span>
                  ${post.featured ? '<span class="badge badge-featured" style="font-size: 0.65rem; padding: 0.15rem 0.4rem; margin-left: 0.3rem;">Nổi bật</span>' : ''}
                </div>
              </div>
              
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed var(--border-color); padding-top: 0.5rem; margin-top: 0.6rem; font-size: 0.75rem; color: var(--text-muted);">
                <div>Tác giả: <strong>${post.author}</strong></div>
                <div style="display: flex; gap: 0.6rem;">
                  <span>👀 ${post.views || 0}</span>
                  <span>💬 ${post.comments || 0}</span>
                </div>
              </div>
              
              <div style="display: flex; gap: 0.5rem; margin-top: 0.7rem; border-top: 1px solid var(--border-color); padding-top: 0.6rem;">
                <button class="edit-post-btn" data-id="${post.id}" style="flex: 1; background-color: var(--primary-color); border: none; color: #fff; padding: 0.4rem; border-radius: 6px; font-size: 0.75rem; cursor: pointer; display: inline-flex; align-items: center; justify-content: center;">
                  Sửa
                </button>
                <button class="delete-post-btn" data-id="${post.id}" style="flex: 1; margin: 0; padding: 0.4rem; display: inline-flex; align-items: center; justify-content: center;">
                  Xóa
                </button>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Desktop Table View -->
        <div class="admin-list-panel glass-panel desktop-only">
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
                ${articles.length === 0 ? `
                  <tr>
                    <td colspan="6" style="text-align: center; padding: 3rem; color: var(--text-muted);">
                      Chưa có bài viết nào trong hệ thống.
                    </td>
                  </tr>
                ` : articles.map(post => `
                  <tr id="article-row-${post.id}">
                    <td>
                      <img class="table-post-thumb" src="${post.image.startsWith('http') || post.image.startsWith('data:') ? post.image : getAssetUrl(post.image)}" alt="Thumbnail">
                    </td>
                    <td>
                      <div style="font-weight: 600; line-height: 1.4;">
                        <a href="#/bai-viet/${post.id}" target="_blank" class="table-post-title-link">${post.title}</a>
                      </div>
                      ${post.featured ? '<span class="badge badge-featured">Nổi bật</span>' : ''}
                    </td>
                    <td>
                      <span class="badge badge-cat">${post.category}${post.subcategory ? ` / ${post.subcategory}` : ''}</span>
                    </td>
                    <td>
                      <strong>${post.author}</strong>
                    </td>
                    <td>
                      <div style="font-size: 0.85rem;">
                        👀 <strong>${post.views || 0}</strong> lượt xem
                      </div>
                      <div style="font-size: 0.85rem;">
                        💬 <strong>${post.comments || 0}</strong> bình luận
                      </div>
                    </td>
                    <td style="white-space: nowrap;">
                      <div style="display: flex; gap: 0.4rem; align-items: center; flex-wrap: nowrap;">
                        <button class="edit-post-btn" data-id="${post.id}" style="background-color: var(--primary-color); border: none; color: #fff; padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.75rem; cursor: pointer; display: inline-flex; align-items: center; justify-content: center;">
                          Sửa
                        </button>
                        <button class="delete-post-btn" data-id="${post.id}" style="margin: 0; display: inline-flex; align-items: center; justify-content: center;">
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    } else {
      // Editor view
      const editPost = editingArticleId ? articles.find(a => a.id === editingArticleId) : null;
      const cats = getCategoriesDb();
      const authors = getAuthorsDb();

      return `
        <div style="margin-bottom: 1.5rem;">
          <button class="logout-btn" id="btn-back-to-articles" style="padding: 0.5rem 1rem;">
            ← Quay lại danh sách
          </button>
        </div>

        <div class="create-post-layout-grid">
          <div class="publish-form-panel glass-panel">
            <h3 class="panel-subtitle">${editPost ? 'Chỉnh sửa bài viết' : 'Nội dung bài viết mới'}</h3>
            
            <div class="login-form" style="margin-top: 1.5rem;">
              <div class="form-row">
                <label for="post-title">Tiêu đề bài viết <span style="color:var(--secondary-color)">*</span></label>
                <input type="text" id="post-title" value="${editPost ? editPost.title : ''}" placeholder="Nhập tiêu đề..." required>
              </div>

              <div class="form-grid-3">
                <div class="form-row">
                  <label for="post-category">Chuyên mục chính <span style="color:var(--secondary-color)">*</span></label>
                  <select id="post-category" required>
                    ${cats.map(cat => `<option value="${cat}" ${editPost && editPost.category === cat ? 'selected' : ''}>${cat}</option>`).join('')}
                  </select>
                </div>

                <div class="form-row">
                  <label for="post-subcategory">Chuyên mục con</label>
                  <select id="post-subcategory">
                    <option value="">-- Không có --</option>
                  </select>
                </div>

                <div class="form-row" style="display:flex; align-items:center; gap: 0.5rem; margin-top: 1.8rem; cursor:pointer;">
                  <input type="checkbox" id="post-featured" ${editPost && editPost.featured ? 'checked' : ''} style="width: 20px; height: 20px; margin:0;">
                  <label for="post-featured" style="margin:0; font-weight:600; font-size: 0.85rem;">Bài viết nổi bật (Featured)</label>
                </div>
              </div>

              <div class="form-row">
                <label for="post-author-name">Tác giả <span style="color:var(--secondary-color)">*</span></label>
                <select id="post-author-name" required>
                  ${authors.map(aut => `<option value="${aut.name}" ${editPost && editPost.author === aut.name ? 'selected' : ''}>${aut.name} (${aut.role})</option>`).join('')}
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
                  <input type="url" id="post-cover-url" value="${editPost && editPost.image.startsWith('http') ? editPost.image : ''}" placeholder="Dán link ảnh bìa (https://...)" style="margin: 0; padding: 0.5rem 0.8rem; font-size: 0.9rem;">
                </div>
              </div>

              <div class="form-row">
                <label for="post-description">Tóm tắt bài viết (Sapo) <span style="color:var(--secondary-color)">*</span></label>
                <textarea id="post-description" rows="3" placeholder="Viết tóm tắt ngắn..." required>${editPost ? editPost.description : ''}</textarea>
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
                ${editPost ? '💾 Cập nhật bài viết' : '🚀 Xuất bản bài viết'}
              </button>
            </div>
          </div>

          <!-- Sidebar Preview -->
          <div class="preview-sidebar-panel">
            <h3 class="panel-subtitle" style="margin-bottom: 1.5rem;">Xem trước thẻ tin</h3>
            <div class="cat-article-card" style="box-shadow: var(--shadow-lg); background-color: var(--bg-surface); border: 1px solid var(--border-color); pointer-events: none;">
              <div class="cat-card-img-wrapper">
                <img id="sidebar-preview-img" src="${selectedCoverUrl}" alt="Cover Preview" style="height: 200px; width: 100%; object-fit: cover;">
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
      `;
    }
  }

  function bindArticlesListEvents() {
    document.getElementById("btn-goto-write-article")?.addEventListener("click", () => {
      articleMode = 'write';
      editingArticleId = null;
      selectedCoverUrl = PRESET_IMAGES[0].url;
      renderView();
    });

    container.querySelectorAll(".edit-post-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.id, 10);
        const postExists = articles.find(a => a.id === id);
        if (postExists) {
          editingArticleId = id;
          selectedCoverUrl = postExists.image;
          articleMode = 'write';
          renderView();
        }
      });
    });

    container.querySelectorAll(".delete-post-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.id, 10);
        const article = articles.find(a => a.id === id);
        if (confirm(`Bạn có chắc chắn muốn xóa bài viết "${article?.title}"?`)) {
          const updated = articles.filter(a => a.id !== id);
          localStorage.setItem("toptech_articles", JSON.stringify(updated));
          
          const row = document.getElementById(`article-row-${id}`);
          const card = document.getElementById(`article-card-${id}`);
          if (row) {
            row.style.transition = "opacity 0.3s ease";
            row.style.opacity = "0";
          }
          if (card) {
            card.style.transition = "opacity 0.3s ease";
            card.style.opacity = "0";
          }
          setTimeout(() => {
            articles.splice(0, articles.length, ...updated);
            onUpdate();
            renderView();
          }, 300);
        }
      });
    });
  }

  function bindArticlesWriteEvents() {
    document.getElementById("btn-back-to-articles")?.addEventListener("click", () => {
      articleMode = 'list';
      editingArticleId = null;
      renderView();
    });

    const postTitle = document.getElementById("post-title");
    const postCategory = document.getElementById("post-category");
    const postSubcategory = document.getElementById("post-subcategory");
    const postFeatured = document.getElementById("post-featured");
    const postAuthor = document.getElementById("post-author-name");
    const postDesc = document.getElementById("post-description");
    const postContent = document.getElementById("post-content");
    const publishBtn = document.getElementById("publish-post-btn");

    const previewImg = document.getElementById("sidebar-preview-img");
    const previewCat = document.getElementById("sidebar-preview-cat");
    const previewTitle = document.getElementById("sidebar-preview-title");
    const previewDesc = document.getElementById("sidebar-preview-desc");
    const previewAuthor = document.getElementById("sidebar-preview-author");
    const previewTime = document.getElementById("sidebar-preview-time");

    const subsDb = getSubcategoriesDb();
    const editPost = editingArticleId ? articles.find(a => a.id === editingArticleId) : null;

    if (editPost && postContent) {
      postContent.innerHTML = editPost.content;
      selectedCoverUrl = editPost.image;
      if (previewImg) previewImg.src = selectedCoverUrl;
      if (previewCat) previewCat.textContent = (editPost.subcategory || editPost.category).toUpperCase();
      if (previewTitle) previewTitle.textContent = editPost.title;
      if (previewDesc) previewDesc.textContent = editPost.description;
      if (previewAuthor) previewAuthor.textContent = editPost.author;

      const dropzone = document.getElementById("upload-dropzone");
      if (dropzone) {
        dropzone.style.borderColor = "var(--primary-color)";
        dropzone.innerHTML = `
          <div style="text-align: center; color: var(--primary-color);">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:0.3rem;"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <p style="font-weight:600; font-size:0.85rem;">Đã chọn ảnh bìa hiện tại!</p>
            <p style="font-size:0.7rem; color:var(--text-muted); margin-top:0.2rem;">(Click hoặc kéo thả để đổi)</p>
          </div>
        `;
      }
    }

    const updateSubcategories = (parentCat, selectedSub = "") => {
      if (!postSubcategory) return;
      const subs = subsDb[parentCat] || [];
      postSubcategory.innerHTML = '<option value="">-- Không có --</option>' + 
        subs.map(s => `<option value="${s}" ${selectedSub === s ? 'selected' : ''}>${s}</option>`).join('');
    };

    if (postCategory) {
      updateSubcategories(postCategory.value, editPost ? editPost.subcategory : "");
    }

    function updateWordAndReadTime() {
      const text = postContent?.innerText.trim() || "";
      const wordCount = text ? text.split(/\s+/).length : 0;
      const readMinutes = Math.max(1, Math.ceil(wordCount / 200));
      
      const wordSpan = document.getElementById("word-count-indicator");
      const readSpan = document.getElementById("reading-time-indicator");
      
      if (wordSpan) wordSpan.textContent = `${wordCount} từ`;
      if (readSpan) readSpan.textContent = `${readMinutes} phút đọc`;
      if (previewTime) previewTime.innerHTML = `${readMinutes} phút để đọc`;
      
      return `${readMinutes < 10 ? '0' : ''}${readMinutes} phút để đọc`;
    }

    postTitle?.addEventListener("input", (e) => {
      if (previewTitle) previewTitle.textContent = e.target.value.trim() || "Chưa nhập tiêu đề...";
    });

    postCategory?.addEventListener("change", (e) => {
      updateSubcategories(e.target.value);
      if (previewCat) previewCat.textContent = e.target.value.toUpperCase();
    });

    postSubcategory?.addEventListener("change", (e) => {
      if (previewCat) previewCat.textContent = (e.target.value || postCategory?.value || "").toUpperCase();
    });

    postAuthor?.addEventListener("change", (e) => {
      if (previewAuthor) previewAuthor.textContent = e.target.value;
    });

    if (postAuthor && previewAuthor) {
      previewAuthor.textContent = postAuthor.value;
    }

    postDesc?.addEventListener("input", (e) => {
      if (previewDesc) previewDesc.textContent = e.target.value.trim() || "Nhập sapo để xem trước...";
    });

    postContent?.addEventListener("input", () => {
      updateWordAndReadTime();
    });

    const executeCommand = (command, value = null) => {
      document.execCommand(command, false, value);
      postContent?.focus();
      postContent?.dispatchEvent(new Event('input'));
    };

    container.querySelectorAll(".toolbar-btn[data-cmd]").forEach(btn => {
      btn.addEventListener("click", () => {
        const cmd = btn.dataset.cmd;
        const val = btn.dataset.val || null;
        if (cmd === 'createLink') {
          const url = prompt("Nhập đường dẫn:");
          if (url) executeCommand(cmd, url);
        } else if (cmd === 'insertHTML-table') {
          const tableHtml = `
            <table class="post-detail-table" style="width: 100%;">
              <thead><tr><th>Tiêu đề 1</th><th>Tiêu đề 2</th></tr></thead>
              <tbody>
                <tr><td>Nội dung 1</td><td>Nội dung 2</td></tr>
                <tr><td>Nội dung 3</td><td>Nội dung 4</td></tr>
              </tbody>
            </table><p><br></p>
          `;
          executeCommand('insertHTML', tableHtml);
        } else {
          executeCommand(cmd, val);
        }
      });
    });

    const insertImgBtn = document.getElementById("btn-insert-inline-img");
    const inlineImgInput = document.getElementById("inline-img-file-input");

    const processInlineImageFile = (file) => {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const imgHtml = `
          <figure class="post-inline-figure">
            <img src="${event.target.result}" alt="Ảnh">
            <figcaption class="post-figcaption">Chú thích ảnh</figcaption>
          </figure><p><br></p>
        `;
        executeCommand('insertHTML', imgHtml);
      };
      reader.readAsDataURL(file);
    };

    insertImgBtn?.addEventListener("click", () => inlineImgInput?.click());
    inlineImgInput?.addEventListener("change", (e) => processInlineImageFile(e.target.files[0]));

    postContent?.addEventListener("paste", (e) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          e.preventDefault();
          processInlineImageFile(items[i].getAsFile());
          break;
        }
      }
    });

    const dropzone = document.getElementById("upload-dropzone");
    const fileInput = document.getElementById("cover-file-input");
    const inputCoverUrl = document.getElementById("post-cover-url");

    dropzone?.addEventListener("click", () => fileInput?.click());

    const processCoverImageFile = (file) => {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        selectedCoverUrl = event.target.result;
        if (previewImg) previewImg.src = selectedCoverUrl;
        if (dropzone) {
          dropzone.style.borderColor = "var(--primary-color)";
          dropzone.innerHTML = `
            <div style="text-align: center; color: var(--primary-color);">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:0.3rem;"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <p style="font-weight:600; font-size:0.85rem;">Đã chọn ảnh bìa thành công!</p>
              <p style="font-size:0.7rem; color:var(--text-muted);">${file.name || 'Ảnh tải lên'}</p>
            </div>
          `;
        }
      };
      reader.readAsDataURL(file);
    };

    fileInput?.addEventListener("change", (e) => processCoverImageFile(e.target.files[0]));

    dropzone?.addEventListener("dragover", (e) => {
      e.preventDefault();
      if (dropzone) dropzone.style.borderColor = "var(--primary-color)";
    });

    dropzone?.addEventListener("dragleave", () => {
      if (dropzone) dropzone.style.borderColor = "var(--border-color)";
    });

    dropzone?.addEventListener("drop", (e) => {
      e.preventDefault();
      if (dropzone) dropzone.style.borderColor = "var(--border-color)";
      processCoverImageFile(e.dataTransfer.files[0]);
    });

    if (dropzone) {
      dropzone.setAttribute("tabindex", "0");
      dropzone.addEventListener("paste", (e) => {
        const items = e.clipboardData?.items;
        if (!items) return;
        for (let i = 0; i < items.length; i++) {
          if (items[i].type.indexOf("image") !== -1) {
            e.preventDefault();
            processCoverImageFile(items[i].getAsFile());
            break;
          }
        }
      });
    }

    inputCoverUrl?.addEventListener("input", (e) => {
      const url = e.target.value.trim();
      if (url) {
        selectedCoverUrl = url;
        if (previewImg) previewImg.src = selectedCoverUrl;
      }
    });

    const writeTabBtn = document.getElementById("editor-write-tab");
    const previewTabBtn = document.getElementById("editor-preview-tab");
    const writeWrapper = document.getElementById("editor-textarea-wrapper");
    const previewWrapper = document.getElementById("editor-preview-wrapper");

    writeTabBtn?.addEventListener("click", () => {
      writeTabBtn.classList.add("active");
      previewTabBtn?.classList.remove("active");
      if (writeWrapper) writeWrapper.style.display = "block";
      if (previewWrapper) previewWrapper.style.display = "none";
    });

    previewTabBtn?.addEventListener("click", () => {
      previewTabBtn.classList.add("active");
      writeTabBtn?.classList.remove("active");
      if (writeWrapper) writeWrapper.style.display = "none";
      if (previewWrapper) {
        previewWrapper.style.display = "block";
        const contentVal = postContent?.innerHTML || "";
        previewWrapper.innerHTML = contentVal ? compileMarkdown(contentVal) : '<p style="color:var(--text-muted); font-style:italic;">Chưa soạn thảo nội dung...</p>';
      }
    });

    publishBtn?.addEventListener("click", () => {
      const title = postTitle?.value.trim();
      const category = postCategory?.value;
      const subcategory = postSubcategory?.value || "";
      const author = postAuthor?.value;
      const description = postDesc?.value.trim();
      const rawContent = postContent?.innerHTML.trim();
      const isFeatured = postFeatured?.checked;

      if (!title || !category || !author || !description || !rawContent) {
        alert("Vui lòng điền đầy đủ thông tin bắt buộc (*).");
        return;
      }

      publishBtn.disabled = true;
      publishBtn.textContent = "⏳ Đang xuất bản...";

      setTimeout(() => {
        const readTime = updateWordAndReadTime();

        if (editingArticleId) {
          const postToEdit = articles.find(a => a.id === editingArticleId);
          if (postToEdit) {
            postToEdit.title = title;
            postToEdit.category = category;
            postToEdit.subcategory = subcategory;
            postToEdit.image = selectedCoverUrl;
            postToEdit.author = author;
            postToEdit.description = description;
            postToEdit.content = rawContent;
            postToEdit.featured = isFeatured;
            postToEdit.readTime = readTime;
          }
          localStorage.setItem("toptech_articles", JSON.stringify(articles));
        } else {
          const newPost = {
            id: Date.now(),
            title: title,
            category: category,
            subcategory: subcategory,
            image: selectedCoverUrl,
            author: author,
            date: 'Vừa đăng',
            readTime: readTime,
            views: 0,
            comments: 0,
            featured: isFeatured,
            description: description,
            content: rawContent,
            commentsList: []
          };
          const updatedList = [newPost, ...articles];
          localStorage.setItem("toptech_articles", JSON.stringify(updatedList));
          articles.splice(0, articles.length, ...updatedList);
        }

        onUpdate();
        publishBtn.style.backgroundColor = "#10b981";
        publishBtn.style.borderColor = "#10b981";
        publishBtn.innerHTML = "✓ Lưu bài viết thành công!";
        setTimeout(() => {
          articleMode = 'list';
          renderView();
        }, 800);
      }, 800);
    });
  }

  // --------------------------------------------------------------------------
  // TAB: CATEGORIES
  // --------------------------------------------------------------------------
  function renderCategoriesTab() {
    const cats = getCategoriesDb();
    const subsMap = getSubcategoriesDb();

    return `
      <div class="create-post-layout-grid">
        <!-- Add/Edit Category Form (Left) -->
        <div class="publish-form-panel glass-panel" style="padding: 2rem;">
          <h3 class="panel-subtitle">${editingCategoryName ? `Sửa chuyên mục: ${editingCategoryName}` : 'Thêm chuyên mục mới'}</h3>
          
          <div class="login-form" style="margin-top: 1rem; gap: 1rem;">
            <div class="form-row">
              <label for="input-cat-name">Tên chuyên mục <span style="color:var(--secondary-color)">*</span></label>
              <input type="text" id="input-cat-name" value="${editingCategoryName || ''}" placeholder="Ví dụ: AI, Review, IT..." required>
            </div>
            
            <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
              <button class="login-btn" id="btn-save-category" style="flex: 1; padding: 0.7rem; font-size: 0.9rem; border-radius: 8px;">
                ${editingCategoryName ? 'Cập nhật' : 'Thêm chuyên mục'}
              </button>
              ${editingCategoryName ? `
                <button class="logout-btn" id="btn-cancel-edit-category" style="padding: 0.7rem; font-size: 0.9rem; border-radius: 8px;">
                  Hủy
                </button>
              ` : ''}
            </div>
          </div>
        </div>

        <!-- Categories List (Right) -->
        <div class="publish-form-panel glass-panel" style="padding: 2rem;">
          <h3 class="panel-subtitle">Tất cả chuyên mục & chuyên mục con</h3>
          
          <div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 1.5rem;">
            ${cats.map(cat => {
              const subs = subsMap[cat] || [];
              return `
                <div class="category-manage-row" style="border-bottom: 1px solid var(--border-color); padding-bottom: 1.2rem;" id="cat-manage-${cat}">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
                    <div>
                      <strong style="font-size: 1.15rem; color: var(--text-primary);">${cat}</strong>
                      <span style="font-size: 0.8rem; color: var(--text-muted); margin-left: 0.5rem;">(${subs.length} chuyên mục con)</span>
                    </div>
                    <div style="display: flex; gap: 0.4rem;">
                      <button class="edit-cat-btn" data-cat="${cat}" style="background: var(--bg-surface-secondary); border: 1px solid var(--border-color); border-radius: 4px; padding: 0.2rem 0.5rem; font-size: 0.75rem; font-weight: 600; cursor: pointer; color: var(--text-secondary);">Sửa</button>
                      <button class="delete-cat-btn" data-cat="${cat}" style="background: #ef44440d; border: 1px solid rgba(239,68,68,0.2); border-radius: 4px; padding: 0.2rem 0.5rem; font-size: 0.75rem; font-weight: 600; cursor: pointer; color: #ef4444;">Xóa</button>
                    </div>
                  </div>
                  
                  <!-- Subcategories tags list -->
                  <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.8rem;">
                    ${subs.map(sub => `
                      <span style="display: inline-flex; align-items: center; gap: 0.3rem; background: var(--bg-surface-secondary); border: 1px solid var(--border-color); border-radius: 20px; padding: 0.2rem 0.6rem; font-size: 0.78rem; font-weight: 500; color: var(--text-secondary);">
                        ${sub}
                        <button class="delete-sub-btn" data-cat="${cat}" data-sub="${sub}" style="background:none; border:none; cursor:pointer; color: var(--text-muted); font-weight:bold; font-size: 0.85rem; padding: 0; display: inline-flex; align-items: center;">&times;</button>
                      </span>
                    `).join('')}
                    ${subs.length === 0 ? '<span style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">Chưa có chuyên mục con.</span>' : ''}
                  </div>

                  <!-- Add inline Subcategory input -->
                  <div style="display: flex; gap: 0.3rem; max-width: 280px;">
                    <input type="text" placeholder="Thêm chuyên mục con..." class="inline-sub-input" data-cat="${cat}" style="margin:0; padding: 0.4rem 0.6rem; font-size: 0.8rem; border-radius: 6px; border: 1px solid var(--border-color); width: 100%;">
                    <button class="btn-add-subcategory" data-cat="${cat}" style="background: var(--primary-color); border: none; color: #fff; border-radius: 6px; padding: 0.4rem 0.8rem; font-size: 0.8rem; cursor: pointer; font-weight: bold;">+</button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  function bindCategoriesEvents() {
    const inputCatName = document.getElementById("input-cat-name");
    const saveCatBtn = document.getElementById("btn-save-category");
    const cancelCatBtn = document.getElementById("btn-cancel-edit-category");

    // Add / Edit Category Name
    saveCatBtn?.addEventListener("click", () => {
      const catName = inputCatName?.value.trim();
      if (!catName) {
        alert("Vui lòng nhập tên chuyên mục.");
        return;
      }

      let cats = getCategoriesDb();
      let subsMap = getSubcategoriesDb();

      if (editingCategoryName) {
        // Edit Mode
        const idx = cats.indexOf(editingCategoryName);
        if (idx !== -1) {
          cats[idx] = catName;
          
          // Migrate subcategories
          if (subsMap[editingCategoryName]) {
            subsMap[catName] = subsMap[editingCategoryName];
            delete subsMap[editingCategoryName];
          }

          // Migrate articles with this category
          articles.forEach(art => {
            if (art.category === editingCategoryName) {
              art.category = catName;
            }
          });
          localStorage.setItem("toptech_articles", JSON.stringify(articles));
        }
        editingCategoryName = null;
      } else {
        // Add Mode
        if (cats.includes(catName)) {
          alert("Chuyên mục đã tồn tại!");
          return;
        }
        cats.push(catName);
        subsMap[catName] = [];
      }

      saveCategoriesDb(cats);
      saveSubcategoriesDb(subsMap);
      onUpdate();
      renderView();
    });

    cancelCatBtn?.addEventListener("click", () => {
      editingCategoryName = null;
      renderView();
    });

    // Edit button clicks
    container.querySelectorAll(".edit-cat-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        editingCategoryName = btn.dataset.cat;
        renderView();
      });
    });

    // Delete category
    container.querySelectorAll(".delete-cat-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const catName = btn.dataset.cat;
        if (confirm(`Xóa chuyên mục "${catName}" sẽ xóa toàn bộ các chuyên mục con tương ứng. Tiếp tục?`)) {
          let cats = getCategoriesDb().filter(c => c !== catName);
          let subsMap = getSubcategoriesDb();
          delete subsMap[catName];

          saveCategoriesDb(cats);
          saveSubcategoriesDb(subsMap);
          onUpdate();
          renderView();
        }
      });
    });

    // Add inline subcategory
    container.querySelectorAll(".btn-add-subcategory").forEach(btn => {
      btn.addEventListener("click", () => {
        const catName = btn.dataset.cat;
        const input = container.querySelector(`.inline-sub-input[data-cat="${catName}"]`);
        const subName = input?.value.trim();

        if (!subName) {
          alert("Vui lòng nhập tên chuyên mục con.");
          return;
        }

        let subsMap = getSubcategoriesDb();
        if (!subsMap[catName]) subsMap[catName] = [];
        
        if (subsMap[catName].includes(subName)) {
          alert("Chuyên mục con này đã tồn tại trong chuyên mục chính!");
          return;
        }

        subsMap[catName].push(subName);
        saveSubcategoriesDb(subsMap);
        renderView();
      });
    });

    // Delete subcategory
    container.querySelectorAll(".delete-sub-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const catName = btn.dataset.cat;
        const subName = btn.dataset.sub;

        let subsMap = getSubcategoriesDb();
        if (subsMap[catName]) {
          subsMap[catName] = subsMap[catName].filter(s => s !== subName);
          saveSubcategoriesDb(subsMap);
          renderView();
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // TAB: AUTHORS
  // --------------------------------------------------------------------------
  function renderAuthorsTab() {
    const authors = getAuthorsDb();
    const editAuthor = editingAuthorName ? authors.find(a => a.name === editingAuthorName) : null;

    return `
      <div class="create-post-layout-grid">
        <!-- Add/Edit Author Form (Left) -->
        <div class="publish-form-panel glass-panel" style="padding: 2rem;">
          <h3 class="panel-subtitle">${editAuthor ? `Sửa thông tin: ${editAuthor.name}` : 'Thêm tác giả mới'}</h3>
          
          <div class="login-form" style="margin-top: 1rem; gap: 1rem;">
            <div class="form-row">
              <label for="input-author-name">Họ và tên <span style="color:var(--secondary-color)">*</span></label>
              <input type="text" id="input-author-name" value="${editAuthor ? editAuthor.name : ''}" placeholder="Ví dụ: Khánh Nam, Phương Linh..." ${editAuthor ? 'disabled' : ''} required>
            </div>
            
            <div class="form-row">
              <label for="input-author-role">Chức danh / Vai trò <span style="color:var(--secondary-color)">*</span></label>
              <input type="text" id="input-author-role" value="${editAuthor ? editAuthor.role : ''}" placeholder="Ví dụ: Content Writer, Tech Lead..." required>
            </div>

            <div class="form-row">
              <label for="input-author-avatar">Đường dẫn ảnh đại diện <span style="color:var(--secondary-color)">*</span></label>
              <input type="url" id="input-author-avatar" value="${editAuthor ? editAuthor.avatar : ''}" placeholder="Dán link ảnh đại diện (https://...)" required>
            </div>

            <div class="form-row">
              <label for="input-author-desc">Mô tả giới thiệu / Tiểu sử <span style="color:var(--secondary-color)">*</span></label>
              <textarea id="input-author-desc" rows="4" placeholder="Nhập tiểu sử tóm tắt giới thiệu tác giả..." required>${editAuthor ? editAuthor.desc : ''}</textarea>
            </div>
            
            <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
              <button class="login-btn" id="btn-save-author" style="flex: 1; padding: 0.7rem; font-size: 0.9rem; border-radius: 8px;">
                ${editAuthor ? 'Cập nhật' : 'Thêm tác giả'}
              </button>
              ${editAuthor ? `
                <button class="logout-btn" id="btn-cancel-edit-author" style="padding: 0.7rem; font-size: 0.9rem; border-radius: 8px;">
                  Hủy
                </button>
              ` : ''}
            </div>
          </div>
        </div>

        <!-- Authors Grid (Right) -->
        <div class="publish-form-panel glass-panel" style="padding: 2rem;">
          <h3 class="panel-subtitle">Đội ngũ tác giả TopTech</h3>
          
          <div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 1rem;">
            ${authors.map(aut => `
              <div class="author-manage-row" style="display: flex; align-items: center; gap: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;" id="author-manage-${aut.name}">
                <img src="${aut.avatar}" alt="${aut.name}" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover; border: 2px solid var(--primary-color);">
                <div style="flex: 1;">
                  <strong style="color: var(--text-primary); font-size: 1rem;">${aut.name}</strong>
                  <div style="font-size: 0.8rem; color: var(--primary-color); font-weight: 600;">${aut.role}</div>
                  <div style="font-size: 0.8rem; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; margin-top: 0.1rem;">${aut.desc}</div>
                </div>
                <div style="display: flex; gap: 0.3rem;">
                  <button class="edit-author-btn" data-name="${aut.name}" style="background: var(--bg-surface-secondary); border: 1px solid var(--border-color); border-radius: 4px; padding: 0.2rem 0.5rem; font-size: 0.75rem; font-weight: 600; cursor: pointer; color: var(--text-secondary);">Sửa</button>
                  <button class="delete-author-btn" data-name="${aut.name}" style="background: #ef44440d; border: 1px solid rgba(239,68,68,0.2); border-radius: 4px; padding: 0.2rem 0.5rem; font-size: 0.75rem; font-weight: 600; cursor: pointer; color: #ef4444;">Xóa</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  function bindAuthorsEvents() {
    const inputName = document.getElementById("input-author-name");
    const inputRole = document.getElementById("input-author-role");
    const inputAvatar = document.getElementById("input-author-avatar");
    const inputDesc = document.getElementById("input-author-desc");
    const saveBtn = document.getElementById("btn-save-author");
    const cancelBtn = document.getElementById("btn-cancel-edit-author");

    saveBtn?.addEventListener("click", () => {
      const name = inputName?.value.trim();
      const role = inputRole?.value.trim();
      const avatar = inputAvatar?.value.trim();
      const desc = inputDesc?.value.trim();

      if (!name || !role || !avatar || !desc) {
        alert("Vui lòng điền đầy đủ các thông tin bắt buộc (*).");
        return;
      }

      let authors = getAuthorsDb();

      if (editingAuthorName) {
        // Edit Mode
        const author = authors.find(a => a.name === editingAuthorName);
        if (author) {
          author.role = role;
          author.avatar = avatar;
          author.desc = desc;
        }
        editingAuthorName = null;
      } else {
        // Add Mode
        const exists = authors.find(a => a.name.toLowerCase() === name.toLowerCase());
        if (exists) {
          alert("Tên tác giả đã tồn tại trong danh sách!");
          return;
        }
        authors.push({ name, role, avatar, desc });
      }

      saveAuthorsDb(authors);
      onUpdate();
      renderView();
    });

    cancelBtn?.addEventListener("click", () => {
      editingAuthorName = null;
      renderView();
    });

    container.querySelectorAll(".edit-author-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        editingAuthorName = btn.dataset.name;
        renderView();
      });
    });

    container.querySelectorAll(".delete-author-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const name = btn.dataset.name;
        if (confirm(`Bạn có chắc chắn muốn xóa tác giả "${name}"?`)) {
          let authors = getAuthorsDb().filter(a => a.name !== name);
          saveAuthorsDb(authors);
          onUpdate();
          renderView();
        }
      });
    });
  }

  // Render initial dashboard view
  renderView();
}
