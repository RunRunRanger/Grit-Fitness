document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('content');
  const dateEl = document.getElementById('date');

  const data = JSON.parse(localStorage.getItem('dailyWorkout') || '{}');

  const today = new Date().toISOString().split('T')[0];
  const displayDate = data.date || today;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateEl.textContent = new Date(displayDate).toLocaleDateString(undefined, options);

  if (!data.main && !data.warmup && !data.cooldown) {
    container.innerHTML = '<div class="section"><h2>No workout set for today</h2></div>';
    return;
  }

  let html = '';

  if (data.warmup) {
    html += `<div class="section"><h2>Warm-up</h2><pre>${data.warmup}</pre></div>`;
  }
  if (data.main) {
    html += `<div class="section"><h2>Main Workout</h2><pre>${data.main}</pre></div>`;
  }
  if (data.cooldown) {
    html += `<div class="section"><h2>Cool-down</h2><pre>${data.cooldown}</pre></div>`;
  }
  if (data.notes) {
    html += `<div class="section"><h2>Notes</h2><pre>${data.notes}</pre></div>`;
  }

  container.innerHTML = html;
});
