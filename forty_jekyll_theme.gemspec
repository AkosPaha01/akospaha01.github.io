# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "forty_jekyll_theme"
  spec.version       = "1.2"
  spec.authors       = ["Andrew Banchich"]
  spec.email         = ["andrewbanchich@gmail.com"]

  spec.summary       = %q{A Jekyll version of the "Forty" theme by HTML5 UP.}
  spec.homepage      = "https://andrewbanchich.github.io/forty-jekyll-theme/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }
  
  spec.add_development_dependency "liquid", "~> 5.8.7"
  spec.add_development_dependency "logger", '~> 1.7.0'
  spec.add_development_dependency "base64", '~> 0.2.0'
  spec.add_development_dependency "csv", '~> 3.3.5'
  spec.add_development_dependency "safe_yaml", "~> 1.0.5"
  spec.add_development_dependency "jekyll", "~> 4.4.1"
  spec.add_development_dependency "bundler", "~> 2.6.9"
end
