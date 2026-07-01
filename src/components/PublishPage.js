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
  `;

  // Bind Login Logic
  const passwordInput = document.getElementById("admin-password");
  const submitBtn = document.getElementById("login-submit-btn");
  const errorMsg = document.getElementById("login-error-msg");

  const handleLogin = () => {
    const password = passwordInput?.value.trim();
    if (password === "admin123") {
      sessionStorage.setItem("toptech_admin_logged_in", "true");
      // Re-render publish page
      renderPublishPage(container, articles, categories, onUpdate);
    } else {
      if (errorMsg) {
        errorMsg.textContent = "Mật khẩu không chính xác. Thử lại!";
        errorMsg.style.display = "block";
      }
      passwordInput.style.borderColor = "var(--secondary-color)";
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
  
  // If it's already HTML (from WYSIWYG editor), return it directly!
  if (markdown.trim().startsWith('<') || markdown.includes('</p>') || markdown.includes('</div>') || markdown.includes('</td>') || markdown.includes('</figure>')) {
    return markdown;
  }
  
  // Table compiler rule
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
      
      if (isSeparator) {
        continue;
      }
      
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
    // Headings
    .replace(/^### (.*$)/gim, '<h3 class="post-subheading-3">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="post-subheading-2">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="post-heading-1">$1</h1>')
    // Inline Images with Captions: ![Caption](URL)
    .replace(/\!\[(.*?)\]\((.*?)\)/g, '<figure class="post-inline-figure"><img src="$2" alt="$1"><figcaption class="post-figcaption">$1</figcaption></figure>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Blockquote
    .replace(/^\> (.*$)/gim, '<blockquote class="post-blockquote">$1</blockquote>')
    // Bullet list items
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    // Code blocks
    .replace(/\`\`\`([\s\S]*?)\`\`\`/g, '<pre class="post-code-block"><code>$1</code></pre>')
    // Inline code
    .replace(/\`(.*?)\`/g, '<code class="post-inline-code">$1</code>')
    // Paragraph gaps (replace double newlines with paragraphs, excluding heading/list wrapped elements)
    .replace(/\n\n/g, '</p><p>');

  // Wrap lists
  html = html.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>');
  
  return `<p>${html}</p>`;
}

// 2. Admin Dashboard view listing posts and having the creation form
function renderAdminDashboard(container, articles, categories, onUpdate) {
  let activeTab = 'list'; // list or create
  let editingArticleId = null;
  let selectedCoverUrl = PRESET_IMAGES[0].url;

  // Check if redirecting from quick edit button in details page
  const redirectEditId = sessionStorage.getItem("toptech_editing_article_id");
  if (redirectEditId) {
    const editId = parseInt(redirectEditId, 10);
    const postExists = articles.find(a => a.id === editId);
    if (postExists) {
      activeTab = 'create';
      editingArticleId = editId;
      selectedCoverUrl = postExists.image;
    }
    sessionStorage.removeItem("toptech_editing_article_id");
  }

  function renderView() {
    container.innerHTML = `
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
          <button class="admin-tab-btn ${activeTab === 'list' ? 'active' : ''}" id="tab-list-btn">
            Danh sách bài viết (${articles.length})
          </button>
          <button class="admin-tab-btn ${activeTab === 'create' ? 'active' : ''}" id="tab-create-btn">
            + Viết bài mới
          </button>
        </div>

        <!-- Tab content area -->
        <div id="admin-tab-content">
          ${activeTab === 'list' ? renderListTab() : renderCreateTab()}
        </div>
      </div>
    `;

    // Bind common header events
    document.getElementById("admin-logout-btn")?.addEventListener("click", () => {
      sessionStorage.removeItem("toptech_admin_logged_in");
      renderPublishPage(container, articles, categories, onUpdate);
    });

    document.getElementById("tab-list-btn")?.addEventListener("click", () => {
      activeTab = 'list';
      renderView();
    });

    document.getElementById("tab-create-btn")?.addEventListener("click", () => {
      activeTab = 'create';
      editingArticleId = null; // Clear editing state when manually creating a new article
      renderView();
    });

    // Bind tab specific events
    if (activeTab === 'list') {
      bindListEvents();
    } else {
      bindCreateEvents();
    }
  }

  // Render list of posts
  function renderListTab() {
    return `
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
              ${articles.length === 0 ? `
                <tr>
                  <td colspan="6" style="text-align: center; padding: 3rem; color: var(--text-muted);">
                    Chưa có bài viết nào trong hệ thống. Hãy nhấp vào "Viết bài mới" để tạo bài viết đầu tiên!
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
                    <span class="badge badge-cat">${post.category}</span>
                  </td>
                  <td>
                    <strong>${post.author}</strong>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">${post.authorTag || ''}</div>
                  </td>
                  <td>
                    <div style="font-size: 0.85rem;">
                      👀 <strong>${post.views || 0}</strong> lượt xem
                    </div>
                    <div style="font-size: 0.85rem;">
                      💬 <strong>${post.comments || 0}</strong> bình luận
                    </div>
                  </td>
                  <td>
                    <button class="edit-post-btn" data-id="${post.id}" style="margin-right: 0.5rem; background-color: var(--primary-color); border-color: var(--primary-color);">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 2px;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                      Sửa
                    </button>
                    <button class="delete-post-btn" data-id="${post.id}">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 2px;"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                      Xóa
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // Bind list interactions
  function bindListEvents() {
    const editButtons = container.querySelectorAll(".edit-post-btn");
    editButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.id, 10);
        const postExists = articles.find(a => a.id === id);
        if (postExists) {
          editingArticleId = id;
          selectedCoverUrl = postExists.image;
          activeTab = 'create';
          renderView();
        }
      });
    });

    const deleteButtons = container.querySelectorAll(".delete-post-btn");
    deleteButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.id, 10);
        const article = articles.find(a => a.id === id);
        
        if (confirm(`Bạn có chắc chắn muốn xóa bài viết "${article?.title}" không? Hành động này không thể hoàn tác.`)) {
          // Filter out the post
          const updatedArticles = articles.filter(a => a.id !== id);
          localStorage.setItem("toptech_articles", JSON.stringify(updatedArticles));
          
          // Show quick success fade out in DOM before re-rendering
          const row = document.getElementById(`article-row-${id}`);
          if (row) {
            row.style.transition = "opacity 0.4s ease";
            row.style.opacity = "0";
            setTimeout(() => {
              // Update state
              articles.splice(0, articles.length, ...updatedArticles);
              onUpdate();
              renderView();
            }, 400);
          }
        }
      });
    });
  }

  // Render form to create post
  function renderCreateTab() {
    const editPost = editingArticleId ? articles.find(a => a.id === editingArticleId) : null;

    return `
      <div class="create-post-layout-grid">
        <!-- Form entry column (Left) -->
        <div class="publish-form-panel glass-panel">
          <h3 class="panel-subtitle">${editPost ? 'Chỉnh sửa bài viết' : 'Nội dung bài viết mới'}</h3>
          
          <div class="login-form" style="margin-top: 1.5rem;">
            <div class="form-row">
              <label for="post-title">Tiêu đề bài viết <span style="color:var(--secondary-color)">*</span></label>
              <input type="text" id="post-title" value="${editPost ? editPost.title : ''}" placeholder="Ví dụ: Lợi ích của AI trong chuyển đổi số 2026..." required>
            </div>

            <div class="form-grid-3">
              <div class="form-row">
                <label for="post-category">Chuyên mục chính <span style="color:var(--secondary-color)">*</span></label>
                <select id="post-category" required>
                  ${categories.map(cat => `<option value="${cat}" ${editPost && editPost.category === cat ? 'selected' : ''}>${cat}</option>`).join('')}
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

            <div class="form-grid-2">
              <div class="form-row">
                <label for="post-author-name">Tên tác giả <span style="color:var(--secondary-color)">*</span></label>
                <input type="text" id="post-author-name" value="${editPost ? editPost.author : 'Ms. Phương Linh'}" placeholder="Nhập tên tác giả..." required>
              </div>
              <div class="form-row">
                <label for="post-author-tag">Mã tác giả / Thẻ</label>
                <input type="text" id="post-author-tag" value="${editPost ? editPost.authorTag : '#CTAD01'}" placeholder="Ví dụ: #CTAD01...">
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
                <input type="url" id="post-cover-url" value="${editPost && editPost.image.startsWith('http') ? editPost.image : ''}" placeholder="Dán link ảnh bìa vào đây (https://...)" style="margin: 0; padding: 0.5rem 0.8rem; font-size: 0.9rem;">
              </div>
            </div>

            <div class="form-row">
              <label for="post-description">Tóm tắt bài viết (Sapo) <span style="color:var(--secondary-color)">*</span></label>
              <textarea id="post-description" rows="3" placeholder="Viết tóm tắt ngắn cho bài viết hiển thị ở trang chủ (1-2 câu)..." required>${editPost ? editPost.description : ''}</textarea>
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
              ${editPost ? '💾 Cập nhật bài viết' : '🚀 Xuất bản bài viết'}
            </button>
          </div>
        </div>

        <!-- Sidebar preview column (Right) -->
        <div class="preview-sidebar-panel">
          <h3 class="panel-subtitle" style="margin-bottom: 1.5rem;">Xem trước ảnh bìa & thông tin</h3>
          <div class="cat-article-card" style="box-shadow: var(--shadow-lg); background-color: var(--bg-surface); border: 1px solid var(--border-color); pointer-events: none;">
            <div class="cat-card-img-wrapper">
              <img id="sidebar-preview-img" src="${selectedCoverUrl}" alt="Cover Preview" style="height: 200px; width: 100%; object-fit: cover;">
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
    `;
  }

  // Bind interactions for the creation form
  function bindCreateEvents() {
    const postTitle = document.getElementById("post-title");
    const postCategory = document.getElementById("post-category");
    const postSubcategory = document.getElementById("post-subcategory");
    const postFeatured = document.getElementById("post-featured");
    const postAuthor = document.getElementById("post-author-name");
    const postAuthorTag = document.getElementById("post-author-tag");
    const postDesc = document.getElementById("post-description");
    const postContent = document.getElementById("post-content");
    const publishBtn = document.getElementById("publish-post-btn");
    
    // Preview targets
    const previewImg = document.getElementById("sidebar-preview-img");
    const previewCat = document.getElementById("sidebar-preview-cat");
    const previewTitle = document.getElementById("sidebar-preview-title");
    const previewDesc = document.getElementById("sidebar-preview-desc");
    const previewAuthor = document.getElementById("sidebar-preview-author");
    const previewTime = document.getElementById("sidebar-preview-time");

    const CATEGORY_MAP = {
      "Tin công nghệ": ["Điện thoại", "Máy tính", "Thiết bị thông minh", "Xe điện"],
      "AI": ["Machine Learning", "Generative AI", "ChatGPT & LLMs", "Thị giác máy tính"],
      "Chuyển đổi số": ["Doanh nghiệp", "Giải pháp đám mây", "IoT & Automation", "Bảo mật dữ liệu"],
      "Review": ["Đánh giá Laptop", "Đánh giá Smartphone", "Đồ công nghệ khác", "Trải nghiệm dịch vụ"],
      "Phần mềm": ["Công cụ lập trình", "Phần mềm văn phòng", "Hệ điều hành", "Ứng dụng di động"],
      "IT": ["Lập trình", "Quản trị mạng", "Cơ sở dữ liệu", "DevOps"],
      "Giải pháp công nghệ": ["AI cho doanh nghiệp", "Tự động hóa quy trình", "Hạ tầng số", "ERP & CRM"],
      "Casestudy": ["Thành công tiêu biểu", "Phân tích thất bại", "Khảo sát thực tế"]
    };

    // If editing mode is active, populate the visual editor and preview elements
    const editPost = editingArticleId ? articles.find(a => a.id === editingArticleId) : null;
    if (editPost && postContent) {
      postContent.innerHTML = editPost.content;
      selectedCoverUrl = editPost.image;
      if (previewImg) previewImg.src = selectedCoverUrl;
      if (previewCat) previewCat.textContent = (editPost.subcategory || editPost.category).toUpperCase();
      if (previewTitle) previewTitle.textContent = editPost.title;
      if (previewDesc) previewDesc.textContent = editPost.description;
      if (previewAuthor) previewAuthor.textContent = `${editPost.author} ${editPost.authorTag}`;
      
      // Update visual indicator in cover dropzone
      const dropzone = document.getElementById("upload-dropzone");
      if (dropzone) {
        dropzone.style.borderColor = "var(--primary-color)";
        dropzone.innerHTML = `
          <div style="text-align: center; color: var(--primary-color);">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:0.3rem;"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <p style="font-weight:600; font-size:0.85rem;">Đã chọn ảnh bìa hiện tại!</p>
            <p style="font-size:0.7rem; color:var(--text-muted); margin-top:0.2rem;">(Click hoặc kéo thả file khác để thay đổi)</p>
          </div>
        `;
      }
    }

    const updateSubcategories = (parentCat, selectedSub = "") => {
      if (!postSubcategory) return;
      const subs = CATEGORY_MAP[parentCat] || [];
      postSubcategory.innerHTML = '<option value="">-- Không có --</option>' + 
        subs.map(s => `<option value="${s}" ${selectedSub === s ? 'selected' : ''}>${s}</option>`).join('');
    };

    // Initial subcategory dropdown build
    if (postCategory) {
      updateSubcategories(postCategory.value, editPost ? editPost.subcategory : "");
    }

    // Reading time calculation function
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

    // Dynamic field update bindings for real-time sidebar preview
    postTitle?.addEventListener("input", (e) => {
      if (previewTitle) previewTitle.textContent = e.target.value.trim() || "Chưa nhập tiêu đề...";
    });

    postCategory?.addEventListener("change", (e) => {
      updateSubcategories(e.target.value);
      if (previewCat) previewCat.textContent = e.target.value.toUpperCase();
    });

    postSubcategory?.addEventListener("change", (e) => {
      if (previewCat) {
        previewCat.textContent = (e.target.value || postCategory?.value || "").toUpperCase();
      }
    });

    postAuthor?.addEventListener("input", (e) => {
      if (previewAuthor) {
        const tag = postAuthorTag?.value.trim() || "";
        previewAuthor.textContent = `${e.target.value.trim()} ${tag}`;
      }
    });

    postAuthorTag?.addEventListener("input", (e) => {
      if (previewAuthor) {
        const name = postAuthor?.value.trim() || "";
        previewAuthor.textContent = `${name} ${e.target.value.trim()}`;
      }
    });

    postDesc?.addEventListener("input", (e) => {
      if (previewDesc) previewDesc.textContent = e.target.value.trim() || "Nhập sapo để xem trước phần tóm tắt của bài viết tại đây.";
    });

    postContent?.addEventListener("input", () => {
      updateWordAndReadTime();
    });

    // Formatting Toolbar rich text command execution
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
          const url = prompt("Nhập đường dẫn liên kết (ví dụ: https://google.com):");
          if (url) executeCommand(cmd, url);
        } else if (cmd === 'insertHTML-table') {
          const tableHtml = `
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
          `;
          executeCommand('insertHTML', tableHtml);
        } else {
          executeCommand(cmd, val);
        }
      });
    });

    // Inline image insertion code (Upload + Clipboard Paste)
    const insertImgBtn = document.getElementById("btn-insert-inline-img");
    const inlineImgInput = document.getElementById("inline-img-file-input");

    const processInlineImageFile = (file) => {
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        const imgHtml = `
          <figure class="post-inline-figure">
            <img src="${base64}" alt="Ảnh chèn bài">
            <figcaption class="post-figcaption">Chú thích hình ảnh của bạn</figcaption>
          </figure><p><br></p>
        `;
        
        executeCommand('insertHTML', imgHtml);
      };
      reader.readAsDataURL(file);
    };

    insertImgBtn?.addEventListener("click", () => {
      inlineImgInput?.click();
    });

    inlineImgInput?.addEventListener("change", (e) => {
      processInlineImageFile(e.target.files[0]);
    });

    // Capture Ctrl+V / Paste action inside the rich editor contenteditable
    postContent?.addEventListener("paste", (e) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          e.preventDefault(); // Prevent pasting raw text
          const file = items[i].getAsFile();
          processInlineImageFile(file);
          break;
        }
      }
    });

    // Handle Cover Image upload, drag-drop and clipboard paste
    const dropzone = document.getElementById("upload-dropzone");
    const fileInput = document.getElementById("cover-file-input");
    const inputCoverUrl = document.getElementById("post-cover-url");

    dropzone?.addEventListener("click", () => {
      fileInput?.click();
    });

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
              <p style="font-size:0.75rem; color:var(--text-muted); text-overflow:ellipsis; overflow:hidden; white-space:nowrap; max-width:250px;">${file.name || 'Ảnh dán từ clipboard'}</p>
              <p style="font-size:0.7rem; color:var(--text-muted); margin-top:0.2rem;">(Click hoặc kéo thả file khác để thay đổi)</p>
            </div>
          `;
        }
      };
      reader.readAsDataURL(file);
    };

    fileInput?.addEventListener("change", (e) => {
      processCoverImageFile(e.target.files[0]);
    });

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

    // Make dropzone focusable to receive paste events directly
    if (dropzone) {
      dropzone.setAttribute("tabindex", "0");
      dropzone.addEventListener("paste", (e) => {
        const items = e.clipboardData?.items;
        if (!items) return;
        for (let i = 0; i < items.length; i++) {
          if (items[i].type.indexOf("image") !== -1) {
            e.preventDefault();
            const file = items[i].getAsFile();
            processCoverImageFile(file);
            break;
          }
        }
      });
    }

    // Handle Image URL input
    inputCoverUrl?.addEventListener("input", (e) => {
      const url = e.target.value.trim();
      if (url) {
        selectedCoverUrl = url;
        if (previewImg) previewImg.src = selectedCoverUrl;
      }
    });

    // Editor vs Preview Tabs handlers
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
        previewWrapper.innerHTML = contentVal ? compileMarkdown(contentVal) : '<p style="color:var(--text-muted); font-style:italic;">Chưa viết nội dung bài viết để xem trước...</p>';
      }
    });

    // Handle Publish Button click
    publishBtn?.addEventListener("click", () => {
      const title = postTitle?.value.trim();
      const category = postCategory?.value;
      const subcategory = postSubcategory?.value || "";
      const author = postAuthor?.value.trim();
      const authorTag = postAuthorTag?.value.trim() || "";
      const description = postDesc?.value.trim();
      const rawContent = postContent?.innerHTML.trim();
      const isFeatured = postFeatured?.checked;

      // Basic validation
      if (!title || !category || !author || !description || !rawContent) {
        alert("Vui lòng nhập đầy đủ các trường thông tin bắt buộc (*).");
        return;
      }

      publishBtn.disabled = true;
      publishBtn.textContent = "⏳ Đang chuẩn bị xuất bản...";

      setTimeout(() => {
        const readTime = updateWordAndReadTime();
        
        if (editingArticleId) {
          // Edit Mode: Update existing article
          const postToEdit = articles.find(a => a.id === editingArticleId);
          if (postToEdit) {
            postToEdit.title = title;
            postToEdit.category = category;
            postToEdit.subcategory = subcategory;
            postToEdit.image = selectedCoverUrl;
            postToEdit.author = author;
            postToEdit.authorTag = authorTag;
            postToEdit.description = description;
            postToEdit.content = rawContent;
            postToEdit.featured = isFeatured;
            postToEdit.readTime = readTime;
          }

          try {
            localStorage.setItem("toptech_articles", JSON.stringify(articles));
            onUpdate();

            // Animate success state
            publishBtn.style.backgroundColor = "#10b981";
            publishBtn.style.borderColor = "#10b981";
            publishBtn.innerHTML = "✓ Cập nhật bài viết thành công!";

            editingArticleId = null; // Clear editing state

            setTimeout(() => {
              window.location.hash = "#/";
            }, 1200);
          } catch (e) {
            publishBtn.disabled = false;
            publishBtn.style.backgroundColor = "var(--secondary-color)";
            publishBtn.style.borderColor = "var(--secondary-color)";
            publishBtn.textContent = "💾 Thử lại";
            alert("Lỗi lưu trữ: Bài viết có dung lượng quá lớn. Vui lòng nén bớt dung lượng ảnh trước khi lưu!");
          }
        } else {
          // Construct new article object
          const newPost = {
            id: Date.now(),
            title: title,
            category: category,
            subcategory: subcategory,
            image: selectedCoverUrl,
            author: author,
            authorTag: authorTag,
            date: 'Vừa đăng',
            readTime: readTime,
            views: 0,
            comments: 0,
            featured: isFeatured,
            description: description,
            content: rawContent,
            commentsList: []
          };

          // Save to articles array
          try {
            const updatedList = [newPost, ...articles];
            localStorage.setItem("toptech_articles", JSON.stringify(updatedList));

            // Call onUpdate to refresh main.js articles list
            articles.splice(0, articles.length, ...updatedList);
            onUpdate();

            // Animate success state
            publishBtn.style.backgroundColor = "#10b981";
            publishBtn.style.borderColor = "#10b981";
            publishBtn.innerHTML = "✓ Bài viết đã xuất bản thành công!";

            setTimeout(() => {
              // Redirect to the home page to see it in action!
              window.location.hash = "#/";
            }, 1200);
          } catch (e) {
            publishBtn.disabled = false;
            publishBtn.style.backgroundColor = "var(--secondary-color)";
            publishBtn.style.borderColor = "var(--secondary-color)";
            publishBtn.textContent = "🚀 Thử lại";
            alert("Lỗi lưu trữ: Bài viết có dung lượng quá lớn. Vui lòng nén bớt dung lượng ảnh trước khi chèn!");
          }
        }

      }, 1000);
    });
  }

  // Initial trigger
  renderView();
}
