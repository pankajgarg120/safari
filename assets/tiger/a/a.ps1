$i = 11
Get-ChildItem -Path "." -Filter *.jpeg | Sort-Object Name | ForEach-Object {
    $newName = "tiger{0:D2}.jpg" -f $i
    Rename-Item $_.FullName -NewName $newName
    $i++
}