# Eatwise

Eatwise je aplikace určená lidem, co žijí zdravým životním stylem, pomáhá s plánováním vyváženého jídelníčku na celý týden/měsíc dopředu. Uživatel si zvolí celkovou kalorickou hodnotu za den a aplikace sama vygeneruje menu. Aplikace navíc umožňuje vyfotit si jídlo na talíři a ihned zjistit jeho kalorickou a nutriční hodnotu.

## Použité technologie

- [React](https://reactjs.org/) - Hlavní javaScript knihovna pro tvorbu uživatelského rozhraní
- [Vite](https://vitejs.dev/) - Moderní bundler pro JavaScript použit pro rychlejší vývojové prostředí a bundlování aplikace

## Dostupné skripty

V adresáři projektu můžete spustit:

- `npm run dev`
  - Spustí aplikaci v režimu vývoje.
- `npm run lint`
  - Spustí kontrolu lintovacích pravidel pro kód.
- `npm run preview`
- `npm run format`
  - Spustí formátování kódu dle nastavených pravidel.
- `npm run check`

### Sestavení aplikace

- `npm run build`
  - Sestaví aplikaci pro produkci do složky `dist`.

## Projektové soubory

### Soubory

- `package.json` konfigurace projektu
- `package.json-lock` závislosti projektu
- `.prettierrc` formátování kódu dle nastavených pravidel
- `eslint.config.js` - kontrola lintovacích pravidel pro kód

### Skryté soubory

- `.env.*` env soubory pro konfiguraci aplikace

### Složky

- `public` veřejné soubory aplikace
- `src` zdrojové soubory aplikace
