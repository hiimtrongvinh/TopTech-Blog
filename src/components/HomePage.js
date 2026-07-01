import { getAssetUrl } from '../utils.js';

export function renderHomePage(container, articles, categories) {
  // 1. Render the HTML container shell for the Home Page
  container.innerHTML = `
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
  `;

  // 2. Run the dynamic rendering functions inside HomePage
  let currentBigIndex = 0;
  
  function renderHero(index) {
    const laptopPost = articles[index % articles.length];
    
    // Right side posts (4 unique small posts)
    const sidePosts = [
      articles[(index + 1) % articles.length],
      articles[(index + 2) % articles.length],
      articles[(index + 3) % articles.length],
      articles[(index + 4) % articles.length]
    ];
    
    // Populate left big container
    const heroLeftContainer = document.getElementById("hero-left-container");
    if (laptopPost && heroLeftContainer) {
      heroLeftContainer.innerHTML = `
        <img src="${getAssetUrl(laptopPost.image)}" alt="${laptopPost.title}">
        <div class="featured-big-overlay"></div>
        <div class="featured-big-content">
          <a href="#/chuyen-muc/${laptopPost.category}" class="featured-big-tag">${laptopPost.category}</a>
          <h3 class="featured-big-title"><a href="#/bai-viet/${laptopPost.id}">${laptopPost.title}</a></h3>
          <div class="post-meta post-detail-meta" style="display: flex; justify-content: space-between; align-items: center; width: 100%; flex-wrap: wrap; gap: 0.5rem;">
            <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap; flex: none;">
              <span>${laptopPost.author}</span>
              <span class="meta-dot">&bull;&nbsp;</span><span>${laptopPost.date}</span>
              <span class="meta-dot">&bull;&nbsp;</span><span>${laptopPost.readTime || '02 phút để đọc'}</span>
            </div>
            <div class="meta-right" style="display: flex; align-items: center; gap: 0.6rem; margin-left: auto;">
              <span style="display: inline-flex; align-items: center; gap: 0.2rem; white-space: nowrap;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${laptopPost.views}
              </span>
              <span style="display: inline-flex; align-items: center; gap: 0.2rem; white-space: nowrap;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${laptopPost.comments}
              </span>
            </div>
          </div>
        </div>
      `;
    }

    // Populate right side container
    const heroSideContainer = document.getElementById("hero-side-container");
    if (heroSideContainer) {
      heroSideContainer.innerHTML = sidePosts.filter(Boolean).map(post => `
        <div class="side-post-card">
          <img class="side-post-img" src="${getAssetUrl(post.image)}" alt="${post.title}">
          <div class="side-post-info">
            <h4 class="side-post-title"><a href="#/bai-viet/${post.id}">${post.title}</a></h4>
            <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem; display: flex; justify-content: space-between; align-items: center; width: 100%;">
              <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
                <span>${post.author}</span>
                <span class="meta-dot">&bull;</span>
                <span>${post.date}</span>
              </div>
              <div class="meta-right" style="display: flex; align-items: center; gap: 0.6rem; margin-left: auto;">
                <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${post.views}</span>
                <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${post.comments}</span>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // Initial render
  renderHero(currentBigIndex);
  
  // Set interval
  const rotationInterval = setInterval(() => {
    currentBigIndex = (currentBigIndex + 1) % articles.length;
    const left = document.getElementById("hero-left-container");
    const side = document.getElementById("hero-side-container");
    if (left && side) {
      left.style.opacity = "0.1";
      side.style.opacity = "0.1";
      setTimeout(() => {
        renderHero(currentBigIndex);
        left.style.opacity = "1";
        side.style.opacity = "1";
      }, 300);
    }
  }, 5000);

  // Populate bottom 4 small cards once (static)
  const heroSmallGridContainer = document.getElementById("hero-small-grid-container");
  if (heroSmallGridContainer) {
    const smallPosts = articles.slice(5, 9);
    heroSmallGridContainer.innerHTML = smallPosts.map(post => `
      <div class="small-post-card">
        <div class="small-post-img-wrapper">
          <img src="${getAssetUrl(post.image)}" alt="${post.title}">
        </div>
        <h4 class="small-post-title"><a href="#/bai-viet/${post.id}">${post.title}</a></h4>
        <div class="post-meta post-meta-stack" style="color: var(--text-muted); font-size: 0.7rem; display: flex; justify-content: space-between; align-items: center; width: 100%;">
          <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
            <span>${post.author}</span>
            <span class="meta-dot">&bull;</span>
            <span>${post.date}</span>
          </div>
          <div class="meta-right" style="display: flex; align-items: center; gap: 0.5rem; margin-left: auto;">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${post.views}</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${post.comments}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  populateFeaturedNumbers(articles);
  populateSplitSections(articles);
  populateCategoryColumns(articles, categories);
  setupHomeEventListeners(articles);

  container.cleanup = () => {
    clearInterval(rotationInterval);
  };
}

function populateFeaturedNumbers(articles) {
  const featuredNumbersContainer = document.getElementById("featured-numbers-container");
  if (!featuredNumbersContainer) return;

  // Render the top 6 most popular/recent articles excluding the main featured ones
  const robotPost = articles.filter(a => a.featured)[0] || articles.find(a => a.id === 1);
  const numbersData = articles
    .filter(a => a.id !== robotPost?.id)
    .slice(0, 6);

  featuredNumbersContainer.innerHTML = numbersData.map((post, index) => `
    <div class="number-post-card">
      <span class="post-number">#${index + 1}</span>
      <div class="number-post-img-wrapper">
        <img src="${getAssetUrl(post.image)}" alt="${post.title}">
      </div>
      <div class="number-post-info">
        <h4 class="number-post-title"><a href="#/bai-viet/${post.id}">${post.title}</a></h4>
        <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem; display: flex; justify-content: space-between; align-items: center; width: 100%;">
          <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
            <span>${post.author}</span>
            <span class="meta-dot">&bull;</span>
            <span>${post.date}</span>
          </div>
          <div class="meta-right" style="display: flex; align-items: center; gap: 0.6rem; margin-left: auto;">
            <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${post.views}</span>
            <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${post.comments}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function populateSplitSections(articles) {
  const newUpdatesContent = document.getElementById("new-updates-content");
  const colCenterAi = document.getElementById("col-center-ai");
  const trendingContent = document.getElementById("trending-content");
  const reviewsContent = document.getElementById("reviews-content");

  // 1. Column 1: Left Updates (3 newest posts)
  if (newUpdatesContent) {
    const sideNew1 = articles[0] || articles.find(a => a.id === 3);
    const sideNew2 = articles[1] || articles.find(a => a.id === 4);
    const sideNew3 = articles[2] || articles.find(a => a.id === 7);
    
    newUpdatesContent.innerHTML = [sideNew1, sideNew2, sideNew3].filter(Boolean).map(post => `
      <div class="post-card-mini">
        <img class="post-card-mini-img" src="${getAssetUrl(post.image)}" alt="${post.title}">
        <div class="post-card-mini-info">
          <a href="#/chuyen-muc/${post.category}" class="post-card-mini-tag">${post.category}</a>
          <h4 class="post-card-mini-title"><a href="#/bai-viet/${post.id}">${post.title}</a></h4>
          <div class="post-meta" style="font-size: 0.7rem; color: var(--text-muted);">
            <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
              <span>${post.author}</span>
              <span class="meta-dot">&bull;</span>
              <span>${post.date}</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 2. Column 2: Center AI Highlights (1 Big featured, 2 sub cards)
  if (colCenterAi) {
    const aiArticles = articles.filter(a => a.category === "AI");
    const mainNew = aiArticles[0] || articles.find(a => a.id === 5);
    const subNewLeft = aiArticles[1] || articles.find(a => a.id === 6);
    const subNewRight = aiArticles[2] || articles.find(a => a.id === 8);
    
    colCenterAi.innerHTML = `
      <!-- Main Center Post -->
      <div class="center-main-post">
        <a href="#/chuyen-muc/${mainNew.category}" class="center-main-tag">${mainNew.category}</a>
        <h4 class="center-main-title"><a href="#/bai-viet/${mainNew.id}">${mainNew.title}</a></h4>
        <div class="post-meta post-detail-meta" style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.2rem;">
          <span>${mainNew.author} <span class="meta-dot">&bull;&nbsp;</span>${mainNew.date}</span>
        </div>
        <div class="center-main-img-wrapper">
          <img src="${getAssetUrl(mainNew.image)}" alt="${mainNew.title}">
        </div>
      </div>

      <!-- Sub grid (2 cards side by side) -->
      <div class="center-sub-row">
        <!-- Sub Left -->
        <div class="center-sub-card">
          <a href="#/chuyen-muc/${subNewLeft.category}" class="post-card-mini-tag" style="font-size: 0.65rem;">${subNewLeft.category}</a>
          <h5 class="center-sub-title"><a href="#/bai-viet/${subNewLeft.id}">${subNewLeft.title}</a></h5>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${subNewLeft.author}</span>
        </div>

        <!-- Sub Right -->
        <div class="center-sub-card">
          <a href="#/chuyen-muc/${subNewRight.category}" class="post-card-mini-tag" style="font-size: 0.65rem;">${subNewRight.category}</a>
          <h5 class="center-sub-title"><a href="#/bai-viet/${subNewRight.id}">${subNewRight.title}</a></h5>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${subNewRight.author}</span>
        </div>
      </div>
    `;
  }

  // 3. Column 3: Right Trending (Top 5 viewed articles)
  if (trendingContent) {
    const trendPosts = [...articles]
      .sort((a, b) => (b.views || 0) - (a.views || 0))
      .slice(0, 5);

    trendingContent.innerHTML = trendPosts.map(post => `
      <div class="trending-post-card">
        <h4 class="trending-post-title"><a href="#/bai-viet/${post.id}">${post.title}</a></h4>
        <div class="post-meta" style="font-size: 0.7rem; color: var(--text-muted);">
          <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
            <span>${post.author}</span>
            <span class="meta-dot">&bull;</span>
            <span>${post.date}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 4. Review Row (4 cards horizontally below)
  if (reviewsContent) {
    const reviewPosts = articles.filter(a => a.category === "Review");
    const fallbackPosts = articles.filter(a => a.category !== "Review");
    const revList = [...reviewPosts, ...fallbackPosts].slice(0, 4);

    reviewsContent.innerHTML = revList.map(post => `
      <div class="review-post-card">
        <div class="review-post-img-wrapper">
          <img src="${getAssetUrl(post.image)}" alt="${post.title}">
        </div>
        <a href="#/chuyen-muc/${post.category}" class="post-card-mini-tag" style="font-size: 0.65rem; margin-top: 0.2rem;">${post.category}</a>
        <h4 class="review-post-title"><a href="#/bai-viet/${post.id}">${post.title}</a></h4>
        <div class="post-meta post-meta-stack" style="font-size: 0.7rem; color: var(--text-muted);">
          <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
            <span>${post.author}</span>
            <span class="meta-dot">&bull;</span>
            <span>${post.date}</span>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function populateCategoryColumns(articles, categories) {
  const categoryColumnsContainer = document.getElementById("category-columns-container");
  if (!categoryColumnsContainer) return;

  categoryColumnsContainer.innerHTML = categories.map((cat, colIdx) => {
    const catArticles = articles.filter(a => a.category === cat);
    const items = [];
    for (let i = 0; i < 4; i++) {
      items.push(catArticles[i % catArticles.length] || articles[(colIdx * 2 + i) % articles.length]);
    }

    return `
      <div class="category-column">
        <div class="category-header-wrapper">
          <a href="#/chuyen-muc/${cat}" class="category-title-header">${cat}</a>
        </div>
        <div class="split-col" style="gap: 1rem;">
          ${items.map((post, idx) => `
            <div class="cat-post-card ${idx === 0 ? 'has-image' : ''}">
              <div class="cat-post-img-wrapper">
                <img src="${getAssetUrl(post.image)}" alt="${post.title}">
              </div>
              <div class="cat-post-text-wrapper">
                <h4 class="cat-post-title"><a href="#/bai-viet/${post.id}">${post.title}</a></h4>
                <span style="font-size: 0.7rem; color: var(--text-muted);">${post.date}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function setupHomeEventListeners(articles) {
  const refreshNewUpdatesBtn = document.getElementById("refresh-new-updates");
  const newUpdatesContent = document.getElementById("new-updates-content");

  if (refreshNewUpdatesBtn) {
    refreshNewUpdatesBtn.addEventListener("click", () => {
      refreshNewUpdatesBtn.classList.add("spinning");
      
      setTimeout(() => {
        refreshNewUpdatesBtn.classList.remove("spinning");
        
        const shuffled = [...articles].filter(a => a.id !== 5 && a.id !== 6).sort(() => 0.5 - Math.random());
        const sideNew1 = shuffled[0];
        const sideNew2 = shuffled[1];
        const sideNew3 = shuffled[2];

        if (newUpdatesContent) {
          newUpdatesContent.innerHTML = [sideNew1, sideNew2, sideNew3].map(post => `
            <div class="post-card-mini">
              <img class="post-card-mini-img" src="${getAssetUrl(post.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=250')}" alt="${post.title}">
              <div class="post-card-mini-info">
                <a href="#/chuyen-muc/${post.category}" class="post-card-mini-tag">${post.category}</a>
                <h4 class="post-card-mini-title"><a href="#/bai-viet/${post.id}">${post.title}</a></h4>
                <div class="post-meta" style="font-size: 0.7rem; color: var(--text-muted);">
                  <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
                    <span>${post.author}</span>
                    <span class="meta-dot">&bull;</span>
                    <span>${post.date}</span>
                  </div>
                </div>
              </div>
            </div>
          `).join('');
        }
      }, 600);
    });
  }
}
