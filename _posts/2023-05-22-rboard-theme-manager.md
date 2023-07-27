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

<!-- <div class="container-rboard">
      <div class="image-rboard">
            <img src="/assets/images/rboard_app_3.png" data-position="center center"/>
      </div>
      <div class="text-rboard">
            <h1 style="margin-bottom: 1.5rem !important">Hundreds of Gboard themes</h1>
            <p>Rboard Theme Manager includes tens of theme packs and hundreds of beautiful unique Gboard themes from different theme creators.</p>
      <ul class="actions card-button">
            <li style="padding: 0 0 0 0 !important;"><a href="#rboard-downloads" class="button special read-more" style="color: var(--btn-text) !important;">Get Rboard</a></li>
      </ul>
      </div>  
</div> -->

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

<a id="rboard-downloads"></a>

#### Downloads:

<div class="site-wrapper">
      <section class="tabs-wrapper">
		<div class="tabs-container">
			<div class="tabs-block">
				<div class="tabs">
					<input type="radio" name="tabs" id="rboard-release" checked="checked" />
					<label for="rboard-release">Release Builds</label>
					<div class="tab">
						<div class="container-fluid-download">
                                          <div class="column-rboard">
                                                <div class="card">
                                                      <div class="container-card">
                                                      <h4><b>Android 6 and Up</b></h4>
                                                            <div id="rboardversion-a6-release" class="rboard-text">Latest Version: </div>
                                                            <ul class="actions card-button">
                                                                  <li style="padding: 0 0 0 0 !important;"><a href="https://github.com/DerTyp7214/RboardThemeManagerV3/releases/latest-rCompatible" class="button special read-more" target="_blank" style="color: var(--btn-text) !important;">A6+ Release</a></li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>
                                          <div class="column-rboard">
                                                <div class="card">
                                                      <div class="container-card">
                                                            <h4><b>Android 12 and Up</b></h4>
                                                            <div id="rboardversion-a12-release" class="rboard-text">Latest Version: </div>
                                                            <ul class="actions card-button">
                                                                  <li style="padding: 0 0 0 0 !important;"><a href="https://github.com/DerTyp7214/RboardThemeManagerV3/releases/latest" class="button special read-more" target="_blank" style="color: var(--btn-text) !important;">A12+ Release</a></li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>  
                                    </div>
					</div>
					<input type="radio" name="tabs" id="rboard-debug" />
					<label for="rboard-debug">Debug Builds</label>
					<div class="tab">
						<div class="container-fluid-download">
                                          <div class="column-rboard">
                                                <div class="card">                                                                  
                                                      <div class="container-card">
                                                            <h4><b>Android 6 and Up</b></h4>
                                                            <div id="rboardversion-a6-debug" class="rboard-text">Latest Version: </div>
                                                                  <ul class="actions card-button">
                                                                        <li style="padding: 0 0 0 0 !important;"><a href="https://github.com/DerTyp7214/RboardThemeManagerV3/releases/latest-rCompatible-debug" class="button special read-more" target="_blank" style="color: var(--btn-text) !important;">A6+ Debug</a></li>
                                                                  </ul>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div class="column-rboard">
                                                      <div class="card">
                                                            <div class="container-card">
                                                                  <h4><b>Android 12 and Up</b></h4>
                                                                  <div id="rboardversion-a12-debug" class="rboard-text">Latest Version: </div>
                                                                  <ul class="actions card-button">
                                                                        <li style="padding: 0 0 0 0 !important;"><a href="https://github.com/DerTyp7214/RboardThemeManagerV3/releases/latest-debug" class="button special read-more" target="_blank" style="color: var(--btn-text) !important;">A12+ Debug</a></li>
                                                                  </ul>
                                                            </div>
                                                      </div>
                                                </div>                                               
                                          </div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>

#### Frequently Asked Questions:
<div class="faq-container">
      <details class="faq-box">
        <summary class="faq-header">
          What can I do if my Gboard Flags are not working?
        </summary>
        <div class="faq-content">
          <p>
            In principle, in some way the flags can be fixed again in the usual way from <a href="#rboard-downloads">Rboard Theme Manager V3</a> if necessary.<br>
            The simple steps are:
            <ul>
                  <li>Clear Gboard Data</li>
                  <li>Open Rboard Setting and Click "Fix Flags"</li>
                  <li>Go back and open "Gboard Flags" option</li>
                  <li>Change one of the flags</li>
                  <li>Go back and Open Rboard Settings again</li>
                  <li>Click "Copy flags"</li>
                  <li>Go back open Gboard Flags option and scroll down, open "All flags" (Only required if you are not using the latest <a href="#rboard-downloads">Rboard Theme Manager V3 Debug</a> version).</li>
                  <li>Edit crowdsource_uri and change it to blank (Only required if you are not using the latest <a href="#rboard-downloads">Rboard Theme Manager V3 Debug</a> version).</li>
                  <li>Go back and after that, any flag will work normallyIt should work with the latest Beta (And a couple of beta versions before it).</li>
            </ul>
          </p>
        </div>
      </details>
      <details class="faq-box">
        <summary class="faq-header">
          What can I do if the theme cannot be used on MIUI and other devices after downloading?
        </summary>
        <div class="faq-content">
          <p>
            MIUI users have to reboot each time they download themes or do the same what Color OS does Color OS, Realme OS needs to turn off “Use Magisk” in settings to get it working
          </p>
        </div>
      </details>
      <details class="faq-box">
        <summary class="faq-header">
          What can I do if the bottom of the keyboard is rounded?
        </summary>
        <div class="faq-content">
          <p>
            Remove from /system/build.prop (or somewhere else on color os) line line with <strong>ro.com.google.ime.corner_key_r</strong> or remove module from manager if you installed it.
          </p>
        </div>
      </details>
      <details class="faq-box">
        <summary class="faq-header">
          What can I do if Rboard Theme Manager V3 only loading and is empty and does not load or the themes do not appear?
        </summary>
        <div class="faq-content">
          <p>
            If you have problem with Rboard Theme Manager V3 not loading use VPN.
            <a href="https://twitter.com/squeal/status/1609515053237309448" targat="_blank">India blocked GitHub</a> and Gitlab and this is where we are hosting everything Rboard related.
          </p>
        </div>
      </details>
      <details class="faq-box">
        <summary class="faq-header">
          What can I do if the custom keyboard sounds don't work?
        </summary>
        <div class="faq-content">
          <p>
            Custom keyboard sounds are only for AOSP based ROMs.
          </p>
        </div>
      </details>
</div>

#### Links:

<ul class="actions" style="margin-bottom: 0 !important; ">

      <li style="padding-bottom: 1em !important;"><a href="https://github.com/DerTyp7214/RboardThemeManagerV3" class="button" target="_blank">Github</a></li>
      <li style="padding-bottom: 1em !important;"><a href="https://rboard.dev/rboard" class="button" target="_blank">Website</a></li>
      <li style="padding-bottom: 1em !important;"><a href="https://forum.xda-developers.com/t/app-rboard-theme-manager.4331445/" class="button" target="_blank">XDA</a></li>
      <li style="padding-bottom: 1em !important;"><a href="https://t.me/rkbdigboard" class="button" target="_blank">Telegram Channel</a></li>
      <li style="padding-bottom: 1em !important;"><a href="https://t.me/gboardthemes" class="button" target="_blank">Telegram Group</a></li>

</ul>

<h4>License:</h4>
Licensed Under The GNU GPL version 3, For more info read <a target="_blank" href="">LICENSE</a>
