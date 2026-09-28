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
    throw "Ghost 前台或管理端未通过 HTTP 检查。"
}
if ($front.Content -notmatch '把复杂技术') {
    throw "当前激活的不是 oss-blog-theme。"
}

Write-Host '验收通过：单元测试、GScan、前台和管理端均正常。' -ForegroundColor Green

