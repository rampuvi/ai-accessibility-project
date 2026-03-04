(function() {
  'use strict';

  // ========================================
  // SPA ROUTING
  // ========================================
  var appContent = document.querySelector('.app-content');

  function navigateTo(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(function(p) {
      p.classList.remove('active');
    });

    // Show target page
    var target = document.getElementById('page-' + pageId);
    if (target) {
      target.classList.add('active');
    } else {
      // Default to home
      document.getElementById('page-home').classList.add('active');
      pageId = 'home';
    }

    // Update sidebar active states
    document.querySelectorAll('.sidebar-link').forEach(function(link) {
      link.classList.toggle('active', link.getAttribute('data-page') === pageId);
    });

    // Close mobile sidebar
    closeMobileSidebar();

    // Stop TTS if speaking
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    var ttsBtn = document.getElementById('a11y-tts');
    if (ttsBtn) { ttsBtn.classList.remove('active-toggle'); ttsBtn.setAttribute('aria-pressed', 'false'); }

    // Scroll to top of content area
    if (appContent) appContent.scrollTo({ top: 0, behavior: 'smooth' });

    // Update URL hash
    history.pushState(null, '', '#' + pageId);

    // Announce page change for screen readers
    var heading = target ? target.querySelector('h1') : null;
    if (heading) {
      document.title = heading.textContent + ' — AI Co-Design Project';
    }
  }

  // Handle all navigation clicks
  document.addEventListener('click', function(e) {
    var link = e.target.closest('[data-page]');
    if (link) {
      e.preventDefault();
      navigateTo(link.getAttribute('data-page'));
    }
  });

  // Handle keyboard navigation on data-page elements
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      var link = e.target.closest('[data-page]');
      if (link && link.tagName !== 'A') {
        e.preventDefault();
        navigateTo(link.getAttribute('data-page'));
      }
    }
  });

  // Handle browser back/forward
  window.addEventListener('popstate', function() {
    var hash = location.hash.replace('#', '') || 'home';
    navigateTo(hash);
  });

  // Initial route
  var initialPage = location.hash.replace('#', '') || 'home';
  if (initialPage !== 'home') {
    navigateTo(initialPage);
  }

  // ========================================
  // MOBILE SIDEBAR
  // ========================================
  var sidebarToggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('.app-sidebar');
  var sidebarBackdrop = document.querySelector('.sidebar-backdrop');

  function closeMobileSidebar() {
    if (!sidebar || !sidebarBackdrop || !sidebarToggle) return;
    sidebar.classList.remove('open');
    sidebarBackdrop.classList.remove('open');
    sidebarToggle.setAttribute('aria-expanded', 'false');
  }

  sidebarToggle.addEventListener('click', function() {
    var isOpen = sidebar.classList.toggle('open');
    sidebarBackdrop.classList.toggle('open');
    sidebarToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  sidebarBackdrop.addEventListener('click', closeMobileSidebar);

  // ========================================
  // DEPTH LAYERS (Accordion)
  // ========================================
  document.querySelectorAll('.depth-card-header').forEach(function(header) {
    header.addEventListener('click', function() {
      var card = header.closest('.depth-card');
      var wasExpanded = card.classList.contains('expanded');

      // Close siblings (accordion behavior)
      var parent = card.closest('.depth-grid');
      if (parent) {
        parent.querySelectorAll('.depth-card.expanded').forEach(function(c) {
          c.classList.remove('expanded');
          c.querySelector('.depth-card-header').setAttribute('aria-expanded', 'false');
        });
      }

      // Toggle this one
      if (!wasExpanded) {
        card.classList.add('expanded');
        header.setAttribute('aria-expanded', 'true');
      }
    });

    header.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });

  // ========================================
  // GLOSSARY ACCORDION
  // ========================================
  document.querySelectorAll('.accordion-header').forEach(function(header) {
    header.addEventListener('click', function() {
      var item = header.closest('.accordion-item');
      var wasExpanded = item.classList.contains('expanded');

      // Close siblings
      var parent = item.closest('.accordion');
      if (parent) {
        parent.querySelectorAll('.accordion-item.expanded').forEach(function(i) {
          i.classList.remove('expanded');
          i.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
        });
      }

      if (!wasExpanded) {
        item.classList.add('expanded');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ========================================
  // HOTSPOT INTERACTIONS (Building Together)
  // ========================================
  var hotspotData = {
    '1': {
      title: 'Simple sign-in',
      surface: 'Sign in using your Gmail account. No complex passwords or account creation \u2014 those are a major barrier for many people.',
      detail: 'We chose Google SSO because it removes the biggest friction point: remembering yet another password. Complex account creation processes are one of the most common barriers to technology adoption for people with IDD. One tap, and you\'re in.'
    },
    '2': {
      title: 'Getting to know you',
      surface: 'The app starts by having a conversation to understand you \u2014 your needs, your preferences, your goals. No forms. No settings screens.',
      detail: 'This is the "understanding-first" principle. Instead of presenting a blank interface and asking users to figure it out, the app initiates a natural conversation. It asks about dietary needs, preferences, and goals before showing any tracking features. This conversation creates the foundation for personalized interactions.'
    },
    '3': {
      title: 'It remembers what it learns',
      surface: 'The app keeps track of what it learns about you so it can give better suggestions over time, without asking the same questions again.',
      detail: 'The app uses retrieval-augmented generation (RAG) to maintain a personal context profile. Information from the onboarding conversation and ongoing interactions is stored and used to personalize responses. The AI doesn\'t start from scratch each time \u2014 it builds on what it already knows about you.'
    },
    '4': {
      title: 'Pick a food, drag it to a meal',
      surface: 'A visual drag-and-drop interface. Simplicity was non-negotiable \u2014 Mary pushed back on every bit of unnecessary complexity.',
      detail: 'Early prototypes had more complex interfaces with search bars, categories, and filters. Mary rejected all of it. "I just need to drag the food." The visual grid of foods with drag-to-meal interaction emerged directly from her direction. Every added feature had to justify its existence to the person using it.'
    },
    '5': {
      title: 'Traffic light tracking',
      surface: 'Track daily sodium and fluid intake with a simple traffic light system. This replaced eight handwritten notebooks.',
      detail: 'Mary had been tracking her sodium and fluid intake by hand in eight notebooks. The traffic light system (green = good, yellow = watch it, red = over limit) gives the same information at a glance. Mary proposed having two separate interfaces: one for daily tracking and one for the conversation/learning side.'
    },
    '6': {
      title: 'Built-in foundational skills',
      surface: 'You can always say "make this simpler" or "that\'s not what I meant." The foundational skills framework is embedded right into the design.',
      detail: 'The five foundational skills aren\'t just an observation \u2014 they\'re built into the app\'s interaction patterns. The UI surfaces prompts like "ask me to simplify" and "tell me if I got it wrong." The app teaches these skills through use, not instruction, by making them visible and natural parts of every interaction.'
    }
  };

  var panel = document.getElementById('hotspot-panel');
  var panelContent = document.getElementById('hotspot-content');
  var panelClose = document.querySelector('.hotspot-panel-close');

  document.querySelectorAll('.hotspot').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var id = btn.getAttribute('data-hotspot');
      var data = hotspotData[id];
      if (!data) return;

      panelContent.innerHTML =
        '<h3>' + data.title + '</h3>' +
        '<p>' + data.surface + '</p>' +
        '<button class="more-detail-toggle" onclick="this.nextElementSibling.classList.toggle(\'visible\'); this.textContent = this.nextElementSibling.classList.contains(\'visible\') ? \'Less detail\' : \'More detail\';">More detail</button>' +
        '<div class="hotspot-detail"><p>' + data.detail + '</p></div>';

      panel.classList.add('active');
    });
  });

  if (panelClose) {
    panelClose.addEventListener('click', function() {
      panel.classList.remove('active');
    });
  }

  // ========================================
  // ACCESSIBILITY CONTROLS (Header)
  // ========================================
  var currentSize = 100;
  var contrastBtn = document.getElementById('a11y-contrast');
  var darkModeBtn = document.getElementById('a11y-darkmode');
  var ttsBtn = document.getElementById('a11y-tts');
  var plainBtn = document.getElementById('a11y-plain');

  // Font size
  document.getElementById('a11y-decrease').addEventListener('click', function() {
    currentSize = Math.max(80, currentSize - 10);
    document.documentElement.style.fontSize = currentSize + '%';
  });

  document.getElementById('a11y-increase').addEventListener('click', function() {
    currentSize = Math.min(200, currentSize + 10);
    document.documentElement.style.fontSize = currentSize + '%';
  });

  // High contrast
  contrastBtn.addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
    var isOn = document.body.classList.contains('high-contrast');
    contrastBtn.classList.toggle('active-toggle', isOn);
    contrastBtn.setAttribute('aria-pressed', isOn ? 'true' : 'false');
  });

  // Dark mode
  var savedDark = localStorage.getItem('darkMode') === 'true';
  if (savedDark) {
    document.body.classList.add('dark-mode');
    darkModeBtn.classList.add('active-toggle');
    darkModeBtn.setAttribute('aria-pressed', 'true');
  }
  darkModeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    var isOn = document.body.classList.contains('dark-mode');
    darkModeBtn.classList.toggle('active-toggle', isOn);
    darkModeBtn.setAttribute('aria-pressed', isOn ? 'true' : 'false');
    localStorage.setItem('darkMode', isOn);
  });

  // Text-to-Speech
  ttsBtn.addEventListener('click', function() {
    if (!window.speechSynthesis) return;
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      ttsBtn.classList.remove('active-toggle');
      ttsBtn.setAttribute('aria-pressed', 'false');
      return;
    }
    var activePage = document.querySelector('.page.active');
    if (!activePage) return;
    var text = activePage.innerText;
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.onend = function() {
      ttsBtn.classList.remove('active-toggle');
      ttsBtn.setAttribute('aria-pressed', 'false');
    };
    window.speechSynthesis.speak(utterance);
    ttsBtn.classList.add('active-toggle');
    ttsBtn.setAttribute('aria-pressed', 'true');
  });

  // Plain language
  plainBtn.addEventListener('click', function() {
    var isOn = document.body.classList.toggle('plain-language');
    plainBtn.classList.toggle('active-toggle', isOn);
    plainBtn.setAttribute('aria-pressed', isOn ? 'true' : 'false');
    document.querySelectorAll('[data-plain]').forEach(function(el) {
      if (isOn) {
        if (!el.getAttribute('data-original')) el.setAttribute('data-original', el.textContent);
        el.textContent = el.getAttribute('data-plain');
      } else {
        if (el.getAttribute('data-original')) el.textContent = el.getAttribute('data-original');
      }
    });
  });

  // ========================================
  // AI CHAT PROTOTYPE (What We Discovered)
  // ========================================
  var aiInvite = document.getElementById('ai-invite');
  var aiPanel = document.getElementById('ai-panel');
  var aiOpenBtn = document.getElementById('ai-open-btn');
  var aiInput = document.getElementById('ai-input');
  var aiSend = document.getElementById('ai-send');
  var aiMic = document.getElementById('ai-mic');
  var aiMessages = document.getElementById('ai-messages');
  var aiTyping = document.getElementById('ai-typing');
  var aiClear = document.getElementById('ai-clear');
  var aiClose = document.getElementById('ai-close');

  if (aiOpenBtn) {
    // Open chat
    aiOpenBtn.addEventListener('click', function() {
      aiInvite.style.display = 'none';
      aiPanel.classList.add('open');
      aiInput.focus();
    });

    // Close chat
    aiClose.addEventListener('click', function() {
      aiPanel.classList.remove('open');
      aiInvite.style.display = '';
    });

    // Clear / start over
    aiClear.addEventListener('click', function() {
      var msgs = aiMessages.querySelectorAll('.ai-msg');
      msgs.forEach(function(m) { m.remove(); });
      addBotMessage("Hi! I'm here to chat about whatever interests you. What's on your mind?");
    });

    // Send message
    function sendMessage() {
      var text = aiInput.value.trim();
      if (!text) return;
      addUserMessage(text);
      aiInput.value = '';
      showTyping();
      // Simulated response (placeholder — real API would go here)
      setTimeout(function() {
        hideTyping();
        var responses = [
          "That's a great question! Tell me more about what you're curious about.",
          "I'd be happy to help with that. Could you share a bit more about what you need?",
          "Interesting! Let me think about that. What would be most helpful for you right now?",
          "I hear you. Would you like me to explain that in a simpler way?",
          "Good thinking. Is there anything specific about that you'd like to explore?"
        ];
        var resp = responses[Math.floor(Math.random() * responses.length)];
        addBotMessage(resp);
      }, 1200 + Math.random() * 800);
    }

    aiSend.addEventListener('click', sendMessage);
    aiInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') { e.preventDefault(); sendMessage(); }
    });

    // Voice input (Web Speech API)
    aiMic.addEventListener('click', function() {
      if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        addBotMessage("Sorry, voice input isn't supported in this browser. Try typing instead.");
        return;
      }
      var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      var recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      aiMic.classList.add('active');
      recognition.start();
      recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        aiInput.value = transcript;
        aiMic.classList.remove('active');
        sendMessage();
      };
      recognition.onerror = function() { aiMic.classList.remove('active'); };
      recognition.onend = function() { aiMic.classList.remove('active'); };
    });

    function addUserMessage(text) {
      var div = document.createElement('div');
      div.className = 'ai-msg user';
      div.textContent = text;
      aiMessages.insertBefore(div, aiTyping);
      aiMessages.scrollTop = aiMessages.scrollHeight;
    }

    function addBotMessage(text) {
      var div = document.createElement('div');
      div.className = 'ai-msg bot';
      div.textContent = text;
      aiMessages.insertBefore(div, aiTyping);
      aiMessages.scrollTop = aiMessages.scrollHeight;
    }

    function showTyping() {
      aiTyping.classList.add('visible');
      aiTyping.setAttribute('aria-hidden', 'false');
      aiMessages.scrollTop = aiMessages.scrollHeight;
    }

    function hideTyping() {
      aiTyping.classList.remove('visible');
      aiTyping.setAttribute('aria-hidden', 'true');
    }
  }

})();
