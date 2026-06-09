/* PDFWise v2 — Shared JS Utilities */

// ── Drop Zone ────────────────────────────────────────────────────────────────
window.setupDropZone = function(zoneId, inputId, onFiles, accept = '.pdf', multiple = false) {
  const zone  = document.getElementById(zoneId);
  const input = document.getElementById(inputId);
  if (!zone || !input) return;

  input.accept   = accept;
  input.multiple = multiple;

  zone.addEventListener('click', e => {
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT') input.click();
    else if (e.target.tagName === 'BUTTON') input.click();
  });
  input.addEventListener('change', () => { if (input.files.length) onFiles(Array.from(input.files)); });

  zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('dragover'); });
  zone.addEventListener('dragleave', ()=> zone.classList.remove('dragover'));
  zone.addEventListener('drop', e => {
    e.preventDefault(); zone.classList.remove('dragover');
    const files = Array.from(e.dataTransfer.files).filter(f =>
      accept === '*' || accept.split(',').some(ext => f.name.toLowerCase().endsWith(ext.trim()))
    );
    if (files.length) onFiles(files);
  });
};

// ── Library Loaders ──────────────────────────────────────────────────────────
window.loadPdfLib = function() {
  return new Promise((resolve, reject) => {
    if (window.PDFLib) { resolve(window.PDFLib); return; }
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js';
    s.onload  = () => resolve(window.PDFLib);
    s.onerror = () => reject(new Error('Failed to load pdf-lib'));
    document.head.appendChild(s);
  });
};

window.loadPdfJs = function() {
  return new Promise((resolve, reject) => {
    if (window.pdfjsLib) { resolve(window.pdfjsLib); return; }
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    s.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc =
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      resolve(window.pdfjsLib);
    };
    s.onerror = () => reject(new Error('Failed to load pdf.js'));
    document.head.appendChild(s);
  });
};

window.loadJSZip = function() {
  return new Promise((resolve, reject) => {
    if (window.JSZip) { resolve(window.JSZip); return; }
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
    s.onload  = () => resolve(window.JSZip);
    s.onerror = () => reject(new Error('Failed to load JSZip'));
    document.head.appendChild(s);
  });
};

window.loadMammoth = function() {
  return new Promise((resolve, reject) => {
    if (window.mammoth) { resolve(window.mammoth); return; }
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js';
    s.onload  = () => resolve(window.mammoth);
    s.onerror = () => reject(new Error('Failed to load mammoth'));
    document.head.appendChild(s);
  });
};

// ── Progress Bar ─────────────────────────────────────────────────────────────
window.animateProgress = function(id, duration = 1800) {
  const el = document.getElementById(id);
  if (!el) return null;
  let w = 0;
  const target = 88;
  const interval = setInterval(() => {
    w = Math.min(w + (target / (duration / 50)), target);
    el.style.width = w + '%';
    if (w >= target) clearInterval(interval);
  }, 50);
  return interval;
};

window.completeProgress = function(id) {
  const el = document.getElementById(id);
  if (el) { el.style.width = '100%'; el.style.transition = 'width 0.3s ease'; }
};

// ── File Helpers ─────────────────────────────────────────────────────────────
window.downloadBlob = function(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a   = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
};

window.formatBytes = function(bytes, decimals = 1) {
  if (!bytes) return '0 B';
  const k = 1024, sizes = ['B','KB','MB','GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
};

// ── Alert ─────────────────────────────────────────────────────────────────────
window.showAlert = function(id, msg, type = 'error') {
  const el = document.getElementById(id);
  if (!el) return;
  el.className = 'alert show alert-' + (type === 'error' ? 'error' : type === 'success' ? 'success' : 'info');
  el.textContent = msg;
  if (type !== 'error') setTimeout(() => el.classList.remove('show'), 5000);
};

// ── Search filter ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('toolSearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase().trim();
      document.querySelectorAll('.tool-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = !q || text.includes(q) ? '' : 'none';
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Cookie consent
  const cookieBar = document.getElementById('cookieBar');
  if (cookieBar) {
    if (!localStorage.getItem('pw_cookie')) cookieBar.style.display = 'flex';
    document.getElementById('cookieAccept')?.addEventListener('click', () => {
      localStorage.setItem('pw_cookie', '1');
      cookieBar.style.display = 'none';
    });
    document.getElementById('cookieDecline')?.addEventListener('click', () => {
      localStorage.setItem('pw_cookie', '0');
      cookieBar.style.display = 'none';
    });
  }
});
