const events = [
  {
    year: "1857",
    title: "The Sepoy Mutiny",
    desc: "The Revolt of 1857 was the first major expression of resistance against British rule, involving sepoys, peasants, and local rulers. Though unsuccessful, it ended East India Company rule and led to direct Crown control.",
    quote: "We are not the subjects of the British, we are their victims.",
    link: "https://en.wikipedia.org/wiki/Indian_Rebellion_of_1857",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/The_Sepoy_revolt_at_Meerut.jpg/500px-The_Sepoy_revolt_at_Meerut.jpg"
  },
  {
    year: "1885",
    title: "Formation of INC",
    desc: "Founded in Bombay by A.O. Hume and 72 delegates, the Indian National Congress was the first all-India political platform, pushing for moderate reforms and unity among Indians.",
    quote: "The Congress is the platform of the common people.",
    link: "https://en.wikipedia.org/wiki/Indian_National_Congress",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/1st_INC1885.jpg/500px-1st_INC1885.jpg"
  },
  {
    year: "1919",
    title: "Jallianwala Bagh Massacre",
    desc: "A peaceful crowd gathered in Amritsar was fired upon by British troops under General Dyer, killing hundreds. It became a watershed moment in the freedom struggle.",
    quote: "The impossible men of India shall rise and liberate their motherland.",
    link: "https://en.wikipedia.org/wiki/Jallianwala_Bagh_massacre",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Detail_of_Mural_Depicting_1919_Amritsar_Massacre_-_Jallianwala_Bagh_-_Amritsar_-_Punjab_-_India_%2812675536215%29.jpg/500px-Detail_of_Mural_Depicting_1919_Amritsar_Massacre_-_Jallianwala_Bagh_-_Amritsar_-_Punjab_-_India_%2812675536215%29.jpg"
  },
  {
    year: "1920",
    title: "Non-Cooperation Movement",
    desc: "Gandhi called for a nationwide boycott of British goods and institutions, promoting Swadeshi and Khadi. It mobilized millions and shifted the movement to the masses.",
    quote: "Non-violence is the greatest force at the disposal of mankind.",
    link: "https://en.wikipedia.org/wiki/Non-cooperation_movement",
    img: "https://tse4.mm.bing.net/th/id/OIP.1U6NegDeMJc6fBC58Qx08AHaFi"
  },
  {
    year: "1930",
    title: "Dandi March (Salt Satyagraha)",
    desc: "Gandhi led a 240-mile march to Dandi to defy the British salt law. It sparked widespread civil disobedience across the country.",
    quote: "With this, I am shaking the foundations of the British Empire.",
    link: "https://en.wikipedia.org/wiki/Salt_March",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Marche_sel.jpg/500px-Marche_sel.jpg"
  },
  {
    year: "1942",
    title: "Quit India Movement",
    desc: "In August 1942, Gandhi gave the 'Do or Die' call, demanding British withdrawal. Despite mass arrests, it intensified the push for independence.",
    quote: "Do or Die.",
    link: "https://en.wikipedia.org/wiki/Quit_India_Movement",
    img: "https://assets.telegraphindia.com/telegraph/2022/Oct/1666472657_new-project-2022-10-23t023400-396.jpg"
  },
  {
    year: "1947",
    title: "Independence & Partition",
    desc: "India finally gained independence on August 15, 1947. But the joy was marred by Partition, leading to mass violence and displacement.",
    quote: "At the stroke of the midnight hour, India will awake to life and freedom.",
    link: "https://en.wikipedia.org/wiki/Indian_independence",
    img: "https://tse3.mm.bing.net/th/id/OIP.sBLSkSu5R3hv4BReSy5dBQAAAA"
  }
];

const timeline = document.getElementById('timeline');

events.forEach((e, index) => {
  const div = document.createElement('div');
  div.className = 'event';
  div.innerHTML = `
    <div class="year">${e.year}</div>
    <div class="title"><strong>${e.title}</strong></div>
    <div class="quote">"${e.quote}"</div>
    <img src="${e.img}" alt="Image for ${e.year}" />
    <button class="read-more-btn" data-index="${index}">📖 Read More</button>
    <div class="content">
      <p>${e.desc}</p>
      <a class="learn-more" href="${e.link}" target="_blank">🔗 Learn More</a>
    </div>
  `;
  timeline.appendChild(div);
});

// Accordion toggle
timeline.addEventListener('click', (e) => {
  if (e.target.classList.contains('read-more-btn')) {
    const parent = e.target.closest('.event');
    parent.classList.toggle('active');
    e.target.textContent = parent.classList.contains('active') ? '🔽 Read Less' : '📖 Read More';
  }
});

// Theme toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
});
