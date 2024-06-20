---
layout: page
title: Contact
nav-menu: true
description: Contact
image: /assets/images/og_image.png
---

<!-- Contact -->
<section id="contact">
  <div class="inner">
    <section>
    {% if site.home-about == false %}
                <header style="margin-top: -40px" class="major">
                    <h2>About</h2>
                </header>
                <p>{{ site.about-text }}</p>
    {% endif %}
    For any Questions, enquiries, Contact me via the form below or send me a direct email.<br/><br/>
      <form action="https://formspree.io/f/meqwwedl" method="POST">
        <div class="field half first">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" style="border-radius: 48px;"/>
        </div>
        <div class="field half">
          <label for="email">Email</label>
          <input type="text" name="_replyto" id="email" style="border-radius: 48px;" />
        </div>
        <div class="field">
          <label for="message">Message</label>
          <textarea name="message" id="message" rows="6" style="border-radius: 24px;"></textarea>
        </div>
        <ul class="actions">
          <li><input type="submit" value="Send Message" class="special" style="color: var(--btn-text) !important;"/></li>
          <li><input type="reset" value="Clear" /></li>
        </ul>
      </form>
    </section>
    <section class="split">
      <section>
        <div class="contact-method">
          <span class="icon alt fa-at"></span>
          <h3>Email</h3>
          <a href="mailto:{{ site.email }}">{{ site.email }}</a>
        </div>
      </section>
      <section>
        <div class="contact-method">
          <span class="icon alt fa-instagram"></span>
          <h3>Instagram</h3>
          <span><a href="{{ site.socials.Instagram }}">{{ site.socials.Instagram | split: '/' | last | capitalize }}</a></span>
        </div>
      </section>
      <section>
        <div class="contact-method">
          <span class="icon alt fa-location-dot"></span>
          <h3>Address</h3>
          <span>
            {% if site.street_address %}
            {{ site.street_address }}<br />
            {% endif %} {% if site.city %}
            {{ site.city }}, {% endif %} {% if site.state %}
            {{ site.state }}
            {% endif %} {% if site.zip_code %}
            {{ site.zip_code }}<br />
            {% endif %} {% if site.country %}
            {{ site.country }}
            {% endif %}
          </span>
        </div>
      </section>
    </section>

  </div>
</section>
