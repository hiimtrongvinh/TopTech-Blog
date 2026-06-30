import { renderHeader, initHeaderEvents, updateActiveNavLink } from './src/components/Header.js';
import { renderFooter } from './src/components/Footer.js';
import { renderHomePage } from './src/components/HomePage.js';
import { renderCategoryPage } from './src/components/CategoryPage.js';
import { renderPostPage } from './src/components/PostPage.js';
import { renderPublishPage } from './src/components/PublishPage.js';

// Central Database of Articles (Initial Seed Data)
const DEFAULT_ARTICLES = [
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

// Load articles from localStorage or fallback to default
export let ARTICLES = [];
export function loadArticles() {
  const stored = localStorage.getItem("toptech_articles");
  if (stored) {
    ARTICLES = JSON.parse(stored);
  } else {
    ARTICLES = DEFAULT_ARTICLES;
    localStorage.setItem("toptech_articles", JSON.stringify(ARTICLES));
  }
}
loadArticles();

export const CATEGORIES = [
  "Tin công nghệ",
  "AI",
  "Chuyển đổi số",
  "Review",
  "Phần mềm",
  "IT",
  "Giải pháp công nghệ",
  "Casestudy"
];

// Single Page Application Routing Control
function router() {
  loadArticles(); // Always load fresh articles list on navigation
  const contentContainer = document.getElementById("app-content");
  if (!contentContainer) return;

  // Run cleanup function if defined by previous page (e.g. scroll listeners on PostPage)
  if (contentContainer.cleanup) {
    contentContainer.cleanup();
    contentContainer.cleanup = null;
  }

  const hash = window.location.hash || "#/";

  // Update Navigation Active state
  updateActiveNavLink(hash);

  // Check section link scroll redirection (e.g. #/ #tac-gia)
  if (hash.startsWith("#/ #")) {
    const sectionId = hash.split("#")[2]; // e.g. "tac-gia"
    renderHomePage(contentContainer, ARTICLES, CATEGORIES);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    return;
  }

  // Parse Routes
  if (hash === "#/" || hash === "") {
    renderHomePage(contentContainer, ARTICLES, CATEGORIES);
  } else if (hash.startsWith("#/chuyen-muc/")) {
    const categoryName = hash.replace("#/chuyen-muc/", "");
    renderCategoryPage(contentContainer, categoryName, ARTICLES, false);
  } else if (hash.startsWith("#/tim-kiem/")) {
    const searchQuery = hash.replace("#/tim-kiem/", "");
    renderCategoryPage(contentContainer, searchQuery, ARTICLES, true);
  } else if (hash.startsWith("#/bai-viet/")) {
    const postId = hash.replace("#/bai-viet/", "");
    renderPostPage(contentContainer, postId, ARTICLES);
  } else if (hash === "#/admin" || hash.startsWith("#/admin")) {
    renderPublishPage(contentContainer, ARTICLES, CATEGORIES, () => {
      loadArticles();
    });
  } else {
    // 404 Fallback, redirect to home page
    window.location.hash = "#/";
  }

  // Scroll to top on standard navigation
  if (!hash.startsWith("#/ #")) {
    window.scrollTo(0, 0);
  }
}

// Initialize Application Layout & Listeners
document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("app-header");
  const footerContainer = document.getElementById("app-footer");

  if (headerContainer) renderHeader(headerContainer);
  if (footerContainer) renderFooter(footerContainer);

  // Bind Search query callback
  initHeaderEvents((searchQuery) => {
    window.location.hash = `#/tim-kiem/${encodeURIComponent(searchQuery)}`;
  });

  // Listen to hash changes for routing
  window.addEventListener("hashchange", router);
  
  // Initial page load trigger
  router();
});
