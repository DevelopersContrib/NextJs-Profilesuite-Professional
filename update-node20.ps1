# PowerShell script to update to Node.js 20 compatibility
Write-Host "Updating to Node.js 20 compatibility..." -ForegroundColor Green

# Check current Node.js version
Write-Host "Current Node.js version:" -ForegroundColor Yellow
node --version

# Check if Node.js 20+ is installed
$nodeVersion = node --version
if ($nodeVersion -match "v20|v21|v22") {
    Write-Host "✓ Node.js 20+ detected" -ForegroundColor Green
} else {
    Write-Host "⚠ Please install Node.js 20 or later" -ForegroundColor Red
    Write-Host "You can download it from: https://nodejs.org/" -ForegroundColor Cyan
    exit 1
}

# Remove existing node_modules and package-lock.json
Write-Host "Cleaning existing dependencies..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules"
    Write-Host "✓ Removed node_modules" -ForegroundColor Green
}
if (Test-Path "package-lock.json") {
    Remove-Item "package-lock.json"
    Write-Host "✓ Removed package-lock.json" -ForegroundColor Green
}

# Install dependencies
Write-Host "Installing updated dependencies..." -ForegroundColor Yellow
npm install

Write-Host "✓ Update complete!" -ForegroundColor Green
Write-Host "You can now run: npm run dev" -ForegroundColor Cyan
