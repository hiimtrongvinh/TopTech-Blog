import { getAssetUrl } from '../utils.js';

const AUTHOR_DETAILS = {
  "Phương Linh": {
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    role: "Content Writer",
    desc: "Ms. Phương Linh là cây bút cốt cán tại TopTech chuyên viết về Trí tuệ nhân tạo (AI), các dòng máy tính xách tay cấu hình cao cho lập trình và tin tức công nghệ nóng hổi nhất thế giới."
  },
  "Ngọc Thanh": {
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    role: "Content Writer",
    desc: "Ms. Ngọc Thanh chuyên phân tích và đánh giá chuyên sâu các thiết bị di động, smartphone thông minh, xe điện và các xu hướng phần cứng mới nhất."
  },
  "Lê Mạnh": {
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    role: "CEO & Founder",
    desc: "Mr. Lê Mạnh là nhà sáng lập kiêm Giám đốc điều hành của TopTech. Anh chia sẻ những định hướng phát triển chiến lược công nghệ và chuyển đổi số cho doanh nghiệp."
  },
  "Kim Phượng": {
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    role: "Content Writer",
    desc: "Ms. Kim Phượng đam mê nghiên cứu ứng dụng phần mềm văn phòng, công cụ năng suất hỗ trợ công việc và các casestudy chuyển đổi số thành công thực tế."
  },
  "Trà My": {
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    role: "Software Developer",
    desc: "Ms. Trà My là kỹ sư phát triển phần mềm chuyên nghiệp. Cô chia sẻ các bài viết kỹ thuật sâu về cơ sở dữ liệu, Docker, quy trình CI/CD và bảo mật hệ thống."
  },
  "Khánh Nam": {
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    role: "Tech Lead",
    desc: "Mr. Khánh Nam có 8 năm kinh nghiệm trong lĩnh vực phát triển Frontend và các mô hình ngôn ngữ lớn (LLM). Anh viết về kinh nghiệm tối ưu hóa mã nguồn và công cụ IDE."
  },
  "Quốc Anh": {
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    role: "Hardware Expert",
    desc: "Mr. Quốc Anh là chuyên gia review phần cứng cao cấp và các dòng bàn phím cơ. Anh chia sẻ những cảm nhận chân thực sau thời gian dài sử dụng thiết bị."
  },
  "Minh Tâm": {
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
    role: "Cloud Specialist",
    desc: "Ms. Minh Tâm là chuyên viên điện toán đám mây. Cô tập trung phân tích bài viết về giải pháp hạ tầng AWS, Azure, và các bước chuyển đổi số tối ưu chi phí cho startup."
  },
  "Hoàng Long": {
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150",
    role: "Solutions Architect",
    desc: "Mr. Hoàng Long chuyên khảo sát thực tế và phân tích casestudy thành công hay thất bại của các tập đoàn công nghệ lớn khi xây dựng hệ thống dữ liệu khổng lồ."
  }
};

export function renderAuthorsListPage(container, articles) {
  // Find all unique authors dynamically
  const uniqueAuthors = Array.from(new Set(articles.map(a => a.author).filter(Boolean)));
  
  const gridHtml = uniqueAuthors.map(authorName => {
    const details = AUTHOR_DETAILS[authorName] || {
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80&h=80",
      role: "Cộng tác viên",
      desc: "Tác giả chia sẻ các kiến thức công nghệ hữu ích tại TopTech."
    };
    const count = articles.filter(a => a.author === authorName).length;
    
    return `
      <a href="#/tac-gia/${encodeURIComponent(authorName)}" class="author-list-card">
        <div class="author-list-avatar-wrapper">
          <img class="author-list-avatar" src="${details.avatar}" alt="${authorName}">
        </div>
        <h3 class="author-list-name">${authorName}</h3>
        <span class="author-list-role">${details.role}</span>
        <span class="author-list-count-badge">${count} bài viết</span>
      </a>
    `;
  }).join('');

  container.innerHTML = `
    <div class="category-page-header" style="padding: 2.5rem 0; background: var(--bg-surface); border-bottom: 1px solid var(--border-color); text-align: center;">
      <div class="container">
        <h1 class="category-page-title" style="font-size: 2.5rem; font-weight: 900; margin: 0; text-transform: uppercase; color: var(--text-primary);">Đội ngũ tác giả</h1>
      </div>
    </div>
    
    <div class="container section-padding">
      <div class="authors-list-grid">
        ${gridHtml}
      </div>
    </div>
  `;
}

export function renderAuthorPage(container, authorName, articles) {
  const details = AUTHOR_DETAILS[authorName] || {
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80&h=80",
    role: "Cộng tác viên",
    desc: "Tác giả chia sẻ các bài viết kiến thức hữu ích tại TopTech."
  };
  
  const authorArticles = articles.filter(a => a.author === authorName);
  
  const gridHtml = authorArticles.length === 0
    ? `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--bg-surface); border: 1px dashed var(--border-color); border-radius: 12px;">
        <p style="color: var(--text-muted); font-size: 0.95rem;">Tác giả này chưa đăng tải bài viết nào.</p>
      </div>
    `
    : authorArticles.map(post => `
      <article class="cat-article-card" style="margin-bottom: 2rem;">
        <div class="cat-card-img-wrapper">
          <img src="${getAssetUrl(post.image)}" alt="${post.title}">
          <a href="#/chuyen-muc/${post.subcategory || post.category}" class="cat-card-category">${post.subcategory || post.category}</a>
        </div>
        <div class="cat-card-content">
          <h3 class="cat-card-title"><a href="#/bai-viet/${post.id}">${post.title}</a></h3>
          <p class="cat-card-description">${post.description || 'Chưa có mô tả chi tiết cho bài viết này. Nhấp vào để đọc bài viết...'}</p>
          
          <div class="post-meta" style="color: var(--text-muted); font-size: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 1rem; margin-top: auto; width: 100%; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap;">
            <div class="meta-left" style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
              <span class="post-author-name">${post.author}</span>
              <span class="meta-dot">&bull;</span>
              <span>${post.date}</span>
            </div>
            <div class="meta-right" style="display: flex; align-items: center; gap: 0.6rem; margin-left: auto;">
              <span style="display: flex; align-items: center; gap: 0.25rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${post.views}
              </span>
              <span style="display: flex; align-items: center; gap: 0.25rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> ${post.comments}
              </span>
            </div>
          </div>
        </div>
      </article>
    `).join('');

  container.innerHTML = `
    <div class="category-page-header" style="padding: 3rem 0; background: var(--bg-surface); border-bottom: 1px solid var(--border-color);">
      <div class="container">
        <div class="author-profile-card">
          <div class="author-profile-avatar-wrapper">
            <img class="author-profile-avatar" src="${details.avatar}" alt="${authorName}">
          </div>
          <div class="author-profile-info">
            <h1>${authorName}</h1>
            <div class="author-profile-role">${details.role}</div>
            <p class="author-profile-desc">${details.desc}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="container section-padding">
      <h2 style="font-size: 1.5rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--primary-color); margin-bottom: 2rem;">Bài viết đã đăng (${authorArticles.length})</h2>
      <div class="category-articles-grid" id="author-grid">
        ${gridHtml}
      </div>
    </div>
  `;
}
