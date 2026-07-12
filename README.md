# 3D Su Arıtma Sistemleri – Tanıtım Sitesi

Filtre değişimi, filtre satışı, su yumuşatma cihazı ve arıtmalı sebil hizmetlerini tanıtan statik web sitesi.

## Dosyalar

| Dosya | Açıklama |
|-------|----------|
| `index.html` | Ana sayfa |
| `style.css`  | Tasarım stilleri |
| `script.js`  | Slider ve mobil menü |

## GitHub Pages'e Yayınlama

1. Bu repoyu GitHub'a push'layın.
2. **Settings → Pages → Source: main branch / root** seçin.
3. Birkaç dakika içinde siteniz `https://kullaniciadi.github.io/repo-adi` adresinde yayınlanır.

## Fotoğraf Ekleme

Slider'daki taslak alanları gerçek fotoğraflarla değiştirmek için:

1. Fotoğraflarınızı repoya ekleyin (örn. `images/` klasörüne).
2. `index.html` içindeki `<div class="slide-placeholder">` bloklarını silip yerine şunu yazın:

```html
<img src="images/foto1.jpg" alt="Açıklama" class="slide-img" />
```

3. `style.css` içine şu stili ekleyin:

```css
.slide-img {
  width: 100%;
  height: 380px;
  object-fit: cover;
}
```

## Bilgileri Güncelleme

`index.html` içinde aşağıdaki alanları kendi bilgilerinizle doldurun:

- **Telefon:** `0500 000 00 00`
- **Adres:** `Örnek Mah. Su Cad. No:1, İlçe / Şehir`
- **WhatsApp linki:** `https://wa.me/905000000000` → kendi numaranızı yazın
- **Çalışma saatleri**
