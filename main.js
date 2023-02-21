const words = ["the", "be", "and", "a", "of", "to", "in", "i", "you", "it", "have", "to", "that", "for", "do", "he", "with", "on", "this", "we", "that", "not", "but", "they", "say", "at", "what", "his", "from", "go", "or", "by", "get", "she", "my", "can", "as", "know", "if", "me", "your", "all", "who", "about", "their", "will", "so", "would", "make", "just", "up", "think", "time", "there", "see", "her", "as", "out", "one", "come", "people", "take", "year", "him", "them", "some", "want", "how", "when", "which", "now", "like", "other", "could", "our", "into", "here", "then", "than", "look", "way", "more", "these", "no", "thing", "well", "because", "also", "two", "use", "tell", "good", "first", "man", "day", "find", "give", "more", "new", "one", "us", "any", "those", "very", "her", "need", "back", "there", "should", "even", "only", "many", "really", "work", "life", "why", "right", "down", "on", "try", "let", "something", "too", "call", "woman", "may", "still", "through", "mean", "after", "never", "no", "world", "in", "feel", "yeah", "great", "last", "child", "oh", "over", "ask", "when", "as", "school", "state", "much", "talk", "out", "keep", "leave", "put", "like", "help", "big", "where", "same", "all", "own", "while", "start", "three", "high", "every", "another", "become", "most", "between", "happen", "family", "over", "president", "old", "yes", "house", "show", "again", "student", "so", "seem", "might", "part", "hear", "its", "place", "problem", "where", "believe", "country", "always", "week", "point", "hand", "off", "play", "turn", "few", "group", "such", "against", "run", "guy", "about", "case", "question", "work", "night", "live", "game", "number", "write", "bring", "without", "money", "lot", "most", "book", "system", "government", "next", "city", "company", "story", "today", "job", "move", "must", "bad", "friend", "during", "begin", "love", "each", "hold", "different", "american", "little", "before", "ever", "word", "fact", "right", "read", "anything", "nothing", "sure", "small", "month", "program", "maybe", "right", "under", "business", "home", "kind", "stop", "pay", "study", "since", "issue", "name", "idea", "room", "percent", "far", "away", "law", "actually", "large", "though", "provide", "lose", "power", "kid", "war", "understand", "head", "mother", "real", "best", "team", "eye", "long", "long", "side", "water", "young", "wait", "okay", "both", "yet", "after", "meet", "service", "area", "important", "person", "hey", "thank", "much", "someone", "end", "change", "however", "only", "around", "hour", "everything", "national", "four", "line", "girl", "around", "watch", "until", "father", "sit", "create", "information", "car", "learn", "least", "already", "kill", "minute", "party", "include", "stand", "together", "back", "follow", "health", "remember", "often", "reason", "speak", "ago", "set", "black", "member", "community", "once", "social", "news", "allow", "win", "body", "lead", "continue", "whether", "enough", "spend", "level", "able", "political", "almost", "boy", "university", "before", "stay", "add", "later", "change", "five", "probably", "center", "among", "face", "public", "die", "food", "else", "history", "buy", "result", "morning", "off", "parent", "office", "course", "send", "research", "walk", "door", "white", "several", "court", "home", "grow", "better", "open", "moment", "including", "consider", "both", "such", "little", "within", "second", "late", "street", "free", "better", "everyone", "policy", "table", "sorry", "care", "low", "human", "please", "hope", "process", "teacher", "data", "offer", "death", "whole", "experience", "plan", "easy", "education", "build", "expect", "fall", "himself", "age", "hard", "sense", "across", "show", "early", "college", "music", "appear", "mind", "class", "police", "use", "effect", "season", "tax", "heart", "son", "art", "possible", "serve", "break", "although", "end", "market", "even", "air", "force", "require", "foot", "up", "listen", "agree", "according", "anyone", "baby", "wrong", "love", "cut", "decide", "republican", "full", "behind", "pass", "interest", "sometimes", "security", "eat", "report", "control", "rate", "local", "suggest", "report", "nation", "sell", "action", "support", "wife", "decision", "receive", "value", "base", "pick", "phone", "thanks", "event", "drive", "strong", "reach", "remain", "explain", "site", "hit", "pull", "church", "model", "perhaps", "relationship", "six", "fine", "movie", "field", "raise", "less", "player", "couple", "million", "themselves", "record", "especially", "difference", "light", "development", "federal", "former", "role", "pretty", "myself", "view", "price", "effort", "nice", "quite", "along", "voice", "finally", "department", "either", "toward", "leader", "because", "photo", "wear", "space", "project", "return", "position", "special", "million", "film", "need", "major", "type", "town", "article", "road", "form", "chance", "drug", "economic", "situation", "choose", "practice", "cause", "happy", "science", "join", "teach", "early", "develop", "share", "yourself", "carry", "clear", "brother", "matter", "dead", "image", "star", "cost", "simply", "post", "society", "picture", "piece", "paper", "energy", "personal", "building", "military", "open", "doctor", "activity", "exactly", "american", "media", "miss", "evidence", "product", "realize", "save", "arm", "technology", "catch", "comment", "look", "term", "color", "cover", "describe", "guess", "choice", "source", "mom", "soon", "director", "international", "rule", "campaign", "ground", "election", "face", "uh", "check", "page", "fight", "itself", "test", "patient", "produce", "certain", "whatever", "half", "video", "support", "throw", "third", "care", "rest", "recent", "available", "step", "ready", "opportunity", "official", "oil", "call", "organization", "character", "single", "current", "likely", "county", "future", "dad", "whose", "less", "shoot", "industry", "second", "list", "general", "stuff", "figure", "attention", "forget", "risk", "no", "focus", "short", "fire", "dog", "red", "hair", "point", "condition", "wall", "daughter", "before", "deal", "author", "truth", "upon", "husband", "period", "series", "order", "officer", "close", "land", "note", "computer", "thought", "economy", "goal", "bank", "behavior", "sound", "deal", "certainly", "nearly", "increase", "act", "north", "well", "blood", "culture", "medical", "ok", "everybody", "top", "difficult", "close", "language", "window", "response", "population", "lie", "tree", "park", "worker", "draw", "plan", "drop", "push", "earth", "cause", "per", "private", "tonight", "race", "than", "letter", "other", "gun", "simple", "course", "wonder", "involve", "hell", "poor", "each", "answer", "nature", "administration", "common", "no", "hard", "message", "song", "enjoy", "similar", "congress", "attack", "past", "hot", "seek", "amount", "analysis", "store", "defense", "bill", "like", "cell", "away", "performance", "hospital", "bed", "board", "protect", "century", "summer", "material", "individual", "recently", "example", "represent", "fill", "state", "place", "animal", "fail", "factor", "natural", "sir", "agency", "usually", "significant", "help", "ability", "mile", "statement", "entire", "democrat", "floor", "serious", "career", "dollar", "vote", "sex", "compare", "south", "forward", "subject", "financial", "identify", "beautiful", "decade", "bit", "reduce", "sister", "quality", "quickly", "act", "press", "worry", "accept", "enter", "mention", "sound", "thus", "plant", "movement", "scene", "section", "treatment", "wish", "benefit", "interesting", "west", "candidate", "approach", "determine", "resource", "claim", "answer", "prove", "sort", "enough", "size", "somebody", "knowledge", "rather", "hang", "sport", "tv", "loss", "argue", "left", "note", "meeting", "skill", "card", "feeling", "despite", "degree", "crime", "that", "sign", "occur", "imagine", "vote", "near", "king", "box", "present", "figure", "seven", "foreign", "laugh", "disease", "lady", "beyond", "discuss", "finish", "design", "concern", "ball", "east", "recognize", "apply", "prepare", "network", "huge", "success", "district", "cup", "name", "physical", "growth", "rise", "hi", "standard", "force", "sign", "fan", "theory", "staff", "hurt", "legal", "september", "set", "outside", "et", "strategy", "clearly", "property", "lay", "final", "authority", "perfect", "method", "region", "since", "impact", "indicate", "safe", "committee", "supposed", "dream", "training", "shit", "central", "option", "eight", "particularly", "completely", "opinion", "main", "ten", "interview", "exist", "remove", "dark", "play", "union", "professor", "pressure", "purpose", "stage", "blue", "herself", "sun", "pain", "artist", "employee", "avoid", "account", "release", "fund", "environment", "treat", "specific", "version", "shot", "hate", "reality", "visit", "club", "justice", "river", "brain", "memory", "rock", "talk", "camera", "global", "various", "arrive", "notice", "bit", "detail", "challenge", "argument", "lot", "nobody", "weapon", "best", "station", "island", "absolutely", "instead", "discussion", "instead", "affect", "design", "little", "anyway", "respond", "control", "trouble", "conversation", "manage", "close", "date", "public", "army", "top", "post", "charge", "seat"];


/**
 * Given a list of elements, shuffle those elements
 * using the Fisher-Yates algorithm.
 * */
function scramble(ls) {
  const copy = [...ls];
  for (let x = 0; x < ls.length; x++) {
    const toSwap = Math.floor(Math.random() * (ls.length - x)) + x;
    const tmp = copy[x];
    copy[x] = copy[toSwap];
    copy[toSwap] = tmp;
  }
  return copy;
}

class TypingTest {
  words;
  currWordIdx;
  correctChars;
  totalChars;
  timeLeft;
  timer;
  totalTime = 30;
  
  constructor() {
    this.reset();
    this.setupInputListener();
  }
  
  reset() {
    this.currWordIdx = 0;
    this.correctChars = 0;
    this.charsTyped = 0;
    this.totalChars = 0;
    this.timeLeft = this.totalTime;
    document.querySelector("#timer").textContent = this.timeLeft;
    this.initializeTest();
    document.querySelector("#input").value = "";
    clearInterval(this.timer);
    this.timer = undefined;
    document.getElementById("input").focus();
  }
  
  initializeTest() {
    const scrambled = scramble(words);
    this.words = scrambled;
    this.render();
  }
  
  render() {
    const textboxElem = document.querySelector("#textbox");
    textboxElem.innerHTML = "";
    const toRender = this.words.slice(this.currWordIdx, this.currWordIdx + 60);
    toRender.forEach((w, idx) => {
      const pElem = document.createElement("p");
      pElem.textContent = w;
      if (idx === 0) {
        pElem.id = "curr-word";
      }
      textboxElem.appendChild(pElem);
      
      const space = document.createElement("p");
      space.textContent = " ";
      textboxElem.appendChild(space);
    });
  }
  
  gameOver() {
    if ((Math.round(this.correctChars / this.totalChars * 10000) / 100) < 65) {
      alert(`Your accuracy is too low! Please try again.`);
      this.reset();
    } else {
      alert(`Your WPM was ${Math.floor(this.charsTyped / 5 * 60 / this.totalTime)}. Your accuracy was ${Math.round(this.correctChars / this.totalChars * 10000) / 100}%.`);
      this.reset();
    }
  }
  
  decrementTimer() {
    this.timeLeft--;
    document.querySelector("#timer").textContent = this.timeLeft;
    if (this.timeLeft === 0) {
      this.gameOver();
    }
  }
  
  setupInputListener() {
    document.querySelector("#reset")
      .addEventListener("click", (_) => {
        this.reset();
      });
 
    Array.from(document.getElementsByClassName("settime")).forEach((el) => {
      el.addEventListener("click", (_) => {
        Array.from(document.getElementsByClassName("settime")).forEach((el) => {
           el.classList.remove("active");
        });
        el.classList.add("active");
        this.totalTime = parseInt(el.textContent);
        this.reset();
      })});

    document.querySelector("#input")
      .addEventListener("input", (e) => {
        if (this.timer === undefined) {
          this.timer = setInterval(() => {
            this.decrementTimer();
          }, 1000)
        }
        const typed = e.target.value;
        this.charsTyped++;
        const currWord = this.words[this.currWordIdx];
        const currWordElem = document.querySelector("#curr-word");
        if (typed.charAt(typed.length - 1) === " ") {
          // Calculate Score
          this.totalChars += currWord.length;
          for (let x = 0; x < currWord.length; x++) {
            if (x >= typed.length) {
              break;
            }
            if (currWord.charAt(x) === typed.charAt(x)) {
              this.correctChars++;
            }
          }
          
          currWordElem.classList.remove("highlight-incorrect");
          if (typed.substring(0, typed.length - 1) === currWord) {
            currWordElem.classList.add("correct-word");
          } else {
            currWordElem.classList.add("incorrect-word");
          }
          // Move to next word
          e.target.value = "";
          currWordElem.id = "";
          this.currWordIdx++;
          const nextWordElem = currWordElem.nextSibling.nextSibling;
          if (currWordElem.offsetTop !== nextWordElem.offsetTop) {
            this.render();
          } else {
            currWordElem.nextSibling.nextSibling.id = "curr-word";
          }          
        } else {
          if (!currWord.startsWith(typed)) {
            currWordElem.classList.add("highlight-incorrect");
          } else {
            currWordElem.classList.remove("highlight-incorrect");
          }
        }
      });
  }
}


new TypingTest();






