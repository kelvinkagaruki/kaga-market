$path = 'c:\Users\Administrator\Desktop\_Getintopc.com_AutoCAD_2024_English_Win_64-bit\kaga-market\translations.js'
$content = Get-Content $path -Raw
$content = $content.Replace("let currentLanguage = localStorage.getItem('kagaLang') || 'en';", "let currentLanguage = localStorage.getItem('kagaLanguage') || localStorage.getItem('kagaLang') || 'en';")
$content = $content.Replace("  localStorage.setItem('kagaLang', lang);", "  localStorage.setItem('kagaLang', lang);`n  localStorage.setItem('kagaLanguage', lang);")
$content = $content.Replace("export { app };", "")
$content = $content.Replace("document.addEventListener('DOMContentLoaded', () => {`n  wireLanguageSwitchers();`n  applyTranslations(currentLanguage);`n  updateLangSwitcherUI(currentLanguage);`n});", "document.addEventListener('DOMContentLoaded', () => {`n  wireLanguageSwitchers();`n  applyTranslations(currentLanguage);`n  updateLangSwitcherUI(currentLanguage);`n});`n`nwindow.translations = translations;")
Set-Content -Path $path -Value $content -Encoding utf8
