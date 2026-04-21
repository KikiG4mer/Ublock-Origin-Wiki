
# Google Chrome Browser

Follow these methods/setps to install the official uBlock Origin on your google chrome browser.

## Method 1 : Chrome Webstore extension page

Visit the official uBlock extension page on the Chrome Webstore then click on **Add To Chrome**.

<div style="display: flex; align-items: center; gap: 12px;">
  <img src="https://fonts.gstatic.com/s/i/productlogos/chrome_store/v7/192px.svg" width="32" />
  <a href="https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm">Chrome Web Store</a>
</div>

## Method 2 : Extension Side Loading


:::warning <Icon name="electric_bolt" color='#e6a030' /> Heads up: Chrome will show a persistent warning about developer mode extensions. This is annoying but harmless. Welcome to the resistance.
:::


### 1- Create a Chrome Desktop Shortcut & Add Launch Flags
Right-click your Chrome shortcut on the desktop <Icon name="trending_flat"/> Properties <Icon name="trending_flat"/> Shortcut tab <Icon name="trending_flat"/> find the Target field. At the end of the existing path, add the following flags:
```batch  
"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-features=ExtensionManifestV2Unsupported,ExtensionManifestV2Disabled
```

Click **Apply** <Icon name="trending_flat"/> **OK**. From now on, always launch Chrome using this shortcut — not from the taskbar or Start menu, those won't have the flags.
:::warning <Icon name="info" color='#e6a030' /> Don't have a desktop shortcut?
Find **chrome.exe** in <span style="color: #e6a030">C:\Program Files\Google\Chrome\Application\ </span>, right-click it <Icon name="trending_flat"/> Send to <Icon name="trending_flat"/> Desktop (create shortcut), then follow the steps above.
:::


### 2- Download the uBlock Origin MV2 .crx file

Go to the GitHub releases page and download the latest ```.crx``` file for uBlock Origin (not Lite).
```url
https://github.com/gorhill/uBlock/releases/latest
```

Look for a file named ```uBlock0_X.X.X.chromium.zip.``` and download it.


### 3- Extract the ZIP file

Unzip the downloaded file to a folder of your choice.


:::warning <Icon name="warning" color='#e6a030' /> Don't delete this folder!
Chrome loads the extension directly from it. If you delete or move it, Chrome will lose the extension and you'll have to re-add it. Store it somewhere stable like ```C:\Program Files``` or a dedicated folder in your Documents — somewhere you won't accidentally clean up during a storage purge.
:::

:::info <Icon name="folder_zip" color='#30a3e6' /> Don't have a zip program? Grab one of these — all free, all trusted:

<div style="display:flex;align-items:center;gap:5px;"><img src="https://cdn.worldvectorlogo.com/logos/7-zip.svg" width="22" /><span><b>7-Zip</b> — free, open source, handles everything</span><a href="https://7-zip.org/download.html" >7-zip.org</a></div>


<div style="display:flex;align-items:center;gap:5px;"><img src="https://i.imgur.com/eS4R4UK.png" width="20" /><span><b>WinRAR</b> — popular, free to use (perpetual trial)</span><a href="https://www.win-rar.com/download.html?&L=0" >win-rar.com</a></div>


<div style="display:flex;align-items:center;gap:5px;"><img src="https://i.imgur.com/xKqIkef.png" width="20" /><span><b>PeaZip</b> — free, open source, clean UI</span><a href="https://peazip.github.io/index.html" tagret="blank">peazip.github.io</a></div>

:::

### 4- Enable Developer Mode in Chrome
Navigate to the extensions page and flip the switch.
```batch
chrome://extensions
```
Toggle **Developer mode** ON (top right corner).


### 5- Load the Unpacked Extension
Click **"Load unpacked"** and select the folder you extracted in step 3. Make sure to select the inner folder that contains ```manifest.json```.


### 6- Pin and verify
Click the puzzle piece icon <Icon name="trending_flat"/> pin uBlock Origin. If you see the red shield, you're blocking. <Icon name="celebration" color='#2aa749' /> 


:::warning <Icon name="warning" color='#e6a030' /> Chrome may disable sideloaded extensions after updates. You'll need to re-enable them from ```chrome://extensions``` when that happens.
:::