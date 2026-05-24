#!/bin/bash
# Netlify build script
# Replaces ##ANTHROPIC_KEY## placeholder in index.html with the actual key
# stored in Netlify's environment variables — works on the free plan

if [ -z "$ANTHROPIC_API_KEY" ]; then
  echo "No ANTHROPIC_API_KEY set — app will show manual key input field"
else
  echo "Injecting API key into index.html..."
  sed -i "s|##ANTHROPIC_KEY##|$ANTHROPIC_API_KEY|g" index.html
  echo "Key injected successfully"
fi
