import { getAssetUrl } from '../utils.js';

const CATEGORY_THUMBNAILS = {
  "AI": "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=600&h=400",
  "Tin công nghệ": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400",
  "Chuyển đổi số": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",
  "Review": "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600&h=400",
  "Phần mềm": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=600&h=400",
  "IT": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400",
  "Giải pháp công nghệ": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400",
  "Casestudy": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=400"
};

export function renderCategoriesListPage(container, articles, categories) {
  // Build category grid items
  const gridHtml = categories.map(cat => {
    const count = articles.filter(a => a.category === cat).length;
    const thumbnail = CATEGORY_THUMBNAILS[cat] || "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400";
    
    return `
      <a href="#/chuyen-muc/${cat}" class="category-list-card">
        <div class="category-list-img-wrapper">
          <img src="${thumbnail}" alt="${cat}">
        </div>
        <div class="category-list-info">
          <h3 class="category-list-name">${cat}</h3>
          <span class="category-list-count">${count} bài viết</span>
        </div>
      </a>
    `;
  }).join('');

  container.innerHTML = `
    <div class="category-page-header" style="padding: 2.5rem 0; background: var(--bg-surface); border-bottom: 1px solid var(--border-color); text-align: center;">
      <div class="container">
        <h1 class="category-page-title" style="font-size: 2.5rem; font-weight: 900; margin: 0; text-transform: uppercase; color: var(--text-primary);">Tất cả chuyên mục</h1>
      </div>
    </div>
    
    <div class="container section-padding">
      <div class="categories-list-grid">
        ${gridHtml}
      </div>
    </div>
  `;
}
