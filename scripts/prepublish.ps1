# Runs automatically before "publish".
# Regenerates cv-en.pdf / cv-sr.pdf when their HTML/CSS sources in cv-source/ changed.

$root = Split-Path $PSScriptRoot -Parent
$src = Join-Path $root "cv-source"
$browser = @(
    "C:\Program Files\Google\Chrome\Application\chrome.exe",
    "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1

$css = Get-Item (Join-Path $src "cv.css")
foreach ($lang in "en", "sr") {
    $html = Get-Item (Join-Path $src "cv-$lang.html")
    $pdfPath = Join-Path $root "cv-$lang.pdf"
    $pdf = Get-Item $pdfPath -ErrorAction SilentlyContinue
    $newest = @($html.LastWriteTime, $css.LastWriteTime) | Sort-Object | Select-Object -Last 1
    if ($pdf -and $pdf.LastWriteTime -ge $newest) { Write-Host "  cv-$lang.pdf je ažuran"; continue }
    if (-not $browser) { Write-Host "  [!] Chrome/Edge nije pronađen, cv-$lang.pdf nije osvežen"; continue }

    $url = "file:///" + ($html.FullName -replace '\\', '/')
    $profileDir = Join-Path $env:TEMP "cv-pdf-profile"
    $p = Start-Process -FilePath $browser -Wait -PassThru -WindowStyle Hidden -ArgumentList @(
        "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
        "--user-data-dir=`"$profileDir`"", "--print-to-pdf=`"$pdfPath`"", "`"$url`"")
    if ($p.ExitCode -ne 0) { Write-Host "  [GREŠKA] cv-$lang.pdf nije napravljen"; exit 1 }
    Write-Host "  cv-$lang.pdf ponovo napravljen"
}
