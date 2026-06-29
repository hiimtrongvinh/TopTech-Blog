import { getAssetUrl } from '../utils.js';

export function renderCategoryPage(container, categoryName, articles, isSearch = false) {
  // Normalize category name from hash url encoding
  const decodedCategory = decodeURIComponent(categoryName);
  
  let filteredArticles = [];
  let title = decodedCategory;
  let eyebrow = "Chuyên mục";
  let desc = `Khám phá các bài viết, tin tức công nghệ mới nhất và những chia sẻ chuyên sâu về chuyên mục ${decodedCategory} từ đội ngũ chuyên gia TopTech.`;

  if (isSearch) {
    filteredArticles = articles.filter(a => 
      a.title.toLowerCase().includes(decodedCategory.toLowerCase()) || 
      a.category.toLowerCase().includes(decodedCategory.toLowerCase()) || 
      (a.description && a.description.toLowerCase().includes(decodedCategory.toLowerCase()))
    );
    title = `Tìm kiếm: "${decodedCategory}"`;
    eyebrow = "Kết quả";
    desc = `Tìm thấy ${filteredArticles.length} bài viết liên quan đến từ khóa của bạn.`;
  } else {
    filteredArticles = articles.filter(a => a.category.toLowerCase() === decodedCategory.toLowerCase());
    // If no articles found, fallback to articles of similar keywords or all
    if (filteredArticles.length === 0) {
      filteredArticles = articles;
    }
  }

  // Initial render state
  let currentFilter = 'newest'; // newest, views, comments
  let itemsToShow = 6;

  // Render Page Shell
  container.innerHTML = `
    <div class="category-page-header">
      <div class="category-banner-overlay"></div>
      <div class="container category-header-content">
        <span class="category-eyebrow">${eyebrow}</span>
        <h1 class="category-page-title">${title}</h1>
        <p class="category-page-desc">${desc}</p>
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

    grid.innerHTML = pageItems.map(post => `
      <article class="cat-article-card">
        <div class="cat-card-img-wrapper">
          <img src="${getAssetUrl(post.image)}" alt="${post.title}">
          <a href="#/chuyen-muc/${post.category}" class="cat-card-category">${post.category}</a>
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
