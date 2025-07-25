# Script to clean up unused files in the project

# Create backup directory if it doesn't exist
$backupDir = "src\backup"
if (-not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir | Out-Null
}

# Files to remove
$filesToRemove = @(
    "src\components\SlidingContactForm_fixed.tsx",
    "src\components\SlidingForm.tsx",
    "src\components\sections\MissionStatement.tsx",
    "src\hooks\use-mobile.tsx"
)

# Directories to clean up
$dirsToClean = @(
    "src\components\sections",
    "src\hooks\unused"
)

# Move UI components to unused directory
$uiComponentsDir = "src\components\ui\unused"
if (-not (Test-Path $uiComponentsDir)) {
    New-Item -ItemType Directory -Path $uiComponentsDir | Out-Null
}

$uiComponentsToMove = @(
    "alert-dialog",
    "checkbox",
    "sheet",
    "sidebar",
    "sonner",
    "textarea",
    "toast",
    "tooltip"
)

# Backup and remove files
Write-Host "Starting cleanup..." -ForegroundColor Cyan

# Backup and remove individual files
foreach ($file in $filesToRemove) {
    if (Test-Path $file) {
        $backupPath = Join-Path $backupDir (Split-Path $file -Leaf)
        Write-Host "Backing up and removing: $file" -ForegroundColor Yellow
        Copy-Item -Path $file -Destination $backupPath -Force
        Remove-Item -Path $file -Force
    }
}

# Move UI components to unused directory
foreach ($component in $uiComponentsToMove) {
    $sourceFile = "src\components\ui\$component.tsx"
    $destFile = "$uiComponentsDir\$component.tsx"
    
    if (Test-Path $sourceFile) {
        Write-Host "Moving UI component to unused: $component" -ForegroundColor Yellow
        if (-not (Test-Path (Split-Path $destFile -Parent))) {
            New-Item -ItemType Directory -Path (Split-Path $destFile -Parent) -Force | Out-Null
        }
        Move-Item -Path $sourceFile -Destination $destFile -Force
    }
}

# Clean up empty directories
foreach ($dir in $dirsToClean) {
    if (Test-Path $dir) {
        $items = Get-ChildItem -Path $dir -Recurse -File
        if ($items.Count -eq 0) {
            Write-Host "Removing empty directory: $dir" -ForegroundColor Yellow
            Remove-Item -Path $dir -Recurse -Force
        }
    }
}

Write-Host "Cleanup completed. Backups saved to: $backupDir" -ForegroundColor Green
