document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('content');
  const dateEl = document.getElementById('workout-date');

  const stored = localStorage.getItem('dailyWorkout');
  const data = stored ? JSON.parse(stored) : {};

  // Use today's date if none saved
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0]; // YYYY-MM-DD local

  const savedDateStr = data.date || todayStr;

  // Create date from YYYY-MM-DD string in LOCAL time (avoids UTC shift)
  const [year, month, day] = savedDateStr.split('-');
  const displayDate = new Date(year, month - 1, day); // month is 0-indexed

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateEl.textContent = displayDate.toLocaleDateString(undefined, options);

  if (!data.warmup && !data.main && !data.cooldown && !data.notes) {
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
