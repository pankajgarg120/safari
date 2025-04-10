$i = 1
Get-ChildItem -Path "." -Filter *.jpg | Sort-Object Name | ForEach-Object {
    $newName = "hotel{0:D1}.jpg" -f $i
    Rename-Item $_.FullName -NewName $newName
    $i++
}