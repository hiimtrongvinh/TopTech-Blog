import { getAssetUrl } from '../utils.js';

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
    // Paragraph gaps
    .replace(/\n\n/g, '</p><p>');

  // Wrap lists
  html = html.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>');
  
  return `<p>${html}</p>`;
}

export function renderPostPage(container, postId, articles) {
  // Find target article
  const articleId = parseInt(postId, 10);
  const article = articles.find(a => a.id === articleId) || articles[0];

  // Increment view count dynamically for premium feeling
  article.views += 1;
  localStorage.setItem("toptech_articles", JSON.stringify(articles));

  // Filter related articles (same category, excluding current post)
  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 4);

  // Mock comments database for this post if not already initialized
  if (!article.commentsList) {
    article.commentsList = [
      {
        id: 1,
        author: 'Nguyễn Văn Hùng',
        date: '2 ngày trước',
        content: 'Bài viết rất chi tiết và dễ hiểu! Tôi đang tìm hiểu về vấn đề này và thấy thông tin cực kỳ hữu ích cho công việc thực tế của mình.',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=80&h=80'
      },
      {
        id: 2,
        author: 'Lê Minh Hạnh',
        date: '1 ngày trước',
        content: 'TopTech chia sẻ kiến thức chuẩn quá, thiết kế giao diện bài viết đọc rất sướng mắt. Mong nhóm tác giả ra thêm nhiều bài viết sâu hơn nữa!',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80&h=80'
      }
    ];
  }

  // Render Post Layout Structure
  container.innerHTML = `
    <!-- Reading Progress Bar -->
    <div class="reading-progress-container">
      <div class="reading-progress-bar" id="reading-bar"></div>
    </div>

    <div class="container post-page-container section-padding">
      <div class="post-layout-grid">
        <!-- Main Column (75%) -->
        <main class="post-main-content">
          <!-- Category & Metadata -->
          <div class="post-detail-header">
            <a href="#/chuyen-muc/${article.category}" class="post-detail-category">${article.category}</a>
            <h1 class="post-detail-title">${article.title}</h1>
            
            <div class="post-meta" style="font-size: 0.9rem; color: var(--text-muted); border-bottom: 1px solid var(--border-color); padding-bottom: 1.5rem; margin-bottom: 2rem; display: flex; align-items: center; flex-wrap: wrap; gap: 0.8rem;">
              <div class="post-author" style="display: flex; align-items: center; gap: 0.3rem;">
                <span>Tác giả: <strong>${article.author}</strong> ${article.authorTag || ''}</span>
              </div>
              <span>&bull;&nbsp; ${article.date}</span>
              <span>&bull;&nbsp; ${article.readTime}</span>
              
              ${sessionStorage.getItem("toptech_admin_logged_in") === "true" ? `
                <span>&bull;</span>
                <button id="quick-edit-post-btn" style="background-color: var(--primary-color); color: #fff; border: 1px solid var(--primary-color); border-radius: 4px; padding: 0.2rem 0.5rem; font-size: 0.75rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 0.2rem;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                  Sửa bài
                </button>
              ` : ''}

              <span style="margin-left: auto; display: flex; align-items: center; gap: 0.3rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> ${article.views} lượt xem
              </span>
            </div>
          </div>

          <!-- Feature Image -->
          <div class="post-detail-img-wrapper">
            <img src="${getAssetUrl(article.image)}" alt="${article.title}">
          </div>

          <!-- Rich Text Content Body -->
          <div class="post-detail-body">
            ${article.content ? `
              <p class="post-lead">${article.description || ''}</p>
              ${compileMarkdown(article.content)}
            ` : `
              <p class="post-lead">${article.description || 'Bài viết phân tích chuyên sâu về xu hướng công nghệ mới, hướng dẫn thực hành và đưa ra các giải pháp chuyển đổi số tối ưu hiệu suất cho doanh nghiệp.'}</p>
              
              <h2>1. Bối cảnh và Thách thức hiện tại</h2>
              <p>Trong kỷ nguyên số hóa bùng nổ, việc áp dụng công nghệ không còn là sự lựa chọn mà đã trở thành yếu tố sống còn đối với mọi cá nhân và doanh nghiệp. Sự ra đời của các nền tảng trí tuệ nhân tạo (AI) thế hệ mới, giải pháp điện toán đám mây và hệ thống dữ liệu lớn (Big Data) đòi hỏi chúng ta phải có một tư duy thích ứng nhanh chóng và liên tục cập nhật kiến thức.</p>
              
              <blockquote class="post-blockquote">
                "Công nghệ không làm thay đổi thế giới một cách trực tiếp, nó thay đổi cách chúng ta tư duy và hành động để cùng nhau kiến tạo nên tương lai bền vững."
              </blockquote>

              <p>Nhiều tổ chức vẫn đang gặp khó khăn trong việc chuyển đổi từ quy trình làm việc thủ công sang tự động hóa do thiếu hụt nhân sự có trình độ chuyên môn hoặc không có một lộ trình tiếp cận khoa học. Điều này tạo ra khoảng cách lớn về năng lực cạnh tranh trên thị trường toàn cầu.</p>

              <h2>2. Giải pháp thực tiễn ứng dụng hiệu quả</h2>
              <p>Để giải quyết các thách thức trên, TopTech đề xuất một số giải pháp cốt lõi có thể triển khai ngay lập tức:</p>
              <ul>
                <li><strong>Tích hợp các công cụ AI hỗ trợ:</strong> Sử dụng chatbot thông minh và trợ lý ảo để tự động hóa quy trình chăm sóc khách hàng và tổng hợp thông tin sơ bộ.</li>
                <li><strong>Chuẩn hóa quy trình làm việc bằng phần mềm quản trị:</strong> Áp dụng các giải pháp ERP, CRM, và quản lý công cụ mã nguồn mở giúp kiểm soát tiến độ thời gian thực.</li>
                <li><strong>Đào tạo và nâng cao kỹ năng số cho nhân viên:</strong> Tổ chức các buổi workshop thực hành trực tiếp và tạo văn hóa học hỏi liên tục trong nội bộ.</li>
              </ul>

              <h2>3. Tầm nhìn và Xu hướng phát triển 2026</h2>
              <p>Nhìn về tương lai, các xu hướng công nghệ sẽ hướng tới sự cá nhân hóa cao hơn, bảo mật dữ liệu tuyệt đối nhờ công nghệ mã hóa tiên tiến và tăng cường tính bền vững, giảm thiểu năng lượng tiêu hao trong các trung tâm dữ liệu lớn.</p>
              <p>Chúng ta hãy cùng đồng hành cùng TopTech để đón đầu những làn sóng đổi mới sáng tạo, làm chủ các giải pháp công nghệ và gia tăng đột phá hiệu suất làm việc mỗi ngày.</p>
            `}
          </div>

          <!-- Comments Section -->
          <section class="post-comments-section">
            <h3 class="comments-title">Bình luận (<span id="comments-count">${article.commentsList.length}</span>)</h3>
            
            <!-- Add Comment Form -->
            <div class="add-comment-form">
              <div class="form-row">
                <input type="text" id="comment-author-name" placeholder="Tên của bạn..." required>
              </div>
              <div class="form-row">
                <textarea id="comment-text" rows="4" placeholder="Viết bình luận của bạn tại đây..." required></textarea>
              </div>
              <button class="submit-comment-btn" id="submit-comment-btn">Gửi bình luận</button>
            </div>

            <!-- Comments List -->
            <div class="comments-list" id="comments-list">
              <!-- populated dynamically -->
            </div>
          </section>
        </main>

        <!-- Sidebar Column (25%) -->
        <aside class="post-sidebar-content">
          <!-- Table of Contents (Mục lục) -->
          <div class="sidebar-widget toc-widget" id="post-toc-container" style="display: none;">
            <h4 class="widget-title" style="text-align: left; margin-bottom: 1rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem; font-size: 1.1rem;">Mục lục bài viết</h4>
            <ul class="toc-list" id="toc-list"></ul>
          </div>

          <div class="sidebar-widget">
            <h4 class="widget-title">Bài viết liên quan</h4>
            <div class="related-posts-list">
              ${relatedArticles.length > 0 ? relatedArticles.map(post => `
                <div class="related-post-card">
                  <div class="related-img-wrapper">
                    <img src="${getAssetUrl(post.image)}" alt="${post.title}">
                  </div>
                  <div class="related-post-info">
                    <h5 class="related-title"><a href="#/bai-viet/${post.id}">${post.title}</a></h5>
                    <span class="related-meta"><a href="#/chuyen-muc/${post.subcategory || post.category}" style="color: inherit; font-weight: 600;">${post.subcategory || post.category}</a> &bull; ${post.date}</span>
                  </div>
                </div>
              `).join('') : '<p style="color: var(--text-muted); font-size: 0.85rem;">Không có bài viết liên quan nào khác cùng chuyên mục.</p>'}
            </div>
          </div>

          <div class="sidebar-widget newsletter-widget">
            <h4 class="widget-title">Nhận tin công nghệ</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.5;">Đăng ký nhận bản tin công nghệ và các giải pháp số hữu ích nhất từ TopTech hàng tuần.</p>
            <input type="email" placeholder="Email của bạn..." class="widget-input" style="width:100%; box-sizing:border-box; margin-bottom: 0.8rem; padding: 0.6rem; border: 1px solid var(--border-color); border-radius: 6px;">
            <button class="view-more-btn" style="width: 100%; justify-content: center; background-color: var(--primary-color); color: #fff; border-color: var(--primary-color);">Đăng ký</button>
          </div>
        </aside>
      </div>
    </div>
  `;

  // Display Comments Function
  function displayComments() {
    const list = document.getElementById("comments-list");
    if (!list) return;

    list.innerHTML = article.commentsList.map(comment => `
      <div class="comment-item">
        <img class="comment-avatar" src="${comment.avatar}" alt="${comment.author}">
        <div class="comment-content">
          <div class="comment-header">
            <span class="comment-author">${comment.author}</span>
            <span class="comment-date">${comment.date}</span>
          </div>
          <p class="comment-text-p">${comment.content}</p>
        </div>
      </div>
    `).join('');

    // Update count in DOM
    const countSpan = document.getElementById("comments-count");
    if (countSpan) countSpan.textContent = article.commentsList.length;
  }

  // Initial comment render
  displayComments();

  // Handle Comment Submission
  const submitBtn = document.getElementById("submit-comment-btn");
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      const authorInput = document.getElementById("comment-author-name");
      const textInput = document.getElementById("comment-text");
      
      const author = authorInput?.value.trim();
      const content = textInput?.value.trim();

      if (!author || !content) {
        alert("Vui lòng điền đầy đủ Tên và Nội dung bình luận.");
        return;
      }

      // Add to mock list
      const newComment = {
        id: Date.now(),
        author: author,
        date: 'Vừa xong',
        content: content,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80&h=80' // Default random avatar
      };

      article.commentsList.unshift(newComment); // Prepend new comment
      article.comments = article.commentsList.length; // Update total comment counter in article object

      // Save updated articles list to localStorage
      localStorage.setItem("toptech_articles", JSON.stringify(articles));

      // Reset inputs
      if (authorInput) authorInput.value = "";
      if (textInput) textInput.value = "";

      // Re-display
      displayComments();
    });
  }

  // Setup Reading Progress Bar
  const handleScroll = () => {
    const readingBar = document.getElementById("reading-bar");
    if (!readingBar) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    if (docHeight > 0) {
      const scrollPercent = (scrollTop / docHeight) * 100;
      readingBar.style.width = scrollPercent + '%';
    }
  };

  // Bind scrolling event listener
  window.addEventListener('scroll', handleScroll);
  
  // Clean up scrolling listener when unloading post page
  // We can attach a cleanup function to the container object
  container.cleanup = () => {
    window.removeEventListener('scroll', handleScroll);
  };

  // Generate Table of Contents (Mục lục) dynamically if headings exist
  const headings = container.querySelectorAll(".post-detail-body h2");
  const tocContainer = document.getElementById("post-toc-container");
  const tocList = document.getElementById("toc-list");

  if (headings.length > 0 && tocContainer && tocList) {
    tocContainer.style.display = "block";
    
    headings.forEach((h, idx) => {
      const id = `toc-section-${idx}`;
      h.id = id;
    });
    
    tocList.innerHTML = Array.from(headings).map((h, idx) => {
      const text = h.textContent.trim();
      return `<li><a href="javascript:void(0)" data-target="toc-section-${idx}" class="toc-link">${text}</a></li>`;
    }).join('');
    
    const tocLinks = tocList.querySelectorAll(".toc-link");
    tocLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.dataset.target;
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const headerOffset = 100;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          
          tocLinks.forEach(l => l.classList.remove("active"));
          link.classList.add("active");
        }
      });
    });

    // Scroll Spy for highlighting active heading
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      let activeIndex = -1;

      headings.forEach((h, idx) => {
        if (h.offsetTop - 110 <= scrollPos) {
          activeIndex = idx;
        }
      });

      tocLinks.forEach((link, idx) => {
        if (idx === activeIndex) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    };

    window.addEventListener('scroll', handleScrollSpy);
    
    // Extend cleanup function to also remove scroll spy
    const originalCleanup = container.cleanup;
    container.cleanup = () => {
      if (originalCleanup) originalCleanup();
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }

  // Handle Quick Edit shortcut click
  const quickEditBtn = document.getElementById("quick-edit-post-btn");
  quickEditBtn?.addEventListener("click", () => {
    sessionStorage.setItem("toptech_editing_article_id", article.id);
    window.location.hash = "#/admin";
  });
}
