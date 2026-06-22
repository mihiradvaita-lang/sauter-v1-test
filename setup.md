# SAUTER v1 — Local Setup

## Requirements
- A modern browser (Chrome, Firefox, Edge, or Safari)
- Ollama — optional, for AI category suggestions

## Running the App
1. Open `index.html` directly in your browser — that's it.
2. Notes are saved in your browser's localStorage. No server, no account, nothing to install.

## Setting Up AI (Optional but recommended)

### Step 1 — Install Ollama
Download from https://ollama.ai and install it.

### Step 2 — Pull a model
Open Terminal (or Command Prompt on Windows) and run:
```
ollama pull llama3.2
```
This downloads a ~2GB model that runs entirely on your machine.

### Step 3 — Start Ollama
```
ollama serve
```
Keep this running in the background while you use SAUTER.

SAUTER will detect Ollama automatically. You'll see **AI ready** in the compose view.
If Ollama isn't running, you can still use SAUTER — just pick categories manually.

---

## How It Works
- The app tries these models in order: llama3.2, llama3, mistral, phi3, gemma
- It uses whichever one you have installed
- If AI fails for any reason, it silently falls back to manual category selection
- Nothing is sent to any external server — all AI runs on your machine

## Notes for Sharing
- Data lives in the browser's localStorage for the specific file path
- If a friend opens the file from a different location, they'll see their own empty vault (which is correct)
- Each person's data stays completely local to their machine
- To test the app yourself, just open index.html — notes appear immediately after saving

## Keyboard Shortcuts
- **⌘N / Ctrl+N** — New note
- **⌘S / Ctrl+S** — Save while composing
- **Escape** — Back to the list

## Giving Feedback
Things to pay attention to:
1. Does the AI category suggestion feel accurate?
2. Is the app fast and smooth?
3. What's missing that you'd want in v2?
4. What feels unnecessary or in the way?
