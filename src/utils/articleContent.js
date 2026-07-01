export const CAPTION_PLACEHOLDER = 'Nhập chú thích ảnh...';

function figureToolbarHtml() {
  return `
    <div class="post-figure-toolbar">
      <button type="button" class="post-figure-delete" title="Xóa ảnh">×</button>
    </div>
  `;
}

export function createFigureHtml(src, caption = '', { inRow = false } = {}) {
  const safeCaption = caption === 'Chú thích ảnh' ? '' : caption;
  return `
    <figure class="post-inline-figure" contenteditable="false">
      <div class="post-figure-media">
        <img src="${src}" alt="${safeCaption || 'Ảnh'}" draggable="false">
      </div>
      <div class="post-figcaption-zone" contenteditable="true" data-placeholder="${CAPTION_PLACEHOLDER}">${safeCaption}</div>
    </figure>
  `;
}

export function createEmptyImageRowHtml() {
  return `
    <div class="post-image-row post-image-row-empty is-selected" contenteditable="false">
      <div class="post-image-row-toolbar">
        <button type="button" class="post-image-row-delete-btn" title="Xóa nhóm ảnh">Xóa nhóm</button>
      </div>
      <div class="post-image-row-items"></div>
      <p class="post-image-row-hint">Nhóm ảnh trống — bấm chọn nhóm này, sau đó dán ảnh (Ctrl+V) hoặc nhấn + Thêm ảnh</p>
      <button type="button" class="post-image-row-add-btn" title="Thêm ảnh vào hàng">+ Thêm ảnh</button>
    </div>
  `;
}

export function createImageRowHtml(sources) {
  const items = sources.map(src => createFigureHtml(src, '', { inRow: true }).trim()).join('');
  return `
    <div class="post-image-row" contenteditable="false">
      <div class="post-image-row-toolbar">
        <button type="button" class="post-image-row-delete-btn" title="Xóa nhóm ảnh">Xóa nhóm</button>
      </div>
      <div class="post-image-row-items">${items}</div>
      <button type="button" class="post-image-row-add-btn" title="Thêm ảnh vào hàng">+ Thêm ảnh</button>
    </div>
  `;
}

export function getClipboardImageFiles(clipboardData) {
  const files = [];
  if (!clipboardData?.items) return files;
  for (let i = 0; i < clipboardData.items.length; i++) {
    if (clipboardData.items[i].type.indexOf('image') !== -1) {
      const file = clipboardData.items[i].getAsFile();
      if (file) files.push(file);
    }
  }
  return files;
}

export function createTableHtml(rows = 3, cols = 3) {
  const headerCells = Array.from({ length: cols }, (_, i) => `<th>Tiêu đề ${i + 1}</th>`).join('');
  const bodyRows = Array.from({ length: rows }, (_, r) =>
    `<tr>${Array.from({ length: cols }, (_, c) => `<td>Nội dung ${r * cols + c + 1}</td>`).join('')}</tr>`
  ).join('');
  return `
    <div class="post-table-block" contenteditable="false">
      <div class="post-table-block-toolbar">
        <button type="button" class="post-table-delete-btn" title="Xóa bảng">Xóa bảng</button>
      </div>
      <div class="table-responsive">
        <table class="post-detail-table" contenteditable="true">
          <thead><tr>${headerCells}</tr></thead>
          <tbody>${bodyRows}</tbody>
        </table>
      </div>
    </div>
  `;
}

export function createBlockquoteHtml(text = '') {
  return `<blockquote class="post-blockquote">${text || 'Nội dung trích dẫn...'}</blockquote>`;
}

export function insertHtmlAtCursor(editor, html) {
  if (!editor) return;
  editor.focus();
  const trailing = '<p><br></p>';
  document.execCommand('insertHTML', false, html + trailing);
  editor.dispatchEvent(new Event('input'));
}

export function cleanPastedHtml(html) {
  const div = document.createElement('div');
  div.innerHTML = html;

  div.querySelectorAll('*').forEach(el => {
    if (el.style) {
      el.style.removeProperty('font-size');
      el.style.removeProperty('font-family');
      el.style.removeProperty('line-height');
    }
    if (el.getAttribute('style') === '') el.removeAttribute('style');
  });

  div.querySelectorAll('img').forEach(img => {
    const src = img.getAttribute('src');
    if (!src) { img.remove(); return; }
    const alt = img.getAttribute('alt') || '';
    const wrapper = document.createElement('div');
    wrapper.innerHTML = createFigureHtml(src, alt);
    img.replaceWith(wrapper.firstElementChild);
  });

  div.querySelectorAll('blockquote').forEach(bq => bq.classList.add('post-blockquote'));

  div.querySelectorAll('table').forEach(table => {
    if (table.closest('.post-table-block')) return;
    table.classList.add('post-detail-table');
    const block = document.createElement('div');
    block.className = 'post-table-block';
    block.contentEditable = 'false';
    const responsive = document.createElement('div');
    responsive.className = 'table-responsive';
    table.parentNode.insertBefore(block, table);
    responsive.appendChild(table);
    block.appendChild(responsive);
  });

  return div.innerHTML;
}

export function migrateArticleContent(container, { isEditor = false } = {}) {
  if (!container) return;

  container.querySelectorAll('figure.post-inline-figure').forEach(fig => {
    if (isEditor) fig.contentEditable = 'false';
    else fig.removeAttribute('contenteditable');

    const img = fig.querySelector('img');
    if (img && !fig.querySelector('.post-figure-media')) {
      const media = document.createElement('div');
      media.className = 'post-figure-media';
      img.parentNode.insertBefore(media, img);
      media.appendChild(img);
    }

    const oldCap = fig.querySelector('figcaption.post-figcaption');
    if (oldCap && !fig.querySelector('.post-figcaption-zone')) {
      let text = oldCap.textContent.trim();
      if (text === 'Chú thích ảnh') text = '';
      const zone = document.createElement('div');
      zone.className = 'post-figcaption-zone';
      if (isEditor) zone.contentEditable = 'true';
      zone.dataset.placeholder = CAPTION_PLACEHOLDER;
      zone.textContent = text;
      oldCap.replaceWith(zone);
    }

    const zone = fig.querySelector('.post-figcaption-zone');
    if (zone) {
      if (isEditor) {
        zone.contentEditable = 'true';
      } else {
        zone.removeAttribute('contenteditable');
        const text = zone.textContent.trim();
        if (!text || text === 'Chú thích ảnh') {
          zone.remove();
          const media = fig.querySelector('.post-figure-media');
          if (media) {
            media.style.borderRadius = '12px';
            media.style.borderBottom = '1px solid var(--border-color)';
          }
        }
      }
    } else if (isEditor) {
      const newZone = document.createElement('div');
      newZone.className = 'post-figcaption-zone';
      newZone.contentEditable = 'true';
      newZone.dataset.placeholder = CAPTION_PLACEHOLDER;
      fig.appendChild(newZone);
    }

    if (isEditor) {
      fig.setAttribute('draggable', fig.parentNode?.classList.contains('post-image-row-items') ? 'true' : 'false');
      if (!fig.querySelector('.post-figure-toolbar')) {
        const toolbar = document.createElement('div');
        toolbar.innerHTML = figureToolbarHtml();
        fig.insertBefore(toolbar.firstElementChild, fig.firstChild);
      }
    }
  });

  container.querySelectorAll('table.post-detail-table').forEach(table => {
    if (!table.closest('.post-table-block')) {
      const block = document.createElement('div');
      block.className = 'post-table-block';
      if (isEditor) block.contentEditable = 'false';
      const responsive = document.createElement('div');
      responsive.className = 'table-responsive';
      table.parentNode.insertBefore(block, table);
      responsive.appendChild(table);
      block.appendChild(responsive);
    }
    if (!isEditor) table.removeAttribute('contenteditable');
  });

  container.querySelectorAll('blockquote').forEach(bq => bq.classList.add('post-blockquote'));

  if (!isEditor) {
    container.querySelectorAll('.post-image-row-add-btn, .post-figure-toolbar, .post-image-row-hint, .post-image-row-toolbar, .post-table-block-toolbar').forEach(el => el.remove());
    container.querySelectorAll('.post-image-row, .post-table-block').forEach(el => {
      el.removeAttribute('contenteditable');
      el.classList.remove('is-selected', 'post-image-row-empty');
    });
  } else {
    container.querySelectorAll('.post-image-row').forEach(row => {
      if (!row.querySelector('.post-image-row-toolbar')) {
        const toolbar = document.createElement('div');
        toolbar.className = 'post-image-row-toolbar';
        toolbar.innerHTML = `<button type="button" class="post-image-row-delete-btn" title="Xóa nhóm ảnh">Xóa nhóm</button>`;
        row.insertBefore(toolbar, row.firstChild);
      }
    });

    container.querySelectorAll('.post-table-block').forEach(block => {
      if (!block.querySelector('.post-table-block-toolbar')) {
        const toolbar = document.createElement('div');
        toolbar.className = 'post-table-block-toolbar';
        toolbar.innerHTML = `<button type="button" class="post-table-delete-btn" title="Xóa bảng">Xóa bảng</button>`;
        block.insertBefore(toolbar, block.firstChild);
      }
    });
  }
}

export function setupEditorBlockHandlers(editor, callbacks = {}) {
  if (!editor || editor.dataset.blocksBound === 'true') return;
  editor.dataset.blocksBound = 'true';

  const { onImageRowAdd, onImageRowSelect, onChange } = callbacks;

  function selectImageRow(row) {
    editor.querySelectorAll('.post-image-row.is-selected').forEach(r => r.classList.remove('is-selected'));
    if (row) row.classList.add('is-selected');
    onImageRowSelect?.(row || null);
  }

  function updateRowEmptyState(row) {
    if (!row) return;
    const count = row.querySelectorAll('.post-inline-figure').length;
    if (count === 0) row.classList.add('post-image-row-empty');
    else row.classList.remove('post-image-row-empty');
  }

  editor.addEventListener('click', (e) => {
    const zone = e.target.closest('.post-figcaption-zone');
    if (zone) {
      e.stopPropagation();
      zone.focus();
      return;
    }

    const deleteBtn = e.target.closest('.post-figure-delete');
    if (deleteBtn) {
      e.preventDefault();
      e.stopPropagation();
      const fig = deleteBtn.closest('.post-inline-figure');
      const row = fig?.closest('.post-image-row');
      fig?.remove();
      updateRowEmptyState(row);
      onChange?.();
      return;
    }

    const rowDeleteBtn = e.target.closest('.post-image-row-delete-btn');
    if (rowDeleteBtn) {
      e.preventDefault();
      e.stopPropagation();
      if (confirm("Bạn có chắc chắn muốn xóa toàn bộ nhóm ảnh này?")) {
        const row = rowDeleteBtn.closest('.post-image-row');
        row?.remove();
        onChange?.();
      }
      return;
    }

    const tableDeleteBtn = e.target.closest('.post-table-delete-btn');
    if (tableDeleteBtn) {
      e.preventDefault();
      e.stopPropagation();
      if (confirm("Bạn có chắc chắn muốn xóa bảng này?")) {
        const block = tableDeleteBtn.closest('.post-table-block');
        block?.remove();
        onChange?.();
      }
      return;
    }

    const addBtn = e.target.closest('.post-image-row-add-btn');
    if (addBtn) {
      e.preventDefault();
      e.stopPropagation();
      const row = addBtn.closest('.post-image-row');
      selectImageRow(row);
      onImageRowAdd?.(row);
      return;
    }

    const row = e.target.closest('.post-image-row');
    if (row) {
      e.stopPropagation();
      selectImageRow(row);
      return;
    }

    selectImageRow(null);
  });

  editor.addEventListener('focusout', (e) => {
    const zone = e.target.closest?.('.post-figcaption-zone');
    if (!zone) return;
    const img = zone.closest('figure')?.querySelector('img');
    if (img) img.alt = zone.textContent.trim() || 'Ảnh';
  });

  editor.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    const zone = e.target.closest('.post-figcaption-zone');
    if (zone) {
      e.preventDefault();
      zone.blur();
      const after = zone.closest('.post-inline-figure, .post-image-row, .post-table-block');
      let next = after?.nextElementSibling;
      if (!next || !next.matches('p')) {
        const p = document.createElement('p');
        p.innerHTML = '<br>';
        after?.parentNode.insertBefore(p, after.nextSibling);
        next = p;
      }
      const range = document.createRange();
      range.selectNodeContents(next);
      range.collapse(true);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  });

  // Drag and Drop reordering within post-image-row-items
  let draggedFigure = null;

  editor.addEventListener('dragstart', (e) => {
    const fig = e.target.closest('.post-image-row-items .post-inline-figure');
    if (fig) {
      draggedFigure = fig;
      fig.classList.add('is-dragging');
      e.dataTransfer.setData('text/plain', '');
    }
  });

  editor.addEventListener('dragover', (e) => {
    if (!draggedFigure) return;
    const targetFig = e.target.closest('.post-image-row-items .post-inline-figure');
    if (targetFig && targetFig !== draggedFigure && targetFig.parentNode === draggedFigure.parentNode) {
      e.preventDefault();
      const rect = targetFig.getBoundingClientRect();
      const midpoint = rect.left + rect.width / 2;
      if (e.clientX < midpoint) {
        targetFig.classList.add('drag-over-left');
        targetFig.classList.remove('drag-over-right');
      } else {
        targetFig.classList.add('drag-over-right');
        targetFig.classList.remove('drag-over-left');
      }
    }
  });

  editor.addEventListener('dragleave', (e) => {
    const targetFig = e.target.closest('.post-image-row-items .post-inline-figure');
    if (targetFig) {
      targetFig.classList.remove('drag-over-left', 'drag-over-right');
    }
  });

  editor.addEventListener('drop', (e) => {
    if (!draggedFigure) return;
    const targetFig = e.target.closest('.post-image-row-items .post-inline-figure');
    if (targetFig && targetFig !== draggedFigure && targetFig.parentNode === draggedFigure.parentNode) {
      e.preventDefault();
      const rect = targetFig.getBoundingClientRect();
      const midpoint = rect.left + rect.width / 2;
      if (e.clientX < midpoint) {
        targetFig.parentNode.insertBefore(draggedFigure, targetFig);
      } else {
        targetFig.parentNode.insertBefore(draggedFigure, targetFig.nextElementSibling);
      }
      onChange?.();
    }
    editor.querySelectorAll('.post-inline-figure').forEach(fig => {
      fig.classList.remove('drag-over-left', 'drag-over-right', 'is-dragging');
    });
    draggedFigure = null;
  });

  editor.addEventListener('dragend', () => {
    editor.querySelectorAll('.post-inline-figure').forEach(fig => {
      fig.classList.remove('drag-over-left', 'drag-over-right', 'is-dragging');
    });
    draggedFigure = null;
  });
}

export function compileMarkdown(markdown) {
  if (!markdown) return "";
  if (markdown.trim().startsWith('<') || markdown.includes('</p>') || markdown.includes('</div>') || markdown.includes('</td>') || markdown.includes('</figure>') || markdown.includes('post-image-row') || markdown.includes('post-table-block')) {
    return markdown;
  }

  const lines = markdown.split('\n');
  let inTable = false;
  let tableHtml = "";
  let newLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('|') && line.endsWith('|')) {
      if (!inTable) {
        inTable = true;
        tableHtml = '<div class="post-table-block"><div class="table-responsive"><table class="post-detail-table">';
      }

      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      const isSeparator = cells.every(c => /^:?-+:?$/.test(c));
      if (isSeparator) continue;

      if (tableHtml.includes('<table class="post-detail-table">') && !tableHtml.includes('<thead>') && !tableHtml.includes('<tbody>')) {
        tableHtml += '<thead><tr>' + cells.map(c => `<th>${c}</th>`).join('') + '</tr></thead><tbody>';
      } else {
        tableHtml += '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
      }
    } else {
      if (inTable) {
        inTable = false;
        tableHtml += '</tbody></table></div></div>';
        newLines.push(tableHtml);
        tableHtml = "";
      }
      newLines.push(lines[i]);
    }
  }
  if (inTable) {
    tableHtml += '</tbody></table></div></div>';
    newLines.push(tableHtml);
  }
  markdown = newLines.join('\n');

  let html = markdown
    .replace(/^### (.*$)/gim, '<h3 class="post-subheading-3">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="post-subheading-2">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="post-heading-1">$1</h1>')
    .replace(/\!\[(.*?)\]\((.*?)\)/g, (_, cap, src) => createFigureHtml(src, cap).trim())
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^\> (.*$)/gim, '<blockquote class="post-blockquote">$1</blockquote>')
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/\`\`\`([\s\S]*?)\`\`\`/g, '<pre class="post-code-block"><code>$1</code></pre>')
    .replace(/\`(.*?)\`/g, '<code class="post-inline-code">$1</code>')
    .replace(/\n\n/g, '</p><p>');

  html = html.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>');
  return `<p>${html}</p>`;
}
