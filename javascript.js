  const langSelect = document.getElementById('langSelect');
  
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = langSelect.value; // Nakadepende na sa pinili sa dropdown

    // Sundin kung ano ang baguhin sa dropdown
    langSelect.addEventListener('change', () => {
      recognition.lang = langSelect.value;
    });

    recognition.onresult = (event) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      noteInput.value = transcript;
    };
    // ... sunod ang natitirang audio listeners ...
  }
