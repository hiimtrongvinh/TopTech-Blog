import { getAssetUrl } from '../utils.js';

const SUBCATEGORY_PARENTS = {
  // Tin công nghệ
  "Điện thoại": "Tin công nghệ",
  "Máy tính": "Tin công nghệ",
  "Thiết bị thông minh": "Tin công nghệ",
  "Xe điện": "Tin công nghệ",
  // AI
  "Machine Learning": "AI",
  "Generative AI": "AI",
  "ChatGPT & LLMs": "AI",
  "Thị giác máy tính": "AI",
  // Chuyển đổi số
  "Doanh nghiệp": "Chuyển đổi số",
  "Giải pháp đám mây": "Chuyển đổi số",
  "IoT & Automation": "Chuyển đổi số",
  "Bảo mật dữ liệu": "Chuyển đổi số",
  // Review
  "Đánh giá Laptop": "Review",
  "Đánh giá Smartphone": "Review",
  "Đồ công nghệ khác": "Review",
  "Trải nghiệm dịch vụ": "Review",
  // Phần mềm
  "Công cụ lập trình": "Phần mềm",
  "Phần mềm văn phòng": "Phần mềm",
  "Hệ điều hành": "Phần mềm",
  "Ứng dụng di động": "Phần mềm",
  // IT
  "Lập trình": "IT",
  "Quản trị mạng": "IT",
  "Cơ sở dữ liệu": "IT",
  "DevOps": "IT",
  // Giải pháp công nghệ
  "AI cho doanh nghiệp": "Giải pháp công nghệ",
  "Tự động hóa quy trình": "Giải pháp công nghệ",
  "Hạ tầng số": "Giải pháp công nghệ",
  "ERP & CRM": "Giải pháp công nghệ",
  // Casestudy
  "Thành công tiêu biểu": "Casestudy",
  "Phân tích thất bại": "Casestudy",
  "Khảo sát thực tế": "Casestudy"
};

const PARENT_SUBCATEGORIES = {
  "Tin công nghệ": ["Điện thoại", "Máy tính", "Thiết bị thông minh", "Xe điện"],
  "AI": ["Machine Learning", "Generative AI", "ChatGPT & LLMs", "Thị giác máy tính"],
  "Chuyển đổi số": ["Doanh nghiệp", "Giải pháp đám mây", "IoT & Automation", "Bảo mật dữ liệu"],
  "Review": ["Đánh giá Laptop", "Đánh giá Smartphone", "Đồ công nghệ khác", "Trải nghiệm dịch vụ"],
  "Phần mềm": ["Công cụ lập trình", "Phần mềm văn phòng", "Hệ điều hành", "Ứng dụng di động"],
  "IT": ["Lập trình", "Quản trị mạng", "Cơ sở dữ liệu", "DevOps"],
  "Giải pháp công nghệ": ["AI cho doanh nghiệp", "Tự động hóa quy trình", "Hạ tầng số", "ERP & CRM"],
  "Casestudy": ["Thành công tiêu biểu", "Phân tích thất bại", "Khảo sát thực tế"]
};


export function renderCategoryPage(container, categoryName, articles, isSearch = false) {
  // Normalize category name from hash url encoding
  const decodedCategory = decodeURIComponent(categoryName);
  
  let filteredArticles = [];
  let title = decodedCategory;
  let parentCategory = SUBCATEGORY_PARENTS[decodedCategory];
  let isSubcategory = !!parentCategory;

  if (isSearch) {
    filteredArticles = articles.filter(a => 
      a.title.toLowerCase().includes(decodedCategory.toLowerCase()) || 
      a.category.toLowerCase().includes(decodedCategory.toLowerCase()) || 
      (a.subcategory && a.subcategory.toLowerCase().includes(decodedCategory.toLowerCase())) ||
      (a.description && a.description.toLowerCase().includes(decodedCategory.toLowerCase()))
    );
    title = `Tìm kiếm: "${decodedCategory}"`;
  } else {
    if (isSubcategory) {
      // Filter articles matching subcategory OR category (case-insensitive)
      filteredArticles = articles.filter(a => 
        (a.subcategory && a.subcategory.toLowerCase() === decodedCategory.toLowerCase()) ||
        a.category.toLowerCase() === decodedCategory.toLowerCase()
      );
    } else {
      // Filter articles matching parent category OR subcategories belonging to this parent category
      filteredArticles = articles.filter(a => 
        a.category.toLowerCase() === decodedCategory.toLowerCase() ||
        (a.subcategory && SUBCATEGORY_PARENTS[a.subcategory] && SUBCATEGORY_PARENTS[a.subcategory].toLowerCase() === decodedCategory.toLowerCase())
      );
    }
  }

  // Initial render state
  let currentFilter = 'newest'; // newest, views, comments
  let itemsToShow = 6;

  // Build the Header HTML based on the new layout requirements:
  // Left: Major category title
  // Right: Capsule subcategory pill list (highlight current subcategory if active)
  let headerHtml = "";
  let headerStyle = "display: flex; justify-content: space-between; align-items: center; width: 100%; flex-wrap: wrap; gap: 1.5rem;";
  if (isSearch) {
    headerStyle = "display: block; text-align: center; width: 100%;";
    headerHtml = `
      <span class="category-eyebrow" style="font-size: 0.95rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--primary-color); display: block; margin-bottom: 0.5rem;">KẾT QUẢ TÌM KIẾM</span>
      <h1 class="category-page-title" style="font-size: 2.2rem; font-weight: 850; text-transform: uppercase; margin: 0; color: var(--text-primary);">"${decodedCategory.toUpperCase()}"</h1>
    `;
  } else {
    const parentCatName = isSubcategory ? parentCategory : decodedCategory;
    const subCats = PARENT_SUBCATEGORIES[parentCatName] || [];
    
    headerHtml = `
      <!-- Left: Major category title -->
      <div>
        <h1 class="category-page-title" style="font-size: 2.5rem; font-weight: 850; text-transform: uppercase; margin: 0; line-height: 1.1; color: var(--text-primary);">
          <a href="#/chuyen-muc/${parentCatName}" style="color: inherit; text-decoration: none;">${parentCatName.toUpperCase()}</a>
        </h1>
      </div>
      
      <!-- Right: Capsule subcategory tag pills list -->
      <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: center;">
        ${subCats.map(sub => {
          const isCurrent = decodedCategory.toLowerCase() === sub.toLowerCase();
          return `
            <a href="#/chuyen-muc/${sub}" style="display: inline-block; padding: 0.45rem 1.1rem; font-size: 0.82rem; font-weight: 600; border-radius: 50px; text-decoration: none; border: 1.5px solid ${isCurrent ? 'var(--primary-color)' : 'var(--border-color)'}; background-color: ${isCurrent ? 'var(--primary-color)' : 'var(--bg-main)'}; color: ${isCurrent ? '#fff' : 'var(--text-secondary)'}; transition: all var(--transition-fast);" class="subcat-pill ${isCurrent ? 'active-pill' : ''}">
              ${sub}
            </a>
          `;
        }).join('')}
      </div>
    `;
  }

  // Render Page Shell
  container.innerHTML = `
    <div class="category-page-header" style="padding: 2.5rem 0; background: var(--bg-surface); border-bottom: 1px solid var(--border-color); transition: background-color var(--transition-normal), border-color var(--transition-normal);">
      <div class="container category-header-content" style="${headerStyle}">
        ${headerHtml}
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
  `;

  // Populate articles function
  function displayArticles() {
    const grid = document.getElementById("category-grid");
    if (!grid) return;

    // Apply Sorting
    let sorted = [...filteredArticles];
    if (currentFilter === 'newest') {
      sorted.sort((a, b) => b.id - a.id);
    } else if (currentFilter === 'views') {
      sorted.sort((a, b) => b.views - a.views);
    } else if (currentFilter === 'comments') {
      sorted.sort((a, b) => b.comments - a.comments);
    }

    // Slice to current limit
    const pageItems = sorted.slice(0, itemsToShow);

    grid.innerHTML = pageItems.length === 0
      ? `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px; transition: background-color var(--transition-normal), border-color var(--transition-normal);">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted); margin-bottom: 1rem;"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-primary);">Chưa có bài viết</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 400px; margin: 0 auto;">Chưa có bài viết nào thuộc chuyên mục này. Quản trị viên có thể đăng nhập vào trang Viết bài để cập nhật bài viết mới!</p>
        </div>
      `
      : pageItems.map(post => `
      <article class="cat-article-card">
        <div class="cat-card-img-wrapper">
          <img src="${getAssetUrl(post.image)}" alt="${post.title}">
          <a href="#/chuyen-muc/${post.subcategory || post.category}" class="cat-card-category">${post.subcategory || post.category}</a>
        </div>
        <div class="cat-card-content">
          <h3 class="cat-card-title"><a href="#/bai-viet/${post.id}">${post.title}</a></h3>
          <p class="cat-card-description">${post.description || 'Chưa có mô tả chi tiết cho bài viết này. Nhấp vào để đọc bài viết...'}</p>
          
          <div class="post-meta" style="color: var(--text-muted); font-size: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 1rem; margin-top: auto; width: 100%;">
            <div class="post-author">
              <span class="post-author-name">${post.author}</span>
            </div>
            <span>&bull;&nbsp; ${post.date}</span>
            <span style="margin-left: auto; display: flex; align-items: center; gap: 0.25rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${post.views}
            </span>
            <span style="display: flex; align-items: center; gap: 0.25rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${post.comments}
            </span>
          </div>
        </div>
      </article>
    `).join('');

    // Toggle Load More button
    const loadMoreContainer = document.getElementById("load-more-container");
    if (loadMoreContainer) {
      if (sorted.length > itemsToShow) {
        loadMoreContainer.style.display = 'block';
      } else {
        loadMoreContainer.style.display = 'none';
      }
    }
  }

  // Setup Event Listeners
  displayArticles();

  // Load more click
  const loadMoreBtn = document.getElementById("load-more-articles-btn");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      itemsToShow += 6;
      displayArticles();
    });
  }

  // Filter tabs click
  const filterBtns = document.querySelectorAll(".filter-tab-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      
      currentFilter = e.target.dataset.filter;
      itemsToShow = 6; // Reset page items count
      displayArticles();
    });
  });
}
