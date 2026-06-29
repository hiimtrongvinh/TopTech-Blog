// Mock Data for Articles (18 distinct articles with unique images and categories)
const ARTICLES = [
  {
    id: 1,
    title: "Top 20 công cụ AI tốt nhất năm 2026",
    category: "AI",
    image: "hero_robot.png",
    author: "Phương Linh",
    authorTag: "#CTAD01",
    date: "12 giờ trước",
    readTime: "02 phút để đọc",
    views: 1357,
    comments: 26,
    featured: true,
    description: "Khám phá danh sách các công cụ Trí tuệ Nhân tạo đột phá nhất năm 2026, giúp tự động hóa công việc, tăng hiệu suất gấp 5 lần và tối ưu hóa quy trình làm việc của cá nhân cũng như doanh nghiệp."
  },
  {
    id: 2,
    title: "Top 15 laptop cho lập trình viên chuyên nghiệp",
    category: "Tin công nghệ",
    image: "coding_laptop.png",
    author: "Phương Linh",
    authorTag: "#CTAD01",
    date: "12 giờ trước",
    readTime: "02 phút để đọc",
    views: 1357,
    comments: 26,
    featured: true,
    description: "Đánh giá chi tiết top 15 dòng máy tính xách tay cấu hình cao, pin trâu và bàn phím gõ êm nhất dành riêng cho các kỹ sư phần mềm và lập trình viên chuyên nghiệp năm nay."
  },
  {
    id: 3,
    title: "So sánh ưu điểm ChatGPT vs Claude vs Gemini năm nay",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=400&h=250",
    author: "Phương Linh",
    authorTag: "#CTAD01",
    date: "12 giờ trước",
    views: 1357,
    comments: 26,
    featured: false
  },
  {
    id: 4,
    title: "Mô hình ngôn ngữ lớn LLM đang thay đổi lập trình thế nào",
    category: "AI",
    image: "https://images.unsplash.com/photo-1684369175833-3d026dc6a066?auto=format&fit=crop&q=80&w=400&h=250",
    author: "Khánh Nam",
    authorTag: "#CTAD02",
    date: "1 ngày trước",
    views: 945,
    comments: 14,
    featured: false
  },
  {
    id: 5,
    title: "EUROPE IS PUSHING BACK ON WASHINGTON’S CHIP WAR",
    category: "AI",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=450",
    author: "Phương Linh",
    authorTag: "#CTAD01",
    date: "12 giờ trước",
    views: 894,
    comments: 15,
    description: "At high-stakes meetings with the White House, Anthropic's cofounder—a \"weirdo,\" per one official—has been replaced by cofounder Tom Brown to lead negotiations on silicon sanctions."
  },
  {
    id: 6,
    title: "I Met With China’s Top AI Experts. They’re Freaking Out, Too",
    category: "AI",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=400&h=250",
    author: "Phương Linh",
    authorTag: "#CTAD01",
    date: "12 giờ trước",
    views: 1102,
    comments: 42,
    description: "The AI arms race between China and the US has researchers on both sides worried about a “Chernobyl moment” for automated systems."
  },
  {
    id: 7,
    title: "Đánh giá chi tiết Keychron Q1 Pro sau 6 tháng sử dụng",
    category: "Review",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=400&h=250",
    author: "Quốc Anh",
    authorTag: "#CTAD03",
    date: "2 ngày trước",
    views: 520,
    comments: 9
  },
  {
    id: 8,
    title: "A24 Knows You’re Mad About the Google AI Collab",
    category: "AI",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=250",
    author: "Phương Linh",
    authorTag: "#CTAD01",
    date: "12 giờ trước",
    views: 932,
    comments: 18
  },
  {
    id: 9,
    title: "Meta tạm dừng chương trình theo dõi nhân viên sau sự cố rò rỉ dữ liệu",
    category: "Tin công nghệ",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400&h=250",
    author: "Phương Linh",
    authorTag: "#CTAD01",
    date: "12 giờ trước",
    views: 2405,
    comments: 63
  },
  {
    id: 10,
    title: "Chính phủ Mỹ yêu cầu nhân viên gỡ bỏ ứng dụng lạ trên điện thoại công vụ",
    category: "Tin công nghệ",
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=400&h=250",
    author: "Phương Linh",
    authorTag: "#CTAD01",
    date: "12 giờ trước",
    views: 3108,
    comments: 72
  },
  {
    id: 11,
    title: "Hành trình chuyển đổi số của doanh nghiệp bán lẻ Việt Nam",
    category: "Chuyển đổi số",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=250",
    author: "Minh Tâm",
    authorTag: "#CTAD04",
    date: "3 ngày trước",
    views: 1823,
    comments: 29
  },
  {
    id: 12,
    title: "Chiến lược tối ưu hóa hạ tầng đám mây cho startup năm 2026",
    category: "Chuyển đổi số",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=400&h=250",
    author: "Minh Tâm",
    authorTag: "#CTAD04",
    date: "4 ngày trước",
    views: 1245,
    comments: 11
  },
  {
    id: 13,
    title: "Đánh giá chi tiết màn hình Dell UltraSharp U2723QE 4K",
    category: "Review",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=400&h=250",
    author: "Quốc Anh",
    authorTag: "#CTAD03",
    date: "5 ngày trước",
    views: 890,
    comments: 15
  },
  {
    id: 14,
    title: "VS Code vs WebStorm: IDE nào tốt hơn cho lập trình Frontend",
    category: "Phần mềm",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=400&h=250",
    author: "Khánh Nam",
    authorTag: "#CTAD02",
    date: "1 tuần trước",
    views: 3105,
    comments: 54
  },
  {
    id: 15,
    title: "Xây dựng hệ thống CI/CD hoàn chỉnh với Docker và GitHub Actions",
    category: "IT",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=400&h=250",
    author: "Trà My",
    authorTag: "#CTAD05",
    date: "1 tuần trước",
    views: 2200,
    comments: 31
  },
  {
    id: 16,
    title: "Bảo mật API trong kiến trúc Microservices thế nào cho đúng",
    category: "IT",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400&h=250",
    author: "Trà My",
    authorTag: "#CTAD05",
    date: "1 tuần trước",
    views: 1780,
    comments: 19
  },
  {
    id: 17,
    title: "Ứng dụng AI tổng hợp để tăng năng suất cho doanh nghiệp",
    category: "Giải pháp công nghệ",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&h=250",
    author: "Hoàng Long",
    authorTag: "#CTAD06",
    date: "2 tuần trước",
    views: 1450,
    comments: 22
  },
  {
    id: 18,
    title: "Casestudy: Uber đã di chuyển hạ tầng dữ liệu khổng lồ thế nào",
    category: "Casestudy",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400&h=250",
    author: "Hoàng Long",
    authorTag: "#CTAD06",
    date: "3 tuần trước",
    views: 2900,
    comments: 48
  }
];

// 8 Categories specified in design
const CATEGORIES = [
  "Tin công nghệ",
  "AI",
  "Chuyển đổi số",
  "Review",
  "Phần mềm",
  "IT",
  "Giải pháp công nghệ",
  "Casestudy"
];

// Document Elements
const themeToggleBtn = document.getElementById("theme-toggle");
const menuToggleBtn = document.getElementById("menu-toggle");
const megaMenu = document.getElementById("mega-menu");
const megaMenuCloseBtn = document.getElementById("mega-menu-close");
const megaMenuBackdrop = document.getElementById("mega-menu-backdrop");

const searchTrigger = document.getElementById("search-trigger");
const searchOverlay = document.getElementById("search-overlay");
const searchCloseBtn = document.getElementById("search-close");
const searchInput = document.getElementById("search-input");

const heroSliderContainer = document.getElementById("hero-slider-container");
const heroSideContainer = document.getElementById("hero-side-container");
const heroSmallGridContainer = document.getElementById("hero-small-grid-container");
const featuredNumbersContainer = document.getElementById("featured-numbers-container");

const newUpdatesContent = document.getElementById("new-updates-content");
const colCenterAi = document.getElementById("col-center-ai");
const trendingContent = document.getElementById("trending-content");
const reviewsContent = document.getElementById("reviews-content");
const categoryColumnsContainer = document.getElementById("category-columns-container");

const refreshNewUpdatesBtn = document.getElementById("refresh-new-updates");

// Init application
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderHeroSection();
  renderFeaturedNumbers();
  renderSplitSections();
  renderCategoryColumns();
  setupEventListeners();
});

// Theme Logic (Dark/Light mode)
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const sunIcon = themeToggleBtn.querySelector(".sun-icon");
  const moonIcon = themeToggleBtn.querySelector(".moon-icon");

  if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.body.classList.add("dark");
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  } else {
    document.body.classList.remove("dark");
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  }
}

// Toggle Dark / Light Theme
function toggleTheme() {
  const sunIcon = themeToggleBtn.querySelector(".sun-icon");
  const moonIcon = themeToggleBtn.querySelector(".moon-icon");
  
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  } else {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  }
}

// Render Hero Section
function renderHeroSection() {
  // 1. Full-width Hero Banner (Robot post, ID 1)
  const robotPost = ARTICLES.find(a => a.id === 1);
  const heroBannerContainer = document.getElementById("hero-banner-container");
  if (robotPost && heroBannerContainer) {
    heroBannerContainer.innerHTML = `
      <img src="${robotPost.image}" alt="${robotPost.title}">
      <div class="hero-banner-full-overlay"></div>
      <div class="hero-banner-full-content">
        <span class="hero-banner-full-tag">${robotPost.category}</span>
        <h3 class="hero-banner-full-title"><a href="#">${robotPost.title}</a></h3>
        <div class="post-meta">
          <div class="post-author">
            <span>${robotPost.author} ${robotPost.authorTag}</span>
          </div>
          <span>&bull;&nbsp; ${robotPost.date}</span>
          <span>&bull;&nbsp; ${robotPost.readTime}</span>
          <span style="margin-left: auto; display: flex; align-items: center; gap: 0.3rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${robotPost.views}
          </span>
          <span style="display: flex; align-items: center; gap: 0.3rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${robotPost.comments}
          </span>
        </div>
      </div>
    `;
  }

  // 2. Left Medium post in Grid (Laptop post, ID 2)
  const laptopPost = ARTICLES.find(a => a.id === 2);
  const heroLeftContainer = document.getElementById("hero-left-container");
  if (laptopPost && heroLeftContainer) {
    heroLeftContainer.innerHTML = `
      <img src="${laptopPost.image}" alt="${laptopPost.title}">
      <div class="featured-big-overlay"></div>
      <div class="featured-big-content">
        <span class="featured-big-tag">${laptopPost.category}</span>
        <h3 class="featured-big-title"><a href="#">${laptopPost.title}</a></h3>
        <div class="post-meta">
          <div class="post-author">
            <span>${laptopPost.author} ${laptopPost.authorTag}</span>
          </div>
          <span>&bull;&nbsp; ${laptopPost.date}</span>
          <span>&bull;&nbsp; ${laptopPost.readTime}</span>
          <span style="margin-left: auto; display: flex; align-items: center; gap: 0.3rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${laptopPost.views}
          </span>
          <span style="display: flex; align-items: center; gap: 0.3rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${laptopPost.comments}
          </span>
        </div>
      </div>
    `;
  }

  // 3. Right side list (4 posts stacked, unique)
  if (heroSideContainer) {
    const sidePosts = [
      ARTICLES.find(a => a.id === 3), // ChatGPT vs Claude vs Gemini
      ARTICLES.find(a => a.id === 6), // China AI Experts
      ARTICLES.find(a => a.id === 15), // CI/CD Docker
      ARTICLES.find(a => a.id === 16)  // Secure API
    ].filter(Boolean);

    heroSideContainer.innerHTML = sidePosts.map(post => `
      <div class="side-post-card">
        <img class="side-post-img" src="${post.image}" alt="${post.title}">
        <div class="side-post-info">
          <h4 class="side-post-title"><a href="#">${post.title}</a></h4>
          <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem;">
            <span>${post.author} ${post.authorTag} &bull; ${post.date}</span>
          </div>
          <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem;">
            <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${post.views}</span>
            <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${post.comments}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 4. Bottom 4 Small Cards (unique)
  if (heroSmallGridContainer) {
    const smallPosts = [
      ARTICLES.find(a => a.id === 4),  // LLM coding
      ARTICLES.find(a => a.id === 11), // Digital retail
      ARTICLES.find(a => a.id === 12), // Cloud startup
      ARTICLES.find(a => a.id === 17)  // Generative AI solution
    ].filter(Boolean);

    heroSmallGridContainer.innerHTML = smallPosts.map((post, idx) => `
      <div class="small-post-card">
        <div class="small-post-img-wrapper">
          <img src="${post.image}" alt="${post.title}">
        </div>
        <h4 class="small-post-title"><a href="#">${post.title}</a></h4>
        <div class="post-meta" style="color: var(--text-muted); font-size: 0.7rem; justify-content: space-between;">
          <span>${post.author} &bull; ${post.date}</span>
          <div style="display: gap: 0.5rem; display: flex;">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${post.views}</span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${post.comments}</span>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// Render Featured Numbers (#1 to #6, unique)
function renderFeaturedNumbers() {
  if (!featuredNumbersContainer) return;

  // Take 6 distinct articles to render
  const numbersData = ARTICLES.slice(2, 8);

  featuredNumbersContainer.innerHTML = numbersData.map((post, index) => `
    <div class="number-post-card">
      <span class="post-number">#${index + 1}</span>
      <div class="number-post-img-wrapper">
        <img src="${post.image}" alt="${post.title}">
      </div>
      <div class="number-post-info">
        <h4 class="number-post-title"><a href="#">${post.title}</a></h4>
        <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem;">
          <span>${post.author} ${post.authorTag} &bull; ${post.date}</span>
        </div>
        <div class="post-meta" style="color: var(--text-muted); font-size: 0.75rem;">
          <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${post.views}</span>
          <span style="display: flex; align-items: center; gap: 0.2rem;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${post.comments}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Split Sections: Left Updates (25%), Center AI (50%), Right Trending (25%)
// Also renders Review (Horizontal 4-card grid below)
function renderSplitSections() {
  // 1. Column 1: Left Updates (3 small posts, unique)
  if (newUpdatesContent) {
    const sideNew1 = ARTICLES.find(a => a.id === 3); // ChatGPT vs Claude vs Gemini
    const sideNew2 = ARTICLES.find(a => a.id === 4); // LLM
    const sideNew3 = ARTICLES.find(a => a.id === 7); // Keychron Q1 Pro
    
    newUpdatesContent.innerHTML = [sideNew1, sideNew2, sideNew3].map(post => `
      <div class="post-card-mini">
        <img class="post-card-mini-img" src="${post.image}" alt="${post.title}">
        <div class="post-card-mini-info">
          <span class="post-card-mini-tag">${post.category}</span>
          <h4 class="post-card-mini-title"><a href="#">${post.title}</a></h4>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${post.author} &bull; ${post.date}</span>
        </div>
      </div>
    `).join('');
  }

  // 2. Column 2: Center AI Highlights (1 Big featured post, 2 sub cards underneath, unique)
  if (colCenterAi) {
    const mainNew = ARTICLES.find(a => a.id === 5); // Chip war
    const subNewLeft = ARTICLES.find(a => a.id === 6); // China AI
    const subNewRight = ARTICLES.find(a => a.id === 8); // A24 Google AI
    
    colCenterAi.innerHTML = `
      <!-- Main Center Post -->
      <div class="center-main-post">
        <span class="center-main-tag">${mainNew.category}</span>
        <h4 class="center-main-title"><a href="#">${mainNew.title}</a></h4>
        <div class="post-meta" style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.2rem;">
          <span>${mainNew.author} ${mainNew.authorTag} &bull; ${mainNew.date}</span>
        </div>
        <div class="center-main-img-wrapper">
          <img src="${mainNew.image}" alt="${mainNew.title}">
        </div>
      </div>

      <!-- Sub grid (2 cards side by side) -->
      <div class="center-sub-row">
        <!-- Sub Left -->
        <div class="center-sub-card">
          <span class="post-card-mini-tag" style="font-size: 0.65rem;">${subNewLeft.category}</span>
          <h5 class="center-sub-title"><a href="#">${subNewLeft.title}</a></h5>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${subNewLeft.author}</span>
        </div>

        <!-- Sub Right -->
        <div class="center-sub-card">
          <span class="post-card-mini-tag" style="font-size: 0.65rem;">${subNewRight.category}</span>
          <h5 class="center-sub-title"><a href="#">${subNewRight.title}</a></h5>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${subNewRight.author}</span>
        </div>
      </div>
    `;
  }

  // 3. Column 3: Right Trending (5 text posts stacked, unique)
  if (trendingContent) {
    const trendPosts = [
      ARTICLES.find(a => a.id === 9), // Meta Pauses
      ARTICLES.find(a => a.id === 10), // US Govt
      ARTICLES.find(a => a.id === 11), // Digital retail
      ARTICLES.find(a => a.id === 12), // Cloud startup
      ARTICLES.find(a => a.id === 14)  // VS Code
    ].filter(Boolean);

    trendingContent.innerHTML = trendPosts.map(post => `
      <div class="trending-post-card">
        <h4 class="trending-post-title"><a href="#">${post.title}</a></h4>
        <span style="font-size: 0.7rem; color: var(--text-muted);">${post.author} ${post.authorTag} &bull; ${post.date}</span>
      </div>
    `).join('');
  }

  // 4. Review Row (4 cards horizontally below, unique)
  if (reviewsContent) {
    // Select Review posts, fallback to others if needed to fill 4 cards
    const reviewPosts = ARTICLES.filter(a => a.category === "Review");
    const fallbackPosts = ARTICLES.filter(a => a.category !== "Review");
    const revList = [...reviewPosts, ...fallbackPosts].slice(0, 4);

    reviewsContent.innerHTML = revList.map(post => `
      <div class="review-post-card">
        <div class="review-post-img-wrapper">
          <img src="${post.image}" alt="${post.title}">
        </div>
        <span class="post-card-mini-tag" style="font-size: 0.65rem; margin-top: 0.2rem;">${post.category}</span>
        <h4 class="review-post-title"><a href="#">${post.title}</a></h4>
        <span style="font-size: 0.7rem; color: var(--text-muted);">${post.author} &bull; ${post.date}</span>
      </div>
    `).join('');
  }
}

// Render Category Columns (8 columns with filtered matches)
function renderCategoryColumns() {
  if (!categoryColumnsContainer) return;

  categoryColumnsContainer.innerHTML = CATEGORIES.map((cat, colIdx) => {
    // Filter matching articles for this category, fallback if not enough
    const catArticles = ARTICLES.filter(a => a.category === cat);
    const items = [];
    for (let i = 0; i < 4; i++) {
      items.push(catArticles[i % catArticles.length] || ARTICLES[(colIdx * 2 + i) % ARTICLES.length]);
    }

    return `
      <div class="category-column">
        <div class="category-header-wrapper">
          <span class="category-title-header">${cat}</span>
        </div>
        <div class="split-col" style="gap: 1rem;">
          ${items.map((post, idx) => `
            <div class="cat-post-card ${idx === 0 ? 'has-image' : ''}">
              <div class="cat-post-img-wrapper">
                <img src="${post.image}" alt="${post.title}">
              </div>
              <h4 class="cat-post-title"><a href="#">${post.title}</a></h4>
              <span style="font-size: 0.7rem; color: var(--text-muted);">${post.date}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// Setup Interactive Elements & Event Listeners
function setupEventListeners() {
  // Theme toggle click
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }

  // Mega Menu open/close listeners
  if (menuToggleBtn && megaMenu) {
    menuToggleBtn.addEventListener("click", () => {
      megaMenu.classList.add("active");
    });
  }

  if (megaMenuCloseBtn && megaMenu) {
    megaMenuCloseBtn.addEventListener("click", () => {
      megaMenu.classList.remove("active");
    });
  }

  if (megaMenuBackdrop && megaMenu) {
    megaMenuBackdrop.addEventListener("click", () => {
      megaMenu.classList.remove("active");
    });
  }

  // Close Mega Menu on clicking links
  const megaLinks = megaMenu?.querySelectorAll("a");
  megaLinks?.forEach(link => {
    link.addEventListener("click", () => {
      megaMenu.classList.remove("active");
    });
  });

  // Search trigger overlay open
  if (searchTrigger && searchOverlay) {
    searchTrigger.addEventListener("click", () => {
      searchOverlay.classList.add("active");
      setTimeout(() => searchInput?.focus(), 100);
    });
  }

  // Search close click
  if (searchCloseBtn && searchOverlay) {
    searchCloseBtn.addEventListener("click", () => {
      searchOverlay.classList.remove("active");
      if (searchInput) searchInput.value = "";
    });
  }

  // Search overlay click outside close
  if (searchOverlay) {
    searchOverlay.addEventListener("click", (e) => {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove("active");
        if (searchInput) searchInput.value = "";
      }
    });
  }

  // Refresh New Updates spinner effect
  if (refreshNewUpdatesBtn) {
    refreshNewUpdatesBtn.addEventListener("click", () => {
      refreshNewUpdatesBtn.classList.add("spinning");
      
      setTimeout(() => {
        refreshNewUpdatesBtn.classList.remove("spinning");
        
        const shuffled = [...ARTICLES].filter(a => a.id !== 5 && a.id !== 6).sort(() => 0.5 - Math.random());
        const sideNew1 = shuffled[0];
        const sideNew2 = shuffled[1];
        const sideNew3 = shuffled[2];

        if (newUpdatesContent) {
          newUpdatesContent.innerHTML = [sideNew1, sideNew2, sideNew3].map(post => `
            <div class="post-card-mini">
              <img class="post-card-mini-img" src="${post.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=250'}" alt="${post.title}">
              <div class="post-card-mini-info">
                <span class="post-card-mini-tag">${post.category}</span>
                <h4 class="post-card-mini-title"><a href="#">${post.title}</a></h4>
                <span style="font-size: 0.7rem; color: var(--text-muted);">${post.author} &bull; ${post.date}</span>
              </div>
            </div>
          `).join('');
        }
      }, 600);
    });
  }
}
