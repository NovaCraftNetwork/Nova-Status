cd "$(dirname "$0")"

[ ! -f package.json ] && npm init -y

for pkg in discord.js node-fetch; do
  npm list "$pkg" >/dev/null 2>&1 || npm install "$pkg"
done

node index.js
