---
layout: post
title: Rboard Theme Manager V3
description: Gboard Themes for Android
image: /assets/images/Banner_Rboard.png
project: true
permalink: /projects/:title/
tags: Rboard Theme Manager Gboard Themes Google Morethemes Gboardkeyboard Keyboard Custom Themes
---
<span class="image main" ><img src="/assets/images/Banner_Rboard.png" style="border-radius: 24px;" alt="Rboard Theme Manager" /></span>

#### Info:
> Rboard Theme Manager V3 is a theme manager for the <a href="https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin" target="_blank">"Gboard - the Google Keyboard"</a>.<br>

#### Team:
<div class="container-fluid">
            <div class="column-rboard">
                  <div class="card">
                        <img class="card-image" src="https://avatars.githubusercontent.com/u/37804065?v=4" alt="DerTyp7214">
                        <div class="container-card">
                              <h4><b>DerTyp7214</b></h4>
                              <p>Lead Developer</p>
                              <ul class="icons actions card-button">
                                    <li>
                                          <a href="https://dertyp7214.de/" class="icon alt fa-globe" target="_blank" rel="noopener noreferrer" aria-label="Website">
                                                <span class="label">Website</span>
                                          </a>
                                    </li>
                                    <li>
                                          <a href="https://github.com/DerTyp7214" class="icon alt fa-github" target="_blank" rel="noopener noreferrer" aria-label="Github">
                                                <span class="label">Github</span>
                                          </a>
                                    </li>
                                    <li>
                                          <a href="https://www.linkedin.com/in/dertyp7214" class="icon alt fa-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                                <span class="label">LinkedIn</span>
                                          </a>
                                    </li>
                                    <li>
                                          <a href="https://twitter.com/DerTyp7214" class="icon alt fa-twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                                <span class="label">Twitter</span>
                                          </a>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </div>
            <div class="column-rboard">
                  <div class="card">
                        <img class="card-image" src="https://avatars.githubusercontent.com/u/131550765?v=4" alt="AkosPaha">
                        <div class="container-card">
                              <h4><b>Akos Paha</b></h4>
                              <p>Developer & Themer</p>
                              <ul class="icons actions card-button">
                                    {% for key_value in site.socials %}
                                          {% if key_value[1] %}
                                                <li>
                                                      <a href="{{ key_value[1] }}" class="icon alt fa-{{ key_value[0] | downcase }}" target="_blank" rel="noopener noreferrer" aria-label="{{ key_value[0] }}">
                                                            <span class="label">{{ key_value[0] }}</span>
                                                      </a>
                                                </li>
                                          {% endif %}
                                    {% endfor %}
                              </ul>
                        </div>
                  </div>
            </div>
            <div class="column-rboard">
                  <div class="card">
                        <img class="card-image" src="https://avatars.githubusercontent.com/u/22264125?v=4" alt="RadekBledowski">
                        <div class="container-card">
                              <h4><b>Radek Bledowski</b></h4>
                              <p>Owner & Themer</p>
                              <ul class="icons actions card-button">
                                    <li>
                                          <a href="https://dribbble.com/RKBDI" class="icon alt fa-dribbble" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                                                <span class="label">Dribbble</span>
                                          </a>
                                    </li>
                                    <li>
                                          <a href="https://github.com/RadekBledowski" class="icon alt fa-github" target="_blank" rel="noopener noreferrer" aria-label="Github">
                                                <span class="label">Github</span>
                                          </a>
                                    </li>
                                    <li>
                                          <a href="https://t.me/rkbdi" class="icon alt fa fa-paper-plane" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                                                <span class="label">Telegram</span>
                                          </a>
                                    </li>
                                    <li>
                                          <a href="https://twitter.com/RKBDI" class="icon alt fa-twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                                <span class="label">Twitter</span>
                                          </a>
                                    </li>
                              </ul>
                        </div>
                  </div>
      </div>
</div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

#### Introductions:

- Make sure you are using Magisk ROOTED Android 6.0+
- Download and Install the Rboard Theme Manager
- Grant root and choose option for Module/Gboard (Gboard option should be used in case the module one doesn't)
- Setting up the Rboard Theme Manager.
- After you done the setting up, Go to the middle button with the arrow down called download and pick the theme packs you want to download and then click fab button to install
- Apply Theme
- Enjoy

#### Features:

- Downloading themes
- Applying themes
- Deleting themes
- In-app app updater
- Light/Dark for system theme switch (Android 10 and above)
- Gboard flags import/export/edit
- Gboard preferences import/export/edit
- 3rd party theme repos support
- System Click sounds customization
- Theme/Sound preview
- Widgets
- Search for Themes/Sounds
- Module-less option (less features but will work on coloros)
- Monet and blur for Android 12+
- Exporting and importing themes

#### Known bugs:

- MIUI users have to reboot each time they download themes or do the same what Color OS does
Color OS, Realme OS needs to turn off "Use Magisk" in settings to get it working
- App won't work properly if you don't have connection to github
- Crashes on stock nubia rom
- Sounds doesn't work on non AOSP roms

#### Downloads:

<div class="container-fluid-download">
      <div class="column-rboard">
            <div class="card">
                  <div class="container-card">
                        <h4><b>Android 6 and Up</b></h4>
                        <img src="https://img.shields.io/github/v/release/DerTyp7214/RboardThemeManagerV3" style="padding-bottom: 1em; !important" alt="Android 6 and Up Version">
                        <ul class="actions card-button">
                              <li style="padding: 0 0 0 0 !important;"><a href="https://github.com/DerTyp7214/RboardThemeManagerV3/releases/latest-rCompatible" class="button special read-more" target="_blank" style="color: var(--btn-text) !important;">Download</a></li>
                        </ul>
                  </div>
            </div>
      </div>
      <div class="column-rboard">
             <div class="card">
                  <div class="container-card">
                        <h4><b>Android 12 and Up</b></h4>
                        <img src="https://img.shields.io/github/v/release/DerTyp7214/RboardThemeManagerV3" style="padding-bottom: 1em; !important"  alt="Android 12 and Up Version">
                        <ul class="actions card-button">
                              <li style="padding: 0 0 0 0 !important;"><a href="https://github.com/DerTyp7214/RboardThemeManagerV3/releases/latest" class="button special read-more" target="_blank" style="color: var(--btn-text) !important;">Download</a></li>
                        </ul>
                  </div>
            </div>
      </div>  
</div>

#### Links:

<ul class="actions" style="margin-bottom: 0 !important;">
      <li style="padding-bottom: 1em !important;"><a href="https://github.com/DerTyp7214/RboardThemeManagerV3" class="button" target="_blank">Github</a></li>
      <li style="padding-bottom: 1em !important;"><a href="https://rboard.dev/rboard" class="button" target="_blank">Website</a></li>
      <li style="padding-bottom: 1em !important;"><a href="https://forum.xda-developers.com/t/app-rboard-theme-manager.4331445/" class="button" target="_blank">XDA</a></li>
      <li style="padding-bottom: 1em !important;"><a href="https://t.me/rkbdigboard" class="button" target="_blank">Telegram Channel</a></li>
      <li style="padding-bottom: 1em !important;"><a href="https://t.me/gboardthemes" class="button" target="_blank">Telegram Group</a></li>
</ul>

<h4>License:</h4>
Licensed Under The GNU GPL version 3, For more info read <a target="_blank" href="">LICENSE</a>
