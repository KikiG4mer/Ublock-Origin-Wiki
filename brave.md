<div class="background-banner" style="--banner-image: url('/assets/browser_icons/brave.svg'); --banner-opacity-light: 0.03; --banner-opacity-dark: 0.01;"></div>
<img width="60" style="margin-left: 70px; padding-bottom:20px;" src="/assets/browser_icons/brave.svg" />

# Brave Browser

Follow these methods/steps to install the official uBlock Origin on your Brave browser.

## Method 1 : Chrome Web Store

Since Brave is Chromium-based, you can install uBlock Origin directly from the Chrome Web Store. Visit the official uBlock Origin page and click on **Add To Chrome**.
<div style="display: flex; align-items: center; gap: 12px;"><img src="https://fonts.gstatic.com/s/i/productlogos/chrome_store/v7/192px.svg" width="40" />Chrome Web Store <hr>
</div>
<hr style="width:200px;">
<br>
<div style="display: flex; align-items: center; gap: 12px; ">
  <img src="/assets/UBlock_Origin_Logo.svg" width="40" /><b>uBlock Origin</b>
<div data-v-89d2fc22="" class="action"><a data-v-a6f37409="" data-v-89d2fc22="" class="VPButton medium brand" style='text-decoration: none !important;' href="https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm" target='blank'>Add to Chrome <Icon name="arrow_outward" color='#ffffff'/></a></div>
</div>

4.7<Icon name="star"/> (35.4K ratings) <Icon name="group"/> 15,000,000 users



## Method 2 : Extension Side Loading


:::warning <Icon name="electric_bolt"/> Heads up: Brave supports sideloading extensions just like Chrome. This is straightforward and works seamlessly. Welcome to web freedom.
:::


### 1- Create a Brave Desktop Shortcut & Add Launch Flags

Right-click your Brave shortcut on the desktop <Icon name="trending_flat"/> Properties <Icon name="trending_flat"/> Shortcut tab <Icon name="trending_flat"/> find the Target field. At the end of the existing path, add the following flags:
```batch  
"C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe" --disable-features=ExtensionManifestV2Unsupported,ExtensionManifestV2Disabled
```

Click **Apply** <Icon name="trending_flat"/> **OK**. From now on, always launch Brave using this shortcut.

:::warning <Icon name="info"/> Don't have a desktop shortcut?
Find **brave.exe** in <span style="color: #e6a030">C:\Program Files\BraveSoftware\Brave-Browser\Application\ </span>, right-click it <Icon name="trending_flat"/> Send to <Icon name="trending_flat"/> Desktop (create shortcut), then follow the steps above.
:::


### 2- Download the uBlock Origin MV2 .crx file

Go to the GitHub releases page and download the latest ```.crx``` file for uBlock Origin (not Lite).
```text
https://github.com/gorhill/uBlock/releases/latest
```

Look for a file named ```uBlock0_X.X.X.chromium.zip.``` and download it.


### 3- Extract the ZIP file

Unzip the downloaded file to a folder of your choice.

:::warning <Icon name="warning"/> Don't delete this folder!
Brave loads the extension directly from it. If you delete or move it, Brave will lose the extension and you'll have to re-add it. Store it somewhere stable like ```C:\Program Files``` or a dedicated folder in your Documents — somewhere you won't accidentally clean up during a storage purge.
:::

:::info <Icon name="folder_zip"  /> Don't have a zip program? Grab one of these — all free, all trusted:

<div style="display:flex;align-items:center;gap:5px;"><img src="https://cdn.worldvectorlogo.com/logos/7-zip.svg" width="22" /><span><b>7-Zip</b> — free, open source, handles everything</span><a href="https://7-zip.org/download.html" >7-zip.org</a></div>

<div style="display:flex;align-items:center;gap:5px;"><img src="https://i.imgur.com/eS4R4UK.png" width="20" /><span><b>WinRAR</b> — popular, free to use (perpetual trial)</span><a href="https://www.win-rar.com/download.html?&L=0" >win-rar.com</a></div>

<div style="display:flex;align-items:center;gap:5px;"><img src="https://i.imgur.com/xKqIkef.png" width="20" /><span><b>PeaZip</b> — free, open source, clean UI</span><a href="https://peazip.github.io/index.html" tagret="blank">peazip.github.io</a></div>

:::

### 4- Enable Developer Mode in Brave

Navigate to the extensions page and flip the switch.
```batch
brave://extensions
```
Toggle **Developer mode** ON (top right corner).


### 5- Load the Unpacked Extension

Click **"Load unpacked"** and select the folder you extracted in step 3. Make sure to select the inner folder that contains ```manifest.json```.


### 6- Pin and verify

Click the puzzle piece icon <Icon name="trending_flat"/> pin uBlock Origin. If you see the red shield, you're blocking. <Icon name="celebration" color='#2aa749' /> 


:::warning <Icon name="warning"/> Brave may disable sideloaded extensions after updates. You'll need to re-enable them from ```brave://extensions``` when that happens.
:::
