import { getAssetUrl } from '../utils.js';
import {
  compileMarkdown,
  createBlockquoteHtml,
  createFigureHtml,
  createImageRowHtml,
  createEmptyImageRowHtml,
  createTableHtml,
  cleanPastedHtml,
  getClipboardImageFiles,
  insertHtmlAtCursor,
  migrateArticleContent,
  setupEditorBlockHandlers
} from '../utils/articleContent.js';

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

// 1. Sleek login screen for admin authentication with Homepage Back button
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

// 2. Main Admin Dashboard View
function renderAdminDashboard(container, articles, categories, onUpdate) {
  let activeTab = 'articles'; // 'articles' | 'categories' | 'authors'
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
    if (!stored) return defaultSubs;
    const parsed = JSON.parse(stored);
    if (!parsed["AI"] || parsed["AI"].length === 0) {
      parsed["AI"] = defaultSubs["AI"];
      localStorage.setItem("toptech_subcategories", JSON.stringify(parsed));
    }
    return parsed;
  }

  function saveSubcategoriesDb(subs) {
    localStorage.setItem("toptech_subcategories", JSON.stringify(subs));
  }

  function getCategoryThumbnailsDb() {
    const stored = localStorage.getItem("toptech_category_thumbnails");
    const defaultThumbs = {
      "AI": "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=600&h=400",
      "Tin công nghệ": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400",
      "Chuyển đổi số": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",
      "Review": "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600&h=400",
      "Phần mềm": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800&h=450",
      "IT": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400",
      "Giải pháp công nghệ": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400",
      "Casestudy": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=400"
    };
    return stored ? JSON.parse(stored) : defaultThumbs;
  }

  function saveCategoryThumbnailsDb(thumbs) {
    localStorage.setItem("toptech_category_thumbnails", JSON.stringify(thumbs));
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

  // Modal open / close logic
  function openModal(html, width = '600px') {
    const modal = document.getElementById("admin-modal");
    const content = document.getElementById("admin-modal-content");
    const body = document.getElementById("admin-modal-body");
    if (modal && content && body) {
      body.innerHTML = html;
      content.style.maxWidth = width;
      modal.classList.add("is-active");

      // Focus within modal
      content.focus();

      // Bind events inside the modal depending on its content
      if (document.getElementById("publish-post-btn")) {
        bindArticlesWriteEvents();
      } else if (document.getElementById("btn-save-category")) {
        bindCategoriesFormEvents();
      } else if (document.getElementById("btn-save-author")) {
        bindAuthorsFormEvents();
      }
    }
  }

  function closeModal() {
    const modal = document.getElementById("admin-modal");
    if (modal) {
      modal.classList.remove("is-active");
      if (container.cleanup) {
        container.cleanup();
        container.cleanup = null;
      }
      editingCategoryName = null;
      editingAuthorName = null;
      editingArticleId = null;
      renderView();
    }
  }

  // Unified reusable HTML generator for multi-option media upload
  function createMediaUploadHtml(idPrefix, currentUrl = "") {
    const isPostCover = idPrefix === 'post-cover';
    const previewWidth = isPostCover ? 220 : 180;
    const previewHeight = isPostCover ? 130 : 110;
    return `
      <div class="media-upload-control" id="${idPrefix}-media-control" style="display: grid; grid-template-columns: ${previewWidth}px 1fr; gap: 1rem; padding: 0.8rem; border: 1px solid var(--border-color); border-radius: 12px; background: var(--bg-surface-secondary); margin-top: 0.4rem; align-items: center;">
        <!-- Left Side: Preview & Dropzone -->
        <div class="media-upload-dropzone" style="position: relative; width: ${previewWidth}px; height: ${previewHeight}px; border: 2px dashed var(--border-color); border-radius: 8px; display: flex; flex-direction: column; justify-content: center; align-items: center; overflow: hidden; background: var(--bg-main); cursor: pointer; transition: border-color var(--transition-fast);">
          
          <div class="dropzone-placeholder" style="text-align: center; padding: 0.3rem; pointer-events: none; display: ${currentUrl ? 'none' : 'block'};">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted); margin-bottom: 0.15rem;"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            <div style="font-size: 0.68rem; color: var(--text-muted); font-weight: 600; line-height: 1.2;">Kéo thả ảnh hoặc click để chọn</div>
          </div>
          
          <img class="media-preview-img" src="${currentUrl || ''}" style="display: ${currentUrl ? 'block' : 'none'}; width: 100%; height: 100%; object-fit: cover; pointer-events: none;">
          
          <div class="dropzone-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); display: none; justify-content: center; align-items: center; color: #fff; font-size: 0.72rem; font-weight: 700; pointer-events: none;">
            Thả ảnh tại đây...
          </div>
        </div>

        <!-- Right Side: Action Inputs -->
        <div style="display: flex; flex-direction: column; gap: 0.5rem; min-width: 0;">
          <div class="form-row" style="margin:0;">
            <label style="font-weight:600; font-size:0.78rem; margin-bottom: 0.15rem; display: block; color: var(--text-secondary);">Nhập hoặc dán link ảnh (URL):</label>
            <input type="url" class="media-url-input" value="${currentUrl.startsWith('data:') ? '' : currentUrl}" placeholder="https://..." style="margin:0; padding: 0.35rem 0.5rem; font-size: 0.78rem; width: 100%; height: 32px;">
          </div>
          <div style="display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap;">
            <button type="button" class="btn-media-upload-file" style="padding: 0.35rem 0.7rem; font-size: 0.72rem; font-weight: 700; border-radius: 6px; background: var(--primary-color); color: #fff; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 0.2rem; height: 30px;">
              📁 Tải lên từ máy
            </button>
            <button type="button" class="btn-media-paste-clipboard" style="padding: 0.35rem 0.7rem; font-size: 0.72rem; font-weight: 700; border-radius: 6px; background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-primary); cursor: pointer; display: inline-flex; align-items: center; gap: 0.2rem; height: 30px;">
              📋 Dán ảnh (Clip)
            </button>
            <span class="media-upload-status" style="font-size: 0.7rem; color: var(--text-muted); font-style: italic; font-weight: 600;">
              ${currentUrl ? '✓ Đã chọn ảnh' : 'Chưa có ảnh'}
            </span>
          </div>
          <input type="file" class="media-file-input" accept="image/*" style="display:none;">
        </div>
      </div>
            <button type="button" class="btn-media-paste-clipboard" style="padding: 0.4rem 0.8rem; font-size: 0.75rem; font-weight: 700; border-radius: 6px; background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-primary); cursor: pointer; display: inline-flex; align-items: center; gap: 0.2rem;">
              📋 Dán ảnh (Clip)
            </button>
            <span class="media-upload-status" style="font-size: 0.72rem; color: var(--text-muted); font-style: italic; font-weight: 600;">
              ${currentUrl ? '✓ Đã chọn ảnh' : 'Chưa có ảnh'}
            </span>
          </div>
          <input type="file" class="media-file-input" accept="image/*" style="display:none;">
        </div>
      </div>
    `;
  }

  // Unified reusable event binder for multi-option media upload
  function setupMediaUploadControl(wrapper, onImageSelected) {
    if (!wrapper) return;
    const urlInput = wrapper.querySelector(".media-url-input");
    const uploadBtn = wrapper.querySelector(".btn-media-upload-file");
    const pasteBtn = wrapper.querySelector(".btn-media-paste-clipboard");
    const dropzone = wrapper.querySelector(".media-upload-dropzone");
    const fileInput = wrapper.querySelector(".media-file-input");
    const statusSpan = wrapper.querySelector(".media-upload-status");
    const previewImg = wrapper.querySelector(".media-preview-img");
    const placeholder = wrapper.querySelector(".dropzone-placeholder");
    const dropzoneOverlay = wrapper.querySelector(".dropzone-overlay");

    const updatePreview = (url) => {
      if (url) {
        if (previewImg) {
          previewImg.src = url;
          previewImg.style.display = "block";
        }
        if (placeholder) {
          placeholder.style.display = "none";
        }
      }
    };

    const handleFile = (file) => {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        if (urlInput) urlInput.value = '';
        if (statusSpan) {
          statusSpan.textContent = `✓ Đã dán/tải ảnh!`;
          statusSpan.style.color = "var(--primary-color)";
        }
        updatePreview(dataUrl);
        onImageSelected(dataUrl);
      };
      reader.readAsDataURL(file);
    };

    urlInput?.addEventListener("input", (e) => {
      const url = e.target.value.trim();
      if (url) {
        if (statusSpan) {
          statusSpan.textContent = "✓ Đã dùng Link";
          statusSpan.style.color = "var(--primary-color)";
        }
        updatePreview(url);
        onImageSelected(url);
      }
    });

    uploadBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      fileInput?.click();
    });
    
    dropzone?.addEventListener("click", () => fileInput?.click());
    fileInput?.addEventListener("change", (e) => handleFile(e.target.files[0]));

    pasteBtn?.addEventListener("click", async (e) => {
      e.stopPropagation();
      try {
        const clipboardItems = await navigator.clipboard.read();
        for (const item of clipboardItems) {
          for (const type of item.types) {
            if (type.startsWith("image/")) {
              const blob = await item.getType(type);
              const file = new File([blob], "clipboard-image.png", { type });
              handleFile(file);
              return;
            }
          }
        }
        alert("Không tìm thấy ảnh trong Clipboard. Vui lòng Sao chép (Copy) ảnh trước.");
      } catch (err) {
        console.error("Lỗi khi đọc clipboard:", err);
        alert("Vui lòng sao chép ảnh và bấm phím Ctrl + V trực tiếp trên form này.");
      }
    });

    dropzone?.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.style.borderColor = "var(--primary-color)";
      if (dropzoneOverlay) dropzoneOverlay.style.display = "flex";
    });

    dropzone?.addEventListener("dragleave", () => {
      dropzone.style.borderColor = "var(--border-color)";
      if (dropzoneOverlay) dropzoneOverlay.style.display = "none";
    });

    dropzone?.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.style.borderColor = "var(--border-color)";
      if (dropzoneOverlay) dropzoneOverlay.style.display = "none";
      handleFile(e.dataTransfer.files[0]);
    });

    wrapper.addEventListener("paste", (e) => {
      const imageFiles = getClipboardImageFiles(e.clipboardData);
      if (imageFiles.length > 0) {
        e.preventDefault();
        handleFile(imageFiles[0]);
      }
    });
  }

  function renderCategoryFormHtml() {
    const thumbsMap = getCategoryThumbnailsDb();
    const editingThumb = editingCategoryName ? (thumbsMap[editingCategoryName] || '') : '';
    return `
      <h3 class="panel-subtitle" style="margin-bottom: 1.5rem; font-size: 1.35rem; font-weight: 800; color: var(--text-primary); border-bottom: 1px solid var(--border-color); padding-bottom: 0.8rem;">
        ${editingCategoryName ? `Sửa chuyên mục: ${editingCategoryName}` : 'Thêm chuyên mục mới'}
      </h3>
      <div class="login-form" style="gap: 1.2rem; display: flex; flex-direction: column;">
        <div class="form-row">
          <label for="input-cat-name" style="font-weight:600; font-size:0.85rem;">Tên chuyên mục <span style="color:var(--secondary-color)">*</span></label>
          <input type="text" id="input-cat-name" value="${editingCategoryName || ''}" placeholder="Ví dụ: AI, Review, IT..." required>
        </div>

        <div class="form-row">
          <label style="font-weight:600; font-size:0.85rem;">Ảnh đại diện chuyên mục (Thumbnail)</label>
          ${createMediaUploadHtml('cat-thumbnail', editingThumb)}
        </div>
        
        <div style="display: flex; gap: 0.5rem; margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
          <button class="login-btn" id="btn-save-category" style="flex: 1; padding: 0.75rem; font-size: 0.9rem; border-radius: 8px; font-weight: 700;">
            ${editingCategoryName ? 'Cập nhật' : 'Thêm chuyên mục'}
          </button>
          <button class="logout-btn" id="btn-cancel-category-modal" style="padding: 0.75rem; font-size: 0.9rem; border-radius: 8px; font-weight: 700; margin: 0;">
            Hủy
          </button>
        </div>
      </div>
    `;
  }

  function renderAuthorFormHtml() {
    const authors = getAuthorsDb();
    const editAuthor = editingAuthorName ? authors.find(a => a.name === editingAuthorName) : null;
    return `
      <h3 class="panel-subtitle" style="margin-bottom: 1.5rem; font-size: 1.35rem; font-weight: 800; color: var(--text-primary); border-bottom: 1px solid var(--border-color); padding-bottom: 0.8rem;">
        ${editAuthor ? `Sửa thông tin: ${editAuthor.name}` : 'Thêm tác giả mới'}
      </h3>
      <div class="login-form" style="gap: 1.2rem; display: flex; flex-direction: column;">
        <div class="form-row">
          <label for="input-author-name" style="font-weight:600; font-size:0.85rem;">Họ và tên <span style="color:var(--secondary-color)">*</span></label>
          <input type="text" id="input-author-name" value="${editAuthor ? editAuthor.name : ''}" placeholder="Ví dụ: Khánh Nam, Phương Linh..." ${editAuthor ? 'disabled' : ''} required>
        </div>
        
        <div class="form-row">
          <label for="input-author-role" style="font-weight:600; font-size:0.85rem;">Chức danh / Vai trò <span style="color:var(--secondary-color)">*</span></label>
          <input type="text" id="input-author-role" value="${editAuthor ? editAuthor.role : ''}" placeholder="Ví dụ: Content Writer, Tech Lead..." required>
        </div>

        <div class="form-row">
          <label style="font-weight:600; font-size:0.85rem;">Ảnh đại diện tác giả <span style="color:var(--secondary-color)">*</span></label>
          ${createMediaUploadHtml('author-avatar', editAuthor ? editAuthor.avatar : '')}
        </div>

        <div class="form-row">
          <label for="input-author-desc" style="font-weight:600; font-size:0.85rem;">Mô tả giới thiệu / Tiểu sử <span style="color:var(--secondary-color)">*</span></label>
          <textarea id="input-author-desc" rows="3" placeholder="Nhập tiểu sử tóm tắt giới thiệu tác giả..." required>${editAuthor ? editAuthor.desc : ''}</textarea>
        </div>
        
        <div style="display: flex; gap: 0.5rem; margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
          <button class="login-btn" id="btn-save-author" style="flex: 1; padding: 0.75rem; font-size: 0.9rem; border-radius: 8px; font-weight: 700;">
            ${editAuthor ? 'Cập nhật' : 'Thêm tác giả'}
          </button>
          <button class="logout-btn" id="btn-cancel-author-modal" style="padding: 0.75rem; font-size: 0.9rem; border-radius: 8px; font-weight: 700; margin: 0;">
            Hủy
          </button>
        </div>
      </div>
    `;
  }

  function renderArticleFormHtml() {
    const editPost = editingArticleId ? articles.find(a => a.id === editingArticleId) : null;
    const cats = getCategoriesDb();
    const authors = getAuthorsDb();
    return `
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 0.8rem; margin-bottom: 1.5rem;">
        <h3 class="panel-subtitle" style="margin: 0; font-size: 1.35rem; font-weight: 800; color: var(--text-primary);">${editPost ? 'Chỉnh sửa bài viết' : 'Nội dung bài viết mới'}</h3>
      </div>

      <div class="login-form" style="gap: 1.2rem; display: flex; flex-direction: column; width: 100%;">
        <!-- Title -->
        <div class="form-row">
          <label for="post-title" style="font-weight:600; font-size:0.85rem;">Tiêu đề bài viết <span style="color:var(--secondary-color)">*</span></label>
          <input type="text" id="post-title" value="${editPost ? editPost.title : ''}" placeholder="Nhập tiêu đề hấp dẫn..." required>
        </div>

        <!-- Categories + Featured -->
        <div class="create-post-categories-row" style="display: grid; grid-template-columns: 1fr 1fr auto; gap: 1rem; align-items: end;">
          <div class="form-row">
            <label for="post-category" style="font-weight:600; font-size:0.85rem;">Chuyên mục chính <span style="color:var(--secondary-color)">*</span></label>
            <select id="post-category" required>
              ${cats.map(cat => `<option value="${cat}" ${editPost && editPost.category === cat ? 'selected' : ''}>${cat}</option>`).join('')}
            </select>
          </div>

          <div class="form-row">
            <label for="post-subcategory" style="font-weight:600; font-size:0.85rem;">Chuyên mục con</label>
            <select id="post-subcategory">
              <!-- Dynamic render -->
            </select>
          </div>

          <div class="form-row" style="display:flex; align-items:center; gap: 0.5rem; margin: 0; cursor:pointer; padding-bottom: 0.25rem;">
            <input type="checkbox" id="post-featured" ${editPost && editPost.featured ? 'checked' : ''} style="width: 18px; height: 18px; margin:0;">
            <label for="post-featured" style="margin:0; font-weight:700; font-size: 0.85rem; white-space: nowrap;">Nổi bật</label>
          </div>
        </div>

        <div class="form-row">
          <label for="post-author-name" style="font-weight:600; font-size:0.85rem;">Tác giả <span style="color:var(--secondary-color)">*</span></label>
          <select id="post-author-name" required>
            ${authors.map(aut => `<option value="${aut.name}" ${editPost && editPost.author === aut.name ? 'selected' : ''}>${aut.name} (${aut.role})</option>`).join('')}
          </select>
        </div>

        <!-- Cover Image Selector -->
        <div class="form-row">
          <label style="font-weight:600; font-size:0.85rem;">Ảnh bìa bài viết <span style="color:var(--secondary-color)">*</span></label>
          ${createMediaUploadHtml('post-cover', editPost ? editPost.image : selectedCoverUrl)}
        </div>

        <div class="form-row">
          <label for="post-description" style="font-weight:600; font-size:0.85rem;">Tóm tắt bài viết (Sapo) <span style="color:var(--secondary-color)">*</span></label>
          <textarea id="post-description" rows="2" placeholder="Viết tóm tắt ngắn..." required>${editPost ? editPost.description : ''}</textarea>
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
          ${editPost ? '💾 Cập nhật bài viết' : '🚀 Xuất bản bài viết'}
        </button>
      </div>
    `;
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

        <!-- Tab header row -->
        <div class="admin-tabs-row">
          <div class="admin-tabs">
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
          
          <div class="admin-tab-action">
            ${activeTab === 'articles' ? `
              <button class="write-post-btn active" id="btn-goto-write-article" style="padding: 0.6rem 1.4rem; font-size: 0.9rem; font-weight: 700; border-radius: 8px;">
                + Viết bài mới
              </button>
            ` : activeTab === 'categories' ? `
              <button class="write-post-btn active" id="btn-add-category-modal" style="padding: 0.6rem 1.4rem; font-size: 0.9rem; font-weight: 700; border-radius: 8px;">
                + Thêm chuyên mục lớn
              </button>
            ` : `
              <button class="write-post-btn active" id="btn-add-author-modal" style="padding: 0.6rem 1.4rem; font-size: 0.9rem; font-weight: 700; border-radius: 8px;">
                + Thêm tác giả
              </button>
            `}
          </div>
        </div>

        <!-- Tab content area -->
        <div id="admin-tab-content">
          ${activeTab === 'articles' ? renderArticlesTab() : activeTab === 'categories' ? renderCategoriesTab() : renderAuthorsTab()}
        </div>
      </div>

      <!-- Popup Modal Container -->
      <div class="admin-modal" id="admin-modal" tabindex="-1">
        <div class="admin-modal-content" id="admin-modal-content" tabindex="0">
          <button type="button" class="admin-modal-close-btn" id="admin-modal-close-btn" style="position: absolute; top: 1.2rem; right: 1.2rem; background: none; border: none; font-size: 1.8rem; cursor: pointer; color: var(--text-secondary); font-weight: bold; line-height: 1;">&times;</button>
          <div id="admin-modal-body"></div>
        </div>
      </div>
    `;

    // Bind modal backdrop click to close
    const modal = document.getElementById("admin-modal");
    modal?.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.getElementById("admin-modal-close-btn")?.addEventListener("click", closeModal);

    // Bind tab clicks
    document.getElementById("admin-logout-btn")?.addEventListener("click", () => {
      sessionStorage.removeItem("toptech_admin_logged_in");
      renderPublishPage(container, articles, categories, onUpdate);
    });

    document.getElementById("tab-articles-btn")?.addEventListener("click", () => {
      activeTab = 'articles';
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
      bindArticlesListEvents();
    } else if (activeTab === 'categories') {
      bindCategoriesEvents();
    } else if (activeTab === 'authors') {
      bindAuthorsEvents();
    }

    // Auto open editor modal if redirectEditId was set
    if (redirectEditId) {
      openModal(renderArticleFormHtml(), '1100px');
    }
  }

  // --------------------------------------------------------------------------
  // TAB: ARTICLES
  // --------------------------------------------------------------------------
  function renderArticlesTab() {
    return `
      <!-- Articles Grid (Mobile & Desktop Card Layout) -->
      <div class="admin-articles-grid" style="margin-bottom: 2rem;">
        ${articles.length === 0 ? `
          <div style="text-align: center; padding: 3rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px; color: var(--text-muted); grid-column: 1 / -1;">
            Chưa có bài viết nào trong hệ thống.
          </div>
        ` : articles.map(post => `
          <div class="admin-post-card" id="article-card-${post.id}">
            <div style="display: flex; gap: 1.2rem; align-items: flex-start;">
              <img src="${post.image && (post.image.startsWith('http') || post.image.startsWith('data:')) ? post.image : getAssetUrl(post.image || '')}" alt="Thumbnail" style="width: 140px; aspect-ratio: 16/10; object-fit: cover; border-radius: 8px; flex-shrink: 0; border: 1px solid var(--border-color);">
              <div style="flex: 1; min-width: 0;">
                <h4 style="font-size: 1.15rem; font-weight: 800; line-height: 1.35; margin: 0 0 0.5rem 0; word-break: break-word;"><a href="#/bai-viet/${post.id}" target="_blank" style="color: var(--text-primary); transition: color var(--transition-fast);">${post.title}</a></h4>
                <div class="admin-post-badges" style="display: flex; flex-wrap: wrap; gap: 0.35rem; align-items: center;">
                  <span class="badge badge-cat" style="font-size: 0.65rem; padding: 0.15rem 0.4rem; white-space: nowrap;">${post.category}${post.subcategory ? ` / ${post.subcategory}` : ''}</span>
                  ${post.featured ? '<span class="badge badge-featured" style="font-size: 0.65rem; padding: 0.15rem 0.4rem; white-space: nowrap;">Nổi bật</span>' : ''}
                </div>
              </div>
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed var(--border-color); padding-top: 0.6rem; margin-top: 0.8rem; font-size: 0.8rem; color: var(--text-muted);">
              <div>Tác giả: <strong>${post.author}</strong></div>
              <div style="display: flex; gap: 0.8rem;">
                <span>👀 ${post.views || 0}</span>
                <span>💬 ${post.comments || 0}</span>
              </div>
            </div>
            
            <div style="display: flex; gap: 0.5rem; margin-top: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 0.8rem;">
              <button class="edit-post-btn" data-id="${post.id}" style="flex: 1; background-color: var(--primary-color); border: none; color: #fff; padding: 0.5rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 0.2rem;">
                📝 Sửa
              </button>
              <button class="delete-post-btn" data-id="${post.id}" style="flex: 1; margin: 0; padding: 0.5rem; display: inline-flex; align-items: center; justify-content: center; gap: 0.2rem; font-size: 0.8rem; font-weight: 600;">
                ❌ Xóa
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function bindArticlesListEvents() {
    document.getElementById("btn-goto-write-article")?.addEventListener("click", () => {
      editingArticleId = null;
      selectedCoverUrl = PRESET_IMAGES[0].url;
      openModal(renderArticleFormHtml(), '1100px');
    });

    container.querySelectorAll(".edit-post-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.id, 10);
        const postExists = articles.find(a => a.id === id);
        if (postExists) {
          editingArticleId = id;
          selectedCoverUrl = postExists.image;
          openModal(renderArticleFormHtml(), '1100px');
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

          const card = document.getElementById(`article-card-${id}`);
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
    const postTitle = document.getElementById("post-title");
    const postCategory = document.getElementById("post-category");
    const postSubcategory = document.getElementById("post-subcategory");
    const postFeatured = document.getElementById("post-featured");
    const postAuthor = document.getElementById("post-author-name");
    const postDesc = document.getElementById("post-description");
    const postContent = document.getElementById("post-content");
    const publishBtn = document.getElementById("publish-post-btn");

    const subsDb = getSubcategoriesDb();
    const editPost = editingArticleId ? articles.find(a => a.id === editingArticleId) : null;

    if (editPost && postContent) {
      postContent.innerHTML = editPost.content;
      migrateArticleContent(postContent, { isEditor: true });
      selectedCoverUrl = editPost.image;
    }

    // Set up cover media upload control
    const uploadWrapper = document.getElementById("post-cover-media-control");
    setupMediaUploadControl(uploadWrapper, (url) => {
      selectedCoverUrl = url;
    });

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
      const text = (postContent?.innerText || postContent?.textContent || "").trim();
      const wordCount = text ? text.split(/\s+/).length : 0;
      const readMinutes = Math.max(1, Math.ceil(wordCount / 200));

      const wordSpan = document.getElementById("word-count-indicator");
      const readSpan = document.getElementById("reading-time-indicator");

      if (wordSpan) wordSpan.textContent = `${wordCount} từ`;
      if (readSpan) readSpan.textContent = `${readMinutes} phút đọc`;

      return `${readMinutes < 10 ? '0' : ''}${readMinutes} phút để đọc`;
    }

    postCategory?.addEventListener("change", (e) => {
      updateSubcategories(e.target.value);
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
        } else if (cmd === 'insertBlockquote') {
          insertHtmlAtCursor(postContent, createBlockquoteHtml());
        } else if (cmd === 'insertHTML-table') {
          const rows = parseInt(prompt("Số hàng (bao gồm tiêu đề):", "3"), 10) || 3;
          const cols = parseInt(prompt("Số cột:", "3"), 10) || 3;
          insertHtmlAtCursor(postContent, createTableHtml(rows, cols));
        } else {
          executeCommand(cmd, val);
        }
      });
    });

    let pendingImageRow = null;

    const insertImgBtn = document.getElementById("btn-insert-inline-img");
    const insertImageRowBtn = document.getElementById("btn-insert-image-row");
    const inlineImgInput = document.getElementById("inline-img-file-input");
    const imageRowInput = document.getElementById("image-row-file-input");

    const readFilesAsDataUrls = (files) => Promise.all(
      Array.from(files).map(file => new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => resolve(event.target.result);
        reader.readAsDataURL(file);
      }))
    );

    const appendFigureToImageRow = (rowEl, src) => {
      const items = rowEl?.querySelector('.post-image-row-items');
      if (!items) return;
      const wrapper = document.createElement('div');
      wrapper.innerHTML = createFigureHtml(src, '', { inRow: true });
      items.appendChild(wrapper.firstElementChild);
      rowEl?.classList.remove('post-image-row-empty');
      postContent?.dispatchEvent(new Event('input'));
    };

    const appendFilesToImageRow = async (rowEl, files) => {
      if (!rowEl || !files?.length) return;
      const sources = await readFilesAsDataUrls(files);
      sources.forEach(src => appendFigureToImageRow(rowEl, src));
    };

    const processInlineImageFile = (file) => {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        if (pendingImageRow) {
          appendFigureToImageRow(pendingImageRow, event.target.result);
        } else {
          insertHtmlAtCursor(postContent, createFigureHtml(event.target.result));
        }
      };
      reader.readAsDataURL(file);
    };

    const processInlineImageFiles = async (files) => {
      if (!files?.length) return;
      if (pendingImageRow) {
        await appendFilesToImageRow(pendingImageRow, files);
        return;
      }
      if (files.length === 1) {
        processInlineImageFile(files[0]);
      } else {
        const sources = await readFilesAsDataUrls(files);
        insertHtmlAtCursor(postContent, createImageRowHtml(sources));
        migrateArticleContent(postContent, { isEditor: true });
      }
    };

    const processImageRowFiles = async (files) => {
      if (!files?.length) return;
      const sources = await readFilesAsDataUrls(files);
      if (sources.length === 1) {
        insertHtmlAtCursor(postContent, createFigureHtml(sources[0]));
      } else {
        insertHtmlAtCursor(postContent, createImageRowHtml(sources));
      }
    };

    insertImgBtn?.addEventListener("click", () => {
      pendingImageRow = null;
      postContent?.querySelectorAll('.post-image-row.is-selected').forEach(r => r.classList.remove('is-selected'));
      inlineImgInput?.click();
    });
    insertImageRowBtn?.addEventListener("click", () => {
      insertHtmlAtCursor(postContent, createEmptyImageRowHtml());
      const rows = postContent?.querySelectorAll('.post-image-row');
      pendingImageRow = rows?.[rows.length - 1] || null;
      migrateArticleContent(postContent, { isEditor: true });
    });
    inlineImgInput?.addEventListener("change", (e) => {
      processInlineImageFile(e.target.files[0]);
      e.target.value = '';
    });
    imageRowInput?.addEventListener("change", (e) => {
      processImageRowFiles(e.target.files);
      e.target.value = '';
    });

    const clearFormatBtn = document.getElementById("btn-clear-format");
    clearFormatBtn?.addEventListener("click", () => {
      document.execCommand('removeFormat', false, null);
      document.execCommand('formatBlock', false, 'p');
      postContent?.focus();
      postContent?.dispatchEvent(new Event('input'));
    });

    setupEditorBlockHandlers(postContent, {
      onImageRowAdd: (rowEl) => {
        pendingImageRow = rowEl;
        imageRowInput?.click();
      },
      onImageRowSelect: (rowEl) => {
        pendingImageRow = rowEl;
      },
      onChange: () => postContent?.dispatchEvent(new Event('input'))
    });

    if (postContent && !editPost) {
      migrateArticleContent(postContent, { isEditor: true });
    }

    updateWordAndReadTime();

    postContent?.addEventListener("paste", (e) => {
      const captionZone = e.target.closest?.('.post-figcaption-zone');
      if (captionZone) {
        e.preventDefault();
        const text = e.clipboardData?.getData('text/plain') || '';
        document.execCommand('insertText', false, text);
        return;
      }

      const imageFiles = getClipboardImageFiles(e.clipboardData);
      if (imageFiles.length > 0) {
        e.preventDefault();
        processInlineImageFiles(imageFiles);
        return;
      }

      const html = e.clipboardData?.getData('text/html');
      if (html) {
        e.preventDefault();
        const cleaned = cleanPastedHtml(html);
        insertHtmlAtCursor(postContent, cleaned);
        migrateArticleContent(postContent, { isEditor: true });
        return;
      }

      const text = e.clipboardData?.getData('text/plain');
      if (text) {
        e.preventDefault();
        document.execCommand('insertText', false, text);
        postContent?.dispatchEvent(new Event('input'));
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
        migrateArticleContent(previewWrapper, { isEditor: false });
      }
    });

    publishBtn?.addEventListener("click", () => {
      const title = postTitle?.value.trim();
      const category = postCategory?.value;
      const subcategory = postSubcategory?.value || "";
      const author = postAuthor?.value;
      const description = postDesc?.value.trim();
      const rawContent = postContent?.innerHTML.trim();
      migrateArticleContent(postContent, { isEditor: true });
      const normalizedContent = postContent?.innerHTML.trim();
      const isFeatured = postFeatured?.checked;

      if (!title || !category || !author || !description || !normalizedContent) {
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
            postToEdit.content = normalizedContent;
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
            content: normalizedContent,
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
          closeModal();
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
    const thumbsMap = getCategoryThumbnailsDb();

    const listHtml = cats.map(cat => {
      const subs = subsMap[cat] || [];
      const thumb = thumbsMap[cat] || "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400";
      return `
        <div class="category-manage-row" id="cat-manage-${cat}">
          <!-- Top details -->
          <div style="display: flex; gap: 0.7rem; align-items: center; margin-bottom: 0.1rem;">
            <img src="${thumb}" alt="${cat}" style="width: 72px; height: 52px; object-fit: cover; border-radius: 10px; border: 1px solid var(--border-color); flex-shrink: 0;">
            <div style="min-width: 0; flex: 1;">
              <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--text-primary); margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${cat}">${cat}</h4>
              <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600;">(${subs.length} chuyên mục con)</span>
            </div>
          </div>

          <!-- Edit / Delete actions -->
          <div style="display: flex; gap: 0.4rem; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.65rem; margin-bottom: 0.65rem; margin-top: 0.35rem;">
            <button class="edit-cat-btn" data-cat="${cat}" style="flex: 1; justify-content: center; background: var(--bg-surface-secondary); border: 1px solid var(--border-color); border-radius: 6px; padding: 0.35rem; font-size: 0.75rem; font-weight: 700; cursor: pointer; color: var(--text-secondary); display: inline-flex; align-items: center; gap: 0.2rem;">📝 Sửa</button>
            <button class="delete-cat-btn" data-cat="${cat}" style="flex: 1; justify-content: center; background: #ef44440d; border: 1px solid rgba(239,68,68,0.2); border-radius: 6px; padding: 0.35rem; font-size: 0.75rem; font-weight: 700; cursor: pointer; color: #ef4444; display: inline-flex; align-items: center; gap: 0.2rem;">❌ Xóa</button>
          </div>
          
          <!-- Subcategories tags list (scrollable) -->
          <div style="flex: 1; display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 0.75rem; justify-content: flex-start; overflow: hidden;">
            <div style="display: flex; flex-wrap: wrap; gap: 0.3rem; align-content: flex-start; max-height: 86px; overflow-y: auto; padding-right: 0.15rem;">
              ${subs.map(sub => `
                <span style="display: inline-flex; align-items: center; gap: 0.25rem; background: var(--bg-surface-secondary); border: 1px solid var(--border-color); border-radius: 20px; padding: 0.15rem 0.55rem; font-size: 0.71rem; font-weight: 600; color: var(--text-secondary);">
                  ${sub}
                  <button class="delete-sub-btn" data-cat="${cat}" data-sub="${sub}" style="background:none; border:none; cursor:pointer; color: var(--text-muted); font-weight:bold; font-size: 0.85rem; padding: 0; display: inline-flex; align-items: center;">&times;</button>
                </span>
              `).join('')}
              ${subs.length === 0 ? '<span style="font-size: 0.73rem; color: var(--text-muted); font-style: italic; margin-top: 0.15rem;">Chưa có chuyên mục con</span>' : ''}
            </div>
          </div>

          <!-- Add inline Subcategory input -->
          <div style="display: flex; gap: 0.5rem; width: 100%; margin-top: 0.1rem;">
            <input type="text" placeholder="Thêm chuyên mục con..." class="inline-sub-input" data-cat="${cat}" style="margin:0; padding: 0.45rem 0.75rem; font-size: 0.83rem; border-radius: 10px; border: 1px solid var(--border-color); width: 100%;">
            <button class="btn-add-subcategory" data-cat="${cat}" style="background: var(--primary-color); border: none; color: #fff; border-radius: 10px; padding: 0.45rem 0.9rem; font-size: 1rem; cursor: pointer; font-weight: 800; flex-shrink: 0; min-width: 44px;">+</button>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="admin-categories-grid" style="margin-bottom: 2rem;">
        ${cats.length === 0 ? `
          <div style="text-align: center; padding: 3rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px; color: var(--text-muted); grid-column: 1 / -1;">
            Chưa có chuyên mục nào trong hệ thống.
          </div>
        ` : listHtml}
      </div>
    `;
  }

  function bindCategoriesEvents() {
    document.getElementById("btn-add-category-modal")?.addEventListener("click", () => {
      editingCategoryName = null;
      openModal(renderCategoryFormHtml(), '600px');
    });

    // Edit button clicks
    container.querySelectorAll(".edit-cat-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        editingCategoryName = btn.dataset.cat;
        openModal(renderCategoryFormHtml(), '600px');
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

          let thumbsMap = getCategoryThumbnailsDb();
          delete thumbsMap[catName];
          saveCategoryThumbnailsDb(thumbsMap);

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

  function bindCategoriesFormEvents() {
    const inputCatName = document.getElementById("input-cat-name");
    const saveCatBtn = document.getElementById("btn-save-category");
    const cancelCatBtn = document.getElementById("btn-cancel-category-modal");

    let selectedThumbnail = editingCategoryName ? (getCategoryThumbnailsDb()[editingCategoryName] || "") : "";

    const uploadWrapper = document.getElementById("cat-thumbnail-media-control");
    setupMediaUploadControl(uploadWrapper, (url) => {
      selectedThumbnail = url;
    });

    saveCatBtn?.addEventListener("click", () => {
      const catName = inputCatName?.value.trim();
      if (!catName) {
        alert("Vui lòng nhập tên chuyên mục.");
        return;
      }

      let cats = getCategoriesDb();
      let subsMap = getSubcategoriesDb();
      let thumbsMap = getCategoryThumbnailsDb();

      if (editingCategoryName) {
        // Edit Mode
        const idx = cats.indexOf(editingCategoryName);
        if (idx !== -1) {
          cats[idx] = catName;

          if (subsMap[editingCategoryName]) {
            subsMap[catName] = subsMap[editingCategoryName];
            delete subsMap[editingCategoryName];
          }

          if (selectedThumbnail) {
            thumbsMap[catName] = selectedThumbnail;
          } else {
            delete thumbsMap[catName];
          }
          if (editingCategoryName !== catName) {
            delete thumbsMap[editingCategoryName];
          }

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
        if (selectedThumbnail) {
          thumbsMap[catName] = selectedThumbnail;
        }
      }

      saveCategoriesDb(cats);
      saveSubcategoriesDb(subsMap);
      saveCategoryThumbnailsDb(thumbsMap);
      onUpdate();
      closeModal();
    });

    cancelCatBtn?.addEventListener("click", () => {
      closeModal();
    });
  }

  // --------------------------------------------------------------------------
  // TAB: AUTHORS
  // --------------------------------------------------------------------------
  function renderAuthorsTab() {
    const authors = getAuthorsDb();

    const listHtml = authors.map(aut => `
      <div class="author-manage-row" style="display: flex; align-items: center; gap: 1.2rem; border: 1px solid var(--border-color); padding: 1.2rem; border-radius: 12px; background: var(--bg-surface);" id="author-manage-${aut.name}">
        <img src="${aut.avatar}" alt="${aut.name}" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover; border: 2.5px solid var(--primary-color); flex-shrink: 0;">
        <div style="flex: 1; min-width: 0;">
          <strong style="color: var(--text-primary); font-size: 1.1rem;">${aut.name}</strong>
          <div style="font-size: 0.85rem; color: var(--primary-color); font-weight: 600; margin-top: 0.1rem;">${aut.role}</div>
          <div style="font-size: 0.85rem; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-top: 0.3rem; line-height: 1.4;">${aut.desc}</div>
        </div>
        <div style="display: flex; gap: 0.4rem; flex-shrink: 0;">
          <button class="edit-author-btn" data-name="${aut.name}" style="background: var(--bg-surface-secondary); border: 1px solid var(--border-color); border-radius: 6px; padding: 0.4rem 0.8rem; font-size: 0.8rem; font-weight: 600; cursor: pointer; color: var(--text-secondary); display: inline-flex; align-items: center; gap: 0.2rem;">📝 Sửa</button>
          <button class="delete-author-btn" data-name="${aut.name}" style="background: #ef44440d; border: 1px solid rgba(239,68,68,0.2); border-radius: 6px; padding: 0.4rem 0.8rem; font-size: 0.8rem; font-weight: 600; cursor: pointer; color: #ef4444; display: inline-flex; align-items: center; gap: 0.2rem;">❌ Xóa</button>
        </div>
      </div>
    `).join('');

    return `
      <div class="admin-authors-grid" style="margin-bottom: 2rem;">
        ${authors.length === 0 ? `
          <div style="text-align: center; padding: 3rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px; color: var(--text-muted); grid-column: 1 / -1;">
            Chưa có tác giả nào trong hệ thống.
          </div>
        ` : listHtml}
      </div>
    `;
  }

  function bindAuthorsEvents() {
    document.getElementById("btn-add-author-modal")?.addEventListener("click", () => {
      editingAuthorName = null;
      openModal(renderAuthorFormHtml(), '600px');
    });

    container.querySelectorAll(".edit-author-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        editingAuthorName = btn.dataset.name;
        openModal(renderAuthorFormHtml(), '600px');
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

  function bindAuthorsFormEvents() {
    const inputName = document.getElementById("input-author-name");
    const inputRole = document.getElementById("input-author-role");
    const inputDesc = document.getElementById("input-author-desc");
    const saveBtn = document.getElementById("btn-save-author");
    const cancelBtn = document.getElementById("btn-cancel-author-modal");

    const editAuthor = editingAuthorName ? getAuthorsDb().find(a => a.name === editingAuthorName) : null;
    let selectedAvatar = editAuthor ? editAuthor.avatar : "";

    const uploadWrapper = document.getElementById("author-avatar-media-control");
    setupMediaUploadControl(uploadWrapper, (url) => {
      selectedAvatar = url;
    });

    saveBtn?.addEventListener("click", () => {
      const name = inputName?.value.trim();
      const role = inputRole?.value.trim();
      const desc = inputDesc?.value.trim();

      if (!name || !role || !selectedAvatar || !desc) {
        alert("Vui lòng điền đầy đủ các thông tin bắt buộc (*).");
        return;
      }

      let authors = getAuthorsDb();

      if (editingAuthorName) {
        // Edit Mode
        const author = authors.find(a => a.name === editingAuthorName);
        if (author) {
          author.role = role;
          author.avatar = selectedAvatar;
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
        authors.push({ name, role, avatar: selectedAvatar, desc });
      }

      saveAuthorsDb(authors);
      onUpdate();
      closeModal();
    });

    cancelBtn?.addEventListener("click", () => {
      closeModal();
    });
  }

  // Render initial dashboard view
  renderView();
}
