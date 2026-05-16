// Close modals on outside click
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('open');
  });
});

// Close modals on ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.open').forEach(m => m.classList.remove('open'));
  }
});

// Tab clicks (visual feedback only for demo)
document.querySelectorAll('.tabs').forEach(tabs => {
  tabs.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
      tab.classList.add('on');
    });
  });
});

// Seg buttons
document.querySelectorAll('.seg').forEach(seg => {
  seg.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      seg.querySelectorAll('button').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
    });
  });
});

// View toggle
document.querySelectorAll('.view-toggle').forEach(vt => {
  vt.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      vt.querySelectorAll('button').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
    });
  });
});

// Demo: confirm/reject buttons
document.querySelectorAll('.btn-mini.ok').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const row = btn.closest('tr') || btn.closest('li');
    if (row && confirm('Confirmer cette réservation ?')) {
      row.style.opacity = '0.5';
      row.style.transition = 'opacity .4s';
      setTimeout(() => alert('✓ Réservation confirmée (démo)'), 100);
    }
  });
});

document.querySelectorAll('.btn-mini.no').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const row = btn.closest('tr') || btn.closest('li');
    if (row && confirm('Refuser cette réservation ?')) {
      row.style.opacity = '0.5';
      row.style.transition = 'opacity .4s';
      setTimeout(() => alert('✕ Réservation refusée (démo)'), 100);
    }
  });
});
