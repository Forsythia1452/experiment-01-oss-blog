$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$themeDir = Join-Path $projectRoot 'theme\oss-blog-theme'

Push-Location $themeDir
try {
    npm run check
} finally {
    Pop-Location
}

$front = Invoke-WebRequest -UseBasicParsing 'http://localhost:2368/'
$admin = Invoke-WebRequest -UseBasicParsing 'http://localhost:2368/ghost/'
if ($front.StatusCode -ne 200 -or $admin.StatusCode -ne 200) {
    throw "Ghost frontend or admin failed the HTTP health check."
}
if ($front.Content -notmatch 'LATEST NOTES') {
    throw "The active theme is not oss-blog-theme."
}

Write-Host 'PASS: unit tests, GScan, frontend and admin are healthy.' -ForegroundColor Green

